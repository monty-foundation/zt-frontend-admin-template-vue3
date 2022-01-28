
import { reactive, onMounted, toRefs, nextTick,ref } from 'vue'
import { useRouter } from 'vue-router'
require('./index.less');

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Cash Assets',
      className: 'column-money',
      dataIndex: 'money',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
];

const data = [
{
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
},
{
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
},
{
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
},
];
export default {
    name: "index",
    setup() {
        const router = useRouter()
        const state = reactive({
            title:'123456789'
        });
        onMounted(async () => {

        })
        let xxx =()=>{
            console.log('999999966669',router);
            router.push('/client-manage');
        }
        return{
            columns,
            data,
            xxx,
            ...toRefs(state),
        }
    }

};
