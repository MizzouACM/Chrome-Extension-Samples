$(function() {
	$('#note').val(localStorage.getItem("note")) //grab the current version from localstorage
	$('#note').bind('input',function() { //whenever the user types something
		console.log($(this).val()) //output the textarea's contents to the console
		localStorage.setItem("note", $(this).val())  //save the note to localstorage
	})
})