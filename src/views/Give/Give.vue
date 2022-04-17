<template>
    <hero-section-vue>
        <template #heading>
            <div id="giving-headline">
                <h1 class="display-1">
                    Worship with your giving.
                </h1>

                <div>
                    <p>“God loves a cheerful giver.”</p>
                    <small>2 Corinthians 9:7 NKJV</small>
                </div>

                <button class="btn-dark-blue">
                    How to Give <icon icon="ph:caret-down-bold" />
                </button>
            </div>
        </template>

        <template #image>
            <img src="../../assets/giving.webp" alt="giving" />
        </template>
    </hero-section-vue>

    <mpesa-section-vue></mpesa-section-vue>

    <other-giving-vue></other-giving-vue>

</template>

<script>
import HeroSectionVue from "../Home/HeroSection/HeroSection.vue";
import { Icon } from "@iconify/vue";
import MpesaSectionVue from "./MpesaSection/MpesaSection.vue";
import OtherGivingVue from "./OtherGiving.vue";

export default {
    components: {
        HeroSectionVue,
        Icon,
        MpesaSectionVue,
        OtherGivingVue
    }
};
</script>

<style lang="scss" scoped>
img[alt="giving"] {
    object-fit: cover;
    object-position: 70% 15%;
    width: 100%;
    height: 100%;
}

div#giving-headline {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: white;

    @include config.breakpoint('lg'){
        color: config.color('dark-1');
    }
}
</style>
