$(function() {
  function onClick(info, tab) {
    $.get('https://isithackday.com/arrpi.php', {text: info.selectionText}, function(res) {
      // Create a simple text notification:
		var notification = webkitNotifications.createNotification(
		  'pirate_32.png',  // icon url - can be relative
		  'Pirate Translator!',  // notification title
		  res  // notification body text
		);
		notification.show()
    })
  }
  chrome.contextMenus.create({"title": "Translate into pirate!", "contexts":["selection"], "onclick": onClick})
})