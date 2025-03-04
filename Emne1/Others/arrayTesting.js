const family= [
    { name:'Katinka',   role: 'Mother',      age: 55, },
    { name:'Laurent',   role: 'Father',      age: 54, },
    { name:'Marianne',  role: 'Daughter',    age: 20, },
    { name:'Martin',    role: 'Son',         age: 14, },
];

const filteredFamily = family.filter((family) =>{
    return family.age < 30;
});

const familyNames = family.map((family) => {
    return family.name
})

const findName = family.find((family) =>{
    return family.name === "Marianne"
})

family.forEach(family => {
    console.log(family.name)
});

const oldMembers = family.some((family) => {
    family.age >= 50;
    
});

const totalAge = family.reduce((currentTotal, family) => {
    return family.age + currentTotal
}, 0 ) // starting point


console.log(family)
console.log(familyNames)
console.log(findName)
console.log(filteredFamily)
console.log(oldMembers)
console.log(totalAge)


