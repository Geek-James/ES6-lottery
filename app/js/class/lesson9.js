//  数据结构
//  set 用法  weakSet 用法
//  Map 用法  weakMao 用法
{
    let list = new Set();
    list.add(5);
    list.add(7);
    // size属性 获取长度
    console.log('size',list.size);
    
}
{
    // 默认值
    let arr = [1,2,3,4,5];
    let list = new Set(arr);
    console.log('size',list.size);
}
{
    // set可以去重
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);
}

{
    let arr = ['add','delete','clear','has'];

    let list = new Set(arr);
    // console.log(list.clear());

    for (let key of list.keys()) {
        console.log('keys',key);
    }
    for(let value of list.values()) {
        console.log('value',value);
    }

    for (let [key,value] of list.entries()) {
        console.log('entrire',key,value);
    }

    list.forEach(function(item) {
        console.log(item);
    });
}

{
    // 弱引用set
    let weakList = new WeakSet();
    let arg = {};
    weakList.add(arg);

    // weakList.add(2);
    console.log('weaklist',weakList);
}

    // 优先使用map  如果数据唯一性使用set
    // 尽量较少使用array和object存储数据
{
    let item = {t:1};
    let map = new Map();
    let set = new Set();
    let obj = {};

    // 增
    map.set('t',1);
    set.add('t1',2);
    obj['t3'] = 3;
    console.log(obj,set,map);

    // 改
    map.set('t',2);
    item.set = 2;
    obj['t3'] = 't4';
    console.log(obj,map,set);
    
    // 查 has 
// map.has('t')
console.log(map.has('t'));
console.log(set.has(item));
console.log('t3' in obj);
}
// 删 delete

{
    // map set object对比
let item = {t:1};
let map = new Map();
let set = new Set();
let obj = {};

// 增
map.set('t',1);
set.add(item);
obj['t'] = 1;

console.info('map -set-obj',map,set,obj);

// 查
console.info(
    {
        map_exit:map.has('t'),
        set_exit:set.has(item),
        object_exit:'t' in obj
    }
)

// 改
console.info({
    map_change:map.set('t',2),
    set_change: item.t = 2,
    obj_change:obj['t'] = 10
});

// 删除
map.delete('t');
set.delete(item);
delete obj['t'];
console.info('map-set-obj',map,set,obj);
}