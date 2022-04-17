<template>
    <section>
        <h2 class="heading-2">About</h2>
        <p>FEM Family Church Mombasa is a branch of Faith Evangelistic Ministry, an international non-profit organization founded by Rev. Teresa Wairimu in 1988. Under Rev. Teresa Waimu, FEM Family Church Mombasa launched on April 21, 2019, with Pastor Erastus and Pauline Maina as its pastors.</p>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
    order: 2;
    grid-column: 1 / span 2;

    @include config.breakpoint('sm'){
        order: unset;
        grid-column: unset;
    }

    h2.heading-2 {
        margin: 0;
        margin-bottom: 1rem;
    }
}
</style>
