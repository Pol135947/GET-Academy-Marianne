const mainStats = {
    fourCost: ["Atk%", "Hp%", "Def%", "Crit Rate", "Crit Damage", "Healing Bonus"],
    threeCost: ["Atk%", "Hp%", "Def%", "Glacio DMG bonus", "Fusion DMG bonus", "Electro DMG bonus", "Aero DMG bonus", "Spectro DMG bonus", "Havoc DMG bonus", "Energy Regen"],
    oneCost: ["Atk%", "Hp%", "Def%"]
};

const locations = {
    "Central Plains": ["Lingering Tunes", "Rejuvenating Glow"],
    "Desorock Highland I": ["Sierra Gale", "Freezing Frost"],
    "Desorock Highland II": ["Void Thunder", "Molten Rift"],
    "Dim Forest": ["Havoc Eclipse", "Moonlit Clouds"],
    "Port City of Guixu": ["Molten Rift", "Rejuvenating Glow"],
    "Tiger's Maw": ["Freezing Frost", "Void Thunder"],
    "Whining Aix's Mire": ["Celestial Light", "Lingering Tunes"],
    "Fagaceae Peninsula": ["Frosty Resolve", "Eternal Radiance"],
    "Penitent's End": ["Empyrean Anthem", "Eternal Radiance"],
    "Riccioli Islands": ["Eternal Radiance", "Tidebreaking Courage"]
};

const Freezing_Frost = {
    oneCost: ["Clang Bang", "Excarat", "Fusion Prism", "Glacio Predator", "Glacio Prism", "Gulpuff", "Hoartoise", "Sabyr Boar"],
    threeCost: ["Autopuppet Scout", "Glacio Dreadmane", "Lumiscale Construct", "Roseshroom", "Tambourinist"],
    fourCost: ["Lampylumen Myriad"]
};

const Molten_Rift = {
    oneCost: ["Baby Viridblaze Saurian", "Electro Predator", "Fusion Dreadmane", "Fusion Prism", "Fusion Warrior", "Lava Larva", "Snip Snap", "Spectro Prism", "Traffic Illuminator"],
    threeCost: ["Havoc Dreadmane", "Violet-Feathered Heron", "Viridblaze Saurian"],
    fourCost: ["Inferno Rider", "Nightmare Inferno Rider"]
};

const Void_Thunder = {
    oneCost: ["Aero Predator", "Baby Viridblaze Saurian", "Electro Predator", "Fission Junrock", "Fusion Warrior", "Havoc Prism", "Spectro Prism", "Traffic Illuminator", "Vanguard Junrock"],
    threeCost: ["Flautist", "Lumiscale Construct", "Violet-Feathered Heron"],
    fourCost: ["Tempest Mephis", "Thundering Mephis", "Nightmare Tempest Mephis", "Nightmare Thundering Mephis"]
};

const Sierra_Gale = {
    oneCost: ["Aero Predator", "Chirpuff", "Dwarf Cassowary", "Fusion Warrior", "Hooscamp", "Sabyr Boar", "Traffic Illuminator", "Whiff Whaff", "Young Roseshroom"],
    threeCost: ["Carapace", "Cyan-Feathered Heron", "Hoochief"],
    fourCost: ["Feilian Beringal", "Nightmare Feilian Beringal"]
};

const Celestial_Light = {
    oneCost: ["Clang Bang", "Cruisewing", "Glacio Predator", "Gulpuff", "Havoc Prism", "Havoc Warrior", "Hoartoise", "Spectro Prism", "Zig Zag"],
    threeCost: ["Autopuppet Scout", "Cyan-Feathered Heron", "Lightcrusher", "Rocksteady Guardian"],
    fourCost: ["Mourning Aix", "Jué"]
};

const Havoc_Eclipse = {
    oneCost: ["Chirpuff", "Excarat", "Glacio Prism", "Havoc Prism", "Havoc Warrior", "Tick Tack", "Young Roseshroom"],
    threeCost: ["Havoc Dreadmane", "Roseshroom", "Tambourinist"],
    fourCost: ["Crownless", "Dreamless", "Nightmare Crownless"]
};

const Rejuvenating_Glow = {
    oneCost: ["Cruisewing", "Dwarf Cassowary", "Fission Junrock", "Fusion Dreadmane", "Snip Snap", "Tick Tack", "Vanguard Junrock", "Whiff Whaff"],
    threeCost: ["Chasm Guardian", "Hoochief", "Rocksteady Guardian", "Stonewall Bracer"],
    fourCost: ["Fallacy of No Return", "Bell-Borne Geochelone"]
};

const Moonlit_Clouds = {
    oneCost: ["Cruisewing", "Diamondclaw", "Fission Junrock", "Glacio Prism", "Sabyr Boar", "Whiff Whaff", "Zig Zag"],
    threeCost: ["Carapace", "Glacio Dreadmane", "Spearback", "Stonewall Bracer", "Viridblaze Saurian"],
    fourCost: ["Bell-Borne Geochelone", "Impermanence Heron"]
};

const Lingering_Tunes = {
    oneCost: ["Baby Viridblaze Saurian", "Diamondclaw", "Fusion Prism", "Hooscamp", "Lava Larva", "Snip Snap", "Tick Tack", "Vanguard Junrock", "Zig Zag"],
    threeCost: ["Chasm Guardian", "Flautist", "Spearback"],
    fourCost: ["Mech Abomination"]
};

const Frosty_Resolve = {
    oneCost: ["Chest Mimic", "Chop Chop Leftless", "Chop Chop Rightless", "Galescourge Stalker", "Golden Junrock", "Hocus Pocus", "Lottie Lost"],
    threeCost: ["Abyssal Mercator", "Abyssal Patricius", "Cuddle Wuddle", "Questless Knight"],
    fourCost: ["Sentry Construct"]
};

const Midnight_Veil = {
    oneCost: ["Chest Mimic", "Fae Ignis", "Frostscourge Stalker", "Nimbus Wraith", "Voltscourge Stalker"],
    threeCost: ["Abyssal Gladius", "Cuddle Wuddle", "Nocturnus Knight", "Questless Knight"],
    fourCost: ["Nightmare Impermanence Heron", "Lorelei"]
};

const Empyrean_Anthem = {
    oneCost: ["Calcified Junrock", "Chest Mimic", "Galescourge Stalker", "Hocus Pocus", "Nimbus Wraith", "Voltscourge Stalker"],
    threeCost: ["Abyssal Patricius", "Chop Chop", "Nocturnus Knight", "Vitreum Dancer"],
    fourCost: ["Hecate", "Nightmare Tempest Memphis"]
};

const Eternal_Radiance = {
    oneCost: ["Aero Prism", "Chop Chop", "Diggy Duggy", "Fae Ignis", "Frostscourge Stalker"],
    threeCost: ["Abyssal Mercator", "Diurnus Knight", "Rage Against the Statue", "Vitreum Dancer"],
    fourCost: ["Nightmare Mourning Aix"]
};

const Tidebreaking_Courage = {
    oneCost: ["Aero Prism", "Calcified Junrock", "Chop Chop Headless", "Chop Chop Leftless", "Chop Chop Rightless", "Diggy Duggy", "Lottie Lost"],
    threeCost: ["Abyssal Gladius", "Chop Chop", "Diurnus Knight", "Hurriclaw"],
    fourCost: ["Dragon of Dirge"]
};

const sonataSets = [Freezing_Frost, Molten_Rift, Void_Thunder, Sierra_Gale, Celestial_Light, Havoc_Eclipse, Rejuvenating_Glow, Moonlit_Clouds, Lingering_Tunes, Frosty_Resolve, Eternal_Radiance, Midnight_Veil, Empyrean_Anthem, Tidebreaking_Courage];

const echoesSet = [
    "Freezing Frost", "Molten Rift", "Void Thunder", "Sierra Gale", "Celestial Light", 
    "Havoc Eclipse", "Rejuvenating Glow", "Moonlit Clouds", "Lingering Tunes", 
    "Frosty Resolve", "Eternal Radiance", "Midnight Veil", "Empyrean Anthem", 
    "Tidebreaking Courage"
];

const tacetTypes = ["threeCost", "oneCost"] 
const bossTypes = ["fourCost"]

function populateDropdown(selectId, options) {
    const selectElement = document.getElementById(selectId);
    selectElement.innerHTML = "";
    options.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        selectElement.appendChild(opt);
    });
}

// Populate dropdowns on page load
window.onload = function() {
    populateDropdown("tacetLocation", Object.keys(locations));
    populateDropdown("bossLocation", Object.keys(locations));
    populateDropdown("tacetSet", echoesSet);
    populateDropdown("bossSet", echoesSet);

    populateDropdown("tacetMainStat3", mainStats.threeCost);
    populateDropdown("tacetMainStat1", mainStats.oneCost);
    populateDropdown("bossMainStat4", mainStats.fourCost);
};

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Helper function to convert set name to corresponding object
function getSetObjectFromName(setName) {
    switch (setName) {
        case "Freezing Frost": return Freezing_Frost;
        case "Molten Rift": return Molten_Rift;
        case "Void Thunder": return Void_Thunder;
        case "Sierra Gale": return Sierra_Gale;
        case "Celestial Light": return Celestial_Light;
        case "Havoc Eclipse": return Havoc_Eclipse;
        case "Rejuvenating Glow": return Rejuvenating_Glow;
        case "Moonlit Clouds": return Moonlit_Clouds;
        case "Lingering Tunes": return Lingering_Tunes;
        case "Frosty Resolve": return Frosty_Resolve;
        case "Eternal Radiance": return Eternal_Radiance;
        case "Midnight Veil": return Midnight_Veil;
        case "Empyrean Anthem": return Empyrean_Anthem;
        case "Tidebreaking Courage": return Tidebreaking_Courage;
        default: return Eternal_Radiance; // Default fallback
    }
}

function runTacetSimulation() {
    const location = document.getElementById("tacetLocation").value;
    const mainStat3 = document.getElementById("tacetMainStat3").value;
    const mainStat1 = document.getElementById("tacetMainStat1").value;
    const rightSet = document.getElementById("tacetSet").value;
    const repetitions = parseInt(document.getElementById("tacetRepetitions").value);

    const availableSets = locations[location] || [];
    const outputDiv = document.getElementById("tacetOutput");
    const messageDiv = document.getElementById("tacetMessage");

    let useful = 0;
    let useless = 0;
    let results = [];

    for (let i = 0; i < repetitions; i++) {
        let echoSetName, echoSet, echoType, mainstat, echoName;
        let validEchoFound = false;
        
        // Keep trying until we find a valid echo
        let maxAttempts = 100; // Prevent infinite loop
        let attempts = 0;
        
        while (!validEchoFound && attempts < maxAttempts) {
            attempts++;
            
            // Randomly select a set from available sets in this location
            echoSetName = getRandomElement(availableSets);
            echoSet = getSetObjectFromName(echoSetName);
            
            // Randomly select echo type (threeCost or oneCost)
            echoType = getRandomElement(tacetTypes);
            
            // Check if the set has echoes of this type
            if (echoSet[echoType] && echoSet[echoType].length > 0) {
                mainstat = getRandomElement(mainStats[echoType]);
                echoName = getRandomElement(echoSet[echoType]);
                validEchoFound = true;
            }
        }
        
        if (!validEchoFound) {
            continue; // Skip this simulation if we couldn't find a valid echo
        }
        
        let result = {
            echo: echoName,
            type: echoType,
            mainStat: mainstat,
            set: echoSetName,
            isUseful: false,
            message: ""
        };

        if (echoType === "threeCost") {
            if (mainstat === mainStat3) {
                if (echoSetName === rightSet) {
                    useful++;
                    result.isUseful = true;
                    result.message = "✔ Right set! Expect the rolls to go to shit.";
                } else {
                    useless++;
                    result.message = "❌ Wrong set. Pain.";
                }
            } else {
                useless++;
                result.message = "❌ Garbage.";
            }
        } else if (echoType === "oneCost") {
            if (mainstat === mainStat1) {
                if (echoSetName === rightSet) {
                    useful++;
                    result.isUseful = true;
                    result.message = "✔ Perfect drop! Just need good rolls...";
                } else {
                    useless++;
                    result.message = "⚠ Wrong set, but at least it's useful... cope.";
                }
            } else {
                useless++;
                result.message = "❌ Better luck next time.";
            }
        }

        results.push(result);
    }

    // Calculate success rate
    const successRate = repetitions > 0 ? Math.round((useful/repetitions)*100) : 0;

    // Build the output HTML
    let outputHTML = `
        <strong>Location:</strong> ${location} <br>
        <strong>Available Sets:</strong> ${availableSets.join(", ")} <br>
        <strong>Target Set:</strong> ${rightSet} <br>
        <strong>Target 3-Cost Main Stat:</strong> ${mainStat3} <br>
        <strong>Target 1-Cost Main Stat:</strong> ${mainStat1} <br>
        <strong>Repetitions:</strong> ${repetitions} <br><br>
        <strong>Results:</strong> ${useful} useful / ${useless} useless (${successRate}% useful) <br><br>
    `;

    // Add individual simulation results
    outputHTML += "<div class='simulation-results'>";
    results.forEach((result, index) => {
        outputHTML += `
            <div class="simulation-result ${result.isUseful ? 'useful' : 'useless'}">
                <strong>Simulation ${index + 1}:</strong> ${result.echo} (${result.set})<br>
                <strong>Type:</strong> ${result.type === "threeCost" ? "3-Cost" : "1-Cost"}<br>
                <strong>Main Stat:</strong> ${result.mainStat}<br>
                <strong>Result:</strong> ${result.message}<br>
            </div>
        `;
    });
    outputHTML += "</div>";

    outputDiv.innerHTML = outputHTML;
    messageDiv.innerHTML = "Simulation complete!";
}
function runBossSimulation() {
    const bossName = document.getElementById("bossName").value;
    const mainStat4 = document.getElementById("bossMainStat4").value;
    const targetSet = document.getElementById("bossSet").value;
    const repetitions = parseInt(document.getElementById("bossRepetitions").value);
    const outputDiv = document.getElementById("bossOutput");
    
    // Boss to set mapping
    const bossToSetMap = {
        "Lampylumen Myriad": "Freezing Frost",
        "Inferno Rider": "Molten Rift",
        "Nightmare Inferno Rider": "Molten Rift",
        "Tempest Mephis": "Void Thunder",
        "Thundering Mephis": "Void Thunder",
        "Nightmare Tempest Mephis": "Void Thunder",
        "Nightmare Thundering Mephis": "Void Thunder",
        "Feilian Beringal": "Sierra Gale",
        "Nightmare Feilian Beringal": "Sierra Gale",
        "Mourning Aix": "Celestial Light",
        "Jué": "Celestial Light",
        "Crownless": "Havoc Eclipse",
        "Dreamless": "Havoc Eclipse",
        "Nightmare Crownless": "Havoc Eclipse",
        "Fallacy of No Return": "Rejuvenating Glow",
        "Bell-Borne Geochelone": "Rejuvenating Glow",
        "Impermanence Heron": "Moonlit Clouds",
        "Mech Abomination": "Lingering Tunes",
        "Sentry Construct": "Frosty Resolve",
        "Nightmare Impermanence Heron": "Midnight Veil",
        "Lorelei": "Midnight Veil",
        "Hecate": "Empyrean Anthem",
        "Nightmare Mourning Aix": "Eternal Radiance",
        "Dragon of Dirge": "Tidebreaking Courage"
    };
    
    // Get the set associated with the selected boss
    const bossSet = bossToSetMap[bossName] || "";
    
    let useful = 0;
    let useless = 0;
    let results = [];
    
    // Create an array of all possible 4-cost echoes
    const allBosses = Object.keys(bossToSetMap);
    
    for (let i = 0; i < repetitions; i++) {
        // Randomly select main stat for this simulation
        const mainstat = getRandomElement(mainStats.fourCost);
        
        // For simplicity, use the selected boss name instead of randomly selecting one
        const echoName = bossName;
        const echoSetName = bossSet;
        
        let result = {
            echo: echoName,
            mainStat: mainstat,
            set: echoSetName,
            isUseful: false,
            message: ""
        };
        
        // Determine if this echo is useful based on main stat and set
        if (mainstat === mainStat4) {
            if (echoSetName === targetSet) {
                useful++;
                result.isUseful = true;
                result.message = "✔ Perfect drop! Right set and main stat!";
            } else {
                useless++;
                result.message = "⚠ Right main stat but wrong set.";
            }
        } else {
            useless++;
            result.message = "❌ Wrong main stat. Not useful.";
        }
        
        results.push(result);
    }
    
    // Calculate success rate
    const successRate = repetitions > 0 ? Math.round((useful/repetitions)*100) : 0;
    
    let successRateClass = '';
    if (successRate >= 70) successRateClass = 'high-success';
    else if (successRate >= 30) successRateClass = 'medium-success';
    else successRateClass = 'low-success';
    
    // Build the output HTML
    let outputHTML = `
        <strong>Boss:</strong> ${bossName} <br>
        <strong>Set:</strong> ${bossSet} <br>
        <strong>Target Set:</strong> ${targetSet} <br>
        <strong>Desired Main Stat:</strong> ${mainStat4} <br>
        <strong>Repetitions:</strong> ${repetitions} <br><br>
        <div class="success-rate ${successRateClass}">
            Success Rate: ${successRate}% (${useful}/${repetitions})
        </div>
    `;
    
    // Add individual simulation results
    outputHTML += "<div class='simulation-results'>";
    results.forEach((result, index) => {
        outputHTML += `
            <div class="simulation-result ${result.isUseful ? 'useful' : 'useless'}">
                <strong>Simulation ${index + 1}:</strong> ${result.echo}<br>
                <strong>Set:</strong> ${result.set}<br>
                <strong>Main Stat:</strong> ${result.mainStat}<br>
                <strong>Result:</strong> ${result.message}<br>
            </div>
        `;
    });
    outputHTML += "</div>";
    
    outputDiv.innerHTML = outputHTML;
    
    // Additional function to populate boss dropdown would be needed
    // Function to call when page loads to populate bosses
}

// Add this helper function to populate the boss dropdown
function populateBossDropdown() {
    const bosses = [
        "Lampylumen Myriad", 
        "Inferno Rider", 
        "Nightmare Inferno Rider",
        "Tempest Mephis", 
        "Thundering Mephis",
        "Nightmare Tempest Mephis", 
        "Nightmare Thundering Mephis",
        "Feilian Beringal", 
        "Nightmare Feilian Beringal",
        "Mourning Aix", 
        "Jué",
        "Crownless", 
        "Dreamless", 
        "Nightmare Crownless",
        "Fallacy of No Return", 
        "Bell-Borne Geochelone",
        "Impermanence Heron",
        "Mech Abomination",
        "Sentry Construct",
        "Nightmare Impermanence Heron", 
        "Lorelei",
        "Hecate",
        "Nightmare Mourning Aix",
        "Dragon of Dirge"
    ];
    
    populateDropdown("bossName", bosses);
}

// Update window.onload to include the new boss dropdown population
window.onload = function() {
    populateDropdown("tacetLocation", Object.keys(locations));
    populateDropdown("tacetSet", echoesSet);
    populateDropdown("tacetMainStat3", mainStats.threeCost);
    populateDropdown("tacetMainStat1", mainStats.oneCost);
    populateDropdown("bossMainStat4", mainStats.fourCost);
    populateDropdown("bossSet", echoesSet);
    populateBossDropdown();
};