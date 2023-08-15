import { howdyMaker, carMaker } from ".";

describe('howdyMaker', () => {
  it('should create a single object with keys defined by variables', () => {
    // ARRANGE
    let i = 0;
    const expected = {
      howdy1: 1,
      howdy2: 2,
      howdy3: 3
    }
    // ACT
    const actual = howdyMaker(i);

    // ASSERT
    expect(actual).toEqual(expected)
  });
});

describe('carMaker', () => {
  it('should return new car object with new property names', () => {
    // ARRANGE
    const CAR_OBJECT = {
      car_make: 'VW',
      car_model: 'Thing',
      car_value: 450
    };
    const expected = {
      carMake: 'VW',
      carModel: 'Thing',
      carValue: 450
    };

    // ACT
    const actual = carMaker(CAR_OBJECT)

    // ASSERT
    expect(actual).toEqual(expected);
  });
});


// 1. Computed properties --> single object w/ keys defined as variables
// 2. Computed properties, Destructuring --> function takes an object { make, model, value } and returns new object with new property names
// 3. Computed properties, destructuring --> add new user to database, make the users id the key, function(newUserData, userDatabase) => return userDatabase with newUserData (immutable)
// 4. Function (userRepository) => return sorted array of user objects based on sort key
// 5. 