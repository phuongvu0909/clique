function login_validation() {
    var login_form = document.getElementById("login_form");
    var email = document.getElementById("email").value;
    var m_text = document.getElementById("m_text");
    var password = document.getElementById("password").value;
    var pw_text = document.getElementById("pw_text");
    var pattern = /\b[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}\b/i;
    if (email.match(pattern)) {

        m_text.innerHTML = "Valid email";
        m_text.style.color = "#00ff00";
    } else {
        m_text.innerHTML = "Invalid email address format";
        m_text.style.color = "#ff0000";
    }
    if (email == "") {
        m_text.innerHTML = "";
        m_text.style.color = "#00ff00";
    }

    if (password.length < 7) {

        pw_text.innerHTML = "Password must have minimum of 8 characters"
        pw_text.style.color = "#ff0000";

    } else {
        pw_text.innerHTML = "Password valid"
        pw_text.style.color = "#00ff00";
    }
    if (password.length == 0) {
        pw_text.innerHTML = "";
    }

}
const APIUrl = "https://test.cliquefan.com/api/portal/app/login";

function login() {
    var username = document.getElementById("email").value;
    var password = document.getElementById('password').value;
    var user_info = { username: username, password: password };

    fetch(APIUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user_info)
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(user_info) {

            if (user_info.hasOwnProperty('error')) {
                alert("Invalid username or password!");
            } else {

                localStorage.setItem('user_info', JSON.stringify(user_info));
                window.location.href = '../app/home.html';
            }

        })
        .catch(error => { alert(error) })


}