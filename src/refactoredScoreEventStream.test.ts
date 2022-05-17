import { scoreEventStream } from "./refactoredScoreEventStream"
import { Event } from "./models"

it("Test 1: Empty Event stream", () => {
  const result = scoreEventStream([])

  expect(result).toStrictEqual([])
})

it("Test testing: Event stream with less than 5 events", () => {
  const testArray: Event[] = [
    { timestamp: 123123123, eventType: "view", },  
    { timestamp: 123123124, eventType: "new message", },
    { timestamp: 123123125, eventType: "screenshot", },
    { timestamp: 123123126, eventType: "screenshot", },
  ]
  const result = scoreEventStream(testArray)
  
  expect(result).toStrictEqual([
    { timestamp: 123123123, eventType: "view", },
    { timestamp: 123123124, eventType: "new message", },
    { timestamp: 123123125, eventType: "screenshot", },
    { timestamp: 123123126, eventType: "screenshot", },
  ])
})

it("Test 3: Event stream with more than or equal to 5 events", () => {
  const testArray: Event[] = [
    { timestamp: 123123123, eventType: "view", },
    { timestamp: 123123124, eventType: "new message", },
    { timestamp: 123123125, eventType: "screenshot", },   
    { timestamp: 123123126, eventType: "screenshot", },
    { timestamp: 123123127, eventType: "screenshot", },
    { timestamp: 123123128, eventType: "view", },
    { timestamp: 123123129, eventType: "view", },
    { timestamp: 123121330, eventType: "new message", },
    { timestamp: 123123131, eventType: "view", },
    ]
  const result = scoreEventStream(testArray)

  expect(result).toStrictEqual([
    { timestamp: 123123125, eventType: "screenshot", },
    { timestamp: 123123126, eventType: "screenshot", },
    { timestamp: 123123127, eventType: "screenshot", },
    { timestamp: 123123128, eventType: "view", },
    { timestamp: 123123129, eventType: "view", },
  ]) 
})
