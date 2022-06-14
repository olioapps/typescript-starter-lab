export interface EventInput {
  timestamp: Readonly<number>,
  eventType: Readonly<string>
}

export interface Region {
  regionId: Readonly<number>,
  score: Readonly<number>,
  inputLocations: ReadonlyArray<number>
}

export class EventStream {

  private _scoreTable: Record<Readonly<string>, Readonly<number>> = {
    ["newMessage"]: 1,
    ["view"]: 2,
    ["screenshot"]: 3
  }

  private _sortedWinners: ReadonlyArray<Region> = []

  constructor(private _data: ReadonlyArray<EventInput>) {
    this._setSortedWinners()
  }

  getUnsortedScores(): ReadonlyArray<EventInput> {
    return [...this._data]
  }

  private _setSortedWinners() {
    const numOfRegions: number = this._getNumberOfRegions()
    if (numOfRegions < 1) {
      throw "Not enough events to score. Please provide at least five"
    }
    let regionObjs: Record<Readonly<number>, Readonly<Region>> = {}
    for (let x = 0; x < numOfRegions; x++) {
      regionObjs[x] = this._calculateRegion(x)
    }
    this._sortedWinners = Object.values(regionObjs).sort(function (a, b) {
      return b.score - a.score
    })
  }

  private _getNumberOfRegions(): number {
    return 1 + (this._data.length - 5)
  }

  private _calculateRegion(regionNum: number): Region {
    let regionScore: number = 0
    let regionNumbers: Array<number> = []
    for (let y = regionNum; y < regionNum + 5; y++) {
      const eventType: string = this._data[y].eventType
      if (!this._scoreTable[eventType]) {
        throw `Invalid event type found (event: ${y}, timestamp: ${this._data[y].timestamp}, type: ${eventType})`
      }
      regionNumbers.push(y)
      regionScore += this._scoreTable[eventType]
    }
    return {
      regionId: regionNum,
      score: regionScore,
      inputLocations: [...regionNumbers]
    }
  }

  getSortedScores(): ReadonlyArray<Region> {
    return [...this._sortedWinners]
  }

  getHighestScoringRegion(): Array<EventInput> {
    let highestScoringRegion: Array<EventInput> = []
    this._sortedWinners[0].inputLocations.forEach((eventInRegion: number) => {
      highestScoringRegion.push([...this._data][eventInRegion])
    })
    return [...highestScoringRegion]
  }
}
