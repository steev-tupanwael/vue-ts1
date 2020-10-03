<template>
  <b-form @submit.prevent="handleSubmit">
    <b-form-group
      id="input-group-email"
      label="email"
      label-for="input-email"
    >
      <b-form-input
        id="input-email"
        v-model="formEmail"
        type="email"
        required
        placeholder="Enter email"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="input-group-password"
      label="password"
      label-for="input-password"
    >
      <b-form-input
        id="input-password"
        v-model="formPassword"
        type="password"
        required
        placeholder="Enter password"
      ></b-form-input>
    </b-form-group>

    <b-button type="submit" variant="primary">Submit</b-button>
  </b-form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const user = namespace('User')

@Component
export default class LoginForm extends Vue {
  private formEmail = ""
  private formPassword = ""

  get sendData(): string | unknown {
    return this.email
  }

  @user.State
  public email!: string

  @user.Action
  public updateEmail!: (newEmail: string) => void

  public handleSubmit(): void {
    this.updateEmail(this.formEmail)
  }
}
</script>
