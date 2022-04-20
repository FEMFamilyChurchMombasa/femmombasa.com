<template>
    <section class="profile">
        <article class="details">
            <slot name="details">
            </slot>
        </article>
        <div class="image">
            <slot name="image">
                <img src="../../assets/evangelist.webp" alt="evangelist" />
            </slot>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section.profile {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    max-height: min-content;
    margin-bottom: 3rem;

    @include config.breakpoint("md") {
        grid-template-columns: 1fr 1fr;
    }

    article.details {
        padding: 2rem;
        background-color: config.color("light-2");
        border-radius: 1rem;
        border-left: 0.25rem solid config.color("magenta");
        max-height: fit-content;
        order: 1;

        @include config.breakpoint('md'){
            order: unset;
        }

        h2 {
            margin-bottom: 1rem;
        }
    }

    div.image {
        position: relative;
        border-radius: 1rem;
        overflow: hidden;
        line-height: 0;
        background-color: grey;
        min-height: 300px;
        max-height: 100%;
    }
}
</style>
