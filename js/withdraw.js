document.getElementById('btn-withdraw-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const cashOutAmount = getInputFieldValueById('input-withdraw-money');
        const pinNumber = getInputFieldValueById('input-withdraw-pin-number');
        if(isNaN(cashOutAmount)){
            alert('Cannot Add Money');
            return;
        }
        if(pinNumber === 1234){
            const currentBalance = getTextFieldValueById('balance');
            if(cashOutAmount > currentBalance){
                alert('You Do Not Have Enough Amount To Cash Out')
                return;
            }
            const newBalance = currentBalance - cashOutAmount;
            document.getElementById('balance').innerText = newBalance;
            const div = document.createElement('div');
            div.classList.add('bg-yellow-300');
            div.innerHTML = `
            <h2 class="text-3xl font-bold text-center">Withdraw Money </h2>
            <p>Withdraw ${cashOutAmount} TK. Current Balance ${newBalance}
            <hr> 
            `
            const transaction = document.getElementById('container-of-transaction');
            transaction.appendChild(div);
        }
        else{
            alert('You Cannot Withdraw Money')
        }
    })
