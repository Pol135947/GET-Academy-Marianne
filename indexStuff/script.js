       
function showText(){ 
    let age = getAge();
    document.getElementById('content').innerHTML = /*HTML*/`
    <a href="https://github.com/Pol135947/GET-Academy-Marianne/tree/main"> Repository </a> <br>
    <div id='intro' onclick="newLayout()">
        <div id="myAge"> My name is Marianne Mahieu. I'm ${age} years of age. </div> 
        <u>
            <li> Here are a couple of my hobbies outside of programming ;
                <img src="indexStuff/img/piano.webp">
                <li onmouseover=showImage(this)>Piano</li>
                <img src="indexStuff/img/Genshin_Impact.jpg">
                <li onmouseover=showImage(this)>Genshin Impact</li>
                <img src="indexStuff/img/cute cat.jpg">
                <li onmouseover=showImage(this)>Cats</li>
                <img src="indexStuff/img/thinking.jpg">
                <li onmouseover=showImage(this)>Researching whatever catches my fancy</li>
                <img src="indexStuff/img/GreekRoman.jpg">
                <li onmouseover=showImage(this)>Greek/Roman mythology</li>
            </li>
        </u>  
        <p> 
        </p>      
    </div>
    `;
}

let yearOfBirth = new Date("2004-08-23").getFullYear();
let monthOfBirth = new Date("2004-08-23").getMonth();
let dayOfBirth = new Date("2004-08-23").getDate();
function getAge() {
    let todaysDate = new Date();
    let year = todaysDate.getFullYear();
    let month = todaysDate.getMonth();
    let day = todaysDate.getDate();
    
    let age = year - yearOfBirth;

    // Adjust age if birthday has not occurred yet in the current year
    if (month < monthOfBirth || (month === monthOfBirth && day < dayOfBirth)) {
        age--;
    }
    return age;
}

function newLayout(){
    var content = document.getElementById('content');
    content.className = "newLayout";
    document.getElementById('h2').style.backgroundColor = "color-mix(in srgb, red 75%, black 25%)";
    document.getElementById('h2').innerHTML = /*HTML*/`
    Roses are <span class="red"> red, </span> violets are <span class="blue"> blue</span>...`;
}
function showImage(li) {
    let img = li.previousElementSibling; // Select the associated image
    if (img.style.display === "none" || img.style.display === "") {
        img.style.display = "block";
    } else {
        img.style.display = "none"; 
    } 
}

