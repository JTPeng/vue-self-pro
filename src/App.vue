<template>
  <div>
    <FooterGuide v-show="$route.meta.isShowFooter"/>
    <router-view></router-view>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
export default {
  components: { FooterGuide }
};
</script>

<style scoped></style>