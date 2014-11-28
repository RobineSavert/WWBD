var answers = 	[
			"If you like it, then you should have put a ring on it",
			"Feels like true paradise to me",
			"I know it ain't easy"
		];

$(function() {
	$( ".form-signin" ).submit(function(event) {
		var randomNumber = Math.floor((Math.random() * answers.length)); 		
		$(".answer").html(answers[randomNumber]);
		$(".answer").show();
		event.preventDefault();
	});
});