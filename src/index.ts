type Event = {
  timestamp: number;
  eventType: "newMessage" | "view" | "screenshot";
};

type Score = {
  events: Array<Event>;
  score: number;
};

const addScore = (subregion: Array<Event>) => {
  let total = 0;
  subregion.forEach((event) => {
    switch (event.eventType) {
      case "newMessage":
        total += 1;
        break;
      case "view":
        total += 2;
        break;
      case "screenshot":
        total += 3;
        break;
    }
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
