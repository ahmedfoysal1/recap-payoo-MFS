document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const addAmount = document.getElementById('input-add-money').value;
        const amount = parseFloat(addAmount);
        const pinNumber = document.getElementById('input-pin-number').value;
        if (pinNumber === '12') {
            const currentBalance = document.getElementById('balance').innerText;
            const balanceCurrent = parseFloat(currentBalance);
            const newBalance = balanceCurrent + amount;
            document.getElementById('balance').innerText = newBalance;
        }
    })

document.getElementById('btn-withdraw-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const withdrawAmount = document.getElementById('input-withdraw-money').value;
        const withdrawMoney = parseFloat(withdrawAmount);
        const withdrawPin = document.getElementById('input-withdraw-pin-number').value;
        if (withdrawPin === '12') {
            const currentBalance = document.getElementById('balance').innerText;
            const balaceNow = parseFloat(currentBalance);
            const newBalance = balaceNow - withdrawMoney;
            document.getElementById('balance').innerText = newBalance;
        }
    })

document.getElementById('show-btn-cash-out')
.addEventListener('click', function(){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.remove('hidden');
})

document.getElementById('show-btn-add-money')
.addEventListener('click', function(){
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
})