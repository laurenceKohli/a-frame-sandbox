<script setup>
  import { ducksCollected, ducksTotal } from '../stores/duckstore';

</script>

<template>
  <div>
    <dl id="debug">
      <dt>Canards collectés</dt>
      <dt> {{ ducksCollected  }} / {{ ducksTotal }}</dt>
    </dl>
  </div>
</template>

<style scoped>
  #overlay { z-index: 1000; }
  :xr-overlay { z-index: inherit; }  /* in AR z-index is not supported for AR dom overlay */

  #debug {
    position: absolute;
    right: 20px;
    top: 20px;
    background-color: black;
    color: white;
    width: auto;
    padding: 0.5rem 1rem;
    font-family: monospace;
    z-index: inherit;
  }
  dt {
    margin-top: 0.5rem;
    font-weight: bold;
  }
  dd {
    margin-left: 0.5rem;
  }
</style>