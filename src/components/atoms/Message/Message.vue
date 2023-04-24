<template>
  <div>
    <span v-html="message.text"></span>
  </div>
</template>

<script>
export default {
  name: "Messages",
  props: {
    message: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
