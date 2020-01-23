import * as indexStuff from "./index" 

export const testTheThing = (actual, expected) => {
    return actual === expected
        ? "Good test"
        : "Bad test! Expected: " + expected + " but received: " + actual
}

export const testAnimalFightByName = () => {
    const actual = indexStuff.animalFightByName("rido", "Dido", indexStuff.pets)
    const expected = "rido"
    return testTheThing(actual, expected)
}

export const testDoubleDanger = () => {
    const actual = indexStuff.doubleDanger(indexStuff.pets).rido
    const expected = 24
    return testTheThing(actual, expected)
}

export const testFindDanger = () => {
    const actual = indexStuff.findDanger(indexStuff.pets)
    const expected = "rido"
    return testTheThing(actual, expected)
}

export const testFindLeastDanger = () => {
    const actual = indexStuff.findLeastDanger(indexStuff.pets)
    const expected = "fido"
    return testTheThing(actual, expected)
}

export const testFindDangerAndType = () => {
    const actual = indexStuff.findDangerAndType(indexStuff.pets).dangerLevel + " " + indexStuff.findDangerAndType(indexStuff.pets).type
    const expected = indexStuff.pets[1].dangerLevel + " " + indexStuff.findDangerAndType(indexStuff.pets).type
    return testTheThing(actual, expected)
}

export const testAnimalFight = () => {
    const actual = indexStuff.animalFight(0, 4, indexStuff.pets)
    const expected = "CatStevens"
    return testTheThing(actual, expected)
}

export const testAlphabetizePets = () => {
    const actual = indexStuff.alphabetizePets(indexStuff.pets)[0]
    const expected = 'CatStevens'
    return testTheThing(actual, expected)
}

export const testAnimalCount = () => {
    const actual = indexStuff.animalTypeCountFilter(indexStuff.pets).dog
    const expected = 4
    return testTheThing(actual, expected)
}