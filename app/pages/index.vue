<script setup lang="ts">
import { Heart, QrCode } from "lucide-vue-next";
import Button from "@/components/ui/Button.vue";
function loginWithGoogle() {
  window.location.href = '../auth/google'
}
</script>

<template>
  <section class="min-vh-100 w-100 d-flex align-items-center p-4 position-relative overflow-hidden">

    <div class="container-fluid">

      <div class="row align-items-center g-4">
        <div class="col-lg-7 text-lg-start text-start">
          <h2 class="display-5 fw-bold text-dark mb-3">Surpreenda alguém especial</h2>
          
          <p class="lead text-muted mb-4">
            Crie uma carta digital com imagem, titulo, mensagem e compartilhe seu carinho enviando o QR code com
            <span class="text-danger fw-semibold"> uma surpresa inesquecível</span>
          </p>
          
          <Button @click="loginWithGoogle">
            Criar meu card
            <div class="btn-gradient-overlay"></div>
          </Button>

          <!--
          <div class="d-flex align-items-center justify-content-lg-start justify-content-center gap-2 text-muted small">
            <Heart class="text-danger heart-beat" style="width:16px; height:16px" />
            <span>Um presente especial</span>
            <Heart class="text-danger heart-beat" style="width:16px; height:16px" />
          </div>
          -->
        </div>

        <div class="col-lg-5 d-flex justify-content-center">
          <div class="qr-code-box rounded-3 p-3 position-relative">
            <QrCode class="text-purple" style="width:100%; height:100%;" />
            <Heart class="position-absolute top-0 end-0 translate-middle heart-pink text-danger" style="width:24px; height:24px" />
          </div>
        </div>
      </div>
    </div>

    <div class="decorative-circle circle-1"></div>
    <div class="decorative-circle circle-2"></div>
    <div class="background-orb orb-1"></div>
    <div class="background-orb orb-2"></div>
  </section>
</template>

<style scoped>
.btn-romantic {
  color: #fff;
  background-color: #f72585;
  border: none;
  overflow: hidden;
  position: relative;
  transition: color 0.3s ease;
}

.btn-romantic:hover {
  color: #fff;
  background-color: #e6006e;
}

.btn-xl {
  padding: 0.75rem 2rem;
  font-size: 1.25rem;
  font-weight: 600;
  border-radius: 0.75rem;
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

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes orbGlow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
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

.decorative-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(20px);
  opacity: 0.4;
  animation: float 6s ease-in-out infinite;
}

.circle-1 {
  width: 100px;
  height: 100px;
  background: linear-gradient(90deg, #720026, #f72585);
  bottom: -3rem;
  left: -3rem;
}

.circle-2 {
  width: 80px;
  height: 80px;
  background: linear-gradient(90deg, #f72585, #720026);
  top: -3rem;
  right: 1rem;
}

.background-orb {
  position: absolute;
  width: 24rem;
  height: 24rem;
  background: linear-gradient(90deg, #f72585, #720026);
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.3;
  z-index: 0;
  animation: orbGlow 6s ease-in-out infinite;
}

.orb-1 {
  top: -8rem;
  left: -8rem;
}

.orb-2 {
  bottom: -8rem;
  right: -8rem;
  animation-delay: 1s;
}

/* Mobile */
@media (max-width: 840px) {
  .qr-code-box {
    width: 150px;
    height: 150px;
    margin-top: 2rem;
  }

  section {
    text-align: start !important;
  }

  .text-center {
    text-align: start !important;
  }

  .col-lg-5 {
    display: flex !important;
    justify-content: center !important;
  }

  .d-flex.align-items-center.justify-content-lg-start.justify-content-center {
    justify-content: flex-start !important;
  }
}
</style>