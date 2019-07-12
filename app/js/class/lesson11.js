//  ES6 类
//  基本语法   类的继承   静态方法
//  静态属性  getter  setter

{
    // 基本定义和生成实例
    class Parent {
       constructor(
           name="zhangcong",
           age=26) {
               this.name = name;
               this.age = age;
           }
    }
    let v_parent = new Parent('v','44');
    console.log('构造函数和实例',v_parent)
}

{
    class Parent{
        constructor(name="ddd") {
            this.name = name;
        }
    }
    class Child extends Parent{
        constructor(name = 'child') {
            // super一定要放到第一行
            // super(name);
            // this.type = 'child';
            super(name);
            // this.name = name;
        }

    }
    console.log('child',new Child());
    console.log('parent',new Parent());
}

{
    // getter  setter
    class Parent {
        constructor(name = "jdd") {
            this.name = name;
        }
        get longName(){
            return 'mk'+this.name;
        }

        set longName(value){
            this.name = value;
        }
    }

    let v = new Parent();
    console.log('getter',v.longName);
    v.longName = "afafafafadf";
    console.log('setter',v.longName);
}

{
    // 类的静态方法
    class Parent {
        constructor(name = "afad") {
            this.name = name ;
        }
        static tell(){
            console.log('tell');
        }
    }
    Parent.tell();
}

{
    // 静态属性
     class Parent {
        constructor(name = "afad") {
            this.name = name ;
        }
    }
    Parent.type = 'test';
    Parent.staticPropertype = '这是一个静态属性'
    console.log('静态属性',Parent.type,Parent.staticPropertype);

}