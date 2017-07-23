<template>
    <div class="detail-wrapper">
        <h3>{{blogDetail.title}}</h3>

        <div class="title-info">
            <span>{{blogDetail.author}}</span>
            <span>{{blogDetail.date}}</span>
        </div>

        <div class="content">
            <div v-for="(item, index) in blogDetail.content" class="news-item" :key="index">
                <p v-if="item.type === 'text'">{{ item.data }}</p>
                <img v-if="item.type === 'image'" :src="item.data.big.url"/>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex';

export default {
    name: 'detail',
    data() {
        return {};
    },
    computed: {
        ...mapState('blogs', [
            'blogDetail'
        ])
    },
    methods: {
        ...mapActions('appShell/appHeader', [
            'setAppHeader'
        ]),
        ...mapActions('blogs', [
            'getBlogDetail'
        ])
    },
    async asyncData({store, route}) {
        let blogId = route.params.id;
        await store.dispatch('blogs/getBlogDetail', {blogId});
    },
    mounted () {
        this.setAppHeader({
            show: true,
            showMenu: false,
            title: this.blogDetail.title,
            showBack: true,
            showLogo: true,
            actions: [
                {
                    icon: 'search',
                    route: '/search'
                }
            ]
        });
    }
};
</script>

<style lang="stylus" scoped>

.detail-wrapper
    padding 20px
    min-height 200px
    text-align left

    h3
        font-size 26px
        line-height 36px
        font-weight 700
        marigin-bottom 20px

    .title-info
        margin-bottom 20px
        font-size 14px
        color #808080
        span
            margin-right 10px

    .content
        line-height 27px
        font-size 14px
        word-wrap break-word
        p
            margin-top 10px
            text-indent 32px
        img
            width 100%
            height 100%

</style>
