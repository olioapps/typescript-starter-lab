export interface Event {
  timestamp: Readonly<number>,
  eventType: Readonly<"newMessage" | "view" | "screenshot">
}

interface Region {
  regionStartId: Readonly<number>,
  score: Readonly<number>
}

export class EventStream {

  private _scoreTable = {
    "newMessage": 1,
    "view": 2,
    "screenshot": 3
  }

  private _winningRegion: Region = { regionStartId: 0, score: 0 }

  constructor(private _inputData: ReadonlyArray<Event>) {
    this._setSortedWinners()
  }

  private _setSortedWinners() {
    const numOfRegions = 1 + (this._inputData.length - 5)
    if (numOfRegions > 1) {
      let regionObjs: Array<Region> = []
      for (let x = 0; x < numOfRegions; x++) {
        let newRegion: Region = {
          regionStartId: x,
          score: 0
        }
        for (let y = x; y < x + 5; y++) {
          newRegion.score += this._scoreTable[this._inputData[y].eventType]
        }
        regionObjs.push(newRegion)
      }
      this._winningRegion = {
        ...(regionObjs.sort((a, b) => {
          return b.score - a.score
        }))[0]
      }
    }
  }

  getHighestScoringRegion(): Array<Event> {
    return [...this._inputData.slice(this._winningRegion.regionStartId, this._winningRegion.regionStartId + 5)]
  }
}
