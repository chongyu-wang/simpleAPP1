let clientInfo = [];



const addClientInfo = (ev)=> {
    ev.preventDefault();
    let client = {
        id: Date.now(),
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        email: document.getElementById('email').value 
    }
    clientInfo.push(client);
    document.querySelector('form').reset();

    console.warn('added', {clientInfo});
    let pre = document.querySelector('#msg pre')
    pre.textContent = '\n' + JSON.stringify(clientInfo, '\t', 2);

    localStorage.setItem('userLoginInfo', JSON.stringify(clientInfo));
}



document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('signupBTN').addEventListener('click', addClientInfo);
});
