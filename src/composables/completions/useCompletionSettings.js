import { reactive } from "vue";
import { completionSettings, completionModels } from "@constants/completions";
const settings = reactive({ ...completionSettings });

export default function useCompletionSettings() {
	return {
		settings,
		completionSettings,
	};
}
