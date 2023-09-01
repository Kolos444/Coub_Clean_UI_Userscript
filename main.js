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
	btn.classList.add("clean-ui-button");
	const style = document.createElement("style");
	const btnStyle = document.createElement("style");
	btnStyle.innerHTML = ".clean-ui-button{z-index: 9999;position:fixed;bottom:50px;left: 20px;aspect-ratio: 1;border-radius: 50%;border: 2px white;background: darkred;color: white;}"
	btnStyle.innerHTML += "*{overflow-anchor: none;}"

	/*Triggered after the Site is fully loaded.
	* Avoids having Trouble when accessing the DOM.*/
	window.addEventListener("load", () => {

		const body = document.querySelector(".page__content");
		body.insertBefore(btn, body.firstChild);

		const head = document.querySelector("head");
		head.insertBefore(style, head.firstChild);
		head.insertBefore(btnStyle, head.firstChild);

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
		//style.innerHTML = ".coub--timeline,.viewer,.page-container{ width: unset !important; height: unset !important;}";
		style.innerHTML = ".page-menu,.main-menu__inner,.header,.timeline-right-block{display: none !important;}";
		style.innerHTML += ".coub--timeline{width:unset !important;}";
		//style.innerHTML += ".page__content{width: 80% !important;}";
		const insert = document.querySelector("head");

		btn.onclick = clearStyle;
	};
})();