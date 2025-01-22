var greeting = "I made an %23NSAhaiku and you can too! %23NSA";
var siteURL  = "http://www.NSAhaiku.net";
var heyO     = "Hey, @BarackObama. I don't think mass surveillance was a campaign promise. End the unconstitutional %23NSA spying."
function email(poem) {
	popUp("mail.html?" + poem,704,300);
}

function facebook(poem) {
	popUp("https://www.facebook.com/dialog/feed?app_id=140586622674265&link=" + siteURL + "&name=" + poem + "&redirect_uri=http%3A%2F%2Fs7.addthis.com%2Fstatic%2Fpostshare%2Fc00.html", 900,600);
}

function twitter(poem) {
	popUp("https://twitter.com/intent/tweet?text=" + poem + greeting + "&url=" + siteURL, 704, 260);
}

function gplus(poem) {
	popUp("https://plus.google.com/share?url={" + siteURL + "}", 500, 440);
}

function barack(poem) {
	popUp("https://twitter.com/intent/tweet?text=" + heyO + "&url=" + siteURL, 704, 260);
}

// create pop up windows
function popUp(url,_width,_height) {
	newwindow=window.open(url,'Sharing is Caring!','height=' + _height + ',width=' + _width);
	if (window.focus) {newwindow.focus()}
	return false;
}