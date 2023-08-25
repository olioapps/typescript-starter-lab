type Event = {
  timestamp: number;
  eventType: EventType;
};

type Score = {
  events: EventStream;
  score: number;
};

type EventStream = Array<Event>;

type EventType = "newMessage" | "view" | "screenshot";

const scoreTable: Record<EventType, number> = {
  newMessage: 1,
  view: 2,
  screenshot: 3,
};

const addScore = (subregion: EventStream) => {
  let total = 0;
  subregion.forEach((event) => {
    total += scoreTable[event.eventType];
  });
  return total;
};

const scoreEventStream = (events: EventStream, regionLength: number = 5) => {
  const result: Score = {
    events: [],
    score: 0,
  };
  if (regionLength >= events.length) {
    result.events = events;
    result.score = addScore(events);
  } else {
    for (let i = 0; i < events.length - regionLength; i++) {
      const subregion = events.slice(i, i + regionLength);
      const score = addScore(subregion);
      if (score >= result.score) {
        result.events = subregion;
        result.score = score;
      }
    }
  }
  return result;
};

export { scoreEventStream, Event };
