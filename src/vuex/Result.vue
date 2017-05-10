<template>
    <div>
        <p>Counter: </p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    
    export default {
        computed:
            mapGetters(['counter'])
    }
</script>