var isDinaraKnewPromise = false;

const willGetAnswer = new Promise((resolve, reject) => {
	if (isDinaraKnewPromise) {
		resolve('Yes, she knows!')
	} else {
		reject(new Error('She is learning'))
	}
})

const askDinara = function() {
	willGetAnswer.then((answer) => {
	console.log(answer)
}).catch((error) => {
	console.log(error.message)
})}

askDinara()
