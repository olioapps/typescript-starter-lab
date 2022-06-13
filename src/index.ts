interface IEvent {
  timestamp: number,
  eventType: eventTypeState,
	value?: number
}

type eventTypeState = 'newMessage' | 'screenShot' | 'view'

function eventStream(stream: Array<IEvent>) {
  if(stream.length <= 5 ) { return stream }

	const newStream =  [...stream ]
	newStream.forEach( e => e.value = assignPointValue(e.eventType));

	return newStream
}

function assignPointValue(eventType: eventTypeState) {
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
	}
]

console.log('eventstream call:', eventStream(seed))
