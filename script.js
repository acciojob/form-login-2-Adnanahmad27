//your JS code here. If required.
const form = document.querySelector("form");
const fn = document.querySelector("#firstNameInput");
const ln = document.querySelector("#lastNameInput");
const pn = document.querySelector("#phoneNumberInput");
const ei = document.querySelector("#emailInput");

form.addEventListener("submit" , (e) => {
	e.preventDefault();

	alert(`First Name: ${fn.value} Last Name: ${ln.value} Phone Number: ${pn.value} Email ID: ${ei.value}`);
	form.reset();
});