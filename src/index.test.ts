import {
  firstMockEventStream,
  secondMockEventStream,
  thirdMockEventStream,
  fourthMockEventStream,
  firstMockRegion,
  secondMockRegion,
} from './mockEventStream'
import { getHighestScoringRegion, findRegionScore, scoreEvent } from "./index"

describe('testing all functions for getting the highest scoring region of event stream', () => {

  it('should return the first highest scoring region array when there is a tie', () => {
    const firstHighestScoringRegion = getHighestScoringRegion(firstMockEventStream)
    const firstExpected = [
      { timestamp: 123123125, eventType: 'new message' },
      { timestamp: 123123125, eventType: 'view' },
      { timestamp: 123123125, eventType: 'view' },
      { timestamp: 123123125, eventType: 'screenshot' },
      { timestamp: 123123125, eventType: 'screenshot' },
    ]
    expect(firstHighestScoringRegion).toEqual(firstExpected)

    const secondHighestScoringRegion = getHighestScoringRegion(thirdMockEventStream)
    const secondExpected = [
      { timestamp: 123123125, eventType: 'screenshot' },
      { timestamp: 123123125, eventType: 'screenshot' },
      { timestamp: 123123125, eventType: 'new message' },
      { timestamp: 123123125, eventType: 'new message' },
      { timestamp: 123123123, eventType: 'new message' },
    ]
    expect(secondHighestScoringRegion).toEqual(secondExpected)
  })

  it('should return the correct array regions if there is less then 5 in event stream', () => {
    const highestScoringRegion = getHighestScoringRegion(secondMockEventStream)
    const expected = [
      { timestamp: 123123125, eventType: 'view' },
      { timestamp: 123123125, eventType: 'screenshot' },
      { timestamp: 123123125, eventType: 'screenshot' },
    ]
    expect(highestScoringRegion).toEqual(expected)
  })
  
  it('should return the correct array region', () => {
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

  it('should give the correct score for each region', () => {
    const firstRegionScore = findRegionScore(firstMockRegion)
    expect(firstRegionScore).toEqual(8)

    const secondRegionScore = findRegionScore(secondMockRegion)
    expect(secondRegionScore).toEqual(9)
  })

  it('should give the correct score for each region even if there is less then 5', () => {
    const thirdRegionScore = findRegionScore(
      [
        { timestamp: 123123125, eventType: 'new message' },
        { timestamp: 123123125, eventType: 'view' },
        { timestamp: 123123125, eventType: 'screenshot' },
      ])
    expect(thirdRegionScore).toEqual(6)
  })

  it('return the correct score value from each event', () => {
    expect(scoreEvent({ timestamp: 123123125, eventType: 'view' })).toEqual(2)

    expect(scoreEvent({ timestamp: 123123125, eventType: 'screenshot' })).toEqual(3)
    
    expect(scoreEvent({ timestamp: 123123125, eventType: 'new message' })).toEqual(1)
  })
})
