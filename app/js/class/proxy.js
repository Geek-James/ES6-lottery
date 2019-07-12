let  perosn = {
    name:'james',
    age:26,
    profession:'software'
}

var proxy = new Proxy(perosn,{
    get:function(target,property) {
        if (property in target) {
            return target[property];
        } else {
            throw new ReferenceError("propertype\""+property + "\" does no exit" );
        }
    },
    set:function(target,key,value) {
        if(key === 'age') {
            if(value>80) {
                throw ReferenceError("invail");
            } else {
                return target[key] = value;
            }
        } else {
            return target[key];
        }
    }
});
proxy.age = 60;
console.log(proxy.name,proxy.profession,proxy.age);

var twice = {
    apply(target,ctx,agrs) {
        return Reflect.apply(...arguments)*2;
    }
};
function sum (a,b) {
    return a+b;
}
var proxy5 = new Proxy(sum,twice);

console.log(proxy5(1,3));
console.log(proxy5.apply(null,[1,3]));

console.log(Reflect.apply(proxy5,null,[1,3]));

// console.log(proxy2.call(null,1,3));

//  has 
let stu1 = {name:'张三',score:59};
let stu2 = {name:'李四',score:30};

let handle = {
    has(targer,prop) {
        if (prop === 'score' && targer[score] <60) {
            console.log(`${targer.name} 不及格`);
            return false;
        } 
        return prop in targer;
    }
}

let oproxy1  = new Proxy(stu1,handle);
let oproxy2 = new Proxy(stu2,handle);

console.log(oproxy2.score);

// 'score' in oproxy2;

// for (let a in oproxy1) {
//     console.log(oproxy1[a]);
// }



// let proxy = new Proxy(perosn,{
//     get:function(target,property,receiver){

//     }
// });

// var target = {};
// var handler = {};
// var proxy1 = new Proxy(target,handler);
// proxy1.a = 'b'; 
// console.log(target.a); // 'b'

// var object= {proxy:new Proxy(target,handler)};

// var proxy = new Proxy({
//     get:function(target,property) {
//         return 10;
//     }
// });
// let obj = Object.create(proxy);
// console.log(obj.time);

const map0 = new Map()
.set(1,'a')
.set(2,'b')
.set(3,'c');

const map1 = new Map(
    [...map0].filter(([k,v])=>k<3)
);
// 产生map结构{1=>'a',2=>'b'};
const map2 = new Map(
    [...map0].map(([k,v])=>[k*2,'_'+v])
);
// 产生map结构{2 => "_a", 4 => "_b", 6 => "_c"}

// function strMapToJson(strMap) {
//     return JSON.stringify(strMapToJson(strMap));
// }
// let myMap = new Map().set('yes',true).set('no',false);
// console.log(strMapToJson(myMap));

