//  解构赋值

// 数组解构赋值

// 字符串解构赋值
// 布尔值解构赋值
// 函数参数解构赋值
// 数值解构赋值

/**
 * 数组解构赋值
 * */ 
{
    let a,b,rest,c;
    [a,b,c] = [1,2,5];
    console.log(a,b,c);
    [a,b,...rest] = [1,2,3,4,5,6,7,7];
    console.log(a,b,rest);
}
{
    let a,b;
    ({a,b} = {a:1,b:2})
    console.log(a,b);
}
{
    // 变量的交换
    let a=1;
    let b=2;
    [a,b]= [b,a];
    console.log(a,b)
}

{
    function f(){
        return[1,2]
    }
    let a,b;
    [a,b] = f();
    console.log(a,b);
    
}

{
    // 选择性赋值
    function f(){
        return [1,2,3,4,5];
    }
    let a,b,c;
    [a,,,b]=f();
    console.log(a,b);
}

{
    // ... 组一个数组
    // , 分隔 隔离
    function f(){
        return [1,2,3,4,5];
    }
    let a,b,c;
    [a,,,...b]=f();
    console.log(a,b);
    
}

/**
 * 对象解构赋值
 * */
{
    let o = {p:42,q:true}
    let {p,q} = o;
    console.log(p,q);
}
{
    let {a=3,b=7}={a:8};
    console.log(a,b);
}

{
    let meteData = {
        title:'abc',
        test:[{
            title:'test',
            desc:'dafa'
        }]
    }

    let {title:esTitles,test:[{
        title:cnTitle
    }]} = meteData;
    console.log(esTitles,cnTitle);
    
}