<template>
  <div id="login-page">
    <div>
      <LoginForm />
    </div>
    <div>
      Don't have an account? <router-link to="/register">Sign Up</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import LoginForm from '@/components/LoginForm.vue'

@Component({
  components: {
    LoginForm
  }
})

export default class Login extends Vue {}
</script>