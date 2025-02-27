import { ref } from 'vue';

export const positionDucks = [
    { x: -0.4, y: 0.88, z: -0.92 },
    { x: -0.4, y: 0.86, z: -4 },
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

    // if (ducksCollected.value === positionDucks.length)
    if (ducksCollected.value === 1) {
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
export const isTimerRunning = ref(false)
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
  "00:00:51",
  "00:00:55",
  "00:00:15",
]

export let scoresTries = []

function convertTimeToSeconds(time) {
  const [h, m, s] = time.split(':')
  return parseInt(h) * 3600 + parseInt(m) * 60 + parseInt(s)
}