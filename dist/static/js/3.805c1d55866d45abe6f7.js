webpackJsonp([3],{447:function(e,t,a){function n(e){a(466)}var i=a(44)(a(456),a(472),n,"data-v-2561e4e1",null);e.exports=i.exports},456:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(116),i=a.n(n),o=a(115),r=a.n(o),p=a(59),A=a.n(p),l=a(60);t.default={name:"detail",data:function(){return{}},computed:A()({},a.i(l.a)("blogs",["blogDetail"])),methods:A()({},a.i(l.b)("appShell/appHeader",["setAppHeader"]),a.i(l.b)("blogs",["getBlogDetail"])),asyncData:function(e){var t=this,a=e.store,n=e.route;return r()(i.a.mark(function e(){var o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.params.id,e.next=3,a.dispatch("blogs/getBlogDetail",{blogId:o});case 3:case"end":return e.stop()}},e,t)}))()},mounted:function(){this.setAppHeader({show:!0,showMenu:!1,title:this.blogDetail.title,showBack:!0,showLogo:!0,actions:[{icon:"search",route:"/search"}]})}}},461:function(e,t,a){t=e.exports=a(445)(!0),t.push([e.i,".detail-wrapper[data-v-2561e4e1]{padding:20px;min-height:200px;text-align:left}.detail-wrapper h3[data-v-2561e4e1]{font-size:26px;line-height:36px;font-weight:700;marigin-bottom:20px}.detail-wrapper .title-info[data-v-2561e4e1]{margin-bottom:20px;font-size:14px;color:gray}.detail-wrapper .title-info span[data-v-2561e4e1]{margin-right:10px}.detail-wrapper .content[data-v-2561e4e1]{line-height:22px;font-size:14px;word-wrap:break-word}.detail-wrapper .content p[data-v-2561e4e1]{margin-top:10px;text-indent:2em}.detail-wrapper .content ul[data-v-2561e4e1]{list-style:none;padding:0;margin:0 0 10px}.detail-wrapper .content h6[data-v-2561e4e1]{font-weight:blod;font-size:16px}.detail-wrapper .content img[data-v-2561e4e1]{width:100%;height:100%}","",{version:3,sources:["/Users/baidu/Downloads/Demo/vue/lavas/my-blog/src/pages/Detail.vue"],names:[],mappings:"AACA,iCACE,aAAc,AACd,iBAAkB,AAClB,eAAiB,CAClB,AACD,oCACE,eAAgB,AAChB,iBAAkB,AAClB,gBAAiB,AACjB,mBAAqB,CACtB,AACD,6CACE,mBAAoB,AACpB,eAAgB,AAChB,UAAe,CAChB,AACD,kDACE,iBAAmB,CACpB,AACD,0CACE,iBAAkB,AAClB,eAAgB,AAChB,oBAAsB,CACvB,AACD,4CACE,gBAAiB,AACjB,eAAiB,CAClB,AACD,6CACE,gBAAiB,AACjB,UAAW,AACX,eAAmB,CACpB,AACD,6CACE,iBAAkB,AAClB,cAAgB,CACjB,AACD,8CACE,WAAY,AACZ,WAAa,CACd",file:"Detail.vue",sourcesContent:["\n.detail-wrapper[data-v-2561e4e1] {\n  padding: 20px;\n  min-height: 200px;\n  text-align: left;\n}\n.detail-wrapper h3[data-v-2561e4e1] {\n  font-size: 26px;\n  line-height: 36px;\n  font-weight: 700;\n  marigin-bottom: 20px;\n}\n.detail-wrapper .title-info[data-v-2561e4e1] {\n  margin-bottom: 20px;\n  font-size: 14px;\n  color: #808080;\n}\n.detail-wrapper .title-info span[data-v-2561e4e1] {\n  margin-right: 10px;\n}\n.detail-wrapper .content[data-v-2561e4e1] {\n  line-height: 22px;\n  font-size: 14px;\n  word-wrap: break-word;\n}\n.detail-wrapper .content p[data-v-2561e4e1] {\n  margin-top: 10px;\n  text-indent: 2em;\n}\n.detail-wrapper .content ul[data-v-2561e4e1] {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 10px 0;\n}\n.detail-wrapper .content h6[data-v-2561e4e1] {\n  font-weight: blod;\n  font-size: 16px;\n}\n.detail-wrapper .content img[data-v-2561e4e1] {\n  width: 100%;\n  height: 100%;\n}"],sourceRoot:""}])},466:function(e,t,a){var n=a(461);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(446)("afaa0d38",n,!0)},472:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"detail-wrapper"},[a("h3",[e._v(e._s(e.blogDetail.title))]),e._v(" "),a("div",{staticClass:"title-info"},[a("span",[e._v(e._s(e.blogDetail.author))]),e._v(" "),a("span",[e._v(e._s(e.blogDetail.date))])]),e._v(" "),a("div",{staticClass:"content"},e._l(e.blogDetail.content,function(t,n){return a("div",{key:n,staticClass:"news-item"},["text"===t.type?a("p",[e._v(e._s(t.data))]):e._e(),e._v(" "),"h6"===t.type?a("h6",[e._v(e._s(t.data))]):e._e(),e._v(" "),"ul"===t.type?a("ul",e._l(t.data,function(t,n){return a("li",{key:n},[e._v(e._s(t))])})):e._e(),e._v(" "),"image"===t.type?a("img",{attrs:{src:t.data.big.url}}):e._e()])}))])},staticRenderFns:[]}}});
//# sourceMappingURL=3.805c1d55866d45abe6f7.js.map