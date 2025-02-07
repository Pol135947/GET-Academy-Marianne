function startGame() {
    document.getElementById("game").innerHTML = `<iframe src="indexStuff/gameSetup.html" width="100%" height="500px" ></iframe>`;
    startWhackAMole();
}

document.addEventListener("DOMContentLoaded", function () {
    const keys = document.querySelectorAll(".key"); // Select all virtual keys
    const keyMap = {}; // Map for quick lookup by key
    const codeMap = {}; // Map for quick lookup by key code
    const immediateReleaseKeys = ["CapsLock", "Tab", "ShiftLeft", "ShiftRight"]; // Keys that should release instantly

    // Create mappings between key values, key codes, and elements
    keys.forEach((key) => {
        if (key.dataset.key) {
            keyMap[key.dataset.key.toUpperCase()] = key;
        }
        if (key.dataset.code) {
            codeMap[key.dataset.code] = key;
        }
    });

    // Handle keydown event
    document.addEventListener("keydown", function (event) {
        const key = event.key.toUpperCase(); // Normalize case
        const code = event.code; // Key code
        console.log(`Key Pressed: ${event.key}, Key Code: ${event.code}`);

        // Prevent default actions (e.g., Tab moving focus, Caps Lock toggling)
        if (immediateReleaseKeys.includes(code)) {
            event.preventDefault();
        }

        // Prioritize codeMap (use event.code for dead keys or special keys)
        if (codeMap[code]) {
            codeMap[code].classList.add("active"); // Highlight the virtual key
        } else if (keyMap[key]) {
            keyMap[key].classList.add("active"); // Highlight the virtual key
        }

        // If the key is an "immediate release" key, remove highlight instantly
        if (immediateReleaseKeys.includes(code)) {
            setTimeout(() => {
                if (codeMap[code]) {
                    codeMap[code].classList.remove("active");
                } else if (keyMap[key]) {
                    keyMap[key].classList.remove("active");
                }
            }, 100); // Small delay to mimic a quick press effect
        }
    });

    // Handle keyup event
    document.addEventListener("keyup", function (event) {
        const key = event.key.toUpperCase();
        const code = event.code;

        // Remove highlight using codeMap first, then keyMap
        if (!immediateReleaseKeys.includes(code)) { // Don't process keys already released
            if (codeMap[code]) {
                codeMap[code].classList.remove("active");
            } else if (keyMap[key]) {
                keyMap[key].classList.remove("active");
            }
        }
    });
});
