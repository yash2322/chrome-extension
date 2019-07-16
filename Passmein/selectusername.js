//will give option to save when selecting the text. like lastpass
var context_username={
        "id":"username",
        "title":"Passmein",
        "contexts":["selection"]
};
chrome.contextMenus.create(context_username);
chrome.contextMenus.onClicked.addListener(function(selectedData){
    if(selectedData.menuItemId=="username" && selectedData.selectionText){
        //if user has clicked on item with id username i.e passmein and it has selected some text the
        window.open("https://mayank9804.github.io/PassMeIN/");
        //chrome.storage.sync.get([variable_for_storage]) : we can use then this API when user logins to save the selected text using 
    }
});