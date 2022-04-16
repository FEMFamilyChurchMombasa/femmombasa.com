<template>
    <header>
        <h2 class="display-2">{{ serviceName }}</h2>
        <p class="heading-2">Every {{ weekday }} from {{ from }} to {{ to }}</p>
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

    p.heading-2 {
        color: config.color("magenta");
    }
}
</style>
