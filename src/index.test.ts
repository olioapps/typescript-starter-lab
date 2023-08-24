import { eventData } from "./mock_data";
import { eventStream } from ".";

describe("eventStream", () => {
  it("should return an array of scores", () => {
    const expected = 9;
    const actual = eventStream(eventData, 1);
    expect(actual).toEqual(expected);
  });
  it("should have a default regionLength of 5 if no region length is given", () => {
    const expected = 5;
    const actual = eventStream(eventData)[0].subregion.length;
    expect(actual).toEqual(expected);
  })
});
