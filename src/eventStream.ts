type EventType = "screenshot" | "new message" | "view"

interface StreamEvent {
  timestamp: number,
  eventType: EventType
}

interface ScoreTracker {
  subarrayScore: number,
  startIndex: number
}

const scoreArray = (eventArray: StreamEvent[]): StreamEvent[] => {
  const scores = eventArray.map(streamEvent => {
    //keep track of highest score so far and starting index of subarray
    //look at first five, set to current score and high score
      //use pointer to keep track of position in array
    //subtract score at pointer
    //increment pointer
    //add score of (index of pointer + 5)
    //calc, compare, repeat
    return streamEvent
  })

  return scores
}