<template>
    <div id="userList">
        <!--查询条件-->
        <el-form :inline="true" class="demo-form-inline" v-model="search">
            <el-form-item label="ID">
                <el-input type="text" placeholder="ID" v-model="search.id"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input type="text" placeholder="姓名" v-model="search.name"></el-input>
            </el-form-item>
            <el-form-item label="账号">
                <el-input placeholder="账号" v-model="search.userName"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input placeholder="邮箱" v-model="search.email"></el-input>
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
        <el-row>
            <el-button type="primary" @click="addUser">新增用户</el-button>
        </el-row>
        <hr>
        <!--表格-->
        <template>
            <el-table height="700" border :data="tableData">
                <el-table-column
                        prop="id"
                        label="ID"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="createDate"
                        label="创建日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="userName"
                        label="账号"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="email"
                        label="邮箱"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
                <el-table-column
                        prop="sex"
                        label="性别">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button @click="userDetail(scope.row)" type="text" size="small">编辑</el-button>
                        <el-button type="text" size="small" @click="deleteUser(scope.row.id)">删除</el-button>
                    </template>

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
        <user-detail :userId="userId" :dialogFormVisible="userDetailFormVisible"
                     @closeUserDetail="closeUserDetail"></user-detail>
        <add-user :dialogFormVisible="addUserFormVisible" @closeAddUser="closeAddUser"></add-user>
    </div>

</template>

<script>
    import userDetail from './UserDetail'
    import addUser from './AddUser'

    export default {
        components: {userDetail, addUser},
        name: "user-list",
        data() {
            return {
                search: {
                    id: null,
                    name: null,
                    userName: null,
                    email: null,
                    sex: null,
                    pageNum: 1,
                    total: 0,
                    pageSize: 5
                },
                tableData: null,
                user: {
                    id: null,
                    name: null,
                    userName: null,
                    email: null,
                    sex: null,
                    createDate: null,
                    address: null
                },
                userDetailFormVisible: false,
                userId: null,
                addUserFormVisible: false
            }
        },
        methods: {

            onSubmit() {
                this.$axios.post('/user/list', this.search).then((res) => {
                    this.tableData = res.data.data.list
                    console.log(this.tableData)
                    this.search.pageNum = res.data.data.pageNum;
                    this.search.total = res.data.data.total;
                    this.search.pageSize = res.data.data.pageSize;
                })
            },
            userDetail(row) {
                this.userId = row.id
                this.userDetailFormVisible = true
            },
            closeUserDetail() {
                this.userDetailFormVisible = false
                this.onSubmit()
            },
            deleteUser(id) {
                this.$confirm('确认删除').then(() => {
                    this.$axios.delete('/user/' + id).then((res) => {
                        if (res.data.data === true) {
                            this.$message({
                                type: 'success',
                                message: '删除成功'
                            })
                        } else {
                            this.$message({
                                type: 'error',
                                message: '删除失败'
                            })
                        }
                    }).catch(() => {

                    })
                    this.onSubmit()
                }).catch(() => {
                })
            },
            addUser() {
                this.addUserFormVisible = true
            },
            closeAddUser() {
                this.addUserFormVisible = false
                this.onSubmit()
            }
        }
    }
</script>

<style scoped>
    .block {
        float: right;
    }

    body {
        margin: 0;
    }
</style>