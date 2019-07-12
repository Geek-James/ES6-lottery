import $ from 'jquery';

class Interface{
    // 遗漏的接口
    getOmit(issue){
        let self = this;
        // 方便异步操作
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/omit',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function(res){
                    self.setOmit(res.data);
                    resolve.call(self,res);
                },
                error:function(err){
                    reject.call(err);
                }
            })
        });
    }
    getOpenCode(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/opencode',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function(res) {
                    self.setOpenCode(res.data);
                    resolve.call(res);
                },
                error:function(err){
                    reject.call(err);
                }
            })
        })
    }
    // getState 获取
    getState(issue){
        let self = this;
        return new  Promise((resolve,reject)=>{
            $.ajax({
                url:'/get/state',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function(res) {
                    resolve.call(self,res);
                },
                error:function(err){
                    reject.call(err);
                }

            })
        })
    }
}
// 导出当前
export default Interface