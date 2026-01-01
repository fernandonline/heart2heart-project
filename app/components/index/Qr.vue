<script setup lang="ts">
import { Heart, QrCode } from "lucide-vue-next";
</script>

<template>
    <div class="qr-wrapper">
        <div class="qr-box">
            <QrCode class="qr-icon" />
            <Heart class="heart-badge" />
        </div>
    </div>
</template>

<style scoped>
.qr-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
}

.qr-box {
    width: 120px;
    height: 120px;
    padding: 0.75rem;
    border-radius: 0.75rem;
    border: 2px dashed rgba(114, 0, 38, 0.5);
    background: rgba(247, 37, 133, 0.1);
    backdrop-filter: blur(5px);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.qr-icon {
    color: #000;
    width: 100%;
    height: 100%;
}

.heart-badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    color: #dc3545;
    width: 24px;
    height: 24px;
}
</style>