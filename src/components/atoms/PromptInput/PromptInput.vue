<template>
  <div class="relative flex flex-col">
    <div class="absolute flex items-center h-full left-0">
      <BrainIcon
        v-if="!showModelOptions"
        class="fill-gray-400 ml-3"
        @click="toggleShowModelOptions"
      />
      <app-select v-else v-model="settings.model" :options="completionModels" />
    </div>
    <input
      id="promptInput"
      class="rounded-xl text-stone-800 pl-10"
      :class="[
        sizeClass,
        { 'pl-48': showModelOptions },
        { 'bg-gray-50 text-gray-300 cursor-progress': disabled },
      ]"
      type="text"
      :value="value"
      :disabled="disabled"
      @focus="onFocus"
    />
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import BrainIcon from "@atoms/Icons/BrainIcon.vue";
import { completionModels } from "@constants/completions";
import { useCompletionSettings } from "@composables";
import sizeMixin from "@mixins/sizeMixin.js";

export default {
  name: "PromptInput",
  emits: ["onFocus"],
  props: {
    value: {
      type: String,
      required: true,
    },
    disabled: Boolean,
  },
  mixins: [sizeMixin],
  setup(props, { emit }) {
    const showModelOptions = ref(false);
    const { settings } = useCompletionSettings();
    const model = computed(() => settings.model);

    function toggleShowModelOptions() {
      showModelOptions.value = !showModelOptions.value;
    }

    function onFocus() {
      emit("onFocus");
    }

    watch(model, (newVal) => {
      if (newVal) showModelOptions.value = false;
    });

    return {
      completionModels,
      settings,
      showModelOptions,
      toggleShowModelOptions,
      onFocus,
    };
  },
  components: {
    BrainIcon,
  },
};
</script>
