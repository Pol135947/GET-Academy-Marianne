const model = {
    app: {
        currentPage: "simulation",
        pages: [],
        darkMode: false, // You can add logic to toggle this
    },

    input: {
        victim: "",
    },

    data: {
        countries: [
            { countryName: "Australia",
                img: "placeholder.png",
                response_1: "Bruh... Wtf did we do to you!? Applying counter-tariffs immediately.",
                response_2: null, // Response to Annexation/Military
                response_3: "Boycott USA!!! This rhetoric is damaging global stability.", // Response to Controversy
                response_4: null // Response to "Nothing" (Russia-related)
            },
            { countryName: "Canada",
                img: "placeholder.png",
                response_1: "Alright. You want a trade fight!? You'll get one. Remember USA, you started it. Counter-tariffs activated.",
                response_2: "Canada is NOT for fucking sale! Annexation? Are you insane?",
                response_3: "We condemn these divisive statements. This isn't leadership.",
                response_4: "Why are you attacking us and not focusing on actual global threats like Russia!?"
            },
            { countryName: "Greenland", // Technically part of Denmark
                img: "placeholder.png",
                response_1: "We primarily trade via Denmark/EU... but okay? Weird.",
                response_2: "Fuck off, Greenland is not for sale. Greenland is ours! (Says Denmark)",
                response_3: "The world is watching this instability.",
                response_4: null
            },
            { countryName: "Panama",
                img: "placeholder.png",
                response_1: "Targeting the Canal Free Trade Zone? Bold move, Cotton. Let's see how it plays out.",
                response_2: null, // Handled in generic military threat section
                response_3: null,
                response_4: null
            },
            { countryName: "Mexico",
                img: "placeholder.png",
                response_1: "Again with the tariffs? We'll retaliate proportionally. This hurts your consumers too, you know.",
                response_2: "Military threats? We are neighbors. This is counterproductive.",
                response_3: "Such statements fuel xenophobia. We expect respect.",
                response_4: null
            },
            { countryName: "Ukraine",
                img: "placeholder.png",
                response_1: "Seriously? Tariffs now? We need support, not economic pressure!",
                response_2: "Distractions and threats while we fight for survival... Thanks?",
                response_3: "Is this meant to undermine our support?",
                response_4: "We're getting mixed signals. Are you helping us or Russia?" // Changed from "fucked" to fit context better
            },
            { countryName: "UK",
                img: "placeholder.png",
                response_1: "Charming. Special relationship, eh? We'll respond in kind.",
                response_2: null,
                response_3: "Unsupported claims and divisive rhetoric help no one. Focus on reality.",
                response_4: "Are you being serious? Since when is Russia our friend? This undermines NATO."
            },
            { countryName: "France",
                img: "placeholder.png",
                response_1: "We're tariffing back your asses. You asked for it. Vive la France!",
                response_2: null,
                response_3: "Give us back the Statue of Liberty. You're clearly not worthy anymore. Such statements are unacceptable.",
                response_4: "Russia is our adversary, not a partner. This is dangerous."
            },
            { countryName: "Japan",
                img: "placeholder.png",
                response_1: "Deep breaths... Maintain calm. We hope this is temporary and seek resolution through dialogue.",
                response_2: null,
                response_3: "Silence. Let's hope this blows over quickly.", // Changed from "Phew"
                response_4: "Questioning alliances while praising adversaries? This is destabilizing."
            },
            { countryName: "Norway",
                img: "placeholder.png",
                response_1: "Bruh, wtf are we supposed to do? We're not even in the EU! But fine, counter-tariffs it is.",
                response_2: "Attacking allies? Unbelievable.",
                response_3: "Boycott!!! This is not how international relations work.",
                response_4: null
            },
            { countryName: "Germany", // Added
                img: "placeholder.png",
                response_1: "Fine. We impose return tariffs, focusing on key US exports. This trade war is foolish.",
                response_2: "Threatening EU/NATO members? This is an attack on all of us.",
                response_3: "These statements are deeply concerning and erode trust.",
                response_4: "Cozying up to Russia? Have you learned nothing from history?"
            },
            { countryName: "South Korea", // Added
                img: "placeholder.png",
                response_1: "This impacts our industries significantly. We must protest and consider reciprocal measures.",
                response_2: null,
                response_3: "We urge restraint and focus on diplomatic solutions.",
                response_4: "Our alliance is vital for regional security. Why question it?"
            },
             { countryName: "India", // Added
                img: "placeholder.png",
                response_1: "We will analyze the impact and respond appropriately, perhaps with our own tariffs.",
                response_2: null,
                response_3: "We focus on our own path, but observe global events closely.",
                response_4: "Maintaining relationships with all powers is complex. US actions add uncertainty."
            },
             { countryName: "Brazil", // Added
                img: "placeholder.png",
                response_1: "Unilateral tariffs are regrettable. We will defend our economic interests.",
                response_2: null,
                response_3: "We promote dialogue, not division.",
                response_4: null
            },
            { countryName: "EU",
                img: "placeholder.png",
                response_1: "Fine. We'll return the favour with targeted tariffs. Fuck your Republican States' exports.",
                response_2: "An attack on one is an attack on all. Do not test European unity or NATO.",
                response_3: "This administration's statements are becoming increasingly erratic and damaging.",
                response_4: "Calling allies traitors while praising Russia? Unacceptable and dangerous."
            },
            { countryName: "Russia",
                img: "placeholder.png",
                response_1: "Tariff what? Our $3.5 billion in exports? Cute. This doesn't hurt us.",
                response_2: "Excellent! While the US distracts itself, perhaps it's time to secure more of Ukraine.",
                response_3: "What a joke. The West is imploding.",
                response_4: "We conquered the White House without firing a shot. Historic moment for Russia. Useful idiots abound."
            },
            { countryName: "China",
                img: "placeholder.png",
                response_1: "We respond proportionally. Here is a 10% tariff on soybeans and Boeings. Your move.",
                response_2: "Never interrupt your enemy when they are making a mistake. Let them alienate their allies.",
                response_3: null, // China might just ignore internal US controversies unless directly targeted
                response_4: "If they think they can gain leverage over us via Russia... they fundamentally misunderstand geopolitics. Dream on."
            },
        ],

        events: [
            { eventName: "Tariff War",
                tariffRates:[10, 15, 25, 30, 50, 100, 200], // Added more rates
                items: [
                    "steel and aluminium imports", "European cars", "French wine and cheese", "Scotch whisky",
                    "consumer electronics components", "agricultural products (e.g., soybeans, pork)", "heavy machinery",
                    "textiles and apparel", "maple syrup", "seafood", "olive oil", "motorcycles" // Added more items
                ]
            },
            { eventName: "Annexation and military threats",
                possibilities: {
                    // Target for US action
                    annexation: ["Canada", "Greenland"],
                    military: ["Panama", "Gaza", "EU", "NATO", "Houthis", "Iran", "Mexico"] // Added Mexico
                }
            },
            { eventName: "Controversies",
                whiteHouseEvents: [
                  "Trump administration making embarrassing gaffes on world stage",
                  "Executive Order bypassing Congress sparks constitutional debate",
                  "Mass deportations announced targeting specific nationalities",
                  "Sensitive military plans discussed openly on insecure channel (e.g., Signal, Truth Social)",
                  "Praising dictators while criticizing democratic allies",
                  "Reinstating controversial travel bans targeting specific religious or national groups",
                  "Appointing controversial figures with conflicts of interest",
                  "Ignoring scientific consensus on climate change",
                  "Accusing opponents of treason without evidence" // Added more events
                ],
                sentences: [
                    "Posting doctored videos or images",
                    "Making unsubstantiated claims about election fraud",
                    "Using racially charged language ('invasion', 'vermin')",
                    "Claiming absolute immunity or power",
                    "Referring to 'the REAL Americans' vs 'others'",
                    "Attacking the judiciary or press as 'enemies of the people'",
                    "Promoting conspiracy theories (e.g., QAnon adjacent)",
                    "Making misogynistic or sexist remarks" // Added more sentences
                ],
                targets: [
                  "African Nations", // Broadened
                  "Immigrants (general or specific groups)", // Broadened
                  "Asian Americans / China", // Broadened
                  "White Nationalists (as dog-whistle audience)",
                  "Muslims / Middle Eastern Nations", // Broadened
                  "Latinos / Mexico / Central America", // Broadened
                  "Native Americans",
                  "LGBTQ+ Community",
                  "Political Opponents",
                  "Journalists / Media Outlets",
                  "International Organizations (UN, WHO)" // Added more targets
                ],
                platforms: [
                  "X (Twitter)", // Updated name
                  "Truth Social",
                  "Fox News Interview",
                  "Rally Speech", // Added
                  "Official WH Press Briefing", // Added
                  "Rumble",
                  "Newsmax",
                  "Personal blog/website" // Added
                ]
              },
            { eventName: "Pro-Russia Shift / Alliance Questions", // Renamed for clarity
                reasons: ["Praising Putin", "Questioning NATO Article 5", "Suggesting Russia keep occupied territory", "Withdrawing US troops unilaterally"] } // Made this more descriptive
        ]
    }
};


function getRandomElement(array) {
    if (!array || array.length === 0) {
        return null; // Handle empty or undefined arrays gracefully
    }
    return array[Math.floor(Math.random() * array.length)];
}

// txt fields refs
const victimField = document.getElementById('victim');
const eventField = document.getElementById('event');
const responseField = document.getElementById('response');
const startButton = document.getElementById('startButton');
// const darkModeToggle = document.getElementById('darkModeToggle'); // Get ref if you add the button

// Data shortcuts
const countries = model.data.countries;
const eventArray = model.data.events;

const todaysVictim = () => getRandomElement(countries);
const todaysEvent = () => getRandomElement(eventArray);

// --- Main Simulation Logic ---
function start() {
    const currentVictim = todaysVictim();
    const currentEvent = todaysEvent();

    if (!currentVictim || !currentEvent) {
        console.error("Failed to select victim or event.");
        responseField.innerHTML = "Error: Could not generate simulation event.";
        return;
    }

    us_politics_simulation(currentVictim, currentEvent); // Changed function name slightly
}

function us_politics_simulation(currentVictim, currentEvent) {

    let response = '';
    victimField.textContent = currentVictim.countryName; // Use textContent for text only
    eventField.textContent = currentEvent.eventName;

    // --- Tariff War Event ---
    if (currentEvent.eventName === "Tariff War") {
        response = currentVictim.response_1;
        const tariffRate = getRandomElement(currentEvent.tariffRates);
        const item = getRandomElement(currentEvent.items);

        if (response === null) {
            // Generic response if no specific one exists
            responseField.innerHTML = `
            <div><strong>USA Action:</strong> Imposed a ${tariffRate}% tariff on ${item} from ${currentVictim.countryName}. MAGA (Make Tariffs Great Again!).</div>
            <div><strong>${currentVictim.countryName}'s Likely Response:</strong> Is that how you want to play? Fine. Counter-tariffing ${tariffRate}% on key US goods. MTGA (Make Trump Go Away!).</div>
            `;
        } else {
            // Use the country's specific response_1
            responseField.innerHTML = `
            <div><strong>USA Action:</strong> Imposed a ${tariffRate}% tariff on ${item} from ${currentVictim.countryName}.</div>
            <div><strong>${currentVictim.countryName}'s Response:</strong> ${response}</div>
            `;
        }
    }

    // --- Annexation and Military Threats Event ---
    else if (currentEvent.eventName === "Annexation and military threats") {
        response = currentVictim.response_2;
        const annexationTargets = currentEvent.possibilities.annexation;
        const militaryTargets = currentEvent.possibilities.military;
        const allTargets = annexationTargets.concat(militaryTargets);
        const miniVictim = getRandomElement(allTargets); // The specific target of this instance

        if (response === null) {
            let attack = `Generic threat issued.`;
            let victimResponse = `Generic concern expressed.`;

            // Check if the miniVictim is in the annexation list *FIXED*
            if (annexationTargets.includes(miniVictim)) {
                switch (miniVictim) {
                    case "Canada":
                        attack = `US floated the idea of annexing Canada as the 51st State for 'economic synergy'.`;
                        victimResponse = `Absolutely not. We are a sovereign nation. This is absurd.`;
                        break;
                    case "Greenland":
                        attack = `US offered to buy Greenland (again) citing 'strategic importance'.`;
                        victimResponse = `(Via Denmark) Greenland is not for sale. This is disrespectful.`;
                        break;
                }
            }
            // Otherwise, it's a military threat target
            else {
                switch (miniVictim) {
                    case "Panama":
                        attack = `Threatened increased US military presence near the Canal to 'ensure security' against rivals.`;
                        victimResponse = `Our neutrality is paramount. We reject foreign military interference.`;
                        break;
                    case "Gaza": // Note: This is highly sensitive, reflecting potential controversial statements
                        attack = `Administration figure suggested controversial plans for post-conflict Gaza, ignoring Palestinian sovereignty.`;
                        victimResponse = `(International Community) Such proposals are illegal and inflammatory.`;
                        break;
                    case "EU":
                         attack = `Threatened tariffs or reduced cooperation if EU doesn't align perfectly with US foreign policy demands.`;
                        victimResponse = `The EU acts in its own interest. We won't be bullied.`;
                        break;
                    case "NATO":
                        attack = `Questioned Article 5 commitments, demanding allies pay significantly more for US protection.`;
                        victimResponse = `(NATO Allies) The 2% GDP guideline exists. Burden sharing is important, but so is commitment.`;
                        break;
                    case "Houthis":
                         attack = `Announced potential unilateral military action against Houthi targets, bypassing allies.`;
                        victimResponse = `(Regional Actors) Unilateral actions could destabilize the region further.`;
                        break;
                    case "Iran":
                         attack = `Issued warnings of pre-emptive strikes against Iran's nuclear program.`;
                        victimResponse = `We will defend ourselves against any aggression.`;
                        break;
                    case "Mexico":
                         attack = `Threatened military intervention at the border to stop immigration or cartels.`;
                        victimResponse = `This is unacceptable rhetoric. We cooperate on security, but reject military threats.`;
                        break;
                    default:
                         attack = `Made vague military threats towards ${miniVictim}.`;
                         victimResponse = `We urge de-escalation and diplomacy.`;

                }
            }
            responseField.innerHTML = `
                <div><strong>USA Action/Statement:</strong> ${attack}</div>
                <div><strong>Target (${miniVictim}) / ${currentVictim.countryName}'s Likely Response:</strong> ${victimResponse}</div>
                `;

        } else {
            // Use the country's specific response_2
             responseField.innerHTML = `
                <div><strong>USA Action/Statement:</strong> Issued threats or floated annexation ideas targeting ${miniVictim ? miniVictim : 'allies/regions'}.</div>
                <div><strong>${currentVictim.countryName}'s Response:</strong> ${response}</div>
             `;
        }
    }

    // --- Controversies Event ---
    else if (currentEvent.eventName === "Controversies") {
        response = currentVictim.response_3;

        // Generate random elements *before* the if/else check *FIXED*
        const whiteHouseEvent = getRandomElement(currentEvent.whiteHouseEvents);
        const sentence = getRandomElement(currentEvent.sentences);
        const target = getRandomElement(currentEvent.targets);
        const platform = getRandomElement(currentEvent.platforms);
        let controversyDesc = `Today's controversy involves: "${whiteHouseEvent}". Specifically: "${sentence}" targeting/affecting ${target}, amplified via ${platform}.`;


        if (response === null) {
            // Generic response
             responseField.innerHTML = `
                <div><strong>USA Domestic Event:</strong> ${controversyDesc}</div>
                <div><strong>${currentVictim.countryName}'s Likely Reaction:</strong> (Observing quietly) Just another day... This internal chaos is worrying for global stability.</div>
            `;
        } else {
            // Use the country's specific response_3 *FIXED* - now has context
             responseField.innerHTML = `
                <div><strong>USA Domestic Event:</strong> ${controversyDesc}</div>
                <div><strong>${currentVictim.countryName}'s Response:</strong> ${response}</div>
             `;
        }
    }

    // --- Pro-Russia Shift / Alliance Questions Event ---
    else if (currentEvent.eventName === "Pro-Russia Shift / Alliance Questions") {
        response = currentVictim.response_4;
        const reason = getRandomElement(currentEvent.reasons);

        if (response === null) {
            // Generic response
            responseField.innerHTML = `
             <div><strong>USA Action/Statement:</strong> ${reason}. Raising questions about traditional alliances.</div>
             <div><strong>${currentVictim.countryName}'s Likely Reaction:</strong> This uncertainty is unhelpful. We rely on stable partnerships.</div>
            `;
        } else {
             // Use the country's specific response_4
            responseField.innerHTML = `
                <div><strong>USA Action/Statement:</strong> ${reason}. Raising questions about traditional alliances.</div>
                <div><strong>${currentVictim.countryName}'s Response:</strong> ${response}</div>
            `;
        }
    }
}

// --- Event Listeners ---
startButton.addEventListener('click', start);

// Optional: Dark Mode Toggle Logic (Add button in HTML first)
/*
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    model.app.darkMode = !model.app.darkMode; // Update state if needed
});
*/

// --- Initial Run ---
// Optionally run once on load, or wait for button click
start(); // Comment this out if you want the user to click the button first