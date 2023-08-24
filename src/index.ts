type EventObject = {
  timestamp: number,
  eventType: string,
}

type Score = {
  subregion: Array<EventObject>,
  score: number,
}

const eventStream = (events: Array<EventObject>, regionLength: number = 5): Array<Score> => {
  return [{
    subregion: [],
    score: 0
  }]
}

export { eventStream, EventObject };