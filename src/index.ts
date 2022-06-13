//Define class/functions here
interface EventInput {
  timestamp: number,
  eventType: string
}

// type MinimumArray<T> = {
//   0: T
//   1: T       - possibly use to force minimum length of 5
//   2: T
//   3: T
//   4: T
// } & Array<T>

class EventStream {

  private _scoreTable = {
    ["newMessage"]: 1,
    ["views"]: 2,
    ["screenshots"]: 3
  }

  private _sortedWinners = []

  constructor(private _data: Array<EventInput>) {
    this._setSortedScores()
  }

  private _setSortedScores() {

  }

  private _getNumberOfRegions(): number {
    return 1 + (this._data.length - 5)
  }

  private _calculateRegionScore(regionNumber: number): number {
    const startNum: number = regionNumber - 1
    let regionScore: number = 0
    for (let x: number = startNum; x < startNum + 5; x++) {
      let test = this._data[x].eventType
      regionScore += this._scoreTable["newMessage"]
    }

    return regionScore
  }


  getSortedScores(): Array<EventInput> {
    return this._sortedWinners //fix to return different value
  }

  getHighestScoringRegion(): EventInput {
    return {
      timestamp: 123123123,
      eventType: "newMessage"
    }
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

let eventCheck = new EventStream(seedData);
