<template>
    <div class="container-buscador">
        <input type="text" v-model="text" :placeholder="placeholder">  
        <button @click="inputText">Buscar <img src="../assets/logo.png" alt="Logo do Pokemon"></button>
    </div>
</template>
<script lang="ts">

    import { defineComponent } from 'vue';

    export default defineComponent ({
        name: 'Buscador',
        data () {
            return {
                text: '',
                placeholder: 'Pesquise o seu pokemon favorito'
            }
        },
        methods: {
            inputText() {
                this.text
            }
        }
    })

</script>
<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Khmer&family=Open+Sans&display=swap');
    .container-buscador {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: url('../assets/bk-pokemon.jpg');

        input {
            width: 30%;
            border-radius: 10px 0 0 10px;
        }

        button {
            display: flex;
            align-items: center;
            gap: 10px;
            border-radius: 0 10px 10px 0;
            transition: 400ms;

            img {
                width: 15px;
                transform: rotate(0);
                transition: 400ms;
            }
        }

        button:hover {
            cursor: pointer;
            box-shadow: 5px 5px 3px #a30;

            img {
                transform: rotate(360deg);
                transition: 400ms;
            }
        }

        input, button {
            padding: 15px;
            font-size: 17px;
            font-family: 'Noto Sans Khmer', sans-serif;
            border: 1px solid #ccc;
        }
    }

    @media screen and (max-width: 768px) {
        .container-buscador {
            input {
                width: 50%;
            }
        }
    }
</style>