<template>
  <a
    href="#"
    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    :class="classObject"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classObject() {
      return {
        block: this.isMobile,
      }
    },
  },
}
</script>
