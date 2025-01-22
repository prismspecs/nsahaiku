var words = new Array();
var sylls = new Array();
var csv_file = new Array();	// for word arrays
var fullpoem = "";	// store entire poem for sharing
var htmlpoem = "";	// for email
var twitterpoem = "";	// for twitter

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "terms.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
	// insert a haiku into html
	
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

	// fix up width and left to center it
	adjustSize();	

};


// generate a haiku! either from haiku box or explicit button
$(".gen_haiku").click(function() {
	// fade out haiku box
	$("#haiku_container").fadeOut(100, function() {
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

	divID.innerHTML =  line1 + "/<br><br>" + line2 + "/<br><br>" + line3;

	twitterpoem = line1 + "%0A" + line2 + "%0A" + line3 + "%0A%0A";
	// replace & mark with URL encoded version
	twitterpoem = twitterpoem.replace(/&/g,"%26");
	fullpoem = line1 + " // " + line2 + " // " + line3;
	htmlpoem = line1 + "|" + line2 + "|" + line3;
	htmlpoem = htmlpoem.replace(/ /g,"+");
}


function adjustSize() {
	var go_left = (window.innerWidth - $("#haiku_container").width()) / 2;
	//alert($("#haiku_container").width());
	$("#haiku_container").css("left", go_left);
	$("#haiku_container").fadeIn(100);	
}


// create a haiku line!
function writeLine(syls) {
  var haikuLine = "";
  var sylLeft = syls;

  while ( sylLeft > 0 ) {  // while there are still syllables left
    var rando = Math.floor((Math.random()*words.length) - 1);  // draw a random word
    if (sylls[rando] <= sylLeft) {  // if this random word doesn't take too many syllables
    	sylLeft   -=   sylls[rando];            // subtract from syllables left
    	if(sylLeft > 0) {
			haikuLine += words[rando] + " ";           // add this to line string, add a space
		} else {
			// don't add a space at the end of the last word
			haikuLine += words[rando];
		}
	}
  }

  return haikuLine;  // toss back finished line
}


// open information pop over
$("#click_info").click(function() {
	window.open("about.html")
});

