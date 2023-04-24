<template>
  <header class="p-4 bg-gray-100 g-gray-100 select-none">
    <h4 class="font-thin text-lg text-gray-800">
      {{ title }}
    </h4>
  </header>
</template>

<script>
export default {
  name: "ModalHeader",

  props: {
    title: {
      type: String, // set the type of the prop to String
      required: true, // make the prop required
    },
  },

  setup(props, { emit }) {
    const { title = "" } = props;

    return {
      title,
    };
  },
};
</script>
