
$(document).ready(function () {
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();

        Swal.fire({
            icon: 'info',
            title: 'Please wait...',
            text: 'Sending your message',
            willOpen: () => {
                Swal.showLoading();
            },
            showConfirmButton: false,
            allowOutsideClick: false,
            
        });

        const formData = new FormData(this);

        $.ajax({
            url: 'https://script.google.com/macros/s/AKfycbyGnOAYgUJ_5IDA3lHeX9jQDfbbSx1j784ieI2prl-050RH1yvqBGu-ymSLsLz_AMdR/exec',
            method: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (response) {
                if (response.result === 'success') {
                    Swal.fire({
                        icon: 'success',
                        title: 'Form submitted!',
                        text: 'Your Message has been received.',
                        
                    });
                    $('#contact-form')[0].reset(); // Reset form after successful submission
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Submission Failed',
                        text: 'There was an error submitting your form. Please try again later.',
                        
                    });
                }
            },
            error: function () {
                Swal.fire({
                    icon: 'error',
                    title: 'Submission Failed',
                    text: 'There was an error submitting your form. Please check your network connection or try again later.',
                    
                });
            }
        });
    });
});