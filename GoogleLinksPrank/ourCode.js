$(function() { //anything in here will run once the page is loaded
	//$('h3') finds all the h3 elements
	// $('h3 a') finds all links inside h3 elements
	//in html, you make a link with <a href="example.com">Example site</a>
	//So, to change where the link goes to, change the href attribute
	setInterval(function() {
		$('h3 a').attr("href", "http://www.youtube.com/watch?v=oHg5SJYRHA0")
	}, 500) //update the links every .5 seconds in case the results change (this is the bad lazy way, I'll probably update this)
})