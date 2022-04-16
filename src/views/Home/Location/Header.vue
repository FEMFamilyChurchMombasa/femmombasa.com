<template>
    <header class="heading-1">
        <icon class="text-magenta" icon="fa6-solid:location-dot" />
        <h1>Location</h1>
    </header>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
    components: {
        Icon,
    }
};
</script>

<style lang="scss" scoped>
header {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    margin-bottom: 1.5rem;

    h1 {
        margin: 0;
    }
}
</style>
