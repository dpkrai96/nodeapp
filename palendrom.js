function isPalendromNum(num){
   let temp = num
   let newNum = 0;
   while(Math.floor(temp)){
    rem = temp%10; //3
    newNum = (newNum * 10) + rem; 
    temp = parseInt(temp/10);
   }
   console.log(newNum);
   //
   if(newNum == num){
    return true;
   }else{
    return false;
   }
}

function isPalendromStr(str){
   
    let palendrom = '';
    let strArr = str.split("");
    console.log(strArr);
    let i = 0;
    while(strArr.length >i){
        //  if(strArr[i] !=strArr[strArr.length-i]){
            palendrom = palendrom + strArr[(strArr.length-1)-i] ;
        //  }11waqa1Q1QA
        console.log(palendrom);
         i++;
    }
    if(palendrom==str){
        return true;
    }else{
        return false;
    }
    // return palendrom;
}
module.exports = {isPalendromNum,isPalendromStr}