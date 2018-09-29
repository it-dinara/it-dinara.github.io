var app = new Vue ({
	el: '#app',
	data: {
		qweqweqwe: "Hello",
		seen: true
	}
});

app.seen = false;

console.log(Object.keys(app));