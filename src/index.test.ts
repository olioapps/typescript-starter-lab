import { eventData } from "./mock_data";
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
  it("should throw an error if the array length is greater than the region length", () => {
    const expected = "Region is larger than the list of events";
    const error = () => eventScore(eventData, 12);
    expect(error).toThrow(expected);
  });
});
