<template>
    <div class="margin-left-auto" id="image"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div#image {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    min-height: 100%;
    background: url("../../../assets/church_members.webp");
    background-size: cover;
    background-position: center 15%;
    border-radius: 1rem;
    width: 100%;

    @include config.breakpoint('lg'){
        width: calc((100% / 3) * 2);
    }
}
</style>
