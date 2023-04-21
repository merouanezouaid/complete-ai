var textArea = document.querySelector('textarea[tabindex="0"]');


console.log(textArea)

// Create a new span element
const suggestion = document.createElement('span');
suggestion.setAttribute('id', 'suggestion');

textArea.parentNode.appendChild(suggestion);

if(textArea.value.length == 0){
  suggestion.value = "";
}

suggestion.style = `
    width: inherit;
    height: inherit;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding: inherit;
    font-size: inherit;
    color: #868686;
`

textArea.style = `
  z-index: 3;
`



const enterKey = 9;
window.onload = () => {
  textArea.value = "";
  clearSuggestion();
};
const clearSuggestion = () => {
  suggestion.textContent = "";
};

textArea.addEventListener("input", (e) => {
  clearSuggestion();
  if(textArea.value.length > 0){
    setTimeout(async function(){
      await printMessage();
    }, 3000); 
  }
  else{
    clearSuggestion();
  }
});
//Complete predictive text on enter key
textArea.addEventListener("keydown", (e) => {
  //When user presses enter and suggestion exists
  if (e.keyCode == enterKey && suggestion.innerText != "") {
    e.preventDefault();
    const tabLabel = suggestion.querySelector('#tab-label');
    tabLabel.remove();
    textArea.value = suggestion.textContent;
    ;
    //clear the suggestion
    clearSuggestion();
  }
  else if (e.keyCode == 13){
    clearSuggestion();
  }
});



function printMessage() {
    //console.log(textArea.value);
    if(textArea.value.length === 0){
      return;
    }
      query({"inputs": textArea.value, "parameters": {"max_length": 20}}).then((response) => {
        if(response.error){
          console.log(response.error);
        }
        let generatedText = response[0].generated_text;
        suggestion.innerHTML = textArea.value + generatedText.replace("\n", " ").substring(textArea.value.length).trim().split(" ")[0] + `<span id="tab-label" style="display: inline-block;
        background-color: #0078d7;
        color: white;
        font-size: 12px;
        font-weight: bold;
        text-align: center;
        padding: 2px 6px;
        border-radius: 10px;
        margin-left: 4px;">Tab</span>`;;
      }
      );
}

// I want a function that 

async function query(data) {
  const apiKey = "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";
  try {
      const response = await fetch(
          "https://api-inference.huggingface.co/models/gpt2",
          {
              headers: { Authorization: `Bearer ${apiKey}` },
              method: "POST",
              body: JSON.stringify(data),
          }
      );
      const result = await response.json();
      return result;
  } catch (error) {
      console.error(error);
      return { error: "Unable to fetch response" };
  }
}



chrome.runtime.sendMessage({requestApiKey: true}, function(response) {
  var apiKey = response.apiKey;
  // Use the API key here
  console.log(apiKey);
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.submitClicked) {
    // Perform the desired action here
    console.log('Submit button clicked!');
  }
});