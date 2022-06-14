import { testSeed1, testSeed2, testSeed2Expected, testSeed3, testSeed3Expected, testSeed4 } from './mockTestData'
import { IEvent, eventStream, assignPointValue, findLastIndexOfRegionWithHighestSum } from '../src/index'

describe('event puzzler solution', () => {

  describe('eventStream()', () => {
    
    it('return the given stream if there are 5 events or less', () => {
      const actual: ReadonlyArray<IEvent> = eventStream(testSeed1)
      expect(actual).toEqual(testSeed1)
    })

    it('returns the region with with the highest cumulative point value from the input', () => {
      const actual: ReadonlyArray<IEvent> = eventStream(testSeed2)
      const expected: ReadonlyArray<IEvent> = testSeed2Expected
      expect(actual).toEqual(expected)
    })
    
    it('should return first region in stream when cumlative point value ties another region', () => {
      const actual: ReadonlyArray<IEvent> = eventStream(testSeed3)
      const expected: ReadonlyArray<IEvent> = testSeed3Expected
      expect(actual).toEqual(expected)
    })
  })

  describe('assignpointValue()', () => {
    
    it('return 1 if passed "newMessage"', () => {
      const actual: number = assignPointValue('newMessage')
      expect(actual).toEqual(1)
    })

    it('return 2 if passed "view"', () => {
      const actual: number = assignPointValue('view')
      expect(actual).toEqual(2)
    })

    it('return 3 if passed "screenShot"', () => {
      const actual: number = assignPointValue('screenShot')
      expect(actual).toEqual(3)
    })
  })

  describe('findLastIndexOfRegionWithHighestSum()', () => {

    it('should return last index of array if array.length is 5 or less', () => {
      const actual: number = findLastIndexOfRegionWithHighestSum(testSeed1)
      const expected = testSeed1.length-1
      expect(actual).toEqual(expected)
    })

    it('should return the index corresponding to the last element in a subarray where the subarray length is 5 and has the max cumulative sum of elements values', () => {
      const actual: number = findLastIndexOfRegionWithHighestSum(testSeed4)
      expect(actual).toEqual(4)
    })
  })
})
