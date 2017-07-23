<template>
    <sidebar v-model="sidebarStatus">
        <!-- sidebar 内容部分 -->
        <div class="app-sidebar-content">
            <!-- 关闭按钮 -->
            <v-icon class="close-btn" @click.stop="closeAndGo('/')">highlight_off</v-icon>
            <!-- 用户信息 -->
            <div v-if="user" class="app-sidebar-user menu-list">
                <h4>博主信息</h4>
                <ul>
                    <li>
                        <v-icon>person</v-icon>{{user.name}}
                        <span class="split-line"></span>{{user.location}}
                    </li>
                    <li>
                        <v-icon>email</v-icon>{{user.email}}
                    </li>
                    <li>
                        <v-icon>code</v-icon>{{user.github}}
                    </li>
                </ul>
            </div>
            <!-- 博文分类区块 -->
            <div v-if="blocks.length" class="app-sidebar-blocks menu-list">
                <h4>博文分类</h4>
                <ul>
                    <li v-for="(item, index) in blocks" :key="index" @click.stop="closeAndGo(item.route)">
                        <v-icon>description</v-icon>{{item.type}}（{{item.num}}）
                    </li>
                </ul>
            </div>
        </div>
    </sidebar>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Sidebar from './Sidebar';

export default {
    components: {
        Sidebar
    },
    computed: {
        ...mapState('appShell/appSidebar', [
            'show',
            'user',
            'blocks'
        ]),
        sidebarStatus: {
            get() {
                return this.show;
            },
            set(val) {
                if (val) {
                    this.$emit('show-sidebar');
                }
                else {
                    this.$emit('hide-sidebar');
                }
            }
        }
    },
    methods: {
        ...mapActions('appShell/appSidebar', [
            'setArticleNum'
        ]),
        close() {
            this.sidebarStatus = false;
        },
        closeAndGo(route) {
            this.$router.push(route);
            this.close();
        }
    },
    created () {
        if (this.$route.name === 'home') {
            this.setArticleNum();
        }
    },
    watch: {
        '$route' (to, from) {
            if (to.name === 'home') {
                this.setArticleNum();
            }
        }
    }
};
</script>

<style lang="stylus" scoped>

ul,li
    padding 0
    margin 0
    list-style none
a
    text-decoration none
    color #333

.app-sidebar-content
    padding 30px 10px
    text-align left

    .close-btn
        position absolute
        right 20px
        top 12px

    .menu-list
        font-size 16px

        h4
            padding 10px 0
            font-size 18px
            border-bottom 1px solid $nomal-gray
            margin-bottom 0
        
        ul
            padding 15px 0

            .split-line
                display inline-block
                width 1px
                height 14px
                margin 0 10px
                vertical-align 1px
                background-color $nomal-gray

            >li
                margin 8px 0
                i
                    font-size 18px
                    margin-right 5px

</style>
