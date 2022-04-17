<template>
    <nav>
        <router-link @click="$emit('closeMenu')" class="nav-link body" to="/">Home</router-link>
        <router-link @click="$emit('closeMenu')" class="nav-link body" to="/give">Give</router-link>
        <router-link @click="$emit('closeMenu')" class="nav-link body" :to="{ path:'/', hash: '#servicesSection' }">Services</router-link>
        <router-link @click="$emit('closeMenu')" class="nav-link body" to="/our-leadership">Our Leadership</router-link>
        <router-link @click="$emit('closeMenu')" class="nav-link body" :to="{ path: '/', hash: '#faqsSection' }">FAQs</router-link>
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
