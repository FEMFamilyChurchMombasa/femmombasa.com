<template>
    <button @click="open = !open" id="chat-button">
        <icon class="icon" icon="fluent:chat-16-filled" />
    </button>

    <Transition name="slide">
        <chat-window v-show="open"></chat-window>
    </Transition>
</template>

<script>
import { Icon } from "@iconify/vue";
import ChatWindow from "./ChatWindow/ChatWindow.vue";

export default {
    components: {
        Icon,
        ChatWindow
    },
    data() {
        return {
            open: false,
        }
    }
};
</script>

<style lang="scss" scoped>
.slide-enter-active, .slide-leave-active {
    transition: 500ms ease;
}

.slide-enter-from, .slide-leave-to {
    transform: translateX(calc(100% + 2rem));
}

button#chat-button {
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    background-color: config.color("magenta");
    position: fixed;
    bottom: 2rem;
    right: 1rem;
    z-index: 1;
    box-shadow: 0px 0px 20px rgba($color: #000000, $alpha: 0.5);
    border: none;
    outline: none;
    cursor: pointer;
    transition: 200ms;

    @include config.breakpoint("sm") {
        right: 1.5rem;
    }

    .icon {
        color: white;
        font-size: 2rem;
        transform: scaleX(-100%);
    }

    &:hover {
        background-color: darken(config.color("magenta"), 5%);
    }
}
</style>
