import eventData from "./mock_data";
import { eventScore } from ".";

describe("eventScore", () => {
  it("should return a scored event object", () => {
    const expected = "object";
    const actual = typeof eventScore(eventData);
    expect(actual).toEqual(expected);
  });

  it("should have a default region length of 5 if no region length is given", () => {
    const expected = 5;
    const actual = eventScore(eventData).events.length;

    expect(actual).toEqual(expected);
  });

  it("should return the correct length of the subregion when region length is given", () => {
    const expected = 3;
    const actual = eventScore(eventData, 3).events.length;

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

  it("should return the cumulative score of all events if region length given is larger than events array length", () => {
    const expected = 15;
    const actual = eventScore(eventData, 12).score;

    expect(actual).toEqual(expected);
  });
});
