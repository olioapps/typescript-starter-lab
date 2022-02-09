import { Event } from "./models"
   //add tests to helper functions 
  //check typing throughout 
const sumArray = (eventArray: any) => {
  return eventArray.reduce((sum: number, event: Event): number => {
    return event.eventType === 'new message' 
      ? (sum += 1)
      : event.eventType === 'view' 
        ? (sum += 2)
        : (sum += 3)
  }, 0)
}

const scoreFirstFiveSubarrays = (eventStream: Event[]): any => {  
  const firstFiveElements = eventStream.slice(0, 4);
  return sumArray(firstFiveElements);
}

const scoreRemainingSubarrays = (
  eventStream: Event[],
  subarraySum: number,
): number => { 
  let highScoreFinalIndex = 4 // update?  
  let subarraySumToCompare = subarraySum  
  for (let i = 5; i < eventStream.length; i++) { 
      let lastEventValue = 0

    eventStream[i].eventType === 'new message' //DRY this code 
      ? subarraySumToCompare += 1 
      : eventStream[i].eventType === 'view' 
        ? subarraySumToCompare += 2 
        : subarraySumToCompare += 3
//(eventType, currentSum)
      eventStream[i-5].eventType === 'new message' 
      ? lastEventValue += 1 
      : eventStream[i-5].eventType === 'view' 
        ? lastEventValue += 2 
        : lastEventValue += 3

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

    const index = scoreRemainingSubarrays(eventStream, subarraySum)
    const highScoreSubarrayFirstIndex = index - 4 
    const highScoreSubarrayLastIndex = index + 1

    const finalHighScoreSubarray: Event[] = eventStream.slice(
      highScoreSubarrayFirstIndex, 
      highScoreSubarrayLastIndex,
    )

    return finalHighScoreSubarray
  }
}       
