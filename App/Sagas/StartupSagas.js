// process STARTUP actions
export function * startup () {
  if (__DEV__ && console.tron) {
    // straight-up string logging
    console.tron.log('Hello, log via Reactotron.')
  }
}
