const model = {
    app: {
        currentPage: "simulation",
        pages: [],
        darkMode: false,
    },

    input: {
        victim: "",
    },

    data: {
        countries: [
            { countryName: "Australia", 
                img: "placeholder.png",
                response_1: "Bruh... Wtf did we do to you!?", 
                response_2: null, 
                response_3: "Boycott USA!!!", 
                response_4: null
            },

            { countryName: "Canada", 
                img: "placeholder.png",
                response_1: "Alright. You want a fight!? You'll get one. Remember USA, you started it.",  
                response_2: "Canada is not for fucking sale!", 
                response_3: "they voted for him", 
                response_4: "Why are you attacking us and not fucking Russia!?"
            },

            { countryName: "Greenland", 
                img: "placeholder.png",
                response_1: null, 
                response_2: "Fuck off, Greenland is not for sale. Greenland is ours!", 
                response_3: null, 
                response_4: null
            },

            { countryName: "Panama", 
                img: "placeholder.png",
                response_1: null, 
                response_2: null, 
                response_3: null, 
                response_4: null
            },

            { countryName: "Mexico", 
                img: "placeholder.png",
                response_1: "What do we do? posture or remain quiet? We can't win this war...", 
                response_2: null, 
                response_3: null, 
                response_4: null
            },

            { countryName: "Ukraine", 
                img: "placeholder.png",
                response_1: null, 
                response_2: null, 
                response_3: null, 
                response_4: "We're fucked aren't we?"
            },

            { countryName: "UK", 
                img: "placeholder.png",
                response_1: "Maybe Brexit was a bad idea... But we'll be fine", 
                response_2: null, 
                response_3: "Fuck off Vance, go back to your history books", 
                response_4: "Are you being serious? Since when is Russia our friend?"
            },

            { countryName: "France", 
                img: "placeholder.png",
                response_1: "We're tariffing back your asses. You asked for it", 
                response_2: null, 
                response_3: "Give us back the Statue of Liberty. You're not worthy anymore", 
                response_4: "Russia is our enemy",
            },

            { countryName: "Japan", 
                img: "placeholder.png",
                response_1: "breathe... Don't say anything and hope Trump forgets about us",  
                response_2: null, 
                response_3: "Phew. We're in the clear. For now", 
                response_4: "WTF...?"
            },

            { countryName: "Norway", 
                img: "placeholder.png",
                response_1: "Bruh, wtf are we supposed to do? join EU!?", 
                response_2: "The fuck? aren't they supposed to be your closest allies!?", 
                response_3: "Boycott!!!", 
                response_4: null,
            },

            { countryName: "EU", 
                img: "placeholder.png",
                response_1: "Fine. We'll put return the favour. Fuck you Republican States.", 
                response_2: null, 
                response_3: "This is getting worse by the minute", 
                response_4: "Fuck you traitors. We don't need you anyway (We kinda do, but we'll figure it out)"
            },

            { countryName: "Russia", 
                img: "placeholder.png",
                response_1: "Tariff what? $3.5 billion?", 
                response_2: "If USA is doing it, we're taking Ukraine", 
                response_3: "What a joke", 
                response_4: "We conquered the White House without firing a shot. Historic"
            },

            { countryName: "China", 
                img: "placeholder.png",
                response_1: "BTW, here is a 10% tariff", 
                response_2: "Don't interrupt your enemy while they shoot themselves in the foot.", 
                response_3: null, 
                response_4: "If they think they can get leverage via Russia... Dream on."
            },

        ],
        
        events: [
            { eventName: "Tariff War", 
                tariffRates:[10, 25, 50, 100, 200], 
                items: ["steel and aluminium imports", "alcohol from EU countries", "energy", "sports equipment", "computers", "cast iron items"] 
            }, 

            { eventName: "Annexation and military threats",
                possibilities: {
                    annexation: ["Canada", "Greenland"],
                    military: ["Panama", "Gaza", "EU", "NATO", "Houthis", "Iran"] 
                } 
            },

            { eventName: "Controversies",
                whiteHouseEvents: [
                  "Trump administration doing something embarrassing",
                  "More constitution breaking",
                  "Deportations",
                  "Leaking military secrets on Signal",
                  "Praising authoritarian leaders",
                  "Reinstating controversial travel bans targeting Muslim-majority countries", 
                ],
                sentences: [
                    "Doing or saying something outright fake",
                    "Racist statement",
                    "Claims of being pro-freedom while silencing critics",
                    "Dog-whistling about 'real Americans'"
                ],
                targets: [
                  "Anti-Black People",
                  "Xenophobic",
                  "Anti-Asian",
                  "White Nationalism",
                  "Islamophobic",
                  "Anti-Latino",
                  "Anti-Native American",
                  "Anti-LGBTQ+",
                  "Anti-Immigrant"
                ],
                
                platforms: [
                  "Twitter/X",
                  "Truth Social",
                  "Fox News",
                  "Signal",
                  "Rumble",
                  "Newsmax"
                ]
              }, 
            { eventName: "Nothing", 
                reasons: ["It's Russia"]} 
        ]
    }
}


function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}


// txt fields
const victimField = document.getElementById('victim');
const eventField = document.getElementById('event');
const responseField = document.getElementById('response');
const table = document.getElementById('table');

countries = model.data.countries;
eventArray = model.data.events;

// countryList =  countries.map(country => country.countryName);
// eventNames = eventArray.map(event => event.eventName);

const todaysVictim = () => getRandomElement(countries);
const todaysEvent = () => getRandomElement(eventArray);

const victimInfo = (victim) => countries.find(country => country.countryName === victim);
const findEvent = (name) => eventArray.find(event => event.eventName === name);


function start(){
    currentVictim = todaysVictim();
    currentEvent = todaysEvent();
    us_tariff_politics(currentVictim, currentEvent)
}

function us_tariff_politics(currentVictim, currentEvent){

    let response = '';
    victimField.innerHTML = currentVictim.countryName;
    eventField.innerHTML = currentEvent.eventName;

    if (currentEvent.eventName === eventArray[0].eventName) {
        response = currentVictim.response_1;
        if (response === null){
            tariffRate = getRandomElement(currentEvent.tariffRates)
            item = getRandomElement(currentEvent.items)
            responseField.innerHTML = `
            <div> USA: You get a ${tariffRate}% tariff on ${item}. MTGA (Make Tariffs Great Again!) </div>
            <div> ${currentVictim}: Is that what you what? here's ${tariffRate}% tariff on ${item}. MTGA (Make Trump Go Away!) </div>
            `;
        }
        else {
            console.log(response)
            responseField.innerHTML = response;
        }
    }

    if (currentEvent.eventName === eventArray[1].eventName) {
        annexation = currentEvent.possibilities.annexation;
        military = currentEvent.possibilities.military;
        response = currentVictim.response_2;
        if (response === null) {
            miniVictim = getRandomElement(annexation.concat(military));
            if (miniVictim in annexation) {
                switch (miniVictim) {
                    case "Canada":
                        response = `US wants to annex Canada as the 51st State. Canada says to fuck off.`;
                        break;
                    case "Greenland":
                        response = `US wants to annex Greenland for "National security and stategic" reasons. Greenland says MAGA. Make America Go Away`;
                        break;
                }
                responseField.innerHTML = response;
            }
            else {
                switch (miniVictim){
                    case military[0]:
                        attack = `We want the Canal to prevent China and US's enemies to abuse it`;
                        response = `Fake news`;
                        break;
                    case military[1]:
                        attack = `Let's transform Gaza into a Riviera, and kick two million Palestinians out!`;
                        response = `You know it's a war crime right? and the AI video was tasteless`;
                        break;
                    case military[2]:
                        attack = `Greenland will be ours!`;
                        response = `No it won't. Denmark is our ally`;
                        break;
                    case military[3]:
                        attack = `Pay up 5% of GDP to give us an excuse to bail out of our article 5 obligations`;
                        response = `5%!? the article states 2% of GDP. Plus, not even you guys are paying that much`;
                        break;
                    case military[4]:
                        attack = `Let's have a chat about the upcoming bombings on signal. Remember not to invite any journalists in`;
                        response = `Why was the Editor in Chief of The Atlantic invited and not us?`;
                        break;
                    case military[5]:
                        attack = `We'll bomb you if you don't sign this nuclear deal`;
                        response = `Why should we listen to a child?`;
                        break;
                    }
                responseField.innerHTML = /*HTML*/ `
                <div> USA: ${attack} </div>
                <div> ${currentVictim}'s response: ${response} </div>
                `;
            }
        }
        else {
            responseField.innerHTML = response;
        }
    }

    if (currentEvent.eventName === eventArray[2].eventName) {
        whiteHouseEvents = currentEvent.whiteHouseEvents;
        sentences = currentEvent.sentences;
        targets = currentEvent.targets;
        platforms = currentEvent.platforms;

        response = currentVictim.response_3;
        if (response === null){
            whiteHouseEvent = getRandomElement(whiteHouseEvents);
            sentence = getRandomElement(sentences);
            target = getRandomElement(targets);
            platform = getRandomElement(platforms);
            switch (whiteHouseEvent) {
                case whiteHouseEvents[0]:
                    attack = `Today, this happened: ${whiteHouseEvent}. More specifically, they said this ${sentence} and targeted ${target} on ${platform}`;
                    response = "WTF bro?";
                case whiteHouseEvents[1]: // Deportation
                    attack = `Today, this happened: ${whiteHouseEvent}.`;
                    response = "WTF bro?";
                case whiteHouseEvents[2]:
                    attack = `Today, this happened: ${whiteHouseEvent}. Targeting ${target} on ${platform}`;
                    response = "WTF bro?";
                case whiteHouseEvents[3]: // Signal
                    attack = `Today, this happened: ${whiteHouseEvent}.`;
                    response = "WTF bro?";
                case whiteHouseEvents[4]:
                    attack = `Today, this happened: ${whiteHouseEvent}.`; 
                    response = "WTF bro?";
                case whiteHouseEvents[5]:
                    attack = `Today, this happened: ${whiteHouseEvent}.`;
                    response = "WTF bro?";
            }
            responseField.innerHTML = /*HTML*/ `
                <div> USA: ${attack} </div>
                <div> ${currentVictim}'s response: ${response} </div>
                `;
        }
        else {
            responseField.innerHTML = `Today, this happened : ${whiteHouseEvent}. And ${currentVictim} responded with "${response}"`;    
        }
    }

    if (currentEvent.eventName === eventArray[3].eventName) {
        response = currentVictim.response_4;
        if (response === null){
            responseField.innerHTML = `How to nuke your soft power 101`;
        }
        else {
            console.log(response)
            responseField.innerHTML = response;
        }
    }
}
