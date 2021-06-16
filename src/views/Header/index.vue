<template>
    <div class="flex-x">
        <div class="icons">
            <i class="el-icon-s-platform"></i>
            <i class="el-icon-mobile-phone ml20"></i>
        </div>
        <div class="side-tools">
            <el-button icon="el-icon-back" size="mini"></el-button>
            <el-button size="mini">清空</el-button>
            <el-button size="mini">预览</el-button>
            <el-button size="mini">保存</el-button>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.flex-x{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}
</style>