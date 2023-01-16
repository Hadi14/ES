
(() => {
    'use strict'
    document.querySelector('.needs-validation')
        .addEventListener('submit', event => {
            const form = event.target;
            const nameinp = document.getElementById('nameinp');
            let isPasswordValid = false;
            let feedbakcspan = document.getElementById('feedbakcspan');
            let feedbakcspans = document.getElementById('feedbakcspans');
            let feedbakcspane = document.getElementById('feedbakcspane');
            let feedbakcspang = document.getElementById('feedbakcspang');

            feedbakcspan.classList.remove('color-red');
            feedbakcspans.classList.remove('color-red');
            feedbakcspane.classList.remove('color-red');
            feedbakcspang.classList.remove('color-red');

            // feedbakcspan.classList.add('color-black');
            // feedbakcspans.classList.add('color-black');
            // feedbakcspane.classList.add('color-black');
            // feedbakcspang.classList.add('color-black');


            let SIPRange = document.getElementById('SIPRange');
            let EIPRange = document.getElementById('EIPRange');
            let GWTci = document.getElementById('GWTci');

            let en = nameinp.value.trim();
            const ptern = /^[\u0621-\u0628\u062A-\u063A\u0641-\u0642\u0644-\u0648\u064E-\u0651\u0655\u067E\u0686\u0698\u06A9\u06AF\u06BE\u06CC]+$/;
            const ippatern = /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/;
            let sip = ippatern.test(SIPRange.value);
            let eip = ippatern.test(EIPRange.value);
            let gwip = ippatern.test(GWTci.value);
            isPasswordValid = ptern.test(en);
            console.log(sip, eip);
            if (!form.checkValidity() || !isPasswordValid || !sip || !eip || !gwip || (SIPRange.value >= EIPRange.value)) {
                event.preventDefault()
                event.stopPropagation()

            }
            if ((SIPRange.value != "" && EIPRange.value != "") && SIPRange.value >= EIPRange.value) {
                feedbakcspans.classList.add('color-red');
                feedbakcspane.classList.add('color-red');
            }
            if (!isPasswordValid) {
                nameinp.classList.remove('valid');
                nameinp.classList.add('invalid');
                feedbakcspan.classList.add('color-red');
                feedbakcspan.classList.remove('color-black');
            }
            else {
                nameinp.classList.remove('invalid');
                nameinp.classList.add('valid');
            }
            if (!sip) {
                SIPRange.classList.remove('valid');
                SIPRange.classList.add('invalid');
                feedbakcspans.classList.add('color-red');
                feedbakcspans.classList.remove('color-black');
            } else {
                SIPRange.classList.remove('invalid');
                SIPRange.classList.add('valid');
            }
            if (!eip) {
                EIPRange.classList.remove('valid');
                EIPRange.classList.add('invalid');
                feedbakcspane.classList.add('color-red');
                feedbakcspane.classList.remove('color-black');
            } else {
                EIPRange.classList.remove('invalid');
                EIPRange.classList.add('valid');
            }
            if (!gwip) {
                GWTci.classList.remove('valid');
                GWTci.classList.add('invalid');
                feedbakcspang.classList.add('color-red');
                feedbakcspang.classList.remove('color-black');
            } else {
                GWTci.classList.remove('invalid');
                GWTci.classList.add('valid');
            }
            // else // I would expect an else here
            form.classList.add('was-validated')
        })
})()


const tbtn = document.getElementById('toggle-btn');
const col4 = document.getElementById('col4');
const overlay = document.getElementById('overlay');
const inp = document.querySelector('.inp');
// const col8 = document.querySelector('.col8');
tbtn.addEventListener('click', () => {
    col4.classList.remove("d-none");
    col4.classList.add("d-block");
    overlay.classList.add('overlay');
    // col8.style.zindex = -1;
})

overlay.addEventListener('click', () => {
    // tbtn.style.display = "block";
    col4.classList.add("d-none");
    overlay.classList.remove('overlay');
})

// window.addEventListener("resize", (event) => {
//     if (window.innerWidth < 768)

// });

const hidebyclick = document.querySelectorAll('.hidebyclick');

// hidebyclick.forEach(element => {

// });

hidebyclick.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            col4.classList.add("d-none");
            col4.classList.remove("d-block");
            col4.classList.add("d-none");
            overlay.classList.remove('overlay');
        }

    })
})