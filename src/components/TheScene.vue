<script setup>
  import { ref } from 'vue';

  import TheCameraRig from './TheCameraRig.vue';
  import TheRoom from './TheRoom.vue';

  const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene
    background="color: black;"
  >

    <a-assets @loaded="allAssetsLoaded = true">
      <a-asset-item id="house-obj" src="./assets/models/isometric_low_poly_house.glb"></a-asset-item>
    </a-assets>

    <a-gltf-model position="0 -0.85 -7.9" scale="1.05 1.05 1.05" src="#house-obj"></a-gltf-model>

    <template v-if="allAssetsLoaded">
      <a-box color="red"></a-box>
      <TheRoom></TheRoom>
    </template>

    <TheCameraRig />

  </a-scene>
</template>