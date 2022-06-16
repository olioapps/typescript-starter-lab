export interface IEvent {
  readonly timestamp: number
  readonly eventType: EventType
}
export type EventType = 'newMessage' | 'screenShot' | 'view'

export function eventStream(
  stream: IEvent[],
  regionLength: number = 5
): ReadonlyArray<IEvent> {
  if (stream.length <= regionLength) return stream

  const regionValues: number[] = [...stream].map((next, index, stream) =>
    assignRegionScore(stream, index, regionLength)
  )
  const index = regionValues.indexOf(Math.max(...regionValues))
  const region = [...stream].splice(index, regionLength)
  return region
}

export function assignPointValue(eventType: EventType): Readonly<number> {
  switch (eventType) {
    case 'newMessage':
      return 1
    case 'view':
      return 2
    case 'screenShot':
      return 3
    default:
      throw new Error('Not a valid eventType')
  }
}

export function assignRegionScore(stream: IEvent[], index: number, regionLength: number): number {
  const region = [...stream].splice(index, regionLength)
  const regionScore = region.reduce((acc, event) => (acc + assignPointValue(event.eventType)), 0)
  return regionScore
}
