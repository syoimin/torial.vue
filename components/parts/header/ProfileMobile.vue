<template>
  <div class="md:hidden" :class="isOpen ? 'block' : 'hidden'">
    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <Menue :is-mobile="true"> 投稿 </Menue>
    </div>
    <div class="pt-4 pb-3 border-t border-gray-700">
      <div class="flex items-center px-5">
        <div class="flex-shrink-0">
          <img
            class="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div class="ml-3">
          <div class="text-base font-medium leading-none text-white">
            Tom Cook
          </div>
          <div class="text-sm font-medium leading-none text-gray-400">
            tom@example.com
          </div>
        </div>
        <Notification class-object="ml-auto" />
      </div>
      <div class="mt-3 px-2 space-y-1">
        <ProfileList :is-mobile="true"> プロフィール </ProfileList>
        <ProfileList :is-mobile="true"> 設定 </ProfileList>
        <ProfileList :is-mobile="true"> ログアウト </ProfileList>
      </div>
    </div>
  </div>
</template>

<script>
import Menue from '@/components/parts/header/Menue'
import ProfileList from '@/components/parts/header/ProfileList'
import Notification from '@/components/parts/header/Notification'
import { mapState, mapActions } from 'Vuex'

export default {
  components: {
    Menue,
    ProfileList,
    Notification,
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
