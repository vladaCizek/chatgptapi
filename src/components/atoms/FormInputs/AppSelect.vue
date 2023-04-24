<template>
  <label class="flex flex-col" :class="[sizeClass]">
    <span v-if="label" :class="labelClass">{{ label }}</span>
    <select
      :class="[selectClass, sizeClass]"
      :value="modelValue"
      @input="handleChange"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </label>
</template>

<script>
import sizeMixin from "@mixins/sizeMixin.js";
export default {
  name: "AppSelect",
  props: {
    label: {
      type: String,
    },
    labelClass: {
      type: String,
      default: "mb-1 ml-2 text-gray-600",
    },
    modelValue: {
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    selectClass: {
      type: String,
      default: "rounded-xl border-gray-600",
    },
  },
  mixins: [sizeMixin],
  setup(props, { emit }) {
    const handleChange = (event) => {
      emit("update:modelValue", event.target.value);
    };

    return {
      handleChange,
    };
  },
};
</script>
