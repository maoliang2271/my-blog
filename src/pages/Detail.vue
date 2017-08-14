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
                <h6 v-if="item.type === 'h6'">{{ item.data }}</h6>
                <ul v-if="item.type === 'ul'">
                    <li v-for="(item2, index2) in item.data" :key="index2">{{item2}}</li>
                </ul>
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
        line-height 22px
        font-size 14px
        word-wrap break-word
        p
            margin-top 10px
            text-indent 2em
            
        ul
            list-style none
            padding 0
            margin 0 0 10px 0
        h6
            font-weight blod
            font-size 16px        
        img
            width 100%
            height 100%

</style>
