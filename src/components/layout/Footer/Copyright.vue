<template>
<div id="bottom">
    <div id="social">
        <icon v-for="icon in socialIcons" :icon="icon" ></icon>
    </div>
    <p id="copyright">
        <small>© 2022 FEM Family Church Mombasa</small>
    </p>
</div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
    components: {
        Icon,
    },
    data(){
        return {
            socialIcons: ["bxl:facebook-circle", "bxl:instagram-alt", "bxl:youtube"],
        }
    }
}
</script>


<style lang="scss" scoped>
div#bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 1rem;

    @include config.breakpoint('sm'){
        flex-direction: row;
    }

    div#social {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

}
</style>