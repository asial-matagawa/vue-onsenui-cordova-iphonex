<template>
  <v-ons-page @show="$emit('change-animation', 'lift')">
    <v-ons-tabbar
      position="bottom"
      :tabs="tabs"
      animation="none"
      @push-page="$emit('push-page', $event)"
    />
  </v-ons-page>
</template>

<script>
import NotesPage from './tabs/NotesPage';

export default {
  data() {
    return {
      tabs: [
        {
          icon: 'fa-book',
          label: 'Notes',
          page: NotesPage,
        },
        {
          icon: 'fa-tag',
          label: 'Tags',
          page: {
            template: '<v-ons-page>Dummy</v-ons-page>',
          },
        },
        {
          icon: 'md-search',
          label: 'Search',
          page: {
            template: '<v-ons-page>Dummy</v-ons-page>',
          },
        },
        {
          icon: 'fa-bar-chart',
          label: 'Stats',
          page: {
            template: '<v-ons-page>Dummy</v-ons-page>',
          },
        },
        {
          icon: 'fa-ellipsis-h',
          label: 'More',
          page: {
            template: '<v-ons-page>Dummy</v-ons-page>',
          },
        },
      ],
    };
  },
};
</script>

<style>
</style>
