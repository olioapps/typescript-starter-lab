type EventObject = {
  timestamp: number,
  eventType: string,
}

type Score = {
  subregion: Array<EventObject>,
  score: number,
}

const eventStream = (events: Array<EventObject) => {

}

export { eventStream, EventObject };