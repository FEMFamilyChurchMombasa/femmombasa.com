<template>
    <div class="image">
        <slot name="image">
            <img :id="serviceRef" :src="imageSrc" :alt='serviceRef + " image"'>
        </slot>
    </div>
</template>

<script>
export default {
    props: ['imageSrc', 'serviceRef'],
};
</script>

<style lang="scss" scoped>
div.image {
    border-radius: 1rem;
    overflow: hidden;
    line-height: 0;
    // min-height: 200px;

    @include config.breakpoint('lg'){
        order: 2;
    }


    img {
        object-fit: cover;
        width: 100%;
        max-height: 100%;

        @include config.breakpoint('sm'){
            // object-position: 85% 10%;
            height: 120%;
        }

        // @include config.breakpoint('xl'){
        //     object-position: 90% 10%;
        // }
    }
}
</style>
