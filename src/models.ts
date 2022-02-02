export interface Event {
  readonly timestamp: number
  readonly eventType: "screenshot" | "new message" | "view"
}
export interface Score {
  readonly score: number
}
