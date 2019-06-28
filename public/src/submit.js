$(document).ready(function () {
    $("#form-submit").click(function (e) {
        e.preventDefault();

        let fullName = $("#full-name").val();
        let email = $("#email-address").val();
        let reason = $("#reason").val();
        let statusElm = $(".status");
        statusElm.empty();

        if(fullName.length <= 1) {
            statusElm.append("<di class='form-status'>Please enter your name</div>");
            e.preventDefault();
        }

         if(!email.includes('@') && !email.includes('.')) {
             statusElm.append("<div class='form-status'>Email is not valid</div>")
             e.preventDefault();
         }

         if(reason.length == 0) {
             statusElm.append("<div class='form-status'>please enter a reason</div");
             e.preventDefault();
         }
     })
 })