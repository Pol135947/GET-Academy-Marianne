// Model

// Global game variables
const immediateReleaseKeys = ["CapsLock", "Tab", "ShiftLeft", "ShiftRight"];
let keys, keyMap = {}, codeMap = {};
let score = 0, level = 1, moleTimeLimit = 5000;
const gameDuration = 120000;
let molePosition, moleTimeout, gameTimer, countdown, gameActive = false, lastMoleTime;

// Initialize game elements
function initGame() {
    keys = document.querySelectorAll(".key");
    keyMap = {};
    codeMap = {};
    keys.forEach(key => {
        if (key.dataset.key) keyMap[key.dataset.key.toUpperCase()] = key;
        if (key.dataset.code) codeMap[key.dataset.code] = key;
    });
}
// Sound effects

// const hitSound = new Audio("indexStuff/hit.mp3");
// const missSound = new Audio("indexStuff/miss.mp3");

// View

const gameTemplate = /*HTML*/`
  <div class="game-container">
    <div class="game-header">
      <h2>Whack-a-Mole Keyboard Game</h2>
      <div class="game-stats">
        <div id="score">Score: 0</div>
        <div id="timer">Time Left: 120s</div>
        <div id="level">Level: 1</div>
      </div>
      <button id="startGame" class="game-button" onclick="startGame()">Start Whack a Mole!</button>
    </div>
    <div class="keyboard">
        <div class="row">
            <div class="key" data-key="'" data-code="IntlBackslash">'</div>
            <div class="key" data-key="1" data-code="Digit1">1</div>
            <div class="key" data-key="2" data-code="Digit2">2</div>
            <div class="key" data-key="3" data-code="Digit3">3</div>
            <div class="key" data-key="4" data-code="Digit4">4</div>
            <div class="key" data-key="5" data-code="Digit5">5</div>
            <div class="key" data-key="6" data-code="Digit6">6</div>
            <div class="key" data-key="7" data-code="Digit7">7</div>
            <div class="key" data-key="8" data-code="Digit8">8</div>
            <div class="key" data-key="9" data-code="Digit9">9</div>
            <div class="key" data-key="0" data-code="Digit0">0</div>
            <div class="key" data-key="+" data-code="Minus">+</div>
            <div class="key" data-key="Dead" data-code="Equal">´</div>
            <div class="key backspace" data-key="Backspace" data-code="Backspace">Backspace</div>
        </div>

        <div class="row">
            <div class="key tab" data-key="Tab" data-code="Tab">TAB</div>
            <div class="key" data-key="Q" data-code="KeyQ">Q</div>
            <div class="key" data-key="W" data-code="KeyW">W</div>
            <div class="key" data-key="E" data-code="KeyE">E</div>
            <div class="key" data-key="R" data-code="KeyR">R</div>
            <div class="key" data-key="T" data-code="KeyT">T</div>
            <div class="key" data-key="Y" data-code="KeyY">Y</div>
            <div class="key" data-key="U" data-code="KeyU">U</div>
            <div class="key" data-key="I" data-code="KeyI">I</div>
            <div class="key" data-key="O" data-code="KeyO">O</div>
            <div class="key" data-key="P" data-code="KeyP">P</div>
            <div class="key" data-key="Å" data-code="BracketLeft">Å</div>
            <div class="key" data-key="Dead" data-code="BracketRight">¨</div>
            <div class="key enter" data-key="Enter" data-code="Enter">Enter</div>
        </div>

        <div class="row">
            <div class="key caps" data-key="CapsLock" data-code="CapsLock">CAPS</div>
            <div class="key" data-key="A" data-code="KeyA">A</div>
            <div class="key" data-key="S" data-code="KeyS">S</div>
            <div class="key" data-key="D" data-code="KeyD">D</div>
            <div class="key" data-key="F" data-code="KeyF">F</div>
            <div class="key" data-key="G" data-code="KeyG">G</div>
            <div class="key" data-key="H" data-code="KeyH">H</div>
            <div class="key" data-key="J" data-code="KeyJ">J</div>
            <div class="key" data-key="K" data-code="KeyK">K</div>
            <div class="key" data-key="L" data-code="KeyL">L</div>
            <div class="key" data-key="" data-code="Semicolon">Ø</div>
            <div class="key" data-key="Å" data-code="Quote">Æ</div>
            <div class="key" data-key="@" data-code="Backslash">@</div>
        </div>

        <div class="row">
            <div class="key shift" data-key="Shift" data-code="ShiftLeft">Shift</div>
            <div class="key" data-key="<" data-code="Comma"><</div>
            <div class="key" data-key="Z" data-code="KeyZ">Z</div>
            <div class="key" data-key="X" data-code="KeyX">X</div>
            <div class="key" data-key="C" data-code="KeyC">C</div>
            <div class="key" data-key="V" data-code="KeyV">V</div>
            <div class="key" data-key="B" data-code="KeyB">B</div>
            <div class="key" data-key="N" data-code="KeyN">N</div>
            <div class="key" data-key="M" data-code="KeyM">M</div>
            <div class="key" data-key="," data-code="Comma">,</div>
            <div class="key" data-key="." data-code="Period">.</div>
            <div class="key" data-key="-" data-code="Slash">-</div>
            <div class="key shift" data-key="Shift" data-code="ShiftRight">Shift</div>
        </div>

        <div class="row">
            <div class="key space" data-key=" " data-code="Space">Space</div>
        </div>
    </div>
  </div>
`;

function showGame() {
    document.getElementById("game").innerHTML = gameTemplate
    document.getElementById("startGame").addEventListener("click", startGame);
    initGame(); // Ensure keys are detected properly

}
// Controller

// Starts the game

// class KeyboardGame {
//     constructor() {
//       this.score = 0;
//       this.level = 1;
//       this.moleTimeLimit = 5000;
//       this.gameDuration = 120000;
//       this.gameActive = false;
//       this.molePosition = null;
//       this.lastMoleTime = 0;
//       this.timers = {
//         mole: null,
//         game: null,
//         countdown: null
//       };
//     }
  
//     init() {
//       this.initializeKeyboard();
//       this.bindEvents();
//       this.updateScore();
//     }
  
//     initializeKeyboard() {
//       this.keys = document.querySelectorAll(".key");
//       this.keyMap = {};
//       this.codeMap = {};
//       this.keys.forEach(key => {
//         if (key.dataset.key) this.keyMap[key.dataset.key.toUpperCase()] = key;
//         if (key.dataset.code) this.codeMap[key.dataset.code] = key;
//       });
//     }
// }

function startGame() {
    if (gameActive) return;

    gameActive = true;

    score = 0;
    level = 1;
    moleTimeLimit = 5000;
    updateScore();

    placeMole();

    clearTimeout(gameTimer);
    clearInterval(countdown);

    gameTimer = setTimeout(endGame, gameDuration);

    let timeLeft = gameDuration / 1000;
    const timerElement = document.getElementById("timer");
    countdown = setInterval(() => {
        if (timeLeft <= 0 || !gameActive) {
            clearInterval(countdown);
            return;
        }
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}s`;
    }, 1000);
}

// Ends the game
function endGame() {
    alert(`Game Over! Final Score: ${score}`);
    clearTimeout(moleTimeout);
    clearInterval(countdown);
    gameActive = false;
    document.getElementById("startGame").disabled = false;
}

// Places the mole on a random key
function placeMole() {
    if (molePosition) molePosition.classList.remove("mole");

    const randomIndex = Math.floor(Math.random() * keys.length);
    molePosition = keys[randomIndex];
    molePosition.classList.add("mole");
    lastMoleTime = Date.now();

    clearTimeout(moleTimeout);
    moleTimeout = setTimeout(() => {
        score = Math.max(0, score - 1);
        updateScore();
        //missSound.play();
        placeMole();
    }, moleTimeLimit);
}

// Updates the score display
function updateScore() {
    const scoreElement = document.getElementById("score");
    if (scoreElement) scoreElement.textContent = `Score: ${score}`;
}

// Keydown event listener
document.addEventListener("keydown", function (event) {
    const key = event.key.toUpperCase();
    const code = event.code;
    
    if (immediateReleaseKeys.includes(code)) event.preventDefault();
    
    if (codeMap[code]) codeMap[code].classList.add("active");
    else if (keyMap[key]) keyMap[key].classList.add("active");
    
    if (immediateReleaseKeys.includes(code)) {
        setTimeout(() => {
            if (codeMap[code]) codeMap[code].classList.remove("active");
            else if (keyMap[key]) keyMap[key].classList.remove("active");
        }, 100);
    }
    
    if (molePosition && (molePosition === codeMap[code] || molePosition === keyMap[key])) {
        let reactionTime = Date.now() - lastMoleTime;
        let multiplier = reactionTime < 1000 ? 2 : 1;
        score += multiplier;
        updateScore();
        clearTimeout(moleTimeout);
        placeMole();
    }
});

// Keyup event listener
document.addEventListener("keyup", function (event) {
    const key = event.key.toUpperCase();
    const code = event.code;
    
    if (!immediateReleaseKeys.includes(code)) {
        if (codeMap[code]) codeMap[code].classList.remove("active");
        else if (keyMap[key]) keyMap[key].classList.remove("active");
    }
});

// Expose startGame globally
window.startGame = startGame;
