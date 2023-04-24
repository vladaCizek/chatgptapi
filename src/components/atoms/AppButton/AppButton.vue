<!-- Button.vue -->
<template>
  <button
    class="flex items-center px-4 py-3 rounded-xl"
    :class="[classes, sizeClass]"
    @click="onClick"
  >
    <slot name="icon-left">
      <SpinnerIcon v-if="loading" class="mr-2" :class="loadingClass" />
    </slot>
    <slot>
      <span>{{ text }}</span>
    </slot>
    <slot name="icon-right" />
  </button>
</template>

<script>
import { defineComponent, computed } from "vue";
import { SpinnerIcon } from "@atoms";
import sizeMixin from "@mixins/sizeMixin.js";

export default defineComponent({
  name: "AppButton",
  props: {
    text: {
      type: String,
      default: "Submit",
    },
    size: {
      type: String,
      default: "medium",
      validator: (value) => {
        return ["small", "medium", "large"].includes(value);
      },
    },
    color: {
      type: String,
      default: "blue",
    },
    loading: Boolean,
    disabled: Boolean,
  },
  mixins: [sizeMixin],
  emits: ["click"],
  setup(props, { emit }) {
    const colorClasses = {
      blue: {
        text: "text-white",
        bg: "bg-blue-500",
        hover: "hover:bg-blue-600",
        focus: "focus:bg-blue-700",
        fill: "fill-white",
      },
      green: {
        text: "text-white",
        bg: "bg-green-500",
        hover: "hover:bg-green-600",
        focus: "focus:bg-green-700",
        fill: "fill-white",
      },
      red: {
        text: "text-white",
        bg: "bg-red-500",
        hover: "hover:bg-red-600",
        focus: "focus:bg-red-700",
        fill: "fill-white",
      },
      pink: {
        text: "text-white",
        bg: "bg-pink-600",
        hover: "hover:bg-pink-700",
        focus: "focus:bg-pink-700",
        fill: "fill-white",
      },
      gray: {
        text: "text-white",
        bg: "bg-gray-500",
        hover: "hover:bg-gray-600",
        focus: "focus:bg-gray-700",
        fill: "fill-white",
      },
      "light-gray": {
        text: "text-gray-800",
        bg: "bg-gray-200",
        hover: "hover:bg-gray-300",
        focus: "focus:bg-gray-400",
        fill: "fill-gray-800",
      },
      info: {
        text: "text-white",
        bg: "bg-blue-500",
        hover: "hover:bg-blue-600",
        focus: "focus:bg-blue-700",
        fill: "fill-white",
      },
      warning: {
        text: "text-white",
        bg: "bg-yellow-500",
        hover: "hover:bg-yellow-600",
        focus: "focus:bg-yellow-700",
        fill: "fill-white",
      },
      error: {
        text: "text-white",
        bg: "bg-red-500",
        hover: "hover:bg-red-600",
        focus: "focus:bg-red-700",
        fill: "fill-white",
      },
    };

    const classes = computed(() => {
      const { text, bg, hover, focus } =
        colorClasses[props.color] || colorClasses["blue"];

      return [
        `${text} ${bg} ${hover} ${focus}`,
        {
          "text-gray-400 cursor-not-allowed opacity-50": props.disabled,
        },
      ];
    });

    const loadingClass = computed(() => {
      const { fill } = colorClasses[props.color] || colorClasses["blue"];

      return [`${fill}`];
    });

    const onClick = () => {
      if (!props.disabled) {
        emit("click");
      }
    };

    return {
      classes,
      loadingClass,
      onClick,
    };
  },
  components: {
    SpinnerIcon,
  },
});
</script>
