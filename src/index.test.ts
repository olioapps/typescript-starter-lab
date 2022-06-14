import { getWinningRegion, Event } from './index'

describe('Index.ts', () => {
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
  describe('getWinningRegion()', () => {
    it("should return expected winning region from smaller seed data", () => {
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
      const actual: ReadonlyArray<Event> = getWinningRegion(seedData)
      expect(expected).toEqual(actual)
    })
    it("should return expected winning region from larger seed data", () => {
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
      const actual: ReadonlyArray<Event> = getWinningRegion(largerSeedData)
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
      const actual: ReadonlyArray<Event> = getWinningRegion([...expected])
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
      const actual: ReadonlyArray<Event> = getWinningRegion([...expected])
      expect(expected).toEqual(actual)
    })
  })
})
