const email = document.getElementById('email')
const button = document.getElementById('button')
const invalid = document.getElementById('invalid')
const empty = document.getElementById('empty')

// The email address is not formatted correctly

email.addEventListener('input', () => {
    email.setCustomValidity('')
    email.checkValidity()
    if (email.checkValidity(true)){
        invalid.style.display = 'none'
        email.style.borderColor = 'hsl(231, 7%, 60%)'
        email.style.backgroundColor = 'hsl(0, 0%, 100%)'
        email.style.color = 'black'
    }
})

email.addEventListener('invalid', () => {
    invalid.style.display = 'block'
    empty.style.display = 'none'
    email.style.borderColor = 'hsl(4, 100%, 67%)'
    email.style.backgroundColor = 'hsla(4, 100%, 67%, 0.1)'
    email.style.color = 'hsl(4, 100%, 67%)'
})

// The field is left empty and sucess message

button.addEventListener('click', () => {
    if (!email.value){
        email.style.borderColor = 'hsl(4, 100%, 67%)'
        email.style.backgroundColor = 'hsla(4, 100%, 67%, 0.1)'
        email.style.color = 'hsl(4, 100%, 67%)'
        empty.style.display = 'block'
        invalid.style.display = 'none'
    } else if (email.checkValidity(true)){
        window.location = './sucess.html'
    } 
})