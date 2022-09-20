<template>

<!-- <div id="logos">
    <img src="../../../assets/dove-logo.svg" alt="dove logo">
    <img src="../../../assets/fem-msa-logo.svg" alt="fem msa logo">
</div> -->

<div class="logo">
    <img src="../../../assets/dove-logo.svg" alt="dove logo">
</div>


</template>

<script>
export default {
    
}
</script>


<style lang="scss" scoped>
div.logo {
    img {
        display: block;
        min-height: 150px;
    }
}
// div#logos {
//     display: flex;
//     gap: 2rem;

//     @include config.breakpoint('sm'){
//         display: block;
//     }

//     img {
//         display: block;
//         width: auto;
//         height: 80px;

//         @include config.breakpoint('sm'){
//             margin-bottom: 2rem;
//         }
//     }
// }
</style>