(function() {
    emailjs.init("DldhblFWd_4Kf8YuC");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    emailjs.sendForm('service_05hcsy9', 'template_1kna0rk', this)
        .then(function() {
            alert('Message Sent Successfully!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Failed to send the message: ' + JSON.stringify(error));
        });
});