import { ref } from 'vue';

export const positionDucks = [
    { x: -0.4, y: 0.88, z: -0.92 },
    { x: -0.4, y: 0.88, z: -4 },
    { x: 0.4, y: 0.52, z: -1.92 },
  ];

 export const ducksCollected = ref(0);
 export const ducksTotal = ref(positionDucks.length);
 export const ducksVisible = ref(positionDucks.map(() => true));

 export function isCollected(event, index) {
    ducksCollected.value++;
    ducksVisible.value[index] = false;
    const cursor = event.detail.cursorEl;
    if (cursor.getAttribute('raycaster').showLine) {
      cursor.setAttribute('raycaster', 'lineColor', "white");
    } else {
      cursor.setAttribute('material', 'color', "white");
    }
    console.log('Canards collectés:', ducksCollected.value, '/', positionDucks.length);
  };