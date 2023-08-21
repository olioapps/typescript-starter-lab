import { 
  computedProperties, 
  createNewCar, 
  addUser, 
  reverseSortUsers, 
  addUserAndId, 
  addUserAndIdInRegularOrder } from "./index";

describe('computedProperties', () => {
  it('should return an object whose keys are defined by variables', () => {

    const prop1 = "property1"
    const prop2 = "property2"
    const expected = { "property1": "panda", "property2": "salad" };

    const actual = computedProperties(prop1, prop2)

    expect(actual).toEqual(expected);
  });
});

describe('createNewCar', () => {
  it('should return an object with different key attributes using the object passed to it', () => {

    const car = { make: "vw", model: "thing", value: 345 }
    const expected = { Make: "vw", Model: "thing", Value: 345 }

    const actual = createNewCar(car);

    expect(actual).toEqual(expected);
  });
});

describe('addUser', () => {
  it('it should return an immutable copy of the users object with the new user integrated into it', () => {

    const users = {
      "123": {
        "id": "123",
        "name": "Aron"
      },
      "456": {
        "id": "456",
        "name": "Stormi"
      }
    }

    const new_user = {
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

    const actual = addUser(users, new_user);

    expect(actual).toEqual(expected);
  });
});

describe('reverseSortUsers', () => {
  it('should output the users in reverse order of their ids', () => {

    const user_repository = {
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

    const actual = reverseSortUsers(user_repository);

    expect(actual).toEqual(expected);
  });
});

describe('addUserAndId', () => {
  it('should return an immutable repository with added user into items and id into sort', () => {

    const original_repository =
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

    const new_user = {
        "id": "D",
        "name": "Katlin"
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

    const actual = addUserAndId(original_repository, new_user)

    expect(actual).toEqual(expected);
  });
});

describe('addUserAndIdInRegularOrder', () => {
  it('should return an immutable repository with added user into items and id into sort', () => {

    const original_repository =
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

    const new_user = {
      "id": "D",
      "name": "Katlin"
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

    const actual = addUserAndIdInRegularOrder(original_repository, new_user)

    expect(actual).toEqual(expected);
  });
});

