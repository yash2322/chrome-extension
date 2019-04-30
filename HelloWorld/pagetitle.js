tabs = {};
tabIds = [];
focusedWindowId = undefined;
currentWindowId = undefined;
chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
    currentWindowId = tabs[0].title;
    console.log(currentWindowId);
});
