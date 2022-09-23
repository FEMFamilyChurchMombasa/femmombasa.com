<template>
    <div id="chat-links">
        <a :id="link.id" v-for="link of links" target="_blank" :href="link.url">
            <icon :icon="link.icon" class="icon" :height="link.height" />
            <span>{{ link.title }}</span>
        </a>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue";

let phoneNumber = '+254724203419';

export default {
    components: {
        Icon
    },
    data() {
        return {
            links: [
                // {
                //     id: "email",
                //     title: "Send us an email",
                //     icon: "mdi:email-fast",
                //     height: 18,
                //     url:"mailto:mombasa@fem-international.org"
                // },
                {
                    id: "messenger",
                    title: "Messenger",
                    icon: "bi:messenger",
                    url:"https://m.me/femfamilymombasa"
                },
                {
                    id: "whatsapp",
                    title: "WhatsApp",
                    icon: "ri:whatsapp-fill",
                    height: 18,
                    url:`https://api.whatsapp.com/send/?phone=${ phoneNumber }&text&app_absent=0&lang=en`
                },
                // {
                //     id: "call",
                //     title: "give us a call",
                //     icon: "carbon:phone-filled",
                //     height: 18,
                //     url:"tel:+254724203419"
                // }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
div#chat-links {
    display: flex;
    flex-direction: column;
    padding: 2rem 1.5rem;
    gap: 1rem;

    a {
        display: block;
        max-width: 100%;
        padding: 1rem 1.5rem;
        border-radius: 1rem;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        text-transform: uppercase;
        font-size: 0.9rem;
        font-weight: 600;

        @mixin button-color($color) {
            background-color: $color;
            transition: 200ms;
            &:hover {
                background-color: darken($color, 5%);
            }
        }

        $colors: (
            "email": config.color("pink"),
            "messenger": config.color("blue"),
            "whatsapp": config.color("green"),
            "call": config.color("dark-magenta")
        );

        @each $key, $color in $colors {
            &##{$key} {
                @include button-color($color);
            }
        }
    }
}
</style>
