$(function() {
  function genericOnClick(info, tab) {
    $.get('https://isithackday.com/arrpi.php', {text: info.selectionText}, function(res) {
      alert(res)
    })
  }
  var id = chrome.contextMenus.create({"title": "Translate into pirate!", "contexts":["selection"], "onclick": genericOnClick})
})