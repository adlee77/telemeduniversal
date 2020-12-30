$(document).ready(function() {

$('.alert').hide();
$('.step-two').hide();
$('.step-three').hide();

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

var eFName = $('#enrollFirstName').val().trim();
var eLName = $('#enrollLastName').val().trim();

$('#step-one-button').on('click', function(){
    var eFName = $('#enrollFirstName').val().trim();
    var eLName = $('#enrollLastName').val().trim();

    if ($('#enrollPhone').val().trim() == '' && $('#enrollEmail').val().trim() == '' && $('#eGender').val().trim() == '' && $('#enrollBirthday').val().trim() == '' && eLName == '' && eFName == '') {
        alert("Please Fill out all Fields");
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
    $('.step-two').hide();
    $('.step-three').show();
    $('#progress-3').addClass('active');
})

// Step Three Button

$('#submitOrder').on('click', function(){
    $('.step-three').hide();
    $('.step-four').show();
    $('#progress-3').addClass('active');

    $.post('/api/support', {});
        $('#support-name').val('');
        $('#support-email').val('');
        $('#support-message').val('');
        $('#support-form').append('Sent!');
})


})
