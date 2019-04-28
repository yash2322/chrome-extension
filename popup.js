let newheader = document.getElementById('myHeader');
chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
  console.log(tabs[0].url);     //url
  console.log(tabs[0].title);   //title
  newheader.innerText = tabs[0].title;
});