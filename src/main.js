import { createApp } from 'vue'
import App from './App.vue'

const Vue = createApp(App)
Vue.directive('texto', {
    created(el, binding){  // chamaddo antes que os atributos do elemento ou ouvintes de event(event listeners) sejam aplicados
        if(binding.value?.cor) el.style.color = binding.value.cor
        if(binding.value?.tamanhoFonte) el.style.fontSize = binding.value.tamanhoFonte

        let totalCaracteres = 25
        if(binding.value?.totalCaracteres) totalCaracteres = binding.value.totalCaracteres
      
        let textoOriginal = el.innerText
        let tamanhoTextoOriginal = textoOriginal.length
        let textoAjustado = ''

        if(tamanhoTextoOriginal > totalCaracteres){
            // truncar o texto em 22 caracteres e adicionar '...'
            textoAjustado = textoOriginal.substring(0,(totalCaracteres - 3)) + '...' 
        }else{
            // manter o texto original
            textoAjustado = textoOriginal
        }
        el.innerText = textoAjustado

    }
})

Vue.directive('posicao', {
    created(el, binding){
        const posicoesPossiveis = ['relative', 'fixed', 'absolute']

        if(posicoesPossiveis.includes(binding.arg)) {
            el.style.position = binding.arg
            el.style.top = `${binding.value}px`
        }
    }
})

Vue.directive('informacao',{
    created(el, binding){
        console.log(el,binding.arg, binding.modifiers, binding.value)
        let funcao = null
        if(binding.arg == undefined || binding.arg === 'simples'){
         funcao = function () {
            let informacaoSpan = document.createElement('span')
            informacaoSpan.style.position = 'absolute'
            informacaoSpan.style.background = '#ddd'
            informacaoSpan.style.padding = '2px'
            informacaoSpan.innerText = binding.value

            el.appendChild(informacaoSpan)

            informacaoSpan.addEventListener('click', (event) => {
                event.stopPropagation()
                informacaoSpan.remove()
            })
        }
    }
    if(binding.arg === 'destacado'){
        funcao = function() { 
            let informacaoDivContainer = document.createElement('div')
            let informacaoDiv = document.createElement('div')
            informacaoDiv.innerText = binding.value
            informacaoDivContainer.style.width = '100%'
            informacaoDivContainer.style.height = '100%'
            informacaoDivContainer.style.display = 'flex'
            informacaoDivContainer.style.flexDirection = 'row'
            informacaoDivContainer.style.alignItems = 'center'
            informacaoDivContainer.style.justifyContent = 'center'
            informacaoDivContainer.style.background = '#ccc'
            informacaoDivContainer.style.position = 'absolute'
            informacaoDivContainer.style.top = '0'
            informacaoDivContainer.style.zIndex = '10'

            informacaoDiv.style.padding = '30px'
            informacaoDiv.style.background = '#fba'

            informacaoDivContainer.appendChild(informacaoDiv)

            el.appendChild(informacaoDivContainer)

            informacaoDivContainer.addEventListener('click', (event) => {
                event.stopPropagation()
                informacaoDivContainer.remove()
            })
    }
    }
        if(binding.modifiers['umClickMouse']){
            el.addEventListener('click', funcao)
        }
        if(binding.modifiers['oneClicksMouse']){
            el.addEventListener('click', funcao)
        }
    }
})
Vue.mount('#app')
