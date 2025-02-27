<script setup>
import TheDoor from './TheDoor.vue';

const walls = [
    {x : 2.33, y : 1.91, z : 2.70, scale : "0.1 3.92 2.93"},
    {x : 2.11, y : 1.91, z : -2.28, scale : "0.1 3.92 7.01"},
    {x : 2.11, y : 1.91, z : -8.00, scale : "0.1 3.92 4.36"},
    {x : -0.61, y : 1.91, z : 4.90, scale : "0.1 3.92 1.66"},
    {x : 0.95, y : 1.91, z : 4.20, scale : "2.83 3.92 0.1"},
    {x : -2.79, y : 1.91, z : 5.71, scale : "4.32 3.92 0.1"},
]
</script>

<template>
     <!-- <a-box color="green"
      id="wall"
      position="-0.56 1.91 0"
      scale="2 3.92 0.1"
      ></a-box>  -->

      <template v-for="(wall) in walls">
        <a-box color="white"
        :position="`${wall.x} ${wall.y} ${wall.z}`"
        :scale="`${wall.scale}`"
        ></a-box>
      </template>

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

    <TheDoor
      position="2.04 1.08 0"
      rotation="0 -90 0"
      :rot="0"
      :x="20"
      :y="0"
      :z="20"
      visible="false"
    />

    <a-gltf-model 
        id="exit-door"
        position="2.05 0 0" 
        scale="1 1 1" 
        src="#door-obj"
        rotation="0 90 0"
      >
      <a-text 
        value="Sortie" 
        position="0.3 1.85 -0.03" 
        rotation="0 180 0"
        scale="1 1 1"
      ></a-text>
    </a-gltf-model>

    <TheDoor
      id="end-door"
      position="10 1.08 0"
      rotation="0 -90 0"
      :rot="0"
      :x="20"
      :y="0"
      :z="20"
      visible="false"
    />

    <!-- Game room navigation mesh -->
    <a-entity
        data-role="nav-mesh"
        geometry="primitive: plane; height: 20; width: 20"
        position="-4 0 -4.2"
        rotation="-90 0 0"
        material="color: yellow"
        visible="true"
    ></a-entity>
</template>