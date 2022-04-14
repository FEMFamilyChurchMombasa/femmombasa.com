<template>
    <header class="container">
        <img src="../../assets/fem-msa-logo.svg" alt="logo" />
        <nav>
            <router-link class="nav-link body" to="">Chat</router-link>
            <router-link class="nav-link body" to="">Give</router-link>
            <router-link class="nav-link body" to="">Services</router-link>
            <router-link class="nav-link body" to="">FAQs</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Navbar"
};
</script>

<style lang="scss" scoped>
header {
    margin: 1rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img[alt="logo"] {
        height: 5rem;

        @include config.breakpoint('sm'){
            height: 6rem;
        }
    }

    nav {
        display: flex;
        gap: 3rem;
        .nav-link {
            @include config.breakpoint('xs'){
                display: none;
            }

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
}
</style>
