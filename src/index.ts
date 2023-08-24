type event = {
  timestamp: number,
  eventType: string
}

type highest_score = {
  events: ReadonlyArray<event>,
  score: number
}

export function scoreEventStream(eventStream: ReadonlyArray<event>): highest_score {
  return {
    events: [],
    score: 0
  }
}
