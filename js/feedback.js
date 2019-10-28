
	var link = document.querySelector(".js-feedback");
	var popup = document.querySelector(".modal-feedback");
	var close = popup.querySelector(".button-close");
	var form = popup.querySelector("form");
	var name = popup.querySelector("[name=name]");
	var email = popup.querySelector("[name=email]");
	var othertext = popup.querySelector("[name=Text-letter]");
	
	link.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.add("modal-show");
		name.focus();		
	});
	
	close.addEventListener("click", function (evt) { 
		evt.preventDefault();
		popup.classList.remove("modal-show");
		popup.classList.remove("modal-error");
	});
	
	form.addEventListener("submit", function (evt) {
		if (!name.value || !email.value || !othertext.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
		} 
	});
	
	window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {			
			if (popup.classList.contains("modal-show")) {
				evt.preventDefault();
				popup.classList.remove("modal-show");
				popup.classList.remove("modal-error");
			}
		}
	});

