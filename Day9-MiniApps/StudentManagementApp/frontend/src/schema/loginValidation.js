const Validation =(values)=>{
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email === ""){
        error.email = "Email is required"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Email is invalid"
    }
    else{
        error.email = ""
    }

    if(values.password === ""){
        error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Passwords should match"
    }
    else{
        error.password = ""
    }
}   

module.exports = Validation