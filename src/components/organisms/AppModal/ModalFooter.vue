<template>
  <footer class="flex items-center justify-end gap-x-2 p-4 bg-gray-100">
    <app-button
      v-if="showConfirm"
      color="light-gray"
      :text="confirmText || 'Confirm'"
    />
    <app-button v-if="showClose" text="Close" color="gray" @click="onClose" />
  </footer>
</template>

<script>
export default {
  name: "ModalFooter",

  props: {
    confirmText: String,
    showClose: Boolean,
    showConfirm: Boolean,
  },

  setup(props, { emit }) {
    const showClose = props.showClose;
    const showConfirm = props.showConfirm;

    function onClose() {
      emit("onClose");
    }

    return {
      showClose,
      showConfirm,
      onClose,
    };
  },
};
</script>
