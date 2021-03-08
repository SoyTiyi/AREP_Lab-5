var app = (function() {
    const messages = (error, data) => {
        if (error != null) {
            console.log(`Error: ${JSON.stringify(error)}`);
            alert("Error al enviar el mensaje");
            return;
        }
        /* $("#avg").text(data.media); */
        $("#response").text(data);
    }

    const send = () => {
        var message = $("#message").val();
        postMethod(message, messages);
    }

    const postMethod = (message,messages) => {
        var promise = $.post({
            url: "/add",
            data: JSON.stringify(message),
            contentType: "application/json"
        });
        promise.then((data) => {
            console.log(data);
            messages(null, data);
        },(error) => {
            messages(error, null);
        });
    }

    return {
        send: function() {
            send();
        }
    }
})();