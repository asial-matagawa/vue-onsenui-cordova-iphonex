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
          <v-ons-list-header>{{noteGroup.name}}</v-ons-list-header>
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
      this.$emit('push-page', { // defined as Vue component
        template: `
          <v-ons-page>
            <v-ons-toolbar>
              <div class="left">
                <v-ons-toolbar-button @click="$emit('pop-page')">
                  Cancel
                </v-ons-toolbar-button>
              </div>
              <div class="center">
                New Note
              </div>
              <div class="right">
                <v-ons-toolbar-button
                  style="font-weight: bold;"
                  @click="done()"
                >
                  Done
                </v-ons-toolbar-button>
              </div>
            </v-ons-toolbar>
            <div class="content">
              <v-ons-list style="margin-top: 17px;">
                <v-ons-list-item>
                  <div class="center" style="padding-top: 0; padding-bottom: 0;">
                    <v-ons-input type="text" placeholder="Title" style="width: 100%;" v-model="title"></v-ons-input>
                  </div>
                </v-ons-list-item>
                <v-ons-list-item>
                  <div class="center" style="padding-top: 0; padding-bottom: 0;">
                    <v-ons-input type="text" placeholder="Description" style="width: 100%;" v-model="description"></v-ons-input>
                  </div>
                </v-ons-list-item>
              </v-ons-list>
            </div>
          </v-ons-page>
        `,
        data() {
          return {
            title: '',
            description: '',
          };
        },
        methods: {
          done() {
            this.$store.commit('addNote', {
              title: this.title,
              description: this.description,
            });
            this.$emit('pop-page');
          },
        },
      });
    },
  },
};
</script>

<style>
</style>
