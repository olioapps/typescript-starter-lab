//Define class/functions here

import { firstMockEventStream } from './mockEventStream'
export interface Event {
  timestamp: number
  eventType: 'screenshot' | 'view' | 'new message'
}

export const scoreEvent = (event: Event): number => {
  const { eventType } = event
  switch (eventType) {
    case "new message":
      return 1
    case "view":
      return 2
    case "screenshot":
      return 3
    default:
      return 0
  }
}

export const findRegionScore = (eventStream: Array<Event>): number => {
  const score = eventStream.reduce((acc, event) => {
    return acc + scoreEvent(event)
  }, 0)

  return score
}

export const getHighestScoringRegion = (eventStream: Array<Event>): Array<Event> => {
  
  const eventStreamScore: number[]= eventStream.reduce((acc, next, index): any => {
    const eventRegion = eventStream.slice(index, index + 5)
    return [...acc, findRegionScore(eventRegion) ] 
  }, [])

  const max: number = Math.max(...eventStreamScore)
  const index: number = eventStreamScore.indexOf(max)

  return eventStream.slice(index, index + 5)
}

getHighestScoringRegion(firstMockEventStream)