// This script runs in the background
browser.browserAction.onClicked.addListener(() => {
  browser.tabs.create({ url: 'popup.html' });
});
