<template>
  <div class="app">
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

<style lang="stylus" rel="stylesheet/stylus" scoped>
.app
	width 100%
	height 100%
</style>