<template>
  <form @submit.prevent="submitForm">
    <main class="p-4">
      <app-select
        label="Model Name:"
        class="mb-4"
        v-model="settings.model"
        :options="completionModels"
      />
      <app-input label="Suffix:" v-model="settings.suffix" />
      <app-input
        label="Max Tokens:"
        class="mb-4"
        type="number"
        :min="0"
        :max="4096"
        :step="1"
        v-model="settings.max_tokens"
      />
      <app-input
        label="Temperature:"
        class="mb-4"
        type="number"
        :min="0"
        :max="2"
        :step="1"
        v-model="settings.temperature"
      />
      <app-input
        label="Top P:"
        class="mb-4"
        type="number"
        v-model="settings.top_p"
        :min="0"
        :max="1"
        :step="0.1"
      />
      <app-input label="N:" type="number" v-model="settings.n" />
      <app-input
        label="Presence Penalty:"
        class="mb-4"
        type="number"
        :min="-2"
        :max="2"
        :step="0.1"
        v-model="settings.presence_penalty"
      />
      <app-input
        label="Frequency Penalty:"
        class="mb-4"
        type="number"
        :min="-2"
        :max="2"
        :step="0.1"
        v-model="settings.frequency_penalty"
      />
      <app-input
        label="Best Of:"
        class="mb-4"
        type="number"
        v-model="settings.best_of"
      />
      <app-input
        label="Logit Bias:"
        type="number"
        v-model="settings.logit_bias"
      />
    </main>
  </form>
</template>

<script>
import { completionModels } from "@constants/completions";
import { useCompletionSettings } from "@composables";

export default {
  name: "CompletionSettingsForm",

  setup(props, { emit }) {
    const { settings } = useCompletionSettings();

    return {
      settings,
      completionModels,
    };
  },
};
</script>
