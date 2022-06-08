import {
  firstMockEventStream,
  secondMockEventStream,
  thirdMockEventStream,
  fourthMockEventStream,
  firstMockRegion,
  secondMockRegion,
} from './mockEventStream'
import { getHighestScoringRegion, findRegionScore, scoreEvent } from "./index"


describe('Tests will go here!', () => {
  it('should pass', () => {
    expect(true).toBeTruthy()
  })

  it('should return the correct array region', () => {
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

  it('should return the correct array region', () => {
    const highestScoringRegion = getHighestScoringRegion(secondMockEventStream)
    const expected = [
      { timestamp: 123123125, eventType: 'view' },
      { timestamp: 123123125, eventType: 'screenshot' },
      { timestamp: 123123125, eventType: 'screenshot' },
    ]
    expect(highestScoringRegion).toEqual(expected)
  })
  
  it('should return the correct array region', () => {
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
    const regionScore = findRegionScore(firstMockRegion)
    expect(regionScore).toEqual(8)
  })

  it('should give the correct score for each region', () => {
    const regionScore = findRegionScore(secondMockRegion)
    expect(regionScore).toEqual(9)
  })
  it('should give the correct score for each region', () => {
    const regionScore = findRegionScore(
      [
        { timestamp: 123123125, eventType: 'new message' },
        { timestamp: 123123125, eventType: 'view' },
        { timestamp: 123123125, eventType: 'screenshot' },
      ])
    expect(regionScore).toEqual(6)
  })
  it('return the correct score value from each event', () => {
    expect(scoreEvent({ timestamp: 123123125, eventType: 'view' })).toEqual(2)

    expect(scoreEvent({ timestamp: 123123125, eventType: 'screenshot' })).toEqual(3)
    
    expect(scoreEvent({ timestamp: 123123125, eventType: 'new message' })).toEqual(1)
    
  })
})