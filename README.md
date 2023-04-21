<div align="center"><img width="5%" src="images/icon.png"/></div>
<h1 align="center">
  CompleteAI - Text Autocomplete for ChatGPT
</h1>
This is a Chrome extension that provides text autocompletion functionality for ChatGPT. 
With this extension, you can save time by having the extension suggest the next word or phrase as you type, based on what you've already written.

## Installation
* Clone or download the source code for this extension.
* Open Google Chrome and go to the "Extensions" page ```chrome://extensions```.
* Turn on "Developer mode" (toggle switch on the top right corner).
* Click on the "Load unpacked" button and select the folder containing the source code.
* The extension will be installed and ready to use.

## Usage

* Go to ChatGPT in your Chrome browser.
* Start typing your message in the input box.
* As you type, the extension will suggest the rest of the word or phrase in the same input box.
* To accept the suggestion, press the "Tab" key on your keyboard.
* Continue typing your message, and the extension will continue to suggest autocompletions as you go.

## TODOs
I want the extension to provide several customization options that can be accessed by clicking on the extension icon in the Chrome toolbar.

* Autocomplete delay: The time in milliseconds to wait before suggesting autocompletions.
* Max number of suggestions: The maximum number of suggestions to show below the input box.
* Min word length: The minimum number of characters required before autocompletion suggestions will be shown.
* Stop words: A list of words that will be ignored by the autocompletion algorithm.
* API key: I use [gpt2](https://huggingface.co/gpt2) as a model for now, but due to its weak performance I'll probably switch to OpenAI API. 

## Troubleshooting
- **Autocomplete suggestions are not appearing**: 
Make sure that the extension is enabled and that you are typing in the ChatGPT input box.
- **Autocomplete suggestions are incorrect**: 
This may be due to incorrect or incomplete input text. Try using different wording or rephrasing your message to see if the suggestions improve.
- **Extension is not working at all**: 
Make sure that the extension is enabled and that you have a valid API key entered in the options menu. If the problem persists, try reinstalling the extension or contacting the developer for assistance.

## Contributions

Contributions to this extension are welcome and encouraged! If you find a bug or have a suggestion for improvement, please open an issue on the GitHub repository. If you would like to contribute code, please submit a pull request with your changes.

## License

This extension is licensed under the [MIT License](https://opensource.org/licenses/MIT).
