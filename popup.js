document.getElementById('submit-api-key').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var apiKey = document.getElementById('apiKeyInput').value;

        // Send a message to background.js to store the API key in storage
        chrome.runtime.sendMessage({setApiKey: apiKey});
        chrome.tabs.reload(tabs[0].id);
    });
  });