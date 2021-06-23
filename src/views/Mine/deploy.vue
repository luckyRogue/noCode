<template>
    <div>
        <el-card class="card-x">
            <h1>网站资料</h1>
            <el-form label-width="100px">
                <el-form-item label="网站名称">
                    <el-input></el-input>
                </el-form-item>
                    <el-form-item label="网站类型">
                    <el-input></el-input>
                </el-form-item>
            </el-form>
            <div>
                <el-button type="success">确定</el-button>
                <el-button type="danger">取消</el-button>
            </div>
        </el-card>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.card-x{
    width: 400px;
    text-align: center;
    padding-bottom: 20px;
}
</style>
