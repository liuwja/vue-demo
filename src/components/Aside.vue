<template>
    <el-menu :defual-openeds="['1','2']" router>
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-message"></i>用户管理
            </template>

            <el-menu-item index="userList">用户列表</el-menu-item>

        </el-submenu>
        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-menu"></i>系统管理
            </template>
        </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        name: "my-aside"
    }
</script>

<style scoped>

</style>