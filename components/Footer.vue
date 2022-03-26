<template>
  <footer class="pt-16 pb-10 bg-[#484543] dark:bg-dark-bg-lighten">
    <div
      class="text-white grid gap-y-5 pl-mobile lg:pl-0 grid-cols-1 xl:grid-cols-11"
    >
      <div class="xl:col-span-3 xl:col-start-2">
        <h1 class="text-4xl mb-10">Parabot</h1>
        <p class="text-gray-400 text-lg mb-16">
          625 E Franklin Ave, Minneapolis, <br />MN 55404, USA
        </p>
        <p class="text-gray-400 text-lg">
          &copy; {{ new Date().getFullYear() }} Parabot. All rights reserved.
        </p>
      </div>
      <div class="xl:col-span-1 xl:col-start-5">
        <h1 class="text-2xl mb-10">About</h1>
        <template v-for="a in about">
          <p
            :key="`about-${a}`"
            class="text-gray-400 text-lg mb-5 hover:text-white"
          >
            <nuxt-link to="#">{{ a }}</nuxt-link>
          </p>
        </template>
      </div>
      <div class="xl:col-span-1 xl:col-start-7">
        <h1 class="text-2xl mb-10">Support</h1>
        <template v-for="s in support">
          <p
            :key="`support-${s}`"
            class="text-gray-400 text-lg mb-5 hover:text-white"
          >
            <nuxt-link to="#">{{ s }}</nuxt-link>
          </p>
        </template>
      </div>
      <div class="xl:col-start-9 xl:col-span-full">
        <h1 class="text-2xl mb-10">Contact Us</h1>
        <div class="flex items-center space-x-4 mb-5">
          <svg-icon name="phone" class="w-4 h-4" />
          <a class="text-gray-400 text-lg" href="tel:26627221475">
            +2 662.722.1475
          </a>
        </div>
        <div class="flex items-center space-x-4 mb-10">
          <svg-icon name="email" class="w-5 h-5" />
          <a class="text-gray-400 text-lg" href="mailto:hello@parabotku.com">
            hello@parabotku.com
          </a>
        </div>
        <div class="flex items-center space-x-7 mb-10">
          <svg-icon name="facebook" class="w-7 h-7" />
          <svg-icon name="instagram" class="w-7 h-7" />
          <svg-icon name="twitter" class="w-7 h-7" />
        </div>
      </div>
    </div>
    <div class="w-full">
      <div
        class="my-5 text-center divide-x-2 flex justify-center items-center text-gray-400 divide-gray-400"
      >
        <nuxt-link class="px-2" to="#">Privacy Policy</nuxt-link>
        <nuxt-link class="px-2" to="#">Term Of Use</nuxt-link>
        <nuxt-link class="px-2" to="#">Calidornia Code</nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      about: ["Our Story", "Designer", "Craftsmanship", "Sustainability"],
      support: ["FAQ's", "Shipping & Returns", "Care guide", "Warranty"],
    };
  },
};
</script>

<style></style>
