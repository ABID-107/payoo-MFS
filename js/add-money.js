document.getElementById('addMoney-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const addMoneyFild = document.getElementById('add-money-input').value
    const addMoneyFild2 = document.getElementById('input-pin').value
    const mainBalance = document.getElementById('balance').innerText


    if (addMoneyFild2 === '1111') {
        const addMoneyOk = parseFloat(addMoneyFild)
        const totalBalance = parseFloat(mainBalance)
        const sumOfAddTotal = addMoneyOk + totalBalance

        document.getElementById('balance').innerText = sumOfAddTotal
    }
    else {
        alert('your are not hero')
    }
})
