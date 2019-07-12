function test (){
    // 严格模式 let 不能重复定义 
    // 块级作用域
    // const 不能修改
    for (let i =0;i<5;i++) {
        console.log(i);
    }
    const a = 111;
    console.log(a);

    const k = {
        a:1
    }
    // 存储了对象,返回了对象存储的指针,指针不变,但是对象本身可以变
    k.a = 4;
    console.log(k);
}
// test();