// ==UserScript==
// @name         Coub Clean UI
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Clean up the UI of Coub
// @author       Luca Sonntag
// @match        https://coub.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=coub.com
// @grant        none
// @require      http://localhost/main.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

(function () {
	"use strict";

	const btn = document.createElement("button");
	btn.innerHTML = "Clean";
	const style = document.createElement("style");

	/*Triggered after the Site is fully loaded.
	* Avoids having Trouble when accessing the DOM.*/
	window.addEventListener("load", () => {

		const body = document.querySelector(".page__content");
		body.insertBefore(btn, body.firstChild);
		insert.insertBefore(style, insert.firstChild);

		assignBtnClick();
	}, false);

	//Look up on which site the User currently is and assigns the corresponding script that cleans the site.
	const assignBtnClick = () => {
		if (window.location.href === "https://coub.com/")
			btn.onclick = cleanHomePage;
		if (window.location.href === "https://coub.com/bookmarks")
			btn.onclick = cleanHomePage;
	};

	const clearStyle = () => {
		style.innerHTML = "";
	};



	const cleanHomePage = () => {
		// language=CSS
		style.innerHTML = ".coub--timeline,.viewer,.page-container{ width: unset !important; height: unset !important;}";
		style.innerHTML += ".page-menu,.main-menu__inner,.header,.timeline-right-block{display: none !important;}";
		style.innerHTML += ".page__content{width: 80% !important;}";
		const insert = document.querySelector("head");

		btn.onclick = clearStyle;
	};
})();