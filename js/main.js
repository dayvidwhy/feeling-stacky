$(document).ready(function() {
	$("#search").click(function() {
		$("#response").text("Finding your answer");
		var search = $('input[name=search]').val();
		var query = "https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&q="
			+search+"&site=stackoverflow";
		//query for a question id that goes with the query
		$.getJSON(query, function(data){
			console.log(data);
			var id = data.items[0].question_id;
			console.log(id);
			var questToAnswer = "https://api.stackexchange.com/2.2/questions/"+id+"/answers?order=desc&sort=activity&site=stackoverflow"
			//use that question id to find an answer id
			$.getJSON(questToAnswer, function(data) {
				console.log(data);
				var id = data.items[0].answer_id;
				var answerBody ="https://api.stackexchange.com/2.2/answers/"+id+"?order=desc&sort=activity&site=stackoverflow&filter=withbody";
				//take that answer id and find a chunk of text associated with it
				$.getJSON(answerBody, function(data) {
					console.log(data);
					$("#response").html(data.items[0].body);
				})
			});
		});
	});
});