'use strict'
var Rx = require("rx")
var fetch = require("node-fetch")

var requestStream = Rx.Observable.just('https://api.github.com/users')
var responseStream = requestStream.flatMap(url =>
  Rx.Observable.fromPromise(fetch(url))
)

var bodyStream = responseStream.flatMap(res => res.json())
bodyStream.subscribe(a => console.log(a.length))
