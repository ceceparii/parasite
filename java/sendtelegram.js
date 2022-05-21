var telegram_bot_id = "5353271270:AAFTC_p5aLs1MFSudryW4xJ0pjpymtxC08A";
var chat_id = -643302213;
var u_name, email, message;
var ready = function() {
    u_name = document.getElementById("nama").value;
    namasquad = document.getElementById("namasquad").value;
    whatsapp = document.getElementById("whatsapp").value;
    telegram = document.getElementById("telegram").value;
    sesi = document.getElementById("sesi").value;
    payment = document.getElementById("payment").value;
    
    message = "Nama : " + u_name + "\nNama Squad : " + namasquad + 
                "\nWhatsapp :" + whatsapp + "\nTelegram :" + telegram + "\nSesi : " + sesi + "\nPayment : " + payment;
                
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("nama").value = "";
    document.getElementById("namasquad").value = "";
    document.getElementById("whatsapp").value = "";
    document.getElementById("telegram").value = "";
    document.getElementById("sesi").value = "";
    document.getElementById("payment").value = "";
    return false;
}