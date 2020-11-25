import { VuexModule, Module, Mutation } from 'vuex-module-decorators'
import { Pets } from '@/types/'
import dogsData from '@/data/dogs'
import catsData from '@/data/cats'

@Module({ 
    namespaced: true,
    name: 'animal'
})
class AnimalModule extends VuexModule {
    public dogs: Array<Pets> = dogsData
    public cats: Array<Pets> = catsData

    @Mutation
    public setData (species: string ,val: Array<Pets>) {
        if (species == 'dogs') this.dogs = val
        if (species == 'cats') this.cats = val
    }
}

export default AnimalModule