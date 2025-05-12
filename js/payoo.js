document.getElementById('login-button').addEventListener('click', function (event) {
    event.preventDefault()
    const inputLogin = document.getElementById('login-input').value
    const inputPin = document.getElementById('input-pin').value
    if (inputLogin === '10' && inputPin === '1111') {
        window.location.href = './home.html'
    }
    else {
        alert('but She did not')
    }
})

