const rsvpBtn = document.querySelector('button');

rsvpBtn.addEventListener('click', showPrompt)

function showPrompt(e){
    const autoForm = document.createElement('form');
    const fname = document.createElement('input');
    const email = document.createElement('input');
    const submitBtn = document.createElement('button');
    const card = document.querySelector('.card');


    submitBtn.type = 'submit';
    submitBtn.classList.add('inputElement');
    submitBtn.classList.add('submit');
    email.classList.add('inputElement')
    fname.classList.add('inputElement')

    email.name = 'email';
    email.placeholder = 'your email'
    fname.placeholder = 'your first name'
    fname.required = true;
    email.required = true;


    submitBtn.textContent = 'submit';
    email.type = 'email';
    submitBtn.type = 'submit'
    autoForm.style.backgroundColor = '#fff'
    autoForm.style.padding = '2em';
    autoForm.style.borderRadius = '1em'



    autoForm.addEventListener('submit', (e) =>{
        e.preventDefault();
        if (autoForm.checkValidity()) {
            confirm(fname.value)
        }
    });

    card.hidden = true;
    autoForm.appendChild(fname);
    autoForm.appendChild(email);
    autoForm.appendChild(submitBtn);
    autoForm.style.width='80%'

    document.body.className = 'promptBody'
    document.body.appendChild(autoForm)


}

