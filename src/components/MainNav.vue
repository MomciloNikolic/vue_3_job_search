<template>
  <header class="w-full text-sm">
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
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
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
    };
  },
};
</script>
