import { Event, Score } from "./models"

// scoreEvents = (events): score => {} 

const scoreFirstFiveSubarrays = (eventTypeConvertedToScore: Score[]): number => { 
  let sum: number = 0 
  for (let i = 0; i < 5; i++) {
    sum += eventTypeConvertedToScore[i].score
  }
  return sum
}

const scoreRemainingSubarrays = (eventTypeConvertedToScore: Score[], subarraySumToCompare: number, trackSubarrayIndices: Record<string, number>, originalSubarraySum: number) => {
  for (let i = 5; i < eventTypeConvertedToScore.length; i++) { 
    subarraySumToCompare += eventTypeConvertedToScore[i].score - eventTypeConvertedToScore[i-5].score
    trackSubarrayIndices[subarraySumToCompare] = i
    originalSubarraySum = Math.max(originalSubarraySum, subarraySumToCompare)
  }
  return { trackSubarrayIndices, originalSubarraySum }
}

export function scoreEventStream(eventStream: Event[]): Event[] {

  if (eventStream.length < 5) { //     if (eventStream.length < 5) return eventStream
    return eventStream
  } else {
    let trackSubarrayIndices: Record<string, number> = {} // it's confusing that the score is the key, and not the index of the event

    const eventTypeConvertedToScore = eventStream.map((event: Event): Score =>
    event.eventType === 'new message' 
      ? {score: 1} 
      : event.eventType === 'view' 
        ? {score: 2} 
        : {score: 3} 
    ) 

    let originalSubarraySum = scoreFirstFiveSubarrays(eventTypeConvertedToScore)
    trackSubarrayIndices[originalSubarraySum] = 4 // we have { [firstScore]: 4 }
    let subarraySumToCompare: number = originalSubarraySum // firstScore

    const {
        trackSubarrayIndices: destructuredTrackSubarrayIndices,
        originalSubarraySum: destructuredOriginalSubarraySum,
      } = scoreRemainingSubarrays(eventTypeConvertedToScore, subarraySumToCompare, trackSubarrayIndices, originalSubarraySum)

    const finalHighScoreSubarray: Event[] = eventStream.slice(
      (destructuredTrackSubarrayIndices[destructuredOriginalSubarraySum]-4), 
      (destructuredTrackSubarrayIndices[destructuredOriginalSubarraySum]+1),)

      return finalHighScoreSubarray
  }
}       
