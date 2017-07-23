<template>
    <div :class="['blog-list', className]">
        <div v-for="(item, index) in blogList" :key="index" class="blog-item" @click="openDetail(item.id)">
            <div class="title">{{item.title}}</div>
            <p class="abstract">{{item.abstract}}</p>
            <div class="date">发布时间：{{item.date}}</div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'blogList',
    props: {
        blogList: {
            type: Array,
            default: [],
            required: true
        },
        className: {
            type: String,
            default: '',
            required: false
        }
    },
    data () {
        return {};
    },
    methods: {
        // 查看详情
        openDetail (blogId) {
            this.$router.push('/detail/' + blogId);
        }
    }
}

</script>

<style lang="stylus" scoped>
a
    text-decoration none

.blog-list
    padding 0 15px
    text-align left
    
    &.compact
        .blog-item
            padding 10px 0 15px 0
            .title
                font-weight normal
                font-size 18px
            .abstract
                -webkit-line-clamp 2

    .blog-item
        display block
        padding 10px 0 30px 0
        border-bottom 1px solid #eee
        
        .title
            font-weight 700
            font-size 21px
            line-height 30px
            margin 30px 0 15px 0
        .abstract
            font-size 14px
            color #9f9f9f
            margin-bottom 10px
            display -webkit-box
            overflow hidden
            text-overflow ellipsis
            -webkit-box-orient vertical
            -webkit-line-clamp 5
        .date
            color #808080
</style>


