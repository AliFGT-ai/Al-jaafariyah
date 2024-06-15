var imgDev = document.querySelector(".content").getElementsByClassName("img");
var toolsDev = document.querySelector("template");
// imgDev.innerHTML = imgDev.innerHTML + toolsDev.innerHTML;
Array.prototype.forEach.call(imgDev, function (el) {
	el.innerHTML = el.innerHTML + toolsDev.innerHTML;
	el.querySelector(".tools").querySelector("i").onclick = function () {
		window.open(el.querySelector("img").src, "_blank").focus();
	};

	async function downloadImage(imageSrc, nameOfDownload = "image.png") {
		const response = await fetch(imageSrc);
		const blobImage = await response.blob();
		const href = URL.createObjectURL(blobImage);
		const anchorElement = document.createElement("a");
		anchorElement.href = href;
		anchorElement.download = nameOfDownload;
		document.body.appendChild(anchorElement);
		anchorElement.click();
		document.body.removeChild(anchorElement);
		window.URL.revokeObjectURL(href);
	}

	el.querySelector(".tools").lastElementChild.onclick = function () {
		downloadImage(el.querySelector("img").src, "image.png")
			.then(() => {})
			.catch((err) => {
				console.log(err);
				alert("حدث خطأ اثناء تحميل الصورة");
			});
	};

	el.querySelector("img").onmouseover = function () {
		if (window.matchMedia("(max-width: 768px)").matches) {
			el.querySelector(".tools").style.visibility = "visible";
			el.querySelector(".tools").style.height = "60px";
		} else {
			el.querySelector(".tools").style.visibility = "visible";
			el.querySelector(".tools").style.height = "100px";
		}
	};

	el.querySelector(".tools").onmouseover = function () {
		if (window.matchMedia("(max-width: 768px)").matches) {
			el.querySelector(".tools").style.visibility = "visible";
			el.querySelector(".tools").style.height = "60px";
		} else {
			el.querySelector(".tools").style.visibility = "visible";
			el.querySelector(".tools").style.height = "100px";
		}
	};

	el.querySelector("img").onmouseout = function () {
		el.querySelector(".tools").style.visibility = "hidden";
		el.querySelector(".tools").style.height = "0";
	};

	el.querySelector(".tools").onmouseout = function () {
		el.querySelector(".tools").style.visibility = "hidden";
		el.querySelector(".tools").style.height = "0";
	};
});
