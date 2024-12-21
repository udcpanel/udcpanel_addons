// This script runs in the background
browser.browserAction.onClicked.addListener(() => {
  browser.tabs.create({ url: 'popup.html' });
});

// enabling right-click start//
chrome.contextMenus.create({
  id: "enableRightClick",
  title: "Enable Right Click",
  contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "enableRightClick") {
    // No action needed, just enabling right-click
  }
});

chrome.runtime.onInstalled.addListener(function() {
  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === "complete") {
      chrome.tabs.executeScript(tabId, { file: "content.js" });
    }
  });
});
// enabling right-click end//
