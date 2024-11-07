function validation(){
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const password = document.getElementById("password")

    let valid = true

    if (name.value.trim() === ""){
        name.classList.add("error")
        document.getElementById("nameError").style.display = "block"
        valid = false
    } 
    else {
        name.classList.remove("error")
        document.getElementById("nameError").style.display = "none"
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        email.classList.add("error");
        document.getElementById("emailError").style.display = "block";
        valid = false;
    } 
    else {
        email.classList.remove("error");
        document.getElementById("emailError").style.display = "none";
    }

    if (password.value.trim().length < 8) {
        password.classList.add("error");
        document.getElementById("passwordError").style.display = "block";
        valid = false;
    } 
    else {
        password.classList.remove("error");
        document.getElementById("passwordError").style.display = "none";
    }

    if (valid) {
        alert("Регистрация прошла успешно!");
    }
}
