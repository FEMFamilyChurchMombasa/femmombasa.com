<template>
    <div class="container">
        <div>
            <logo-vue></logo-vue>
            <button @click="isOpen = !isOpen" class="btn-dark-magenta">
                <icon icon="icon-park-outline:menu-fold" height="24" />
            </button>
        </div>
        <aside-vue :isOpen = "isOpen" @closeMenu="isOpen = false"></aside-vue>
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
            isOpen: false
        };
    }
};
</script>

<style lang="scss" scoped>
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
