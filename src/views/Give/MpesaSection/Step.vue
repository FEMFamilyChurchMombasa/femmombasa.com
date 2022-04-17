<template>
<div>
    <h3 class="text-dark-magenta">Step {{ id }}</h3>
    <p>{{ description }}</p>
</div>
</template>

<script>
export default {
    props: ["id", "description"],
}
</script>


<style lang="scss" scoped>
div {
    background-color: config.color('light-2');
    border-radius: 1rem;
    padding: 2rem;

    h3 {
        margin-bottom: 1rem;
    }
}
</style>