
const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

const findTheOldest = function(obj) {
    let date = new Date();
    let currentYear = date.getFullYear();
    let oldestAge = 0;
    let oldestName = '';
    for (let i = 0; i < obj.length; i++) {
        obj[i].age = obj[i].yearOfDeath - obj[i].yearOfBirth;
        
        if (obj[i].yearOfDeath == undefined) {
            obj[i].age = currentYear - obj[i].yearOfBirth;
        }
        
        
        if (obj[i].age > oldestAge) {
            oldestAge = obj[i].age;
            oldestName = obj[i];
        }

    }   return oldestName;
}

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
