<template>
    <div id="userList">
        <!--查询条件-->
        <el-form :inline="true" class="demo-form-inline" v-model="search">
            <el-form-item label="姓名">
                <el-input type="text" placeholder="姓名" v-model="search.name"></el-input>
            </el-form-item>
            <el-form-item label="账号">
                <el-input placeholder="账号" v-model="search.username"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-select placeholder="性别" v-model="search.sex">
                    <el-option label="男" value="男"></el-option>
                    <el-option label="女" value="女"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <hr>
        <!--表格-->
        <template>
            <el-table>
                <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
            </el-table>
        </template>
    </div>
</template>

<script>
    export default {
        name: "user-list",
        data() {
            return {
                search: {
                    name: '',
                    username: '',
                    sex: ''
                },
                tableData: null
            }
        },
        methods: {
            onSubmit() {
                console.log(this.search)
            }
        }
    }
</script>

<style scoped>

</style>