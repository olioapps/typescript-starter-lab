import {
  People,
  copyPeopleArray,
  addAge,
  removeAge,
  removeAgeWithDestructure,
  removeAgeSimplifiedReturn,
  changeNameAlias,
  arrayOfStringNames
} from "./index";

describe('copyPeopleArray', () => {
  it('should return an empty array', () => {

    const empty_people_list: ReadonlyArray<People> = [];
    const expected: ReadonlyArray<People> = [];

    const actual = copyPeopleArray(empty_people_list);

    expect(actual).toEqual(expected);
  });

  it('should return a copy of the inputted array', () => {

    const people_list: ReadonlyArray<People> = [
      { name: "Aron", age: 42 },
      { name: "Stormi", age: 24 }
    ];

    const expected = [
      { name: "Aron", age: 42 },
      { name: "Stormi", age: 24 }
    ];

    const actual = copyPeopleArray(people_list);

    expect(actual).toEqual(expected);
  });
})

describe('addAge', () => {
  it('should return an array of objects with added age to each person in the ageless array', () => {

    const ageless_people: ReadonlyArray<Partial<People>> = [{ name: "Aron" }, { name: "Stormi" }]
    const expected = [{ name: "Aron", age: 42 }, { name: "Stormi", age: 24 }];

    const actual = addAge(ageless_people);

    expect(actual).toEqual(expected);
  });
})

describe('removeAge', () => {
  it('should return an empty array', () => {

    const empty_people_list: ReadonlyArray<People> = [];
    const expected: ReadonlyArray<People> = [];

    const actual = removeAge(empty_people_list);

    expect(actual).toEqual(expected);
  });

  it('should return an array of objects with the age key/value pairs removed', () => {

    const people_list = [{ name: "Aron", age: 42 }, { name: "Stormi", age: 24 }];
    const expected = [{ name: "Aron" }, { name: "Stormi" }];

    const actual = removeAge(people_list);

    expect(actual).toEqual(expected);
  });
});

describe('removeAgeWithDestructure', () => {
  it('should return an empty array', () => {

    const empty_people_list: ReadonlyArray<People> = [];
    const expected: ReadonlyArray<People> = [];

    const actual = removeAgeWithDestructure(empty_people_list);

    expect(actual).toEqual(expected);
  });

  it('should return an array objects without an age key', () => {
    const people_list = [{ name: "Aron", age: 42 }, { name: "Stormi", age: 24 }];
    const expected = [{ name: "Aron" }, { name: "Stormi" }];

    const actual = removeAgeWithDestructure(people_list);

    expect(actual).toEqual(expected);
  });
});

describe('remove age with map, destructuring, and simplified return statement', () => {
  it('should return an empty array', () => {

    const empty_people_list: ReadonlyArray<People> = [];
    const expected: ReadonlyArray<People> = [];

    const actual = removeAgeWithDestructure(empty_people_list);

    expect(actual).toEqual(expected);
  });

  it('should return an array of objects without an age, only the name', () => {

    const people_list = [{ name: "Aron", age: 42 }, { name: "Stormi", age: 24 }];
    const expected: ReadonlyArray<Partial<People>> = [{ name: "Aron" }, { name: "Stormi" }];

    const actual = removeAgeSimplifiedReturn(people_list);

    expect(actual).toEqual(expected);
  });

  it('should return an array of objects with a simplified return statement', () => {

    const people_list = [{ name: "Aron", age: 42 }, { name: "Stormi", age: 24 }];
    const expected = [{ name: "Aron" }, { name: "Stormi" }]

    const actual = removeAgeSimplifiedReturn(people_list);

    expect(actual).toEqual(expected);
  });
});

describe('rename name key using destructure aliasing', () => {
  it('should return an array with name key re-named to id', () => {

    const people_list = [{ name: "Aron", age: 42 }, { name: "Stormi", age: 24 }];
    const expected = [{ id: "Aron", age: 42 }, { id: "Stormi", age: 24 }]

    const actual = changeNameAlias(people_list);

    expect(actual).toEqual(expected);
  });
});

describe('array of strings', () => {
  it('should return an array of strings of people names', () => {

    const people_list = [{ name: "Aron", age: 42 }, { name: "Stormi", age: 24 }];
    const expected = ["Aron", "Stormi"]

    const actual = arrayOfStringNames(people_list);

    expect(actual).toEqual(expected);
  });
});