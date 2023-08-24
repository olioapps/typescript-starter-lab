import { eventData } from "./mock_data";
import { eventScore } from ".";

describe("eventScore", () => {
  it("should return a scored event object", () => {
    const expected = 'object'
    const actual = typeof eventScore(eventData);
    expect(actual).toEqual(expected);
  });
  it("should have a default region length of 5 if no region length is given", () => {
    const expected = 5;
    const actual = eventScore(eventData).subregion.length;
    expect(actual).toEqual(expected);
  });
});
