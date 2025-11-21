//1.
console.log( false ==[]);
//true
console.log( false ==[]);
//treu

//2.
console.log(3+true);
//3+1= 4
//arithmatic true=1, false=0

//3.
const a= {};
const b = {key:"b"};
const c= {key:"c"};

a[b] = 123;
a[c] = 456;

console.log(a[b]);
console.log(a);

//4.
const uniqueId = Symbol('id');
const user= {
    name:'Alice',
    [uniqueId]: 123
};
console.log(user.uniqueId);
console.log(user[uniqueId]);

console.log(Object.keys(user));

//5.
let result = 5+ "3";
console.log(result)
//concatenate = 53
 result = 5+ +"3";
// output 8
//concatenate = 53
 result = 5-"3";
// output 2
//concatenate = 53
 result = 5- -"3";
// output 8

//6.
let arr  = [1,2,[3,4,5],6]

//first scenario bad

let copyarr = arr;
 copyarr.push(7);
//second scenario also bad
 copyarr = [...arr];

// fine
 copyarr = JSON.parse(JSON.stringify(arr)); 
 copyarr[2].push(7);
console.log(arr);
console.log(copyarr);

//7.
function check(){
    throw new Error("Param Required");
}
function show(name = check()){
    //Name is required 
    console.log(name);
}
show();


//8.

function show(){
    {
        var x = 9;
        var y = 10;
    }
    console.log(x,y);
}


function show(){
    {
        (function (){
            var x =9;
            var y = 10;
        })();
    }
    // console.log(x,y);
}
show();