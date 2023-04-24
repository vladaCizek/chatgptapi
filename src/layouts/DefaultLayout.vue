<template>
  <div class="flex flex-col h-full">
    <PromptHeading />
    <slot />
    <AppFooter class="mt-auto px-4 py-2 text-xs text-center" />
  </div>
</template>

<script>
import { PromptHeading, AppFooter } from "@molecules";

export default {
  name: "DefaultLayout",
  setup() {
    return {};
  },

  components: {
    PromptHeading,
    AppFooter,
  },
};
</script>
>
