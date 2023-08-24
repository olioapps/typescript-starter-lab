type Event = {
  timestamp: number;
  eventType: "newMessage" | "view" | "screenshot";
};

type Score = {
  events: Array<Event>;
  score: number;
};

const eventScore = (
  events: Array<Event>,
  regionLength: number = 5
): Score => {
  return {
    events: [],
    score: 0,
  };
};

export { eventScore, Event };
