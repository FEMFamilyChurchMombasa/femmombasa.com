<template>
    <section class="container">
        <section-title-vue
            title="Find us online"
            icon="mdi:web"
        ></section-title-vue>
        <div class="social-links">
            <a
                :href="socialLink.link"
                target="_blank"
                class="social"
                :id="socialLink.id"
                v-for="socialLink in socialLinks"
            >
                <icon class="icon" :icon="socialLink.icon" />
            </a>
        </div>
    </section>
</template>

<script>
import SectionTitleVue from "../../../components/ui/SectionTitle.vue";
import { Icon } from "@iconify/vue";
export default {
    components: {
        SectionTitleVue,
        Icon
    },
    data() {
        return {
            socialLinks: [
                {
                    id: "facebook",
                    link: "https://www.facebook.com/femfamilymombasa",
                    icon: "bxl:facebook-circle"
                },
                {
                    id: "instagram",
                    link: "https://www.instagram.com/femfamilymombasa/",
                    icon: "bxl:instagram-alt"
                },
                {
                    id: "youtube",
                    link: "https://www.youtube.com/c/FEMFamilyChurchMombasa/",
                    icon: "bxl:youtube"
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
div.social-links {
    display: grid;
    gap: 1rem;
    grid-template-columns: auto;

    .social:last-child {
        @media screen and (min-width: config.get-breakpoint('sm')) and (max-width: (config.get-breakpoint('md') - 1px)){
            grid-column: 1 / span 2;
        }
    }

    @include config.breakpoint('md'){
        grid-template-columns: repeat(3, 1fr);
    }

    .social {
        position: relative;
        display: block;
        overflow: hidden;
        background-color: config.color("light-3");
        height: 150px;
        border-radius: 1rem;
        font-size: 5rem;
        display: grid;
        place-content: center;
        color: white;

        &::before {
            content: "";
            opacity: 0;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(black, 0.15);
            transition: opacity 200ms;
        }

        .icon {
            transition: transform 200ms;
            z-index: 1;
        }

        &:hover {
            &::before {
                opacity: 1;
            }
            .icon {
                transform: scale(115%);
            }
        }
    }

    $colors: (
        "facebook": #3777F2,
        "instagram": #E1306C,
        "youtube": #F52000,
    );

    @each $name, $val in $colors {
        ##{$name} {
            background-image: linear-gradient(180deg, lighten($val, 8%), darken($val, 3%));
        }
    }
}
</style>
