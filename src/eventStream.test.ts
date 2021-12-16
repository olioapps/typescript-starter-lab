import { scoreArray, StreamEvent } from "./eventStream"

// Messages are worth 1
// Views are worth 2
// Screenshots are worth 3

describe("Event Stream coding challenge tests", () => {
  it("passes", () => {
    expect(true).toBeTruthy()
  })

  it("can handle an empty event array", () => {
    const eventArray: StreamEvent[] = [];
    const result = scoreArray(eventArray)
    expect(result).toEqual([])
  })

  it("Can handle an array of size 1", () => {
    const eventArray: StreamEvent[] = [
      { timestamp: 1, eventType: "view" }
    ]
    const result = scoreArray(eventArray)
    expect(result).toEqual(eventArray)
  })

  it("Can handle an array of size 4", () => {
    const eventArray: StreamEvent[] = [
      { timestamp: 1, eventType: "view" },
      { timestamp: 2, eventType: "new message" },
      { timestamp: 3, eventType: "screenshot" },
      { timestamp: 4, eventType: "view" }
    ]
    const result = scoreArray(eventArray)
    expect(result).toEqual(eventArray)
  })

  it("Can handle an array of size 5", () => {
    const eventArray: StreamEvent[] = [
      { timestamp: 1, eventType: "view" },
      { timestamp: 2, eventType: "new message" },
      { timestamp: 3, eventType: "screenshot" },
      { timestamp: 4, eventType: "view" },
      { timestamp: 5, eventType: "view" }
    ]
    const result = scoreArray(eventArray)
    expect(result).toEqual(eventArray)
  })

  it("Can handle an array of size 6", () => {
    const eventArray: StreamEvent[] = [
      { timestamp: 1, eventType: "view" },
      { timestamp: 2, eventType: "view" },
      { timestamp: 3, eventType: "view" },
      { timestamp: 4, eventType: "view" },
      { timestamp: 5, eventType: "view" },
      { timestamp: 6, eventType: "view" }
    ]
    const result = scoreArray(eventArray)
    expect(result).toEqual([
      { timestamp: 1, eventType: "view" },
      { timestamp: 2, eventType: "view" },
      { timestamp: 3, eventType: "view" },
      { timestamp: 4, eventType: "view" },
      { timestamp: 5, eventType: "view" }
    ])
  })

  it("Can find the best score of an array of varying events of length 6", () => {
    const eventArray: StreamEvent[] = [
      { timestamp: 1, eventType: "new message" },
      { timestamp: 2, eventType: "new message" },
      { timestamp: 3, eventType: "screenshot" },
      { timestamp: 4, eventType: "view" },
      { timestamp: 5, eventType: "view" },
      { timestamp: 6, eventType: "view" }
    ]
    const result = scoreArray(eventArray)
    expect(result).toEqual([
      { timestamp: 2, eventType: "new message" },
      { timestamp: 3, eventType: "screenshot" },
      { timestamp: 4, eventType: "view" },
      { timestamp: 5, eventType: "view" },
      { timestamp: 6, eventType: "view" }
    ])
  })

  it("Can find the best score of an array of vartying events of length 20", () => {
    const eventArray: StreamEvent[] = [
      { timestamp: 1, eventType: "view" },
      { timestamp: 2, eventType: "new message" },
      { timestamp: 3, eventType: "view" },
      { timestamp: 4, eventType: "new message" },
      { timestamp: 5, eventType: "view" },
      { timestamp: 6, eventType: "new message" },
      { timestamp: 7, eventType: "view" },
      { timestamp: 8, eventType: "new message" },
      { timestamp: 9, eventType: "view" },
      { timestamp: 10, eventType: "screenshot" },
      { timestamp: 11, eventType: "screenshot" },
      { timestamp: 12, eventType: "screenshot" },
      { timestamp: 13, eventType: "screenshot" },
      { timestamp: 14, eventType: "view" },
      { timestamp: 15, eventType: "screenshot" },
      { timestamp: 16, eventType: "screenshot" },
      { timestamp: 17, eventType: "screenshot" },
      { timestamp: 18, eventType: "screenshot" },
      { timestamp: 19, eventType: "screenshot" },
      { timestamp: 20, eventType: "view" }
    ]
    const result = scoreArray(eventArray)
    expect(result).toEqual([
      { timestamp: 15, eventType: "screenshot" },
      { timestamp: 16, eventType: "screenshot" },
      { timestamp: 17, eventType: "screenshot" },
      { timestamp: 18, eventType: "screenshot" },
      { timestamp: 19, eventType: "screenshot" },
    ])
  })

  it('Can find a less obvious subarray', () => {
    const eventArray: StreamEvent[] = [
      { timestamp: 1, eventType: "view" },
      { timestamp: 2, eventType: "new message" },
      { timestamp: 3, eventType: "view" },
      { timestamp: 4, eventType: "new message" },
      { timestamp: 5, eventType: "view" },
      { timestamp: 6, eventType: "new message" },
      { timestamp: 7, eventType: "view" },
      { timestamp: 8, eventType: "view" },
      { timestamp: 9, eventType: "view" },
      { timestamp: 10, eventType: "screenshot" },
      { timestamp: 11, eventType: "view" },
      { timestamp: 12, eventType: "view" },
      { timestamp: 13, eventType: "new message" },
      { timestamp: 14, eventType: "view" },
      { timestamp: 15, eventType: "view" },
      { timestamp: 16, eventType: "new message" },
      { timestamp: 17, eventType: "view" },
      { timestamp: 18, eventType: "view" },
      { timestamp: 19, eventType: "new message" },
      { timestamp: 20, eventType: "new message" },
      { timestamp: 21, eventType: "view" }
      ]
    const result = scoreArray(eventArray)
    expect(result).toEqual([
      { timestamp: 7, eventType: "view" },
      { timestamp: 8, eventType: "view" },
      { timestamp: 9, eventType: "view" },
      { timestamp: 10, eventType: "screenshot" },
      { timestamp: 11, eventType: "view" },
    ])
  })
})