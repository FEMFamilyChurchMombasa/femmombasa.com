<template>
    <div class="banner">
        <div class="text">
            <Icon v-if="mq.smPlus" icon="material-symbols:notifications-rounded" />
            <p class="small">We're now on WhatsApp! Click the chat button below.</p>
        </div>
        <Icon class="icon" @click="$emit('closeBanner')" icon="ic:round-close"/>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { inject } from 'vue';

const mq = inject('mq');

</script>


<style lang="scss" scoped>
.banner {
    padding: 1rem;
    background-color: config.color('magenta');
    box-shadow: inset 0px -5px 15px -8px rgba(black, 0.5);
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: space-between;
    font-weight: 500;
    color: config.color('light-2');

    @include config.breakpoint('sm'){
        padding: 1rem 2rem;
    }

    div.text {
        display: flex;
        gap: .5rem;
        align-items: center;
    }

    .icon {
        cursor: pointer;
        transition: all 200ms ease;
        min-width: 16px;
        font-size: 1rem;
    }
    
    
}
</style>