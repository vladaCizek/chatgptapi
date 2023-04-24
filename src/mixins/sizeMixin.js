const sizeClasses = {
	xs: "text-xs",
	sm: "text-sm",
	base: "text-base",
	lg: "text-lg",
	xl: "text-xl",
	"2xl": "text-2xl",
	"3xl": "text-3xl",
	"4xl": "text-4xl",
	"5xl": "text-5xl",
	"6xl": "text-6xl",
	"7xl": "text-7xl",
	"8xl": "text-8xl",
	"9xl": "text-9xl",
};

const sizeProps = {
	fontSize: {
		type: String,
		default: "xs",
		validator: (value) => Object.keys(sizeClasses).includes(value),
	},
};

const SizeMixin = {
	props: sizeProps,
	computed: {
		sizeClass() {
			return this.fontSize ? sizeClasses[this.fontSize] : "";
		},
	},
};

export default SizeMixin;
