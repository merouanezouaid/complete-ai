


document.getElementById('submit-api-key').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // Get the API key from the user (e.g. through an input field in the popup)
    var apiKey = document.getElementById('apiKeyInput').value;

// Send a message to background.js to store the API key in storage
    chrome.runtime.sendMessage({setApiKey: apiKey}, function(response) {
        // Handle the response if needed
    });

      chrome.tabs.reload(tabs[0].id);
    });
  });
  