//  异步 Promise
{
    let ajax = function(calback){
        console.log("执行");
        setTimeout(() => {
            calback&& calback.call()
        }, 1000);
    }

    ajax(function(){
        console.log("执行b");
    })
}

{
    let ajax = function(){
        console.log("执行2");
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve();
            },1000)
        })
    }
    ajax().then(function(){
        console.log('promise','timeout2');
    })
    .then(function(){
        return new Promise(function(resolve,reject){
            console.log('')
        })
    })
}

{
    // 所有图片加载完成后在加载界面
    function loadImg (src) {
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src = src;
            img.onload = function(){
                resolve(img);
            }
            img.oneerror = function(err) {
                reject(err);
            }
        })
    }

    function showImgs(imgs) {
        imgs.forEach(img => {
            document.body.appendChild(img);
        });
    }

    Promise.all([
        loadImg('https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1562497259&di=8ebd81d871e5660f2ce5a8f7bd0c88cf&src=http://pic2.52pk.com/files/allimg/090626/1553504U2-2.jpg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562507342559&di=ac7225d4547030567a90b3b2da99bd64&imgtype=0&src=http%3A%2F%2Fpic.k73.com%2Fup%2Fsoft%2F2016%2F0102%2F092635_44907394.jpg')
    ]).then(showImgs);
}

{
    // 有一个加载完就添加到页面上
    function loadImg(src) {
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src = src;
            img.onload = function(){
                resolve(img);
            }
            img.oneerror = function(err) {
                reject(err);
            }
        })
    }

    function showImgs (imgs) {
        let p = document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
    }
    //有一个响应 
    Promise.race([
        loadImg('https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1562497259&di=8ebd81d871e5660f2ce5a8f7bd0c88cf&src=http://pic2.52pk.com/files/allimg/090626/1553504U2-2.jpg'),
        loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562507342559&di=ac7225d4547030567a90b3b2da99bd64&imgtype=0&src=http%3A%2F%2Fpic.k73.com%2Fup%2Fsoft%2F2016%2F0102%2F092635_44907394.jpg')
    ]).then

}