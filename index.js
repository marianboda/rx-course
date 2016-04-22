'use strict'
var Rx = require("rx")

var a = Rx.Observable.repeat(42,9)

a.subscribe(console.log)
