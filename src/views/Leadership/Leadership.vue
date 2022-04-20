<template>
    <section class="container">
        <h1 class="display-1 text-dark-1 margin-bottom-2">Our Leadership</h1>

        <div class="profiles">
            <profile-vue>
                <template #image>
                    <img src="../../assets/evangelist.webp" alt="" />
                </template>
                <template #details>
                    <h2 class="display-2 text-dark-3 margin-bottom-1">
                        Rev. Teresa Wairimu
                    </h2>
                    <p class="margin-bottom-2">
                        Reverend Teresa Wairimu is an acclaimed evangelist,
                        speaker, and author. In 1988, she founded Faith
                        Evangelistic Ministry, an international Christian
                        organization with branches in the United States of
                        America, the United Kingdom, Germany, and other nations.
                        She is also the founder of Operation Give and Grow, an
                        award-winning charity organization in Kilifi, Kenya.
                        Evangelist Wairimu is well-known for her remarkable gift
                        of prophecy.
                    </p>
                    <a target="_blank" href="https://evangelistwairimu.org/">
                        <span>Faith Evangelistic Ministry </span>
                        <icon icon="ci:external-link" />
                    </a>
                </template>
            </profile-vue>

            <profile-vue>
                <template #details>
                    <h2 class="display-2 text-dark-3 margin-bottom-1">
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
import { Icon } from "@iconify/vue";
export default {
    components: {
        ProfileVue,
        Icon
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

    a {
        display: flex;
        align-items: center;
    }
}
</style>
