<template>
  <div class="min-h-screen w-full pt-3 dark:bg-dark-bg">
    <Header />
    <main>
      <Hero />
      <br /><br /><br />
      <Features />
      <br /><br /><br />
      <Sets />
      <section class="xl:px-desktop px-mobile mt-36">
        <div
          class="flex xl:flex-row flex-col items-center justify-between mb-20 space-y-4"
        >
          <h1
            class="font-bold text-5xl dark:text-white text-center xl:text-left"
          >
            Shop by Product
          </h1>
          <p class="text-gray-400 text-center xl:text-right">
            We are solving the biggest problems in the furniture business.
            <br />You can easily search for what product you want
          </p>
        </div>
        <ProductSlider />
      </section>
      <Discover />
      <Reviews />
      <Newsletter />
      <button
        @click="$scrollTo('header', 1000, { easing: 'ease-in-out' })"
        class="fixed bottom-7 right-7 p-2 dark:bg-dark-bg rounded-full bg-white"
      >
        <svg-icon name="up" class="w-7 h-7 dark:text-white" />
      </button>
    </main>
    <Footer />
  </div>
</template>

<script>
import AOS from "~/mixins/aos";
export default {
  mixins: [AOS],
};
</script>
