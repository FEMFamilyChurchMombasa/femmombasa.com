<template>
    <div id="bottom">
        <div id="social">
            <a v-for="social in socialIcons" :href="social.link" target="_blank">
                <icon :icon="social.icon"></icon>
            </a>
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
        Icon
    },
    data() {
        return {
            socialIcons: [
                {
                    icon: "bxl:facebook-circle",
                    link: "https://www.facebook.com/femfamilymombasa"
                },
                {
                    icon: "bxl:instagram-alt",
                    link: "https://www.instagram.com/femfamilymombasa/"
                },
                {
                    icon: "bxl:youtube",
                    link: "https://www.youtube.com/c/FEMFamilyChurchMombasa/"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
div#bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 1rem;

    @include config.breakpoint("sm") {
        flex-direction: row;
    }

    div#social {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        a {
            color: config.color("dark-3");
            transition: color 200ms;
            &:hover {
                color: config.color('dark-2');
            }
        }
    }
}
</style>
