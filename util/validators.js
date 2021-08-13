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
    valid: Object.keys(errors).length < 1
    }
}
