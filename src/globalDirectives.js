import { clickOutside } from "@directives";

export default {
	install(app) {
		app.directive("click-outside", clickOutside);
	},
};
