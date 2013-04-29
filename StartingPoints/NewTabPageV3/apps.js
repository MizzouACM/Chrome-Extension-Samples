$(function() {
	chrome.management.getAll(function (apps) {
    //loop through all apps
      //check if app.type is "hosted_app"
				//add the app to the apps list
	})
})

//gets the largest icon possible for an app
function getIconURL(app) {
  var largest = {size:0};
  for (var i = 0; i < app.icons.length; i++) {
    var icon = app.icons[i];
    if (icon.size > largest.size) {
      largest = icon;
    }
  }
  return largest.url;
}