// 第三方库  
// core-decorators
{
    let readonly = function(target,name,descriptor){
        descriptor.write = false;
        return descriptor;
    }
  class Test {
    @readonly
    time(){
        return '2018-09-19'
    }
}
let test = new Test();
console.log(test.time());
test.time = function(){
    console.log('reset time');
    
}
console.log(test.time());
}

{
    let log = (type)=>{
        return function(target,name,descriptor) {
            let src_method = descriptor.value;
            descriptor.value=(...arg)=>{
                src_method.apply(target.arg);
                console.info(`log ${type}`);
            }
        }
    }
    class AD{
        @log('show')
        show(){
            console.info('ad is show');
        }
        @log('click')
        click(){
            console.log('ad is click');
        }
    }
    let ad = new AD();
    ad.show();
    ad.click();
}