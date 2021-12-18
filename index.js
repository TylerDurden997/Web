const mainToggle = document.querySelector(".mainHeaderToggle")
const mainCont = document.querySelector(".mainContent")

mainToggle.addEventListener("click", () => {
	mainCont.classList.toggle("mainContentVisible");
});