<template>
    <main>
        <p>
            If you are in Mombasa, head to Moi Avenue and branch off near Toyota
            Kenya. Turn left onto Workshop Rd and head straight for about 50
            meters. We will be on your left. Send us a message to let us know
            you stopped by.
        </p>
        <!-- <button class="heading-3">
            <icon icon="ci:link" height="20px" />
            <span>Copy Google Maps Link</span>
        </button> -->
    </main>
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
main {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @include config.breakpoint("lg") {
        flex-direction: row;
        gap: 2rem;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: 100%;
        min-width: fit-content;
        height: fit-content;
        padding: 1rem;
        border: 1px solid config.color("magenta");
        border-radius: 1rem;
        background-color: unset;
        color: config.color("magenta");
        transition: 200ms;
        cursor: pointer;

        &:hover {
            background-color: config.color("magenta");
            color: white;
        }

        @include config.breakpoint("md") {
            width: fit-content;
            padding: 1rem 2rem;
        }
    }
}
</style>
