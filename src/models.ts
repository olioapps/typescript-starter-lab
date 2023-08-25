export interface event {
  timestamp: number,
  eventType: string
}

export interface eventWithScore extends event {
  score: number
}

export interface scored_region {
  events: ReadonlyArray<event>,
  score: number
}