// Select elements
const palette = document.querySelector(".palette");
const generateBtn = document.getElementById("generate-btn");

const colorCount = 5; // Number of colors

// Function to generate a random hex color
function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Function to create color boxes
function generatePalette() {
    palette.innerHTML = ""; // Clear existing colors

    for (let i = 0; i < colorCount; i++) {
        const color = getRandomColor();
        const colorBox = document.createElement("div");
        colorBox.classList.add("color-box");
        colorBox.style.backgroundColor = color;
        colorBox.innerHTML = `<p>${color}</p>`;

        // Click to copy color to clipboard
        colorBox.addEventListener("click", () => {
            navigator.clipboard.writeText(color);
            alert(`Copied ${color} to clipboard!`);
        });

        // Click to lock/unlock color
        colorBox.addEventListener("dblclick", () => {
            colorBox.classList.toggle("locked");
        });

        palette.appendChild(colorBox);
    }
}

// Event listener for Generate Colors button
generateBtn.addEventListener("click", () => {
    generatePalette();
});

// Generate initial colors on page load
generatePalette();
