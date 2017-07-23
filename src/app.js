/**
 * @file entry
 * @author maoliangliang(maoliangliang@baidu.com)
 */

import Vue from 'vue';
import Vuetify from 'vuetify';
import {createRouter} from './router';
import {createStore} from './store';
import App from './App.vue';
import Icon from 'vue-awesome/components/Icon.vue';

Vue.use(Vuetify);
Vue.component('icon', Icon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
export function createApp() {
    let router = createRouter();
    let store = createStore();
    let app = new Vue({
        router,
        store,
        ...App
    });
    return {app, router, store};
}
