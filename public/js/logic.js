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

$('#step-one-button').on('click', function(){
    $('.step-one').hide();
    $('.step-two').show();
    $('#progress-2').addClass('active');
})

$('#step-two-button').on('click', function(){
    $('.step-two').hide();
    $('.step-three').show();
    $('#progress-3').addClass('active');
})

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
