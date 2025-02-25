<script setup>
  import { ref } from 'vue';
  import '../aframe/simple-grab.js';
  import '../aframe/clickable.js';
  import '../aframe/outline.js';

  import TheCameraRig from './TheCameraRig.vue';
  import TheDashboard from './TheDashboard.vue';
  import TheDoor from './TheDoor.vue';
  import { positionDucks, ducksVisible, isCollected } from '../stores/duckstore.js';

  const allAssetsLoaded = ref(false);

  function goThrowDoor() {
    console.log('Go to the bathroom');
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
    {x : 0.63, y : 0 , z : 2.48},
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

      <!-- <template v-for="(pos) in positionsTeleportation">
        <a-box color="green"
      :position="`${pos.x} ${pos.y} ${pos.z}`"
      scale="2 0.1 2"
      ></a-box>
      </template>
      
    <a-box color="green"
      id="grille-2"
      position="-0.56 0 0"
      scale="2 0.1 2"
      ></a-box> -->


      <a-box
        id="power"
        position="2 0.5 -3"
        scale="0.2 0.2 0.2"
        color="green"
        simple-grab
        clickable
        outline-on-event>
      </a-box>
      
      <!-- <a-box
        position="0.42 1.08 1.3"
        material="color: blue"
        scale="1.3 2.1 0.3"
        clickable
        click-handler
        @click="goThrowDoor()">
      </a-box> -->

      
    <TheDoor
      position="0.42 1.08 1.15"
      rotation="0 180 0"
      :rot="180"
      :x="0.63"
      :y="0"
      :z="2.48"
      visible="false"
    />

    <TheDoor
      position="0.42 1.08 1.57"
      rotation="0 0 0"
      :rot="0"
      :x="0.63"
      :y="0"
      :z="0.35"
      visible="false"
    />

    <TheDoor
      position="-1.42 1.08 1.15"
      rotation="0 180 0"
      :rot="180"
      :x="-1.63"
      :y="0"
      :z="2.48"
      visible="false"
    />

    <TheDoor
      position="-1.42 1.08 1.57"
      rotation="0 0 0"
      :rot="0"
      :x="-1.63"
      :y="0"
      :z="0.35"
      visible="false"
    />

    <TheDoor
      position="-0.72 1.08 -5.6"
      rotation="0 0 0"
      :rot="0"
      :x="-0.92"
      :y="0"
      :z="-6.8"
      visible="false"
    />

    <TheDoor
      position="-0.72 1.08 -5.95"
      rotation="0 180 0"
      :rot="180"
      :x="-0.92"
      :y="0"
      :z="-4.75"
      visible="false"
    />

    <TheDoor
      position="-4.68 1.08 -2.65"
      rotation="0 90 0"
      :rot="90"
      :x="-5.88"
      :y="0"
      :z="-2.45"
      visible="false"
    />

    <TheDoor
      position="-4.92 1.08 -2.65"
      rotation="0 -90 0"
      :rot="-90"
      :x="-4.22"
      :y="0"
      :z="-2.45"
      visible="false"
    />

      <!-- <a-entity
        id="dashboard"
        position="0 1.47 -0.9">
         <TheDashboard/>
      </a-entity> -->

    </template>

    <TheCameraRig />

  </a-scene>
</template>