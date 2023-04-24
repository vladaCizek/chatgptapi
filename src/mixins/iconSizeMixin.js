const iconSizeClasses = {
	xs: "w-4 h-4",
	sm: "w-6 h-6",
	md: "w-12 h-12",
	lg: "w-24 h-24",
	xl: "w-48 h-48",
};

const iconSizeProps = {
	size: {
		type: String,
		default: "xs",
		validator: (value) => Object.keys(iconSizeClasses).includes(value),
	},
};

const iconSizeMixin = {
	props: iconSizeProps,
	computed: {
		sizeClass() {
			return iconSizeClasses[this.size];
		},
	},
};

export default iconSizeMixin;
