const peopleDatabase = []
const person = Object.create({}, {
    advisorName: {
        value: '',
        writable: true,
        enumerable: true
    },
    company: {
        value: '',
        writable: true,
        enumerable: true
    },
    specialty: {
        value: '',
        writable: true,
        enumerable: false
    }

})

const personCreate = (advisor,company,specialty) => {
    const people = Object.create(person)

    person.advisorName = advisor
    person.company = company
    person.specialty = specialty
    peopleDatabase.push(person)
}


personCreate('Isaac Brooks','Apple Company','apples')


console.log(peopleDatabase)

for (let x = 0; x < peopleDatabase.length; x++) {
    const element = peopleDatabase[x];
    console.log(element)
    
    const newSection = document.createElement("p")
const newStatement = document.createTextNode(element);
newSection.appendChild(newStatement);
document.body.appendChild(newSection);

console.log(newStatement)
}

