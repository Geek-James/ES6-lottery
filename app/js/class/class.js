function Person(options){
    this._init(options);
}

Person.prototype = {
    constructor:Person,
   _init:function(options) {
    this.name = options.name;
    this.age = options.age;
   },
    sayHello:function(){
        console.log(this.name+this.age);
    }
}

let a = new Person({
    name:'james',
    age:19
});

a.sayHello();

class Person2{
    constructor(age,name){
        this.age = age;
        this.name = name;
    }
    sayHello(){
        console.log(this.name+this.age);
    }
}
let b = new Person2();

console.log(b.__proto__ === Person2.prototype); // true
console.log(Person2 === Person2.prototype.constructor); // true
console.log(a.__proto__ === Person.prototype); // true
console.log(Person === Person.prototype.constructor); // true
console.dir(Person.prototype.__proto__.__proto__); // null
console.log(a.constructor === Person.prototype.constructor); //true
console.log(b.constructor === Person2.constructor);// false
console.log(b.constructor === Person2.prototype.constructor); // true
// 相当于 Object.prototype.hasOwnProperty
console.log(Person2.prototype.__proto__.hasOwnProperty('toString')); 
console.log(Object.prototype.hasOwnProperty('toString'));

// generator 方法 拥有iterator的构造函数
class Foo {
    constructor(...args){
        this.args = args;
    }
    *[Symbol.iterator](){
        for (let arg of this.args) {
            yield arg;
        }
    }
}
let fun = function(){
    return 'ddd';
}
for(let x of new Foo('hello','word','af',fun())){
    console.log(x);
    
}

{
    class Foo{
        // 静态方法 只能通过 Foo.classMethod来调用
        static classMethod(){
            return 'this is a parent function';
        }
    }
  class Bar extends Foo {
    static classMethod(){
        return super.classMethod() + ',dd';
    }
  }
//   Bar.classMethod();
console.log(Foo.classMethod());
console.log(Bar.classMethod())
}

{
    class IncreasingCounter{
        constructor() {
            this._count = 0
        }
        // _count = 0;
        get value(){
            console.log('Getting the current value!');
            return this._count;
        }
        increment(){
            this._count ++;
            return console.log(this._count);
        }
    }

    let increaseCount = new IncreasingCounter();
 
   increaseCount.increment();
    
}

{
    class Foo {
        
    }
}