<template>
    <div>
        <el-card class="login-form-layout">
            <el-form
                    :model="user"
                    status-icon
                    :rules="rules"
                    ref="user"
                    label-width="80px"
                    class="demo-user">
                <el-form-item label="用户名" prop="username">
                    <el-input type="text" maxlength="12" v-model="user.username"></el-input>
                </el-form-item>
                <el-form-item label="密 码" prop="password">
                    <el-input type="password" v-model="user.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('user')">登录</el-button>
                    <el-button @click="resetForm('user')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'))
                } else {
                    callback()
                }
            }
            return {
                user: {
                    username: '',
                    password: ''
                },
                rules: {
                    password: [{validator: validatePass, trigger: 'blur'}],
                    username: [{required: true, message: '请输入用户名', trigger: 'blur'}, {
                        min: 3,
                        max: 12,
                        message: '长度在3到12',
                        trigger: 'blur'
                    }]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios.post('/login', this.user).then((res) => {
                            if (res.data.data) {
                                this.$router.push('/index')
                            } else {
                                this.$notify({
                                    title: '登录失败',
                                    message: '用户名或密码错误',
                                    duration: 1500
                                })
                            }
                        })
                    }
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields()
            }
        }
    }
</script>

<style scoped>
    .login-form-layout {
        position: absolute;
        left: 0;
        right: 0;
        width: 360px;
        margin: 140px auto;
        border-top: 10px solid #409eff;
    }
</style>