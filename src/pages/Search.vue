<template>
    <div class="app-search-page">
        <header>
            <v-btn light icon class="search-btn" @click.native="$router.go(-1)">
                <v-icon class="search-icon">arrow_back</v-icon>
            </v-btn>
            <form @submit.prevent="search">
                <input class="search-input" v-model="query" type="search" autocomplete="off" placeholder="请输入搜索词" autocapitalize="off"></input>
            </form>
            <v-btn light icon class="search-btn" @click.native="query = ''" v-show="query">
                <v-icon class="search-icon">close</v-icon>
            </v-btn>
        </header>
        <div v-if="loading" class="search-loading">
            <v-progress-circular indeterminate v-bind:size="70" class="primary--text"></v-progress-circular>
        </div>
        <div v-if="!loading && blogList.length">
            <blog-list :blogList="blogList" :className="'compact'"></blog-list>
        </div>
    </div>
</template>

<script>

import {mapActions} from 'vuex';
import BlogList from '@/components/BlogList';
import axios from 'axios';

export default {
    name: 'search',
    data() {
        return {
            query: '',
            loading: false,
            blogList: []
        };
    },
    components: {
        BlogList
    },
    methods: {
        ...mapActions('appShell/appHeader', [
            'setAppHeader'
        ]),
        async search() {

            // 把数据清空
            this.blogList = [];

            // 显示加载动画
            this.loading = true;

            // 让当前输入框失去焦点
            this.$el && this.$el.querySelector('.search-input').blur();

            let query = this.query && this.query.trim();
            if (query) {
                try {
                    let res = await axios('/api/search', {
                        method: 'get',
                        params: {
                            query
                        }
                    });
                    if (res.status === 200 && res.data.errorNo === 0) {
                        this.blogList = res.data.data;
                    }
                }
                catch (e) {}
            }

            this.loading = false;
        }
    },
    created () {
        if (this.$route.query.query) {
            this.query = this.$route.query.query;
            this.search();
        }
    },
    activated () {
        this.setAppHeader({show: false});
    }
};
</script>

<style lang="stylus" scoped>

header
    display flex
    align-items center
    height 52px
    box-shadow 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px rgba(0,0,0,.14), 0 1px 10px rgba(0,0,0,.12)

form
    flex 1

.search-input
    width 100%
    outline none
    font-size 16px
    height 50px

.search-btn
    color #959595

.search-loading
    margin-top 30%
    display flex
    justify-content center

</style>
