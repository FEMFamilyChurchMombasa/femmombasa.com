<template>

<section class="container">
    <heading-vue>
        <template #heading>
            <slot name="heading"></slot>
        </template>
    </heading-vue>
    <image-vue>
        <template #image>
            <slot name="image"></slot>
        </template>
    </image-vue>
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
    margin-bottom: 2rem;

    @include config.breakpoint('sm'){
        margin-bottom: 3rem;
    }
    
    @include config.breakpoint('lg'){
        padding: 2rem 0;
    }

    @include config.breakpoint('xl'){
        padding: 5rem 0;
    }
}
</style>