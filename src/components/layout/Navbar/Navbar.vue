<template>
<header>
    <desktop-navbar-vue v-if="mq.smPlus"></desktop-navbar-vue>
    <mobile-navbar-vue v-if="mq.xs"></mobile-navbar-vue>
</header>
</template>

<script>
import DesktopNavbarVue from "./DesktopNavbar/DesktopNavbar.vue"
import MobileNavbarVue from "./MobileNavbar/MobileNavbar.vue"
export default {
    components: {
        DesktopNavbarVue,
        MobileNavbarVue,
    },
    inject: ['mq']
}
</script>


<style lang="scss" scoped></style>