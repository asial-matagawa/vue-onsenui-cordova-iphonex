<template>
  <div id="app">
    <v-ons-page>
      <v-ons-navigator
        :page-stack="pageStack"
        :animation="animation"
        @push-page="pageStack.push($event)"
        @pop-page="pageStack.pop()"
        @change-animation="animation = $event"
      />
    </v-ons-page>
  </div>
</template>

<script>
import TabsPage from '@/components/TabsPage';
import CoverPage from '@/components/CoverPage';

export default {
  data() {
    return {
      pageStack: [
        TabsPage,
        CoverPage,
      ],
      animation: 'fade',
    };
  },
  beforeMount() {
    const html = document.documentElement;
    if (this.$ons.platform.isIPhoneX()) {
      html.setAttribute('onsflag-iphonex-portrait', '');
      html.setAttribute('onsflag-iphonex-landscape', '');
    }
  },
};
</script>

<style>
</style>
