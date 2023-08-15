export interface People {
  name: string;
  age: number;
}

export const arrayCopier = (array: ReadonlyArray<People>) => {
  return [...array];
};

export const ageAdder = (people: ReadonlyArray<Partial<People>>, ages: ReadonlyArray<number>) => {
  const copy = [...people];
  const addAges = copy.map((person, index) => {
    return { ...person, age: ages[index]}
  });
  return addAges;
};

export const ageRemover = (people: ReadonlyArray<People>) => {
  const peopleCopy = arrayCopier(people);
  const removeAges = peopleCopy.map(person => {
    return {
      name: person.name
    }
  });
  return removeAges;
}
export const ageRemover2 = (people: ReadonlyArray<People>) => {
  const peopleCopy = arrayCopier(people);
  const removeAges = peopleCopy.map(person => {
    const { age, ...rest } = person
    return rest;
  });
  return removeAges;
}
export const ageRemover3 = (people: ReadonlyArray<People>) => {

}

export const idAsName = (people: ReadonlyArray<People>) => {

}

export const justNames = (people: ReadonlyArray<People>) => {

}
