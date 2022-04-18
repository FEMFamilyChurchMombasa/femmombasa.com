<template>
    <button :class="{ 'open': chatToggle.open }" @click="chatToggle.toggle()" id="chat-button">
        <icon v-show="!chatToggle.open"  class="icon" icon="fluent:chat-16-filled" />
        <icon v-show="chatToggle.open"  class="icon" icon="ep:circle-close-filled" />
    </button>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
    components: {
        Icon
    },
    props: ["chatToggle"]
};
</script>

<style lang="scss" scoped>
button#chat-button {
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    background-color: config.color("magenta");
    position: fixed;
    bottom: 2rem;
    right: 1rem;
    z-index: 3;
    box-shadow: 0px 0px 20px rgba($color: #000000, $alpha: 0.5);
    border: none;
    outline: none;
    cursor: pointer;
    transition: 200ms;
    display: grid;
    place-content: center;

    .icon {
        color: white;
        font-size: 2rem;
        transform: scaleX(-100%);
    }

    @include config.breakpoint("sm") {
        right: 1.5rem;
    }
    &.open {
        background-color: white;
        .icon {
            color: config.color("magenta");
            font-size: 2rem;
            transform: scaleX(-100%);
        }
    }
}
</style>
