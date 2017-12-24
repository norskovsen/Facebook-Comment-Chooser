chrome.runtime.onMessage.addListener(receiver);

function receiver(request, sender, sendResponse) {
  if (request.message === "user clicked!") {
      alert('test');
  }
}
