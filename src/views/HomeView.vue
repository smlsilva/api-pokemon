<template>
    <Buscador />
</template>
<script lang="ts">

    import { defineComponent } from 'vue';
    import Buscador from '../components/Buscador.vue';

    export default defineComponent ({
        name: 'Home',
        components: {
            Buscador
        }
    })
</script>