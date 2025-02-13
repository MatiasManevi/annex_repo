(function () {
	// Create a new H1 element
	const newHeader = document.createElement("h1");
	newHeader.textContent = "Hello, World from TESTING!";

	// Add some styling
	newHeader.style.textAlign = "center";
	newHeader.style.color = "blue";
	newHeader.style.marginTop = "20px";

	// Append the new H1 to the body
	document.body.appendChild(newHeader);
})();
