<template>
    <nav>
        <router-link class="nav-link body" to="">Give</router-link>
        <router-link class="nav-link body" to="">Services</router-link>
        <router-link class="nav-link body" to="">Our Leadership</router-link>
        <router-link class="nav-link body" to="">FAQs</router-link>
    </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2rem;

    .nav-link {
        display: block;
        font-size: 1rem;
        font-weight: 500;
        color: config.color("light-2");
        text-decoration: none;
        transition: 200ms;

        &:hover {
            color: config.color("white");
        }
    }
}
</style>
