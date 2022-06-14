export interface Event {
  timestamp: Readonly<number>,
  eventType: Readonly<"newMessage" | "view" | "screenshot">
}

interface Region {
  regionStartId: Readonly<number>,
  score: Readonly<number>
}

// export class EventStream {

//   private _scoreTable = {
//     "newMessage": 1,
//     "view": 2,
//     "screenshot": 3
//   }

//   private _winningRegion: Region = { regionStartId: 0, score: 0 }

//   constructor(private _inputData: ReadonlyArray<Event>) {
//     this._inputData = [..._inputData]
//     this._setSortedWinners()
//   }

//   private _setSortedWinners() {
//     const numOfRegions = 1 + (this._inputData.length - 5)
//     if (numOfRegions > 1) {
//       const regionObjs: Array<Region> = this._inputData.map((ev, index) => {
//         const score = [...this._inputData.slice(index, index + 5)].reduce((runningScore, element) =>
//           runningScore + this._scoreTable[element.eventType], 0
//         )
//         return { regionStartId: index, score: score }
//       })
//       this._winningRegion = ([...regionObjs].sort((a, b) => {
//         return b.score - a.score
//       }))[0]
//     }
//   }

//   getHighestScoringRegion(): ReadonlyArray<Event> {
//     return [...this._inputData.slice(this._winningRegion.regionStartId, this._winningRegion.regionStartId + 5)]
//   }
// }


export function getWinningRegion(inputData: ReadonlyArray<Event>): ReadonlyArray<Event> {
  const scoreTable: Record<string, number> = {
    "newMessage": 1,
    "view": 2,
    "screenshot": 3
  }
  const numOfRegions = 1 + (inputData.length - 5)
  if (numOfRegions > 1) {
    const regionObjs: Array<Region> = inputData.map((ev, index) => {
      const score: number = [...inputData.slice(index, index + 5)].reduce((runningScore, currentEvent) =>
        runningScore + scoreTable[currentEvent.eventType], 0
      )
      return { regionStartId: index, score: score }
    })
    const winningRegion = ([...regionObjs].sort((a, b) => {
      return b.score - a.score
    }))[0]
    return [...inputData.slice(winningRegion.regionStartId, winningRegion.regionStartId + 5)]
  } else {
    return inputData
  }
}
// const largerSeedData: ReadonlyArray<Event> = [
//   {
//     timestamp: 123123123,
//     eventType: "newMessage"
//   },
//   {
//     timestamp: 123123124,
//     eventType: "newMessage"
//   },
//   {
//     timestamp: 123123125,
//     eventType: "newMessage"
//   },
//   {
//     timestamp: 123123125,
//     eventType: "view"
//   },
//   {
//     timestamp: 123123125,
//     eventType: "view"
//   },
//   {
//     timestamp: 123123125,
//     eventType: "screenshot"
//   },
//   {
//     timestamp: 123123125,
//     eventType: "screenshot"
//   },
//   {
//     timestamp: 123123125,
//     eventType: "newMessage"
//   },
//   {
//     timestamp: 123123125,
//     eventType: "newMessage"
//   },
//   {
//     timestamp: 123123126,
//     eventType: "view"
//   },
//   {
//     timestamp: 123123126,
//     eventType: "view"
//   },
//   {
//     timestamp: 123123125,
//     eventType: "newMessage"
//   },
//   {
//     timestamp: 123123126,
//     eventType: "view"
//   },
//   {
//     timestamp: 123123126,
//     eventType: "view"
//   },
//   {
//     timestamp: 123123126,
//     eventType: "screenshot"
//   },
//   {
//     timestamp: 123123127,
//     eventType: "screenshot"
//   },
//   {
//     timestamp: 123123128,
//     eventType: "screenshot"
//   },
//   {
//     timestamp: 123123129,
//     eventType: "screenshot"
//   }
// ]

// console.log(getWinningRegion(largerSeedData))
