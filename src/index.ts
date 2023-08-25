type Event = {
  timestamp: number;
  eventType: "newMessage" | "view" | "screenshot";
};

type Score = {
  events: EventStream;
  score: number;
};

type EventStream = Array<Event>;

const scoreEventStream = (
  events: EventStream,
  regionLength: number = 5
): Score => {
  return {
    events: [],
    score: 0,
  };
};

export { scoreEventStream, Event };
