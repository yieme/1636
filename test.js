'use strict'

function assert(ok, msg) { // trivial assert library
  console.log(msg, (ok) ? 'OK' : 'ERROR')
  if (!ok) process.exit(1)
}

function rnd16() {
  return Math.floor(Math.random()*16).toString(16).toUpperCase()
}

var base = require('./');
var b16  = ''
for (var i=1; i < 65; i++) {
  b16 += rnd16()
//  assert(b16, 'base16: ' + b16)
  var b36  = base.to36(b16)
//  assert(b36, 'base36: ' + b36 + ' (' + b36.length + ')')
  var back = base.to16(b36).toUpperCase()
//  assert(back, 'base16: ' + back)
  assert((b16 == back), b16  + ' (' +  b16.length + ') <=> ' + b36 + ' (' + b36.length + ')')
}
