<template>
    <section class="steps-section">
        <div class="steps-container">
            <article v-for="step in steps" :key="step.number" class="step-card">
                <span class="step-number">{{ step.number }}</span>
                <h3 class="step-title">{{ step.title }}</h3>
                <p class="step-description">{{ step.description }}</p>
            </article>
        </div>
    </section>
</template>

<script setup>
const steps = [
  {
    number: 1,
    title: 'Crie seu design',
    description: 'Personalize seu cartão com fotos e mensagens especiais.'
  },
  {
    number: 2,
    title: 'Gere o QR Code',
    description: 'Receba um código único para o seu cartão digital.'
  },
  {
    number: 3,
    title: 'Compartilhe o amor',
    description: 'Envie o QR Code e surpreenda quem você ama.'
  }
];
</script>

<style scoped>
.steps-section {
  padding: 3rem 0;
  margin-top: 3rem;
  background: white;
}

.steps-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  text-align: center;
}

@media (min-width: 768px) {
  .steps-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

.step-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: rgba(13, 110, 253, 0.1);
  border-radius: 50%;
  color: #000;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.step-title {
  font-weight: bold;
  color: #212529;
  margin-bottom: 0.5rem;
}

.step-description {
  color: #6c757d;
  margin: 0;
}
</style>