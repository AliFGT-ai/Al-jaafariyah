// $(function () {
// 	$(document.body).load("./assets/header.html");
// });

const footer = document.getElementById("footer");
jQuery.ajaxSetup({ async: false }); //if order matters
$.get("../assets/header.html", "", (data) => {
	$(document.body).append(data);
});
$.get("../assets/aside.html", "", function (data) {
	$(document.body).append(data);
});
jQuery.ajaxSetup({ async: true });
