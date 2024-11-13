localStorage.setItem('USR', 'Cristian')
localStorage.setItem('PWD', '1234')

function login() {
    var usr = document.getElementById('typeEmailX').value
    var pwd = document.getElementById('typePasswordX').value

    if (usr === localStorage.getItem('USR') && pwd === localStorage.getItem('PWD')) {
        alert('Login success')
    } else {
        alert('Login failed')
    }
}