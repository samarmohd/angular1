

function signup(){
    var fullname = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var arr = {
        'user_name':fullname,
        'email':email,
        'password': password
    }
    var config = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };

    axios.post('http://localhost/virtusa/login/functions/products/user_signup.php', arr, config)
      .then((response) => {
      console.log(response.data);
      if (response.data === 'Existing user') {
        swal("OOPS!", "User Already Exists!", "info");
      }
      else if (response.data === 'product was created.') {
         swal({
        title: "Wow!",
        text: "Signup Successful!",
        icon: "success"
        }).then(function() {
        window.location = "../dashboard/examples/dashboard.php?user="+email;
        });
      }
      else if (response.data === 'Unable to create product.'){

        swal({
            title: "OOPS!",
            text: "Unable to Create",
            icon : "info"
        })
        }
     
    });
}


function validate_user(){
    var email = document.getElementById('login_id').value;
    var password = document.getElementById('login_password').value;

    var arr={
        'email': email,
        'password':password
    }
    var config = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };
    axios.post('http://localhost/virtusa/login/functions/products/user_login.php', arr, config)
      .then((response) => {
      console.log(response.data);
      if (response.data === 'Password Does not match.') {
        swal("OOPS!", response.data, "info");
      }
      else if (response.data === 'Successful') {
         swal({
        title: "Wow!",
        text: "Login Successful!",
        icon: "success"
        }).then(function() {
        window.location = "../dashboard/examples/dashboard.php?user="+email;
        });
      }
      else if (response.data === 'User does not exist.'){

        swal("OOPS!", response.data, "info");
        }
     
    });
}