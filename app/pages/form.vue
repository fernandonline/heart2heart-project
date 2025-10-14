<script setup lang="ts">
    import FormDados from '@/components/FormDados.vue';
    import FormImage from '@/components/FormImage.vue';
    import FormMessage from '@/components/FormMessage.vue';


    const { loggedIn } = useUserSession()
    if (!loggedIn.value) {
        navigateTo('/')
    }

    const etapaAtual = ref(0)
    const etapas = [FormImage, FormDados, FormMessage]

    const dadosCompletos = ref({
        imageUrl: '',
        title: '',
        date: '',
        message: ''
    });

    const salvando = ref(false)
    const erro = ref('')

    function irParaProximaEtapa(dadosDaEtapa: any) {
        Object.assign(dadosCompletos.value, dadosDaEtapa)
        etapaAtual.value++

        if (etapaAtual.value >= etapas.length) {
            salvarNoBanco()
        }
    }

    async function salvarNoBanco() {
        salvando.value = true
        erro.value = ''

        try {
            const response = await $fetch('api/cards/create', {
                method: 'POST',
                body: dadosCompletos.value
            })
            alert('Card criado com sucesso!')

            navigateTo('/dashboard')
        } catch (error: any) {
            console.error('Erro ao criar card:', error)
            erro.value = error.data?.message || 'Erro ao criar card'
            alert('Erro ao criar card: ' + erro.value)
        } finally {
            salvando.value = false
        }
    }


</script>

<template>
  <div>
    <component :is="etapas[etapaAtual]" @proximo="irParaProximaEtapa" />
  </div>
</template>