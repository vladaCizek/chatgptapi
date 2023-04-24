<template>
  <div class="text-red-600 text-xs">
    <p class="text-red-500 font-bold">Warning: {{ errorDetails.message }}</p>
    <ul v-if="errorDetails.status">
      <li>HTTP status code: {{ errorDetails.status }}</li>
    </ul>
    <ul v-if="errorDetails.data">
      <li>Response data:</li>
      <li>
        <p class="italic">{{ errorDetails.data }}</p>
      </li>
    </ul>
    <ul v-if="errorDetails.request">
      <li>Request details:</li>
      <li>Method: {{ errorDetails.request.method }}</li>
      <li>URL: {{ errorDetails.request.url }}</li>
      <li v-if="errorDetails.request.headers">Headers:</li>
      <li v-for="(value, key) in errorDetails.request.headers">
        {{ key }}: {{ value }}
      </li>
      <li v-if="errorDetails.request.data">
        <pre>{{ errorDetails.request.data }}</pre>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ChatError",
  props: {
    errorDetails: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
