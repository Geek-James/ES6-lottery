class Caculate{
    /**
     * 计算注数
     *
     * @param {*} active 当前选中的号码
     * @param {*} play_name 当前的玩法标注
     * @returns
     * @memberof Caculate
     */
    computeCount(active,play_name){
        let count =0;
        const exist = this.play_list.has(play_name);
        // 指定active数组,默认为0
        const arr = new Array(active).fill('0');
        if(exist && play_name.at(0) === 'r'){
            count = Caculate.combine(arr,play_name.split('')[1]);
        }
        return count;
    }


    /**
     *
     * 奖金范围预测
     * @param {*} active [当前选中的号码]]
     * @param {*} play_name [当前玩法的标识]
     * @memberof Caculate  [奖金范围]
     */
    computeBonus(active,play_name) {
        const play = play_name.splice('');
        const self = this;
        let arr = new Array(play[1]*1).fill(0);
        let min,max;
        if(play[0] === 'r') {
            let min_active = 5-(11-active);
            if(min_active>0) {
                if(min_active-play[1]>=0) {
                    arr = new Array(min_active).fill(0);
                    min = Calculate.combine(arr,play[1]).length;
                } else {
                    if(play[1]-5>0&&active-play[1]>=0) {
                        arr = new Array(active-5).fill(0);
                        min = Caculate.combine(arr,play[1]-5).length;
                    } else {
                        min = active-play[1] >-1?1:0;

                    }
                }
            } else {
                min = active-play[1]>-1?1:0;
            }

            // 最大值
            let max_active = Math.min(active,5);
            if(play[1]-5>0) {
                if(active-play[1]>=0) {
                    arr = new Array(active-5).fill(0);
                    max = Caculate.combine(arr,play[1]-5).length;
                } else {
                    max = 0;
                }
            } else if (play[1]-5<0) {
                arr = new Array(Math.min(active,5)).fill(0);
                max = Caculate.combine(arr,play[1]).length;
            } else {
                max = 1;
            }
        }
        return [min,max].map(item=>item*self.play_list.get(play_name).bonus);


    }

      /**
       * 组合运算
       *
       * @static
       * @param {*} arr [参与组合运算的数组]
       * @param {*} size [组合运算的基数]
       * @memberof Caculate [计算注数]
       */
      static combine(arr,size){
        let allResult=[];
        (function f(arr,size,result){
            let arrLen = arr.length;
            if(size>arrLen) {
                return;
            }
            if (size === arrLen) {
                allResult.push([].concat(result,arr));
            } else {
                for (let i=0;i<arrLen;i++) {
                    let newResult = [].concat(result);
                    newResult.push(arr[i]);
                    if(size === 1) {
                        allResult.push(newResult)
                    } else {
                        let newArr = [].concat(arr);
                        newArr.splice(0,i+1);
                        f(newArr,size-1,newResult);
                    }
                }
            }
        })(arr,size,[]);
    }
}

export default Caculate