const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmpassword = document.querySelector("#confirmpassword");
const form = document.querySelector("form");

username.addEventListener("keyup", function () {
    if (username.value.length < 3) {
        username.style.backgroundColor = "#DF6553";
    }
    else {
        username.style.backgroundColor = "#54BF36";
    }
})

email.addEventListener("keyup", function () {
    if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        email.style.backgroundColor = "#DF6553";
    }
    else {
        email.style.backgroundColor = "#54BF36";
    }
})

password.addEventListener("keyup", function () {
    if (password.value.length < 8) {
        password.style.backgroundColor = "#DF6553";
    }
    else {
        password.style.backgroundColor = "#54BF36";
    }
})

confirmpassword.addEventListener("keyup", function () {
    if (confirmpassword.value !== password.value) {
        confirmpassword.style.backgroundColor = "#DF6553";
    }
    else {
        confirmpassword.style.backgroundColor = "#54BF36";
    }
})