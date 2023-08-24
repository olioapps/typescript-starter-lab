type EventObject = {
  timestamp: number,
  eventType: string,
}

type Score = {
  subregion: Array<EventObject>,
  score: number,
}

const eventScore = (events: Array<EventObject>, regionLength: number = 5): Score => {
  return {
    subregion: [],
    score: 0
  }
}

export { eventScore, EventObject };