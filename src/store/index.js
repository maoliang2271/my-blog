/**
 * @file store index
 * @author maoliangliang(maoliangliang@baidu.com)
 */

import Vue from 'vue';
import Vuex from 'vuex';
import {createAppShellState} from './modules/app-shell';
import {createBlogslState} from './modules/blogs';

Vue.use(Vuex);


export function createStore() {
    return new Vuex.Store({
        modules: {
            appShell: createAppShellState(),
            blogs: createBlogslState()
        }
    });
}
