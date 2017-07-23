<template>
    <div class="home-wrapper">
        <blog-list :blogList="blogList"></blog-list>
        <infinite-loading :on-infinite="getMoreBlogs" ref="infiniteLoading">
            <span slot="no-more">没有更多了！</span>
        </infinite-loading>
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex';
import InfiniteLoading from 'vue-infinite-loading/src/components/Infiniteloading.vue';
import BlogList from '@/components/BlogList';

export default {
    name: 'home',
    props: {},
    data() {
        return {};
    },
    components: {
        InfiniteLoading,
        BlogList
    },
    computed: {
        ...mapState('blogs', [
            'blogList',
            'pageSize',
            'loadingStatus'
        ])
    },
    methods: {
        ...mapActions('appShell/appHeader', [
            'setAppHeader'
        ]),
        ...mapActions('blogs', [
            'getBlogList'
        ]),
        async getMoreBlogs() {
            let type = this.$route.query.type || '';
            await this.getBlogList({
                type,
                pageNum: Math.floor(this.blogList.length / this.pageSize) + 1,
                pageSize: this.pageSize
            });

            this.$refs.infiniteLoading.$emit('$InfiniteLoading:' + this.loadingStatus);
            
        }
    },
    watch: {
        ['$route.query.type'](newtype, oldtype) {
            document.body.scrollTop = 0;
        }
    },
    mounted () {
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
        let title = 'welcome to my blog site';
        let type = this.$route.query.type || '';
        if (type) {
            title = `类别-${type}`;
        }
        this.setAppHeader({
            show: true,
            showMenu: true,
            title: title,
            showBack: false,
            showLogo: true,
            actions: [
                {
                    icon: 'search',
                    route: '/search'
                }
            ]
        });
    },
    // async asyncData({ store, route }) {
    //     let type = route.query.type || '';
    //     store.dispatch('blogs/getBlogList', {
    //         type,
    //         pageNum: 0,
    //         pageSize: store.state.blogs.pageSize;
    //     });
    // }
};
</script>

<style lang="stylus" scoped>

</style>
