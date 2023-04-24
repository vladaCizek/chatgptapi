<template>
  <app-modal
    title="Completion Settings:"
    :showClose="true"
    :showConfirm="true"
    confirmText="Reset"
    @close="close"
  >
    <CompletionSettingsForm />
  </app-modal>
</template>

<script>
import { CompletionSettingsForm } from "@organisms";

export default {
  name: "CompletionSettingsModal",

  props: {
    isOpen: Boolean,
  },

  setup(props, { emit }) {
    function close() {
      emit("onClose");
    }

    return {
      close,
    };
  },

  components: {
    CompletionSettingsForm,
  },
};
</script>
