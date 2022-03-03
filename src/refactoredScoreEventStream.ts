import { Event } from "./models"

const scoreEventType = (sum: number, event: Event) => {
  const { eventType } = event
  eventType === "new message" 
    ? sum += 1
    : eventType === "view" 
      ? sum += 2
      : sum += 3

  return sum
}

const sumArray = (eventArray: Event[]): number => {
  return eventArray.reduce((sum: number, event: Event): number => {
    return scoreEventType(sum, event)
  }, 0)
}

const scoreFirstFiveSubarrays = (eventStream: Event[]): number => {  
  const firstFiveElements = eventStream.slice(0, 4)
  return sumArray(firstFiveElements)
}

const gethighScoreFinalIndex = (
  eventStream: Event[],
  subarraySumA: number,
): number => { 
  let highScoreFinalIndex: number = 4 
  let subarraySumB: number = subarraySumA 
   
  for (let i = 5; i < eventStream.length; i++) { 
    let lastEventValue: number = 0

    subarraySumB = scoreEventType(subarraySumB, eventStream[i])

    lastEventValue = scoreEventType(lastEventValue, eventStream[i-5])

    subarraySumB -= lastEventValue

    if (subarraySumB > subarraySumA) {
      highScoreFinalIndex = i
    }
    subarraySumA = Math.max(subarraySumA, subarraySumB)
  }
  return highScoreFinalIndex
}

export function scoreEventStream(eventStream: Event[]): Event[] {

  if (eventStream.length < 5) { 
    return eventStream
  } else {
    let subarraySum = scoreFirstFiveSubarrays(eventStream) 

    const index: number = gethighScoreFinalIndex(eventStream, subarraySum)
    const highScoreSubarrayFirstIndex: number = index - 4 
    const highScoreSubarrayLastIndex: number = index + 1

    const finalHighScoreSubarray: Event[] = eventStream.slice(
      highScoreSubarrayFirstIndex, 
      highScoreSubarrayLastIndex,
    )

    return finalHighScoreSubarray
  }
}       
