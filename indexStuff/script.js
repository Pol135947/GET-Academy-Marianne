// Model
let age = getAge();
function getAge(){
    // Calculate age only once
    const yearOfBirth = 2004;
    const monthOfBirth = 7; // August (0-based index)
    const dayOfBirth = 23;
    let today = new Date();
    let age = today.getFullYear() - yearOfBirth;

    // Adjust if birthday hasn't happened this year
    if (today.getMonth() < monthOfBirth || (today.getMonth() === monthOfBirth && today.getDate() < dayOfBirth)) {
        age--;
    }
    return age;
    }

// View 

function updateView() { 
    document.getElementById('app').innerHTML = /*HTML*/`
    <h1 id="h1"> HELLO </h1>
    <h2 id="h2"> Welcome here </h2>
    <div> About me : </div>
    <a href="https://github.com/Pol135947/GET-Academy-Marianne/tree/main"> Repository </a> <br>
    <div onclick="newLayout()">
        <div id="myAge"> My name is Marianne Mahieu. I'm ${age} years of age. </div> 
        <u>
            <div id='intro'> Here are a couple of my hobbies outside of programming ; <br>
                <img src="indexStuff/img/piano.webp" style="display: none;">
                <li onmouseover="showImage(this)">Piano</li>

                <img src="indexStuff/img/Genshin_Impact.jpg" style="display: none;">
                <li onmouseover="showImage(this)">Genshin Impact</li>

                <img src="indexStuff/img/cute cat.jpg" style="display: none;">
                <li onmouseover="showImage(this)">Cats</li>

                <img src="indexStuff/img/thinking.jpg" style="display: none;">
                <li onmouseover="showImage(this)">Researching whatever catches my fancy</li>

                <img src="indexStuff/img/GreekRoman.jpg" style="display: none;">
                <li onmouseover="showImage(this)">Greek/Roman mythology</li>
            </div>
        </u>  
        <div id="imgField"></div>
        <div id="game" onclick="showGame()"> Start Game ! </div>
    </div>
    `;
    }

updateView()

// Controller

let layout = false; // Store layout state globally

function newLayout() {
    let introElement = document.getElementById('intro');

    if (!layout) {
        introElement.classList.add("newLayout");
    } else {
        introElement.classList.remove("newLayout");
    }

    layout = !layout; // Toggle layout state

    // Use a safer color mix
    document.getElementById('h2').style.backgroundColor =" #CC00CC"
    document.getElementById('h2').style.color = " #CCCC00"
    document.getElementById('h2').innerHTML = 
    `Roses are <span class="red"> red, </span> violets are <span class="blue"> blue</span>...`;
}

// Controller
function showImage(li) {
    let img = li.previousElementSibling.cloneNode(true); // Clone the associated image
    let imgField = document.getElementById('imgField');
    
    // Clear previous image and append the new one
    imgField.innerHTML = '';
    img.style.display = "block";
    imgField.appendChild(img);
}
