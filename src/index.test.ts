//write tests here
import { EventStream, Event } from './index'

describe('Class EventStream', () => {
  const seedData: ReadonlyArray<Event> = [
    {
      timestamp: 123123123,
      eventType: "newMessage"
    },
    {
      timestamp: 123123124,
      eventType: "newMessage"
    },
    {
      timestamp: 123123125,
      eventType: "newMessage"
    },
    {
      timestamp: 123123125,
      eventType: "view"
    },
    {
      timestamp: 123123125,
      eventType: "view"
    },
    {
      timestamp: 123123125,
      eventType: "screenshot"
    },
    {
      timestamp: 123123125,
      eventType: "screenshot"
    },
    {
      timestamp: 123123125,
      eventType: "newMessage"
    },
    {
      timestamp: 123123125,
      eventType: "newMessage"
    }
  ]
  const largerSeedData: ReadonlyArray<Event> = [
    {
      timestamp: 123123123,
      eventType: "newMessage"
    },
    {
      timestamp: 123123124,
      eventType: "newMessage"
    },
    {
      timestamp: 123123125,
      eventType: "newMessage"
    },
    {
      timestamp: 123123125,
      eventType: "view"
    },
    {
      timestamp: 123123125,
      eventType: "view"
    },
    {
      timestamp: 123123125,
      eventType: "screenshot"
    },
    {
      timestamp: 123123125,
      eventType: "screenshot"
    },
    {
      timestamp: 123123125,
      eventType: "newMessage"
    },
    {
      timestamp: 123123125,
      eventType: "newMessage"
    },
    {
      timestamp: 123123126,
      eventType: "view"
    },
    {
      timestamp: 123123126,
      eventType: "view"
    },
    {
      timestamp: 123123125,
      eventType: "newMessage"
    },
    {
      timestamp: 123123126,
      eventType: "view"
    },
    {
      timestamp: 123123126,
      eventType: "view"
    },
    {
      timestamp: 123123126,
      eventType: "screenshot"
    },
    {
      timestamp: 123123127,
      eventType: "screenshot"
    },
    {
      timestamp: 123123128,
      eventType: "screenshot"
    },
    {
      timestamp: 123123129,
      eventType: "screenshot"
    }
  ]
  describe('Class Instantiation of EventStream', () => {

    it("should confirm eventStream is a EventStream object", () => {
      const eventStream = new EventStream([...seedData])
      expect(eventStream).toBeInstanceOf(EventStream)
    })
  })

  describe('getHighestScoringRegion()', () => {
    it("should return the highest scoring region from Seed Data", () => {
      const expected: ReadonlyArray<Event> = [
        {
          timestamp: 123123125,
          eventType: "newMessage"
        },
        {
          timestamp: 123123125,
          eventType: "view"
        },
        {
          timestamp: 123123125,
          eventType: "view"
        },
        {
          timestamp: 123123125,
          eventType: "screenshot"
        },
        {
          timestamp: 123123125,
          eventType: "screenshot"
        }
      ]
      const eventStream = new EventStream(seedData)
      const actual: ReadonlyArray<Event> = eventStream.getHighestScoringRegion()
      expect(expected).toEqual(actual)
    })

    it("should return the highest scoring region from larger set of Seed Data", () => {
      const expected: ReadonlyArray<Event> = [
        {
          timestamp: 123123126,
          eventType: "view"
        },
        {
          timestamp: 123123126,
          eventType: "screenshot"
        },
        {
          timestamp: 123123127,
          eventType: "screenshot"
        },
        {
          timestamp: 123123128,
          eventType: "screenshot"
        },
        {
          timestamp: 123123129,
          eventType: "screenshot"
        }
      ]
      const eventStream = new EventStream(largerSeedData)
      const actual: Array<Event> = eventStream.getHighestScoringRegion()
      expect(expected).toEqual(actual)
    })

    it("should return seed data when count < 5", () => {
      const expected: ReadonlyArray<Event> = [
        {
          timestamp: 123123126,
          eventType: "view"
        },
        {
          timestamp: 123123126,
          eventType: "screenshot"
        },
        {
          timestamp: 123123127,
          eventType: "screenshot"
        }
      ]
      const eventStream = new EventStream(expected)
      const actual: Array<Event> = eventStream.getHighestScoringRegion()
      expect(expected).toEqual(actual)
    })
    it("should return seed data when count == 5", () => {
      const expected: ReadonlyArray<Event> = [
        {
          timestamp: 123123126,
          eventType: "view"
        },
        {
          timestamp: 123123126,
          eventType: "screenshot"
        },
        {
          timestamp: 123123126,
          eventType: "view"
        },
        {
          timestamp: 123123126,
          eventType: "screenshot"
        },
        {
          timestamp: 123123127,
          eventType: "screenshot"
        }
      ]
      const eventStream = new EventStream(expected)
      const actual: Array<Event> = eventStream.getHighestScoringRegion()
      expect(expected).toEqual(actual)
    })
  })
})
