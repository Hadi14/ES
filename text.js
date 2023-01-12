(() => {
    'use strict'
    document.querySelector('.needs-validation')
        .addEventListener('submit', event => {
            const form = event.target;
            const nameinp = document.getElementById('nameinp');
            let isPasswordValid = false;
            let en = nameinp.value.trim();
            const ptern = /^[A-Za-z]*$/;
            isPasswordValid = ptern.test(en);
            if (!form.checkValidity() || !isPasswordValid) {
                event.preventDefault()
                event.stopPropagation()
                console.log('not valid')
            }
            // else // I would expect an else here 
            form.classList.add('was-validated')
        })
})()