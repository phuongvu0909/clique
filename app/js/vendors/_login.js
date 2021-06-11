function login_validation() {
    var login_form = document.getElementById("login_form");
    var email = document.getElementById("email").value;
    var m_text = document.getElementById("m_text");
    var password = document.getElementById("password").value;
    var pw_text = document.getElementById("pw_text");
    var pattern = /\b[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}\b/i;
    if (email.match(pattern)) {
        // login_form.classList.add("valid");
        // login_form.classList.remove("invalid");
        m_text.innerHTML = "Valid email";
        m_text.style.color = "#00ff00";
    } else {
        // login_form.classList.remove("valid");
        // login_form.classList.add("invalid");
        m_text.innerHTML = "Invalid email address format";
        m_text.style.color = "#ff0000";
    }
    if (email == "") {
        // login_form.classList.remove("valid");
        // login_form.classList.add("invalid");
        m_text.innerHTML = "";
        m_text.style.color = "#00ff00";
    }

    if (password.length < 8) {
        // login_form.classList.remove("valid");
        // login_form.classList.add("invalid");

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