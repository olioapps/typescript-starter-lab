import { mostDangerous, leastDangerous,typeAndDangerLevelMostDanger, pickWinner, pickWinnerNames, typeCount, alphabetizeName, doubleDangerNameKeys } from './functions'

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
        name: "CatStevns",
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

// what is the most dangerous animal?
// 1. Write a function that returns the name of the most dangerous animal.
const testMostDangerous = () => {
    const expectedAnimalName = 'rido';
    const actualAnimalName = mostDangerous(pets);
    return expectedAnimalName === actualAnimalName
     ? "testMostDangerous TEST PASSED" 
     : "testMostDangerous Test FAILED! actual: " + actualAnimalName + ", expected: " + expectedAnimalName + "."
}
console.log(testMostDangerous());

// 2. Write a function that returns the name of the least dangerous animal.
const testLeastDangerous = () => {
    const expectedAnimalName = 'fido';
    const actualAnimalName = leastDangerous(pets);
    return expectedAnimalName === actualAnimalName ? "testLeastDangerous TEST PASSED" : "testLeastDangerous Test FAILED! actual: " + actualAnimalName + ", expected: " + expectedAnimalName + "."
}
console.log(testLeastDangerous());

// 3. Write a function that returns an object containing only type and danger level of the most dangerous animal.
const testTypeAndDangerLevelMostDanger = () => {
    const expectedType = 'dog';
    const expectedDangerLevel = 12;
    const actualObject = typeAndDangerLevelMostDanger(pets);
    const  { type, dangerLevel } = actualObject; 
    if( type == expectedType && dangerLevel == expectedDangerLevel) {
        return "testTypeAndDangerLevelMostDanger TEST PASSED";
    }
    else {
        return `testTypeAndDangerLevelMostDanger TEST FAILED! expected Type: ${expectedType}, actual Type: ${actualObject.type}, expected DangerLevel: ${expectedDangerLevel}, actual DangerLevel: ${actualObject.dangerLevel}.`;
    }
}
console.log(testTypeAndDangerLevelMostDanger());

// Who would win?
// 1. Write a function that takes two numbers (0-6). The numbers represent the index of the pet in the pets array. Write a function that returns the animal which the highest danger level between the two pets.
const testPickWinner = () => {
    const animalIndex1 = 0;
    const animalIndex2 = 3;
    const expected = "dr. wizard";
    const actual = pickWinner(pets,animalIndex1,animalIndex2).name;
    return expected === actual ? "testPickWinner TEST PASSED" : ("TEST FAILED! expected: " + expected + " actual: " + actual) 
    
}
console.log(testPickWinner());

// 2. write a function that takes two names
const testPickWinnerNames = () => {
    const name1 = "fido";
    const name2 = "rido";
    const name3 = "CatStevns";
    const expected = "CatStevns";
    const actual = pickWinnerNames(pets, name3, name1).name;
    return expected === actual ? "testPickWinnerNames TEST PASSED" : ("TEST FAILED! expected: " + expected + " actual: " + actual) 
}
console.log(testPickWinnerNames());

// how many of each pet type there is?
// 1. Write a function that takes an array of pets (like the one defined at the top of this file) and returns a new object that shows the count of each type of animal. It should look like this:
const testTypeCount = () => {
    const expectNumDogs = 4;
    const expectNumCats = 2;
    const expectNumLocusts = 1;
    const actualTypeCount = typeCount(pets);
    if(actualTypeCount.dog == expectNumDogs && actualTypeCount.cat == expectNumCats && actualTypeCount.locust == expectNumLocusts){
        return "testTypeCount TEST PASSED";
    }
    else {
        return "testTypeCount FAILED! actual dogCount: " + actualTypeCount.dog + ", actual cat count: " + actualTypeCount.cat + ", actual locust count: " + actualTypeCount.locust + ".";
    }
}
console.log(testTypeCount());

// New Array
// write a function that returns an alphabetized list of animal names.
const testAlphabetizeName = () => {
    const expectedIndex1 = 'CatStevns'; 
    const expectedIndex2 = 'Dido';
    const expectedIndex3 = 'dr. wizard';
    const expectedIndex4 = 'fido';
    const expectedIndex5 = 'Lardo';
    const expectedIndex6 = 'lido'
    const expectedIndex7 = 'rido';
    const expectedArray = alphabetizeName(pets);
    if(expectedIndex1 == expectedArray[0]
         && expectedIndex2 == expectedArray[1] 
         && expectedIndex3 == expectedArray[2] 
         && expectedIndex4 == expectedArray[3] 
         && expectedIndex5 == expectedArray[4] 
         && expectedIndex6 == expectedArray[5] 
         && expectedIndex7 == expectedArray[6]){
        return("testAlphabetizeNames TEST PASSED")
    }
    else {
        return("Alphabetize TEST FAILED! actual = " + expectedArray[0] + "," + expectedArray[1] + "," +expectedArray[2] + "," + expectedArray[3] + "," + expectedArray[4] + "," + expectedArray[5] + ".")
    }
}
console.log(testAlphabetizeName())

// write a functional that takes the array of pets and returns a single object where they keys are the animal name and the values are the corresponding animal object with their danger level multiplied by 2. Try to do this all within a single reduce. 
const testAssignNameKeys = () => {
    const expectedKeys = ['fido','rido','lido','dr. wizard','CatStevns','Dido','Lardo']
    const actualKeys = Object.keys(doubleDangerNameKeys(pets))
    for(let i = 0; i < expectedKeys.length; i++){
        if(expectedKeys[i] !== actualKeys[i]){
            return false;
        }
    }
    return true;
}
const testDoubleDanger = () => {
    const expectedDangers = [4,24,8,10,14,8,22]
    const actualObject = doubleDangerNameKeys(pets);
    const actualDangers = Object.keys(actualObject).map((element) => {
        return actualObject[element].dangerLevel
    })
    for(let i = 0; i < expectedDangers.length; i++){
        if(expectedDangers[i] !== actualDangers[i]) {
            return false;
        }
    }
    return true;
}
const testDoubleDangerNameKeys = () => {
    if(testDoubleDanger() && testAssignNameKeys()){
        return "testDoubleDangerNameKeys TEST PASSED"
    }
    else{
        return "testDoubleDangerNameKeys FAILED"
    }
}
console.log(testDoubleDangerNameKeys())


console.log("TEST")
