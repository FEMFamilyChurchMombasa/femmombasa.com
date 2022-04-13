<template>
<RouterView></RouterView>
</template>

<script>
import { RouterView } from "vue-router";

export default {
    components: {
        RouterView
    }
}
</script>


<style lang="scss">

body, html {
    font-family: config.$font-family;
}

</style>