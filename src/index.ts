export interface Event {
  readonly timestamp: number,
  eventType: Readonly<"newMessage" | "view" | "screenshot">
}

interface Region {
  regionStartId: Readonly<number>,
  score: Readonly<number>
}

const scoreEvent = (ev: Event): number => {
  const scoreTable = {
    "newMessage": 1,
    "view": 2,
    "screenshot": 3
  }
  return scoreTable[ev.eventType]
}

export const getWinningRegion = (inputData: ReadonlyArray<Event>): ReadonlyArray<Event> => {
  const numOfRegions = 1 + (inputData.length - 5)
  if (numOfRegions > 1) {
    const regionObjs: Array<Region> = inputData.map((ev, index) => {
      const score: number = [...inputData.slice(index, index + 5)].reduce((runningScore, currentEvent) =>
        runningScore + scoreEvent(currentEvent), 0
      )
      return { regionStartId: index, score: score }
    })
    const winningRegion = ([...regionObjs].sort((a, b) => {
      return b.score - a.score
    }))[0]
    return [...inputData.slice(winningRegion.regionStartId, winningRegion.regionStartId + 5)]
  } else {
    return [...inputData]
  }
}
