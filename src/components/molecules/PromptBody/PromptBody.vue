<template>
  <div class="flex items-center w-full">
    <PromptInput
      class="flex-grow"
      :value="prompt"
      @input="onUpdated"
      @onFocus="onFocus"
      :disabled="loading"
    />
    <app-button
      class="ml-2"
      color="pink"
      @click="onSubmit"
      :loading="loading"
    />
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated, watch } from "vue";
import { PromptInput, SpinnerIcon } from "@atoms";
import { useChat, useChoices } from "@composables";

export default {
  name: "PromptBody",
  setup() {
    const { selectedChoice } = useChoices();
    const {
      sendMessage,
      resetMesages,
      prompt,
      loading,
      hasErrors,
      resetErrors,
    } = useChat(selectedChoice);

    const onEnterKeyPressed = (event) => {
      if (event.key === "Enter" && prompt.value.trim() !== "") {
        onSubmit();
      }
    };

    // Add global keydown event listener
    onMounted(() => {
      document.addEventListener("keydown", onEnterKeyPressed);
    });

    // Remove global keydown event listener when component is unmounted
    onUnmounted(() => {
      document.removeEventListener("keydown", onEnterKeyPressed);
    });

    function onFocus() {
      if (hasErrors.value) {
        resetErrors();
      }
    }

    const onSubmit = () => {
      sendMessage(prompt.value);
    };

    const onUpdated = (event) => {
      prompt.value = event.target.value;
    };

    watch(selectedChoice, (newValue, oldValue) => {
      prompt.value = "";
      resetMesages();
    });

    return { prompt, onSubmit, onUpdated, onFocus, loading };
  },

  components: {
    PromptInput,
    SpinnerIcon,
  },
};
</script>
