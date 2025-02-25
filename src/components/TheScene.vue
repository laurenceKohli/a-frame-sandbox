<script setup>
  import { ref } from 'vue';
  import '../aframe/simple-grab.js';
  import '../aframe/clickable.js';
  import '../aframe/outline.js';

  import TheCameraRig from './TheCameraRig.vue';
  import TheDashboard from './TheDashboard.vue';
  import { positionDucks, ducksVisible, isCollected } from '../stores/duckstore.js';

  const allAssetsLoaded = ref(false);

  function goThrowDoor() {
    console.log('Go to the bathroom');
    console.log(camera.getAttribute('position'));
  }

  const positionsTeleportation = [
    { x: 0.56, y: 0, z: 0 },
    { x: 0.55, y: 0, z: -2.04 },
    {x: -3.43, y : 0, z : 0.09},
    {x : -1.4, y : 0 , z : 0.2},
    {x : -1.52, y : 0 , z : -2.09},
    {x : -3.81, y : 0 , z : -2.04},
    {x : -3.54, y : 0 , z : -4.7},
    {x : -0.52, y : 0 , z : -4.72},
  ];

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

      <template v-for="(pos) in positionsTeleportation">
        <a-box color="green"
      :position="`${pos.x} ${pos.y} ${pos.z}`"
      scale="2 0.1 2"
      ></a-box>
      </template>
      
    <a-box color="green"
      id="grille-2"
      position="-0.55 0 -2.04"
      scale="2 0.1 2"
      ></a-box>


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

      <a-entity
        id="dashboard"
        position="0 0.2 -0.9">
         <TheDashboard/>
      </a-entity>

    </template>

    <TheCameraRig />

  </a-scene>
</template>