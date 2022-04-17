<template>
<section>
    <h2 class="heading-2 margin-bottom-1">Links</h2>
    <nav>
        <router-link class="navlink" to="">Home</router-link>
        <router-link class="navlink" to="">Give</router-link>
        <router-link class="navlink" to="">Our Leadership</router-link>
    </nav>
</section>
</template>

<script>
export default {
    
}
</script>


<style lang="scss" scoped>
section {
    width: 100%;

    @include config.breakpoint('sm'){
        width: fit-content;
    }

    nav {
        .navlink {
            display: block;
            margin-bottom: 1rem;
        }
    }
}
</style>