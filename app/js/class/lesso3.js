{
    let reges = new RegExp('xyz','i');
    let reges2 = new RegExp(/xyz/i);

    console.log(reges.test('xyz123'),reges2.test('xyz123'));

    let reges3 = new RegExp(/xyz/ig,'s');
    console.log(reges3.flags);
}

{
    let s = 'bbb_bb_b';
    let a1 = /b+/g;
    let a2 = /b+/y;

    console.log('one',a1.exec(s),a2.exec(s));
    console.log('one',a1.exec(s),a2.exec(s))
}