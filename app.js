function printAnswers(arr){
    arr.forEach((e)=>{
        console.log(e);
    })
}
let userName =prompt("Please Enter Your Name");
let userGender=prompt("Please Enter Your Gender (Male || Female)");
let userAge=prompt("Please Enter Your Age");
while(userAge<0){
    alert("your age can't be less than zero");
    userAge=prompt("Please Enter Your Age");
}

let isUnderAge=prompt("are you over 18?");
if(isUnderAge==="") isUnderAge="invalid";
let isAthletic=prompt("do you play any type of sports?");
if(isAthletic==="") isAthletic="invalid"
let isMuslim=prompt("are you a muslim?");
if(isMuslim==="") isMuslim="invalid";
let wantSkip=confirm("Want To Skip The Welcoming message?");
userGender=userGender.toLowerCase();
const allAnswers=["Name: "+userName,"Age: "+userAge,"gender: "+userGender,"is underage: "+isUnderAge,"is Athletic:s "+isAthletic,"is Muslim: "+isMuslim];
printAnswers(allAnswers);
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

