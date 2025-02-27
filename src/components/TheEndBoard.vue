<script setup>
import { endTimer, scoresTries } from '../stores/duckstore';

function reloadView() {
  window.location.reload();
}

function exitImmersiveView() {
  if (document.querySelector("a-scene").is("vr-mode")) {
    document.querySelector("a-scene").exitVR();
    console.info("Exit VR mode… bye!");
  }
}
</script>

<template>
    <a-entity
        position="0 -20 0"
        id="end-room"
    >
        <a-box id="floor"
            position="0 0 -3.7"
            scale="4 0.1 10"
            material="color: grey">
        </a-box>

        <a-box id="wall-fond"
            position="0 1.91 -8.64"
            scale="4 3.92 0.1"
            material="color: white">
        </a-box>

        <a-box id="wall-right"
            position="2.07 1.91 -3.7"
            scale="0.1 3.92 10.2"
            material="color: white">
        </a-box>

        <a-box id="wall-left"
            position="-2.06 1.91 -3.8"
            scale="0.1 3.92 10.2"
            material="color: white">
        </a-box>

        <a-box color="red"></a-box>
            
        <a-gltf-model 
            position="1.99 0 -5.7" 
            scale="1 1 1" 
            src="#door-obj"
            rotation="0 90 0"
        >
        </a-gltf-model>
        
        <a-gltf-model 
            position="-1.99 0 -3.7" 
            scale="1 1 1" 
            src="#door-obj"
            rotation="0 -90 0"
        >
        </a-gltf-model>

        <a-text align="center" value="Votre temps" position="0 2.20 -8.58" color="black"></a-text>
        <a-text align="center" :value="endTimer" position="0 1.70 -8.58" color="black"></a-text>

        <a-box  
            position="-1.99 2.4 -3.75" 
            scale="0.5 0.2 0.11" 
            material="color: red" 
            rotation="0 90 0"
        >
            <a-text align="center" value="Rejouer" position="0 0 0.5"></a-text>
        </a-box>

        <a-box  
            position="-1.93 1 -3.70" 
            scale="1.25 2 0.11" 
            material="color: red" 
            clickable 
            click-handler
            @click="reloadView()"
            rotation="0 90 0"
            visible="false"
        ></a-box>

        <a-gltf-model
            position="-2.01 1.35 -2.27"
            scale="0.22 0.1 0.07"
            src="#board-obj"
            rotation="0 0 0"
        >
            <a-entity rotation="0 90 0" position="0.2 5.77 0" scale="4 4 4">
                <a-text align="center" value="Meilleurs scores" scale="2 2 2" ></a-text>
                <a-text align="center" :value="scoresTries[0]" :color="scoresTries[0] === endTimer ? 'red' : 'white'" position="0 -0.45 0"></a-text>
                <a-text align="center" :value="scoresTries[1]" :color="scoresTries[1] === endTimer ? 'red' : 'white'" position="0 -0.77 0"></a-text>
                <a-text align="center" :value="scoresTries[2]" :color="scoresTries[2] === endTimer ? 'red' : 'white'" position="0 -1.09 0"></a-text>
            </a-entity>
        </a-gltf-model>



        <a-box  
            position="2.02 2.4 -5.75" 
            scale="0.5 0.2 0.11" 
            material="color: blue"
            rotation="0 -90 0"
        >
            <a-text align="center" value="Quitter" position="0 0 0.5"></a-text>
        </a-box>

        <a-box  
            position="1.90 1 -5.70" 
            scale="1.25 2 0.11" 
            material="color: blue" 
            clickable 
            click-handler
            @click="exitImmersiveView()"
            rotation="0 -90 0"
            visible="false"
        ></a-box>
    </a-entity>
</template>