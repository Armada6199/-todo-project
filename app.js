let userName =prompt("Please Enter Your Name");
let userGender=prompt("Please Enter Your Gender (Male || Female)");
let userAge=prompt("Please Enter Your Age");
if(userAge<0) alert("your age can't be less than zero");
userAge=prompt("Please Enter Your Age");
let wantSkip=confirm("Want To Skip The Welcoming message?");
userGender=userGender.toLowerCase();
if(!wantSkip){
    if(userGender==="male"){
        alert(`Hello MR:${userName}`);
        console.log(userGender)
        }else if(userGender==="female") {
            console.log(userGender)
        alert(`Hello MS:${userName}`);
        }else {
            alert (`Hello ${userName}`)
        }
}

