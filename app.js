function animatedForm() {
    const arrows = document.querySelectorAll('.fa-arrow-down');
    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            /////// check for validation //////////////

            if (input.type === 'text' &&
                validateUser(input)) {
                nextSlide(parent, nextForm);
            } else if (input.type === "email" && validateEmail(input)) {
                nextSlide(parent, nextForm);
            } else if (input.type === 'password' &&
                validateUser(input)) {
                nextSlide(parent, nextForm);
            } else {
                parent.style.animation = "shake 0.5s ease";
            }

            //////////// animation reset ////////////////

            parent.addEventListener('animationend', () => {
                parent.style.animation = ''
            })
        })
    })
}

function validateUser(user) {
    if (user.value.length < 6) {
        error('#e63946')
    } else {
        error('#06d6a0');
        return true;
    }
}

function validateEmail(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email.value)) {
        error('#06d6a0');
        return true;
    } else {
        error('#e63946')
    }
}

function error(color) {
    document.body.style.background = color;
}

function nextSlide(parent, nextForm) {
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

animatedForm()

// if (input.value == '') {
//     document.body.style.backgroundColor = '#e63946'
// } else {
//     console.log(input.value);
// }