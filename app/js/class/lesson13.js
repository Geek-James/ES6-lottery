//  ES6 的 iterator  迭代器
{
    let arr = ['hello','word'];
    let map = arr[Symbol.iterator]();
    console.log(map.next());
    console.log(map.next());
    console.log(map.next());
}

{
    let obj = {
        start:[1,2,3,4],
        end:[6,7,8,9],
        [Symbol.iterator](){
            let self = this;
            let index = 0;
            let arr = self.start.concat(self.end);
            let length = arr.length;
            return {
                next(){
                    if(index<length) {
                        return {
                            value:arr[index++],
                            done:false
                        }
                    } else {
                        return {
                            value:arr[index++],
                            done:true
                        }
                    }
                }
            }
        }
    }
for(let key of obj) {
    console.log(key);
}
}

{
    // for of 底层是 iterator 
    let arr = ['hello','word'];
    for (let value of arr) {
        console.log('value',value);
        
    }
}