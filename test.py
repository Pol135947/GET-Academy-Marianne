from random import *

country_dict = {
    "Australia":  {"response_1":"Bruh... Wtf did we do to you!?", "response_2":None, "response_3":"Boycott USA!!!","response_4":None},
    "Canada":     {"response_1":"Alright. You want a fight!? You'll get one. Remember USA, you started it.",  "response_2":"Canada is not for fucking sale!", "response_3":"they voted for him","response_4":"Why are you attacking us and not fucking Russia!?"},
    "Greenland":  {"response_1":None, "response_2": "Fuck off, Greenland is not for sale. Greenland is ours!", "response_3":None,"response_4":None},
    "Panama":     {"response_1":None, "response_2":"Don't forget about us. Or please do", "response_3":None,"response_4":None}, 
    "Mexico":     {"response_1":"What do we do? posture or remain quiet? We can't win this war...",   "response_2":None, "response_3":None,"response_4":None}, 
    "Ukraine":    {"response_1":None, "response_2":None, "response_3":None,"response_4":"We're fucked aren't we?"}, 
    "UK":         {"response_1":"Maybe Brexit was a bad idea... But we'll be fine",   "response_2":None, "response_3":"Fuck off Vance, go back to your history books","response_4":"Are you being serious? Since when is Russia our friend?"}, 
    "France":     {"response_1":"We're tariffing back your asses. You asked for it",  "response_2":"Canada is our friend, Greenland is our ally Denmark's friend. Hands off", "response_3":"Give us back the Statue of Liberty. You're not worthy anymore","response_4":"Russia is our enemy"}, 
    "Japan":      {"response_1":"breathe... Don't say anything and hope Trump forgets about us",  "response_2":None, "response_3": "Phew. We're in the clear. For now","response_4":"WTF...?"}, 
    "Norway":     {"response_1":"Bruh, wtf are we supposed to do? join EU!?", "response_2": "The fuck? aren't they supposed to be your closest allies!?", "response_3":"Boycott!!!","response_4":None}, 
    "EU":         {"response_1":"Fine. We'll put return the favour. Fuck you Republican States.", "response_2":None, "response_3":"This is getting worse by the minute","response_4": "Fuck you traitors. We don't need you anyway (We kinda do, but we'll figure it out)"}, 
    "Russia":     {"response_1":"Tariff what? $3.5 billion?", "response_2": "If USA is doing it, we're taking Ukraine", "response_3":"What a Joke","response_4":"We conquered the White House without firing a shot. Historic"}, 
    "China":      {"response_1":"BTW, here is a 10% tariff", "response_2":"Don't interrupt your enemy while they shoot themselves in the foot.", "response_3":None,"response_4":"If they think they can get leverage via Russia... Dream on."},
}


def us_tariff_politics():
    id = 0
    trump_responses = ["Tariff war", "Annexing Canada or Greenland", "Controversial tweet/sentence/event", "Nothing (cause it's Russia)"]
    geopolitics_status = choices(trump_responses, weights=[10, 3, 10, 3], k=1)[0]
    trump_comments = choice(["Anti-Black People", "Xenophobic", "Anti-Asian", "White Nationalism", "Islamophobic",  "Anti-Latino", "Anti-Native American"])
    country_list = list(country_dict)
    victim = choice(country_list)

    print(f"Current Geopolitics status: {geopolitics_status}")
    print(f"Today's victim: {victim}")

    if geopolitics_status == "Tariff war":
        id = "response_1"
        message = country_dict[f"{victim}"][id]
        if message == None:
            print("Are you being serious? Is Trump an idiot?")
        else:
            if victim == "Russia":
                print("Trump says forget about it. Wouldn't wanna offend his authoritarian idol right?")
            else:
                print(f"{victim}, says: {message}") 
    
    elif geopolitics_status == "Annexing Canada or Greenland":
        id = "response_2"
        message = country_dict[f"{victim}"][id]
        if message == None:
            print("Weren't Canada and Greenland your friends?", "Wtf are you attacking Canada and Greenland for?")
        else:
            if victim == "Canada":
                print(f"{victim} says: {message}")

            elif victim == "Greenland":
                print(f"{victim} says: {message}")
            else:
                print(f"{victim}, says: {message}") 
               
            
    elif geopolitics_status == "Controversial tweet/sentence/event":
        id = "response_3"
        message = country_dict[f"{victim}"][id]
        if message == None:
            print("Not again...")
        else:
            if victim == "Russia":
                print(f"{victim}, says: Absolute Cinema. What a joke.") 
            else:
                print(f"WTF are these {trump_comments} comments? At least {victim} is in the clear. For now.")
    
    elif geopolitics_status == "Nothing (cause it's Russia)":
        id = "response_4"
        message = country_dict[f"{victim}"][id]
        if message == None:
            print("Is USA trustworthy?")
        else:
            if victim == "Russia":
                print(f"{victim}, says: {message}") 
            else:
                print("Message from the West: Siding with a dictatorship? How the mighty have fallen")

us_tariff_politics()
