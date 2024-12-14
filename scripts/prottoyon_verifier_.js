
/////////////////////////////////////////////////////////////////////////////////////
// Get the 4th table on the page
var table = document.getElementsByTagName("table")[3];

// Get the first td element of the 4th table
var td = table.getElementsByTagName("td")[0];

// Get the 9th div on the page
// var div = document.getElementsByTagName("div")[8];




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




  td.innerHTML = '<td style="font-size:18px;line-height: 20px;" width="33%" align="center" valign="bottom" nowrap=""> যাচায়কারী <br><br><br><br><strong>ইউপি সদস্য</strong><br>ওয়ার্ড-(' + word_of_member + ') , ৩নং শিকলবাহা ইউনিয়ন পরিষদ<br>কর্ণফুলী উপজেলা, চট্টগ্রাম </td>';
/////////////////////////////////////////////////////////////////////////////////////
