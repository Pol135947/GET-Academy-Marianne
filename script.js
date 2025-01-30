       
        function showText(){ 
            let age = getAge();
            document.getElementById('content').innerHTML = /*HTML*/`
            <button onclick="newLayout('lightblue','purple', 'Tadaa')"> Show everything </button>
            <div>
                <a href="https://github.com/Pol135947/GET-Academy-Marianne/tree/main"> Repository </a>
                <div class="content"> About me : </div>
                <div id="myAge"> My name is Marianne Mahieu. I'm ${age} years of age. </div> 
                <ul>
                    <li>
                        Here are a couple of my hobbies outside of programming ;
                        <ul>
                            <li>Piano</li>
                            <li>Genshin Impact</li>
                            <li>Cats</li>
                            <li>Researching whatever catches my fancy</li>
                        </ul>
                    </li>
                </ul>        
            </div>
            `;
        }
        
        let yearOfBirth =  new Date("2004-08-23").getFullYear();
        function getAge(){
                let todaysDate = new Date(); //innebygd javascript funksjon som henter datens dato
                let year = todaysDate.getFullYear(); //henter ut årstall fra dagens dato
                let age = year - yearOfBirth;
                return age;
        }
        function newLayout(color1, color2, text){
            document.getElementById('content').style.background = color1;
            document.getElementById('content').style.color = color2;
            document.getElementById('h2').innerHTML = text;

        }
    