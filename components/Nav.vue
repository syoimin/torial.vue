<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <Logo />
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <Menue> 投稿 </Menue>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <Notification />
            <Profile />
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <MenueMobile />
        </div>
      </div>
    </div>

    <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    -->
    <ProfileMobile />
  </nav>
</template>

<script>
import Logo from '@/components/parts/header/Logo'
import Menue from '@/components/parts/header/Menue'
import Notification from '@/components/parts/header/Notification'
import Profile from '@/components/parts/header/Profile'
import ProfileMobile from '@/components/parts/header/ProfileMobile'
import MenueMobile from '@/components/parts/header/MenueMobile'
export default {
  components: {
    Logo,
    Menue,
    Notification,
    Profile,
    ProfileMobile,
    MenueMobile,
  },
}
</script>
