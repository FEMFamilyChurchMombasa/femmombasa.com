<template>
    <hr class="container" />

    <footer class="container">
        <main>
            <logos-vue></logos-vue>
            <about-vue></about-vue>
            <links-vue></links-vue>
            <contact-vue></contact-vue>
        </main>

        <copyright-vue></copyright-vue>
    </footer>
</template>

<script>
import CopyrightVue from "./Copyright.vue";
import LogosVue from "./Logos.vue";
import AboutVue from "./About.vue";
import LinksVue from "./Links.vue";
import ContactVue from "./Contact.vue";

export default {
    components: {
        CopyrightVue,
        LogosVue,
        AboutVue,
        LinksVue,
        ContactVue
    }
};
</script>

<style lang="scss" scoped>
hr {
    border: none;
    border-top: 1px solid config.color(light-2);
    margin: 3rem auto;

}

footer.container {
    margin-bottom: 1rem;

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        margin-bottom: 2rem;

        @include config.breakpoint('sm'){
            display: grid;
            grid-template-columns: auto 1fr;
            align-items: flex-start;
            gap: 3rem;
        }

        @include config.breakpoint('lg'){
            display: grid;
            grid-template-columns: 80px 1fr auto 1fr;
        }
    }
}

</style>
