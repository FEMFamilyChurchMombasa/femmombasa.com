<template>
    <article @click="toggle()" class="faq">
        <header :class="{ 'text-magenta': open }">
            <h3 class="paragraph">{{ question }}</h3>
            <icon icon="ep:arrow-down-bold" class="text-magenta" />
        </header>
        <main v-show="open">
            <p>{{ answer }}</p>
        </main>
    </article>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
    components: {
        Icon
    },
    props: ["question", "answer"],
    data() {
        return {
            open: false,
        };
    },
    methods: {
        toggle(){
            this.open = !this.open
        }
    }
};
</script>

<style lang="scss" scoped>
article.faq {
    background-color: config.color("light-2");
    border-radius: 1rem;
    margin-bottom: 1rem;
    transition: 300ms;

    header {
        padding: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        transition: 200ms;
        cursor: pointer;

        &:hover {
            color: config.color('magenta');
        }

        h3 {
            flex: 1;
        }
    }

    main {
        padding: 1.5rem;
        padding-top: 0rem;
    }
}
</style>
