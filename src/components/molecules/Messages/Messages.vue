<template>
  <div class="flex flex-col">
    <div class="mb-4">
      <h4 class="mb-2 font-semibold italic">Question:</h4>
      <div class="mb-2 text-sm">
        <span>{{ currentPrompt }}</span>
      </div>
    </div>
    <div>
      <h4 class="mb-2 font-semibold italic">Answers:</h4>
      <div v-for="(message, i) in messages" :key="i" class="mb-4 text-sm">
        <Message :message="message" />
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from "@atoms";
import { useChat } from "@composables";

export default {
  name: "Messages",

  props: {
    messages: {
      type: Array,
      default: () => [],
    },
  },

  setup(props, { emit }) {
    const { messages, currentPrompt } = useChat();
    return { messages, currentPrompt };
  },

  components: {
    Message,
  },
};
</script>
