import { Pets, getUniquePetTypes } from ".";

describe("Unique pet Types", () => {
  it("returns empty object", () => {
    // Arrange
    const EMPTY_PET_LIST: ReadonlyArray<Pets> = [];
    const expected = {};

    // Act
    const actual = getUniquePetTypes(EMPTY_PET_LIST);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("returns unique pet list objects", () => {
    // Arrange
    const PET_LIST: ReadonlyArray<Partial<Pets>> = [
      {
        type: "dog",
      },
      {
        type: "dog",
      },
      {
        type: "cat",
      },
    ];

    const expected = {
      dog: 2,
      cat: 1,
    };

    // Act
    const actual = getUniquePetTypes(PET_LIST as ReadonlyArray<Pets>);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("returns unique pet list objects case insensitive", () => {
    // Arrange
    const PET_LIST: ReadonlyArray<Partial<Pets>> = [
      {
        type: "DOG",
      },
      {
        type: "dOg",
      },
      {
        type: "Cat",
      },
    ];

    const expected = {
      dog: 2,
      cat: 1,
    };

    // Act
    const actual = getUniquePetTypes(PET_LIST as ReadonlyArray<Pets>);

    // Assert
    expect(actual).toEqual(expected);
  });
});
