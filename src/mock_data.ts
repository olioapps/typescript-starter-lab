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

const mistypedEventData: Array<EventObject> = [
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
    eventType: "stoplight",
  },
  {
    timestamp: 123123125,
    eventType: "newMessage",
  },
  {
    timestamp: 123123125,
    eventType: "view",
  },
];

export { eventData, mistypedEventData };
