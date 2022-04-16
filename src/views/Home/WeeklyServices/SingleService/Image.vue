<template>
    <div class="image">
        <slot name="image">
        </slot>
    </div>
</template>

<style lang="scss" scoped>
div.image {
    border-radius: 1rem;
    overflow: hidden;
    line-height: 0;

    @include config.breakpoint('lg'){
        order: 2;
    }
}
</style>
