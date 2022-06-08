//Define class/functions here
import { firstMockEventStream } from "./mockEventStream"
export interface Event {
  timestamp: number
  eventType: string
}

const findScore = (eventStream: Array<Event>): number => {
  const score = eventStream.reduce((acc, event) => {
    if (event.eventType === 'screenshot') {
      return acc + 3
    } else if (event.eventType === 'view') {
      return acc + 2
    }
    return acc + 1
  }, 0)
  
  return score
}

export const getHighestScoringRegion = (eventStream: Array<Event>): Array<Event> => {
  let potentialArray = eventStream.slice(0, 5)
  const score = findScore(potentialArray)
  console.log('score', score)
  
  // then need to loop through each array and check the next five and determine their score
    // if the score is higher then the potentailArray score then replace potentail array
  return eventStream
}

console.log(getHighestScoringRegion(firstMockEventStream))