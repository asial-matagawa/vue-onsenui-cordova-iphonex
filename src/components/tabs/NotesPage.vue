<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-toolbar-button>
          Edit
        </v-ons-toolbar-button>
      </div>
      <div class="center">
        <v-ons-segment style="width: 100%;">
          <div>All</div>
          <div>Favorites</div>
        </v-ons-segment>
      </div>
      <div class="right">
        <v-ons-toolbar-button @click="actionSheetVisible = true">
          <v-ons-icon icon="ion-plus" size="20px"></v-ons-icon>
        </v-ons-toolbar-button>
      </div>
    </v-ons-toolbar>
    <div class="content">
      <v-ons-list-title style="margin-top: 28px; margin-bottom: 3px;">NOTES</v-ons-list-title>
      <v-ons-list>
        <template v-for="noteGroup of noteGroups">
          <v-ons-list-header :key="noteGroup.name">{{noteGroup.name}}</v-ons-list-header>
          <v-ons-list-item v-for="note of noteGroup.notes" :key="note.title" tappable modifier="chevron">
            <div class="center">
              <div class="list-item__title">{{note.title}}</div>
              <div class="list-item__subtitle">{{note.description}}</div>
            </div>
          </v-ons-list-item>
        </template>
      </v-ons-list>
    </div>
    <v-ons-action-sheet
      :visible.sync="actionSheetVisible"
      cancelable
      title="Create new..."
    >
      <div class="action-sheet-mask" style="background-color: rgba(0, 0, 0, .3);"></div>
      <div class="action-sheet">
        <v-ons-action-sheet-button @click="showNewNotePage(); actionSheetVisible = false">Note</v-ons-action-sheet-button>
        <v-ons-action-sheet-button @click="actionSheetVisible = false">Cancel</v-ons-action-sheet-button>
      </div>
    </v-ons-action-sheet>
  </v-ons-page>
</template>

<script>
import NewNotePage from '@/components/common/NewNotePage';

export default {
  data() {
    return {
      actionSheetVisible: false,
    };
  },
  computed: {
    noteGroups: {
      get() {
        return this.$store.state.noteGroups;
      },
    },
  },
  methods: {
    showNewNotePage() {
      this.$emit('push-page', NewNotePage);
    },
  },
};
</script>

<style>
</style>
