export interface IEvent {
  readonly timestamp: number,
  readonly eventType: eventTypeState,
}
export type eventTypeState = 'newMessage' | 'screenShot' | 'view'

export function eventStream(stream: ReadonlyArray<IEvent>): ReadonlyArray<IEvent> {
  if(stream.length <= 5 ) { return stream }

	const newStream: Array<IEvent> =  [...stream]
	const newStreamValues: Array<number>= []
	stream.forEach( e => newStreamValues.push(assignPointValue(e.eventType)));
	
	let index = 4 //Start with the 5th event in the stream becuase the for loop looks backward and ends at the end of the array
	let highestValue = 0
	for(let i=4; i<newStreamValues.length; i++) {  // Same here, Want to start at the 5th event in the array
		let cumulativeValue = 0
		for (let j=0; j<=4; j++){  // Looks at the index 'i' itself and 4 places backward to find cumlative point total
			cumulativeValue += newStreamValues[i-j]		
		}	
		if (cumulativeValue > highestValue) {
			highestValue = cumulativeValue
			index = i
		}
	}
	const region: ReadonlyArray<IEvent> = newStream.splice((index-4), 5) 
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
