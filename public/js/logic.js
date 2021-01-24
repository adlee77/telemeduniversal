$(document).ready(function() {

$('.alert').hide();
$('.step-two').hide();
$('.step-three').hide();
$('.step-four').hide();
$('#cardError').hide();
$('#initial-price').hide()
$('#new-price').hide()

$('#progress-1').on('click', function(){
    $('.step-one').show();
    $('.step-two').hide();
    $('.step-three').hide();
    $('.step-four').hide();
})

$('#progress-2').on('click', function(){
    $('.step-one').hide();
    $('.step-two').show();
    $('.step-three').hide();
    $('.step-four').hide();
})

$('#step-two-back').on('click', function(){
    $('.step-one').show();
    $('.step-two').hide();
    $('.step-three').hide();
    $('.step-four').hide();
})

$('#step-three-back').on('click', function(){
    $('.step-one').hide();
    $('.step-two').show();
    $('.step-three').hide();
    $('.step-four').hide();
})

$('#progress-3').on('click', function(){
    $('.step-one').hide();
    $('.step-two').hide();
    $('.step-three').show();
    $('.step-four').hide();
})

$("#support-form").on("submit", function handleFormSubmit(event) {
    event.preventDefault();

    let name = $("#support-name").val().trim();
    let email = $("#support-email").val().trim();
    let message = $("#support-message").val().trim();

    if (name == ''){
        
        $('#name-alert').show();
        setTimeout(function(){
        $('#name-alert').hide();
        }, 3000)
    } 
    if (message == '') {
        $('#message-alert').show();
        setTimeout(function(){
        $('#message-alert').hide();
        }, 3000)
    } 
    if (email == '') {
        $('#email-alert').show();
        setTimeout(function(){
        $('#email-alert').hide();
        }, 3000)
    } 
    if (name != "" && message != "" && email != "") {
        $.post('/api/support', {name, email, message});
        $('#support-name').val('');
        $('#support-email').val('');
        $('#support-message').val('');
        $('#support-form').append('Sent!');
    }

})

var monthPrice = $('#monthly-plan');
var quarterPrice = $('#quarterly-plan');


// Step One Button

$('#step-one-button').on('click', function(){
    var eFName = $('#enrollFirstName').val().trim();
    var eLName = $('#enrollLastName').val().trim();

    if ($('#enrollPhone').val().trim() == '' && $('#enrollEmail').val().trim() == '' && $('#eGender').val().trim() == '' && $('#enrollBirthday').val().trim() == '' && eLName == '' && eFName == '') {
        alert("Please Fill out All Fields");
    }

    // Keep These. We may use these for alerts eventually

    // if (eFName == '') {
    //     $('#eFName').append('<p style="color: red;" id="options1">Required Field</p>');
    //     $('#options1').fadeOut(3000, function(){
    //         $('#options1').remove();
    //     })
    // } 

    // if (eLName === '') {
    //     $('#eLName').append('<p style="color: red;" id="options2">Required Field</p>');
    //     $('#options2').fadeOut(3000, function(){
    //         $('#options2').remove();
    //     })
    // }

    // if ($('#enrollBirthday').val() == '') {
    //     $('#eBirthday').append('<p style="color: red;" id="options3">Required Field</p>');
    //     $('#options3').fadeOut(3000, function(){
    //         $('#options3').remove();
    //     })
    // } 

    // if ($('#eGender').val().trim() == '') {
    //     $('#eGenderAppend').append('<p style="color: red;" id="options4">Required Field</p>');
    //     $('#options4').fadeOut(3000, function(){
    //         $('#options4').remove();
    //     })
    // }
    // if ($('#enrollEmail').val().trim() == '') {
    //     $('#eEmail').append('<p style="color: red;" id="options5">Required Field</p>');
    //     $('#options5').fadeOut(3000, function(){
    //         $('#options5').remove();
    //     })
    // }
    // if ($('#enrollPhone').val().trim() == '') {
    //     $('#ePhone').append('<p style="color: red;" id="options6">Required Field</p>');
    //     $('#options6').fadeOut(3000, function(){
    //         $('#options6').remove();
    //     })
    // }

    if ($('#enrollPhone').val().trim() != '' && $('#enrollEmail').val().trim() != '' && $('#eGender').val().trim() != '' && $('#enrollBirthday').val().trim() != '' && eLName != '' && eFName != '') {
        $('.step-one').hide();
        $('.step-two').show();
        $('#progress-2').addClass('active');
    }
})

// Step Two Button

$('#step-two-button').on('click', function(){
    
    var eAddressOne = $('#enrollAddressOne').val().trim();
    var eCity = $('#enrollCity').val().trim();
    var eState = $('#enrollState').val().trim();
    var eCountry = $('#enrollCountry').val().trim();
    var eZipCode = $('#enrollZipCode').val().trim();

    if (eAddressOne == '' || eCity == '' || eState == '' || eCountry == '' || eZipCode == '') {
        alert("Please Fill out All Fields");
    };
    
    if (eAddressOne != '' && eAddressOne != '' && eCity != '' && eState != '' && eCountry != '' && eZipCode != '') {
    $('.step-two').hide();
    $('.step-three').show();
    $('#progress-3').addClass('active');
    };

})

var discountCodeApplied = false;
// Discount Code

$('#discount-btn').on('click', function(){
    if ($('#discount-code').val() == 'myhealth') {
        console.log('success')
        $('#initial-price').show()
        $('#new-price').show()
        $('#initial-price2').hide()
        discountCodeApplied = true;
    }
})

// Step Three Button

$('#submitOrder').on('click', function(){

    var cardName = $('#cardName').val().trim();
    var cardNumber = $('#cardNumber').val().trim();
    var expMonth = $('#expMonth').val().trim();
    var expYear = $('#expYear').val().trim();
    var cvc = $('#cvc').val().trim();
    var ageCheck = $('#consent');

    if (cardName == '' || cardNumber == '' || expMonth == '' || expYear == '' || cvc == '' || ageCheck == '') {
        alert("Please Fill out All Fields");
    }
    if (!ageCheck.is(':checked')) {
        alert("Please Check the Consent Box")
    }

    if (cardName != '' && cardNumber != '' && expMonth != '' && expYear != '' && cvc != '' && ageCheck.is(':checked')) {
    $('#progress-3').addClass('active');
    $('#progress-4').addClass('active');


    var apiFirstName = $('#enrollFirstName').val().trim();
    var apiLastName = $('#enrollLastName').val().trim();
    var apiAddressOne = $('#enrollAddressOne').val().trim();
    var apiPostalCode = $('#enrollZipCode').val().trim();
    var apiCity = $('#enrollCity').val().trim();
    var apiState = $('#enrollCity').val().trim();
    var apiEmail = $('#enrollEmail').val().trim();
    var apiPhone = $('#enrollPhone').val().trim();
    var apiCardNumber = $('#cardNumber').val().trim();
    var apiCardExpMonth = $('#expMonth').val().trim();
    var apiCardExpYear = $('#expYear').val().trim();
    var apiCardCVC = $('#cvc').val().trim();
    
    if (discountCodeApplied){
        var settings = {
            "url": `https://api.konnektive.com/order/import/?loginId=TELmedu111&password=TELEmed1&firstName=${apiFirstName}&lastName=${apiLastName}&address1=${apiAddressOne}&address2=Apt.+1120&postalCode=${apiPostalCode}&city=${apiCity}&state=${apiState}&country=US&emailAddress=${apiEmail}&phoneNumber=${apiPhone}&shipFirstName=${apiFirstName}&shipLastName=${apiLastName}&shipAddress1=${apiAddressOne}&shipPostalCode=${apiPostalCode}&shipCity=${apiCity}&shipState=${apiState}&shipCountry=US&paySource=CREDITCARD&cardNumber=${apiCardNumber}&cardMonth=${apiCardExpMonth}&cardYear=${apiCardExpYear}&cardSecurityCode=${apiCardCVC}&campaignId=175&product1_id=707`,
            "method": "POST",
            "timeout": 0,
          };
    } else {
        var settings = {
            "url": `https://api.konnektive.com/order/import/?loginId=TELmedu111&password=TELEmed1&firstName=${apiFirstName}&lastName=${apiLastName}&address1=${apiAddressOne}&address2=Apt.+1120&postalCode=${apiPostalCode}&city=${apiCity}&state=${apiState}&country=US&emailAddress=${apiEmail}&phoneNumber=${apiPhone}&shipFirstName=${apiFirstName}&shipLastName=${apiLastName}&shipAddress1=${apiAddressOne}&shipPostalCode=${apiPostalCode}&shipCity=${apiCity}&shipState=${apiState}&shipCountry=US&paySource=CREDITCARD&cardNumber=${apiCardNumber}&cardMonth=${apiCardExpMonth}&cardYear=${apiCardExpYear}&cardSecurityCode=${apiCardCVC}&campaignId=175&product1_id=705`,
            "method": "POST",
            "timeout": 0,
          };
    }
    
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        if (response.indexOf("SUCCESS") > -1) {
            $('.step-three').hide();
            $('.step-four').show();
            $('#no-refresh').hide();
        } else {
            $('#cardError').show();
            setTimeout(function(){
            $('#cardError').hide();
            }, 3000)
        }
      });
    }
})

})
