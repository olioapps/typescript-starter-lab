export interface People {
  readonly name: string;
  age: number;
}

export const copyPeopleArray = (people: ReadonlyArray<People>) => {
  const copy = [...people];
  return copy;
}

export const addAge = (people: ReadonlyArray<Partial<People>>, ages: Record<string, number>) => {
  const arrayWithAge = people.map(person => {
    const name = person.name?.toLowerCase();
    if(name != null) {
      return {...person, 
              age: ages[name]}
    }
  })
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
    const {name} = person;
    return {name: name}
  })
  return arrayWithoutAge;
}

export const removeAgeSimplifiedReturn = (people: ReadonlyArray<Partial<People>>) => {
  const arrayOfNames = people.map(person => {
    const {name} = person;
    return {name}
  })
  return arrayOfNames;
}

export const changeNameAlias = (people: ReadonlyArray<People>) => {
  const idArray = people.map(person => {
    const {name: id} = person;
    return {id, age: person.age}
  })
  return idArray;
}

export const arrayOfStringNames = (people: ReadonlyArray<People>) => {
  const stringArray = people.map(person => {
    if (person.name != null) {
    return person.name;
    }
  })
  return stringArray;
}