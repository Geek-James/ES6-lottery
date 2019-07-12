{
    // Generator 本质是一个遍历器生成函数
function* helloGenerator() {
    yield 'hello';
    yield 'generator';
    return 'ending';
    var hw = helloGenerator();
    // console.log(hw.next());  // value:"hello"  done:false
    // console.log(hw.next());  // value:"generator"  done:false
    // console.log(hw.next());  // value:"ending"  done:true
    // console.log(hw.next());  // value:undefined  done:true
    } 
}

{
    let obj = {};
    obj[Symbol.iterator] = function* (){
        yield 1;
        yield 2;
        yield 3;
    }
    // 通过for of 来遍历  iterator
    for (const value of obj) {
        // console.log('value',value);
    }
}
{
    // 状态机 概念
    let states = function* (){
        while(1){
            yield 'a';
            yield 'b';
            yield 'c';
        }
    }
    let state = states();
    // console.log(state.next());
    // console.log(state.next());
    // console.log(state.next());
    // console.log(state.next());
    // console.log(state.next());
}

// {
//     let st = async function () {
//         while(1){
//             await 1;
//             await 2;
//             await 3;
//         }
//       }
//       let state = st();
//       console.log(state.next());
//       console.log(state.next());
//       console.log(state.next());
//       console.log(state.next());
// }

// 长轮循
{
    let ajax = function* (){
        yield new Promise(function(resolve,reject) {
            setTimeout(() => {
                resolve({code:0})
            }, 2000);
        })
    }
    
    let pull = function(){
        let generator = ajax();
        let step = generator.next();
        step.value.then(function(d){
            if(d!=0) {
                setTimeout(() => {
                    // console.info('wait');
                    pull()
                }, 1000);
            } else {
                // console.info(d);
            }
        })
    }
pull();
}
{
// 抽奖
let draw = function(count) {
    console.log(`剩余${count}次`);
}

let residue = function* (count){
    while(count >0) {
        count--;
        yield draw(count);
    }
}

let start = residue(5);
let btn = document.createElement('button');
btn.textContent = '抽奖';
document.body.appendChild(btn);
btn.addEventListener('click',function(){
    start.next();
},false);
}

{
    let arr = [1,[2,3],[[4,5,6],7],[[8],[[9],[10]]]];
    let flat = function* (a) {
        let length = a.length;
        for (let i=0;i<length;i++){
            let item = a[i];
            if(typeof item !== 'number') {
                yield* flat(item);
            } else {
                yield item;
            }
        }
    };
    let newArray = [];
    for (var f of flat(arr)) {
        newArray.push(f)
    }
    console.log(newArray);
}

{
    let myInterable = {};
    myInterable[Symbol.iterator] = function* (){
        yield 1;
        yield 2;
        yield 3;
    };
    for (const value of myInterable) {
        console.log(value); 
    }
    console.log([...myInterable]);
    
}
{
    function* foo(x){
        var y = 2*(yield (x+1));  // 6
        var z = yield(y/3);
        return (x + y + z);  // 5+ 24 + 13 = 42
    }
    var b = foo(5);
    console.log( b.next());
    console.log( b.next(12));  // (yield(x+1) ==12 ) 24
    console.log( b.next(13));  // z  = 13 
}
{
    function* fiboncci() {
        let [prev,curr] = [0,1];
        for(;;){
            yield curr;
            [prev,curr] = [curr,prev + curr];
        }
    }
    let array = [];
    for (let n of fiboncci()) {
        if(n>1000) break;
        array.push(n);
    }
    console.log(array);
}
{
    function* foo(){
        yield 'a';
        yield 'b';
    }
    function* bar(){
        yield 'x';
        // 手动遍历
        for(let i of foo()){
            console.log(i);
        }
        yield 'y';
    }
    for (let v of bar()) {
        console.log(v);
    }
}