<template>
    <header class="container">
        <div>
            <logo-vue></logo-vue>
            <button @click="isOpen = !isOpen" class="btn-light-3">
                <icon icon="eva:menu-fill" height="32" />
            </button>
        </div>
        <Transition>
            <links-vue @closeMenu="isOpen = false" v-if="isOpen"></links-vue>
        </Transition>
    </header>
</template>

<script>
import LogoVue from "./Logo.vue";
import LinksVue from "./Links.vue";
import { Icon } from "@iconify/vue";

export default {
    name: "Navbar",
    components: {
        LogoVue,
        LinksVue,
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
header {
    div {
        margin: 1rem auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 10;

        button {
            padding: 1rem !important;
            border-radius: 1rem !important;
        }
    }
}

.v-enter-active,
.v-leave-active {
    transition: 400ms ease;
}
.v-enter-from,
.v-leave-to {
    transform: translateX(100%);
    // opacity: 0;
}
</style>
