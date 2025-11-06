 function calculateArm(num){
    let sum = 0;
    let temp = num;
    
    while(temp !=0){
       
       let rem = temp%10;
       sum = sum + (rem * rem * rem);
       temp = parseInt(temp/10);
    //    console.log(temp);
    }

  console.log(sum);
    if(sum == num){
       return "true";
    }else{
       return "false";
    }

}

// let cal1= calculateArm(407);
// let cal2= calculateArm(307);

// console.log(cal1, cal2);

module.exports = {calculateArm};