//  数组扩展
{
    let arr = Array.of(1,2,3,4,5);
    console.log('arr =',arr);

    let empty = Array.of();
    console.log('empty',empty);
}
//  from 
{
    let p = document.querySelectorAll('p');
    let pArray = Array.from(p);

    pArray.forEach(function(item){
        console.log(item);
    });

    console.log(p);
}
//  find 查找 只找第一个
console.log([1,2,3,4,5,6].find(function(item){
    return item>3;
}));
//  findIndex 找下标
console.log([1,2,3,4,5].findIndex(item=>{
    return item>3;
}));

