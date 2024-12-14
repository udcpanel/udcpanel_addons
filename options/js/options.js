// options/options.js

document.addEventListener('DOMContentLoaded', function () {
  const saveButton = document.getElementById('saveButton');
  const featureToggle = document.getElementById('featureToggle');
  const usernameInput = document.getElementById('username');

  // Load saved options from sync storage
  browser.storage.sync.get(['username', 'featureEnabled'], function (result) {
    usernameInput.value = result.username || '';
    featureToggle.checked = result.featureEnabled || false;
  });

  saveButton.addEventListener('click', function () {
    const username = usernameInput.value;
    const featureEnabled = featureToggle.checked;

    // Save options using browser.storage.sync
    browser.storage.sync.set({ username: username, featureEnabled: featureEnabled }, function () {
      console.log('Options saved');
    });
  });
});
