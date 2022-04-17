<template>
    <header class="heading-1">
        <icon class="text-magenta" :icon="icon"></icon>
        <h2>{{ title }}</h2>
    </header>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
    props: ["title", "icon"],
    components: {
        Icon
    }
};
</script>

<style lang="scss" scoped>
header {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1.5rem;

    h2 {
        font-size: inherit;

        margin: 0;
    }
}
</style>
