<template>
  <section
    class="xl:px-desktop px-mobile bg-[#F6F6F6] dark:bg-dark-bg-lighten pt-20 pb-20"
  >
    <div
      class="flex flex-col lg:flex-row items-center justify-between mb-20 space-y-6"
    >
      <h1 class="font-bold text-5xl dark:text-white lg:text-left text-center">
        Words from our customers
      </h1>
      <div class="flex space-x-2">
        <button
          @click="goPrev"
          class="group bg-white dark:hover:border-dark-bg dark:bg-dark-bg border p-3 rounded-full border-transparent transition-all duration-300 hover:border-gray-400"
        >
          <svg-icon
            name="arr-left"
            class="w-6 h-6 text-gray-500 dark:group-hover:text-white group-hover:text-gray-900 transition-all duration-300 dark:text-white"
          />
        </button>
        <button
          @click="goNext"
          class="group bg-white dark:hover:border-dark-bg dark:bg-dark-bg border p-3 rounded-full border-transparent transition-all duration-300 hover:border-gray-400"
        >
          <svg-icon
            name="arr-right"
            class="w-6 h-6 text-gray-500 dark:group-hover:text-white group-hover:text-gray-900 transition-all duration-300 dark:text-white"
          />
        </button>
      </div>
    </div>
    <client-only>
      <VueSlickCarousel ref="slider" v-bind="slideOptions">
        <template v-for="(r, i) in reviews">
          <div
            class="p-7 cursor-pointer border border-slate-400 rounded bg-transparent group hover:border-transparent hover:bg-white hover:shadow-lg transition-all duration-300"
            :key="`review${i}`"
          >
            <p class="text-3xl">
              {{ userRating(r.rating) }}
            </p>
            <p
              class="text-gray-500 dark:text-slate-300 dark:group-hover:text-slate-700 mt-10 mb-16"
            >
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores illo omnis in. Eos reiciendis quaerat nihil animi
              similique provident quisquam."
            </p>
            <div class="flex space-x-7">
              <img
                :src="r.image"
                alt=""
                class="rounded-full w-16 h-16 object-cover"
              />
              <div class="flex-1">
                <h2
                  class="text-2xl font-bold dark:text-white dark:group-hover:text-gray-900"
                >
                  {{ r.customer }}
                </h2>
                <p
                  class="text-gray-500 dark:text-slate-300 dark:group-hover:text-gray-500"
                >
                  {{ r.location }}
                </p>
              </div>
            </div>
          </div>
        </template>
        <template #nextArrow>
          <svg-icon name="arr-right" class="w-5 h-5 text-slate-600"></svg-icon>
        </template>
      </VueSlickCarousel>
    </client-only>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { VueSlickCarousel },
  data() {
    return {
      reviews: [
        {
          rating: 3,
          customer: "Nessi",
          location: "Brooklyn, NY",
          image: "https://randomuser.me/api/portraits/women/75.jpg",
        },
        {
          rating: 5,
          customer: "David",
          location: "Los Angeles, CA",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
        },
        {
          rating: 4,
          customer: "Jenny",
          location: "New York, NY",
          image: "https://randomuser.me/api/portraits/women/85.jpg",
        },
        {
          rating: 3,
          customer: "Jason",
          location: "Brooklyn, NY",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
        },
        {
          rating: 5,
          customer: "Kerry",
          location: "Florida, MIA",
          image: "https://randomuser.me/api/portraits/women/35.jpg",
        },
      ],
      slideOptions: {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnFocus: true,
        speed: 800,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              arrows: false,
              dots: false,
            },
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: true,
            },
          },
        ],
      },
    };
  },
  methods: {
    goNext() {
      this.$refs.slider.next();
    },
    goPrev() {
      this.$refs.slider.prev();
    },
    userRating(num) {
      let icon = "🙂";
      if (num == 1) icon = "😐";
      if (num == 2) icon = "🤔";
      if (num == 3) icon = "🙂";
      if (num == 4) icon = "🥰";
      if (num == 5) icon = "😍";
      return icon;
    },
  },
};
</script>

<style scoped>
* >>> .slick-slide {
  padding: 0 10px !important;
}

*::v-deep .slick-track {
  padding: 5px 0 !important;
}
</style>
