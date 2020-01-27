import * as tests from "./testing"

export const pets = [
    {
        name: "fido",
        type: "dog",
        dangerLevel: 2,
    },
    {
        name: "rido",
        type: "dog",
        dangerLevel: 12,
    },
    {
        name: "lido",
        type: "dog",
        dangerLevel: 4,
    },
    {
        name: "dr. wizard",
        type: "cat",
        dangerLevel: 5,
    },
    {
        name: "CatStevens",
        type: "cat",
        dangerLevel: 7,
    },
    {
        name: "Dido",
        type: "dog",
        dangerLevel: 4,
    },
    {
        name: "Lardo",
        type: "locust",
        dangerLevel: 11,
    },
]

// New Array
// write a function that returns an alphabetized list of animal names.

export const alphabetizePets = (petArray) => {
    const petNameArray = petArray.map(x => x.name)
    const alphabetizedArray = petNameArray.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase())
    })
    return alphabetizedArray
}

// take the array of pets and return a single object where the keys are the animal name and the values are the corresponding animal object with their danger level multiplied by 2.

export const doubleDanger = (petArray) => {
    const object = petArray.reduce((acc, item) => {
        return {
            ...acc,
            [item.name]: (item.dangerLevel) * 2,
        }
    })
    return object
}

// what is the most dangerous animal?
// 1. Write a function that returns the name of the most dangerous animal.

export const findDanger = (animalArray) => {
    return animalArray.reduce(
        (acc, ele) => {
            return acc.dangerLevel < ele.dangerLevel ? ele : acc
        }).name
}

// // 2. Write a function that returns the name of the least dangerous animal.

export const findLeastDanger = (animalArray) => {
    return animalArray.reduce(
        (accumalate, element) => {
            return accumalate.dangerLevel > element.dangerLevel ? element : accumalate
        }).name
}

// // 3. Write a function that returns an object containing only type and danger level of the most dangerous animal.

export const findDangerAndType = (animalArray) => {
    const mostDangerousAnimal = animalArray.reduce(
        (accumalate, element) => {
            return accumalate.dangerLevel < element.dangerLevel ? element : accumalate
        }
    )
    return { dangerLevel: mostDangerousAnimal.dangerLevel, type: mostDangerousAnimal.type }
}

// Who would win?
// 1. Write a function that takes two numbers (0-6). The numbers represent the index of the pet in the pets array. Write a function that returns the animal which the highest danger level between the two pets.
// [rido, Dido]

export const animalFight = (num1, num2, animals) => {
    const result = animals[num1].dangerLevel > animals[num2].dangerLevel ? animals[num1].name : animals[num2].name
    return result
}

// 2. write a function that takes two names

export const animalFightByName = (name1, name2, animals) => {
    const fighters = animals.filter(
        (animal) => {
            if (animal.name === name1 || animal.name === name2) {
                return true
            }
            return false
        })
    return animalFight(0, 1, fighters)
}

// how many of each pet type there is?
// 1. Write a function that takes an array of pets (like the one defined at the top of this file) and returns a new object that shows the count of each type of animal. It should look like this:


export const animalTypeCountFilter = (petArray) => {
    return petArray.reduce((acc, pet) => {
        const { type } = pet
        const accTypeExists = acc[type]
        return accTypeExists ? { ...acc, [type]: acc[type] + 1 } : { ...acc, [type]: 1 }
    }, {})
}

console.log(tests.testAnimalCount() + " for animal type count")

console.log(tests.testAnimalFightByName() + " animal fight by name")

console.log(tests.testDoubleDanger() + " double danger test");

console.log(tests.testFindDanger() + " find most danger")

console.log(tests.testFindLeastDanger() + " find least danger")

console.log(tests.testFindDangerAndType() + " find danger and type");

console.log(tests.testAlphabetizePets() + " alphabetize pet list")

console.log(tests.testAnimalFight() + " animal fight")