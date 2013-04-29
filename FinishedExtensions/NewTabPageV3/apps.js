$(function() {
	chrome.management.getAll(function (apps) {
		apps.forEach(function(app) {
			if (app.type=="hosted_app") //ignore extensions
				$('#apps').append("<a href='"+app.appLaunchUrl+"'><img appId='"+app.id+"' src='"+getIconURL(app)+"'></a>")
		})
	})
})
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