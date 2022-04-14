<template>
    <div class="padding-3" id="heading">
        <h1 class="text-magenta display-1 margin-bottom-2">A place for you to belong.</h1>
        <p class="display-4 margin-bottom-3"  style="font-weight: 400;">
            Church is more than a building. It’s a family. Welcome to FEM Family
            Church Mombasa.
        </p>
        <button class="btn-magenta">
            <span>Chat with us</span>
        </button>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div#heading {
    border-radius: 1rem;
    background-color: config.color('light-2', 0.75);

    @include config.breakpoint('lg'){
        width: calc(100% / 3);
        max-width: 500px;
    }

    button {
        width: 100%;
    }
}
</style>
