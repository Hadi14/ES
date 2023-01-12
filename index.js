
(() => {
    'use strict'
    document.querySelector('.needs-validation')
        .addEventListener('submit', event => {
            const form = event.target;
            const nameinp = document.getElementById('nameinp');
            let isPasswordValid = false;
            let feedbakcspan = document.getElementById('feedbakcspan');
            let en = nameinp.value.trim();
            const ptern = /^[\u0621-\u0628\u062A-\u063A\u0641-\u0642\u0644-\u0648\u064E-\u0651\u0655\u067E\u0686\u0698\u06A9\u06AF\u06BE\u06CC]+$/;
            isPasswordValid = ptern.test(en);
            if (!form.checkValidity() || !isPasswordValid) {
                event.preventDefault()
                event.stopPropagation()

            }
            if (!isPasswordValid) {
                nameinp.classList.remove('valid');
                nameinp.classList.add('invalid');
                feedbakcspan.classList.add('color-red');
            }
            else {
                nameinp.classList.remove('invalid');
                nameinp.classList.add('valid');
            }
            // else // I would expect an else here
            form.classList.add('was-validated')
        })
})()