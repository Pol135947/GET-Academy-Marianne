class Profile{
    constructor (email, username, password){
        this.email = email
        this.username = username
        this.password = password
        this.uid = Math.floor(Math.random() * 10^9)
    }
}

const model = { //Genshin 
    app: {
        logInStatus:false,
    },

    newProfile: new Profile(
        email='',
        username='',
        password='',
    ),

    data:{
        profiles:[{
            email:"username@gmail.com", 
            username: "Hermes",
            password: "password",
            UID: 726872542,
            }
        ]
    },
};

function createNewProfile(){
    
    
}