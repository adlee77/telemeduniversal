$(document).ready(function() {

$('.alert').hide();

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


$('#plan-btn').on('click', function(){
    if (monthPrice.is(':checked') && quarterPrice.is(':checked')) {
        $('table').append('<p style="color: red;" id="options">Please only select one option above.</p>');
        $('#options').fadeOut(5000, function(){
            $('#options').remove();
        })
    } else if (monthPrice.is(':checked')){
        sessionStorage.clear();
        sessionStorage.setItem('plan', 'month');
        window.location = '/purchase-confirm';
    } else if (quarterPrice.is(':checked')){
        sessionStorage.clear();
        sessionStorage.setItem('plan', 'quarter');
        window.location = '/purchase-confirm';
    } else {
        $('table').append('<p style="color: red;" id="options">Please select a plan.</p>');
        $('#options').fadeOut(5000, function(){
            $('#options').remove();
        })
    }
})

})
