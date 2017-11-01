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
};
</script>

<style>
</style>
