// import { log } from "util";

// export let A = 123;
// export function test (){

// }
// export class Hello{
//     test(){
//         console.log('hello');
        
//     }
// }
let A = 123;
let test = function(){
    console.log('test');
}
class Hello{
    test(){
        console.log('class');
        
    }
}

export default {
    A,
    test,
    Hello
}