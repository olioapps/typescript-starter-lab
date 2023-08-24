import { event, highest_score } from './models'

export function scoreEventStream(eventStream: ReadonlyArray<event>): highest_score {
  return {
    events: [],
    score: 0
  }
}
