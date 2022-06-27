const sum = (a, b) => {
	return a + b
}

const calc = (a, b, cb) => {
	return cb(a, b)
}


console.log(calc(2, 2, sum))

setTimeout(() => {
	console.log(('Hola JS'))
}, 2000)

const greeting = (name) => {
	console.log(`Hola ${name}`)
}

setTimeout(greeting, 2000, 'Marco');