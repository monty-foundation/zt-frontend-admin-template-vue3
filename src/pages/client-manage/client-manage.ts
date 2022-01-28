
// 候选待发布版本
import { Vue, Options } from 'vue-property-decorator'
require('./client-manage.scss');
@Options({})
export default class clientManage extends Vue {
    xxx:any = '1234567890';
    created(){
        console.log('1111111');
    }
    mounted(){
        console.log(this.xxx)
    }
    btClick(){
        console.log('btClickbtClickbtClickbtClick');
        alert('点击方法');
    }
}
// export default {
//     name: " client",
//     // 组合API函数入口
//     setup() {
//         console.log('12312312312312');
//     },
// };
