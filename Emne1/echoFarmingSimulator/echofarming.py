from random import randint, choice

main_stats = {
    "fourCost": ["Atk%", "Hp%", "Def%", "Crit Rate", "Crit Damage", "Healing Bonus"],
    "threeCost": ["Atk%", "Hp%", "Def%", "Glacio DMG Bonus", "Fusion DMG Bonus", "Electro DMG Bonus", "Aero DMG Bonus", "Spectro DMG Bonus", "Havoc DMG Bonus", "Energy Regen"],
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

def main():
    rightThreeCost = str(input("Three cost mainstat?:")).capitalize()
    rightOneCost = str(input("One cost mainstat?:")).capitalize()
    rightSet = str(input("Right Sonata Set?:")).capitalize()
    drops = int(input("number of runs?:"))
    farmingExperience(drops, rightThreeCost, rightOneCost, rightSet)

def farmingExperience(drops, rightThreeCost, rightOneCost, rightSet):
    useful = 0
    useless = 0

    for _ in range (drops):
        echoType = choice(echoTypes)
        echoSet = choice(sonataEffect)
        if echoSet == "Eternal Radiance":
            echoName = choice(Eternal_Radiance[echoType])
        else:
            echoName = choice(Tidebreaking_Courage[echoType])
        mainstat = choice(main_stats[f"{echoType}"])
        print(f"\nDropped:\nset bonus: {echoSet}, Echo Name: {echoName}, mainstat: {mainstat}")

        if echoType == "threeCost":
            if mainstat == rightThreeCost:
                if echoSet == rightSet:
                    useful += 1
                    print("Right set, expect the rolls to go shit")
                else:
                    useless += 1
                    print("Fuck... wrong echo set")
            else:
                useless += 1
                print("Fucking useless echo")
        
        elif echoType == "oneCost":
            if mainstat == rightOneCost:
                if echoSet != rightSet:
                        useless += 1
                        print("Fuck... wrong echo set. Still useful though... cope")
                else:
                    useful += 1
                    print("gimme crit, gimme crit... please")
            else:
                useless += 1
                print("better luck next time")

    print(f"\nUseful echoes: {useful}, useless echoes: {useless} \n")
    print(f"So {useful}/{drops} are useful and the rest is garbage")

    return 

if __name__ == "__main__":
    main()