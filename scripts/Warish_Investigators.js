
/////////////////////////////////////////////////////////////////////////////////////
// Get the 4th table on the page
var table = document.getElementsByTagName("table")[3];

// Get the first td element of the 4th table
var td = table.getElementsByTagName("td")[0];

// Get the 9th div on the page
var div = document.getElementsByTagName("div")[8];

// A function to show the prompts and override the values
function showPrompts() {

  // var word_of_member = prompt("তদন্তকারী মেম্বারের ওয়ার্ড নং");
/////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////
  let word_of_member;
  const validWards = ["১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯", "১২৩", "৪৫৬", "৭৮৯", "1", "2", "3", "4", "5", "6", "7", "8", "9", "123", "456", "789"];
  
  while (true) {
    word_of_member = prompt("তদন্তকারী মেম্বারের ওয়ার্ড নং:");
  
    if (word_of_member === null || word_of_member === "" || word_of_member ==! validWards ) {
      alert("ওয়ার্ড নং সঠিক নয়");    
    } else if (!validWards.includes(word_of_member)) {
      console.log("Input should match one of the specified conditions. Please try again.");
    } else {
      break; // Exit the loop when the input is valid
    }
  }
/////////////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////////////
  // var member_name = prompt("মেম্বার নাম");
  var member_name;

  if (word_of_member == "১" || word_of_member == "1") {
    member_name = 'মোহাম্মদ ইদ্রিস বাবুল';
    word_of_member = "১";
  }else if (word_of_member == "২" || word_of_member == "2") {
    member_name = 'আজাদ আহমদ';
    word_of_member = "২";
  }else if (word_of_member == "৩" || word_of_member == "3") {
    member_name = 'মোঃ আলমগীর';
    word_of_member = "৩";
  }else if ((word_of_member == "৪") || (word_of_member == "4")) {
    member_name = 'মোঃ আবু তালেব';
    word_of_member = "৪";
  }else if ((word_of_member == "৫") || (word_of_member == "5")) {
    member_name = 'মোঃ আসাদুজ্জামান কায়ছার';
    word_of_member = "৫";
  }else if ((word_of_member == "৬") || (word_of_member == "6")) {
    member_name = 'মোঃ নুরুল ইসলাম';
    word_of_member = "৬";
  }else if ((word_of_member == "৭") || (word_of_member == "7")) {
    member_name = 'মোঃ রফিক';
    word_of_member = "৭";
  }else if ((word_of_member == "৮") || (word_of_member == "8")) {
    member_name = 'আব্দুল্লাহ আল মামুন';
    word_of_member = "৮";
  }else if ((word_of_member == "৯") || (word_of_member == "9")) {
    member_name = 'জাহাঙ্গীর আলম';
    word_of_member = "৯";
  }else if ((word_of_member == "১২৩") || (word_of_member == "123")) {
    member_name = 'রেহেনা আকতার আঁখি';
    word_of_member = '১,২,৩';
  }else if ((word_of_member == "৪,৫,৬") || (word_of_member == "456")) {
    member_name = 'খুরশিদা বেগম';
    word_of_member = '৪,৫,৬';
  }else if ((word_of_member == "৭,৮,৯") || (word_of_member == "789")) {
    member_name = 'কোহিনুর আক্তার';
    word_of_member = '৭,৮,৯';
  }else {
    member_name = '';
  }
/////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////

  // var applicantName = prompt("আবেদনকারীর নাম");
  while (true) {
    applicantName = prompt("আবেদনকারীর নাম:");
  
    if (applicantName === null || applicantName === "") {
      alert("আবেদনকরীর নাম খালি রাখা যাবেনা");    
    } else {
      break; // Exit the loop when the input is valid
    }
  }

/////////////////////////////////////////////////////////////////////////////////////
  // var fatherorspouse = prompt( "" + applicantName + " এর পিতার/স্বামীর নাম");
  while (true) {
    fatherorspouse = prompt( "" + applicantName + " এর পিতার/স্বামীর নাম");;
  
    if (fatherorspouse === null || fatherorspouse === "") {
      alert("আবেদনকরীর পিতার নাম খালি রাখা যাবেনা");    
    } else {
      break; // Exit the loop when the input is valid
    }
  }
/////////////////////////////////////////////////////////////////////////////////////

  var applicantNidorbrn = prompt("" + applicantName + " এর আইডি/জন্ম নিবন্ধন নং");

/////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////Manupulate_Bass_On_Member///////////////////////////////////
  div.innerHTML = "<p style='margin-top: -15px; font-size:18px;line-height: 30px;'>স্থানীয় " + word_of_member + "নং ওয়ার্ডের ইউপি সদস্য <strong>"+ member_name + "</strong> এর তদন্ত ও সুপারিশক্রমে উক্ত ওয়ারিশ সনদ প্রদান করা হইল। যদি কোন ওয়ারিশ গোপন করা হয় তাহলে অত্র ওয়ারিশ সনদ বাতিল বলিয়া গন্য হইবে। উপরোক্ত ওয়ারিশগণ ছাড়া তাহার আর কোন ওয়ারিশ নাই। </p><p style='font-size:18px;line-height: 25px;'>বিঃদ্রঃ আবেদনকারীঃ <strong> " + applicantName + "</strong>, <select style='font-size:15px;line-height: 25px; border:0px solid black; -webkit-appearance: none; -moz-appearance: none; appearance: none; background-color: #fff0;'><option>পিতাঃ</option><option>স্বামীঃ</option></select> " + fatherorspouse + ", <select style='font-size:15px;line-height: 25px; border:0px solid black; -webkit-appearance: none; -moz-appearance: none; appearance: none; background-color: #fff0;'><option width='100%'>আইডি নং- "+ applicantNidorbrn +"</option><option>জন্ম নিবন্ধন নং-"+ applicantNidorbrn +"</option></select> । </p><p style='font-size:18px;line-height: 25px;'>উপরোক্ত ওয়ারিশ সনদ সংক্রান্ত কোন অভিযোগ ওয়ারিশ গোপন বা কোন ধরণের সত্য গোপন করে তাহলে আবেদনকারীর বিরুদ্ধে আইনানুগ ব্যবস্থা নেওয়া হবে।  </p>";

  // td.innerHTML = '<td style="font-size:18px;line-height: 20px;" width="33%" align="center" valign="bottom" nowrap=""> তদন্তকারী <br><br><br><br><strong>ইউপি সদস্য</strong><br>ওয়ার্ড-(' + word_of_member + ') , ৩নং শিকলবাহা ইউনিয়ন পরিষদ<br>কর্ণফুলী উপজেলা, চট্টগ্রাম </td>';
/////////////////////////////////////////////////////////////////////////////////////






//////////////////////////////Alert_With_Success///////////////////////////////////////////////
function showTimedAlert(message, duration) {
  const previousAlert = window.alert; // Store the reference to the original alert function

  // Override the default alert function with a custom one
  window.alert = function(msg) {
    const alertBox = document.createElement('div');
    alertBox.textContent = msg;
    alertBox.style.position = 'fixed';
    alertBox.style.top = '14%';
    alertBox.style.left = '50%';
    alertBox.style.transform = 'translateX(-50%)';
    alertBox.style.padding = '10px';    
    alertBox.style.color = 'white';
    alertBox.style.backgroundColor = 'green';
    alertBox.style.border = '1px solid gray';
    alertBox.style.borderRadius = '5px';
    alertBox.style.zIndex = '9999';

    document.body.appendChild(alertBox);

    setTimeout(function() {
      document.body.removeChild(alertBox);
    }, duration);
  };

  // Show the timed alert
  alert(message);

  // Restore the original alert function
  window.alert = previousAlert;
}

// Usage example
showTimedAlert(" \u2713 ওয়ারিশ সনদে তদন্তকারীর নাম ও আবেদনকারীর নাম সফল ভাবে যুক্ত হয়েছে! ধন্যবাদ।", 3000); // Display the alert for 3 seconds (3000 milliseconds)
/////////////////////////////////////////////////////////////////////////////////////



}


// Show the prompts when the page is loaded
window.onload = showPrompts;

