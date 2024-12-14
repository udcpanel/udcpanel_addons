//document.addEventListener('DOMContentLoaded', function() {


    // Create the new div element for prottoyon_subject
    const prottoyonDiv = document.createElement('div');
    prottoyonDiv.className = 'col-sm-3 form-group';

    // Create and append the label for prottoyon_subject
    const prottoyonLabel = document.createElement('label');
    prottoyonLabel.textContent = 'প্রত্যয়ন বিষয়';
    prottoyonDiv.appendChild(prottoyonLabel);

    // Create and append the select element for prottoyon_subject
    const prottoyonSelect = document.createElement('select');
    prottoyonSelect.className = 'form-control';
    prottoyonSelect.required = true;
    prottoyonSelect.name = 'prottoyon_subject';

    // Create and append the option elements for prottoyon_subject
    const prottoyonOptions = [
        { value: '', text: '----' },
        { value: '1', text: 'নতুন ভোটার হালনাগাদ প্রত্যয়ন' },
        { value: '2', text: 'ভোটার সংশোধন প্রত্যয়ন' },
        { value: '3', text: 'ভোটার হস্থান্তর প্রত্যয়ন' },
        { value: '4', text: 'বাষিক আয় প্রত্যয়ন' }
    ];

    prottoyonOptions.forEach(optionData => {
        const option = document.createElement('option');
        option.value = optionData.value;
        option.textContent = optionData.text;
        prottoyonSelect.appendChild(option);
    });

    prottoyonDiv.appendChild(prottoyonSelect);

    // Create the new div element for investigator
    const investigatorDiv = document.createElement('div');
    investigatorDiv.className = 'col-sm-3 form-group';

    // Create and append the label for investigator
    const investigatorLabel = document.createElement('label');
    investigatorLabel.textContent = 'তদন্তকারী';
    investigatorDiv.appendChild(investigatorLabel);

    // Create and append the select element for investigator
    const investigatorSelect = document.createElement('select');
    investigatorSelect.className = 'form-control';
    investigatorSelect.required = true;


    // Create and append the option elements for investigator
    const investigatorOptions = [
        { value: '', text: '----', ward: '' },
        { value: 'মোহাম্মদ ইদ্রিস বাবুল', text: 'মোহাম্মদ ইদ্রিস বাবুল', ward: '১' },
        { value: 'আজাদ আহমদ', text: 'আজাদ আহমদ', ward: '২' },
        { value: 'মোঃ আলমগীর', text: 'মোঃ আলমগীর', ward: '৩' },
        { value: 'মোঃ আবু তালেব', text: 'মোঃ আবু তালেব', ward: '৪' },
        { value: 'মোঃ আসাদুজ্জামান কায়সার', text: 'মোঃ আসাদুজ্জামান কায়সার', ward: '৫' },
        { value: 'মোঃ নুরুল ইসলাম', text: 'মোঃ নুরুল ইসলাম', ward: '৬' },
        { value: 'মোঃ রফিক', text: 'মোঃ রফিক', ward: '৭' },
        { value: 'আব্দুল্লাহ আল মামুন', text: 'আব্দুল্লাহ আল মামুন', ward: '৮' },
        { value: 'মোঃ জাহাঙ্গীর আলম', text: 'মোঃ জাহাঙ্গীর আলম', ward: '৯' },
        { value: 'রেহেনা আকতার আঁখি', text: 'রেহেনা আকতার আঁখি', ward: '১,২,৩' },
        { value: 'খুরশিদা বেগম', text: 'খুরশিদা বেগম', ward: '৪,৫,৬' },
        { value: 'কোহিনুর আকতার', text: 'কোহিনুর আকতার', ward: '৭,৮,৯'},
        { value: 'চেয়ারম্যান', text: 'চেয়ারম্যান', ward: ''}
    ];



    investigatorOptions.forEach(optionData => {
        const option = document.createElement('option');
        option.value = optionData.text;
        option.textContent = optionData.text;
        investigatorSelect.appendChild(option);
    });

    investigatorDiv.appendChild(investigatorSelect);

    // Find the target element with name="attestation"
    const targetElement = document.querySelector('[name="attestation"]');
    targetElement.style.height = '130px';
    targetElement.style.fontSize = '16px';
    targetElement.style.lineHeight = '30px !important';

    // Insert the prottoyon_subject div before the target element's parent div
    if (targetElement) {
        const parentDiv = targetElement.parentNode;
        parentDiv.parentNode.insertBefore(prottoyonDiv, parentDiv);
        parentDiv.parentNode.insertBefore(investigatorDiv, parentDiv);
    } else {
        console.error('Element with name="attestation" not found.');
    }

   // Add an event listener to the investigator select element
investigatorSelect.addEventListener('change', function() {
    const textarea = document.querySelector('[name="attestation"]');
    const selectedInvestigator = investigatorSelect.value;
    const selectedProttoyon = prottoyonSelect.value;




    var investigatorward = '';

    if (investigatorSelect.value == 'মোহাম্মদ ইদ্রিস বাবুল') {
        investigatorward = '১';
    }else if (investigatorSelect.value == 'আজাদ আহমদ') {
        investigatorward = '২';
    }else if (investigatorSelect.value == "মোঃ আলমগীর" ) {
        investigatorward = '৩';
    }else if (investigatorSelect.value == "মোঃ আবু তালেব") {
        investigatorward = '৪';
    }else if (investigatorSelect.value == "মোঃ আসাদুজ্জামান কায়সার") {
        investigatorward = '৫';
    }else if (investigatorSelect.value == "মোঃ নুরুল ইসলাম") {
        investigatorward = '৬';
    }else if (investigatorSelect.value == "মোঃ রফিক") {
        investigatorward = '৭';
    }else if (investigatorSelect.value == "আব্দুল্লাহ আল মামুন") {
        investigatorward = '৮';
    }else if (investigatorSelect.value == "মোঃ জাহাঙ্গীর আলম") {
        investigatorward = '৯';
    }else if (investigatorSelect.value == "রেহেনা আকতার আঁখি") {
        investigatorward = '১,২,৩';
    }else if (investigatorSelect.value == "খুরশিদা বেগম") {
        investigatorward = '৪,৫,৬';
    }else if (investigatorSelect.value == "কোহিনুর আকতার") {
        investigatorward = '৭,৮,৯';
    }else{
        investigatorward = 'ward not selected';
    }


    if (textarea) {

        let additionalText = '';

        if ((selectedProttoyon === '1') && (investigatorSelect.value !== 'চেয়ারম্যান') && (investigatorSelect.value !== 'রেহেনা আকতার আঁখি') && (investigatorSelect.value !== 'খুরশিদা বেগম') && (investigatorSelect.value !== 'কোহিনুর আকতার')) {

            additionalText = 'স্থানীয় ' + investigatorward + 'নং ওয়ার্ডের ইউপি সদস্য জনাব ' + selectedInvestigator + ' এর তথ্যমতে তিনি এখনো ভোটার হয়নি, তাহাকে নতুন করে ভোটার করানোর জন্য সুপারিশ করা হইল।';
        }else if ((selectedProttoyon === '1') && (investigatorSelect.value == 'রেহেনা আকতার আঁখি' || investigatorSelect.value == 'খুরশিদা বেগম' || investigatorSelect.value == 'কোহিনুর আকতার')) {
            additionalText = 'স্থানীয় ' + investigatorward + 'নং ওয়ার্ডের ইউপি সদস্যা জনাবা ' + selectedInvestigator + ' এর তথ্যমতে তিনি এখনো ভোটার হয়নি, তাহাকে নতুন করে ভোটার করানোর জন্য সুপারিশ করা হইল।';
        }else if((selectedProttoyon === '1') && (investigatorSelect.value == 'চেয়ারম্যান')){
            additionalText = 'আমার জানামতে তিনি এখনো ভোটার হয়নি, তাহাকে নতুন করে ভোটার করানোর জন্য সুপারিশ করা হইল।';
        }else if ((selectedProttoyon === '2') && (investigatorSelect.value !== 'চেয়ারম্যান') && (investigatorSelect.value !== 'রেহেনা আকতার আঁখি') && (investigatorSelect.value !== 'খুরশিদা বেগম') && (investigatorSelect.value !== 'কোহিনুর আকতার')) {
            additionalText = 'স্থানীয় ' + investigatorward + 'নং ওয়ার্ডের ইউপি সদস্য জনাব ' + selectedInvestigator + ' এর তথ্যমতে তাহার আইডি কার্ডে ভূলবশত তাহার নাম (বাংলায়) ***** ও তাহার নাম (ইংরেজীতে) ****** এবং তাহার পিতার নাম ********* এবং তাহার মাতার নাম ********** লিপিবদ্ধ হয়, তাহার *****  প্রকৃত নাম ****** ।';
        }else if ((selectedProttoyon === '2') && (investigatorSelect.value == 'রেহেনা আকতার আঁখি' || investigatorSelect.value == 'খুরশিদা বেগম' || investigatorSelect.value == 'কোহিনুর আকতার')) {
            additionalText = 'স্থানীয় ' + investigatorward + 'নং ওয়ার্ডের ইউপি সদস্যা জনাবা ' + selectedInvestigator + ' এর তথ্যমতে তাহার আইডি কার্ডে ভূলবশত তাহার নাম (বাংলায়) ***** ও তাহার নাম (ইংরেজীতে) ****** এবং তাহার পিতার নাম ********* এবং তাহার মাতার নাম ********** লিপিবদ্ধ হয়, তাহার *****  প্রকৃত নাম ****** ।';
        }else if ((selectedProttoyon === '2') && (investigatorSelect.value == 'চেয়ারম্যান')) {
            additionalText = 'আমার জানামতে তাহার আইডি কার্ডে ভূলবশত তাহার নাম (বাংলায়) ***** ও তাহার নাম (ইংরেজীতে) ****** এবং তাহার পিতার নাম ********* এবং তাহার মাতার নাম ********** লিপিবদ্ধ হয়, তাহার *****  প্রকৃত নাম ****** ।';
        }

        else if ((selectedProttoyon === '3') && (investigatorSelect.value !== 'চেয়ারম্যান') && (investigatorSelect.value !== 'রেহেনা আকতার আঁখি') && (investigatorSelect.value !== 'খুরশিদা বেগম') && (investigatorSelect.value !== 'কোহিনুর আকতার')) {

            additionalText = 'স্থানীয় ' + investigatorward + 'নং ওয়ার্ডের ইউপি সদস্য জনাব ' + selectedInvestigator + ' এর তথ্যমতে তাহাকে অত্র ইউনিয়নের ' + investigatorward + 'নং ওয়ার্ডে ভোটার হস্থান্তর করানোর জন্য সুপারিশ করা হইল ।';
        }

        else if ((selectedProttoyon === '3') && (investigatorSelect.value !== 'চেয়ারম্যান') && (investigatorSelect.value !== 'রেহেনা আকতার আঁখি') && (investigatorSelect.value !== 'খুরশিদা বেগম') && (investigatorSelect.value !== 'কোহিনুর আকতার')) {

            additionalText = 'স্থানীয় ' + investigatorward + 'নং ওয়ার্ডের ইউপি সদস্য জনাব ' + selectedInvestigator + ' এর তথ্যমতে তাহাকে অত্র ইউনিয়নের ' + investigatorward + 'নং ওয়ার্ডে ভোটার হস্থান্তর করানোর জন্য সুপারিশ করা হইল ।';
        }

        else if ((selectedProttoyon === '3') && (investigatorSelect.value == 'রেহেনা আকতার আঁখি' || investigatorSelect.value == 'খুরশিদা বেগম' || investigatorSelect.value == 'কোহিনুর আকতার')) {

            additionalText = 'স্থানীয় ' + investigatorward + 'নং ওয়ার্ডের ইউপি সদস্যা জনাবা ' + selectedInvestigator + ' এর তথ্যমতে তাহাকে অত্র ইউনিয়নের *******নং ওয়ার্ডে ভোটার হস্থান্তর করানোর জন্য সুপারিশ করা হইল ।';
        }

        else if ((selectedProttoyon === '3') && (investigatorSelect.value == 'চেয়ারম্যান')) {

            additionalText = 'তাহাকে অত্র ইউনিয়নের *******নং ওয়ার্ডে ভোটার হস্থান্তর করানোর জন্য সুপারিশ করা হইল ।';
        }
        
        else if ((selectedProttoyon === '4')) {

            additionalText = 'তাহার পরিবারের বার্ষিক আয় ****** (*******) টাকা।';
        }

        textarea.value = additionalText;
    } else {
        console.error('Textarea with name="attestation" not found.');
    }


});




// });
