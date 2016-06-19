$(document).ready(function() {
	
	//this binds a more lenient query to the serious button
	$("#luckySearch").click({type: "q"},query);
	//this binds a more literal query to lucky button
	$("#srsSearch").click({type: "title"},query);

	function query(event) {
		console.log(event.data.type);
		//allow people to search again
		$(".response-field").empty();
		var search = $('input[name=searching]').val();
		//stop asking dumb questions
		if (search === '' || search === null) {
			$("#response").text("You should ask me something.");
			return;
		}
		
		//let them know we're off finding a solution
		$("#response").text("Finding your answer");
		search = search.split(' ').join('%20');
		console.log(search);
		var query = "https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&"+event.data.type+"="
		+search+"&accepted=True&site=stackoverflow";
		
		//query for an accepted answer id that goes with the query
		$.getJSON(query, function(data){
			console.log(data);
			if (data.items.length > 0) {
				var id = data.items[0].accepted_answer_id;
				console.log("found answer id "+id);
				$("#title-response").text(data.items[0].title);
				$("#title-url").html("<a href=\""+data.items[0].link+"\">"+data.items[0].link+"</a>");
				var answerBody ="https://api.stackexchange.com/2.2/answers/"+id+"?order=desc&sort=activity&site=stackoverflow&filter=withbody";
				//take that answer id and find a chunk of text associated with it
				$.getJSON(answerBody, function(data) {
					console.log(data);
					$("#response").html(data.items[0].body);
					return;
				});
			} else {
				$("#response").text("There was no answer to this question :(");
					return;
			}
		});
	}
});