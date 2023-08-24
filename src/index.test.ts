import { eventStream } from './test_data';
import { scoreEventStream } from '.';

describe('scoreEventStream', () => {
  it('should return an object with an events property and a score property', () => {
    const actual = scoreEventStream(eventStream);

    expect(actual).toHaveProperty("events");
    expect(actual).toHaveProperty("score");
  })

  it('length of events array in return object should be no greater than 5', () => {
    const actual = scoreEventStream(eventStream);

    expect(actual.events.length).toBeLessThanOrEqual(5);
  })

  it('should return an object whos events property is the expected test region', () => {
    const actual = scoreEventStream(eventStream);

    expect(actual.events).toEqual(eventStream.slice(0,4));
  })

  it('should return an object with the cumulative score of the region as the score property', () => {
    const expected = 7;

    const actual = scoreEventStream(eventStream.slice(0,4));

    expect(actual).toEqual(expected);
  })
})
