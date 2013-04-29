$(function() {
  function onClick(info, tab) {
    $.get('https://isithackday.com/arrpi.php', {text: info.selectionText}, function(res) {
      alert(res)
    })
  }
  chrome.contextMenus.create({"title": "Translate into pirate!", "contexts":["selection"], "onclick": onClick})
})