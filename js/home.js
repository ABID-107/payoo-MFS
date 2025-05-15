document.getElementById('addMoney-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const moneyInput = document.getElementById('add-money-input').value

    const pinInput = document.getElementById('input-pin').value

    const balanceInner = document.getElementById('balance').innerText

    if (pinInput === '1234') {

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