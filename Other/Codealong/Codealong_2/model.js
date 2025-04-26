const model= {
    app:{},
    input:{
        personer: {name:'', age:null},
    },
    data:{
        personer: [
            {name: 'Hermes', age:7},
            {name: 'Pepper', age:6},
        ]
    }
}

const app = document.getElementById('app');


function show(){
    app.innerHTML = `
        <input type="text" id="nameInput" onchange="register(this)" placeholder="Skriv navnet ditt">
        <input type="number" id="ageInput" onchange="register(this)" placeholder="Skriv alderen din">
    `;
}

function register(input){
    if (input.id === 'nameInput'){
        model.input.personer.name = input.value;
    }
    else {
        model.input.personer.age = input.value;
    }
}

function filterBy(statement){
    const people = model.data.personer;
    let filteredList=[];
    if (statement){
        for (let index = 0; index < people.length; index++) {
            if (people.age >= 18){
                filteredList.push(people[index])
            }
        }
    }
    else {
        for (let index = 0; index < people.length; index++) {
            if (people.age <= 18){
                filteredList.push(people[index])
            }
        }
    }
}