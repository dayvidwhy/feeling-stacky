$(document).ready(function() {
	//bind enter to our button
	$(document).keypress(function(button){
		if (button.which == 13){
			$("#search").click();
		}
	});

	$("#search").click(function() {
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
		var query = "https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&q="
		+search+"&site=stackoverflow";
		//query for a question id that goes with the query
		$.getJSON(query, function(data){
			console.log(data);
			if (data.items[0].question_id) {
				var id = data.items[0].question_id;
				$("#title-response").text(data.items[0].title);
				$("#title-url").html('<a class="answer" href="'+data.items[0].link+'">'+data.items[0].link+'</a>');
				console.log("found question id "+id);
				var questToAnswer = "https://api.stackexchange.com/2.2/questions/"+id+"/answers?order=desc&sort=activity&site=stackoverflow";
				//use that question id to find an answer id
				$.getJSON(questToAnswer, function(data) {
					console.log(data);
					if (data.items[0]) {
						var id = data.items[0].answer_id;
						console.log("found answer id "+id);
						var answerBody ="https://api.stackexchange.com/2.2/answers/"+id+"?order=desc&sort=activity&site=stackoverflow&filter=withbody";
						//take that answer id and find a chunk of text associated with it
						$.getJSON(answerBody, function(data) {
							console.log(data);
							$("#response").html(data.items[0].body);
						});
					} else {
						$("#response").text("There was no answer to this question :(");
							return;
						}
					});
			} else {
				$("#response").text("There was no question to this question :(");
					return;
				}
			});
});
}); //hadouken