


function parse() {
	request = new XMLHttpRequest();

	request.open("GET", "data.json", true);

	request.onreadystatechange= function() {

	if (request.readyState == 4) {
		result = "";

		raw = request.responseText;

		parsedObjects = JSON.parse(raw);
		elem = document.getElementById("messages");
		for (count = 0; count < parsedObjects.length; count++) {
			result += "<p>" + parsedObjects[count]["content"] + " " +parsedObjects[count]["username"] + "</p>";
		}
			elem.innerHTML = result;
		}
};

request.send(null);
}