document.getElementById('add-money-btn').addEventListener('click', function () {
    const addMoney = document.getElementById('add-money-div')
    const showDiv = addMoney.classList.remove('hidden')
    const outMoney2 = document.getElementById('out-money-div')
    const removeOut = outMoney2.classList.add('hidden')
})


document.getElementById('cash-btn').addEventListener('click', function () {
    const outMoney = document.getElementById('out-money-div')
    const shoCash = outMoney.classList.remove('hidden')
    const addMoney2 = document.getElementById('add-money-div')
    const hidAdd = addMoney2.classList.add('hidden');
})