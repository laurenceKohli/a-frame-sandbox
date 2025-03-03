import { ref } from 'vue';

export const positionDucks = [
    { x: -0.4, y: 0.88, z: -0.92, factor : 0.1, rotation : 90 },
    { x: -0.4, y: 0.86, z: -4, factor : 0.2, rotation : 90 },
    { x: 0.4, y: 0.52, z: -1.92, factor : 0.2, rotation : 90 },
    { x: 1.74, y: 0.54, z: -2.44, factor : 0.2, rotation : 90 },
    {x: -3.07, y : 0.46, z : 0.47, factor : 0.1, rotation : -90},
    {x : -2.41, y : 0.12 , z : 0.76, factor : 0.2, rotation : 180},
    {x : -2.07, y : 0.62 , z : -1.89, factor : 0.2, rotation : 90},
    {x : -3.2, y : 0.04 , z : -1.96, factor : 0.2, rotation : 90},
    {x : -3.86, y : 0.04 , z : -5.03, factor : 0.1, rotation : 90},
    {x : 0.01, y : 0.04 , z : -4.49, factor : 0.2, rotation : 35},
    {x : -4.54, y : 0.7 , z : -4.42, factor : 0.1, rotation : 180},
    {x : -1.37, y : 0.04 , z : -5.39, factor : 0.1, rotation : 180},
    {x :1.42 , y : 0.04 , z : 3.76, factor : 0.1, rotation : 180},
    {x : 1.28, y : 0.57 , z : 4, factor : 0.1, rotation : -90},
    {x : 0.03, y : 0.55 , z : 3.23, factor : 0.2, rotation : 90},
    {x : -0.36, y : 1.09 , z : 2.95, factor : 0.1, rotation : 180},
    {x : -0.19, y : 0.71 , z : 2.30, factor : 0.1, rotation : 180},
    {x : -0.31, y : 0.84 , z : 1.73, factor : 0.1, rotation : 90},
    {x : 1.64, y : 0.98 , z : 1.56, factor : 0.1, rotation : 90},
    {x : -0.70, y : 0.04 , z : 1.63, factor : 0.1, rotation : 90},
    {x : -3.75, y : 1.86 , z : 1.89, factor : 0.1, rotation : 90},
    {x : -4.12, y : 0.52 , z : 4.80, factor : 0.1, rotation : 180},
    {x : -3.84, y : 0.59 , z : 1.68, factor : 0.1, rotation : 135},
    {x : -8.87, y : 0.42 , z : -1.05, factor : 0.1, rotation : 75},
    {x : -7.00, y : 0.04 , z : -0.62, factor : 0.1, rotation : 0},
    {x : -6.04, y : 0.04 , z : -4.84, factor : 0.1, rotation : 0},
    {x : -1.98, y : 0.04 , z : -6.40, factor : 0.1, rotation : -90},
    {x : 1.10, y : 0.67 , z : -8.57, factor : 0.1, rotation : -90},
    {x : -0.10, y : 0.59 , z : -9.97, factor : 0.1, rotation : 45},
    {x : 1.07, y : 0.04 , z : -7.57, factor : 0.2, rotation : 90}
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

    if (ducksCollected.value === positionDucks.length) {
    // if(ducksCollected.value === 1) {
      stopTimer();
    }
  };

  /**
 * Gestion du Timer
 * 
 * Le timer est un composant qui permet de mesurer le temps écoulé depuis le départ du jeu.
 * 
 * Le timer est composé de 3 parties :
 * - isTimerRunning : un boolean qui indique si le timer est actuellement en cours
 * - timerValue : une string qui contient la valeur actuelle du timer sous la forme HH:MM:SS
 * - timerInterval : un interval qui permet de mettre à jour la valeur du timer toutes les secondes
 * 
 * Le timer démarre automatiquement lorsque le jeu démarre et s'arrête lorsque le dernier canard est collecté.
 */
const isTimerRunning = ref(false)
const timerValue = ref('00:00:01')
export const endTimer = ref(0)
export const ended = ref(false)
let timerInterval

export function startTimer() {
  isTimerRunning.value = true
  let seconds = 0
  
  timerInterval = setInterval(() => {
    seconds++
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    
    timerValue.value = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }, 1000)
}

function stopTimer() {
  isTimerRunning.value = false
  endTimer.value = timerValue.value
  timerValue.value = '00:00:01'
  ended.value = true
  scores.push(endTimer.value)
  scoresTries = scores.sort((a, b) => convertTimeToSeconds(a) - convertTimeToSeconds(b)).slice(0, 3)
  clearInterval(timerInterval)
  const endDoor = document.querySelector('#end-door');
  endDoor.emit('click');
}

const scores = [
  "00:10:51",
  "00:15:55",
  "00:10:15",
]

export let scoresTries = []
scoresTries = scores.sort((a, b) => convertTimeToSeconds(a) - convertTimeToSeconds(b)).slice(0, 3)

function convertTimeToSeconds(time) {
  const [h, m, s] = time.split(':')
  return parseInt(h) * 3600 + parseInt(m) * 60 + parseInt(s)
}