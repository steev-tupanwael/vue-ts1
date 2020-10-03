import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
@Module({ namespaced: true })
class User extends VuexModule {
  public email: string | void = ''

  @Mutation
  public setEmail(newEmail: string): void {
    this.email = newEmail
  }

  @Action
  public updateEmail(newEmail: string): void {
    this.context.commit('setEmail', newEmail)
  }
}
export default User