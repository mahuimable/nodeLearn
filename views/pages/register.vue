<template>
    <div>
        <form class="register-box">
            <div class="field">
                <label>用户名</label>
                <input v-model="name" type="text" name="name" placeholder="用户名">
            </div>
            <div class="field">
                <label>密码</label>
                <input v-model="password" type="text" name="password" placeholder="密码">
            </div>
            <!-- <div class="field">
                <label>头像</label>
                <input type="file" name="avator">
            </div> -->
            <div class="field">
                <label>个人简介</label>
                    <textarea v-model="bio" name="bio" rows="5"></textarea>
            </div>
            <p class="btn-box">
                <input class="submit-btn" @click="userRegister" type="submit" name="register" value="注册">
            </p>
        </form>
    </div>
</template>

<script>
import {register} from '../../controller/user' 
export default {
    name: 'register',
    data() {
        return {
            name: '',
            password: '',
            bio: '',
            avator: ''
        }
    },
    methods: {
        userRegister() {
            register(this.name, this.password, 'male', 'this.avator', this.bio)
        }
    }
}
</script>

<style lang="scss">
    .register-box {
        width: 270px;
        margin: 0 auto;
    }
    .field {
        margin-bottom: 10px;
        font-size: 11px;
        label {
            display: inline-block;
            width: 55px;  
        }
        input {
            font-size: 11px;
        }
        input::-webkit-input-placeholder {
            padding-left: 10px;
            color: grey;
        }
        input:-moz-placeholder {
            padding-left: 10px;
            color: grey;
        }
    }
    .btn-box {
        text-align: center;
    }
    .submit-btn {
        font-size: 11px;
    }
</style>