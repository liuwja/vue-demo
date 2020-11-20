<template>
    <div class="userDetail">
        <el-dialog title="用户详情" :visible.sync="dialogFormVisible" :before-close="close"
                   :close-on-click-modal='closeOnClickModal'>
            <el-form v-model="user" label-width="80px">
                <el-form-item label="ID">
                    <el-input v-model="user.id" autocomplete="off" readonly></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="user.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="账号">
                    <el-input v-model="user.userName" autocomplete="off" :readonly="userId!=null"></el-input>
                </el-form-item>
                <el-form-item label="密码" v-show="userId==null">
                    <el-input type="password" v-model="user.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="user.email" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="user.address" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="创建日期" v-show="userId!=null">
                    <el-input v-model="user.createDate" autocomplete="off" readonly></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-radio-group v-model="user.sex">
                        <el-radio label="男"></el-radio>
                        <el-radio label="女"></el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="close">取 消</el-button>
                <el-button type="primary" @click="save">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "userDetail",
        props: {
            userId: null,
            dialogFormVisible: false
        },
        data() {
            return {
                closeOnClickModal: false,
                user: {
                    id: null,
                    name: null,
                    userName: null,
                    password: null,
                    email: null,
                    sex: null,
                    createDate: null,
                    address: null
                }
            }
        },
        methods: {
            close() {
                this.$confirm('确认关闭？').then(() => {
                    this.$emit('closeAddUser')
                }).catch(() => {
                })

            },
            save() {
                this.$axios.put('/user', this.user).then((res) => {
                    if (res.data.data === true) {
                        this.$message({
                            type: 'success',
                            message: '保存成功'
                        })
                    } else {
                        this.$message({
                            type: 'error',
                            message: '保存失败'
                        })
                    }
                    this.$emit('closeAddUser')
                }).catch(() => {

                })

            }
        }

    }
</script>

<style scoped>

</style>