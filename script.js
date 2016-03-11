$(document).ready(function(){

	$("a").click(function(e){
		var link_clicked = $(e.currentTarget);
		var info = link_clicked.data("text");

		$("#infobox").css({"border-style": "solid",
							"z-index": "3"});
		$("#infobox").append(info);
		$("#backdrop").addClass("dim")

	})

	$("#infobox, #backdrop").click(function(){
		$("#infobox").css({"border-style": "none",
							"z-index": "-1"});
		$("#infobox").empty();
		$("#backdrop").removeClass("dim")

	})

}) //Closes .ready