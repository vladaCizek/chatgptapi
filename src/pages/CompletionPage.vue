<template>
  <CompletionSettingsModal
    v-if="showCompletionSettingsModal"
    @closeModal="closeCompletionSettingsModal"
  />
  <DefaultLayout>
    <div></div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../layouts/DefaultLayout.vue";

export default {
  setup() {
    return {};
  },
  components: {
    DefaultLayout,
  },
};
</script>
