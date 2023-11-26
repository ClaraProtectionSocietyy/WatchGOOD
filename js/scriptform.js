function validasi(event) {
    event.preventDefault();

    var isValid= true
    document.getElementById("namaerror").textContent=""
    document.getElementById("emailerror").textContent=""
    document.getElementById("msgerror").textContent=""
    document.getElementById("countryerror").textContent=""

    var username = document.getElementById("nama").value
    console.log(username);
    if(username.length <6){
        document.getElementById("namaerror").textContent="Username must contains at least 6 characters"
        isValid=false
    }
    var email= document.getElementById("email").value
    if(!email.endsWith("@gmail.com")){
        document.getElementById("emailerror").textContent="Email must contains @gmail.com"
        isValid=false
    }
    var message = document.getElementById("msg").value
    console.log(msg);
    if(message.length <6 || message.length>1500){
        document.getElementById("msgerror").textContent="Message must contains between 6 and 1500 characters"
        isValid=false
    }
    var country = document.getElementById("country").value
    console.log(country);
    if(country.length <4 || country.length >20){
        document.getElementById("countryerror").textContent="Country Region must contains between 4 and 20 characters"
        isValid=false
    }
    var agree= document.getElementById("check").checked
    if(!agree){
        document.getElementById("checkerror").textContent="Please agree to our terms and services"
        isValid=false
    }
    if (isValid){
        document.getElementById("formulir").submit()
    }

}