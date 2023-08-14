//Define class here

export interface Pets {
  readonly name: string;
  readonly type: string;
  readonly dangerLevel: number;
}

export const getUniquePetTypes = (pets: ReadonlyArray<Pets>) => {
  const container: Record<string, number> = {};
  for (const pet of pets) {
    const key = pet.type.toLocaleLowerCase();
    container[key] = container[key] == undefined ? 1 : container[key] + 1;
  }
  return container;
};

// DONE - Function that counts number of unique pet types
// DONE - Function is case insensitive
// DONE - Returns all items lower case
// DONE - Returns an Object containing the result
// DONE - { "dog": 4, "cat": 2, "locust": 1 }
// DONE - returns empty object if empty

// Function that counts number of unique pet types
// Function is case insensitive
// Returns an Object containing the result
// { "dog": 4, "cat": 2, "locust": 1 }
// returns empty array if empty

// Return the most dangerous animal
// returns the full animal object

// (animals, threshold) => bool
// returns a bool if all pets are not dangerous
// function takes a threshold as a secondary options

// returns sorts by category then by name case insensitive
