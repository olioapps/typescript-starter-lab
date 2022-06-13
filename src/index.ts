//Define class/functions here
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

  // private _scoreTable = {
  //   ["newMessage"]: 1,
  //   ["view"]: 2,
  //   ["screenshot"]: 3
  // }

  private _sortedWinners: Array<Region> = []

  constructor(private _data: Array<EventInput>) {
    this._setSortedScores()
  }

  private _setSortedScores() {
    let regionObjs: Record<number, Region> = {}
    for (let x = 0; x < this._getNumberOfRegions(); x++) {
      let regionScore = 0
      let regionNumbers: Array<number> = []
      for (let y = x; y < x + 5; y++) {
        regionNumbers.push(y)
        if (this._data[y].eventType === "newMessage") {
          regionScore += 1
        } else if (this._data[y].eventType === "view") {
          regionScore += 2
        } else if (this._data[y].eventType === "screenshot") {
          regionScore += 3
        }
      }
      regionObjs[x] = { regionId: x, score: regionScore, inputLocations: regionNumbers }
    }
    this._sortedWinners = Object.values(regionObjs).sort(function (a, b) {
      return b.score - a.score
    })
  }

  private _getNumberOfRegions(): number {
    return 1 + (this._data.length - 5)
  }

  // private _calculateRegionScore(regionNumber: number): number {
  //   const startNum: number = regionNumber - 1
  //   let regionScore: number = 0
  //   for (let x: number = startNum; x < startNum + 5; x++) {
  //     let test = this._data[x].eventType
  //     regionScore += this._scoreTable["newMessage"]
  //   }

  //   return regionScore
  // }

  getSortedScores(): Array<{}> { //fix the any here
    return Object.values(this._sortedWinners).sort(function (a, b) {
      return b.score - a.score
    })
  }

  getHighestScoringRegion() {
    let highestScoringRegion = new Array
    const current = [...this._data]
    this._sortedWinners[0].inputLocations.forEach(function (eventInRegion: number) {
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
