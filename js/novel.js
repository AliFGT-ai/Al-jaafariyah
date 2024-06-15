const images = [
	"https://i.ibb.co/mFZGJ8H/0-DB2-FFCF-981-A-408-C-AF98-57057-A4-C1-EF3.jpg",
	"https://i.ibb.co/LrLdRy3/2-CF314-C5-4423-4253-BF62-589-BA91-E4650.jpg",
	"https://i.ibb.co/hZfsnJQ/8-F4-EF1-FB-78-AE-4467-82-BE-1020-A63-DE8-BA.jpg",
	"https://i.ibb.co/bW6qycq/924ede7c47ea33a4bb10b80b655fdef3.jpg",
	"https://i.ibb.co/7WGddy5/6105-BD3-A-3-A08-44-F2-9-EEB-9-A8-D4-CD92-E8-C.jpg",
	"https://i.ibb.co/30y5HT6/366181-ED-BA93-424-F-A721-EF8-D77-D0-F9-CE.jpg",
	"https://i.ibb.co/9v5DK6B/615183a509b7f4cc4d40f1b0cf245007.jpg",
	"https://i.ibb.co/7SZvXTH/6679143b8c8a3fc24026ea7b862d99e9.jpg",
	"https://i.ibb.co/QJRYFRL/625434023ef5196352ea4b9bd6dfbf73.jpg",
	"https://i.ibb.co/FqgJz4q/b87e386ba99af88581269cc0b426ab44.jpg",
	"https://i.ibb.co/Bq6H48X/IMG-5526.jpg",
	"https://i.ibb.co/DpmXYXJ/IMG-5265.jpg",
	"https://i.ibb.co/wMqyg8k/IMG-5059.jpg",
	"https://i.ibb.co/PCysKj0/IMG-5053.jpg",
	"https://i.ibb.co/CtkPcBc/IMG-4998.jpg",
	"https://i.ibb.co/h9r09CK/IMG-4997.jpg",
	"https://i.ibb.co/j3CbwBs/f2362063b13b2b4d810d7426128665c4.jpg",
	"https://i.ibb.co/BGxTgch/f87bb758425f9b5831518e6ea6667ca9.jpg",
	"https://i.ibb.co/b1VTZF2/c59db4a0385d129db07a4971c2fc019f.jpg",
	"https://i.ibb.co/7CKtK64/c2f18fdbb5cf60fb422b20b4f2dc2b45.jpg",
	"https://i.ibb.co/MN7dhwh/IMG-6848.jpg",
	"https://i.ibb.co/hWb2xFt/IMG-6852.jpg",
];

const books = [
	"Al-Kafi-Volume-1-Kulayni",
	"Al-Kafi-Volume-2-Kulayni",
	"Al-Kafi-Volume-3-Kulayni",
	"Al-Kafi-Volume-4-Kulayni",
	"Al-Kafi-Volume-5-Kulayni",
	"Al-Kafi-Volume-6-Kulayni",
	"Al-Kafi-Volume-7-Kulayni",
	"Al-Kafi-Volume-8-Kulayni",
];
const random = Math.floor(Math.random() * books.length);
const randomImage = Math.floor(Math.random() * images.length);
// console.log(books[random]);

document.body
	.querySelector(".novels")
	.querySelector(".container")
	.querySelector("img").src = images[randomImage];

fetch(`https://www.thaqalayn-api.net/api/${books[random]}/random`)
	.then((response) => {
		if (!response.ok) {
			message.channel.send("HTTP error, failed to load api.");
			throw new Error("HTTP error " + response.status);
		}
		return response.json();
	})
	.then((json) => {
		var matn = json[0]["arabicText"]
			.replace(/(َ)/g, "")
			.replace(/(ِ)/g, "")
			.replace(/(ُ)/g, "")
			.replace(/(ْ)/g, "");

		document.body
			.querySelector(".novels")
			.querySelector(".container")
			.querySelector(".novel")
			.querySelector(".matn")
			.append(matn);
	});

window.onload = () => {
	if (window.matchMedia("(max-width: 768px)").matches) {
		setTimeout(function () {
			document
				.querySelector(".novels")
				.querySelector("img").style.opacity = "100%";
			document
				.querySelector(".novels")
				.querySelector("img").style.transition =
				"var(--main-transition)";
			document
				.querySelector(".novels")
				.querySelector("img").style.borderBottomLeftRadius = "12%";
			document
				.querySelector(".novels")
				.querySelector(".overlay").style.borderBottomLeftRadius = "12%";
			document
				.querySelector(".novels")
				.querySelector("img").style.borderBottomRightRadius = "12%";
			document
				.querySelector(".novels")
				.querySelector(".overlay").style.borderBottomRightRadius =
				"12%";
		}, 100);
		setTimeout(function () {
			document
				.querySelector(".novels")
				.querySelector(".overlay").style.backgroundColor =
				"rgb(0 0 0 / 75%)";
			document.querySelector(".novel").style.css;
			document.querySelector(".novel").style.transition =
				"var(--main-transition)";
			document.querySelector(".novel").style.opacity = "100%";
			document.querySelector(".novel").style.top = "0";
		}, 1000);
	} else {
		setTimeout(function () {
			document
				.querySelector(".novels")
				.querySelector("img").style.opacity = "100%";
			document
				.querySelector(".novels")
				.querySelector("img").style.transition =
				"var(--main-transition)";
			document
				.querySelector(".novels")
				.querySelector("img").style.borderBottomLeftRadius = "5%";
			document
				.querySelector(".novels")
				.querySelector(".overlay").style.borderBottomLeftRadius = "5%";
			document
				.querySelector(".novels")
				.querySelector("img").style.borderBottomRightRadius = "5%";
			document
				.querySelector(".novels")
				.querySelector(".overlay").style.borderBottomRightRadius = "5%";
		}, 100);
		setTimeout(function () {
			document
				.querySelector(".novels")
				.querySelector(".overlay").style.backgroundColor =
				"rgb(0 0 0 / 75%)";
			document.querySelector(".novel").style.css;
			document.querySelector(".novel").style.transition =
				"var(--main-transition)";
			document.querySelector(".novel").style.opacity = "100%";
			document.querySelector(".novel").style.top = "0";
		}, 1000);
	}
};
