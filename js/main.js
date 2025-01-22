var words = new Array();
var sylls = new Array();
var csv_file = new Array();	// for word arrays
var fullpoem = "";	// store entire poem for sharing
var htmlpoem = "";	// for email poem
var twitterpoem = "";	// for twitter!

$(document).ready(function () {
	$.ajax({
		type: "GET",
		url: "terms.csv",
		dataType: "text",
		success: function (data) { processData(data); }
	});
});

// load CSV file and parse for words and syllables
function processData(allText) {
	csv_file = allText.split('\n');

	// csv file is now in an array, split into seperate word array and syllable array
	for (var i = 0; i < csv_file.length; i++) {
		var both = csv_file[i].split(',');	// split at the comma
		words[i] = both[0];	// populate word array
		sylls[i] = both[1];	// populate syllable array
	}

	// put the words into the ticker
	put_word();
	// resize fonts and such
	do_resize();
	// fix up width and left to center it
	adjustSize();

};


// generate a haiku! either from haiku box or explicit button
$(".gen_haiku").click(function () {
	// fade out haiku box
	$("#haiku_container").fadeOut(100, function () {
		// make sure there is no background-image after first click
		$("#haiku").css("background-image", "none");

		// insert a haiku into html
		doHaiku();

		// fix up width and left to center it
		adjustSize();
	});

});

function doHaiku() {
	var divID = document.getElementById("haiku");	// grab 'words' div
	var line1 = writeLine(5);	// write it
	var line2 = writeLine(7);	// line by
	var line3 = writeLine(5);	// line ;)

	divID.innerHTML = line1 + "<br>" + line2 + "<br>" + line3;

	twitterpoem = line1 + "%0A" + line2 + "%0A" + line3 + "%0A%0A";
	// replace & mark with URL encoded version
	twitterpoem = twitterpoem.replace(/&/g, "%26");
	fullpoem = line1 + " // " + line2 + " // " + line3;
	htmlpoem = line1 + "|" + line2 + "|" + line3;
	htmlpoem = htmlpoem.replace(/ /g, "+");
}


function adjustSize() {
	var go_left = (window.innerWidth - $("#haiku_container").width()) / 2;
	//alert($("#haiku_container").width());
	$("#haiku_container").css("left", go_left);
	$("#haiku_container").fadeIn(100);
}


// put the words into the marquee
function put_word() {
	// place the words into 'words' div
	var divID = document.getElementById("wordlist");	// grab 'words' div
	//divID.innerHTML = words;
	for (var i = 0; i < words.length; i++) {
		divID.innerHTML += words[i] + " ";
		//divID.innerHTML = "test";
	};
}

// create a haiku line!
function writeLine(syls) {
	var haikuLine = "";
	var sylLeft = syls;

	while (sylLeft > 0) {  // while there are still syllables left
		var rando = Math.floor((Math.random() * words.length) - 1);  // draw a random word
		if (sylls[rando] <= sylLeft) {  // if this random word doesn't take too many syllables
			sylLeft -= sylls[rando];            // subtract from syllables left
			if (sylLeft > 0) {
				haikuLine += words[rando] + " ";           // add this to line string, add a space
			} else {
				// don't add a space at the end of the last word
				haikuLine += words[rando];
			}
		}
	}

	return haikuLine;  // toss back finished line
}

// check for help click
$("#help_me").click(function () {
	// is it already showing?
	if ($("#help_me").hasClass("on")) {
		// it's visible, hide it.
		$('#curtain').css({ height: $(window).height(), width: $(window).width() })
			.fadeOut(300);
		$(".help").fadeOut(300);
		// make label say "help"
		$('#help_me').text('help');
		// show "info" button
		$("#click_info").fadeIn(100);
		// subtract class as boolean flag
		$("#help_me").removeClass("on");
	}
	else {
		// it's not visible so do something else
		$('#curtain').css({ height: $(window).height(), width: $(window).width() })
			.fadeIn(200);
		$(".help").fadeIn(100);
		// make label say "close help"
		$('#help_me').text('close help');
		// hide "info" button
		$("#click_info").fadeOut(100);
		// add class as boolean flag
		$("#help_me").addClass("on");
	}

});

// open up terms list
$("#ticker").click(function () {
	window.open("terms.html");
});

// check for window resizes
window.onresize = function (event) {
	do_resize();
	adjustSize();
}

// resize texts and such based on user's window size
function do_resize() {
	// find multipliers
	var screenType = parseFloat(window.getComputedStyle(document.getElementById("nothing")).fontSize);

	// for haiku text
	var haiku_mult = 51;
	// for top right buttons text
	var trbutt_mult = 100;
	// for help layover text
	var help_mult = 80;

	if (screenType == 1) {
		haiku_mult = 51;
		trbutt_mult = 100;	// top right buttons
		var help_mult = 80;
	} else if (screenType == 2) {
		haiku_mult = 34;
		trbutt_mult = 70;	// top right buttons
		var help_mult = 50;
	}



	// do sizing for haiku  
	$('#haiku_container').css('font-size', (window.innerWidth / haiku_mult) + 'px');

	// now for ticker mult is 40
	$('#ticker').css('font-size', (window.innerHeight / 40) + 'px');

	// now for about multi is 120 (width) -- 12px font normally
	$('#about').css('font-size', (window.innerWidth / 100) + 'px');
	// unless we are in portrait or something
	if (window.innerHeight > window.innerWidth) {
		// then use height to size
		$('#about').css('font-size', (window.innerHeight / 80) + 'px');
	}

	// same for help texts
	$('.help').css('font-size', (window.innerWidth / help_mult) + 'px');

	// top right buttons (12px)
	$('#help_me').css('font-size', (window.innerWidth / trbutt_mult) + 'px');
	$('#click_info').css('font-size', (window.innerWidth / trbutt_mult) + 'px');

	// and for help text/arrow positioning .. social buttons
	var p = $("#soc_right");
	var offset = p.offset();
	if (screenType == 1) {
		$('#help_social_container').css('left', offset.left * 1.08);
		$('#help_social_container').css('top', offset.top * 1.005);
	}

	// top right buttons
	var p = $("#click_info");
	var offset = p.offset();
	var temp = $('#help_info_container').width();
	$('#help_info_container').css('left', offset.left - temp * 1.1);
	$('#help_info_container').css('top', offset.top);

}