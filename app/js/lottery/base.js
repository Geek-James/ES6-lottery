import $ from 'jquery'
class Base{

    /**
     *
     * [initPlayList] 初始化奖金和玩法及说明
     * @memberof Base
     */
    initPlayList(){
        this.play_list.set('r2',{
            bonus:6,
            tip:'从01~11中任'
        })
    }
}