import { event, eventWithScore, scored_region } from './models'

function addScoresToEvents(eventStream: ReadonlyArray<event>) {
  const eventsWithScores = eventStream.map(event => {
    if (event.eventType === "newMessage") {
      return {
        ...event,
        score: 1
      }
    } else if (event.eventType === "view") {
      return {
        ...event,
        score: 2
      }
    } else {
      return {
        ...event,
        score: 3
      }
    }
  })
  return eventsWithScores;
}

function findHighestSCore(scores: ReadonlyArray<number>) {
  let highest_score = 0;
  for (let i = 1; i <= scores.length; i++) {
    if (scores[i] > scores[i - 1]) {
      highest_score = scores[i]
    } else {

    }
  }
  return highest_score;
}

function separateSubRegions(eventStreamWithScores: ReadonlyArray<eventWithScore>, subRegionLength: number) {
  const container: scored_region[] = [];
  for (let i = 0; i <= eventStreamWithScores.length - subRegionLength; i++) {
    const events_arr = eventStreamWithScores.slice(i, i + subRegionLength);
    const event = {
      events: events_arr,
      score: Object.values(events_arr).map(e => { return e.score }).reduce((a, b) => { return a + b })
    }
    container.push(event);
  }
  return container;
}

function createScoresArray(eventStreamWithScores: ReadonlyArray<scored_region> | ReadonlyArray<eventWithScore>) {
  return eventStreamWithScores.map(e => { return e.score })
}

export function scoreEventStream(eventStream: ReadonlyArray<event>, subRegionLength: number = 5) {

  if (eventStream.length <= subRegionLength) {
    const eventsWithScores = addScoresToEvents(eventStream);
    console.log(eventsWithScores);
    const score = Object.values(eventsWithScores).map(e => { return e.score }).reduce((a, b) => { return a + b })
    return {
      events: eventStream,
      score: score
    }
  } else {

    //map through array and add scores
    const eventsWithScores = addScoresToEvents(eventStream);
    console.log(eventsWithScores)


    //loop through array with scores and separate out subregions, save those into an object
    const container = separateSubRegions(eventsWithScores, subRegionLength);
    //create array of scores, and loop through to find the highest score
    const scores = createScoresArray(container);
    const highest_score = findHighestSCore(scores);

    const subRegionWithHighestScore = container.filter(e => e.score === highest_score)[0];

    return subRegionWithHighestScore;
  }
}

