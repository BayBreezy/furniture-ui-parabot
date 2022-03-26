<template>
  <div>
    <div
      @click="dialog = false"
      v-if="dialog"
      class="bg-black bg-opacity-40 fixed inset-0 h-full w-full overflow-y-auto cursor-pointer"
    ></div>
    <div
      v-if="dialog"
      class="border transition-all duration-300 rounded bg-white fixed mx-auto top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2"
    >
      <slot></slot>
      <div class="flex justify-between items-center p-3">
        <h1 class="font-semibold text-lg">Modal Title Here</h1>
        <svg-icon
          @click="dialog = false"
          name="close"
          class="w-5 h-5 text-gray-500 hover:text-red-600 cursor-pointer hover:rotate-[360deg] transition-all duration-300"
        />
      </div>
      <p class="p-3 text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        dignissimos ab reiciendis fugit sunt nisi odit corporis at, enim
        voluptate ipsa, perferendis natus laudantium asperiores vero autem
        quidem, id illum.
      </p>
      <div class="flex justify-end space-x-4 p-2">
        <button
          @click="dialog = false"
          class="py-2 px-3 text-sm transition-all duration-200 bg-gray-100 text-gray-500 rounded-sm hover:bg-gray-200 hover:text-gray-700"
        >
          Cancel
        </button>
        <button
          class="py-2 px-3 text-sm transition-all duration-200 bg-green-600 text-white rounded-sm hover:bg-green-800"
        >
          Proceed
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    dialog: {
      get() {
        return this.show;
      },
      set(v) {
        this.$emit("CloseModal", v);
      },
    },
  },
};
</script>

<style></style>
