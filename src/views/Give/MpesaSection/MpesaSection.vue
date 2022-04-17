<template>
    <article class="container">
        <section-title-vue title="How to Give Using M-Pesa" icon="eva:info-outline"></section-title-vue>

        <div class="mpesa-steps">
            <step-vue v-for="step of stepsData" v-bind="step"></step-vue>
        </div>
    </article>
</template>

<script>
import SectionTitleVue from "../../../components/ui/SectionTitle.vue";
import StepVue from "./Step.vue";
import stepsData from "./stepsData.json";

console.log(stepsData)

export default {
    components: {
        SectionTitleVue,
        StepVue
    },
    data(){
        return {
            stepsData,
        }
    }
};
</script>

<style lang="scss" scoped>
article.container {
    margin-bottom: 3rem;
    div.mpesa-steps {
        display: grid;
        gap: 1rem;

        @include config.breakpoint('sm'){
            grid-template-columns: repeat(2, 1fr);
        }

        @include config.breakpoint('md'){
            grid-template-columns: repeat(3, 1fr);
        }
    }
}
</style>
