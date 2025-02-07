chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "fetchGithub") {
      fetch(request.url)
        .then(response => response.text())
        .then(data => sendResponse({data: data}))
        .catch(error => sendResponse({error: error.toString()}));
      return true;
    }
  });
  