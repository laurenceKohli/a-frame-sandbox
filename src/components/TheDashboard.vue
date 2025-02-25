<script setup>
import { ducksCollected, ducksTotal } from '../stores/duckstore';

</script>

<template>
        <a-gltf-model src="#duck-obj" position="-0.4 0 0" scale="0.5 0.5 0.5" animation="property: rotation; to: 0 360 0; loop: true; dur: 10000; easing: linear"></a-gltf-model>
        <a-text align="center" :value="ducksCollected + '/' + ducksTotal" position="0 0.13 0"></a-text>
</template>