var div = document.getElementsByTagName("div")[9];


// Get the 4th table on the page
var table = document.getElementsByTagName("table")[3];

// Get the first td element of the 4th table
var td = table.getElementsByTagName("td")[0];


function showPrompts() {

  // var inputValue1 = prompt(" মেম্বার ওয়ার্ড নং ");

  var inputValue11 = prompt("প্রথম স্বাক্ষীর নাম");

  var inputValue12 = prompt("প্রথম স্বাক্ষীর পিতার নাম");

  var inputValue13 = prompt("প্রথম স্বাক্ষীর আইডি/জন্ম নিবন্ধন নং");

  // -----------------------------------------------

  var inputValue21 = prompt("দ্বিতীয় স্বাক্ষীর নাম");

  var inputValue22 = prompt("দ্বিতীয় স্বাক্ষীর পিতার নাম");

  var inputValue23 = prompt("দ্বিতীয় স্বাক্ষীর আইডি/জন্ম নিবন্ধন নং");

    // -----------------------------------------------

  var inputValue31 = prompt("তৃতীয় স্বাক্ষীর নাম");

  var inputValue32 = prompt("তৃতীয় স্বাক্ষীর পিতার নাম");

  var inputValue33 = prompt("তৃতীয় স্বাক্ষীর আইডি/জন্ম নিবন্ধন নং");



div.style.fontWeight = "200";



// td.innerHTML = '<td width="33%" align="center" valign="bottom" nowrap=""> তদন্তকারী <br><br><br><br><strong>ইউপি সদস্য</strong><br>ওয়ার্ড-' + inputValue1 + ', ৩নং শিকলবাহা ইউনিয়ন পরিষদ<br>কর্ণফুলী উপজেলা, চট্টগ্রাম </td>';


div.innerHTML = '<div style="text-indent: 5%; font-weight:bold;  padding:8px; ">আমি  মৃত  ব্যক্তির বিদেহী আত্নার শান্তি কামনা করি এবং শোকাহত পরিবারের  সদস্যদের প্রতি সমবেদনা জ্ঞাপন করছি।   </div> <div><p style="font-size: 17px; font-weight: bold; margin-bottom: 0px;"><strong> স্বাক্ষীগনের নাম ও স্বাক্ষরঃ- </strong></p><table class="RFtable" width="100%" cellpadding="0" border="1"> <tbody><tr> <th scope="col" width="5%" height="12px">ক্রম</th> <th scope="col" width="25%" height="8px">স্বাক্ষীগনের নাম </th> <th scope="col" width="25%" height="12px">স্বাক্ষীগনের পিতার নাম</th> <th scope="col" width="25%" height="12px">আইডি/জন্ম নিবন্ধন নং</th> <th scope="col" width="20%" height="12px">স্বাক্ষর</th> </tr> <tr> <td style="font-family:SutonnyMJ;" align="center" height="12px">1</td> <td ‍style="padding-top: 6px; padding-bottom: 6px;" align="left" height="12px"><strong>'+inputValue11+'</strong></td> <td style="padding-top: 6px; padding-bottom: 6px;"height="18px">'+inputValue12+'</td> <td style="padding-top: 6px; padding-bottom: 6px;"height="18px">'+inputValue13+'</td> <td style="padding-top: 6px; padding-bottom: 6px;"height="18px"> </td> </tr> </tr> <tr> <td style="font-family:SutonnyMJ;" align="center" height="12px">2</td> <td style="padding-top: 6px; padding-bottom: 6px;" align="left" height="12px"><strong>'+inputValue21+'</strong></td> <td style="padding-top: 6px; padding-bottom: 6px;" height="18px">'+inputValue22+'</td> <td style="padding-top: 6px; padding-bottom: 6px;" height="18px">'+inputValue23+'</td> <td style="padding-top: 6px; padding-bottom: 6px;" height="18px"> </td> </tr> </tr> <tr> <td style="font-family:SutonnyMJ;" align="center" height="12px">3</td> <td style="padding-top: 6px; padding-bottom: 6px;" align="left" height="12px"><strong>'+inputValue31+'</strong></td> <td style="padding-top: 6px; padding-bottom: 6px;" height="18px">'+inputValue32+'</td> <td style="padding-top: 6px; padding-bottom: 6px;" height="18px">'+inputValue33+'</td> <td style="padding-top: 6px; padding-bottom: 6px;" height="18px"> </td> </tr> </tbody></table> </div> ' ;






}

// Show the prompts when the page is loaded
window.onload = showPrompts;
