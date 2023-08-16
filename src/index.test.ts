import { 
  computerProp, 
  carMaker, 
  addNewUser, 
  sortUsers, 
  addUserToRepo, 
  UserDB, 
  User } from ".";

describe("computedProp", () => {
  it("should create a single object with keys defined by variables", () => {
    // ARRANGE
    const input = 'howdy';
    const expected = {
      howdy0: 1,
      howdy1: 2,
      howdy2: 3,
    };
    // ACT
    const actual = computerProp(input);

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
        id: "123",
        name: "Aron",
      },
      "456": {
        id: "456",
        name: "Stormi",
      },
      "789": {
        id: "789",
        name: "Scott",
      },
    };
    // ACT
    const actual = addNewUser(USER_DATABASE, NEW_USER);

    // ASSERT
    expect(actual).toEqual(expected);
  });
});

describe("sortUsers", () => {
  it("should return an array of users based on user repositorys sort key", () => {
    // ARRANGE
    const USER_REPO = {
      items: {
        "123": {
          id: "123",
          name: "Aron",
        },
        "456": {
          id: "456",
          name: "Stormi",
        },
        "789": {
          id: "789",
          name: "Scott",
        },
      },
      sort: ["789", "456", "123"],
    };
    const expected = [
      {
        id: "789",
        name: "Scott",
      },
      {
        id: "456",
        name: "Stormi",
      },
      {
        id: "123",
        name: "Aron",
      },
    ];
    // ACT
    const actual = sortUsers(USER_REPO);
    // ASSERT
    expect(actual).toEqual(expected);
  });
});

describe("addUserToRepo", () => {
  it("should add newUser to repository items and new user id to repository sort array", () => {
    // ARRANGE
    const USER_REPO = {
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
      "id": "D",
      "name": "Katlin"
    }
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

    // ACT
    const actual = addUserToRepo(USER_REPO, NEW_USER);
    // ASSERT
    expect(actual).toEqual(expected);
  });
});

