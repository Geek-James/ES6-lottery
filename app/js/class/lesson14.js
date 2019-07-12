//  Generator 
//  异步编程的解决方案
{
    let tell = function* (){
        yield 'a';
        yield 'b';
        yield 'c';
        return 'd';
    };
    let k = tell();
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
}

{
    let obj = {};
    obj[Symbol.iterator] = function *(){
        yield function(){
            return a;
        };
        yield 2;
        yield 3;
    }

    for(let value of obj) {
        console.log('value',value);
        
    }
}

{
    // 状态机 循环取值
    let state = function* (){
        while(1){
            yield 'A';
            yield 'B';
            yield 'C';
        }
    }
    let states = state();
    console.log(states.next());
    console.log(states.next());
    console.log(states.next());
}

{
        let draw = function (count) {
            // 具体的抽奖逻辑
            console.info(`剩余${count}次`);
        }
    
        let residue = function *(count){
            while(count>0) {
                count --;
                yield draw(count);
            }
        }
        let start = residue(5);
        let btn = document.createElement('button');
        console.log(btn);
        btn.id = 'start';
        btn.textContent = '抽奖';
        document.body.appendChild(btn);
        document.getElementById('start').addEventListener('click',function(){
            start.next()
        },false)
    }
    
    
