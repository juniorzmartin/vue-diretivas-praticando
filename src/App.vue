<template>
  <p>Sem diretiva</p>
  <p v-texto="{cor: 'blue', tamanhoFonte: '200%', totalCaracteres:15}">Primeira diretiva customizada</p>
  <p v-texto="{cor: 'red', tamanhoFonte:'300%', totalCaracteres:11}">testando v-texto 2</p>
  <p v-texto="configuracaoTexto">testando v-texto 3</p>
  <div v-posicao:absolute="36" v-texto="{cor: '#F21DF2', tamanhoFonte: '200%', totalCaracteres:8}">Binding de argumento e valor</div>
  <span>Código A: </span><input type="text"><span v-informacao:simples.umClickMouse.sairAutomaticamente="'Você encontrará o código A na parte frontal do equipamento'">--i</span>
  <br>
  <br>
  <br>
  <span>Código B: </span><input type="text"><span v-informacao:destacado.oneClicksMouse.sairAutomaticamente="'Você encontrará o código B na parte traseira do equipamento'">--i</span>
  <hr>
  <h1 v-colorir="'red'">Diretiva customizada registrada localmente(no componente)</h1>
</template>

<script>
import colorirFundoTexto from '@/directives/colorirFundoTexto'
export default {
  name: 'App',
  directives:{
    colorir: colorirFundoTexto
  },
  data: () => ({  
      configuracaoTexto : {cor: 'green', tamanhoFonte:'400%', totalCaracteres:4}
  })
}
</script>

<style>
</style>
