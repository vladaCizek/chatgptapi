import { ref } from "vue";

export default function useCompletionSettingsModal() {
	const showCompletionSettingsModal = ref(false);

	function closeCompletionSettingsModal() {
		showCompletionSettingsModal.value = false;
	}

	return {
		showCompletionSettingsModal,
		closeCompletionSettingsModal,
	};
}
