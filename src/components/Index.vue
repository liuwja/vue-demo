<template>
    <div class="m-container">
        <el-container style="height: 100%;width: 100%; border: 1px solid #eee" >
            <el-header style="border: 1px solid ;text-align: center">
                <my-header></my-header>
            </el-header>
            <el-container>
                <el-aside width="200px" style="border: 1px solid">
                    <my-aside></my-aside>
                </el-aside>
                <el-container>
                    <el-main calss="el-main">
                        <router-view></router-view>
                    </el-main>
                    <el-footer>
                        <my-footer style="border: 1px solid;text-align: center"></my-footer>
                    </el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import myHeader from './Header'
    import myAside from './Aside'
    import myFooter from './Footer'

    export default {
        name: "index",
        components: {
            myHeader, myAside, myFooter
        },
        data() {
            return{}
        },
        methods: {
            handleClick(scope) {
                this.$router.push({path: '/userDetail', query: {id: scope.row.id}})
            }
        }
    }
</script>

<style scoped>
.m-container{
    height: 100%;
    width: 100%;
}
</style>