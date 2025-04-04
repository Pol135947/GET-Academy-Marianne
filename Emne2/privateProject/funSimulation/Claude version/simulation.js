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
                img: "funSimulation/IMG/australia.jpg",
                response_1: "Bruh... Wtf did we do to you!?", 
                response_2: "We're supposed to be allies, mate!", 
                response_3: "Boycott USA!!!", 
                response_4: "Maybe we should strengthen our ties with Asia instead."
            },

            { countryName: "Canada", 
                img: "canada.png",
                response_1: "Alright. You want a fight!? You'll get one. Remember USA, you started it.",  
                response_2: "Canada is not for sale!", 
                response_3: "They voted for him, not our problem.", 
                response_4: "Why are you attacking us and not Russia!?"
            },

            { countryName: "Greenland", 
                img: "greenland.png",
                response_1: "Our ice is not for negotiation.", 
                response_2: "Greenland is not for sale. Greenland belongs to Denmark!", 
                response_3: "This is getting ridiculous.", 
                response_4: "Does he know we're part of Denmark?"
            },

            { countryName: "Panama", 
                img: "panama.png",
                response_1: "The Canal is sovereign Panamanian territory.", 
                response_2: "This is a violation of international law.", 
                response_3: "We thought we were past this colonial mentality.", 
                response_4: "Not this again..."
            },

            { countryName: "Mexico", 
                img: "mexico.png",
                response_1: "What do we do? Posture or remain quiet? We can't win this war...", 
                response_2: "No, we will NOT pay for any wall.", 
                response_3: "Perhaps it's time to diversify our trade partners.", 
                response_4: "Our dignity is not negotiable."
            },

            { countryName: "Ukraine", 
                img: "ukraine.png",
                response_1: "We need allies more than ever now.", 
                response_2: "This undermines global security.", 
                response_3: "Democracy must stand together.", 
                response_4: "We're in a precarious position now, aren't we?"
            },

            { countryName: "UK", 
                img: "uk.png",
                response_1: "Maybe Brexit was a bad idea... But we'll be fine", 
                response_2: "The special relationship feels rather one-sided lately.", 
                response_3: "Someone needs a history lesson.", 
                response_4: "Since when is Russia our friend?"
            },

            { countryName: "France", 
                img: "france.png",
                response_1: "We're tariffing back your imports. You asked for it", 
                response_2: "Liberté, égalité, fraternité - all missing from this agenda.", 
                response_3: "Give us back the Statue of Liberty. You're not worthy anymore", 
                response_4: "Russia is our enemy, not our ally.",
            },

            { countryName: "Japan", 
                img: "japan.png",
                response_1: "Breathe... Don't say anything and hope they forget about us",  
                response_2: "Our defense agreement needs reconsideration.", 
                response_3: "Phew. We're in the clear. For now", 
                response_4: "This changes our strategic calculations."
            },

            { countryName: "Norway", 
                img: "norway.png",
                response_1: "Wtf are we supposed to do? Join EU!?", 
                response_2: "Aren't they supposed to be your closest allies!?", 
                response_3: "Boycott!!!", 
                response_4: "Arctic security is now at risk.",
            },

            { countryName: "EU", 
                img: "eu.png",
                response_1: "Fine. We'll return the favor. This isn't how allies treat each other.", 
                response_2: "European sovereignty has never been more important.", 
                response_3: "This is getting worse by the minute", 
                response_4: "We don't need you anyway (We kind of do, but we'll figure it out)"
            },

            { countryName: "Russia", 
                img: "russia.png",
                response_1: "Tariff what? $3.5 billion?", 
                response_2: "If USA is doing it, we're taking Ukraine", 
                response_3: "What a joke", 
                response_4: "We achieved our geopolitical goals without firing a shot. Historic."
            },

            { countryName: "China", 
                img: "china.png",
                response_1: "BTW, here is a 10% tariff back at you", 
                response_2: "Don't interrupt your enemy while they shoot themselves in the foot.", 
                response_3: "We're ready for any scenario.", 
                response_4: "If they think they can get leverage via Russia... dream on."
            },

            { countryName: "India", 
                img: "india.png",
                response_1: "We need to balance our relationships carefully.", 
                response_2: "Our strategic autonomy is paramount.", 
                response_3: "Democracy should stand together globally.", 
                response_4: "This complicates our geopolitical calculations."
            },

            { countryName: "Brazil", 
                img: "brazil.png",
                response_1: "The Americas should work together, not against each other.", 
                response_2: "Our sovereignty is non-negotiable.", 
                response_3: "We condemn any form of discrimination.", 
                response_4: "This undermines global stability."
            },
        ],
        
        events: [
            { eventName: "Tariff War", 
                tariffRates:[10, 25, 50, 100, 200], 
                items: ["steel and aluminum imports", "alcohol from EU countries", "energy", "sports equipment", "computers", "cast iron items", "agricultural products", "automotive parts", "pharmaceutical ingredients", "electronics"] 
            }, 

            { eventName: "Annexation and military threats",
                possibilities: {
                    annexation: ["Canada", "Greenland"],
                    military: ["Panama", "Gaza", "EU", "NATO", "Houthis", "Iran", "Taiwan", "South China Sea"] 
                } 
            },

            { eventName: "Controversies",
                whiteHouseEvents: [
                  "Administration doing something diplomatically embarrassing",
                  "Constitutional challenges",
                  "Mass deportation announcements",
                  "Leaking military secrets on social media",
                  "Praising authoritarian leaders",
                  "Reinstating controversial travel bans targeting Muslim-majority countries", 
                ],
                sentences: [
                    "Making demonstrably false claims",
                    "Inflammatory statements about minorities",
                    "Claims of being pro-freedom while silencing critics",
                    "Dog-whistling about 'real Americans'",
                    "Undermining international agreements",
                    "Questioning the legitimacy of democratic institutions"
                ],
                targets: [
                  "African Americans",
                  "Foreign nationals",
                  "Asian Americans",
                  "Minority religions",
                  "Muslim communities",
                  "Latino populations",
                  "Indigenous communities",
                  "LGBTQ+ individuals",
                  "Immigrants"
                ],
                
                platforms: [
                  "Twitter/X",
                  "Truth Social",
                  "Fox News",
                  "Signal",
                  "Rumble",
                  "Newsmax",
                  "Official press briefings",
                  "International summits"
                ]
              }, 
            { eventName: "Favorable treatment of Russia", 
                reasons: ["Security alliance discussions", "Trade deal announcements", "Diplomatic praise", "Sanctions relief", "Intelligence sharing proposals"]} 
        ]
    }
};

// DOM elements
let victimField;
let eventField;
let responseField;
let table;
let simulateButton;

// Current simulation data
let currentVictim;
let currentEvent;

function initializeElements() {
    victimField = document.getElementById('victim');
    eventField = document.getElementById('event');
    responseField = document.getElementById('response');
    table = document.getElementById('table');
    simulateButton = document.getElementById('simulate-button');
    
    if (simulateButton) {
        simulateButton.addEventListener('click', start);
    }
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function victimInfo(victim) {
    return model.data.countries.find(country => country.countryName === victim);
}

function findEvent(name) {
    return model.data.events.find(event => event.eventName === name);
}

function start() {
    currentVictim = getRandomElement(model.data.countries);
    currentEvent = getRandomElement(model.data.events);
    us_tariff_politics(currentVictim, currentEvent);
}

function us_tariff_politics(currentVictim, currentEvent) {
    if (!victimField || !eventField || !responseField) {
        console.error("DOM elements not initialized");
        return;
    }

    victimField.textContent = currentVictim.countryName;
    eventField.textContent = currentEvent.eventName;
    
    let response = '';
    let outputHTML = '';

    // Event 1: Tariff War
    if (currentEvent.eventName === "Tariff War") {
        response = currentVictim.response_1;
        
        if (response === null || response === undefined) {
            const tariffRate = getRandomElement(currentEvent.tariffRates);
            const item = getRandomElement(currentEvent.items);
            
            outputHTML = `
                <div class="message usa-message">USA: You get a ${tariffRate}% tariff on ${item}. MTGA (Make Tariffs Great Again!)</div>
                <div class="message country-message">${currentVictim.countryName}: Is that what you want? Here's ${tariffRate}% tariff on ${item} too. MTGA (Make Trump Go Away!)</div>
            `;
        } else {
            outputHTML = `
                <div class="message usa-message">USA: We're imposing tariffs on your products. America First!</div>
                <div class="message country-message">${currentVictim.countryName}: ${response}</div>
            `;
        }
    }
    // Event 2: Annexation and military threats
    else if (currentEvent.eventName === "Annexation and military threats") {
        response = currentVictim.response_2;
        const annexation = currentEvent.possibilities.annexation;
        const military = currentEvent.possibilities.military;
        
        if (response === null || response === undefined) {
            const targetList = [...annexation, ...military];
            const miniVictim = getRandomElement(targetList);
            let attack = '';
            let countryResponse = '';
            
            if (annexation.includes(miniVictim)) {
                switch (miniVictim) {
                    case "Canada":
                        attack = "We're considering making Canada the 51st State. It's a beautiful country, and we'd take great care of it.";
                        countryResponse = "Our sovereignty is non-negotiable. We are not for sale or annexation.";
                        break;
                    case "Greenland":
                        attack = "Greenland would be a strategic acquisition for national security reasons. We'd pay a fair price.";
                        countryResponse = "MAGA: Make America Go Away. Greenland is not for sale.";
                        break;
                    default:
                        attack = "We have territorial interests that align with our national security.";
                        countryResponse = "This is an outrageous suggestion and violation of sovereignty.";
                }
            } else {
                switch (miniVictim) {
                    case "Panama":
                        attack = "We want the Canal to prevent China and America's enemies from abusing it.";
                        countryResponse = "The Canal is sovereign Panamanian territory under international law.";
                        break;
                    case "Gaza":
                        attack = "Let's transform Gaza into a Riviera, and relocate the Palestinian population.";
                        countryResponse = "That would constitute a war crime under international law.";
                        break;
                    case "EU":
                        attack = "European countries need to pay more for their defense or face consequences.";
                        countryResponse = "Threats undermine the transatlantic alliance that has kept peace for decades.";
                        break;
                    case "NATO":
                        attack = "Pay up 5% of GDP or we might reconsider our Article 5 obligations.";
                        countryResponse = "The NATO agreement states 2% of GDP. This undermines collective security.";
                        break;
                    case "Houthis":
                        attack = "We're planning significant operations against Houthi targets.";
                        countryResponse = "This could escalate regional tensions further.";
                        break;
                    case "Iran":
                        attack = "Sign this nuclear deal or face military consequences.";
                        countryResponse = "Threats only strengthen our resolve for independence.";
                        break;
                    case "Taiwan":
                        attack = "We're reconsidering our position on Taiwan's status.";
                        countryResponse = "This would dramatically alter the security landscape of East Asia.";
                        break;
                    case "South China Sea":
                        attack = "We might reduce our presence in disputed territories.";
                        countryResponse = "This would embolden territorial expansionism.";
                        break;
                    default:
                        attack = "We have strategic military interests here.";
                        countryResponse = "This is dangerous escalation.";
                }
            }
            
            outputHTML = `
                <div class="message usa-message">USA: ${attack}</div>
                <div class="message country-message">${currentVictim.countryName}: ${countryResponse}</div>
            `;
        } else {
            outputHTML = `
                <div class="message usa-message">USA: We're considering our options regarding territorial expansion.</div>
                <div class="message country-message">${currentVictim.countryName}: ${response}</div>
            `;
        }
    }
    // Event 3: Controversies
    else if (currentEvent.eventName === "Controversies") {
        response = currentVictim.response_3;
        const whiteHouseEvents = currentEvent.whiteHouseEvents;
        const sentences = currentEvent.sentences;
        const targets = currentEvent.targets;
        const platforms = currentEvent.platforms;
        
        if (response === null || response === undefined) {
            const whiteHouseEvent = getRandomElement(whiteHouseEvents);
            const sentence = getRandomElement(sentences);
            const target = getRandomElement(targets);
            const platform = getRandomElement(platforms);
            
            let attack = `Today, this happened: ${whiteHouseEvent}. `;
            
            switch (whiteHouseEvent) {
                case "Administration doing something diplomatically embarrassing":
                    attack += `Specifically, they made ${sentence} about ${target} on ${platform}.`;
                    break;
                case "Constitutional challenges":
                    attack += `There are concerns about democratic norms and checks and balances.`;
                    break;
                case "Mass deportation announcements":
                    attack += `Targeting specific communities has raised international concerns.`;
                    break;
                case "Leaking military secrets on social media":
                    attack += `Sensitive information was shared inappropriately on ${platform}.`;
                    break;
                case "Praising authoritarian leaders":
                    attack += `Comments supporting autocratic governance models have alarmed democratic allies.`;
                    break;
                case "Reinstating controversial travel bans targeting Muslim-majority countries":
                    attack += `This policy has been criticized as discriminatory by human rights organizations.`;
                    break;
                default:
                    attack += `This has raised diplomatic concerns internationally.`;
            }
            
            outputHTML = `
                <div class="message usa-message">USA: ${attack}</div>
                <div class="message country-message">${currentVictim.countryName}: This is concerning for international relations and stability.</div>
            `;
        } else {
            const whiteHouseEvent = getRandomElement(currentEvent.whiteHouseEvents);
            outputHTML = `
                <div class="message usa-message">USA: ${whiteHouseEvent}</div>
                <div class="message country-message">${currentVictim.countryName}: ${response}</div>
            `;
        }
    }
    // Event 4: Favorable treatment of Russia
    else if (currentEvent.eventName === "Favorable treatment of Russia") {
        response = currentVictim.response_4;
        const reason = getRandomElement(currentEvent.reasons);
        
        if (response === null || response === undefined) {
            outputHTML = `
                <div class="message usa-message">USA: We're establishing closer ties with Russia through ${reason}.</div>
                <div class="message country-message">${currentVictim.countryName}: This fundamentally alters the geopolitical landscape and raises serious security concerns.</div>
            `;
        } else {
            outputHTML = `
                <div class="message usa-message">USA: We're establishing closer ties with Russia through ${reason}.</div>
                <div class="message country-message">${currentVictim.countryName}: ${response}</div>
            `;
        }
    }
    
    responseField.innerHTML = outputHTML;
    
    // Add country flag if available
    if (currentVictim.img && currentVictim.img !== "placeholder.png") {
        const flagHTML = `<img src="${currentVictim.img}" alt="${currentVictim.countryName} flag" class="country-flag">`;
        document.getElementById('country-flag-container').innerHTML = flagHTML;
    } else {
        document.getElementById('country-flag-container').innerHTML = '';
    }
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    // Add initial event listener
    if (simulateButton) {
        simulateButton.addEventListener('click', start);
    } else {
        // If button doesn't exist yet, create the UI
        createSimulationUI();
    }
});

// Function to create the simulation UI if it doesn't exist
function createSimulationUI() {
    const container = document.createElement('div');
    container.className = 'simulation-container';
    
    container.innerHTML = `
        <h1>Global Response Simulator</h1>
        <div class="simulation-header">
            <button id="simulate-button" class="simulate-button">Generate Scenario</button>
            <div class="toggle-container">
                <label class="switch">
                    <input type="checkbox" id="dark-mode-toggle">
                    <span class="slider round"></span>
                </label>
                <span>Dark Mode</span>
            </div>
        </div>
        
        <div class="simulation-content">
            <div class="scenario-box">
                <div class="scenario-header">
                    <h2>Current Scenario:</h2>
                </div>
                <div class="scenario-details">
                    <div class="country-info">
                        <div id="country-flag-container"></div>
                        <h3>Country: <span id="victim">Click Generate to start</span></h3>
                    </div>
                    <h3>Event: <span id="event">Click Generate to start</span></h3>
                </div>
            </div>
            
            <div class="response-box">
                <h2>Diplomatic Exchange:</h2>
                <div id="response" class="response-content">
                    <div class="message initial-message">Click the "Generate Scenario" button to simulate international responses.</div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(container);
    
    // Reinitialize elements
    initializeElements();
    
    // Setup dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            document.body.classList.toggle('dark-mode');
            model.app.darkMode = !model.app.darkMode;
        });
    }
}