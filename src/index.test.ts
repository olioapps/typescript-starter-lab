//write tests here
import { EventStream, EventInput, Region } from './index'

describe('Class EventStream', () => {
  const seedData: ReadonlyArray<EventInput> = [
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
  const largerSeedData: ReadonlyArray<EventInput> = [
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

    it("should confirm events get added to eventStream object", () => {
      const eventStream = new EventStream([...seedData])
      const actual: ReadonlyArray<EventInput> = eventStream.getUnsortedScores()
      const expected: ReadonlyArray<EventInput> = seedData
      expect(expected).toEqual(actual)
    })

    it("should fail to create EventStream with wrong input data type", () => {
      // const eventStream = new EventStream({...seedData})
      const badEventStream: {} = () => new EventStream({ ...seedData })
      expect(badEventStream).toThrow("Input of object was found. Please provide a valid array.")
    })

    it("should fail with not enough obj provided", () => {
      const badSeedData: ReadonlyArray<EventInput> = [
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
          eventType: "newMessage"
        }
      ]
      const badEventStream: {} = () => new EventStream([...badSeedData])
      expect(badEventStream).toThrow("Not enough events to score. Please provide at least five")
    })

    it("should fail with if invalid event type provided", () => {
      const badSeedData: ReadonlyArray<EventInput> = [
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
          eventType: "porcupine"
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
      const badEventStream: {} = () => new EventStream([...badSeedData])
      expect(badEventStream).toThrow(`Invalid event type found (event: 4, timestamp: 123123125, type: porcupine)`)
    })
  })

  describe('getUnsortedScores()', () => {
    it("should confirm events get added to eventStream object", () => {
      const eventStream = new EventStream(seedData)
      const actual: ReadonlyArray<EventInput> = eventStream.getUnsortedScores()
      const expected: ReadonlyArray<EventInput> = seedData
      expect(expected).toEqual(actual)
    })
  })

  describe('getHighestScoringRegion()', () => {
    it("should return the highest scoring region from Seed Data", () => {
      const expected: ReadonlyArray<EventInput> = [
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
      const actual: ReadonlyArray<EventInput> = eventStream.getHighestScoringRegion()
      expect(expected).toEqual(actual)
    })

    it("should return the highest scoring region from larger set of Seed Data", () => {
      const expected: ReadonlyArray<EventInput> = [
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
      const actual: Array<EventInput> = eventStream.getHighestScoringRegion()
      expect(expected).toEqual(actual)
    })
  })

  describe('getSortedScores()', () => {
    it("should return seed data regions sorted by score", () => {
      const expected: ReadonlyArray<Region> = [
        { regionId: 2, score: 11, inputLocations: [2, 3, 4, 5, 6] },
        { regionId: 3, score: 11, inputLocations: [3, 4, 5, 6, 7] },
        { regionId: 4, score: 10, inputLocations: [4, 5, 6, 7, 8] },
        { regionId: 1, score: 9, inputLocations: [1, 2, 3, 4, 5] },
        { regionId: 0, score: 7, inputLocations: [0, 1, 2, 3, 4] }
      ]
      const eventStream = new EventStream(seedData)
      const actual: ReadonlyArray<Region> = eventStream.getSortedScores()
      expect(expected).toEqual(actual)
    })

    it("should return larger seed data regions sorted by score", () => {
      const expected: ReadonlyArray<Region> = [
        { regionId: 13, score: 14, inputLocations: [13, 14, 15, 16, 17] },
        { regionId: 12, score: 13, inputLocations: [12, 13, 14, 15, 16] },
        { regionId: 2, score: 11, inputLocations: [2, 3, 4, 5, 6] },
        { regionId: 3, score: 11, inputLocations: [3, 4, 5, 6, 7] },
        { regionId: 11, score: 11, inputLocations: [11, 12, 13, 14, 15] },
        { regionId: 4, score: 10, inputLocations: [4, 5, 6, 7, 8] },
        { regionId: 5, score: 10, inputLocations: [5, 6, 7, 8, 9] },
        { regionId: 10, score: 10, inputLocations: [10, 11, 12, 13, 14] },
        { regionId: 1, score: 9, inputLocations: [1, 2, 3, 4, 5] },
        { regionId: 6, score: 9, inputLocations: [6, 7, 8, 9, 10] },
        { regionId: 9, score: 9, inputLocations: [9, 10, 11, 12, 13] },
        { regionId: 8, score: 8, inputLocations: [8, 9, 10, 11, 12] },
        { regionId: 0, score: 7, inputLocations: [0, 1, 2, 3, 4] },
        { regionId: 7, score: 7, inputLocations: [7, 8, 9, 10, 11] }
      ]
      const eventStream = new EventStream(largerSeedData)
      const actual: ReadonlyArray<Region> = eventStream.getSortedScores()
      expect(expected).toEqual(actual)
    })
  })
})
