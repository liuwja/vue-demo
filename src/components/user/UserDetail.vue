<template>
    <div class="userDetail">
        <el-dialog title="用户详情" :visible.sync="dialogFormVisible">
            <el-form v-model="user">
                <el-form-item label="ID" :label-width="formLabelWidth">
                    <el-input v-model="user.id" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input v-model="user.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "userDetail",
        props:{
            user:{},
            dialogFormVisible:false,
            formLabelWidth:0
        }
    }
</script>

<style scoped>

</style>