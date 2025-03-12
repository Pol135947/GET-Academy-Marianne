const mainStats = {
    fourCost: ["Atk%", "Hp%", "Def%", "Crit Rate", "Crit Damage", "Healing Bonus"],
    threeCost: ["Atk%", "Hp%", "Def%", "Glacio DMG bonus", "Fusion DMG bonus", "Electro DMG bonus", "Aero DMG bonus", "Spectro DMG bonus", "Havoc DMG bonus", "Energy Regen"],
    oneCost: ["Atk%", "Hp%", "Def%"]
};

const sonataSets = [Freezing_Frost, Molten_Rift, Void_Thunder, Sierra_Gale, Celestial_Light, Havoc_Eclipse, Rejuvenating_Glow, Moonlit_Clouds, Lingering_Tunes, Frosty_Resolve, Eternal_Radiance, Midnight_Veil, Empyrean_Anthem, Tidebreaking_Courage];

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
    fourCost: ["Inferno Rider"]
};

const Void_Thunder = {
    oneCost: ["Aero Predator", "Baby Viridblaze Saurian", "Electro Predator", "Fission Junrock", "Fusion Warrior", "Havoc Prism", "Spectro Prism", "Traffic Illuminator", "Vanguard Junrock"],
    threeCost: ["Flautist", "Lumiscale Construct", "Violet-Feathered Heron"],
    fourCost: ["Tempest Mephis", "Thundering Mephis"]
};

const Sierra_Gale = {
    oneCost: ["Aero Predator", "Chirpuff", "Dwarf Cassowary", "Fusion Warrior", "Hooscamp", "Sabyr Boar", "Traffic Illuminator", "Whiff Whaff", "Young Roseshroom"],
    threeCost: ["Carapace", "Cyan-Feathered Heron", "Hoochief"],
    fourCost: ["Feilian Beringal"]
};

const Celestial_Light = {
    oneCost: ["Clang Bang", "Cruisewing", "Glacio Predator", "Gulpuff", "Havoc Prism", "Havoc Warrior", "Hoartoise", "Spectro Prism", "Zig Zag"],
    threeCost: ["Autopuppet Scout", "Cyan-Feathered Heron", "Lightcrusher", "Rocksteady Guardian"],
    fourCost: ["Mourning Aix", "Jué"]
};

const Havoc_Eclipse = {
    oneCost: ["Chirpuff", "Excarat", "Glacio Prism", "Havoc Prism", "Havoc Warrior", "Tick Tack", "Young Roseshroom"],
    threeCost: ["Havoc Dreadmane", "Roseshroom", "Tambourinist"],
    fourCost: ["Crownless", "Dreamless"]
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
    fourCost: ["Impermanence Heron", "Lorelei"]
};

const Empyrean_Anthem = {
    oneCost: ["Calcified Junrock", "Chest Mimic", "Galescourge Stalker", "Hocus Pocus", "Nimbus Wraith", "Voltscourge Stalker"],
    threeCost: ["Abyssal Patricius", "Chop Chop", "Nocturnus Knight", "Vitreum Dancer"],
    fourCost: ["Hecate"]
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

const tacetTypes = [threeCost, oneCost] 
const bossTypes = [fourCost]
