$(document).ready(function() {
    initFormFieldFocus();
    initPassportNumberMask();
    initTypeahead();
    toggleWhyAreYouAskingForMyEmailAddressText();
    checkEmailAddressesMatch();
    toggleCountryOfBirthField();
    toggleLostOrStolenReasons();
    setDateFieldMaxLength();
});

function initFormFieldFocus()
{
    $("input.field_start").focus();
}

function initPassportNumberMask()
{
    $('input.passport-number').formance('format_number');
}

function initTypeahead()
{
    if ($('.typeahead').length > 0) {
      $('.typeahead').typeahead({
          name: 'CountryOfBirth',
          prefetch: '/data/countries.json',
          //local: ["Afghanistan","Akrotiri","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas, The","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British A.T.","British I.O.T.","British Virgin Islands","Brunei","Bulgaria","Burkina","Burma","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Channel Islands","Chile","China","Colombia","Comoros","Congo","Congo (Democratic Rep.)","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Dhekelia","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Fiji","Finland","France","Gabon","Gambia, The","Georgia","Germany","Ghana","Gibraltar","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea (North)","Korea (South)","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya ","Liechtenstein","Lithuania","Luxembourg","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","Norway","Occ. Palestinian T.","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn, Henderson & Is.","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Samoa","San Marino","Sao Tome & Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","S. Georgia & Sandwich Is.","Sovereign Base Areas","Spain","Sri Lanka","St Helena, Asc. & T.D.C.","St Kitts & Nevis ","St Lucia","St Vincent","Sudan","Surinam","Swaziland","Sweden","Switzerland","Syria","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Yugoslavia","Zambia","Zimbabwe"],
          limit: 10
        });
    }
}

function toggleWhyAreYouAskingForMyEmailAddressText()
{
    // Show the 'Why are you asking for my email address?' text
    $('#whyAskEmailHeader').click(function(e) {
        e.preventDefault();

        if ($('#whyAskEmailBody').css('display') === 'none') {
            $('#whyAskEmailBody').show();
            $('#whyAskEmailHeader').css('background-image', 'url(/images/arrow-down.png)');
            $('#whyAskEmailHeader').css('background-position', '0 50%');
        } else {
            $('#whyAskEmailBody').hide();
            $('#whyAskEmailHeader').css('background-image', 'url(/images/arrow-right.png)');
            $('#whyAskEmailHeader').css('background-position', '0.5% 50%');
        }
    });

    // Hide the 'Why are you asking for my email address?' text by default
    $('#whyAskEmailHeader').trigger('click');
}

function checkEmailAddressesMatch()
{
    // Check the email addresses match
    $('#ReportType_contact_contactEmail_second').blur(function() {
        var confirmEmailField = $(this);
        confirmEmailField[0].setCustomValidity('');

        if (confirmEmailField.val() !== $('#ReportType_contact_contactEmail_first').val()) {
            // Email addresses don't match
            confirmEmailField[0].setCustomValidity('The two email addresses must match.');
        }
    });
}

function toggleCountryOfBirthField()
{
    var countryOfBirthField = $('#ReportType_details_passportCountryOfBirth');

    if (countryOfBirthField.length > 0) {
        // Set the initial state of the country of birth field
        if ($('#ReportType_details_passportCountryOfBirth').val().search(/united kingdom/i) > -1
            || $('#ReportType_details_passportIsBornUk_0:checked').length > 0
        ) {
            // Country of birth is uk so hide the field
            hideCountryOfBirthField();
        } else {
            // Country of birth is non-uk so show the field
            showCountryOfBirthField();
        }

        // Toggle the country of birth field
        $('input[name="ReportType[details][passportIsBornUk]"]').click(function() {
            if ($(this).val() === 'uk') {
                // Country of birth is uk so hide the field
                hideCountryOfBirthField();
            } else {
                // Country of birth is non-uk so show the field
                countryOfBirthField.val('');
                showCountryOfBirthField();
            }
        });
    }
}

function hideCountryOfBirthField()
{
    $('#formFields li.countryOfBirth').hide();
    $('#ReportType_details_passportCountryOfBirth').val('United Kingdom');
    $('#ReportType_details_passportIsBornUk_0').attr('checked', true);
}

function showCountryOfBirthField()
{
    $('li.countryOfBirth').show();
}

function toggleLostOrStolenReasons()
{
    if ($('input[name="ReportType[circumstances][lostOrStolen]"]').length > 0) {
        // Hide the lost or stolen reason fields by default
        $('li.lostReasons').hide();
        $('li.stolenReasons').hide();

        // Toggle the lost or stolen reason field
        $('input[id^="ReportType_circumstances_lostOrStolen"]').click(function() {
            if ($(this).val() === 'lost') {
                // Display the lost reasons
                $('li.lostReasons').show();
                $('li.stolenReasons').hide();
            } else {
                // Display the stolen reasons
                $('li.lostReasons').hide();
                $('li.stolenReasons').show();
            }
        });

        // Passport was lost and user has returned to the page so display the lost reasons
        if ($('#ReportType_circumstances_lostOrStolen_0:checked').length > 0) {
            $('#ReportType_circumstances_lostOrStolen_0').trigger('click');
        }

        // Passport was stolen and user has returned to the page so display the stolen reasons
        if ($('#ReportType_circumstances_lostOrStolen_1:checked').length > 0) {
            $('#ReportType_circumstances_lostOrStolen_1').trigger('click');
        }
    }
}

function setDateFieldMaxLength()
{
    $('input[id$="_day"], input[id$="_month"]').attr('maxlength', 2);
    $('input[id$="_year"]').attr('maxlength', 4);
}