import {
  firstMockEventStream,
  secondMockEventStream,
  thirdMockEventStream,
  fourthMockEventStream
} from './mockEventStream'
import { getHighestScoringRegion } from "./index"


describe('Tests will go here!', () => {
  it('should pass', () => {
    expect(true).toBeTruthy()
  })

  it('should fail return the correct array region', () => {
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

  it('should fail return the correct array region', () => {
    const highestScoringRegion = getHighestScoringRegion(secondMockEventStream)
    const expected = [
      { timestamp: 123123125, eventType: 'view' },
      { timestamp: 123123125, eventType: 'screenshot' },
      { timestamp: 123123125, eventType: 'screenshot' },
    ]
    expect(highestScoringRegion).toEqual(expected)
  })
  
  it('should fail return the correct array region', () => {
    const highestScoringRegion = getHighestScoringRegion(thirdMockEventStream)
    const expected = [
      { timestamp: 123123125, eventType: 'screenshot' },
      { timestamp: 123123125, eventType: 'screenshot' },
      { timestamp: 123123125, eventType: 'new message' },
      { timestamp: 123123125, eventType: 'new message' },
      { timestamp: 123123123, eventType: 'new message' },
    ]
    expect(highestScoringRegion).toEqual(expected)
  })
  
  it('should fail return the correct array region', () => {
    const highestScoringRegion = getHighestScoringRegion(fourthMockEventStream)
    const expected = [
      { timestamp: 123123125, eventType: 'view' },
      { timestamp: 123123124, eventType: 'screenshot' },
      { timestamp: 123123125, eventType: 'new message' },
      { timestamp: 123123125, eventType: 'view' },
      { timestamp: 123123125, eventType: 'screenshot' },
    ]
    expect(highestScoringRegion).toEqual(expected)
  })

})