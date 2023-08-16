//Define class here

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
    const name = person.name?.toLocaleLowerCase();
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
    const {name} = person
    name: name;
  })
  return arrayWithoutAge;
}

export const removeAgeSimplifiedReturn = (people: ReadonlyArray<Partial<People>>) => {

}

export const changeNameAlias = (people: ReadonlyArray<People>) => {

}

export const arrayOfStringNames = (people: ReadonlyArray<People>) => {

}