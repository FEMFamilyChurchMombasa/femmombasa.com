<template>
    <section class="container">
        <h1 class="display-1 text-dark-1 margin-bottom-2">Our Leadership</h1>

        <div class="profiles">
            <profile-vue>
                <template #image>
                    <img src="../../assets/evangelist.webp" alt="" />
                </template>
            </profile-vue>

            <profile-vue>
                <template #details>
                    <h2 class="display-2 text-dark-3">
                        Pastor Erastus & Pauline Maina
                    </h2>
                    <p>
                        Having been in ministry for over 25 years, Pastor
                        Erastus and Pastor Pauline Maina are the lead ministers
                        of FEM Family Church, Mombasa. Together, they both
                        oversee FEM Family Church, Kikambala in Kilifi. Pastor
                        Pauline Maina is also a notable worship minister in
                        Kenya.
                    </p>
                </template>
                <template #image>
                    <img src="../../assets/pastors.webp" alt="" />
                </template>
            </profile-vue>
        </div>
    </section>
</template>

<script>
import ProfileVue from "./Profile.vue";
export default {
    components: {
        ProfileVue
    }
};
</script>

<style lang="scss" scoped>
div.profiles {
    img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        object-fit: cover;
        object-position: 50% 20%;
    }
}
</style>
