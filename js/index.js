document.getElementById('btn-login')
.addEventListener('click', function(event){
    event.preventDefault();
    const accountNUmber = document.getElementById('input-account-number').value;
    const pinNumber = document.getElementById('input-pin-number').value;
    if(accountNUmber === '1234' && pinNumber === '12'){
        window.location.href = 'home.html';
    }
})