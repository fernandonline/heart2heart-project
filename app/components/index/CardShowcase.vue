<script setup lang="ts">
import Qr from './Qr.vue';
</script>

<template>
    <section class="card-showcase">
        <article class="product-card">
            <div class="card-content">
                <img class="product-image"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOVsgIRih-wqvq8NyQRuDxN6C9aN_lpi2Ub53oi9yddD3PFmaeQ3PJuRBOihXSVWuQIytwLEXAewZDIN8KkngEN9dtjTbpbyAjnrWQRBItFzBOpnMFdtdv-7fG_JkgEB77_2J14gn3hja3A2XEROL6sefKzutqMLUfSN_YujaK-FtPnBleEJACIfQbpGpyibUJ4dPDwG54MicP0tUNnqp08Q9Hz91tF2EjOVyIT5UezDTpZ5ash1quGzQDGlfGhkSsbTmiKTbr7vk"
                    alt="Foto de casal feliz" />

                <h3 class="product-title">Beautiful digital</h3>

                <p class="product-description">
                    Crie cartões personalizados com foto, mensagem e compartilhe a emoção via QR
                    code. Simples, rápido e inesquecível.
                </p>

                <Qr/>
            </div>
        </article>
    </section>
</template>

<style scoped>
    .card-showcase {
    margin-top: 3rem;
}

@media (min-width: 992px) {
    .card-showcase {
        margin-top: 1.5rem;
    }
}

.product-card {
    background: white;
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    width: 100%;
    max-width: 240px;
}

@media (min-width: 768px) {
    .product-card {
        max-width: 280px;
        min-width: 280px;
    }
}

.card-content {
    background: #f8f9fa;
    border-radius: 0.75rem;
    padding: 1.5rem;
    text-align: center;
}

.product-image {
    width: 100%;
    border-radius: 0.75rem;
    display: block;
    aspect-ratio: 1/1;
}

.product-title {
    margin-top: 1rem;
    font-weight: bold;
    color: #212529;
}

.product-description {
    font-size: 0.875rem;
    color: #6c757d;
    margin-top: 0.5rem;
    text-align: left;
}
</style>