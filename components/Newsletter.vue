<template>
  <section class="py-44 px-mobile">
    <h1
      data-aos="fade-down"
      class="text-center font-medium text-4xl dark:text-white"
    >
      Join our newsletter for $10 off
    </h1>
    <p
      data-aos="fade-down"
      class="text-center my-7 text-gray-500 dark:text-gray-400"
    >
      We'll email you a voucher worth $10 off your first order over $50.
      <br />By subscribing you agree to our
      <nuxt-link to="#" class="underline">Terms & Conditions</nuxt-link> and our
      <nuxt-link to="#" class="underline">Privacy & Cookies Policy</nuxt-link>
    </p>
    <form data-aos="fade-up" @submit.prevent="">
      <div class="lg:max-w-[40%] mx-auto flex">
        <input
          type="email"
          required
          placeholder="Enter your email"
          class="w-full border border-gray-500 py-4 px-3 outline-none"
        />

        <button
          type="submit"
          class="bg-black dark:bg-dark-bg-lighten dark:hover:text-white dark:hover:bg-dark-bg text-white px-7 py-2 border border-transparent hover:border-slate-900 hover:text-slate-900 font-medium transition-all duration-300 hover:bg-white"
        >
          Subscribe
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
