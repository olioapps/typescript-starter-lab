import { People, arrayCopier, ageAdder, ageRemover, ageRemover2,ageRemover3, idAsName, justNames } from ".";

describe("arrayCopier", () => {
  it("should return an empty array when an empty array is passed", () => {
    // ARRANGE
    const EMPTY_ARRAY: ReadonlyArray<People> = [];
    const expected: ReadonlyArray<People> = [];
    // ACT
    const result = arrayCopier(EMPTY_ARRAY);
    // ASSERT
    expect(result).toEqual(expected);
  });

  it("should return a copy of the array", () => {
    // ARRANGE
    const PEOPLE_LIST: ReadonlyArray<People> = [
      { name: "Aron", age: 42 },
      { name: "Stormi", age: 24 },
    ];
    const expected: ReadonlyArray<People> = [
      { name: "Aron", age: 42 },
      { name: "Stormi", age: 24 },
    ];
    // ACT
    const result = arrayCopier(PEOPLE_LIST);
    // ASSERT
    expect(result).toEqual(expected);
  });
});

describe("ageAdder", () => {
  it("should add age to each person in agelessPeople array", () => {
    // ARRANGE
    const AGELESSPEOPLE_LIST: ReadonlyArray<Partial<People>> = [
      { name: "Aron" },
      { name: "Stormi" },
    ];
    const AGES_TO_ADD_LIST = [35, 98];
    const expected = [
      { name: "Aron", age: 35 },
      { name: "Stormi", age: 98 },
    ];
    // ACT
    const result = ageAdder(AGELESSPEOPLE_LIST, AGES_TO_ADD_LIST);
    expect(result).toEqual(expected);
  });
});

describe("ageRemover", () => {
  it("should remove the age key from an array of people with ages", () => {
    // ARRANGE
    const PEOPLE_LIST: ReadonlyArray<People> = [
      { name: "Aron", age: 42 },
      { name: "Stormi", age: 24 },
    ];
    const expected: ReadonlyArray<Partial<People>> = [
      { name: "Aron" },
      { name: "Stormi" },
    ];
    // ACT
    const result = ageRemover(PEOPLE_LIST);
    // ASSERT
    expect(result).toEqual(expected);
  });
});

describe("ageRemover2", () => {
  it("should remove the age key from an array of people with ages", () => {
    // ARRANGE
    const PEOPLE_LIST: ReadonlyArray<People> = [
      { name: "Aron", age: 42 },
      { name: "Stormi", age: 24 },
    ];
    const expected: ReadonlyArray<Partial<People>> = [
      { name: "Aron" },
      { name: "Stormi" },
    ];
    // ACT
    const result = ageRemover2(PEOPLE_LIST);
    // ASSERT
    expect(result).toEqual(expected);
  });
});

describe('ageRemover3', () => {
  it("should return an array of objects with only string name", () => {
    // ARRANGE
    const PEOPLE_LIST: ReadonlyArray<People> = [
      { name: "Aron", age: 42 },
      { name: "Stormi", age: 24 },
    ];
    const expected: ReadonlyArray<Partial<People>> = [
      { name: "Aron" }, { name: "Stormi" }
    ];
    // ACT
    const result = ageRemover3(PEOPLE_LIST);
    // ASSERT
    expect(result).toEqual(expected);
  });
});

describe('idAsName', () => {
  it('should return an array of objects with id instead of name key', () => {
    // ARRANGE
    const PEOPLE_LIST: ReadonlyArray<People> = [
      { name: "Aron", age: 42 },
      { name: "Stormi", age: 24 },
    ];
    const expected = [
      { id: "Aron", age: 42 },
      { id: "Stormi", age: 24 },
    ];
    // ACT
    const result = idAsName(PEOPLE_LIST);
    // ASSERT
    expect(result).toEqual(expected);
  });
});

describe('justNames', () => {
  it('should return an array of names', () => {
    // ARRANGE
    const PEOPLE_LIST: ReadonlyArray<People> = [
      { name: "Aron", age: 42 },
      { name: "Stormi", age: 24 },
    ];
    // ACT
    const expected: ReadonlyArray<string>= ["Aron", "Stormi"];
    // ASSERT
    const result = justNames(PEOPLE_LIST);
    expect(result).toEqual(expected);
  })
});

