
document.addEventListener('DOMContentLoaded', function() {


  // Get today's date
  let today = new Date();

  // Create a date for January 1st, 2025
  let expiryDate = new Date("2025-01-01");

  // Compare today's date with the expiry date
  if (today > expiryDate) {
      // If the addon is expired, show an alert
      alert("Your addon has expired. Please contact the addon developer for assistance. Developer Md. Ariful Islam. Mobile No. 01874-474032");
      // Close the tab when the alert is dismissed
      window.close();
  } else {
      // If the addon is still valid, show a message
      console.log("Addon is valid.");
      
  }


if (today < expiryDate) {


// Function to open a new tab and close it after submitting a form
function openNewTabAndClose() {
  // Get the value from the input field
  var variableValue = document.getElementById("variableInput").value;

  // Check if the input field is empty
  if (variableValue === "") {
    alert("দয়া করে আবেদন নম্বর লিখুন");
    return;
  }

  // Get the text content of the child div within userDropdown
  var userDropdown = document.getElementById("userDropdown");
  var textContent = userDropdown.querySelector("div").textContent.trim();

  // Construct the URL based on the text content
  var url;
  if (textContent === "উকিল আহমদ") {
    url = "https://prottoyon-karnafuli.org/admin/view_application.php?application_id=" + variableValue;
  } else if (textContent === "আর্থিক ও প্রশাসনিক দায়িত্বপ্রাপ্ত কর্মকর্তা") {
    url = "https://prottoyon-karnafuli.org/admin/certificate_issue.php?application_id=" + variableValue;
  } else {
    alert("Invalid user role.");
    return;
  }

  // Open the URL in a new tab

  var newTab = window.location.href = url;


  // Check if the new tab is opened successfully
  if (newTab) {
    console.log("New tab opened successfully");

    // Listen for the load event of the new tab
    newTab.onload = function () {
      console.log("New tab loaded");

      // Submit the form containing the submit button
      var form = newTab.document.querySelector('form[name="save"]');
      if (form) {
        console.log("Form found, submitting...");
        form.submit();
      } else {
        console.log("Form not found");
      }

      // Close the tab after a delay (adjust the delay as needed)
      setTimeout(function () {
        newTab.close();
        console.log("Tab closed");
      }, 3000);
    };
  } else {
    // If the new tab failed to open
    alert("Popup blocked! Please allow popups to open the application.");
  }
}

// Create the input field and append it beside the "sidebarToggle" button
var sidebarToggle = document.getElementById("sidebarToggle");
var inputField = document.createElement("input");
inputField.setAttribute("type", "number");
inputField.setAttribute("id", "variableInput");
inputField.setAttribute("placeholder", "আবেদন নম্বর লিখুন");
sidebarToggle.parentNode.insertBefore(inputField, sidebarToggle.nextSibling);

// Create a button to execute the function
var executeButton = document.createElement("button");
executeButton.setAttribute("id", "executeBtn"); 
executeButton.classList.add('btn');
executeButton.classList.add('btn-warning');
executeButton.style.marginRight = "15px";
var userDropdown = document.getElementById("userDropdown");
var textContent = userDropdown.querySelector("div").textContent.trim();

if (textContent === "উকিল আহমদ") {
  executeButton.textContent = "যাচাই";
} else if (textContent === "আর্থিক ও প্রশাসনিক দায়িত্বপ্রাপ্ত কর্মকর্তা") {
  executeButton.textContent = "অনুমোদন";
} else {
  executeButton.textContent = "Execute"; // Default text if neither condition is met
}
executeButton.onclick = openNewTabAndClose;
sidebarToggle.parentNode.insertBefore(executeButton, inputField.nextSibling);

// Array of options
var options = [
  "নাগরিক সনদ",
  "ওয়ারিশ সনদ",
  "ট্রেড লাইসেন্স",
  "বার্ষিক আয় প্রত্যয়ন",
  "পুনঃবিবাহ না হওয়া সনদ",
  "ভূমিহীন প্রত্যয়ন",
  "একই নামে প্রত্যয়ন",
  "স্থায়ী বাসিন্দা সনদ",
  "চারিত্রিক সনদ",
  "বেকারত্ব সনদ",
  "নাগরিক সনদ(ইংরেজি)",
  "ওয়ারিশ সনদ(ইংরেজি)",
  "প্রত্যয়ন",
  "বিবিধ প্রত্যয়ন",
  "অবিবাহীত সনদপত্র",
  "পারিবারিক সনদপত্র",
  "অবিবাহীত সনদপত্র (ইংরেজী)",
  "বিবাহিত সনদপত্র",
  "প্রত্যয়ন (ইংরেজী)",
  "মৃত্যুর প্রত্যয়নপত্র"
];

// Create select element
var selectElement = document.createElement("select");
selectElement.setAttribute("id", "selectElement");

// Loop through options array and create option elements
options.forEach(function (optionText) {
  var optionElement = document.createElement("option");
  optionElement.value = optionText;
  optionElement.textContent = optionText;
  selectElement.appendChild(optionElement);
});
// Insert select element before executeButton
sidebarToggle.parentNode.insertBefore(selectElement, executeButton.nextSibling);


// Function to handle printing
function printDocument() {
  // Get the value from the input field
  var variableValue = document.getElementById("variableInput").value;

  // Check if the input field is empty
  if (variableValue === "") {
    alert("দয়া করে আবেদন নম্বর লিখুন");
    return;
  }

  // Get the selected option from the dropdown
  var selectedOption = document.getElementById("selectElement").value;

  // Construct the URL based on the selected option
  var url;
  if (selectedOption === "নাগরিক সনদ") {
    url = "https://prottoyon-karnafuli.org/admin/certificate/citizen_certificate.php?application_id=" + variableValue + "&type=print";
  } else if (selectedOption === "ওয়ারিশ সনদ") {
    url = "https://prottoyon-karnafuli.org/admin/certificate/inheritance_certificate.php?application_id=" + variableValue + "&type=print";
  } else if (selectedOption === "বার্ষিক আয় প্রত্যয়ন") {
    url = "https://prottoyon-karnafuli.org/admin/certificate/annualincome_certificate.php?application_id=" + variableValue + "&type=print";
  } else if (selectedOption === "পুনঃবিবাহ না হওয়া সনদ") {
    url = "https://prottoyon-karnafuli.org/admin/certificate/widow_certificate.php?application_id=" + variableValue + "&type=print";
  } else if (selectedOption === "ভূমিহীন প্রত্যয়ন") {
    url = "https://prottoyon-karnafuli.org/admin/certificate/landless_certificate.php?application_id=" + variableValue + "&type=print";
  } else if (selectedOption === "একই নামে প্রত্যয়ন") {
    url = "https://prottoyon-karnafuli.org/admin/certificate/samename_certificate.php?application_id=" + variableValue + "&type=print";
  } else if (selectedOption === "স্থায়ী বাসিন্দা সনদ") {
    url = "https://prottoyon-karnafuli.org/admin/certificate/permanenet_recident_certificate.php?application_id=" + variableValue + "&type=print";
  } else if (selectedOption === "চারিত্রিক সনদ") {
    url = "https://prottoyon-karnafuli.org/admin/certificate/character_certificate.php?application_id=" + variableValue + "&type=print";
  } else if (selectedOption === "নাগরিক সনদ(ইংরেজি") {
    url = "https://prottoyon-karnafuli.org/admin/certificate/citizen_certificate_en.php?application_id=" + variableValue + "&type=print";
  } else if (selectedOption === "ওয়ারিশ সনদ(ইংরেজি)") {
    url = "https://prottoyon-karnafuli.org/admin/certificate/inheritance_certificate_en.php?application_id=" + variableValue + "&type=print";
  } else if (selectedOption === "প্রত্যয়ন") {
    url = "https://prottoyon-karnafuli.org/admin/certificate/attestation.php?application_id=" + variableValue + "&type=print";
  } else if (selectedOption === "বিবিধ প্রত্যয়ন") {
    url = "https://prottoyon-karnafuli.org/admin/certificate/attestation_other.php?application_id=" + variableValue + "&type=print";
  } else if (selectedOption === "অবিবাহীত সনদপত্র") {
    url = "https://prottoyon-karnafuli.org/admin/certificate/annualincome_certificate.php?application_id=" + variableValue + "&type=print";
  } else if (selectedOption === "পারিবারিক সনদপত্র") {
    url = "https://prottoyon-karnafuli.org/admin/certificate/family_certififcate.php?application_id=" + variableValue + "&type=print";
  } else if (selectedOption === "অবিবাহীত সনদপত্র (ইংরেজী)") {
    url = "https://prottoyon-karnafuli.org/admin/certificate/unmarried_certificate_en.php?application_id=" + variableValue + "&type=print";
  } else if (selectedOption === "বিবাহিত সনদপত্র") {
    url = "https://prottoyon-karnafuli.org/admin/certificate/married_certificate.php?application_id=" + variableValue + "&type=print";
  } else if (selectedOption === "প্রত্যয়ন (ইংরেজী)") {
    url = "https://prottoyon-karnafuli.org/admin/certificate/attestation_en.php?application_id=" + variableValue + "&type=print";
  } else if (selectedOption === "মৃত্যুর প্রত্যয়নপত্র") {
    url = "https://prottoyon-karnafuli.org/admin/certificate/death_certificate.php?application_id=" + variableValue + "&type=print";
  } else if(selectedOption === "ট্রেড লাইসেন্স"){
    url = "https://prottoyon-karnafuli.org/admin/certificate/trade_certificate.php?application_id=" + variableValue + "&type=print";
  }
    else {
    // Handle other options if needed
    alert(" হালনাগাদের কাজ চলছে..... ");
    return;
  }

  // Open the URL in a new tab
  var printTab = window.open(url);
  
  if (!printTab) {
    alert("Popup blocked! Please allow popups to print the document.");
  }
}


// Function to handle applicationFunction
function applicationFunction() {

  // Get the selected option from the dropdown
  var selectedOption = document.getElementById("selectElement").value;

  // Construct the URL based on the selected option
  var url;
  if (selectedOption === "নাগরিক সনদ") {
    url = "https://prottoyon-karnafuli.org/web/forms/citizenship_certificate.php";
  } else if (selectedOption === "ওয়ারিশ সনদ") {
    url = "https://prottoyon-karnafuli.org//web/forms/Inheritance_certififcate.php?";
  } else if (selectedOption === "বার্ষিক আয় প্রত্যয়ন") {
    url = "https://prottoyon-karnafuli.org//web/forms/annual_income_certification.php?";
  } else if (selectedOption === "পুনঃবিবাহ না হওয়া সনদ") {
    url = "https://prottoyon-karnafuli.org//web/forms/widow_certificate.php?";
  } else if (selectedOption === "ভূমিহীন প্রত্যয়ন") {
    url = "https://prottoyon-karnafuli.org//web/forms/landless_certificate.php?";
  } else if (selectedOption === "একই নামে প্রত্যয়ন") {
    url = "https://prottoyon-karnafuli.org//web/forms/alias_certificate.php?";
  } else if (selectedOption === "স্থায়ী বাসিন্দা সনদ") {
    url = "https://prottoyon-karnafuli.org//web/forms/permanenet_recident_certificate.php?";
  } else if (selectedOption === "চারিত্রিক সনদ") {
    url = "https://prottoyon-karnafuli.org//web/forms/character_certificate.php?";
  } else if (selectedOption === "নাগরিক সনদ(ইংরেজি") {
    url = "https://prottoyon-karnafuli.org//web/forms/citizenship_certificate_en.php?";
  } else if (selectedOption === "ওয়ারিশ সনদ(ইংরেজি)") {
    url = "https://prottoyon-karnafuli.org//web/forms/Inheritance_certififcate_en.php?";
  } else if (selectedOption === "প্রত্যয়ন") {
    url = "https://prottoyon-karnafuli.org//web/forms/attestation.php?";
  } else if (selectedOption === "বিবিধ প্রত্যয়ন") {
    url = "https://prottoyon-karnafuli.org//web/forms/attestation_other.php?";
  } else if (selectedOption === "অবিবাহীত সনদপত্র") {
    url = "https://prottoyon-karnafuli.org//web/forms/unmarried_certificate.php?";
  } else if (selectedOption === "পারিবারিক সনদপত্র") {
    url = "https://prottoyon-karnafuli.org//web/forms/family_certififcate.php?";
  } else if (selectedOption === "অবিবাহীত সনদপত্র (ইংরেজী)") {
    url = "https://prottoyon-karnafuli.org//web/forms/unmarried_certificate.php?";
  } else if (selectedOption === "বিবাহিত সনদপত্র") {
    url = "https://prottoyon-karnafuli.org//web/forms/married_certificate.php?";
  } else if (selectedOption === "প্রত্যয়ন (ইংরেজী)") {
    url = "https://prottoyon-karnafuli.org//web/forms/attestation_en.php?";
  } else if (selectedOption === "মৃত্যুর প্রত্যয়নপত্র") {
    url = "https://prottoyon-karnafuli.org//web/forms/death_certificate.php?";
  } else if (selectedOption === "ট্রেড লাইসেন্স") {
    url = "https://prottoyon-karnafuli.org/web/forms/tread_license.php?";
  } 
    else {
    // Handle other options if needed
    alert(" হালনাগাদের কাজ চলছে..... ");
    return;
  }

  // Open the URL in a new tab
  var printTab =  window.open(url, "_blank");
  if (!printTab) {
    alert("Popup blocked! Please allow popups to print the document.");
  }
}

// Create a button for printing
var printButton = document.createElement("button");
printButton.textContent = "প্রিন্ট";
printButton.setAttribute("id", "printButton"); // Set id for printing button
printButton.classList.add('btn');
printButton.classList.add('btn-warning');
printButton.addEventListener("click", printDocument);
selectElement.parentNode.insertBefore(printButton, selectElement.nextSibling);


// Create a button for Application
var applicationButton = document.createElement("button");
applicationButton.textContent = "আবেদন";
applicationButton.setAttribute("id", "applicationButton"); 
applicationButton.classList.add('btn');
applicationButton.classList.add('btn-success');
applicationButton.style.marginRight = "3px";
applicationButton.addEventListener("click", applicationFunction);
printButton.parentNode.insertBefore(applicationButton, selectElement.nextSibling);

// -----------------------
var inputnumber = document.getElementById("variableInput");
inputnumber.classList.add('form-control');
inputnumber.style.setProperty("width", "15%", "important");
inputnumber.style.marginRight = "3px";

var selectElement = document.getElementById("selectElement");
selectElement.classList.add('form-control');
selectElement.style.setProperty("width", "15%", "important");
selectElement.style.marginRight = "3px";
  
}


 });