document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const cashInput = document.getElementById('cash-out-input').value
    const cashPinInput = document.getElementById('cash-input-pin').value

    if (cashPinInput === '1111') {
        const parsCashInput = parseFloat(cashInput)
        const availableCash = document.getElementById('balance').innerText
        const parsBalance = parseFloat(availableCash)

        const sum = parsBalance - parsCashInput
        document.getElementById('balance').innerText = sum


        console.log(parsCashInput, availableCash, sum, parsBalance)
    }
    else {
        alert('you are a mokbul')
    }
})