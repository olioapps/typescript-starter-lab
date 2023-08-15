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
    const expected = [
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
    //
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
    expect(result).toEqual(expected);
  });
});

describe("ageRemover2", () => {
  it("should remove the age key from an array of people with ages", () => {
    const PEOPLE_LIST: ReadonlyArray<People> = [
      { name: "Aron", age: 42 },
      { name: "Stormi", age: 24 },
    ];
    const expected: ReadonlyArray<Partial<People>> = [
      { name: "Aron" },
      { name: "Stormi" },
    ];
    const result = ageRemover2(PEOPLE_LIST);
    expect(result).toEqual(expected);
  });
});

describe('ageRemover3', () => {
  it("should return an array of objects with only string name", () => {
    const PEOPLE_LIST: ReadonlyArray<People> = [
      { name: "Aron", age: 42 },
      { name: "Stormi", age: 24 },
    ];
    const expected = [
      { name: "Aron" }, { name: "Stormi" }
    ];
    const result = ageRemover3(PEOPLE_LIST);
    expect(result).toEqual(expected);
  });
});

describe('idAsName', () => {
  it('should return an array of objects with id instead of name key', () => {
    const PEOPLE_LIST: ReadonlyArray<People> = [
      { name: "Aron", age: 42 },
      { name: "Stormi", age: 24 },
    ];
    const expected = [
      { id: "Aron", age: 42 },
      { id: "Stormi", age: 24 },
    ];
    const result = idAsName(PEOPLE_LIST);
    expect(result).toEqual(expected);
  });
});

describe('justNames', () => {
  it('should return an array of names', () => {
    const PEOPLE_LIST: ReadonlyArray<People> = [
      { name: "Aron", age: 42 },
      { name: "Stormi", age: 24 },
    ];
    const expected: ReadonlyArray<string>= ["Aron", "Stormi"];
    const result = justNames(PEOPLE_LIST);
    expect(result).toEqual(expected);
  })
});


// 1. DONE: copy people array w/ spread operator
// 2. DONE: add age to agelessPeople w/ map()+spread operator
// 3. DONE: remvove age from people w/ map(), return array of objects w/out age key
// 4. DONE: remove age from people w/ map() && destructuring, return array of objects w/out age key
// 5. DONE: remove age and return just object with name w/ destructing + map
// 6. DONE: given people array, return an array of objects with id key w/ value of the name w/ destructuring and map()
// 7. DONE: given people array, return array of strings of the names
