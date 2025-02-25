<script setup>
// const props = defineProps({
//     totalDucks: {type: Number, default: 1},
//     actualDucks: {type: Number, default: 0},
// });

import { ducksCollected, ducksTotal } from '../stores/duckstore';
</script>

<template>
    <a-entity gltf-model="#duck-obj" position="-0.4 1.27 -0.08" scale="0.5 0.5 0.5" animation="property: rotation; to: 0 360 0; loop: true; dur: 10000; easing: linear">
    </a-entity>
    <a-text align="center" :value="ducksCollected + '/' + ducksTotal" position="0 1.4 0"></a-text>
</template>