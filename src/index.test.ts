import eventData from "./mock_data";
import { handleEventStreamScoring } from ".";

describe("handleEventStreamScoring expected shape", () => {
  it("should return a scored event object", () => {
    const expected = "object";
    const actual = typeof handleEventStreamScoring(eventData);
    expect(actual).toEqual(expected);
  });
  it("should return the correct array of event objects", () => {
    const expected = eventData.slice(3, 8);
    const actual = handleEventStreamScoring(eventData).events;
    expect(actual).toEqual(expected);
  });
});

describe("handleEventStreamScoring expected subarray lengths", () => {
  it("should have a default region length of 5 if no region length is given", () => {
    const expected = 5;
    const actual = handleEventStreamScoring(eventData).events.length;

    expect(actual).toEqual(expected);
  });

  it("should return the correct length of the subregion when region length is given", () => {
    const expected = 3;
    const actual = handleEventStreamScoring(eventData, 3).events.length;

    expect(actual).toEqual(expected);
  });
});

describe("handleEventStreamScoring expected scores", () => {
  it("should return the highest score from the mock data and default region length", () => {
    const expected = 11;
    const actual = handleEventStreamScoring(eventData).score;

    expect(actual).toEqual(expected);
  });

  it("should return the highest score from the mock data and an input region length of 3", () => {
    const expected = 8;
    const actual = handleEventStreamScoring(eventData, 3).score;

    expect(actual).toEqual(expected);
  });

  it("should return the cumulative score of all events if region length given is larger than events array length", () => {
    const expected = 15;
    const actual = handleEventStreamScoring(eventData, 12).score;

    expect(actual).toEqual(expected);
  });
});
