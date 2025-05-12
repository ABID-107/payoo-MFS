document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const moneyInput = document.getElementById('add-money-input').value
    console.log(moneyInput);
    const pinInput = document.getElementById('input-pin').value
    console.log(pinInput);
    const balanceInner = document.getElementById('balance').innerText

    if (pinInput === '1234') {
        console.log('you are in')

        const inputNumber = parseFloat(moneyInput)
        const balanceInput = parseFloat(balanceInner)
        const newBalance = inputNumber + balanceInput
        console.log(newBalance)

        document.getElementById('balance').innerText = newBalance;
    }
    else {
        alert('oi makbul')
    }
})