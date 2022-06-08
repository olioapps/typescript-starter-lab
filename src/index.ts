//Define class/functions here
export interface Event {
  timestamp: number
  eventType: string
}

export const getHighestScoringRegion = (eventStream: Array<Event>):Array<Event> => {
  return [
  {
		timestamp: 123123123,
		eventType: "testing",
	},
	{
		timestamp: 123123124,
		eventType: "testing",
  },
  ]
}