document.getElementById('submitBtn').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {submitClicked: true}, function(response) {
        // Handle the response if needed
      });
    });
  });
  