import { howdyMaker, carMaker, addNewUser, sortUsers, UserDB, User } from ".";

describe("howdyMaker", () => {
  it("should create a single object with keys defined by variables", () => {
    // ARRANGE
    let i = 0;
    const expected = {
      howdy1: 1,
      howdy2: 2,
      howdy3: 3,
    };
    // ACT
    const actual = howdyMaker(i);

    // ASSERT
    expect(actual).toEqual(expected);
  });
});

describe("carMaker", () => {
  it("should return new car object with new property names", () => {
    // ARRANGE
    const CAR_OBJECT = {
      car_make: "VW",
      car_model: "Thing",
      car_value: 450,
    };
    const expected = {
      carMake: "VW",
      carModel: "Thing",
      carValue: 450,
    };

    // ACT
    const actual = carMaker(CAR_OBJECT);

    // ASSERT
    expect(actual).toEqual(expected);
  });
});

describe("addNewUser", () => {
  it("should add new user to user database, using user id as user object key", () => {
    // ARRANGE
    const USER_DATABASE: UserDB = {
      "123": {
        id: "123",
        name: "Aron",
      },
      "456": {
        id: "456",
        name: "Stormi",
      },
    };
    const NEW_USER: User = {
      id: "789",
      name: "Scott",
    };
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
    // ACT
    const actual = addNewUser(USER_DATABASE, NEW_USER);

    // ASSERT
    expect(actual).toEqual(expected);
  });
});

describe('sortUsers', () => {
  it('should return an array of users based on user repositorys sort key', () => {
    // ARRANGE
    const USER_REPO = {
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
    const expected =   [
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
      },
    ];
    // ACT
    const actual = sortUsers(USER_REPO);
    // ASSERT
    expect(actual).toEqual(expected);
  });
});


// 1. DONE Computed properties --> single object w/ keys defined as variables
// 2. DONE Computed properties, Destructuring --> function takes an object { make, model, value } and returns new object with new property names
// 3. DONE Computed properties, destructuring --> add new user to database, make the users id the key, function(newUserData, userDatabase) => return userDatabase with newUserData (immutable)
// 4. Function (userRepository) => return sorted array of user objects based on sort key
// 5.
