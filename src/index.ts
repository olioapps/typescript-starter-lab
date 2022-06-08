//Define class/functions here

export interface Event {
  timestamp: number
  eventType: 'screenshot' | 'view' | 'new message'
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
  
  const eventStreamScore: number[]= eventStream.reduce((acc, next, index): any => {
    const eventRegion = eventStream.slice(index, index + 5)
    return [...acc, findScore(eventRegion) ] 
  }, [])

  const max: number = Math.max(...eventStreamScore)
  const index = eventStreamScore.indexOf(max as number)

  return eventStream.slice(index, index + 5)
}

