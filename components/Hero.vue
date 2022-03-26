<template>
  <section
    id="hero"
    class="min-h-[85vh] px-mobile xl:pl-desktop flex items-center space-x-8 bg-[url('/bg.png')] bg-no-repeat bg-cover"
  >
    <div class="h-full w-full md:max-w-[600px] xl:min-w-[500px]">
      <h1 data-aos="fade-down" class="text-7xl font-bold dark:text-slate-50">
        Future <br />
        of furniture
      </h1>
      <p
        data-aos="fade"
        data-aos-delay="400"
        class="mt-7 text-gray-500 dark:text-slate-400"
      >
        Find an elegant and luxurious interior <br />designed by a professional
        interior designer.
      </p>
      <form data-aos="fade" data-aos-delay="400" @submit.prevent="">
        <div class="w-full lg:w-auto mt-7 flex">
          <input
            type="search"
            placeholder="Search your product here..."
            class="w-full border border-gray-500 py-4 px-3 outline-none dark:border-white"
          />

          <button
            type="submit"
            class="bg-black text-white px-7 py-2 border border-transparent hover:border-slate-900 hover:text-slate-900 font-medium transition-all duration-300 hover:bg-white"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
