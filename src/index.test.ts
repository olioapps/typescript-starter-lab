interface People {
  readonly name: string;
  readonly age: number;
}

describe("arrayCopier", () => {
  it("should return an empty array when an empty array is passed", () => {
    // ARRANGE
    const EMPTY_ARRAY: ReadonlyArray<People> = [];
    const expected: ReadonlyArray<People> = [];
    // ACT
    const result = arrayCopier(EMPTY_ARRAY);
    // ASSERT
    expect(result).toBe(expected);
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
    expect(result).toEqual(expected)
  });
});

describe("ageRemover", () => {
  it("should remove the age key and value from an array of people with ages", () => {
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
    const result
  });
});
