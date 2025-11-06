
class output{
    
    constructor(varA, varB){
        const id= 5;
        console.log(id);
        console.log(varA);
    }
    //closure creation
     getVar(params) {
        console.log(params);
        let counter = 0;
        return function(){
              counter = counter+1;
              console.log(counter);
        }
    }
}

let obj = new output(13,17);

let getVar = obj.getVar(['name', 'deepak']);

getVar();
getVar();
getVar();

//apply, call, bind example
function base(...arguement1){
console.log(arguement1);
}

base.apply(this,[3,4]);
base.call(this,3,4);
let baseBind = base.bind(this,3,4);
baseBind();