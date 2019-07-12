// symbol 
// 表示独一无二的
{
    let a1 = Symbol('abc');
    let a2 = Symbol('4');
    let obj = {
        [a1]:'123',
        [a2]:'333',
        'abc':344,
        'c':456
    };
    // console.log(obj);
    for (let [key,value] of Object.entries(obj)) {
        // console.log('let of',key,value);
        // 取不到 [a1] 这个值
        //getOwnPropertySymbols 通过这方法来取 symbol
    }
    // 通过getOwnPropertySymbols得到一个数组,然后通过foreach来遍历出来
    Object.getOwnPropertySymbols(obj).forEach(item => {
        // console.log(obj[item]);
    });
    let arr = Object.getOwnPropertySymbols(obj);
    let arr2 = Object.getOwnPropertyNames(obj);
    // let arr3 = Object.getPrototypeOf(obj);
    // console.log(arr3);
    
    // console.log(arr);

  (Object.getOwnPropertySymbols(obj).forEach(item=>{
    //   console.log('getOwnPropertySymbols',item,obj[item]);
  }));
  for (let key of arr.entries()){
    //   console.log(key);
  }

  Reflect.ownKeys(obj).forEach(item=>{
    //   console.log('ownkeys',item,obj[item]);
      
  });
}