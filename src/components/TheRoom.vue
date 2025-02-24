<script setup>
  import PortalTeleporter from './PortalTeleporter.vue';

</script>

<template>
  <a-entity
    id="main-room"
    gltf-model="#room"
    rotation="0 90 0"
    position="0 0 -5"
    scale="1 1.1 1"
  >
    <PortalTeleporter
      label="Enter the Life Cube Room"
      material="src: #room-physic-texture"
      position="-7.99 1.5 0"
      rotation="0 90 0"
      :rot="0"
      :y="100"
      :z="1"
      :cameraEffect="true"
      :cameraY="101.65"
      :cameraZ="-2"
      :cameraRot="-180"
    />
  </a-entity>

</template>