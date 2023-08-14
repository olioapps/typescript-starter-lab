describe('Lesson One: Manipulating an array of objects', () => {
  it('should return an empty array when an empty array is passed', () => {
    // ARRANGE
    const EMPTY_ARRAY = [];
    const expected = [];
    // ACT
    const result = arrayCopier(EMPTY_ARRAY);
    // ASSERT
    expect(result).toBe(expected)
  });

  it('should return a copy of the array', () => {
    // ARRANGE
    const PEOPLE_LIST = [
      { name: "Aron", age: 42 }, 
      { name: "Stormi", age: 24 }
    ];
    const expected = [
      { name: "Aron", age: 42 }, 
      { name: "Stormi", age: 24 }
    ];
    // ACT
    const result = arrayCopier(PEOPLE_LIST);
    // ASSERT
    expect(result).toEqual(expected);
  });

  it('')
})