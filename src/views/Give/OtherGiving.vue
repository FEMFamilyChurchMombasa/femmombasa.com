<template>
    <section class="container">
        <div>
            <section-title-vue
                title="Other Ways of Giving"
                icon="eva:info-outline"
            ></section-title-vue>
            <p class="margin-bottom-2">
                If you want to donate a package or give cash, visit our physical
                location. We have a PDQ machine on-site you can also give using
                a credit or debit card. If you would like to give a cheque,
                address it to Faith Evangelistic Ministry Mombasa. In case of
                any questions, check out our send us a message or FAQs section.
                Thank you for your generosity.
            </p>
            <div class="links">
                <router-link class="navlink" to="">
                    <span>Find out where we are</span>
                    <icon icon="akar-icons:arrow-right" />
                </router-link>
                <router-link class="navlink" to="">
                    <span>Send us a message</span>
                    <icon icon="akar-icons:arrow-right" />
                </router-link>
                <router-link class="navlink" to="">
                    <span>Frequently asked questions</span>
                    <icon icon="akar-icons:arrow-right" />
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
import SectionTitleVue from "../../components/ui/SectionTitle.vue";
import { Icon } from "@iconify/vue";

export default {
    components: {
        SectionTitleVue,
        Icon,
    }
};
</script>

<style lang="scss" scoped>
section.container {
    border-radius: 1rem;
    background-color: config.color("light-2");

    div:first-child {
        padding: 2rem;
        display: flex;
        flex-direction: column;

        div.links {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            .navlink {
                display: flex;
                align-items: center;
                gap: 1rem;
            }
        }
    }
}
</style>
