<template>
  <label class="flex flex-col mb-4" :class="[sizeClass]">
    <span class="mb-1 ml-2 text-gray-600">{{ label }}</span>
    <input
      :type="type"
      :class="inputClass"
      :value="modelValue"
      @input="handleChange"
      :min="min"
      :max="max"
      :step="step"
    />
  </label>
</template>
<script>
import sizeMixin from "@mixins/sizeMixin.js";
export default {
  name: "AppInput",
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      required: true,
    },
    type: {
      type: String,
      default: "text",
      validator: (value) =>
        ["text", "password", "email", "number"].includes(value),
    },
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
    step: {
      type: Number,
      default: 1,
    },
    inputClass: {
      type: String,
      default: "rounded-xl border-gray-600",
    },
  },
  mixins: [sizeMixin],
  setup(props, { emit }) {
    function handleChange(event) {
      let value = event.target.value;

      if (props.type === "number") {
        value = parseFloat(value);

        if (isNaN(value)) {
          value = null;
        } else if (props.min !== undefined && value < props.min) {
          value = props.min;
        } else if (props.max !== undefined && value > props.max) {
          value = props.max;
        }
      }

      emit("update:modelValue", value);
    }

    return {
      handleChange,
    };
  },
};
</script>
