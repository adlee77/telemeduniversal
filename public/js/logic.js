$(".support-form").on("submit", function (event) {
    event.preventDefault();

    let newQuestion = {
        name: $("#support-name").val().trim(),
        email: $("#support-name").val().trim(),
        message: $("#support-name").val().trim()
    };

    $.ajax({
        url: "/api/support",
        type: "POST",
        data: newQuestion
    }).then((res)=>{
        location.reload()
    })
})