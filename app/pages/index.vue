<script setup lang="ts">
import { Heart, Phone, QrCode } from "lucide-vue-next";
import Button from "@/components/ui/Button.vue";

function loginWithGoogle() {
    window.location.href = '../auth/google'
}
</script>

<template>
    <section class="bg1">
            <div class="plr row pt-5">
                <div class="col-lg-8 text-start mt-lg-5">
                    <h2 class="display-4 fw-bold text-dark mb-3">Surpreenda alguém especial</h2>
                    <p class="text-muted mb-5 mb-lg-4 fw-bold">
                        Crie um card digital com foto, titulo, mensagem e compartilhe seu carinho enviando o QR code
                        com
                        <span class="text-danger fw-semibold"> uma surpresa inesquecível</span>
                    </p>

                    <Button @click="loginWithGoogle" class="display-6">
                        Criar meu card digital agora!
                        <div class="btn-gradient-overlay"></div>
                    </Button>
                </div>

                <!-- card -->
                <div class="col-lg-4 col-md-10 mt-5 mt-lg-0 d-flex justify-content-center">
                    <div class="bg-white rounded-4 shadow-lg w-100" style="max-width: 320px">
                        <div class="bg-light rounded-3">

                            <div class="text-start p-4 d-flex flex-column align-items-center">

                                <img class="mockup-image w-100 rounded-3"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOVsgIRih-wqvq8NyQRuDxN6C9aN_lpi2Ub53oi9yddD3PFmaeQ3PJuRBOihXSVWuQIytwLEXAewZDIN8KkngEN9dtjTbpbyAjnrWQRBItFzBOpnMFdtdv-7fG_JkgEB77_2J14gn3hja3A2XEROL6sefKzutqMLUfSN_YujaK-FtPnBleEJACIfQbpGpyibUJ4dPDwG54MicP0tUNnqp08Q9Hz91tF2EjOVyIT5UezDTpZ5ash1quGzQDGlfGhkSsbTmiKTbr7vk"
                                    alt="Foto de casal feliz" />

                                <h3 class="mt-3 fw-bold text-dark text-center">Beautiful digital</h3>
                                <p class="small text-muted mt-2 text-start">
                                    Crie cartões personalizados com foto, mensagem e compartilhe a emoção via QR
                                    code.
                                    Simples, rápido e inesquecível.
                                </p>
                                
                                <div class="d-flex justify-content-center mt-2">
                                    <div class="qr-code-box rounded-3 p-3 position-relative"
                                        style="width: 120px; height: 120px;">
                                        <QrCode class="text-purple" style="width:100%; height:100%;" />
                                        <Heart class="position-absolute top-0 end-0 translate-middle heart-pink text-danger" style="width:24px; height:24px" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
    </section>

    <!-- Seção dos 3 passos -->
    <section class="py-5 mt-5 bg-white">
        <div class="container">

            <div class="row text-center g-5">

                <!-- Passo 1 -->
                <div class="col-md-4">
                    <div class="p-3 d-inline-flex bg-primary bg-opacity-10 rounded-circle mb-3">
                        <span class="material-symbols-outlined text-primary fs-1">edit</span>
                    </div>
                    <h3 class="fw-bold">1. Crie seu design</h3>
                    <p class="text-muted mt-2">
                        Personalize seu cartão com fotos e mensagens especiais.
                    </p>
                </div>

                <!-- Passo 2 -->
                <div class="col-md-4">
                    <div class="p-3 d-inline-flex bg-primary bg-opacity-10 rounded-circle mb-3">
                        <span class="material-symbols-outlined text-primary fs-1">qr_code_2</span>
                    </div>
                    <h3 class="fw-bold">2. Gere o QR Code</h3>
                    <p class="text-muted mt-2">
                        Receba um código único para o seu cartão digital.
                    </p>
                </div>

                <!-- Passo 3 -->
                <div class="col-md-4">
                    <div class="p-3 d-inline-flex bg-primary bg-opacity-10 rounded-circle mb-3">
                        <span class="material-symbols-outlined text-primary fs-1">share</span>
                    </div>
                    <h3 class="fw-bold">3. Compartilhe o amor</h3>
                    <p class="text-muted mt-2">
                        Envie o QR Code e surpreenda quem você ama.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.plr {
    padding: 0 5rem;
}

.bg1 {
    background: #fff7f7;
}

.mockup-container {
    max-width: 360px;
}

.mockup-image {
    height: 280px;
    object-fit: cover;
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

.heart-beat {
    animation: heartbeat 1.5s infinite;
}

.qr-code-box {
    width: 180px;
    height: 180px;
    border: 2px dashed rgba(114, 0, 38, 0.5);
    background: rgba(247, 37, 133, 0.1);
    backdrop-filter: blur(5px);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: float 6s ease-in-out infinite;
}

@media screen and (min-width: 768px) {
    .my-container {
        padding-left: 0rem !important;
        padding-right: 0rem !important;
    }

}
</style>