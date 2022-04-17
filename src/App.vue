<template>
    <navbar-vue></navbar-vue>

    <chat-vue :open="chatOpen" @toggle="chatOpen = !chatOpen"></chat-vue>

    <main>
        <router-view @openChat="chatOpen = !chatOpen"></router-view>
    </main>

    <footer-vue></footer-vue>

</template>

<script>
import { RouterView } from "vue-router";
import FooterVue from "./components/layout/Footer/Footer.vue";
import NavbarVue from "./components/layout/Navbar/Navbar.vue";
import ChatVue from "./components/layout/Chat/Chat.vue";

export default {
    components: {
        RouterView,
        NavbarVue,
        FooterVue,
        ChatVue
    },
    data(){
        return {
            chatOpen: false,
        }
    }
};
</script>

<style lang="scss">
body,
html {
    font-size: 16px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: config.color("dark-1");

    * {
        font-family: config.$font-family;
    }
}

.container {
    width: calc(100% - 2rem);
    max-width: 1300px;
    margin: auto;

    @include config.breakpoint('sm'){
        width: calc(100% - 3rem);
    }
}

a {
    text-decoration: none;
    color: config.color("magenta");
    cursor: pointer;

    &:hover {
        color: darken(config.color("magenta"), 10%);
    }
}

h1, h2, h3, h4, h5, h6 {
    font-size: 1rem;
    margin: 0;
}
</style>
