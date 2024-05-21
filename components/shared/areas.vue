<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  isAboutPage?: boolean;
}>();

const areasClass = computed(() => {
  return props.isAboutPage ? "areas areas_about" : "areas";
});
</script>

<template>
  <h2 :class="areasClass">
    <span class="areas_responsive_sm"
      >Portrait&nbsp;/&nbsp;Love&Family&nbsp;/ Food&nbsp;/&nbsp;Animals&nbsp;/&nbsp;Outdoor</span
    >
    <span class="areas_responsive_lg"
      >Portrait&nbsp;/&nbsp;Love&Family&nbsp;/&nbsp;Food&nbsp;/ Animals&nbsp;/&nbsp;Outdoor</span
    >
  </h2>
</template>
