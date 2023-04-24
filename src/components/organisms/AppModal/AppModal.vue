<template>
  <div class="fixed z-50 inset-0 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen px-4">
      <div
        class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
      ></div>

      <div
        v-click-outside="closeModal"
        class="relative z-10 w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-auto"
      >
        <CloseIcon
          class="block absolute right-1 top-2 w-10 fill-gray-400 hover:fill-gray-800"
          @click="closeModal"
        />
        <slot name="header">
          <ModalHeader :title="title" />
        </slot>

        <slot>
          <ModalBody />
        </slot>

        <div>
          <slot name="footer">
            <ModalFooter
              :showClose="showClose"
              :showConfirm="showConfirm"
              :confirmText="confirmText"
              @onClose="closeModal"
              @onConfirm="confirm"
            />
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalHeader from "./ModalHeader.vue";
import ModalBody from "./ModalBody.vue";
import ModalFooter from "./ModalFooter.vue";
import { CloseIcon } from "@atoms";

export default {
  name: "AppModal",
  props: {
    title: {
      type: String, // set the type of the prop to String
      required: true, // make the prop required
    },
    showClose: Boolean,
    showConfirm: Boolean,
    confirmText: String,
  },
  setup(props, { emit }) {
    const title = props.title;

    function closeModal() {
      emit("closeModal");
    }
    function confirm() {
      emit("confirm");
    }

    return {
      title,
      closeModal,
      confirm,
    };
  },

  components: {
    ModalHeader,
    ModalBody,
    ModalFooter,
    CloseIcon,
  },
};
</script>
