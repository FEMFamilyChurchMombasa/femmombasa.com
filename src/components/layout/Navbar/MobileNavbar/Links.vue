<template>
    <nav>
        <button @click="$emit('closeMenu')" class="btn-pink">
            <icon icon="clarity:close-line" height="32" />
        </button>
        <router-link class="nav-link body" to="">Chat</router-link>
        <router-link class="nav-link body" to="">Give</router-link>
        <router-link class="nav-link body" to="">Services</router-link>
        <router-link class="nav-link body" to="">FAQs</router-link>
    </nav>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
    components: {
        Icon
    }
};
</script>

<style lang="scss" scoped>
nav {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2rem;
    margin-bottom: 3rem;
    background-color: white;
    position: fixed;
    width: 150px;
    right: 0;
    top: 0;
    height: 100%;
    z-index: 1;
    padding: 3rem 2rem;
    box-shadow: 0 0 40px config.color("dark-1", 0.1);

    button {
        padding: 0.5rem !important;
        border-radius: 0.5rem !important;
    }
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
