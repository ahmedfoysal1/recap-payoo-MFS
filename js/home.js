document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        // getInputFieldValueById();
        // const addAmount = document.getElementById('input-add-money').value;
        // const amount = parseFloat(addAmount);
        // const pinNumber = document.getElementById('input-pin-number').value;
        // if (pinNumber === '12') {
        //     const currentBalance = document.getElementById('balance').innerText;
        //     const balanceCurrent = parseFloat(currentBalance);
        //     const newBalance = balanceCurrent + amount;
        //     document.getElementById('balance').innerText = newBalance;
        // }
        const addMoney = getInputFieldValueById('input-add-money');
        const pinNumber = getInputFieldValueById('input-pin-number');
        if(isNaN(addMoney)){
            alert('Cannot Add Money');
            return;
        }
        if(pinNumber === 1234){
            const currentBalance = getTextFieldValueById('balance');
            const newBalance = currentBalance + addMoney;
            document.getElementById('balance').innerText = newBalance;
            const p = document.createElement('p');
            p.innerText = `Add Money: ${addMoney} TK. Current Balance: ${newBalance}`
            const transactionContainer = document.getElementById('container-of-transaction');
            transactionContainer.appendChild(p);
        }
        else{
            alert('wrong pin')
        }
    })


