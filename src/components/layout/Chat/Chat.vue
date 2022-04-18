<template>
    <chat-button-vue v-bind="{ chatToggle }"></chat-button-vue>
    <Transition name="slide">
        <chat-window v-if="chatToggle.open"></chat-window>
    </Transition>
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
.slide-enter-active, .slide-leave-active {
    transition: 500ms ease;
}

.slide-enter-from, .slide-leave-to {
    transform: translateX(calc(100% + 2rem));
}
</style>
