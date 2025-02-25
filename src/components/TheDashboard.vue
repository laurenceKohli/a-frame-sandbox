<script setup>
// const props = defineProps({
//     totalDucks: {type: Number, default: 1},
//     actualDucks: {type: Number, default: 0},
// });

import { ducksCollected, ducksTotal } from '../stores/duckstore';
</script>

<template>
    <a-box
      position="-0.01 1.47 -0.05"
      scale="1.28 0.88 0.04"
      color="#c965cf"
      opacity="0.5"
    ></a-box>
    <a-text
      align="center"
      value="Dashboard"
      position="0 1.64 0"
    ></a-text>

    <a-text
      align="center"
      :value="ducksCollected + '/' + ducksTotal"
      position="0 1.4 0"
    ></a-text>
</template>