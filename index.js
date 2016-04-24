'use strict'
var Rx = require("rx")

// var requestStream = Rx.Observable.just('https://api.github.com/users')
// var responseStream = requestStream.flatMap(url =>
//   Rx.Observable.fromPromise(fetch(url))
// )
// var bodyStream = responseStream.flatMap(res => res.json())
// bodyStream.subscribe(a => console.log(a.length))

var btn = document.querySelector('#btn')
var btnClickStream = Rx.Observable.fromEvent(btn, 'click')
var clickCountStream = btnClickStream.scan((a,b) => a+1, 0)

clickCountStream.subscribe(
  x => console.log('Next: ' + x),
  err => console.log('Error: ' + err),
  () => console.log('Completed')
)
