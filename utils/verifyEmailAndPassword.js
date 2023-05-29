import React from "react";


const user = {email : 'wanted@gmail.com' , pw: 'wanted123!!'};

export function verifyEmail(id) {
    
    if (user.email === id) return true;

    return false;
}
export function verifyPaasword(password){
    
    if(user.pw === password) return true;
    return false;

}

