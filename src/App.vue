<template>
  <CompletionSettingsModal
    v-if="showCompletionSettingsModal"
    @closeModal="closeCompletionSettingsModal"
  />
  <div class="container mx-auto px-4">
    <PromptHeading @openSettingsModal="openSettingsModal" />
    <main>
      <PromptBody class="mb-4" />
      <ChatError v-if="hasErrors" :errorDetails="errorDetails" />
      <Messages v-else />
    </main>
  </div>
</template>

<script>
import {
  PromptHeading,
  PromptBody,
  Messages,
  ChatError,
} from "./components/molecules";
import { CompletionSettingsModal } from "@organisms";
import useCompletionSettingsModal from "@composables/modals/useCompletionSettingsModal";
import { useChat } from "@composables";

export default {
  name: "App",

  setup(props, { emit }) {
    const { errorDetails, hasErrors } = useChat();
    const { showCompletionSettingsModal, closeCompletionSettingsModal } =
      useCompletionSettingsModal();

    function openSettingsModal(modal) {
      if (["completion", "chat"].includes(modal)) {
        if (modal === "completion") {
          showCompletionSettingsModal.value = true;
        }
      } else {
        console.warn(`The modal: ${modal} does not exist`);
      }
    }

    return {
      showCompletionSettingsModal,
      closeCompletionSettingsModal,
      openSettingsModal,
      errorDetails,
      hasErrors,
    };
  },

  components: {
    CompletionSettingsModal,
    PromptBody,
    PromptHeading,
    Messages,
    ChatError,
  },
};
</script>
