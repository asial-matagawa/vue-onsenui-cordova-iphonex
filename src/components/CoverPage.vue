<template>
  <v-ons-page>
    <div class="background" style="background-color: white;"></div>
    <div class="content">
      <div
        style="width: 100%; height: 100%;"
        @click="startApp"
      >
        <img
          src="../assets/logo.png"
          style="
            position: absolute;
            margin: auto;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          "
        >
      </div>
    </div>
  </v-ons-page>
</template>

<script>
export default {
  methods: {
    startApp() {
      this.$emit('pop-page');
    },
  },
};
</script>

<style>
</style>
