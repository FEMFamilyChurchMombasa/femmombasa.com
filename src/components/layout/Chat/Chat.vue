<template>
    <chat-button-vue v-bind="{ chatToggle }"></chat-button-vue>
    <Transition name="slide">
        <chat-window v-show="chatToggle.open"></chat-window>
    </Transition>
    <div @click="chatToggle.toggle()" v-if="chatToggle.open" class="outer-area"></div>
</template>

<script>
import ChatWindow from "./ChatWindow/ChatWindow.vue";
import ChatButtonVue from "./ChatWindow/ChatButton.vue";
import chatToggle from "./chatToggle";

export default {
    components: {
        ChatWindow,
        ChatButtonVue,
    },
    data(){
        return {
            chatToggle,
        }
    }
};
</script>

<style lang="scss" scoped>
.outer-area {
    position: fixed;
    z-index: 2;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(black, 0.5);
    transition: 200ms;
}
.slide-enter-active, .slide-leave-active {
    transition: 500ms ease;
}

.slide-enter-from, .slide-leave-to {
    transform: translateX(calc(100% + 2rem));
}
</style>
