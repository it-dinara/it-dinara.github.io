var arr = {
	ru: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
	en: ["mn", "ts", "wd", "th", "fr", "st", "sn"]
};
function variant() {
	var lang = prompt("Введите ru или en");
	switch (lang) {
		case "ru":
			alert("Русский текст");
			break;
		case "en":
			alert("Английский текст");
			break;
		case "de":
			alert("Немецкий текст");
			break;
		default:
			alert("Данный язык не поддерживается");
			break;
	}
}
variant();
