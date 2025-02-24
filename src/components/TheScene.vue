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
      <!--
       Title : "Isometric low poly house" 
       Model source : https://skfb.ly/6WQMC
       Model author : demolitionterminator 
       Model license : CC BY NC 4.0 http://creativecommons.org/licenses/by-nc/4.0/
      -->
      <a-asset-item id="house-obj" src="./assets/models/isometric_low_poly_house.glb"></a-asset-item>
      <!--
        Title : "low poly plstic duck"
        Model source : https://skfb.ly/oHIXt
        Model author : surnev.danya
        Model license : CC BY 4.0 http://creativecommons.org/licenses/by/4.0/
        -->
        <a-asset-item id="duck-obj" src="./assets/models/low_poly_plstic_duck.glb"></a-asset-item>
    </a-assets>

    <a-gltf-model position="0 -0.85 -7.9" scale="1.05 1.05 1.05" src="#house-obj"></a-gltf-model>
    <a-gltf-model position="-0.4 0.88 -0.92" scale="0.2 0.2 0.2" rotation="0 90 0" src="#duck-obj"
    clickable
      outline-on-event="color: yellow"
      simple-grab
    ></a-gltf-model>
    <a-gltf-model position="-0.4 0.88 -4" scale="0.2 0.2 0.2" rotation="0 90 0" src="#duck-obj"></a-gltf-model>
    <a-gltf-model position="0.4 0.52 -1.92" scale="0.2 0.2 0.2" rotation="0 90 0" src="#duck-obj"></a-gltf-model>

    <template v-if="allAssetsLoaded">
      <a-box color="red"></a-box>
      <TheRoom></TheRoom>
    </template>

    <TheCameraRig />

  </a-scene>
</template>