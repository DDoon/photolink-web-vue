<script lang="ts" setup>
import Card from "../../components/common/Card.vue";
import Input from "../../components/common/Input.vue";
import Form from "../../components/common/Form.vue";
import Button from "../../components/common/Button.vue";

defineOptions({
  name: "LoginPage",
});
</script>

<template>
  <div class="login-container">
    <Card class="login-card" title="로그인">
      <Form>
        <Input
          class="login-input password"
          type="email"
          placeholder="leavework@gotothe.home.com"
          :rules="[{ required: true, message: 'Please input your email!' }]"
        />
        <Input
          class="login-input password"
          type="password"
          placeholder="패스워드를 입력해주세요."
          :rules="[{ required: true, message: 'Please input your password!' }]"
        />

        <Button class="login-btn" type="primary" html-type="submit"
          >Log in</Button
        >
      </Form>
    </Card>
  </div>
</template>
<style lang="less">
.login-container {
  .flexbox();
  height: 100vh;
  padding-bottom: 170px;
  background-color: #f5f5f5;

  .login-card {
    width: 400px;
    height: 250px;
  }

  .login-input {
    &.password {
      .ant-input-affix-wrapper {
        padding-left: 5px;
      }
    }
  }

  .login-btn {
    width: 100%;
  }
}
</style>
