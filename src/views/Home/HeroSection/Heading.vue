<template>
    <div id="heading">
        <slot name="heading">
            <h1 class="display-1">A place for you to belong.</h1>
            <p class="display-4" style="font-weight: 400">
                Church is more than a building. It’s a family. Welcome to FEM
                Family Church Mombasa.
            </p>
            <button @click="chatToggle.toggle()" class="btn-magenta">
                <span>Chat with us</span>
                <icon icon="fluent:chat-16-filled" />
            </button>
        </slot>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import chatToggle from "../../../components/layout/Chat/chatToggle";

export default {
    components: {
        Icon
    },
    data(){
        return {
            chatToggle
        }
    }
};
</script>

<style lang="scss" scoped>
div#heading {
    border-radius: 1rem;
    padding: 6rem 2rem;
    margin-bottom: 1rem;
    color: white;
    background-color: config.color("dark-1", 0.5);

    @include config.breakpoint("sm") {
        padding: 3rem;
    }

    h1 {
        margin-bottom: 1rem;

        @include config.breakpoint("sm") {
            margin-bottom: 2rem;
        }

        @include config.breakpoint("lg") {
            color: config.color("magenta");
        }
    }

    p.display-4 {
        margin-bottom: 2rem;

        @include config.breakpoint("sm") {
            margin-bottom: 3rem;
        }

        @include config.breakpoint("lg") {
            color: config.color("dark-1");
        }
    }

    @include config.breakpoint("lg") {
        width: calc(100% / 3);
        max-width: 500px;
        background-color: config.color("light-2", 0.75);
    }

    // button {
    //     width: 100%;
    // }
}
</style>
