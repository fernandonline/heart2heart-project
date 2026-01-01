<script setup lang="ts">
import Button from "@/components/ui/RedButton.vue";
import CardShowcase from "~/components/index/CardShowcase.vue";
import Steps from "~/components/index/Steps.vue";

function loginWithGoogle() {
    window.location.href = '../auth/google'
}
</script>

<template>
    <section class="index">

        <div class="index-text">
            <h2 class="index-title">Surpreenda alguém especial</h2>
                <p class="index-subtitle">
                    Crie um card digital com foto, titulo, mensagem e compartilhe seu carinho enviando o QR code com
                    <span class="text-danger"> uma surpresa inesquecível</span>
                </p>

            <Button @click="loginWithGoogle">
                Criar meu card digital agora!
                <div class="btn-gradient-overlay"></div>
            </Button>
        </div>
        <CardShowcase />
    </section>

    <Steps />
</template>

<style scoped>
.index {
    background: #fceded;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    padding-top: 3rem;
}

.index-text {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 7px;
    & .index-title {
        font-size: clamp(1.3rem, 3vw + 0.22rem, 3.5rem);
    }
    & .index-subtitle {
        margin-bottom: 1rem;
        color: #6c757d;
    }
}

.text-danger {
    color: var(--fuchsia-red);
    font-weight: 600;
}

.btn-gradient-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05));
    transform: translateX(100%);
    transition: transform 0.5s ease;
    border-radius: 0.75rem;
    z-index: 0;
}

.btn-romantic:hover .btn-gradient-overlay {
    transform: translateX(0);
}

@media (min-width: 768px) {
    .index {
        flex-direction: row;
        justify-content: center;
        gap: 4rem;
    }

    .index-subtitle {
        max-width: 700px;
        font-size: 1.2em;
    }
}
</style>