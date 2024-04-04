<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
      <div
        class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8"
      >
        <!-- We can bind atributtes with v-bind or just : -->
        <a
          class="flex h-full items-center text-xl"
          :href="url"
          target="_blank"
          >{{ company }}</a
        >
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="fis ml-9 h-full first:ml-0"
            >
              <a href="/#" class="flex h-full items-center py-2.5">{{
                menuItem
              }}</a>
            </li>
          </ul>
        </nav>

        <div class="ml-auto flex h-full items-center">
          <ProfileImage class="hover:scale-125" v-if="IsLoggedIn" />
          <ActionButton
            v-else
            text="Sign In"
            type="primary"
            @click="loginUser"
          />
        </div>
      </div>
      <the-subnav v-if="IsLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";
import TheSubnav from "@/components/TheSubnav.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    TheSubnav,
  },
  data() {
    return {
      company: "MoMo Careers",
      url: "https://careers.google.com",
      menuItems: [
        "Teams",
        "Locations",
        "Life at MoMo Careers",
        "How we hire",
        "Students",
        "Jobs",
      ],
      IsLoggedIn: false,
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.IsLoggedIn, // if not logg id add 64px
        "h-32": this.IsLoggedIn, //if is loged id add 128px
      };
    },
  },
  methods: {
    loginUser() {
      this.IsLoggedIn = !this.IsLoggedIn;
    },
  },
};
</script>
