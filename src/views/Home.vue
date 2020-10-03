<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <div>{{ email }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { namespace } from 'vuex-class'

const user = namespace('User')

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  @user.State
  public email!: string
}
</script>
