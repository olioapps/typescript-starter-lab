import { copyPeopleArray } from ".";

//write tests here


describe('copy people array', () => {
  it('should return an empty array', () => {

    //Arrange
    const EMPTY_PEOPLE_LIST = [];
    const expected = [];

    //Act
    const actual = copyPeopleArray(EMPTY_PEOPLE_LIST);

    //Assert
    expect(actual).toEqual(expected);
  });

  it('should return a copy of the inputted array', () => {

    //Arrange
    const PEOPLE_LIST = [
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