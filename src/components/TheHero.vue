<template>
  <main>
    <section class="flex h-screen flex-col bg-yellow-200 pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1 border border-blue-700">1 coll</div>
        <div class="col-span-5 col-start-2 border border-blue-700">
          <theHeadLine />
        </div>
        <div class="col-span-5 col-start-7 border border-blue-700">3 coll</div>
        <div class="col-span-1 col-start-12 border border-blue-700">4 coll</div>
      </div>
    </section>
  </main>
</template>

<script>
import TheHeadLine from "@/components/TheHeadline.vue";

export default {
  name: "TheHero",
  components: {
    TheHeadLine,
  },
};
</script>
