import { 
  People, 
  arrayCopier, 
  ageAdder, 
  ageRemover, 
  ageRemover2,
  ageRemover3, 
  idAsName, 
  justNames, } from ".";

describe("arrayCopier", () => {
  it("should return an empty array when an empty array is passed", () => {
    // ARRANGE
    const emptyArray: ReadonlyArray<People> = [];
    const expected: ReadonlyArray<People> = [];
    // ACT
    const result = arrayCopier(emptyArray);
    // ASSERT
    expect(result).toEqual(expected);
  });

  it("should return a copy of the array", () => {
    // ARRANGE
    const peopleList: ReadonlyArray<People> = [
      { name: "Aron", age: 42 },
      { name: "Stormi", age: 24 },
    ];
    const expected: ReadonlyArray<People> = [
      { name: "Aron", age: 42 },
      { name: "Stormi", age: 24 },
    ];
    // ACT
    const result = arrayCopier(peopleList);
    // ASSERT
    expect(result).toEqual(expected);
  });
});

describe("ageAdder", () => {
  it("should add age to each person in agelessPeople array", () => {
    // ARRANGE
    const agelessPeopleList: ReadonlyArray<Partial<People>> = [
      { name: "Aron" },
      { name: "Stormi" },
    ];
    const agesToAddList = [35, 98];
    const expected = [
      { name: "Aron", age: 35 },
      { name: "Stormi", age: 98 },
    ];
    // ACT
    const result = ageAdder(agelessPeopleList, agesToAddList);
    expect(result).toEqual(expected);
  });
});

describe("ageRemover", () => {
  it("should remove the age key from an array of people with ages", () => {
    // ARRANGE
    const peopleList: ReadonlyArray<People> = [
      { name: "Aron", age: 42 },
      { name: "Stormi", age: 24 },
    ];
    const expected: ReadonlyArray<Partial<People>> = [
      { name: "Aron" },
      { name: "Stormi" },
    ];
    // ACT
    const result = ageRemover(peopleList);
    // ASSERT
    expect(result).toEqual(expected);
  });
});

describe("ageRemover2", () => {
  it("should remove the age key from an array of people with ages", () => {
    // ARRANGE
    const peopleList: ReadonlyArray<People> = [
      { name: "Aron", age: 42 },
      { name: "Stormi", age: 24 },
    ];
    const expected: ReadonlyArray<Partial<People>> = [
      { name: "Aron" },
      { name: "Stormi" },
    ];
    // ACT
    const result = ageRemover2(peopleList);
    // ASSERT
    expect(result).toEqual(expected);
  });
});

describe('ageRemover3', () => {
  it("should return an array of objects with only string name", () => {
    // ARRANGE
    const peopleList: ReadonlyArray<People> = [
      { name: "Aron", age: 42 },
      { name: "Stormi", age: 24 },
    ];
    const expected: ReadonlyArray<Partial<People>> = [
      { name: "Aron" }, { name: "Stormi" }
    ];
    // ACT
    const result = ageRemover3(peopleList);
    // ASSERT
    expect(result).toEqual(expected);
  });
});

describe('idAsName', () => {
  it('should return an array of objects with id instead of name key', () => {
    // ARRANGE
    const peopleList: ReadonlyArray<People> = [
      { name: "Aron", age: 42 },
      { name: "Stormi", age: 24 },
    ];
    const expected = [
      { id: "Aron", age: 42 },
      { id: "Stormi", age: 24 },
    ];
    // ACT
    const result = idAsName(peopleList);
    // ASSERT
    expect(result).toEqual(expected);
  });
});

describe('justNames', () => {
  it('should return an array of names', () => {
    // ARRANGE
    const peopleList: ReadonlyArray<People> = [
      { name: "Aron", age: 42 },
      { name: "Stormi", age: 24 },
    ];
    // ACT
    const expected: ReadonlyArray<string>= ["Aron", "Stormi"];
    // ASSERT
    const result = justNames(peopleList);
    expect(result).toEqual(expected);
  })
});

