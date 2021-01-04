<template>
  <div class="relative ...">
    <button
      id="user-menu"
      class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      aria-haspopup="true"
      type="button"
      @click="toggleOpen"
    >
      <span class="sr-only">Open user menu</span>
      <ProfileIcon />
    </button>

    <transition
      enter-active-class="transition ease-out duration-100 transform"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75 transform"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-show="isOpen"
        class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg"
      >
        <div
          class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu"
        >
          <ProfileList> プロフィール </ProfileList>
          <ProfileList> 設定 </ProfileList>
          <ProfileList> ログアウト </ProfileList>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ProfileList from '@/components/parts/header/ProfileList'
import ProfileIcon from '@/components/parts/header/ProfileIcon'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    ProfileList,
    ProfileIcon,
  },
  computed: {
    ...mapState(['isOpen']),
  },
  methods: {
    ...mapActions([
      // メニューの開閉切り替え
      'toggleOpen',
    ]),
  },
}
</script>
