import { eventStream, region1, region2, region3, region4, eventStreamWithScores } from './test_data';
import { scoreEventStream } from '.';

describe('scoreEventStream', () => {
  it('should return an object with an events property', () => {
    const actual = scoreEventStream(eventStream);

    expect(actual).toHaveProperty("events");
  })

  it('should return an object with a score property', () => {
    const actual = scoreEventStream(eventStream);

    expect(actual).toHaveProperty("score");
  })

  it('successfully assess the length of the inputted array', () => {
    const expected = 5;

    const actual = scoreEventStream(eventStream);

    expect(actual).toEqual(expected);
  })

  it('should return an object whos events property is the expected test region', () => {
    const expected = {
      events: region1,
      score: 0
    }

    const actual = scoreEventStream(region1);

    expect(actual).toEqual(expected);
  })

  it('should return an immutable copy of the eventStream where each event has a new score property', () => {
    const expected = eventStreamWithScores;

    const actual = scoreEventStream(eventStream);

    expect(actual).toEqual(expected);
  })

  it('should return an object with the cumulative score of the region as the score property', () => {
    const expected = 7;

    const actual = scoreEventStream(region1);

    expect(actual).toEqual(expected);
  })
})
