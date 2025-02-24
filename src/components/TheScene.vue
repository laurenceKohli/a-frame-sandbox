<script setup>
  import { ref } from 'vue';
  import '../aframe/simple-grab.js';
  import '../aframe/clickable.js';
  import '../aframe/outline.js';

  import TheCameraRig from './TheCameraRig.vue';

  const allAssetsLoaded = ref(false);

  const positionDucks = [
    { x: -0.4, y: 0.88, z: -0.92 },
    { x: -0.4, y: 0.88, z: -4 },
    { x: 0.4, y: 0.52, z: -1.92 },
  ];

  const ducksCollected = ref(0);
  const ducksVisible = ref(positionDucks.map(() => true));

  function isCollected(event, index) {
    ducksCollected.value++;
    ducksVisible.value[index] = false;
    const cursor = event.detail.cursorEl;
    if (cursor.getAttribute('raycaster').showLine) {
      cursor.setAttribute('raycaster', 'lineColor', "white");
    } else {
      cursor.setAttribute('material', 'color', "white");
    }
    console.log('Canards collectés:', ducksCollected.value);
  };

  function goThrowDoor() {
    console.log('Go to the bathroom');
  }

</script>

<template>
  <a-scene
    background="color: black;"
    outline
    stats
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
    <template v-for="(pos, index) in positionDucks">
      <a-gltf-model 
        v-if="ducksVisible[index]"
        :position="`${pos.x} ${pos.y} ${pos.z}`"
        scale="0.2 0.2 0.2" rotation="0 90 0" src="#duck-obj"
        clickable
        obb-collider
        @obbcollisionstarted="isCollected($event, index)"
        @click="isCollected($event, index)"
        outline-on-event>
      </a-gltf-model>
    </template>

    <template v-if="allAssetsLoaded">
      <a-box color="red"></a-box>

      <a-box
        id="power"
        position="2 0.5 -3"
        scale="0.2 0.2 0.2"
        color="green"
        simple-grab
        clickable
        outline-on-event>
      </a-box>
      
      <a-box
        position="0.42 1.08 1.3"
        material="color: blue"
        scale="1.3 2.1 0.3"
        clickable
        click-handler
        @click="goThrowDoor()">
      </a-box>

    </template>

    <TheCameraRig />

  </a-scene>
</template>