
chrome.runtime.onMessage.addListener( data => {
    if ( data.type === 'notification' ) {
      tldr( data.message );
    }
  });
  
  
  chrome.runtime.onInstalled.addListener( () => {
    chrome.contextMenus.create({
      id: 'tldr',
      title: "TLDR: \"%s\"", 
      contexts:[ "selection" ]
    });
  });


  chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
  
      // do your things
      console.log("Tab updated");
  
    }
  })
  
  chrome.contextMenus.onClicked.addListener( ( info, tab ) => {
    if ( 'tldr' === info.menuItemId ) {
      const result = query( info.selectionText );
      // FIXME: pass the selected text to popup
      // TODO: get the selected text and pass it to the input field in the popup and then inform the user to click on the icon and then regular behavior 
      alert(result);
    }
  } );

  

  
  const tldr = message => {
    chrome.storage.local.get( ['tldrCount'], data => {
		let value = data.tldrCount || 0;
		chrome.storage.local.set({ 'tldrCount': Number( value ) + 1 });
	} );
    return chrome.notifications.create(
      '',
      {
        type: 'basic',
        title: 'TLDR;',
        message: message || 'TLDR;',
        iconUrl: './images/icon-16x16.png',
      }
    );
  };

  async function query(data) {
    // const apiKey = "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"
	// const response = await fetch(
	// 	"https://api-inference.huggingface.co/models/gpt2",
	// 	{
	// 		headers: { Authorization: `Bearer ${apiKey}` },
	// 		method: "POST",
	// 		body: JSON.stringify(data),
	// 	}
	// );
	// const result = await response.json();
	// return result;
}

// query({"inputs": "Can you please let us know more details about your "}).then((response) => {
// 	console.log(JSON.stringify(response));
// });


