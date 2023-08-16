//Define class here

export interface People {
  readonly name: string;
  age: number;
}

export const copyPeopleArray = (people: ReadonlyArray<People>) => {
  const copy = [...people];
  return copy;
}

export const addAge = (people: ReadonlyArray<Partial<People>>) => {
  const arrayWithAge = people.map(person => ({
    ...person,
    age: 24
  }))
  return arrayWithAge;
}

export const removeAge = (people: ReadonlyArray<People>) => {
  const arrayWithoutAge = people.map(person => ({
    name: person.name
  }))
  return arrayWithoutAge;
}

export const removeAgeWithDestructure = (people: ReadonlyArray<People>) => {
  const arrayWithoutAge = people.map(person => {
    const {name} = person
    name: name;
  })
}

export const removeAgeSimplifiedReturn = (people: ReadonlyArray<Partial<People>>) => {

}

export const changeNameAlias = (people: ReadonlyArray<People>) => {

}

export const arrayOfStringNames = (people: ReadonlyArray<People>) => {

}