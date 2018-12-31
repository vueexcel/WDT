<template>
<div>
    <LoginForm/>
    <LoginBox style="margin-bottom: 25px;"/>
</div>
</template>

<script>
import LoginForm from './../container/LoginForm.vue'
import LoginBox from './../components/LoginBox.vue'
export default {
  name: 'Login',
  components: {
    LoginForm,
    LoginBox
  }
}
</script>

<style>
</style>
