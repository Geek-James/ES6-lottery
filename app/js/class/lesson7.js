// 对象扩展
//  函数新增特效
// 简洁比表达

{
    let o=1;
    let k =2;
    let es5= {
        o:o,
        k:k
    }
    let es6 = {
        o,
        k
    }
    
    let es5_method = {
        hello:function () { 
            console.log('hello es5');
            
         }
    }

    let es6_method = {
        hello(){
            console.log('hello es6');
        }
    }

    es5_method.hello();
    es6_method.hello();
}

{
    //  is 判断两个值是否一样
    console.log('字符串',Object.is('abc','abc'),'abc'==='abc');

}

{
    // 拷贝 assign  entries 遍历
    console.log('拷贝',Object.assign({a:'a'},{b:'b'}));
    
    let test = {k:123,o:456}
    for(let [key,value] of Object.entries(test)) {
        console.log(key,value);
    }
}

{
    // 扩展运算符
    // let {a,b,...c}={a:'test',b:'kill',c:'ddd',d:'rrr'};

}