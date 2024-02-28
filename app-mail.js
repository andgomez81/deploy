
    function sendMail(){
        let parms = {
        Name: document.getElementById("name").value,
        Email: document.getElementById("email").value,
        subject: document.getElementById("subjec").value,
        message: document.getElementById("message").value,
        }
        emailjs.send("service_c6f6t8u","template_h72ebxd", parms).then(alert("Email Sent!!"))
        }
        