type EventType = "screenshot" | "new message" | "view"

export interface StreamEvent {
  timestamp: number,
  eventType: EventType
}

interface ScoreTracker {
  highScore: number,
  currentScore: number,
  highStartIndex: number
}

export const scoreArray = (eventArray: StreamEvent[]): StreamEvent[] => {
  const scoreLookup = {
    "new message": 1,
    "view": 2,
    "screenshot": 3
  }

  //keep track of highest score so far and starting index of subarray
  const scoreTracker: ScoreTracker = {
    highScore: 0,
    currentScore: 0,
    highStartIndex: 0
  }


  //look at first five, set to current score and high score
  scoreTracker.highScore =
    eventArray.slice(0, 5)
      .reduce((acc, curr) => {
        acc += scoreLookup[curr.eventType]
        return acc
      }, 0)
  scoreTracker.currentScore = scoreTracker.highScore

  for (let i = 0; i < eventArray.length - 5; i++) {
    //subtract score at pointer
    scoreTracker.currentScore -= scoreLookup[eventArray[i].eventType]
    //add score of (index of pointer + 5)
    scoreTracker.currentScore += scoreLookup[eventArray[i + 5].eventType]
    //compare and possibly store
    if (scoreTracker.currentScore > scoreTracker.highScore) {
      scoreTracker.highScore = scoreTracker.currentScore
      scoreTracker.highStartIndex = i + 1
    }
  }

  return eventArray.slice(scoreTracker.highStartIndex, scoreTracker.highStartIndex + 5)
}