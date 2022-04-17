<template>
    <div class="margin-left-auto" id="image">
        <slot name="image">
            <img
                src="../../../assets/church_members.webp"
                alt="church members"
            />
        </slot>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div#image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-size: cover;
    background-position: center 15%;
    border-radius: 1rem;
    width: 100%;
    overflow: hidden;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    @include config.breakpoint("lg") {
        width: calc((100% / 3) * 2);
    }
}
</style>
