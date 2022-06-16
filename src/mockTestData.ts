import { IEvent } from '../src/index'

export const testSeed1: Array<IEvent> = [
  {
    timestamp: 123123123,
    eventType: 'newMessage',
  },
  {
    timestamp: 123123124,
    eventType: 'newMessage',
  },
  {
    timestamp: 123123125,
    eventType: 'newMessage',
  },
  {
    timestamp: 123123125,
    eventType: 'view',
  },
]

export const testSeed2: Array<IEvent> = [
  {
    timestamp: 123123123,
    eventType: 'newMessage',
  },
  {
    timestamp: 123123124,
    eventType: 'newMessage',
  },
  {
    timestamp: 123123125,
    eventType: 'newMessage',
  },
  {
    timestamp: 123123125,
    eventType: 'view',
  },
  {
    timestamp: 123123125,
    eventType: 'view',
  },
  {
    timestamp: 123123125,
    eventType: 'screenShot',
  },
  {
    timestamp: 123123125,
    eventType: 'screenShot',
  },
  {
    timestamp: 123123125,
    eventType: 'newMessage',
  },
  {
    timestamp: 123123125,
    eventType: 'screenShot',
  },
]

export const testSeed2Expected: Array<IEvent> = [
  {
    timestamp: 123123125,
    eventType: 'view',
  },
  {
    timestamp: 123123125,
    eventType: 'screenShot',
  },
  {
    timestamp: 123123125,
    eventType: 'screenShot',
  },
  {
    timestamp: 123123125,
    eventType: 'newMessage',
  },
  {
    timestamp: 123123125,
    eventType: 'screenShot',
  },
]

export const testSeed3: Array<IEvent> = [
  {
    timestamp: 123123123,
    eventType: 'newMessage',
  },
  {
    timestamp: 123123124,
    eventType: 'newMessage',
  },
  {
    timestamp: 123123125,
    eventType: 'newMessage',
  },
  {
    timestamp: 123123125,
    eventType: 'view',
  },
  {
    timestamp: 123123125,
    eventType: 'view',
  },
  {
    timestamp: 4587456,
    eventType: 'newMessage',
  },
  {
    timestamp: 46464,
    eventType: 'newMessage',
  },
  {
    timestamp: 46463125,
    eventType: 'newMessage',
  },
  {
    timestamp: 464625,
    eventType: 'view',
  },
  {
    timestamp: 464625,
    eventType: 'view',
  },
]

export const testSeed3Expected: Array<IEvent> = [
  {
    timestamp: 123123123,
    eventType: 'newMessage',
  },
  {
    timestamp: 123123124,
    eventType: 'newMessage',
  },
  {
    timestamp: 123123125,
    eventType: 'newMessage',
  },
  {
    timestamp: 123123125,
    eventType: 'view',
  },
  {
    timestamp: 123123125,
    eventType: 'view',
  },
]

// export const testSeed4: Array<IEvent> = [
//   {
//     timestamp: 123123123,
//     eventType: 'newMessage',
//     value: 1,
//   },
//   {
//     timestamp: 123123124,
//     eventType: 'newMessage',
//     value: 1,
//   },
//   {
//     timestamp: 123123125,
//     eventType: 'newMessage',
//     value: 1,
//   },
//   {
//     timestamp: 123123125,
//     eventType: 'view',
//     value: 2,
//   },
//   {
//     timestamp: 123123125,
//     eventType: 'view',
//     value: 2,
//   },
//   {
//     timestamp: 4587456,
//     eventType: 'newMessage',
//     value: 1,
//   },
//   {
//     timestamp: 46464,
//     eventType: 'newMessage',
//     value: 1,
//   },
//   {
//     timestamp: 46463125,
//     eventType: 'newMessage',
//     value: 1,
//   },
//   {
//     timestamp: 464625,
//     eventType: 'view',
//     value: 2,
//   },
//   {
//     timestamp: 464625,
//     eventType: 'view',
//     value: 2,
//   },
// ]
