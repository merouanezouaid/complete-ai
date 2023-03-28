var textArea = document.querySelector('textarea[tabindex="0"]');

console.log(textArea)

// document.addEventListener('DOMContentLoaded', function() {
//     // Get the text area element by using its tabindex attribute
//     textArea.value = "Can you please let us know more details about your";
  
//     setTimeout(function(){
//         if(textArea.value == ""){
//             textArea.value = "Can you please let us know more details about your"
//             console.log("I'm here")
//         }
//     }, 5000);

    
    
    
//     textArea.addEventListener("input", function() {
//       console.log(textArea.value);
//         query({"inputs": textArea.value}).then((response) => {
//             textArea.placeholder = JSON.stringify(response);
//             console.log(JSON.stringify(response));
//         }
//       )
      
//     })
// })

textArea.insertAdjacentHTML('afterend', '<span id="suggestion"></span>');



let words = [
  "Apple",
  "Pencil",
  "Pen",
  "Chair",
  "Helmet",
  "Grapes",
  "Tub",
  "Trophy",
  "Cookie",
  "Donut",
  "Shirt",
  "Bat",
  "Ash",
  "Bell",
  "Chat",
  "Ball",
  "Eye",
  "Fish",
  "Zip",
  "Game",
  "Juice",
  "Orange",
  "Fan",
  "Ice",
];
words.sort();


const suggestion = document.getElementById('suggestion');

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

//Enter key code
const enterKey = 9;
window.onload = () => {
  textArea.value = "";
  clearSuggestion();
};
const clearSuggestion = () => {
  suggestion.innerHTML = "";
};
//Execute function on input
textArea.addEventListener("input", (e) => {
  clearSuggestion();
  if(textArea.value != ""){
    setTimeout(function(){
      printMessage();
    }, 3000); 
  }

  
});
//Complete predictive text on enter key
textArea.addEventListener("keydown", (e) => {
  //When user presses enter and suggestion exists
  if (e.keyCode == enterKey && suggestion.innerText != "") {
    e.preventDefault();
    textArea.value = suggestion.innerText;
    //clear the suggestion
    clearSuggestion();
  }
});




function truncateString(s) {
  // Find the index of the first occurrence of any punctuation mark
  var end = Math.min(s.indexOf('.'), s.indexOf(','), s.indexOf('?'), 10);

  // Slice the string up to the punctuation mark (or the end of the string)
  return s.slice(0, end);
}





function printMessage() {
    //console.log(textArea.value);
    if(textArea.value == ""){
      return;
    }
      query({"inputs": textArea.value, "parameters": {"max_length": 20}}).then((response) => {
        let generatedText = response[0].generated_text;
        suggestion.innerHTML = generatedText;
      }
    )
}






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


// query({"inputs": "Can you please let us know more details about your "}).then((response) => {
// 	console.log(JSON.stringify(response));
// });