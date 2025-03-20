const model = {

    app: {
        currentPage: "loginPage",
        pageList: ["profilePage", "editProfilePage", "dashboardPage", "motivationPage", "journalPage", "editJournalPage", "drinkingPage", "benefitPage", "limitPage"],
    }, 

    inputs: {
        loginPage: {
            username:"", 
            password:"", 
        },

        editProfilePage: {
            publicProfileField: {
                streakField: true,
                goalField: true,
                commentField: true, 
            },
            changeFields: {
                changeGoals: "",
                // others?
                writingMode:false,
            }
        },
        editProfilePage: {
            newUsername: "",
            newPassword:"",
            checkPassword: "", 
        },
        
        motivationPage:{
            title:"",
            newImage:"", 
            newTextField:"",
            editMode: true, 
        },

        editJournal:{
            title:"",
            headers: [],
            logContent:[
                {id: 1, category: "", date: "", content:"" },
                {id: 2, category: "", date: "", content:"" },
            ],
            editMode:true,
        }, 
        editDrinks:{
            title: "",
            newDrink: [
                {id:1, drinkName:"", coffeineNumber:""}
            ],
            placeholders: []
        }
    },
    
    data: {
        profilePage: {
            profileImg:"",
            inputAboutMe: "",
            publicProfileField: {
                    streakField: true,
                    goalField: true,
                    commentField: true, 
                },
            editMode:false,
            },
        slide3: {
            name: "dashboardPage",
            boxes: [
                {id:1, name:"MotivasjonsBooster", image:""},
                {id:2, name:"Koffein-grense", limit:"", cursor:"", koffeinTracker:"", diagram:""},
                {id:3, name:"Fordeker med å kutte ned forbruket", savingText:""},
                {id:4, name:"Drinke", lastDrinks: ["Kaffe", "Red bull"]},
                {id:5, name:"logg", content:[latestEntry]}
            ],
            profileBox: "",
        },

        slide5:{
            title:"Din logg",
            headers: ["kategori", "Dato", "Innhold"],
            logContent:[
                {id: 1, category: "", date: "", content:"", delete: false, editMode: false },
                {id: 2, category: "", date: "", content:"", delete: false, editMode: false },
            ],

            editContent: [
                {id: 0, category: "", date: "", content:"", addField: false, cancelField: false },
            ],
            editMode:true,
        },

        
    }
}