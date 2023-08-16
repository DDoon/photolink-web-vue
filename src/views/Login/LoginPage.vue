<script lang="ts" setup>
import Card from "../../components/common/Card.vue";
import Input from "../../components/common/Input.vue";
import Form from "../../components/common/Form.vue";

defineOptions({
  name: "LoginPage",
});
</script>

<template>
  <div class="login-container">
    <Card :style="{ width: '400px', height: '200px' }">
      <Form>
        <Input
          class="login-input password"
          label="이메일"
          type="email"
          placeholder="leavework@gotothe.home.com"
          :rules="[{ required: true, message: 'Please input your email!' }]"
        />
        <Input
          class="login-input password"
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        />

        <a-button type="primary" html-type="submit">Log in</a-button>
      </Form>
    </Card>
  </div>
</template>
<style lang="less" scoped>
.login-container {
  display: flex;
  justify-content: center;
  margin-top: 120px;
  height: 100vh;

  //   .login-input {
  //     ::v-deep .ant-input {
  //       height: 32px;
  //     }
  //   }
}
</style>
