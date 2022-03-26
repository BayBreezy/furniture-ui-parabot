<template>
  <header
    class="xl:px-desktop lg:px-mobile px-mobile py-9 flex items-center justify-between mx-auto"
  >
    <h1 class="font-bold text-2xl dark:text-white">
      <nuxt-link to="/">Parabot</nuxt-link>
    </h1>
    <nav class="hidden lg:block">
      <ul class="flex items-center space-x-24">
        <li v-for="(n, i) in nav" :key="`navItem${i}`" class="group">
          <nuxt-link
            class="font-medium text-slate-600 group-hover:text-gray-900 dark:text-slate-200 dark:hover:text-slate-50"
            to="#"
            >{{ n.text }}</nuxt-link
          >
          <div
            :class="{ 'scale-y-100': i == 0 }"
            class="w-9/12 cursor-pointer scale-y-0 group-hover:scale-y-100 h-[2px] mt-1 bg-gray-900 transition-transform duration-300 dark:bg-white"
          ></div>
        </li>
      </ul>
    </nav>
    <div class="flex space-x-6">
      <svg-icon
        @click="toggleMode"
        :name="$colorMode.value == 'dark' ? 'sun' : 'moon'"
        class="w-6 h-6 cursor-pointer text-slate-600 hover:text-gray-900 transition-all dark:text-gray-200"
      />
      <svg-icon
        name="bag"
        class="w-6 h-6 cursor-pointer text-slate-600 hover:text-gray-900 transition-all dark:text-gray-200"
      />
      <svg-icon
        name="user"
        class="w-6 h-6 cursor-pointer text-slate-600 hover:text-gray-900 transition-all dark:text-gray-200"
      />
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    toggleMode() {
      switch (this.$colorMode.value) {
        case "dark":
          this.$colorMode.preference = "light";
          break;
        case "light":
          this.$colorMode.preference = "dark";
          break;

        default:
          break;
      }
    },
  },
  data() {
    return {
      nav: [
        { text: "Home", link: "#" },
        { text: "Products", link: "#" },
        { text: "Collections", link: "#" },
      ],
    };
  },
};
</script>

<style></style>
