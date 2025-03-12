from random import choice

main_stats = {
    "fourCost": ["Atk%", "Hp%", "Def%", "Crit Rate", "Crit Damage", "Healing Bonus"],
    "threeCost": ["Atk%", "Hp%", "Def%", "Glacio DMG bonus", "Fusion DMG bonus", "Electro DMG bonus", "Aero DMG bonus", "Spectro DMG bonus", "Havoc DMG bonus", "Energy Regen"],
    "oneCost": ["Atk%", "Hp%", "Def%"]
}

Eternal_Radiance = {
    "oneCost": ["Aero Prism", "Chop Chop", "Diggy Duggy", "Fae Ignis", "Frostscourge Stalker"],
    "threeCost": ["Abyssal Mercator", "Diurnus Knight", "Rage Against the Statue", "Vitreum Dancer"],
    "fourCost": ["Nightmare Mourning Aix"]
}

Tidebreaking_Courage = {
    "oneCost": ["Aero Prism", "Calcified Junrock", "Chop Chop Headless", "Chop Chop Leftless", "Chop Chop Rightless", "Diggy Duggy", "Lottie Lost"],
    "threeCost": ["Abyssal Gladius", "Chop Chop", "Diurnus Knight", "Hurriclaw"],
    "fourCost": ["Dragon of Dirge"]
}

echoTypes = ["threeCost", "oneCost"]
sonataEffect = ["Eternal Radiance", "Tidebreaking Courage"]

def farmingExperience(drops, rightThreeCost, rightOneCost, rightSet):
    useful = 0
    useless = 0

    for _ in range(drops):
        echoType = choice(echoTypes)
        echoSet = choice(sonataEffect)
        echoName = choice(Eternal_Radiance[echoType] if echoSet == "Eternal Radiance" else Tidebreaking_Courage[echoType])
        mainstat = choice(main_stats[echoType])

        print(f"\nDropped: {echoName} ({echoSet}) | Main Stat: {mainstat}")

        if echoType == "threeCost":
            if mainstat == rightThreeCost:
                if echoSet == rightSet:
                    useful += 1
                    print("✔ Right set! Expect the rolls to go to shit.")
                else:
                    useless += 1
                    print("❌ Wrong set. Pain.")
            else:
                useless += 1
                print("❌ Garbage.")
        
        elif echoType == "oneCost":
            if mainstat == rightOneCost:
                if echoSet == rightSet:
                    useful += 1
                    print("✔ Perfect drop! Just need good rolls...")
                else:
                    useless += 1
                    print("⚠ Wrong set, but at least it's useful... cope.")
            else:
                useless += 1
                print("❌ Better luck next time.")

    print(f"\nUseful echoes: {useful}, Useless echoes: {useless}")
    print(f"🔹 {useful/drops:.2%} of echoes were useful, the rest is trash.\n")

print("Phoebe's Average Farming Experience:")
farmingExperience(12, "Spectro DMG bonus", "Atk%", "Eternal Radiance")

print("Brant's Average Farming Experience:")
farmingExperience(12, "Energy Regen", "Atk%", "Tidebreaking Courage")
