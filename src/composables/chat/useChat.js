import { ref, computed } from "vue";
import { createAxiosInstance } from "../../services/axiosInstance";
import { useCompletionSettings } from "@composables";
import { sanitizeFormData } from "@utils/form";

const axiosInstance = createAxiosInstance();
const loading = ref(false);
let messages = ref([]);
const errorDetails = ref(null);
const prompt = ref("");
const currentPrompt = ref("");

export default function useChat(selectedChoice = {}) {
	const { settings: currentCompletionSettings, completionSettings } =
		useCompletionSettings();

	const hasErrors = computed(() => errorDetails.value !== null);

	const sendMessage = async (message) => {
		try {
			if (selectedChoice.value === undefined) {
				return;
			}
			loading.value = true;
			const selectedChoiceName = selectedChoice.value?.name;

			if (selectedChoiceName === "chat") {
				return await sendChatMessage(message, settings);
			}

			if (selectedChoiceName === "completion") {
				return await sendCompletionMessage(message);
			}
		} catch (error) {
			console.error(error);
		} finally {
			loading.value = false;
		}
	};

	async function sendChatMessage(message, settings = {}) {
		console.warn("sending chat message");

		// try {
		// 	const response = await axiosInstance.post("/chat", {
		// 		model: "gpt-3.5-turbo",
		// 		messages: [{ role: "user", content: message }],
		// 	});
		// 	const { data } = response.data;
		// 	console.log("data: ", data);
		// 	messages.value.push({ from: "bot", data: data.choices[0].text });
		// } catch (error) {
		// 	console.error(error);
		// }
	}

	async function sendCompletionMessage(message) {
		console.warn("sending completion message: ", message);
		try {
			const formData = sanitizeFormData(
				currentCompletionSettings,
				completionSettings,
				["model"],
			);
			const response = await axiosInstance.post("/completion", {
				...formData,
				message,
			});
			const data = response.data;
			currentPrompt.value = prompt.value;
			prompt.value = "";
			messages.value = [];
			messages.value = data.choices;
			if (hasErrors) {
				resetErrors();
			}
		} catch (error) {
			parseError(error);
		}
	}

	function resetMesages() {
		messages = [];
	}

	function resetErrors() {
		errorDetails.value = null;
	}

	function parseError(error) {
		const { message, response, request } = error;
		errorDetails.value = {};
		if (response) {
			errorDetails.value.status = response.status;
			errorDetails.value.data = response.data;
			errorDetails.value.headers = response.headers;
		} else if (request) {
			errorDetails.value.message =
				"The request was made but no response was received.";
			errorDetails.value.request = request;
		} else {
			errorDetails.value.message = message || "Something went wrong.";
		}
	}

	return {
		messages,
		prompt,
		currentPrompt,
		errorDetails,
		loading,
		sendMessage,
		resetMesages,
		hasErrors,
		resetErrors,
	};
}
