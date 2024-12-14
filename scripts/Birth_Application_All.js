// document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM content to be fully loaded

  // Find the element with the class "delete"
  var deleteButton = document.querySelector('.delete');

  if (deleteButton) {
      // Create a new button element
      var extraButton = document.createElement('button');
      

      // Set the button's text and attributes as needed
      extraButton.textContent = 'Upload Large File';
      extraButton.classList.add('btn');
      extraButton.classList.add('btn-success');
      

      // Insert the new button after the element with the class "delete"
      deleteButton.parentNode.insertBefore(extraButton,deleteButton.nextSibling);

      extraButton.style.marginLeft = "4px" ;

      // Add click event listener to the extra button
      extraButton.addEventListener('click', function (event) {
          // Prevent the default form submission behavior
          event.preventDefault();

            extraButton.textContent = 'Upload Large File...' ;

          setTimeout(() => {
            extraButton.textContent = 'Upload Large File';
          }, 1000);


          // Remove the 'disabled' attribute from buttons with the class "start"
          var startButtons = document.querySelectorAll('.start');
          startButtons.forEach(function (startButton) {
              startButton.removeAttribute('disabled');
          });
      });
  }


//===================================================================================

    // Find the element with the class "delete"
    var add_more_correction = document.querySelector('#add-more-correction-info-btn');

    if (add_more_correction) {
        // Create a new button element
        var All_Info_Correction = document.createElement('button');
        
  
        // Set the button's text and attributes as needed
        All_Info_Correction.textContent = 'সকল বিষয় সংশোধন (বেসিক)';
        All_Info_Correction.classList.add('btn');
        All_Info_Correction.classList.add('btn-warning');
        
  
        // Insert the new button after the element with the class "delete"
        add_more_correction.parentNode.insertBefore(All_Info_Correction,add_more_correction.nextSibling);
  
        All_Info_Correction.style.marginLeft = "4px" ;
  
        // Add click event listener to the extra button
        All_Info_Correction.addEventListener('click', function (event) {
            // Prevent the default form submission behavior
            event.preventDefault();
  
              All_Info_Correction.textContent = 'সকল বিষয় সংশোধন (বেসিক)...' ;
  
            setTimeout(() => {
              All_Info_Correction.textContent = 'সকল বিষয় সংশোধন (বেসিক)';
            }, 1000);

          // Simulate clicking the button with the ID 'add-more-correction-info-btn' six times
        for (let i = 0; i < 6; i++) {
          var addButton = document.getElementById('add-more-correction-info-btn');
          
          if (addButton) {
            addButton.click();
          } else {
            console.error("Button not found!");
          }
        }


        });
        
    }


    ///===============================================================================
     // Find the element with the class "delete"
     var add_more = document.querySelector('#add-more-correction-info-btn');

     if (add_more) {
         // Create a new button element
         var Auto_Select_Options_btn = document.createElement('button');
         
   
         // Set the button's text and attributes as needed
         Auto_Select_Options_btn.textContent = 'সংশোধন বিষয় নির্বাচন (auto)';
         Auto_Select_Options_btn.classList.add('btn');
         Auto_Select_Options_btn.classList.add('btn-success');
         
   
         // Insert the new button after the element with the class "delete"
         add_more.parentNode.insertBefore(Auto_Select_Options_btn,add_more.nextSibling);
   
         Auto_Select_Options_btn.style.marginLeft = "4px" ;
   
         // Add click event listener to the extra button
         Auto_Select_Options_btn.addEventListener('click', function (event) {
             // Prevent the default form submission behavior
             event.preventDefault();
   
             Auto_Select_Options_btn.textContent = 'সংশোধন বিষয় নির্বাচন (auto)...' ;
   
             setTimeout(() => {
              Auto_Select_Options_btn.textContent = 'সংশোধন বিষয় নির্বাচন (auto)';
             }, 1000);

                    
                       
              // Select options in the newly created dropdowns
              var dropdowns = document.querySelectorAll('.birthInfoKey');
              
              dropdowns.forEach(function(dropdown, index) {
                var optionValue;
                
                // Define the option value based on the specified conditions
                switch (index) {
                  case 0:
                    optionValue = "personNameBn";
                    break;
                  case 1:
                    optionValue = "personNameEn";
                    break;
                  case 2:
                    optionValue = "fatherNameBn";
                    break;
                  case 3:
                    optionValue = "fatherNameEn";
                    break;
                  case 4:
                    optionValue = "motherNameBn";
                    break;
                  case 5:
                    optionValue = "motherNameEn";
                    break;
                  default:
                    optionValue = ""; // Set a default value if needed
                }
                
                // Select the specified option by value
                var option = Array.from(dropdown.options).find(option => option.value === optionValue);
                if (option) {
                  option.selected = true;
                  
                  // Trigger the event listener callback directly
                  var changeEvent = new Event('change', { bubbles: true });
                  dropdown.dispatchEvent(changeEvent);
                }


              });
                   
         });
 

         
     }


// });
