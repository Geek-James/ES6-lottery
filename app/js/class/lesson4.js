{
    console.log('a',`\u0061`);
    console.log('s',`\u20BB7`);
    
    console.log('s',`\u{20BB7}`);
}
{
    let s = '𠮷';
    console.log('lenght',s.length);
    console.log('0',s.charAt(0));
    console.log('1',s.charAt(1));

    let s1 = '𠮷a';
    console.log('code',s1.codePointAt(0).toString(16));
    // codePointAt 取ASCII值
    console.log('ASCII',s1.codePointAt(2));
}

 {
     console.log(String.fromCharCode("0x20bb7"));
     console.log(String.fromCodePoint("0x20bb7"));
 }

 {
    //  遍历code  
     let str = '\u{20bb7}abc';
     for(let i=0;i<str.length;i++) {
         console.log('es5',str[i]);
     }

     for (let code of str) {
         console.log('es6',code);
     }
 }

 {
    //  判断字符串中是否包含字符
    let str = "string";
    // 包含  include
    console.log('include',str.includes("s"));
     // 字符开始
    console.log('start',str.startsWith('s'));
    // 字符结束
    console.log('end',str.endsWith('g'));
    // 字符重复
    console.log('repeat',str.repeat(3));  
 } 

 {
    //  模板字符串  ``
    let name = "list";
    let info = "hello word";
    let m = `i am  ${name},${info}`;
    console.log(m);
 }

 {
    //  2位 补0   往前补 
    console.log('1'.padStart(2,'0'));
    // 往后补 
    console.log('1'.padEnd(2,'0'));  
 }

 {
    //  标签模板
     let user = {
         name:'list',
         info:'hello word'
     };
     abc`i am ${user.name},${user.info}`;
     function abc(s,v1,v2){
         console.log(s,v1,v2);
         return s+v1+v2;
     }
 }

 {
    //  raw 可以添加一个\
     console.log(String.raw`Hi\n${1+2}`);
     console.log(`Hi\n${1+2}`); 
}

 {
     // 二进制  0b
     // 八进制 0o  
    //  不区分大小写
    console.log('b:',0b111001);
    console.log(0o767);
 }

 {
     console.log('15',Number.isFinite(15));
     console.log('NaN',Number.isFinite(NaN));
 }

  {
      console.log('25',Number.isInteger(25));
      console.log('24.0',Number.isInteger(24.1));
      console.log('43.1',Number.isInteger('43.1'));
  }

  {
      console.log(4.1,Math.trunc(4.1));
      console.log(4.9,Math.trunc(4.9));

      console.log('-5',Math.sign(-5));
      console.log('5',Math.sign(5));
      console.log('0',Math.sign(0));  
  }

  {
    //   立方根
      console.log('-1',Math.cbrt(8));
  }
