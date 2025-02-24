<script setup>
  import { ref } from 'vue';

  import TheCameraRig from './TheCameraRig.vue';
  import '../aframe/pavage-carre.js';
  import '../aframe/emit-when-near.js';
  import '../aframe/event-set.js';
  import '../aframe/listen-to.js';
  import '../aframe/simple-grab.js';
  import '../aframe/clickable.js';
  import '../aframe/im-box.js';
  import '../aframe/mat-change-color.js';

  const allAssetsLoaded = ref(false);

  function collision() {
    console.log('collision', event.detail);
  }
</script>

<template>
  <a-scene
    fog="type: linear; color: #a3d0ed; near: 30; far: 60"
    background="color: #9cf0f0;"
    stats
  >

    <a-assets @loaded="allAssetsLoaded = true">
    </a-assets>

    <template v-if="allAssetsLoaded">
      <a-entity light="type: ambient; color: #445451"></a-entity>
      <a-entity 
        light="type: point; intensity: 2" 
        position="0 2 -10"
        ></a-entity>

      <a-ocean
        width="100"
        depth="100"
        amplitude="0"
        amplitudeVariance="0.1"
        density="50"
      ></a-ocean>
      <a-ocean
        width="100"
        depth="100"
        amplitude="0"
        amplitudeVariance="0.1"
        density="50"
      ></a-ocean>

      <a-entity 
        pavage-carre="width : 10; deepth:10" 
        position="-0.6 -0.6 -3"
      ></a-entity>

      < <a-sphere
        id="sphere-box-1"
        position="0 0 -5"
        emit-when-near="distance: 2"
        color="blue"
        @click="collision($event)"
        event-set__change-when-near="attribute: color; value: red"
        event-set__change-when-far="event: unclick; attribute: color; value: blue"
      ></a-sphere>

      <a-sphere
        position="10 0 -5"
        color="green"
        listen-to="target: #sphere-box-1;"
        event-set="attribute: color; value: red"
      ></a-sphere>

      <a-box
        obb-collider
        id="radio"
        position="10 0 -12"
        scale="2 2 2"
        color="red"
        visible="true"
        event-set="event: obbcollisionstarted; attribute: visible; value: false"
      ></a-box>

      <a-entity imbox position="0 3 -13" scale="2 2 2"></a-entity>

      <a-box
        mat-change-color
        obb-collider
        id="power"
        position="2 0.5 -3"
        scale="0.2 0.2 0.2"
        color="green"
        simple-grab
        clickable
      ></a-box>

    </template>

    <TheCameraRig />

  </a-scene>
</template>