document.addEventListener("contextmenu", function(event) {
  // Allow right-click
  event.stopPropagation();
}, true);

document.addEventListener("mousedown", function(event) {
  // Allow text selection on right mouse button click or double-click
  if (event.button === 2 || event.detail === 2) {
    document.body.style.userSelect = "text";
  }
});

document.addEventListener("keydown", function(event) {
  // Allow text selection when Ctrl or Command key is pressed
  if (event.key === "Control" || event.key === "Meta") {
    document.body.style.userSelect = "text";
  }
});

document.addEventListener("copy", function(event) {
  // Allow the copy event to proceed
  event.stopPropagation();
}, true);

document.addEventListener("mouseup", function() {
  // Reset userSelect style after mouseup
  document.body.style.userSelect = "";

  // Remove oncopy and onpaste attributes from the element with id "ubrn"
  var ubrnElement = document.getElementById("ubrn");
  if (ubrnElement) {
    ubrnElement.removeAttribute("oncopy");
    ubrnElement.removeAttribute("onpaste");
  }
});
