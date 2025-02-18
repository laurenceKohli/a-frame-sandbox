<script setup>
  import { ref } from 'vue';

  import TheCameraRig from './TheCameraRig.vue';

  const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene
    background="color: black;"
  >

    <a-assets @loaded="allAssetsLoaded = true">
    </a-assets>

    <template v-if="allAssetsLoaded">
      <a-sphere position="0 0 -5"></a-sphere>
    </template>

    <TheCameraRig />

  </a-scene>
</template>