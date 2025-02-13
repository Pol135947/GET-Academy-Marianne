function showGame() {
    document.getElementById("game").innerHTML = /*HTML*/`
        <iframe src="indexStuff/gameSetup.html" width="100%" height="500px"></iframe>
        <div>
            <button id="startGame" onclick="startGame()">Start Whack a Mole!</button>
            <p id="score">Score: 0</p>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", function () {
    const keys = document.querySelectorAll(".key");
    const keyMap = {};
    const codeMap = {};
    const immediateReleaseKeys = ["CapsLock", "Tab", "ShiftLeft", "ShiftRight"];

    let score = 0;
    let level = 1;
    let moleTimeLimit = 5000; // Start at 5s
    let gameDuration = 120000; // 2 minutes
    let molePosition;
    let moleTimeout;
    let gameTimer;
    let gameActive = false;

    keys.forEach((key) => {
        if (key.dataset.key) keyMap[key.dataset.key.toUpperCase()] = key;
        if (key.dataset.code) codeMap[key.dataset.code] = key;
    });

    function startGame() {
        if (gameActive) return; // Prevent multiple game instances
        gameActive = true;

        score = 0;
        level = 1;
        moleTimeLimit = 5000;
        updateScore();

        document.getElementById("startGame").disabled = true; // Disable start button

        placeMole();

        clearTimeout(gameTimer);
        gameTimer = setTimeout(() => {
            alert(`Game Over! Final Score: ${score}`);
            clearTimeout(moleTimeout);
            gameActive = false;
            document.getElementById("startGame").disabled = false; // Re-enable button
        }, gameDuration);
    }

    function placeMole() {
        if (molePosition) molePosition.classList.remove("mole");

        const randomIndex = Math.floor(Math.random() * keys.length);
        molePosition = keys[randomIndex];
        molePosition.classList.add("mole");

        clearTimeout(moleTimeout);
        moleTimeout = setTimeout(() => {
            score = Math.max(0, score - 1);
            updateScore();
            placeMole();
        }, moleTimeLimit);
    }

    function updateScore() {
        const scoreElement = document.getElementById("score");
        if (scoreElement) {
            scoreElement.textContent = `Score: ${score}`;
        }
    }

    document.addEventListener("keydown", function (event) {
        const key = event.key.toUpperCase();
        const code = event.code;

        if (immediateReleaseKeys.includes(code)) event.preventDefault();

        if (codeMap[code]) {
            codeMap[code].classList.add("active");
        } else if (keyMap[key]) {
            keyMap[key].classList.add("active");
        }

        if (immediateReleaseKeys.includes(code)) {
            setTimeout(() => {
                if (codeMap[code]) codeMap[code].classList.remove("active");
                else if (keyMap[key]) keyMap[key].classList.remove("active");
            }, 100);
        }

        if (molePosition && (molePosition === codeMap[code] || molePosition === keyMap[key])) {
            score++;
            updateScore();
            clearTimeout(moleTimeout);
            placeMole();

            if (score % 10 === 0) {
                level++;
                moleTimeLimit = Math.max(1000, 5000 - level * 500);
            }
        }
    });

    document.addEventListener("keyup", function (event) {
        const key = event.key.toUpperCase();
        const code = event.code;

        if (!immediateReleaseKeys.includes(code)) {
            if (codeMap[code]) codeMap[code].classList.remove("active");
            else if (keyMap[key]) keyMap[key].classList.remove("active");
        }
    });

    window.startGame = startGame; // Make startGame globally accessible
});
