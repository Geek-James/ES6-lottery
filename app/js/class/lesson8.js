// Symbol
{
    // 独一无二的
    let a1 = Symbol();
    let a2 = Symbol();
    console.log(a1 === a2);
    let a3 = Symbol.for('a3');
    let a4 = Symbol.for('a3');
    console.log(a3===a4);
}
{
    let a1 = Symbol.for('abc');
    let obj = {
        [a1]:123,
        'abc':345,
        c:456
    };
    console.log('obj',obj);
    // 取不出来带symbol的值
    for(let [key,value] of Object.entries(obj)){
        console.log('let of',key.value);
    }

    // 通过getOwnPropertySymbols 取symbol的值
    Object.getOwnPropertySymbols(obj).forEach(function(item){
        console.log(obj[item]);
    })
    // 取所有的值
    Reflect.ownKeys(obj).forEach(function(item){
        console.log('ownkeys',item,obj[item]);
        
    })
}