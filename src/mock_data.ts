import { EventObject } from ".";

const eventData: Array<EventObject> = [
  {
    timestamp: 123123123,
    eventType: "newMessage",
  },
  {
    timestamp: 123123124,
    eventType: "newMessage",
  },
  {
    timestamp: 123123125,
    eventType: "newMessage",
  },
  {
    timestamp: 123123125,
    eventType: "view",
  },
  {
    timestamp: 123123125,
    eventType: "view",
  },
  {
    timestamp: 123123125,
    eventType: "screenshot",
  },
  {
    timestamp: 123123125,
    eventType: "screenshot",
  },
  {
    timestamp: 123123125,
    eventType: "newMessage",
  },
  {
    timestamp: 123123125,
    eventType: "newMessage",
  },
];

const mistypedEvent: EventObject = {
  timestamp: 123456779,
  eventType: "trashcan",
};

export { eventData, mistypedEvent };
