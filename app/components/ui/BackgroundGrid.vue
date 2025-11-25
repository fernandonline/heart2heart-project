<style scoped>
  .grid-wrapper {
    min-height: 100dvh;
    width: 100%;
    position: relative;
    background: var(--bg);
    color: var(--white);
  }

  .grid-background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to right, #FFFFFF08, transparent 1px),
      linear-gradient(to bottom, #FFFFFF08, transparent 1px);
    background-size: 20px 30px;
    -webkit-mask-image: radial-gradient(
      ellipse 90% 90% at 50% 20%,
      #000 60%,
      transparent 100%
    );
    mask-image: radial-gradient(
      ellipse 90% 90% at 50% 20%,
      #000 60%,
      transparent 100%
    );
  }
</style>

<template>
  <div class="grid-wrapper">
    <div class="grid-background">
        <slot/>
    </div>
  </div>
</template>
