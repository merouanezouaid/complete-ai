// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   if (request.setApiKey) {
//     // Store the API key in storage
//     chrome.storage.sync.set({apiKey: request.setApiKey}, function() {
//       console.log("api key stored")
//       // Send a response if needed
//       sendResponse({message: 'API key stored'});
//     });
//     return true; // Needed to indicate that a response will be sent asynchronously
//   }
// });


// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   if (request.requestApiKey) {
//     chrome.storage.sync.get(['apiKey'], function(result) {
//       var apiKey = result.apiKey;
//       console.log(apiKey);
//       sendResponse({apiKey: apiKey});
//     });
//     return true; // Needed to indicate that a response will be sent asynchronously
//   }
// });

  
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.submitClicked) {
    // Perform the desired action here
    console.log('Submit button clicked!');
  }
});