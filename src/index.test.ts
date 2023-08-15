import { computedProperties, createNewCar, newCarNewAttributes, addUser, reverseSortUsers, addUserAndId, addUserAndIdInRegularOrder } from ".";

//write tests here

describe('computed properties', () => {
  it('should return an object whose keys are defined by variables', () => {

    //Arrange
    const PROP1 = "property1"
    const PROP2 = "property2"
    const expected = { 1: "property1", 2: "property2" };

    //Act
    const actual = computedProperties(PROP1, PROP2)

    //Assert
    expect(actual).toEqual(expected);
  });
});

describe('create a new car object', () => {
  it('should return the object that is passed to it', () => {

    //Arrange
    const CAR = { make: "vw", model: "thing", value: 345 }
    const expected = { make: "vw", model: "thing", value: 345 };

    //Act
    const actual = createNewCar(CAR);

    //Assert
    expect(actual).toEqual(expected);
  });

  it('should return an object with different key attributes using the object passed to it', () => {

    //Arrange
    const CAR = { make: "vw", model: "thing", value: 345 }
    const expected = { Make: "vw", Model: "thing", Value: 345 }

    //Act
    const actual = newCarNewAttributes(CAR);

    //Assert
    expect(actual).toEqual(expected);
  });
});

describe('add a new user to the database where the new user key is equal to the id', () => {
  it('it should return an immutable copy of the users object with the new user integrated into it', () => {

    //Arrange
    const USERS = {
      "123": {
        "id": "123",
        "name": "Aron"
      },
      "456": {
        "id": "456",
        "name": "Stormi"
      }
    }

    const NEW_USER = {
      "id": "789",
      "name": "Scott"
    }

    const expected = {
      "123": {
        "id": "123",
        "name": "Aron"
      },
      "456": {
        "id": "456",
        "name": "Stormi"
      },
      "789": {
        "id": "789",
        "name": "Scott"
      }
    }

    //Act
    const actual = addUser(USERS, NEW_USER);

    //Assert
    expect(actual).toEqual(expected);
  });
});

describe('sort users in database in reverse order', () => {
  it('should output the users in reverse order of their ids', () => {

    //Arrange
    const USER_REPOSITORY = {
      items: {
        "123": {
          "id": "123",
          "name": "Aron"
        },
        "456": {
          "id": "456",
          "name": "Stormi"
        },
        "789": {
          "id": "789",
          "name": "Scott"
        }
      },
      sort: ["789", "456", "123"],
    };

    const expected = [
      {
        "id": "789",
        "name": "Scott"
      },
      {
        "id": "456",
        "name": "Stormi"
      },
      {
        "id": "123",
        "name": "Aron"
      }
    ];

    //Act
    const actual = reverseSortUsers(USER_REPOSITORY);

    //Assert
    expect(actual).toEqual(expected);
  });
});

describe('return immutable copy of repository where new user is added and user id is added to sort array maintaining reverse order', () => {
  it('should return an immutable repository with added user into items and id into sort', () => {

    //Arrage
    const ORIGINAL_REPOSITORY =
    {
      items: {
        "A": {
          "id": "A",
          "name": "Aron"
        },
        "B": {
          "id": "B",
          "name": "Stormi"
        },
        "C": {
          "id": "C",
          "name": "Scott"
        }
      },
      sort: ["C", "B", "A"],
    }

    const NEW_USER = {
      "D": {
        "id": "D",
        "name": "Katlin"
      }
    };

    const expected = {
      items: {
        "A": {
          "id": "A",
          "name": "Aron"
        },
        "B": {
          "id": "B",
          "name": "Stormi"
        },
        "C": {
          "id": "C",
          "name": "Scott"
        },
        "D": {
          "id": "D",
          "name": "Katlin"
        }
      },
      sort: ["D", "C", "B", "A"],
    }

    //Act
    const actual = addUserAndId(ORIGINAL_REPOSITORY, NEW_USER)
  });
});

describe('return immutable copy of repository where new user is added and user id is added to sort array in regular order', () => {
  it('should return an immutable repository with added user into items and id into sort', () => {

    //Arrage
    const ORIGINAL_REPOSITORY =
    {
      items: {
        "A": {
          "id": "A",
          "name": "Aron"
        },
        "B": {
          "id": "B",
          "name": "Stormi"
        },
        "C": {
          "id": "C",
          "name": "Scott"
        }
      },
      sort: ["A", "B", "C"],
    }

    const NEW_USER = {
      "D": {
        "id": "D",
        "name": "Katlin"
      }
    };

    const expected = {
      items: {
        "A": {
          "id": "A",
          "name": "Aron"
        },
        "B": {
          "id": "B",
          "name": "Stormi"
        },
        "C": {
          "id": "C",
          "name": "Scott"
        },
        "D": {
          "id": "D",
          "name": "Katlin"
        }
      },
      sort: ["A", "B", "C", "D"],
    }

    //Act
    const actual = addUserAndIdInRegularOrder(ORIGINAL_REPOSITORY, NEW_USER)
  });
});

