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
            <el-table height="700" border :data="tableData">
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
            <el-pagination class="block"
                           background
                           layout="prev, pager, next"
                           :current-page.sync='search.pageNum'
                           :page-size='search.pageSize'
                           @current-change='onSubmit'
                           :total="search.total">
            </el-pagination>
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
                    sex: '',
                    pageNum: 1,
                    total: 0,
                    pageSize: 5
                },
                tableData: null,

            }
        },
        methods: {
            onSubmit(pageNum) {
                console.log(pageNum)
                this.$axios.post('/user/list', this.search).then((res) => {
                    this.tableData = res.data.data.list
                    this.search.pageNum = res.data.data.pageNum;
                    this.search.total = res.data.data.total;
                    this.search.pageSize = res.data.data.pageSize;
                })
            }
        }
    }
</script>

<style scoped>
    .block {
        float: right;
    }
    .has-gutter{
        text-align: center;
    }
</style>