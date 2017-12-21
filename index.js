const app = "I don't do much."

var kittens = ['Milo', 'Garfield', 'Otis']

function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
  return kittens
}

var kittens = ['Milo', 'Garfield', 'Otis']

function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
  return kittens
}

var kittens = ['Milo', 'Garfield', 'Otis']

function destructivelyRemoveLastKitten() {
  kittens.pop(2)
  return kittens
}

var kittens = ['Milo', 'Garfield', 'Otis']

function destructivelyRemoveFirstKitten() {
  kittens.shift(0)
  return kittens
}
var kittens = ['Milo', 'Garfield', 'Otis']

function appendKitten(name) {
  return(...kittens, 'Ralph')
}

var kittens = ['Milo', 'Garfield', 'Otis']

function prependKitten(name) {
  return('Ralph', ...kittens)
}
