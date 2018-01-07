<template>
    <div>
        <form>
            <div class="field">
                <label>用户名</label>
                <input type="text" name="name" placeholder="用户名">
            </div>
            <div class="filed">
                <label>密码</label>
                <input type="text" name="password" placeholder="密码">
            </div>
            <div class="filed">
                <label>头像</label>
                <input type="file" name="avator">
            </div>
            <div class="filed">
                <label>个人简介</label>
                    <textarea name="bio" rows="5"></textarea>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'register',
    data() {
        return {
        }
    }
}
</script>

<style lang="scss">
    .filed {
        label {
            font-size: 20px;
        }
    }
</style>