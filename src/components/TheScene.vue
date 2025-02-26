<script setup>
  import { ref } from 'vue';
  import '../aframe/simple-grab.js';
  import '../aframe/clickable.js';
  import '../aframe/outline.js';

  import TheCameraRig from './TheCameraRig.vue';
  import TheDashboard from './TheDashboard.vue';
  import TheWallsAndDoors from './TheWallsAndDoors.vue';
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
      <!--
        Title : Open and Closed Door  
        Sound Effect by <a href="https://pixabay.com/users/soundreality-31074404/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=156814">Jurij</a> 
        from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=156814">Pixabay</a>
      -->
      <audio id="door-sound" src="./assets/audio/open-and-closed-door-156814.mp3"></audio>

      <!--
        Title : Duck quacking
        Sound Effect by <a href="https://pixabay.com/users/freesound_community-46691455/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=37392">freesound_community</a> 
        from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=37392">Pixabay</a>
      -->
      <audio id="duck-sound" src="./assets/audio/duck-quacking-37392.mp3"></audio>

      <audio id="test-sound" src="./assets/sound1.mp3"></audio>
    </a-assets>

    <a-sound src="#duck-sound" ref="playSoundDuck" autoplay="false"></a-sound>
    <a-gltf-model position="0 -0.85 -7.9" scale="1.05 1.05 1.05" src="#house-obj"></a-gltf-model>
    <template v-for="(pos, index) in positionDucks">
      <a-gltf-model 
        v-if="ducksVisible[index]"
        :position="`${pos.x} ${pos.y} ${pos.z}`"
        scale="0.2 0.2 0.2" rotation="0 90 0" src="#duck-obj"
        clickable
        obb-collider
        @obbcollisionstarted="()=>{$refs.playSoundDuck.components.sound.playSound();isCollected($event, index)}"
        @click="()=>{$refs.playSoundDuck.components.sound.playSound();isCollected($event, index)}"
        outline-on-event>
      </a-gltf-model>
    </template>

    <template v-if="allAssetsLoaded">
      <a-box color="red"></a-box>

      <TheWallsAndDoors />
      <!-- <template v-for="(pos) in positionsTeleportation">
        <a-box color="green"
      :position="`${pos.x} ${pos.y} ${pos.z}`"
      scale="2 0.1 2"
      ></a-box>
      </template> -->
      
    <!-- <a-box color="green"
      id="grille-2"
      position="-0.56 0 0"
      scale="2 0.1 2"
      ></a-box>  -->


      <a-box
        id="power"
        position="2 0.5 -3"
        scale="0.2 0.2 0.2"
        color="green"
        simple-grab
        clickable
        outline-on-event>
      </a-box>

      <!-- <a-entity
        id="dashboard"
        position="0 1.47 -0.9">
         <TheDashboard/>
      </a-entity> -->

    </template>

    <TheCameraRig />

  </a-scene>
</template>