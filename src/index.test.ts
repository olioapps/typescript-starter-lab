import { eventData, mistypedEventData } from "./mock_data";
import { eventScore } from ".";

describe("eventScore", () => {
  it("should return a scored event object", () => {
    const expected = "object";
    const actual = typeof eventScore(eventData);
    expect(actual).toEqual(expected);
  });

  it("should have a default region length of 5 if no region length is given", () => {
    const expected = 5;
    const actual = eventScore(eventData).subregion.length;

    expect(actual).toEqual(expected);
  });

  it("should return the correct length of the subregion when region length is given", () => {
    const expected = 3;
    const actual = eventScore(eventData, 3).subregion.length;

    expect(actual).toEqual(expected);
  });

  it("should return the highest score from the mock data and default region length", () => {
    const expected = 11;
    const actual = eventScore(eventData).score;

    expect(actual).toEqual(expected);
  });

  it("should return the highest score from the mock data and an input region length of 3", () => {
    const expected = 8;
    const actual = eventScore(eventData, 3).score;

    expect(actual).toEqual(expected);
  });

  it("should throw an error if the array length is greater than the region length", () => {
    const expected = "Region is larger than the list of events";
    const error = () => eventScore(eventData, 12);

    expect(error).toThrow(expected);
  });

  it("should throw an error if eventType in array does not exist in eventTypeScores", () => {
    const expected = "Unrecognized event type";
    const error = () => eventScore(mistypedEventData);

    expect(error).toThrow(expected);
  });
});
