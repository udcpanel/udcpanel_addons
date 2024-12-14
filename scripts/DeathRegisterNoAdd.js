document.addEventListener('DOMContentLoaded', function() {

// Get the dropdown list by its name attribute
var dropdown = document.querySelector('select[name="nid_or_birth"]');

// Create a new option element
var newOption = document.createElement("option");
newOption.value = "মৃত্যু সনদপত্র নং";  // The value for the new option
newOption.text = "মৃত্যু সনদপত্র নং";   // The text to display in the dropdown

// Add the new option to the dropdown
dropdown.appendChild(newOption);



});