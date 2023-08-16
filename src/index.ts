export interface People {
  name: string;
  age: number;
}

export const arrayCopier = (array: ReadonlyArray<People>) => {
  return [...array];
};

export const ageAdder = (people: ReadonlyArray<Partial<People>>, ages: Record<string, number>) => {
  const addAges = people.map((person) => {
    const name: string | undefined = person.name?.toLowerCase();
    if (name != null) {
      return { ...person,
         age: ages[name]}
    }
  });
  return addAges;
};

export const ageRemover = (people: ReadonlyArray<People>) => {
  const removeAges = people.map(person => {
    return {
      name: person.name
    }
  });
  return removeAges;
}
export const ageRemover2 = (people: ReadonlyArray<People>) => {
  const removeAges = people.map(person => {
    const { name } = person
    return {
      name: name
    };
  });
  return removeAges;
}
export const ageRemover3 = (people: ReadonlyArray<People>) => {
  const removeAges = people.map(person => {
    const { age, ...rest } = person
    return rest;
  });
  return removeAges;
}

export const idAsName = (people: ReadonlyArray<People>) => {
  const replaceName = people.map(person => {
    const { name: id, age } = person;
    return {
      id: id,
      age: age
    }
  });
  return replaceName;
}

export const justNames = (people: ReadonlyArray<People>) => {
  const namesArray = people.map(person => {
    const { name } = person;
    return name;
  });
  return namesArray;
}
