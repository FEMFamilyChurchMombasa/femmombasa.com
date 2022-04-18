<template>
    <Transition name="slide">
        <aside v-if="open">
            <button @click="$emit('closeMenu')" class="btn-magenta">
                <icon icon="icon-park-outline:menu-unfold" height="24" />
            </button>
            <links-vue @closeMenu="$emit('closeMenu')"></links-vue>
        </aside>
    </Transition>
</template>

<script>
import { Icon } from "@iconify/vue";
import LinksVue from "./Links.vue";
export default {
    components: {
        Icon,
        LinksVue,
    },
    props: ["open"]
};
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
    transition: 500ms ease;
}
.slide-enter-from,
.slide-leave-to {
    width: 0;
    padding: 2rem 0;

    * {
        opacity: 0;
    }
}

aside {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background-color: config.color("dark-magenta");
    position: fixed;
    width: 150px;
    right: 0;
    top: 0;
    height: 100%;
    z-index: 2;
    padding: 2rem 1.5rem;
    padding-left: 1rem;
    box-shadow: 0 0 30px config.color("dark-1", 0.25);

    button {
        // width: fit-content !important;
        padding: 0.5rem !important;
        margin-bottom: 2rem;
        border-radius: 0.5rem !important;
    }
}
</style>
