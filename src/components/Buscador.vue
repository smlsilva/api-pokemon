<template>
    <section class="container-informations">
        <div class="container-buscador">
            <input type="text" v-model="text" :placeholder="placeholder">  
            <button @click="inputText">Buscar <img src="../assets/logo.png" alt="Logo do Pokemon"></button>
        </div>
        <div v-if="existe" class="container-pokemon">
            <div v-if="existe" class="container-caracteristicas">
                <router-link to="/pokemon">
                    <h1 v-if="existe">{{ pokemon.name }}</h1>
                </router-link>
                <img v-if="existe" alt="" :src="pokemon.sprites.back_default">
            </div>
        </div>
        <div v-if="!existe" class="mensagem-selecione">
            {{ mensagem }}
        </div>
    </section>
</template>
<script lang="ts">

    import { defineComponent } from 'vue';
    import axios from 'axios';

    export default defineComponent ({
        name: 'Buscador',
        data () {
            return {
                text: null,
                existe: false,
                mensagem: 'AINDA NÃO ESCOLHEU O SEU POKEMON ;)',
                statusError: null,
                pokemon: {},
                placeholder: 'Pesquise o seu pokemon favorito ID | NOME'
            }
        },
        created() {
            this.inputText();
        },
        methods: {
            inputText() {
                if(this.text) {
                    axios.get(`https://pokeapi.co/api/v2/pokemon-form/${this.text}/`)
                    .then(resp => 
                        this.pokemon = resp.data
                    )
                    .catch(erro => this.statusError = erro.response.status)

                    if(this.statusError) {
                        this.existe = false
                        this.mensagem = "NÃO FOI ENCONTRADO!";
                        this.statusError = null;
                        this.pokemon = '';
                    }
                    else
                    {
                        this.existe = true;
                    }
                }
                else {
                    this.mensagem = 'AINDA NÃO ESCOLHEU O SEU POKEMON ;)';
                    this.existe = false;
                }
            }
        }
    })

</script>
<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Khmer&family=Open+Sans&display=swap');
    .container-informations {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
        background: url('../assets/bk-pokemon.jpg');
        gap: 15px;
        .container-buscador {

            display: flex;
            justify-content: center;
            width: 100%;
            
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

        .container-pokemon {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border-radius: 5px;
            width: 100%;

            .container-caracteristicas {
                border-radius: 10px;
                text-transform: uppercase;
                padding: 0 15px;
                text-align: center;
                background: #f34213;
                box-shadow: 5px 5px;
                width: 25%;

                .lista-caracteristicas {
                    list-style: none;
                    text-align: initial;
                    padding: 0;
                }
            }
        }

        .mensagem-selecione {
            background: #ffff00;
            padding: 5px;
            border-radius: 5px;
            text-transform: uppercase;
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