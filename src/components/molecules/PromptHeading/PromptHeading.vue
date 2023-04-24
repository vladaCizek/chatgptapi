<template>
  <header class="flex items-center justify-center py-8 text-center select-none">
    <SettingsIcon
      class="w-8 fill-gray-400 hover:fill-gray-700"
      @click="openModal"
    />
    <h1 class="font-bold text-xl">ChatGPT API</h1>

    <div class="flex items-center divide-x">
      <div
        v-for="(choice, i) in choices"
        :key="i"
        class="px-2 py-2 cursor-pointer text-xs text-gray-600 hover:text-pink-600"
        :class="{ 'text-pink-600': choice.selected }"
        @click="selectChoice(choice)"
      >
        {{ choice.name }}
      </div>
    </div>
  </header>
</template>

<script>
import { SettingsIcon } from "@atoms";
import { useChoices } from "@composables";

export default {
  name: "PromptHeading",
  setup(props, { emit }) {
    const { choices, selectedChoice, selectChoice } = useChoices();

    function openModal() {
      const modal =
        selectedChoice?.value?.name === "completion" ? "completion" : "chat";
      emit("openSettingsModal", modal);
    }

    return {
      choices,
      selectChoice,
      selectedChoice,
      openModal,
    };
  },

  components: {
    SettingsIcon,
  },
};
</script>
