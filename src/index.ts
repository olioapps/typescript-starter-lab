interface IEvent {
  timestamp: number,
  eventType: eventTypeState,
}
type eventTypeState = 'newMessage' | 'screenShot' | 'view'

function eventStream(stream: Array<IEvent>): Array<IEvent> {
  if(stream.length <= 5 ) { return stream }

	const newStream =  [...stream]
	const newStreamValues: Array<number>= []
	newStream.forEach( e => newStreamValues.push(assignPointValue(e.eventType)));
	
	let index = 4
	let highestValue = 0
	for(let i=4; i<newStreamValues.length; i++) {
		let cumulativeValue = 0
		for (let j=0; j<=5; j++){
			cumulativeValue += newStreamValues[i-j]		
		}	

		if (cumulativeValue > highestValue) {
			highestValue = cumulativeValue
			index = i
		}
	}
	const region = newStream.splice((index-4), 5)
	return region
}

function assignPointValue(eventType: eventTypeState): number {
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

const seed: Array<IEvent> = [
  {
  timestamp: 123123123,
	eventType: 'newMessage'
	},
	{
		timestamp: 123123124,
		eventType: 'newMessage'
	},
	{
		timestamp: 123123125,
		eventType: 'newMessage'
	},
	{
		timestamp: 123123125,
		eventType: 'view'
	},
	{
		timestamp: 123123125,
		eventType: 'view'
	},
	{
		timestamp: 123123125,
		eventType: 'screenShot'
	},
	{
		timestamp: 123123125,
		eventType: 'screenShot'
	},
	{
		timestamp: 123123125,
		eventType: 'newMessage'
	},
	{
		timestamp: 123123125,
		eventType: 'screenShot'
	}
]

console.log('eventstream call:', eventStream(seed))
