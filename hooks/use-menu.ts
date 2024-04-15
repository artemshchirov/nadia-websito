import { ref, watch } from "vue";

export function useMenu() {
  const isMenuOpen = ref(false);

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
  }

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "";
  };

  watch(isMenuOpen, (newVal) => {
    if (newVal) {
      disableScroll();
    } else {
      enableScroll();
    }
  });

  return { isMenuOpen, toggleMenu };
}
