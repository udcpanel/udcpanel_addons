// popup.js

document.addEventListener('DOMContentLoaded', function () {
  const functionToggles = document.querySelectorAll('.function-toggle');

  // Load the saved state from storage and update the toggle switches
  chrome.storage.sync.get(['functionStates'], function (result) {
      if (result.functionStates) {
          updateToggleSwitches(result.functionStates);
      }
  });

  functionToggles.forEach(functionToggle => {
      functionToggle.addEventListener('change', function () {
          // Save the state immediately when any toggle changes
          saveChanges();
      });
  });

  // Function to update the state of toggle switches based on the loaded state
  function updateToggleSwitches(functionStates) {
      Object.entries(functionStates).forEach(([functionId, state]) => {
          const toggle = document.getElementById(functionId);
          if (toggle) {
              toggle.querySelector('input').checked = state;
          }
      });
  }

  // Function to save changes to storage
  function saveChanges() {
      const functionStates = {};
      functionToggles.forEach(toggle => {
          functionStates[toggle.id] = toggle.querySelector('input').checked;
      });

      // Save the current state to storage
      chrome.storage.sync.set({ functionStates });
  }
});
