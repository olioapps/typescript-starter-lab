type Event = {
  timestamp: number;
  eventType: "newMessage" | "view" | "screenshot";
};

type Score = {
  events: Array<Event>;
  score: number;
};

const getScore = (eventType: string) => {
  return eventType == "newMessage" ? 1 : eventType == "view" ? 2 : 3;
};

const addScore = (subregion: Array<Event>) => {
  let total = 0;
  subregion.forEach((event) => {
    total += getScore(event.eventType);
  });
  return total;
};

const scoreEventStream = (events: Array<Event>, regionLength: number = 5) => {
  if (regionLength >= events.length) {
    return {
      events: events,
      score: addScore(events),
    };
  } else {
    const result: Score = {
      events: [],
      score: 0,
    };
    for (let i = 0; i < events.length - regionLength; i++) {
      const subregion = events.slice(i, i + regionLength);
      const score = addScore(subregion);
      if (score >= result.score) {
        result.events = subregion;
        result.score = score;
      }
    }
    return result;
  }
};

export { scoreEventStream, Event };
