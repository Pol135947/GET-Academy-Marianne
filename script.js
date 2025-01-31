       
        function showText(){ 
            let age = getAge();
            document.getElementById('content').innerHTML = /*HTML*/`
            <a href="https://github.com/Pol135947/GET-Academy-Marianne/tree/main"> Repository </a> <br>
            <div id='intro'>
                <div id="myAge"> My name is Marianne Mahieu. I'm ${age} years of age. </div> 
                <ul>
                    <li>
                        Here are a couple of my hobbies outside of programming ;
                        <ul>
                            <li>Piano</li>
                            <li>Genshin Impact</li>
                            <li>Cats</li>
                            <li>Researching whatever catches my fancy</li>
                            <li>Greek mythology</li>
                        </ul>
                    </li>
                </ul>        
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
        
        function newLayout(borderColor, textColor){
            const content = document.getElementById('content');
            content.classList.add(".newLayout");
            document.getElementById('h2').style.backgroundColor = "transparent";
            document.getElementById('h2').innerHTML = /*HTML*/`
            Roses are <span class="red"> red, </span> violets are <span class="blue"> blue</span>...`;
        }
