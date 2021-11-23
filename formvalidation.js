function checkall() {
    var email = document.myform.email.value
    var pass= document.myform.pass.value
    var regPass ="(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}"
    var reqemail="[a-z0-9._%+-]+@([a-z0-9.-]{5})+\.[a-z]{2,4}"
    var reqmobile="([0-9]{10,12})"

    if (!email.match(reqemail)){
        window.alert("Name required");
        document.myform.fname.focus();
        return false;
    } 
    if (!pass.match(regPass)){
        window.alert)()
    }
}
