document.addEventListener("input", function (e) {
    if (e.target.name === "dob[]") {
      const dobInput = e.target.value.trim();
      const productRows = document.querySelectorAll("#product .row");
  
      productRows.forEach((row) => {
        const dobField = row.querySelector("input[name='dob[]']");
        const inheritanceNidField = row.querySelector("input[name='inheritance_nid[]']");
        const ageField = row.querySelector("input[name='age[]']");
  
        if (dobField === e.target) {
          if (inheritanceNidField.value === "-") {
            // If NID is "-", show "মৃত্যু তারিখ - " but allow editing
            if (!dobInput) {
              dobField.value = "মৃত্যু তারিখ - "; // Set to "মৃত্যু তারিখ - " if empty
              ageField.value = "-"; // Set age to "-" if NID is "-"
            }
          } else {
            // Regular DOB calculation logic
            if (!dobInput) {
              ageField.value = ""; // Blank if DOB is empty
            } else if (dobInput === "-") {
              ageField.value = "-"; // Set age to "-" if DOB is "-"
            } else {
              const normalizedDob = dobInput.replace(/[-/]/g, "/");
              const [day, month, year] = normalizedDob.split("/");
  
              const dob = new Date(`${year}-${month}-${day}`);
  
              if (dob.toString() === "Invalid Date") {
                ageField.value = ""; // Blank if invalid date
              } else {
                const today = new Date();
                let age = today.getFullYear() - dob.getFullYear();
                const monthDiff = today.getMonth() - dob.getMonth();
  
                if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
                  age--;
                }
  
                ageField.value = age < 1 ? "0+" : age; // Show 0+ if under 1
              }
            }
          }
        }
      });
    }
  
    // Handling inheritance_nid and comment
    if (e.target.name === "inheritance_nid[]") {
      const nidInput = e.target.value.trim();
      const productRows = document.querySelectorAll("#product .row");
  
      productRows.forEach((row) => {
        const nidField = row.querySelector("input[name='inheritance_nid[]']");
        const dobField = row.querySelector("input[name='dob[]']");
        const commentField = row.querySelector("input[name='comment[]']");
        const ageField = row.querySelector("input[name='age[]']");
  
        if (nidField === e.target) {
          // Handle the comment field
          if (!nidInput) {
            commentField.value = ""; // Blank if NID is empty
          } else if (nidInput === "-") {
            commentField.value = "এন.আইডি/জন্ম নিবন্ধন হওয়ার পূর্বে মৃত্যুবরণ করেন"; // Set comment if NID is "-"
          }
  
          // Set DOB field to "মৃত্যু তারিখ - " and age to "-" if NID is "-"
          if (nidInput === "-") {
            dobField.value = "মৃত্যু তারিখ - "; // Set DOB to "মৃত্যু তারিখ - "
            ageField.value = "-"; // Set age to "-" if NID is "-"
          } else {
            dobField.value = ""; // Clear DOB if NID is not "-"
            ageField.value = ""; // Clear age if NID is not "-"
          }
        }
      });
    }
  });
  