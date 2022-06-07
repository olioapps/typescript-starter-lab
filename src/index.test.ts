import {
  firstMockEventStream,
  secondMockEventStream,
  thirdMockEvenStream,
  fourthMockEventStream
} from './mockEventStream'

describe('Tests will go here!', () => {
  it('should pass', () => {
    expect(true).toBeTruthy()
  })

  it('should fail', () => {
    console.log('firstMockEventStream', firstMockEventStream)
  })
})