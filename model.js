const model = {
    app: {
        currentPage: "profilePage",
        isLoggedIn: false,
    },

    inputs: {
        user: {
            username: "username",
            password: "placeholder",
            editMode: false,
        },
        profile:{
            goal:"",
            
        },
        logg: {
            editMode:false,
            content: [
                { id:1, category:"", date: "", text:"" }
            ]
        },   

        publicProfile: { // alt som står i profilen
            streakField: true,
            goalField: true, 
            commentaryField: true,
        }
    },

    data: {}, // items:
};
