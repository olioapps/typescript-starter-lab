import { 
  computerProp, 
  carMaker, 
  addNewUser, 
  sortUsers, 
  addUserToRepo, 
  UserDB, 
  User } 
  from ".";

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
    const carObject = {
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
    const actual = carMaker(carObject);

    // ASSERT
    expect(actual).toEqual(expected);
  });
});

describe("addNewUser", () => {
  it("should add new user to user database, using user id as user object key", () => {
    // ARRANGE
    const userDatabase: UserDB = {
      "123": {
        id: "123",
        name: "Aron",
      },
      "456": {
        id: "456",
        name: "Stormi",
      },
    };
    const newUser: User = {
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
    const actual = addNewUser(userDatabase, newUser);

    // ASSERT
    expect(actual).toEqual(expected);
  });
});

describe("sortUsers", () => {
  it("should return an array of users based on user repositorys sort key", () => {
    // ARRANGE
    const userRepo = {
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
    const actual = sortUsers(userRepo);
    // ASSERT
    expect(actual).toEqual(expected);
  });
});

describe("addUserToRepo", () => {
  it("should add newUser to repository items and new user id to repository sort array", () => {
    // ARRANGE
    const userRepo = {
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
    const newUser = {
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
    const actual = addUserToRepo(userRepo, newUser);
    // ASSERT
    expect(actual).toEqual(expected);
  });
});
