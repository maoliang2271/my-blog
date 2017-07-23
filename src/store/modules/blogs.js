/**
 * @file app blogs store
 * @author maoliangliang(maoliangliang@baidu.com)
 */

import * as types from '../mutation-types';
import axios from 'axios';

export function createBlogslState() {

    let state = {

        // 每页的数量
        pageSize: 6,

        // 无限加载控件状态
        loadingStatus: false,

        // 文章列表
        blogList: [],

        // 文章详情
        blogDetail: {}
        
    };

    let actions = {

        // 设置文章列表
        async getBlogList({commit}, params) {
            try {
                let res = await axios('/api/getBlogList', {
                    method: 'get',
                    params: params
                });
                if (res.status === 200 && res.data.errorNo === 0) {
                    commit(types.GET_BLOG_LIST, res.data);
                }
            }
            catch (e) {}
        },

        // 获取文章详情
        async getBlogDetail({commit}, params) {
            try {
                let res = await axios('/api/getBlogDetail', {
                    method: 'get',
                    params: params
                });
                if (res.status === 200 && res.data.errorNo === 0) {
                    commit(types.GET_BLOG_DETAIL, res.data);
                }
            }
            catch (e) {}
        }
      
    };

    let mutations = {
        [types.GET_BLOG_LIST](state, data) {
            state.blogList = data.data;
            if (data.hasMore) {
                state.loadingStatus = 'loaded';
            } else {
                state.loadingStatus = 'complete';
            }
        },
        [types.GET_BLOG_DETAIL](state, data) {
            state.blogDetail = data.data[0];
        }
    };

    return {
        namespaced: true,
        actions,
        mutations,
        state
    };
}
