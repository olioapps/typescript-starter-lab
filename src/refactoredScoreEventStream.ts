import { Event } from "./models"

interface ScoreMeta {
  highScore: number;
  trailingScore: number;
  highScoreIdx: number;
  cachedScores: number[];
}

export const scoreEvent = (event: Event) => {
  switch (event.eventType) {
    case 'screenshot':
      return 3;
    case 'view':
      return 2;
    case 'new message':
      return 1;
    default:
      return 0
  }
}

export const scoreEventStream = (eventStream: Event[], subArrayLength = 5): Event[] => {
  if (eventStream.length <= subArrayLength ) {
    return eventStream;
  }

  const subArrayOffset = subArrayLength - 1;
  const initialScoreMeta: ScoreMeta = {
    highScore: 0,
    trailingScore: 0,
    highScoreIdx: subArrayOffset,
    cachedScores: []
  }

  const scoreMeta: ScoreMeta = eventStream.reduce((acc, event, i) => {
    //score the initial subArray of events, caching saved values as we go
    const score = scoreEvent(event);
    if (i < subArrayLength) {
      return {
        ...acc,
        highScore: acc.highScore += score,
        trailingScore: acc.trailingScore += score,
        cachedScores: [...acc.cachedScores, score]
      }
    }

    /* 
      as we continue iterating over the eventSteam, we shift cachedScores, 
      and push the current score into it (via desctructure and spread operations).

      each iteration, we check the trailingScore against the highScore

      if newTrailingScore > highScore, then update the high score and highScoreIdx
      
    */   
    const [droppedScore, ...newCache] = [...acc.cachedScores, score];
    const newTrailingScore = acc.trailingScore - droppedScore + score;

    return {
      ...acc,
      cachedScores: newCache,
      trailingScore: newTrailingScore,
      ...(newTrailingScore > acc.highScore && { highScore: newTrailingScore, highScoreIdx: i}),
    }
  }, initialScoreMeta);

  const startIdx = scoreMeta.highScoreIdx - subArrayOffset;

  return eventStream.slice(startIdx, scoreMeta.highScoreIdx + 1)
}   
   