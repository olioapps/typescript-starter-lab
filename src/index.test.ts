import { testSeed1, testSeed2, testSeed2Expected, testSeed3, testSeed3Expected } from './mockTestData'
import { IEvent, eventStream, assignPointValue } from '../src/index'

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

