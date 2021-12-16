type EventType = "screenshot" | "new message" | "view"

export interface StreamEvent {
  timestamp: number,
  eventType: EventType
}

interface ScoreTracker {
  highScore: number,
  currentScore: number,
  startIndex: number
}

export const scoreArray = (eventArray: StreamEvent[]): StreamEvent[] => {
  const scoreTracker: ScoreTracker = {
    highScore: 0,
    currentScore: 0,
    startIndex: 0
  }

  
  //keep track of highest score so far and starting index of subarray
  //look at first five, set to current score and high score
    //use pointer to keep track of position in array
  //subtract score at pointer
  //increment pointer
  //add score of (index of pointer + 5)
  //calc, compare, repeat
  const scores = eventArray.map(streamEvent => {
    return streamEvent
  })

  return scores
}