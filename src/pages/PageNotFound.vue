<template>
  <div class="flex items-center justify-center min-h-full text-center">
    <div class="-mt-24">
      <h1 class="font-bold text-4xl">Page not found</h1>
      <ul class="flex flex-col divide-y leading-6">
        <li v-for="(link, index) in links" :key="index">
          <router-link
            :to="link.to"
            class="inline-block p-4 hover:text-pink-600"
            >{{ link.label }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
  setup() {
    const links = [
      { to: "/", label: "home" },
      { to: "/chat", label: "chat" },
      { to: "/completion", label: "completion" },
    ];

    return {
      links,
    };
  },
};
</script>
