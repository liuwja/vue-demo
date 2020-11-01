<template>
    <div class="m-container">
        <my-header></my-header>
        <el-container style="height: 500px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
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
            </el-aside>
            <el-container>
                <el-main>
                    <!--<el-table :data="tableData">-->
                    <!--<el-table-column prop="createdate" label="日期" width="140"></el-table-column>-->
                    <!--<el-table-column prop="name" label="姓名" width="120"></el-table-column>-->
                    <!--<el-table-column prop="address" label="地址"></el-table-column>-->
                    <!--<el-table-column fixed="right" label="操作" width="100">-->
                    <!--<template slot-scope="scope">-->
                    <!--<el-button @click="handleClick(scope)" type="text" size="small">查看</el-button>-->
                    <!--<el-button @click="handleClick(scope)" type="text" size="small">编辑</el-button>-->
                    <!--</template>-->
                    <!--</el-table-column>-->
                    <!--</el-table>-->
                    <!--<el-pagination class="mpage"-->
                    <!--background-->
                    <!--layout="prev, pager, next"-->
                    <!--:current-page=pageNum-->
                    <!--:page-size=pageSize-->
                    <!--@current-change=page-->
                    <!--:total="total">-->
                    <!--</el-pagination>-->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import myHeader from './Header'

    export default {
        name: "index",
        components: {
            myHeader
        },
        data() {
            return {
                pageNum: 1,
                total: 0,
                pageSize: 5,
                tableData: []
            }
        },
        methods: {
            page(pageNum) {
                this.$axios.get('/user/list?pageNum=' + pageNum).then((res) => {
                    this.tableData = res.data.data.list;
                    this.pageNum = res.data.data.pageNum;
                    this.total = res.data.data.total;
                    this.pageSize = res.data.data.pageSize;
                })
            },
            handleClick(scope) {
                this.$router.push({path: '/userDetail', query: {id: scope.row.id}})
            }
        },
        mounted() {
            this.page(1)
        }
    }
</script>

<style scoped>
    .el-header {
        background-color: #b3c0d1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>