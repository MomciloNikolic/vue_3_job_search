<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    text: {
      // predefined syntax by VUE DEV TEAM
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
      // predefined syntax by VUE DEV TEAM
      // This is not requred option
      validator(value) {
        return ["primary", "secondary", "error"].includes(value);
      },
    },
  },
  computed: {
    buttonClass() {
      return {
        [this.type]: true,
      };
    },
  },
};
</script>

<style scoped>
button {
  @apply rounded px-5 py-3 font-medium;
}
.primary {
  @apply border-0 bg-brand-blue-1 text-white transition hover:shadow-blue;
}
.secondary {
  @apply bg-transparent text-brand-blue-1 hover:bg-brand-blue-2 hover:text-white;
}
.error {
  @apply bg-red-600 text-yellow-50 hover:bg-red-400 hover:text-indigo-900;
}
</style>
