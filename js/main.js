/*
* Start the searches
*/
function init() {
	//this binds a more lenient query to the serious button
	$("#lucky").click({type: "q"}, query);
	//this binds a more literal query to lucky button
	$("#serious").click({type: "title"}, query);
}

/*
* Initial query
*/
function query(event) {
	//allow people to search again
	$(".response-field").empty();

	var search = $('input[name=searching]').val();
	
	if (!search) {
		// no entry
		$("#title-response").text("You should ask me something.");
		return;
	}
	
	//let them know we're off finding a solution
	$("#title-response").text("Finding your answer");
	var query = "https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&"
		+ event.data.type
		+ "="
		+ search
		+ "&accepted=True&site=stackoverflow";
	
	//query for an accepted answer id that goes with the query
	$.getJSON(encodeURI(query), firstResponse);
}

/*
* Get some things back.
*/
function firstResponse(data) {
	if (data.items.length <= 0) {
		$("#response").text("There was no answer to this question :(");
		return;
	} 
	
	//we need the id of the top answer, this is the first element of the items array.
	var id = data.items[0].accepted_answer_id;


	$("#title-response").text(data.items[0].title);
	$("#title-url").html('<a href="' + data.items[0].link + '">' + data.items[0].link + '</a>');
	var answerBody = "https://api.stackexchange.com/2.2/answers/"
		+ id
		+ "?order=desc&sort=activity&site=stackoverflow&filter=withbody";

	//take that answer id and find a chunk of text associated with it
	$.getJSON(answerBody, secondResponse);
}

/*
* Second query returns actual answer.
*/
function secondResponse(data) {
	$("#response").html(data.items[0].body);
	return;
}

$(document).ready(init);