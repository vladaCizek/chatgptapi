import AppButton from "@atoms/AppButton/AppButton.vue";
import AppModal from "@organisms/AppModal/AppModal.vue";
import AppInput from "@atoms/FormInputs/AppInput.vue";
import AppSelect from "@atoms/FormInputs/AppSelect.vue";

const GlobalComponents = {
	install(app) {
		app.component("app-button", AppButton);
		app.component("app-modal", AppModal);
		app.component("app-input", AppInput);
		app.component("app-select", AppSelect);
	},
};

export default GlobalComponents;
