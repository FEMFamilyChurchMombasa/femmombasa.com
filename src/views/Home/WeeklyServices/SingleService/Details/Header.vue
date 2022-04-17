<template>
    <header>
        <h2 class="display-3">{{ serviceName }}</h2>
        <p class="heading-4">Every {{ weekday }} from {{ from }} to {{ to }}</p>
    </header>
</template>

<script>
export default {
    props: ['serviceName', 'serviceTimes'],
    data(){
        return {
            ...this.serviceTimes
        }
    }
};
</script>

<style lang="scss" scoped>
header {
    h2 {
        color: config.color("dark-2");
        margin-bottom: 0.5rem !important;
    }

    p.heading-4 {
        color: config.color("magenta");
    }
}
</style>
