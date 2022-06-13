interface EventInput {
  timestamp: number,
  eventType: string
}

interface Region {
  regionId: number,
  score: number,
  inputLocations: Array<number>
}

class EventStream {

  private _scoreTable: Record<string, number> = {
    ["newMessage"]: 1,
    ["view"]: 2,
    ["screenshot"]: 3
  }

  private _sortedWinners: Array<Region> = []

  constructor(private _data: Array<EventInput>) {
    this._setSortedWinners()
  }

  private _setSortedWinners() {
    let regionObjs: Record<number, Region> = {}
    for (let x = 0; x < this._getNumberOfRegions(); x++) {
      regionObjs[x] = this._calculateRegionScore(x)
    }
    this._sortedWinners = Object.values(regionObjs).sort(function (a, b) {
      return b.score - a.score
    })
  }

  private _getNumberOfRegions(): number {
    return 1 + (this._data.length - 5)
  }

  private _calculateRegionScore(regionNum: number): Region {
    let regionScore = 0
    let regionNumbers: Array<number> = []
    for (let y = regionNum; y < regionNum + 5; y++) {
      regionNumbers.push(y)
      regionScore += this._scoreTable[this._data[y].eventType]
    }
    return {
      regionId: regionNum,
      score: regionScore,
      inputLocations: regionNumbers
    }
  }

  getSortedScores(): Array<Region> {
    return Object.values(this._sortedWinners).sort(function (a, b) {
      return b.score - a.score
    })
  }

  getHighestScoringRegion(): Array<EventInput> {
    let highestScoringRegion = new Array
    const current = [...this._data]
    this._sortedWinners[0].inputLocations.forEach((eventInRegion: number) => {
      highestScoringRegion.push(current[eventInRegion])
    })
    return highestScoringRegion
  }
}



const seedData: Array<EventInput> = [
  {
    timestamp: 123123123,
    eventType: "newMessage"
  },
  {
    timestamp: 123123124,
    eventType: "newMessage"
  },
  {
    timestamp: 123123125,
    eventType: "newMessage"
  },
  {
    timestamp: 123123125,
    eventType: "view"
  },
  {
    timestamp: 123123125,
    eventType: "view"
  },
  {
    timestamp: 123123125,
    eventType: "screenshot"
  },
  {
    timestamp: 123123125,
    eventType: "screenshot"
  },
  {
    timestamp: 123123125,
    eventType: "newMessage"
  },
  {
    timestamp: 123123125,
    eventType: "newMessage"
  }
]

const eventCheck = new EventStream(seedData);
console.log(eventCheck.getSortedScores())

console.log("getHighestScoringRegion", eventCheck.getHighestScoringRegion())
