
function eventLoop(){
    console.log('1 synchronous');
    setTimeout(()=> { console.log('5. setTimeout')}, 0);
    setImmediate(()=> {
        console.log('4 setImmediate');
    });
    Promise.resolve().then(()=>{
        console.log('3 Promise')
    });
    process.nextTick(()=>{ console.log('2 nextTick')});

}

function eventLoop1(){
    console.log('1 synchronous');
    setTimeout(()=> { console.log('5. setTimeout')}, 0);
    setImmediate(()=> {
        console.log('4 setImmediate');
    });
    Promise.resolve().then(()=>{
        console.log('3 Promise')
    });
    process.nextTick(()=>{ console.log('2 nextTick')});

}

function eventLoop1(){
    setTimeout(()=>{
     console.log('start');
     setTimeout(()=>{console.log('setTimeout 1') });
     setTimeout(()=> {
        console.log(console.log('setTimeout 2'))
        process.nextTick(()=>{console.log('nextTick inside settimeout 2')})
     },0);
     setImmediate(()=>{ console.log('setImmediate 1')});
     setImmediate(()=>{
        console.log('setImmediate 2');
        process.nextTick(()=>{
            console.log('nextTick inside setImmediate 2')
        });
     })
    Promise.resolve().then(()=>console.log('Promise 1'))
    Promise.resolve().then(()=>{
        console.log('Promise 2')
       process.nextTick(()=>console.log('nextTick inside Promise2'))
    });

    process.nextTick(()=> console.log('nextTick 1'))
    process.nextTick(()=>{
        console.log('nextTick 2')
        Promise.resolve().then(()=>console.log('Promise inside nextTick 2'))
    });
    console.log('end');
    }, 400);
}
function eventLoop2(){
    console.log('A');
    setTimeout(()=>{
        console.log('B');
    }, 0);
    Promise.resolve().then(()=> console.log('C'));
    console.log('D');
}

function eventLoop3(){
for(i=0; i<3; ++i){
    setTimeout(()=>{
     console.log(i);
    }, 100)
}
}
module.exports = {eventLoop, eventLoop1, eventLoop2, eventLoop3};