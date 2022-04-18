<template>
    <div @click="toggle()" v-if="open" class="outer-area"></div>
    <div class="container">
        <div>
            <logo-vue></logo-vue>
            <button @click="toggle()" class="btn-dark-magenta">
                <icon icon="icon-park-outline:menu-fold" height="24" />
            </button>
        </div>
        <aside-vue :open="open" @closeMenu="open = false"></aside-vue>
    </div>
</template>

<script>
import LogoVue from "./Logo.vue";
import AsideVue from "./Aside.vue";
import { Icon } from "@iconify/vue";

export default {
    components: {
        LogoVue,
        AsideVue,
        Icon
    },
    data() {
        return {
            open: false
        };
    },
    methods: {
        toggle(){
            this.open = !this.open
        }
    }
};
</script>

<style lang="scss" scoped>
div.outer-area {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(black, 0.5);
    z-index: 1;
}
div.container {
    div {
        margin: 1rem auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 10;

        button {
            width: fit-content;
            padding: 0.5rem !important;
            border-radius: 0.5rem !important;
        }
    }
}
</style>
