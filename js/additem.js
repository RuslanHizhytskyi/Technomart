var addLink = document.querySelectorAll(".buy");
var addPopup = document.querySelector(".modal-message");
var addClose = addPopup.querySelector(".button-close");

for (var i = 0; i < addLink.length; i++) {
addLink[i].addEventListener("click", function (evt) {
	evt.preventDefault();
	addPopup.classList.add("modal-show");			
})
};

addClose.addEventListener("click", function (evt){ 
	evt.preventDefault();
	addPopup.classList.remove("modal-show");		
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) 	{			
		if (addPopup.classList.contains("modal-show")) 		{
			evt.preventDefault();
			addPopup.classList.remove("modal-show");				
		}
	}
});