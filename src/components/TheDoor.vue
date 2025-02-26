<script setup>
  import '../aframe/teleport-camera-rig.js';
  import '../aframe/clickable.js';

  const props = defineProps({
    x: {type: Number, default: 0},
    y: {type: Number, default: 0},
    z: {type: Number, default: 0},
    rot: {type: [Number, Boolean], default: false},
  });
  const id = crypto.getRandomValues(new Uint32Array(1))[0];
</script>

<template>
  <a-entity
    :id="`portal-${id}`"
    geometry="primitive: box; width: 1.3; height: 2.1; depth: 0.1"
    clickable
    :teleport-camera-rig="`
      x: ${x};
      y: ${y};
      z: ${z};
      handleRotation: ${rot === false ? 'false' : 'true'};
      rot: ${rot === false ? 0 : rot};
    `"
    @click="()=> {$refs.playSoundDoor.components.sound.playSound()}"
    >
    
    <a-sound src="#door-sound" ref="playSoundDoor" autoplay="false"></a-sound>

  </a-entity>
</template>
