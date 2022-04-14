<template>

<section class="container">
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
    display: flex;
}
</style>