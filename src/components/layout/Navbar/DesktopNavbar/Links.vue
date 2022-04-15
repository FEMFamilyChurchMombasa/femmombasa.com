<template>
    <nav>
        <router-link class="nav-link body" to="">Chat</router-link>
        <router-link class="nav-link body" to="">Give</router-link>
        <router-link class="nav-link body" to="">Services</router-link>
        <router-link class="nav-link body" to="">FAQs</router-link>
    </nav>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
nav {
    display: flex;
    gap: 3rem;
    .nav-link {
        display: block;
        font-size: 1rem;
        font-weight: 500;
        color: config.color("dark-1");
        text-decoration: none;
        transition: 200ms;

        &:hover {
            color: config.color("magenta");
        }
    }
}
</style>
