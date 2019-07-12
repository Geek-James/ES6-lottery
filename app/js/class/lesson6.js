// 函数新特性
//  参数默认值   rest 参数  扩展运算符  箭头函数  this 绑定 尾调用

{
    function test(x='ddd',y) {
        console.log('默认值',x,y);
    }
    test('sss','adfaf');
}
{
    function test3 (...arg){
        for(let v of arg){
            console.log('rest',v);
            
        }
    }
    test3(1,2,3,4,'a');
}
{
    console.log('a',...[1,2,3,4]);
}
{
    let arrow = v =>v*2;
    console.log('arrow',arrow(3));
}

{
    function tail(x,y,z) {
        console.log('tail',x,y,z);
    }
    function fx(x,y,z){
        return tail(x,y,z);
    }
    fx(1,2,3);
}