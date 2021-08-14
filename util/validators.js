module.exports.validateRegisterInput = (username,password,
    confirmPassword) => 
{ 
    const errors = {};
    if(username.trim() === "" ){
        errors.username = "username cannot be empty";
    }
    if(password === ""){
        errors.username = "Password cannot be empty";
    } else if(confirmPassword !== password){
        errors.username = "Passwords do not match"
    }

    return{
    errors,
    valid: Object.keys(errors).length < 1 //indicating no errors if less than 1
    }
}

module.exports.validateLoginInput = (username,password) => {

    const errors = {};
    if(username.trim() === "" )
    {
        errors.username = "username cannot be empty"
    }
    if(password.trim() === "")
    {
        errors.username = "Password cannot be empty"
    }

    return{
        errors,
        valid: Object.keys(errors).length < 1 //indicating no errors if less than 1
        }
}