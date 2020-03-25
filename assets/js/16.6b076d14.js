(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{266:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"第三方支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三方支持"}},[t._v("#")]),t._v(" 第三方支持")]),t._v(" "),s("p",[t._v("所有配置默认在 "),s("code",[t._v("source/_data/yun.yml")]),t._v(" 文件下进行。")]),t._v(" "),s("h2",{attrs:{id:"评论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#评论"}},[t._v("#")]),t._v(" 评论")]),t._v(" "),s("h3",{attrs:{id:"github-issue-与-gitalk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-issue-与-gitalk"}},[t._v("#")]),t._v(" GitHub Issue 与 Gitalk")]),t._v(" "),s("p",[t._v("最终我还是决定移除 "),s("a",{attrs:{href:"https://github.com/gitalk/gitalk",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitalk"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("首先肯定与感谢作者的开源精神与贡献，此前我一直开启 "),s("code",[t._v("Gitalk")]),t._v(" 作为默认评论。（从弃坑的 Gitment 转来。）\n只是后来因为 GitHub API 的安全策略改变，每次进入文章都会调用 Gitalk 而收到了一大堆的安全警告邮件。\n于是我临时将其关闭，当然现在已经修复。但也因此觉得，Gitalk 对于我的小站点来说未必有开启的必要。（"),s("s",[t._v("没什么人是一个要素")]),t._v("）")]),t._v(" "),s("p",[t._v("首先，Gitalk 提供的功能其实只要多个链接跳转到 GitHub Issue 页面即可，而且相对来说直接在 GitHub Issue 页面使用。拥有更好的显示和编辑体验。\n其次。我希望我的主题能够成为一个轻量迅速的主题，Gitalk 需要加载额外的 JS 与 CSS，一定程度会影响网页加载速度，并且本身也会有 API 请求数量限制。\n至于直接在文章末尾显示评论，我打算使用 Valine 进行补充，期望便捷的朋友，自身也可能更希望使用 Valine 无需登陆的评论。\n而想要收到回复提醒、及不介意使用自己 GitHub 账号参与讨论，自然也不会过于介意多跳转一个页面。")]),t._v(" "),s("ul",[s("li",[t._v("因为 Gitalk 自身定位问题，本身就可能存在些许安全隐患，以及开发不是十分活跃，也堆积了不少 ISSUE。")]),t._v(" "),s("li",[t._v("Gitalk 通过 label 来搜索，Issues 里自动创建来一堆 label，本强迫症有点难受。")]),t._v(" "),s("li",[t._v("当自己访问不存在的链接时，也会自动初始化一些无用的 Issue。")]),t._v(" "),s("li",[t._v("用户需要先授权第三方 OAuth。")])]),t._v(" "),s("p",[t._v("综上，本主题移除 Gitalk 评论。\n并内置实现跳转相关 Issue 的链接按钮与如何使用 GitHub Issue 进行评论的说明。\n可自行配置开启或关闭。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("filters")]),t._v(": 为 GitHub Issue 搜索规则，可参见 "),s("a",{attrs:{href:"https://help.github.com/en/github/searching-for-information-on-github/searching-issues-and-pull-requests",target:"_blank",rel:"noopener noreferrer"}},[t._v("searching-issues-and-pull-requests"),s("OutboundLink")],1),t._v("。")])]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github_issues")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" YunYouJun\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yunyoujun.github.io\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("filters")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" is"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("issue\n")])])]),s("p",[t._v("在项目 "),s("code",[t._v("Settings -> Options -> Features -> Issues -> Set up templates")]),t._v(" 中为 GitHub Issues 设置 Comment 模版，第一个创建评论的人可以根据这个模版创建 Issue。")]),t._v(" "),s("p",[t._v("也可以参考我的 "),s("a",{attrs:{href:"https://github.com/YunYouJun/yunyoujun.github.io/blob/hexo/.github/ISSUE_TEMPLATE/comment.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("comment.md"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("blockquote",[s("p",[t._v("如果您实在觉得 Gitalk 有必要使用，可以在 Issue 里提出有力的理由来说服我或自行添加。")])]),t._v(" "),s("h3",{attrs:{id:"valine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#valine"}},[t._v("#")]),t._v(" Valine")]),t._v(" "),s("p",[t._v("参见 "),s("a",{attrs:{href:"https://valine.js.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Valine"),s("OutboundLink")],1),t._v(" 官方文档进行配置。语言默认跟随 Hexo 的语言设置。")]),t._v(" "),s("p",[t._v("即 Hexo 根目录下的 "),s("code",[t._v("_config.yml")]),t._v("。（注意与主题的 "),s("code",[t._v("_config.yml")]),t._v(" 相区分）")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("language")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("CN\n")])])]),s("p",[t._v("实际上，你只需要参考下方页面获取配置所需的 appId 和 appKey 即可。（不需要安装，主题默认使用 CDN。模版也已经内置。）")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://valine.js.org/quickstart.html#%E8%8E%B7%E5%8F%96APP-ID-%E5%92%8C-APP-Key",target:"_blank",rel:"noopener noreferrer"}},[t._v("快速开始 - 获取 APP ID 和 APP Key"),s("OutboundLink")],1)])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("visitor")]),t._v(": 文章阅读量统计（请最后不要与 "),s("a",{attrs:{href:"#busuanzi"}},[t._v("不蒜子")]),t._v(" 同时启用）")])]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("valine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("appId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# your leancloud application appid")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("appKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# your leancloud application appkey")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serverURLs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("notify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false ")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mail notifier, See: https://github.com/xCss/Valine/wiki")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("verify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false ")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Verification code")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("placeholder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Just go go "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# comment box placeholder")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("avatar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gravatar style")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("meta")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("mail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("link "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# custom comment header")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pageSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10 ")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pagination size")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("visitor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),s("p",[t._v("Valine 的扩展和增强功能可以参考 "),s("a",{attrs:{href:"https://github.com/DesertsP/Valine-Admin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Valine-Admin"),s("OutboundLink")],1),t._v("，可以对具体的评论进行邮件提醒。")]),t._v(" "),s("h2",{attrs:{id:"搜索"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搜索"}},[t._v("#")]),t._v(" 搜索")]),t._v(" "),s("h3",{attrs:{id:"引擎搜索"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引擎搜索"}},[t._v("#")]),t._v(" 引擎搜索")]),t._v(" "),s("p",[t._v("跳转搜索引擎搜索你的网站内容")]),t._v(" "),s("p",[t._v("可通过 "),s("code",[t._v("site:yunyoujun.cn 想要搜索的内容")]),t._v(" 进行搜索")]),t._v(" "),s("p",[t._v("🌰："),s("a",{attrs:{href:"https://www.google.com/search?q=site:yunyoujun.cn%20%E4%BA%91%E6%B8%B8%E5%90%9B",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.google.com/search?q=site:yunyoujun.cn 云游君"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[s("code",[t._v("enable")]),t._v(": 开启搜索引擎（因为另外两种搜索都需要额外配置，所以默认开启引擎搜索）")]),t._v(" "),s("li",[s("code",[t._v("href")]),t._v(": 搜索引擎前缀")]),t._v(" "),s("li",[s("code",[t._v("domain")]),t._v(": 你网站的域名")])]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("engine_search")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.google.com/search?q=site:"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("domain")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yunyoujun.cn\n")])])]),s("h3",{attrs:{id:"本地搜索"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地搜索"}},[t._v("#")]),t._v(" 本地搜索")]),t._v(" "),s("p",[t._v("您需要先安装 "),s("a",{attrs:{href:"https://github.com/wzpan/hexo-generator-search",target:"_blank",rel:"noopener noreferrer"}},[t._v("hexo-generator-search"),s("OutboundLink")],1),t._v("，并参考配置文档。")]),t._v(" "),s("p",[t._v("本主题使用原生 JavaScript 实现，无 jQuery 依赖。")]),t._v(" "),s("blockquote",[s("p",[t._v("格式只支持 XML")])]),t._v(" "),s("p",[t._v("启用它之前，记得先关闭默认的引擎搜索。")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# search")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https://github.com/wzpan/hexo-generator-search")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("local_search")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /js/search/local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("search.js\n")])])]),s("h3",{attrs:{id:"algolia"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#algolia"}},[t._v("#")]),t._v(" Algolia")]),t._v(" "),s("p",[t._v("您需要先安装 "),s("a",{attrs:{href:"https://github.com/oncletom/hexo-algolia",target:"_blank",rel:"noopener noreferrer"}},[t._v("hexo-algolia"),s("OutboundLink")],1),t._v(" 或 "),s("a",{attrs:{href:"https://github.com/LouisBarranqueiro/hexo-algoliasearch",target:"_blank",rel:"noopener noreferrer"}},[t._v("hexo-algoliasearch"),s("OutboundLink")],1),t._v("，并根据它们的说明文档进行相应的配置。")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("algolia_search")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /js/search/algolia"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("search.js\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hits")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("per_page")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10 ")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# the number of search results per page")]),t._v("\n")])])]),s("h2",{attrs:{id:"分析统计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分析统计"}},[t._v("#")]),t._v(" 分析统计")]),t._v(" "),s("h3",{attrs:{id:"谷歌分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#谷歌分析"}},[t._v("#")]),t._v(" 谷歌分析")]),t._v(" "),s("p",[t._v("前往"),s("a",{attrs:{href:"https://analytics.google.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("谷歌分析"),s("OutboundLink")],1),t._v(" 获取您的 ID。")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("google_analytics")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" UA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("XXXXXXXXX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("X\n")])])]),s("h3",{attrs:{id:"busuanzi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#busuanzi"}},[t._v("#")]),t._v(" busuanzi")]),t._v(" "),s("p",[t._v("不蒜子是一款轻量极简的网站计数器。")]),t._v(" "),s("p",[t._v("前往"),s("a",{attrs:{href:"http://busuanzi.ibruce.info/",target:"_blank",rel:"noopener noreferrer"}},[t._v("不蒜子"),s("OutboundLink")],1),t._v(" 查看相关信息。")]),t._v(" "),s("p",[t._v("使用说明："),s("a",{attrs:{href:"http://ibruce.info/2015/04/04/busuanzi",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://ibruce.info/2015/04/04/busuanzi"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("请最后不要与 "),s("a",{attrs:{href:"#valine"}},[t._v("Valine")]),t._v(" 的 "),s("code",[t._v("visitor")]),t._v(" 同时启用。")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("site_uv")]),t._v(": 是否显示站点用户访问量 Unique Visitor（_icon 为对应图标，以下同理）")]),t._v(" "),s("li",[s("code",[t._v("site_pv")]),t._v(": 是否显示站点页面访问量 Page View")]),t._v(" "),s("li",[s("code",[t._v("page_pv")]),t._v(": 是否显示文章页面访问量 Page View")])]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("busuanzi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("site_uv")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("site_uv_icon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" icon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("line\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("site_pv")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("site_pv_icon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" icon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("eye"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("line\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("page_pv")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("page_pv_icon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" icon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("eye"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("line\n")])])]),s("h2",{attrs:{id:"广告"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#广告"}},[t._v("#")]),t._v(" 广告")]),t._v(" "),s("h3",{attrs:{id:"谷歌广告"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#谷歌广告"}},[t._v("#")]),t._v(" 谷歌广告")]),t._v(" "),s("p",[t._v("前往"),s("a",{attrs:{href:"https://www.google.com/adsense",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Adsense"),s("OutboundLink")],1),t._v(" 获取您的 client id。")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("google_adsense")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ca"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2245427233262012")]),t._v("\n")])])]),s("h2",{attrs:{id:"播放器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#播放器"}},[t._v("#")]),t._v(" 播放器")]),t._v(" "),s("h3",{attrs:{id:"hexo-tag-aplayer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hexo-tag-aplayer"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"(https://github.com/MoePlayer/hexo-tag-aplayer)"}},[t._v("hexo-tag-aplayer")])]),t._v(" "),s("p",[t._v("自己去看"),s("a",{attrs:{href:"https://github.com/MoePlayer/hexo-tag-aplayer/blob/master/docs/README-zh_cn.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),s("OutboundLink")],1),t._v("就好了。")]),t._v(" "),s("p",[t._v("推荐的配置（在 Hexo 的根目录下的 "),s("code",[t._v("_config.yml")]),t._v(" 中）：")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("aplayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cdn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//cdn.jsdelivr.net/npm/aplayer@latest/dist/APlayer.min.js\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("style_cdn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//cdn.jsdelivr.net/npm/aplayer@latest/dist/APlayer.min.css\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("meting")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("meting_cdn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//cdn.jsdelivr.net/npm/meting@1/dist/Meting.min.js\n")])])]),s("p",[t._v("插入某首网易云音乐的歌")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[t._v('{% meting "497572729" "netease" "song" "theme:#C20C0C"%}\n')])])]),s("p",[t._v("由于 "),s("code",[t._v("hexo-tag-aplayer")]),t._v(" 太香了，我决定移除原先的媒体包裹脚本。实在有需要的同学，可以自行外挂添加。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Transform embedded video to support responsive layout.\n * @see https://ultimatecourses.com/blog/fluid-and-responsive-youtube-and-vimeo-videos-with-fluidvids-js\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("embeddedVideoTransformer")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" iframes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iframe"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SUPPORTED_PLAYERS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"www.youtube.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"player.vimeo.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"music.163.com"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" iframes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" iframe "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" iframes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iframe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("search")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SUPPORTED_PLAYERS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"|"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" videoRatio "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iframe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" iframe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      iframe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100%"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" wrap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      wrap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("className "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fluid-vids"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      wrap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100%"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      wrap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("minHeight "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"90px"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      wrap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" iframe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      wrap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"relative"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" iframeParent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" iframe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      iframeParent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertBefore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" iframe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      wrap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iframe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"katex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#katex"}},[t._v("#")]),t._v(" KaTeX")]),t._v(" "),s("p",[t._v("在文章中显示一些简单的数学公式，使用 "),s("a",{attrs:{href:"katex.or"}},[t._v("KaTeX")]),t._v(" 实现。具体方法请参见"),s("a",{attrs:{href:"https://katex.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("copy_tex")]),t._v(": 复制 katex 文本，默认开启")])]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("katex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("copy_tex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),s("p",[t._v("只有在使用了 "),s("code",[t._v("katex")]),t._v(" 的文章或页面才会加载 KaTeX 的库，所以你需要在使用 KaTeX 的文章或头部进行设置。")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hr punctuation"}},[t._v("---")]),t._v("\ntitle: xxx\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[t._v("katex: true\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])])]),s("p",[t._v("你可以使用如下方式包裹公式。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("注意，在 Markdown 文件中直接书写时，你需要多一个 "),s("code",[t._v("\\")]),t._v(" 来转译 "),s("code",[t._v("(")]),t._v(" 或 "),s("code",[t._v("[")]),t._v("。")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("\\\\[ E = mc^2 \\\\]")]),t._v(" 而不是 "),s("code",[t._v("\\[ E = mc^2 \\]")]),t._v("。")])]),t._v(" "),s("p",[t._v("如下包裹，公式将被居中展示。")]),t._v(" "),s("div",{staticClass:"language-latex extra-class"},[s("pre",{pre:!0,attrs:{class:"language-latex"}},[s("code",[s("span",{pre:!0,attrs:{class:"token equation string"}},[t._v("$$ E = mc^2 $$")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token equation string"}},[t._v("\\[ E = mc^2 \\]")]),t._v("\n")])])]),s("p",[t._v("如下包裹，公式将以行内形式展示。")]),t._v(" "),s("div",{staticClass:"language-latex extra-class"},[s("pre",{pre:!0,attrs:{class:"language-latex"}},[s("code",[s("span",{pre:!0,attrs:{class:"token equation string"}},[t._v("\\( E = mc^2 \\)")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("你可以访问 "),s("a",{attrs:{href:"https://www.yunyoujun.cn/yun/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yun Test"),s("OutboundLink")],1),t._v(" 来查看实际效果。\n你可能需要一点时间来等待 "),s("code",[t._v("KaTeX")]),t._v(" 库的加载，或刷新重试。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);