<template>
  <div>
    <client-only>
      <VueSlickCarousel class="relative" v-bind="slideOptions">
        <template v-for="(c, i) in products">
          <div class="pr-7 relative cursor-pointer" :key="`product${i}`">
            <img :src="c.image" alt="" class="w-full h-[350px] object-cover" />
            <button
              class="inline-block absolute bottom-7 left-1/2 -translate-x-1/2 px-10 py-3 bg-black text-white border border-black hover:bg-white hover:text-black transition-all duration-300"
            >
              {{ c.text }}
            </button>
          </div>
        </template>
        <template #nextArrow>
          <svg-icon name="arr-right" class="w-5 h-5 text-slate-600"></svg-icon>
        </template>
        <template #prevArrow>
          <svg-icon
            name="arr-left"
            class="w-5 h-5 text-slate-600 z-20"
          ></svg-icon>
        </template>
      </VueSlickCarousel>
    </client-only>
  </div>
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
      products: [
        {
          text: "Chairs",
          image: "/chairs.jpg",
        },
        {
          text: "Tables",
          image: "/tables.jpg",
        },
        {
          text: "Sofas",
          image: "/sofa.jpg",
        },
        {
          text: "Stools",
          image: "/stool.jpg",
        },
      ],
      slideOptions: {
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "15px",
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnFocus: true,
        speed: 800,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              arrows: true,
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
};
</script>
<style lang="css" scoped>
.slick-prev::before,
.slick-next::before {
  content: "" !important;
}
.slick-prev,
.slick-next {
  background: white !important;
  color: black !important;
  height: 60px !important;
  width: 60px !important;
  border-radius: 100% !important;
  padding: 15px !important;
}
</style>
