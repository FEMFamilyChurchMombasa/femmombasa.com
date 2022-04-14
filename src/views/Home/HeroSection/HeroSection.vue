<template>

<section class="container padding-top-5 padding-bottom-5">
    <heading-vue></heading-vue>
    <image-vue></image-vue>
</section>

</template>

<script>
import HeadingVue from "./Heading.vue";
import ImageVue from "./Image.vue";

export default {
    components: {
        HeadingVue,
        ImageVue,
    }
}
</script>


<style lang="scss" scoped>
section {
    position: relative;
    // min-height: 600px;
}
</style>