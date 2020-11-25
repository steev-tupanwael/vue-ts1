<template>
    <div>
        <h1>Dogs</h1>
        <b-table striped hover 
            :items="dogs"
            @row-clicked="rowclicked">
        </b-table>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import router from '../router'
import { Pets } from '../types/'



@Component
export default class Dogs extends Vue {
    public dogs: Array<Pets> = []

    mounted () {
        this.dogs = this.$store.state.Pets.dogs
    }

    rowclicked(record: Array<Pets>, index: number): void {
        router.push({ path: `/pets/${index}`})
    }
}
</script>