import { Event } from "./models"

const sumArray = (eventArray: any): number => {
  return eventArray.reduce((sum: number, event: Event): number => {
    return event.eventType === "new message" 
      ? (sum += 1)
      : event.eventType === "view" 
        ? (sum += 2)
        : (sum += 3)
  }, 0)
}

const scoreEventType = (
  event: Event, 
  sum: number
): number => {
  event.eventType === "new message" 
  ? sum += 1 
  : event.eventType === "view" 
    ? sum += 2 
    : sum += 3

  return sum
}

const scoreFirstFiveSubarrays = (eventStream: Event[]): number => {  
  const firstFiveElements = eventStream.slice(0, 4)
  return sumArray(firstFiveElements)
}

const scoreRemainingSubarrays = (
  eventStream: Event[],
  subarraySum: number,
): number => { 
  let highScoreFinalIndex: number = 4 
  let subarraySumToCompare: number = subarraySum  
  for (let i = 5; i < eventStream.length; i++) { 
    let lastEventValue: number = 0

    subarraySumToCompare = scoreEventType(eventStream[i], subarraySumToCompare)

    lastEventValue = scoreEventType(eventStream[i-5], lastEventValue)

    subarraySumToCompare -= lastEventValue

    if (subarraySumToCompare > subarraySum) {
      highScoreFinalIndex = i
    }
    subarraySum = Math.max(subarraySum, subarraySumToCompare)
  }
  return highScoreFinalIndex
}

export function scoreEventStream(eventStream: Event[]): Event[] {

  if (eventStream.length < 5) { 
    return eventStream
  } else {
    let subarraySum = scoreFirstFiveSubarrays(eventStream) 

    const index: number = scoreRemainingSubarrays(eventStream, subarraySum)
    const highScoreSubarrayFirstIndex: number = index - 4 
    const highScoreSubarrayLastIndex: number = index + 1

    const finalHighScoreSubarray: Event[] = eventStream.slice(
      highScoreSubarrayFirstIndex, 
      highScoreSubarrayLastIndex,
    )

    return finalHighScoreSubarray
  }
}       
