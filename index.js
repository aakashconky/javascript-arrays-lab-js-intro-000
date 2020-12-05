var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKiten() {
  kittens.pop()
}

function destructivelyRemoveFirstKiten() {
  kittens.shift()
}

function appendKitten(name){
  return [...kittens, name]
}

function prependKitten(name) {
  return [name,...kittens]
}

function removeFirstKitten() {
  return kittens.slice(1)
}

fucntion removeLastKitten() {
  return kittens.slice(0,kittens.length- 1)
}
