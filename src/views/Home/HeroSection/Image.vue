<template>
    <div class="margin-left-auto" id="image">
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
    z-index: -1;
    background: url("../../../assets/church_members.webp");
    width: calc((100% / 3) * 2);
    min-height: 100%;
    background-size: cover;
    background-position: center;
    border-radius: 1rem;
}
</style>
