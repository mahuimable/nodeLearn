<template>
    <div>
        <div class="form-box">
            <div class="field required">
                <label>用户名：</label>
                <input type="text" name="name" placeholder="请输入用户名">
            </div>
            <div class="field required">
                <label>密码：</label>
                <input type="text" name="password" placeholder="请输入密码">
            </div>
            <div class="field">
                <a href="javascript:;" class="btn">登录</a>
                <!-- <a href="javascript:;" class="btn">注册</a> -->
                <router-link :to="{name: 'register'}" class="btn">注册</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            }
        }
    }
</script>

<style lang="scss">
    .form-box {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-60%, -50%);
        -webkit-transform: translate(-60%, -50%);

        .field {
            font-size: 13px;
            margin-bottom: 8px;
            label {
                display: inline-block;
                width: 52px;
                text-align: right;
            }
            input {
                width: 130px;
                height: 20px;
                border: 1px solid #222;
                // border-radius: 5px;
            }
            input::-webkit-input-placeholder {
                padding-left: 12px;
                font-size: 11px;
                color: #222229;
            }
            input:-moz-placeholder {
                font-size: 11px;
                color: #222229;
            }

            .btn {
                display: inline-block;
                width: 100px;
                height: 25px;
                background-color: #dddddd;
                text-align: center;
                line-height: 25px;
                font-size: 11px;
                text-decoration: none;
            }
        }
    }
</style>