<template>
    <aside class="container" id="chat-window">
        <header-vue></header-vue>
        <chat-links-vue></chat-links-vue>
    </aside>
</template>

<script>
import HeaderVue from "./Header.vue";
import ChatLinksVue from "./ChatLinks.vue";

export default {
    components: {
        HeaderVue,
        ChatLinksVue
    }
};
</script>

<style lang="scss" scoped>
aside {
    height: calc(100% - 9rem);
    max-width: 300px;
    position: fixed;
    background-color: white;
    box-shadow: 0 0 50px rgba(black, 0.25);
    z-index: 1;
    border-radius: 1rem;
    top: 2rem;
    right: 1rem;
    overflow-y: auto;

    @include config.breakpoint("sm") {
        right: 1.5rem;
    }
}
</style>
