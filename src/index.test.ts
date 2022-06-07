import {
  firstMockEventStream,
  secondMockEventStream,
  thirdMockEvenStream,
  fourthMockEventStream
} from './mockEventStream'
import { getHighestScoringRegion } from "./index"

describe('Tests will go here!', () => {
  it('should pass', () => {
    expect(true).toBeTruthy()
  })

  it('should fail', () => {
    const highestScoringRegion = getHighestScoringRegion(firstMockEventStream)
    const expected = [
      { timestamp: 123123125, eventType: 'new message' },
      { timestamp: 123123125, eventType: 'view' },
      { timestamp: 123123125, eventType: 'view' },
      { timestamp: 123123125, eventType: 'screenshot' },
      { timestamp: 123123125, eventType: 'screenshot' },
    ]
    expect(highestScoringRegion).toEqual(expected)
  })
})