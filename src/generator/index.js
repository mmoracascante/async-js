function* generator() {
	yield 1
	yield 2
	yield 3
}

const gen = generator()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

function* iterable(array) {
	for (let value of array) {
		yield value
	}
}

const it = iterable(['Marco', 'Omar', 'Juan', 'Pedro', 'Alfredo'])
console.log(it.next())