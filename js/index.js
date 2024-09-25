// Adding Money To The Fund And Subtracting The Amount From Balance

// Noakhali Card
document.getElementById('btn-donate-now').addEventListener('click', function () {
    if (
        isNaN(getInputFieldValueById('input-donate-money')) ||
        getInputFieldValueById('input-donate-money') <= 0


    ) {
        return alert('Invalid Donation Amount');
    }
    const donateMoneyAmount = getInputFieldValueById('input-donate-money');
    const donatedBalance = getTextFieldValueById('total-donated-amount');
    const balance = getTextFieldValueById('account-balance');

    if (donateMoneyAmount === null || donateMoneyAmount > balance) {
        return alert('Invalid Donation Amount');
    }

    const newBalance = balance - donateMoneyAmount;
    const donatedMoneyBalance = donateMoneyAmount + donatedBalance;
    document.getElementById('account-balance').innerText = newBalance;
    document.getElementById('total-donated-amount').innerText = donatedMoneyBalance;

    document.getElementById('input-donate-money').value = '';
    document.getElementById('open-modal').checked = true;

    // History
    const today = new Date();
    const div = document.createElement('div');
    div.innerHTML = `
       <div class = "border rounded-xl p-5 mb-5">
       <h1 class = "ml-4 mt-4"> ${donateMoneyAmount} Taka Is Donated For Flood at Noakhali, Bangladesh</h1><br>
        <span class = "bg-slate-200 p-2 rounded-xl w-full">${today}</span>
       </div>`;
    document.getElementById('history-container').appendChild(div);
})


// Feni Card

document.getElementById('btn-donate-now-two').addEventListener('click', function () {
    if (
        isNaN(getInputFieldValueById('input-donate-money-two')) ||
        getInputFieldValueById('input-donate-money-two') <= 0


    ) {
        return alert('Invalid Donation Amount');
    }
    const donateMoneyAmount = getInputFieldValueById('input-donate-money-two');
    const donatedBalance = getTextFieldValueById('total-donated-amount-two');
    const balance = getTextFieldValueById('account-balance');

    if (donateMoneyAmount === null || donateMoneyAmount > balance) {
        return alert('Invalid Donation Amount');
    }

    const newBalance = balance - donateMoneyAmount;
    const donatedMoneyBalance = donateMoneyAmount + donatedBalance;
    document.getElementById('account-balance').innerText = newBalance;
    document.getElementById('total-donated-amount-two').innerText = donatedMoneyBalance;
    document.getElementById('input-donate-money-two').value = '';
    document.getElementById('open-modal-two').checked = true;

    // History
    const today = new Date();
    const div = document.createElement('div');
    div.innerHTML = `
       <div class = "border rounded-xl p-5 mb-5">
       <h1 class = "ml-4 mt-4"> ${donateMoneyAmount} Taka Is Donated For Flood Relief in Feni, Bangladesh</h1><br>
        <span class = "bg-slate-200 p-2 rounded-xl w-full">${today}</span>
       </div>`;
    document.getElementById('history-container').appendChild(div);
})


// Quota Movement Card

document.getElementById('btn-donate-now-three').addEventListener('click', function () {
    if (
        isNaN(getInputFieldValueById('input-donate-money-three')) ||
        getInputFieldValueById('input-donate-money-three') <= 0


    ) {
        return alert('Invalid Donation Amount');
    }
    const donateMoneyAmount = getInputFieldValueById('input-donate-money-three');
    const donatedBalance = getTextFieldValueById('total-donated-amount-three');
    const balance = getTextFieldValueById('account-balance');

    if (donateMoneyAmount === null || donateMoneyAmount > balance) {
        return alert('Invalid Donation Amount');
    }

    const newBalance = balance - donateMoneyAmount;
    const donatedMoneyBalance = donateMoneyAmount + donatedBalance;
    document.getElementById('account-balance').innerText = newBalance;
    document.getElementById('total-donated-amount-three').innerText = donatedMoneyBalance;
    document.getElementById('input-donate-money-three').value = '';
    document.getElementById('open-modal-three').checked = true;

    // History
    const today = new Date();
    const div = document.createElement('div');
    div.innerHTML = `
   <div class = "border rounded-xl p-5 mb-5">
   <h1 class = "ml-4 mt-4"> ${donateMoneyAmount} Taka Is Donated For 
    Aid for Injured in the Quota Movement</h1><br>
    <span class = "bg-slate-200 p-2 rounded-xl w-full">${today}</span>
   </div>`;
    document.getElementById('history-container').appendChild(div);
});


// Toggle Function

document.getElementById('show-history-btn').addEventListener('click', function () {
    showSectionById('history-section');

});

document.getElementById('show-donation-btn').addEventListener('click', function () {
    showSectionById('donation-section');
});



// Active Status

document.getElementById('show-donation-btn').addEventListener('click', function(){
    document.getElementById('show-donation-btn').classList.add('bg-primary', 'hover:bg-primary');
    document.getElementById('show-history-btn').classList.remove('bg-primary', 'hover:bg-primary')
});

document.getElementById('show-history-btn').addEventListener('click', function(){
    document.getElementById('show-history-btn').classList.add('bg-primary', 'hover:bg-primary');
    document.getElementById('show-donation-btn').classList.remove('bg-primary', 'hover:bg-primary')
    document.getElementById('show-donation-btn').classList.add('btn-outline', 'hover:bg-white', 'hover:text-black')
    document.getElementById('footer-container').classList.add('hidden')
});

