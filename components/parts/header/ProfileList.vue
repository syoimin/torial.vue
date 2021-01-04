<template>
  <a href="#" :class="isMobile ? mobileClass : pcClass" role="menuitem">
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
  data() {
    return {
      pcClass: 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100',
      mobileClass:
        'block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700',
    }
  },
}
</script>
