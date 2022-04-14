<template>
    <div id="heading">
        <h1 class="display-1 margin-bottom-2">A place for you to belong.</h1>
        <p class="display-3 margin-bottom-3">
            Church is more than a building. It’s a family. Welcome to FEM Family
            Church Mombasa.
        </p>
        <button class="btn-dark-blue">
            <span>Chat with us</span>
        </button>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div#heading {
    width: 100%;
    max-width: 500px;
    padding: 3rem;
    border-radius: 1rem;
    background-color: config.color('light-2');

    button {
        width: 100%;
    }
}
</style>
