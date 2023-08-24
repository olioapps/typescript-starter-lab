type EventObject = {
  timestamp: number;
  eventType: string;
};

type Score = {
  subregion: Array<EventObject>;
  score: number;
};

const addScore = (subregion: Array<EventObject>) => {
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
        throw new Error("Unrecognized event type");
    }
  });
  return total;
};

const eventScore = (
  events: Array<EventObject>,
  regionLength: number = 5
): Score => {
  if (events.length < regionLength) {
    throw new Error("Region is larger than the list of events");
  } else {
    const results: Record<number, Score> = {};
    for (let i = 0; i < events.length - regionLength; i++) {
      const subregion = events.slice(i, i + regionLength);
      const score = addScore(subregion);
      results[score] = {
        subregion: subregion,
        score: score,
      };
    }
    const scoreKey = Object.keys(results).map((score) => parseInt(score));
    const max = Math.max(...scoreKey);
    return results[max];
  }
};

export { eventScore, EventObject };
