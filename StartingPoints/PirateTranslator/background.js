$(function() {
  function onClick(info, tab) {
  	//what is in the info paramater?

  	//HTTP GET https://isithackday.com/arrpi.php with selected text
  	//alert the response

  }
  chrome.contextMenus.create({"title": "Translate into pirate!", "contexts":["selection"], "onclick": onClick})
})