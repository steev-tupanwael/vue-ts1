<template>
    <div>
        <h1>Cats</h1>
        <b-table striped hover :items="cats"></b-table>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Pets } from '../types/'
import { namespace } from 'vuex-class'

const modpets = namespace('Pets')

@Component
export default class Cats extends Vue {
    @modpets.State
    private cats!: Array<Pets>
}
</script>