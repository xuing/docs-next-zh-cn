(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{684:function(t,a,s){"use strict";s.r(a);var n=s(59),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"移除-v-on-native-修饰符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移除-v-on-native-修饰符"}},[t._v("#")]),t._v(" 移除 "),s("code",[t._v("v-on.native")]),t._v(" 修饰符 "),s("MigrationBadges",{attrs:{badges:t.$frontmatter.badges}})],1),t._v(" "),s("h2",{attrs:{id:"概览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[t._v("#")]),t._v(" 概览")]),t._v(" "),s("p",[s("code",[t._v("v-on")]),t._v(" 的 "),s("code",[t._v(".native")]),t._v(" 修饰符已被移除。")]),t._v(" "),s("h2",{attrs:{id:"_2-x-语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-x-语法"}},[t._v("#")]),t._v(" 2.x 语法")]),t._v(" "),s("p",[t._v("默认情况下，传递给带有 "),s("code",[t._v("v-on")]),t._v(" 的组件的事件监听器只有通过 "),s("code",[t._v("this.$emit")]),t._v(" 才能触发。要将原生 DOM 监听器添加到子组件的根元素中，可以使用 "),s("code",[t._v(".native")]),t._v(" 修饰符：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("my-component")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("close")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("handleComponentEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("click.native")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("handleNativeClickEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"_3-x-语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-x-语法"}},[t._v("#")]),t._v(" 3.x 语法")]),t._v(" "),s("p",[s("code",[t._v("v-on")]),t._v(" 的 "),s("code",[t._v(".native")]),t._v(" 修饰符已被移除。同时，"),s("RouterLink",{attrs:{to:"/guide/migration/emits-option.html"}},[t._v("新增的 "),s("code",[t._v("emits")]),t._v(" 选项")]),t._v("允许子组件定义真正会被触发的事件。")],1),t._v(" "),s("p",[t._v("因此，对于子组件中"),s("em",[t._v("未")]),t._v("被定义为组件触发的所有事件监听器，Vue 现在将把它们作为原生事件监听器添加到子组件的根元素中 (除非在子组件的选项中设置了 "),s("code",[t._v("inheritAttrs: false")]),t._v(")。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("my-component")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("close")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("handleComponentEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("handleNativeClickEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[s("code",[t._v("MyComponent.vue")])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    emits"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'close'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"迁移策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#迁移策略"}},[t._v("#")]),t._v(" 迁移策略")]),t._v(" "),s("ul",[s("li",[t._v("删除 "),s("code",[t._v(".native")]),t._v(" 修饰符的所有实例。")]),t._v(" "),s("li",[t._v("确保所有组件都使用 "),s("code",[t._v("emits")]),t._v(" 选项记录其事件。")])]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/guide/migration/migration-build.html#兼容性配置"}},[t._v("迁移构建开关："),s("code",[t._v("COMPILER_V_ON_NATIVE")])])],1),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/vuejs/rfcs/blob/master/active-rfcs/0031-attr-fallthrough.md#v-on-listener-fallthrough",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关的 RFC"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/guide/migration/emits-option.html"}},[t._v("迁移指南 - 新增 Emits 选项")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/guide/migration/listeners-removed.html"}},[t._v("迁移指南 - 移除 "),s("code",[t._v("$listeners")])])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/guide/migration/render-function-api.html"}},[t._v("迁移指南 - 渲染函数 API 的更改")])],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);