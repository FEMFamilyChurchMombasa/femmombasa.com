<template>
    <section class="container margin-bottom-3">
        <section-title-vue
            title="Frequently Asked Questions"
            icon="fa-regular:question-circle"
        ></section-title-vue>

        <main>
            <faq-vue v-for="faq of faqs" v-bind="faq"></faq-vue>
        </main>
    </section>
</template>

<script>
import SectionTitleVue from "../../../components/ui/SectionTitle.vue";
import { Icon } from "@iconify/vue";
import FaqVue from "./Faq.vue";
import faqs from "./faqsData.json";

export default {
    components: {
        SectionTitleVue,
        FaqVue,
        Icon
    },
    data(){
        return {
            faqs,
        }
    },
};
</script>

<style lang="scss" scoped>
</style>
