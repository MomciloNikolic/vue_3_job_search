<template>
  <div class="h-16 w-full border-b border-solid border-brand-gray-1 bg-white">
    <div class="flex h-full items-center px-8">
      <div v-if="onJobResultPage">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span><span class="text-brand-green-1">1653</span> Jobs matched</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSubnav",
  data() {
    return {
      onJobResultPage: true,
    };
  },
};
</script>
