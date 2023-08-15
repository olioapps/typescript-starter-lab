import { People, copyPeopleArray, addAge, removeAge, removeAgeWithDestructure, removeAgeSimplifiedReturn, changeNameAlias, arrayOfStringNames } from "./index";

//write tests here


describe('copy people array', () => {
  it('should return an empty array', () => {

    //Arrange
    const EMPTY_PEOPLE_LIST: ReadonlyArray<People>= [];
    const expected: ReadonlyArray<People> = [];

    //Act
    const actual = copyPeopleArray(EMPTY_PEOPLE_LIST);

    //Assert
    expect(actual).toEqual(expected);
  });

  it('should return a copy of the inputted array', () => {

    //Arrange
    const PEOPLE_LIST: ReadonlyArray<People> = [
      { name: "Aron", age: 42 }, 
      { name: "Stormi", age: 24 }
    ];

    const expected = [
      { name: "Aron", age: 42 }, 
      { name: "Stormi", age: 24 }
    ];

    //Act
    const actual = copyPeopleArray(PEOPLE_LIST);

    //Assert
    expect(actual).toEqual(expected);
  });
})

describe('add age to ageless people', () => {
  it('should return an array of objects with added age to each person in the ageless array', () => {

    //Arrange
    const AGELESS_PEOPLE: ReadonlyArray<Partial<People>> = [{ name: "Aron" }, { name: "Stormi" }]
    const expected = [{ name: "Aron", age: 42 }, { name: "Stormi", age: 24 }];

    //Act
    const actual = addAge(AGELESS_PEOPLE);

    //Assert
    expect(actual).toEqual(expected);
  });
})

describe('remove age with map', () => {
  it('should return an empty array', () => {

    //Arrange
    const EMPTY_PEOPLE_LIST: ReadonlyArray<People> = [];
    const expected: ReadonlyArray<People> = [];

    //Act
    const actual = removeAge(EMPTY_PEOPLE_LIST);

    //Assert
    expect(actual).toEqual(expected);
  });

  it('should return an array of objects with the age key/value pairs removed', () => {

    //Arrange
    const PEOPLE_LIST = [{ name: "Aron", age: 42 }, { name: "Stormi", age: 24 }];
    const expected = [{ name: "Aron" }, { name: "Stormi" }];

    //Act
    const actual = removeAge(PEOPLE_LIST);

    //Assert
    expect(actual).toEqual(expected);
  });
});

describe('remove age with map and destructuring', () => {
  it('should return an empty array', () => {

    //Arrange
    const EMPTY_PEOPLE_LIST: ReadonlyArray<People> = [];
    const expected: ReadonlyArray<People> = [];

    //Act
    const actual = removeAgeWithDestructure(EMPTY_PEOPLE_LIST);

    //Assert
    expect(actual).toEqual(expected);
  });

  it('should return an array objects without an age key', () => {
      //Arrange
      const PEOPLE_LIST = [{ name: "Aron", age: 42 }, { name: "Stormi", age: 24 }];
      const expected = [{ name: "Aron" }, { name: "Stormi" }];
  
      //Act
      const actual = removeAgeWithDestructure(PEOPLE_LIST);

      //Assert
      expect(actual).toEqual(expected);
  });
});

describe('remove age with map, destructuring, and simplified return statement', () => {
  it('should return an empty array', () => {

    //Arrange
    const EMPTY_PEOPLE_LIST: ReadonlyArray<People> = [];
    const expected: ReadonlyArray<People> = [];

    //Act
    const actual = removeAgeWithDestructure(EMPTY_PEOPLE_LIST);

    //Assert
    expect(actual).toEqual(expected);
  });

  it('should return an array of objects without an age, only the name', () => {

     //Arrange
    const PEOPLE_LIST = [{ name: "Aron", age: 42 }, { name: "Stormi", age: 24 }];
    const expected: ReadonlyArray<Partial<People>> = [{ name: "Aron" }, { name: "Stormi" }];

    //Act
    const actual = removeAgeSimplifiedReturn(PEOPLE_LIST);

    //Assert
    expect(actual).toEqual(expected);
  });

  it('should return an array of objects with a simplified return statement', () => {
  
    //Arrange
    const PEOPLE_LIST = [{ name: "Aron", age: 42 }, { name: "Stormi", age: 24 }];
    const expected = [{ name: "Aron" }, { name: "Stormi" }]

    //Act
    const actual = removeAgeSimplifiedReturn(PEOPLE_LIST);

    //Assert
    expect(actual).toEqual(expected);
  });
});

describe('rename name key using destructure aliasing', () => {
  it('should return an array with name key re-named to id', () => {

    //Arrange
    const PEOPLE_LIST = [{ name: "Aron", age: 42 }, { name: "Stormi", age: 24 }];
    const expected = [{ id: "Aron", age: 42 }, { id: "Stormi", age: 24 }]

    //Act
    const actual = changeNameAlias(PEOPLE_LIST);

    //Assert
    expect(actual).toEqual(expected);
  });
});

describe('array of strings', () => {
  it('should return an array of strings of people names', () => {

    //Arrange
    const PEOPLE_LIST = [{ name: "Aron", age: 42 }, { name: "Stormi", age: 24 }];
    const expected = ["Aron", "Stormi"]

    //Act
    const actual = arrayOfStringNames(PEOPLE_LIST);

    //Assert
    expect(actual).toEqual(expected);
  });
});