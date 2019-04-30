var  = "";
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    title = tabs[0].title;
    element = document.getElementById("title-tab");
    element.innerHTML = title;
});
