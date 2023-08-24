export interface event {
  timestamp: number,
  eventType: string
}

export interface highest_score {
  events: ReadonlyArray<event>,
  score: number
}