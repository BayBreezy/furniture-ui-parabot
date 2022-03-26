<template>
  <div
    class="xl:px-desktop px-mobile bg-[#F6F6F6] lg:py-12 dark:bg-dark-bg-lighten pb-10"
  >
    <!-- Coffee Table -->
    <div class="flex lg:flex-row flex-col justify-between items-center">
      <div class="flex-1">
        <img src="/coffee-table.png" alt="" />
      </div>
      <div class="flex-1">
        <h1
          class="text-5xl text-center lg:text-left font-bold mb-11 dark:text-white"
        >
          The Coffee Table
        </h1>
        <p
          class="text-gray-500 mb-14 dark:text-slate-300 text-center lg:text-left"
        >
          The perfect companion for your sofa. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Rem illum similique molestias totam odio
          dolorem eius sed amet! Hic dignissimos sint eum quis blanditiis natus
          porro, sunt nihil aperiam non.
        </p>
        <div class="text-center lg:text-left">
          <nuxt-link
            data-aos="fade"
            to="#"
            class="py-4 px-10 font-medium dark:bg-white dark:text-black dark:border-white dark:hover:bg-transparent dark:hover:text-white bg-black text-white border border-black hover:bg-transparent hover:text-black transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-slate-400 dark:shadow-slate-700"
            >Shop Now</nuxt-link
          >
        </div>
      </div>
    </div>
    <br /><br />
    <!-- Shelve -->
    <div class="flex lg:flex-row flex-col-reverse justify-between items-center">
      <div class="flex-1">
        <h1
          class="text-5xl font-bold mb-11 dark:text-white text-center lg:text-left"
        >
          The Shelving System
        </h1>
        <p
          class="text-gray-500 mb-14 dark:text-slate-300 text-center lg:text-left"
        >
          The perfect companion for your sofa. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Rem illum similique molestias totam odio
          dolorem eius sed amet! Hic dignissimos sint eum quis blanditiis natus
          porro, sunt nihil aperiam non.
        </p>
        <div class="text-center lg:text-left">
          <nuxt-link
            data-aos="fade"
            to="#"
            class="py-4 px-10 font-medium dark:bg-white dark:text-black dark:border-white dark:hover:bg-transparent dark:hover:text-white bg-black text-white border border-black hover:bg-transparent hover:text-black transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-slate-400 dark:shadow-slate-700"
            >Shop Now</nuxt-link
          >
        </div>
      </div>
      <div class="flex-1 text-center mx-auto">
        <img src="/shelve.png" alt="" class="min-h-[500px]" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
