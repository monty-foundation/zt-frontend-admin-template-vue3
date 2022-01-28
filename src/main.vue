<template>
    <div class="xy-main">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
export default {
    name: "App",
    // 组合API函数入口
    setup() {
        // const store: any = useStore();

        // const counter = computed(() => {
        //     return store.state.counter;
        // });

        // const addCount = () => {
        //     store.commit("addCount");
        // };

        // return { counter, addCount };
    },
};
</script>

<style lang="less" scoped>
.xy-main {
    width: 100%;
}
</style>