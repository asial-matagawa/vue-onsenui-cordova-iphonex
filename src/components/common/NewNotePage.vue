<template>
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
</template>

<script>
export default {
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
};
</script>

<style>
</style>
