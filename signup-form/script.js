function submitForm(form) {
    let firstName = document.getElementById('First_Name').value;
    let lastName = document.getElementById('Last_Name').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('Password').value;
    valid = true;
    if (firstName === "") {
        document.getElementById("icon_error1").style.display = "block";
        document.getElementById("note1").style.display = "block";
        document.getElementById("note1").innerHTML = "First Name cannot be empty";
        document.getElementById('First_Name').style.border = "2px solid red";
        valid = false;
    } else {
        document.getElementById("icon_error1").style.display = "none";
        document.getElementById('First_Name').style.border = "2px solid rgb(3, 170, 120)";
        document.getElementById("note1").style.display = "none";
    }

    if (lastName === "") {
        document.getElementById("icon_error2").style.display = "block";
        document.getElementById('Last_Name').style.border = "2px solid red";
        document.getElementById("note2").style.display = "block";
        document.getElementById("note2").innerHTML = "Last Name cannot be empty";
        valid = false;
    } else {
        document.getElementById("icon_error2").style.display = "none";
        document.getElementById('Last_Name').style.border = "2px solid rgb(3, 170, 120)";
        document.getElementById("note2").style.display = "none";
    }

    if (email === "") {
        document.getElementById("icon_error3").style.display = "block";
        document.getElementById('email').style.border = "2px solid red";
        document.getElementById("note3").innerHTML = "Email Address cannot be empty";
        document.getElementById("note3").style.display = "block";
        valid = false;
    } else {
        document.getElementById("icon_error3").style.display = "none";
        document.getElementById('email').style.border = "2px solid rgb(3, 170, 120)";
        document.getElementById("note3").style.display = "none";
    }

    if (pass === "") {
        document.getElementById("icon_error4").style.display = "block";
        document.getElementById('Password').style.border = "2px solid red";
        document.getElementById("note4").style.display = "block";
        document.getElementById("note4").innerHTML = "Password cannot be empty";
        valid = false;
    } else {
        document.getElementById("icon_error4").style.display = "none";
        document.getElementById('Password').style.border = "2px solid rgb(3, 170, 120)";
        document.getElementById("note4").style.display = "none";
    }
}