export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  generate: {
    fallback: true,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Furniture Store",
    titleTemplate: "%s | Parabot",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "The future of furniture",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/postcss8", "@nuxtjs/svg-sprite", "@nuxtjs/color-mode"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    ["vue-scrollto/nuxt", { duration: 300 }],
  ],

  //Color mode config
  colorMode: {
    classSuffix: "",
  },
  // SVG config
  svgSprite: {
    input: "~/assets/icons/",
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      name: "Furniture Store",
      author: "Behon Baker",
      description: "The future of furniture",
      theme_color: "#000000",
      ogTitle: "Furniture Store",
      twitterCard: "summary_large_image",
      twitterCreator: "@iAm_BayBreezy",
    },
    manifest: {
      lang: "en",
      name: "Furniture Store",
      short_name: "Parabot",
      description: "The future of furniture",
      theme_color: "#000000",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
