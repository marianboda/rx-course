'use strict'
const koa = require('koa')
const app = koa()
const fs = require('fs')
const Rx = require('rx')

const readdir = Rx.Observable.fromNodeCallback(fs.readdir)

const files = Rx.Observable.just('file1', 'file2')
const filesStream = readdir('.').flatMap(x => x)

filesStream.subscribe((a) => console.log(a))

// app.use(function *(){
//   this.body = ':)'
// })
//
// app.listen(3001)
