const clickOutside = {
	mounted(el, binding) {
		const { value } = binding;
		const handler = (e) => {
			if (!el.contains(e.target) && el !== e.target) {
				value();
			}
		};
		el.__clickOutsideHandler__ = handler;
		setTimeout(() => {
			document.addEventListener("click", handler);
		}, 1);
	},
	beforeUnmount(el) {
		document.removeEventListener("click", el.__clickOutsideHandler__);
		el.__clickOutsideHandler__ = null;
	},
};

export default clickOutside;
