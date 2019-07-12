// Proxy 和 Reflect的概念
{
    //创建对象
    let obj = {
        time:'2018-09-09',
        name:'net',
        _r:123
    };

    let monitor = new Proxy(obj,{
        // 拦截对象属性的读取
        get(target,key) {
            return target[key].replace('2018','2019');
        },
        set(target,key,value) {
            if(key==='name') {
                return target[key] = value;
            } else {
                return target[key];
            }
        },
        has(target,key){
            if(key === 'name'){
                return target[key];
            } else {
                return false;
            }
        },
         // 只有_开头才可以被删除
        deleteProperty(target,key) {
            if(key.indexOf('_')>=-1) {
                delete target[key];
            } else {
                return target[key];
            }
        },
        ownKeys(target) {
            // 拦截 object.keys,Object.getOwnProperSymbols,Object.getOwnPropertyNames
           return Object.keys(target).filter(item =>item!='time');
        }

    });
    monitor.name = "我是james";
    monitor.time = '2020';
    console.log('get',monitor.time,monitor.name);
}

{
    let obj = {
        time:'2018-09-09',
        name:'net',
        _r:123
    };
}
//  数据校验  解耦
{
    function validator(target,validatou) {
        return new Proxy(target,{
            _validator:validator,
            set(target,key,value,proxy){
            if(target.hasOwnProperty(key)) {
                let va = this._validator[key];
                if(!!va(value)) {
                    return Reflect.set(target,key,value,proxy);
                } else {
                    throw Error (`${key} 不存在`)
                }
            }    
          }
        })
    }

    const personValidators = {
        name (val) {
            return typeof val === 'string';
        },
        age (val) {
            return typeof val === 'number' && val>18;
        }
    }
    class Person {
        constructor(name,age) {
            this.name = name;
            this.age = age;
        }
    }

    const person = new Person("lileo",12);

    console.info(person);

    person.name = 'james';
    console.log(person);
    person.age = '5';
    console.info(person);

}