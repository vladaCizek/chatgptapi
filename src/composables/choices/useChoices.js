import { reactive, computed } from "vue";

const choices = reactive([
	{
		name: "completion",
		selected: true,
	},
	{
		name: "chat",
		selected: false,
	},
]);

export default function useChoices() {
	const selectedChoice = computed(() =>
		choices.find((choice) => choice.selected),
	);

	function selectChoice(newChoice) {
		const currentChoice = selectedChoice.value;
		if (currentChoice.name === newChoice.name) {
			// If the new choice is already selected, do nothing
			return;
		}

		const confirmed = window.confirm(
			`Are you sure you want to switch to ${newChoice.name}? You will loose the current conversation`,
		);
		if (confirmed) {
			choices.forEach((choice) => (choice.selected = false));
			const targetChoise = choices.find(
				(choice) => choice.name === newChoice.name,
			);
			if (targetChoise) {
				targetChoise.selected = true;
			}
		}
	}

	return {
		choices,
		selectedChoice,
		selectChoice,
	};
}
