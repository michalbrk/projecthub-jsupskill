<template>
    <button @click="increment" class="btn-floating btn-large waves-effect waves-light green">
        <i class="material-icons">add</i>
    </button>
<button @click="increment" class="btn-floating btn-large waves-effect waves-light green">
        <i class="material-icons">add</i>
    </button>
</template>

<script>
    export default {
        
        methods: {
            increment() {
               this.$store.dispatch('increment', {payload: 20, dec: 10}) 
            },
            decrement() {
                this.$store.commit('decrement')
            }
        }
    }
</script>