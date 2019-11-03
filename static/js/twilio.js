function send() {
    if ($("#sms_message_input").val() && $("#phone_number_input").val()) {
        $("#btn-send").attr("disabled", true);

        $.ajax({
            type: 'POST',
            url: "/send",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify({
                "message": $("#sms_message_input").val(),
                "phone_number": $("#phone_number_input").val(),
            }),
            success: function (res) {
                $("#response_textarea").val(res.response)
                $("#response_area").css('display', 'block');
            },
            error: function (error) {
                console.log(error);
            },
            complete: function (data) {
                $("#btn-send").attr("disabled", false);
            }
        });
    }
}


$(document).ready(function () {
    $("#btn-send").attr("disabled", false);

    $("#btn-send").click(function (e) {
        send();
    });
});