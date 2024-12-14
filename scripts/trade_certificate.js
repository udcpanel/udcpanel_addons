document.querySelectorAll('table').forEach((table) => {
  // Update content in the 10th row
  let targetRow = table.querySelectorAll('tr')[9];
  if (targetRow) {
    let targetCell = targetRow.querySelectorAll('td')[2];
    if (targetCell) {
      let strongTag = targetCell.querySelector('strong');
      if (strongTag) {
        strongTag.textContent = "(২০২৪-২০২৫)";
      }
    }
  }

  // Update content in the 11th row and retrieve strongTag content
  let cng_strongTag = '';
  let targetRow1 = table.querySelectorAll('tr')[10];
  if (targetRow1) {
    let targetCell = targetRow1.querySelectorAll('td')[2];
    if (targetCell) {
      let strongTag = targetCell.querySelector('strong');
      if (strongTag) {
        strongTag.textContent = "৩০/০৬/২০২৫";
        cng_strongTag = strongTag.textContent; // Store the content for later use
      }
    }
  }

  // Hide the 14th row
  let targetRow3 = table.querySelectorAll('tr')[13];
  if (targetRow3) {
    targetRow3.style.display = "none";

    // Assign content to cng_strongTag from tr[13]
    let targetCell = targetRow3.querySelectorAll('td')[2];
    if (targetCell) {
      let strongTag = targetCell.querySelector('strong');
      if (strongTag) {
        cng_strongTag = strongTag.textContent;
      }
    }
  }

  // Add an extra row after the 14th row
  let targetRow4 = table.querySelectorAll('tr')[14];
  if (targetRow4) {
    // Create a new row element
    let newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td align="left" nowrap=""><label>১৫% ভ্যাট</label></td>
      <td align="center"><strong>: </strong></td>
      <td colspan="2" align="left"><div class="snbn"><strong>${cng_strongTag}</strong></div></td>
    `;
    // Insert the new row after the target row
    targetRow4.parentNode.insertBefore(newRow, targetRow4.nextSibling);
  }
});
