<template>
    <div class="xy-index">
        <div class="xxx" @click="xxx()"> 首页xxxxx{{title}}</div>
        <div class=" ml30 zt-iconfont zt-caiwuguanli">字体图标</div>
        <a-table :columns="columns" :data-source="data" bordered>
            <template #bodyCell="{ column, text }">
                <template v-if="column.dataIndex === 'name'">
                    <a>{{ text }}</a>
                </template>
            </template>
            <template #title>Header</template>
            <template #footer>Footer</template>
        </a-table>
    </div>
</template>
<script lang="ts" src="./index.ts"></script>