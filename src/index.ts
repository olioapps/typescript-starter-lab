type Event = {
  timestamp: number;
  eventType: "newMessage" | "view" | "screenshot";
};

type Score = {
  events: Array<Event>;
  score: number;
};

// rename to scoreEventStream

const scoreEventStream = (
  events: Array<Event>,
  regionLength: number = 5
): Score => {
  return {
    events: [],
    score: 0,
  };
};

export { scoreEventStream, Event };
