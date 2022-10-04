<template>
<header>
    <banner-vue v-show="bannerIsOpen" @closeBanner="closeBanner"></banner-vue>

    <desktop-navbar-vue v-if="mq.smPlus"></desktop-navbar-vue>
    <mobile-navbar-vue v-if="mq.xs"></mobile-navbar-vue>
</header>
</template>

<script setup>
import { inject, ref } from "vue";
import BannerVue from "./Banner/Banner.vue";
import DesktopNavbarVue from "./DesktopNavbar/DesktopNavbar.vue";
import MobileNavbarVue from "./MobileNavbar/MobileNavbar.vue";

const mq = inject('mq');

const bannerIsOpen = ref(true)

const closeBanner = () => bannerIsOpen.value = false

</script>



<style lang="scss" scoped></style>