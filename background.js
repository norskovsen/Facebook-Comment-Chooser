chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    var msg = {
	message: "user clicked!"
    }
    msg.
    chrome.tabs.sendMessage(tab.id, msg);
}
