export interface IEvent {
  readonly timestamp: number,
  readonly eventType: eventTypeState,
  value?: number
}
export type eventTypeState = 'newMessage' | 'screenShot' | 'view'

export function eventStream(stream: Array<IEvent>): ReadonlyArray<IEvent> {
  if(stream.length <= 5 ) { return stream }

	const newStream: Array<IEvent> = stream.map( event => ({...event, value: assignPointValue(event.eventType)}))
  const index: number = findLastIndexOfRegionWithHighestSum(newStream)
	const region: ReadonlyArray<IEvent> = stream.splice((index-4), 5) 
	return region
}

export function assignPointValue(eventType: eventTypeState): Readonly<number> {
	switch (eventType) {
		case 'newMessage':
			return 1
		case 'view':
			return 2
		case 'screenShot':
			return 3
		default:
			throw new Error("Not a valid eventType")
	}
}

export function findLastIndexOfRegionWithHighestSum(stream: Array<IEvent>): number {
  if(stream.length <= 5 ) { return stream.length-1 }

  let index = 4
  let maxCumulativeSum = 0
  for(let i=4; i<stream.length; i++) {
    const currentSum = (
      stream[i].value! + 
      stream[i-1].value! + 
      stream[i-2].value! + 
      stream[i-3].value! + 
      stream[i-4].value!
    )
    if (currentSum > maxCumulativeSum) {
      maxCumulativeSum = currentSum
      index = i
    }
  }
  return index
}
