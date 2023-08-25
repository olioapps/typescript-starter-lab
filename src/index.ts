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
      default:
        break;
    }
  });
  return total;
};

const scoreEventStream = (events: Array<Event>, regionLength: number = 5): Score => {
  if (events.length < regionLength) {
    throw new Error("Region is larger than the list of events");
  } else {
    const results: Record<number, Score> = {};
    for (let i = 0; i < events.length - regionLength; i++) {
      const subregion = events.slice(i, i + regionLength);
      const score = addScore(subregion);
      results[score] = {
        events: subregion,
        score: score,
      };
    }
    const scoreKey = Object.keys(results).map((score) => parseInt(score));
    const max = Math.max(...scoreKey);
    return results[max];
  }
};

export { scoreEventStream, Event };
