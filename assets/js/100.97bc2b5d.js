(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{649:function(s,a,t){"use strict";t.r(a);var n=t(16),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"本章练习"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本章练习"}},[s._v("#")]),s._v(" 本章练习")]),s._v(" "),t("h2",{attrs:{id:"情景题-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#情景题-1"}},[s._v("#")]),s._v(" 情景题 1")]),s._v(" "),t("p",[s._v("情景模拟题：通过 grep 搜索特殊字符串，并配合数据流重导向来处理大量的文件搜索问题")]),s._v(" "),t("ul",[t("li",[s._v("目标：正确使用正则表示法")]),s._v(" "),t("li",[s._v("前提：需要了解数据流重导向，以及通过子指令 "),t("code",[s._v("${command}")]),s._v(" 来处理文件名的搜索")])]),s._v(" "),t("p",[s._v("搜索 * 号来处理下面的任务")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("利用正则表示法找出系统中含有某些特殊关键词的文件")]),s._v(" "),t("p",[s._v("找出 /etc 下含有星号的文件与内容，")]),s._v(" "),t("p",[s._v("解决方法必须搭配通配符，但是星号本身就是正则表示法中特殊字符")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 需要记得 2> /dev/null 表示的是，标准输出错误 不显示在屏幕上")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 由于该条命令只能搜索文件内容，而不能对目录进行搜索，遇到目录会报错")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study testpw"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\*'")]),s._v(" /etc/* "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(" /dev/null\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("上述指令只能寻找 /etc 层级下的文件，而不能让子目录下的文件也被搜索到")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用子命令找到 /etc/ 下包含子目录的所有文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\*'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" /etc/ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" f"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(" /dev/null\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以使用 -l 只列符合条件的文件名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -l "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\*'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" /etc/ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" f"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(" /dev/null\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("如果文件数量太多，如找的是全系统 ( / )")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study testpw"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\*'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" f "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(" /dev/null"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n-bash: /usr/bin/grep: 参数列表过长\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指令内容长度是有限制的，可以通过管线命令以及 xargs 来处理")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 先用 find 找出文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 用 xargs 将这些文件每次只给 10 个给 grep 作为参数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3. grep 开始搜索文件内容")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -type f "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(" /dev/null "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\*'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("从输出的结果看，数据量很大，只需要知道文件名的话，同样可以使用 grep -l 参数")])])]),s._v(" "),t("h2",{attrs:{id:"情景模拟-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#情景模拟-2"}},[s._v("#")]),s._v(" 情景模拟 2")]),s._v(" "),t("p",[s._v("使用年限命令配合正则表示法建立新指令与新变量。想要建立一个新的指令名为：myip，这个指令能将我系统的 IP 找出来显示。新变量名为 MYIP，该变量可以记录我的 IP")]),s._v(" "),t("p",[s._v("处理格式很简单，可以这样试试看：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("首先，使用 ifconfig、sed 与 awk 来取得我们的 IP")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里就是将 ip 前的文字和 ip 后的文字使用 sed 替换成空")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意这里的开头和结尾 .* 表示任意字符出现 0 次多次")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study testpw"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" enp0s3 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'inet '")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/^.*inet //g'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/ *netmask.*$//g'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".4.223\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("将此命令使用 alias 指定为 myip")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study testpw"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("myip")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"ifconfig enp0s3 | grep 'inet ' | sed 's/^.*inet //g' | sed 's/ *netmask.*$//g'\"")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("最终，通过变量设置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study testpw"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYIP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("myip"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study testpw"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MYIP}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".4.223\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("将别名永久生效，需要将 alias 与 MYIP 的设置写入你的 "),t("code",[s._v("~/.bashrc")]),s._v(" 文件中")])])]),s._v(" "),t("h2",{attrs:{id:"简答题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简答题"}},[s._v("#")]),s._v(" 简答题")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("在 /etc 下，含有 XYZ 三个字符的任何一个字符的文件就列出来")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -l "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("XYZ"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" /etc/* "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(" /dev/null\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("将 /etc/kdump.conf 内容取出后")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". 去除开头为 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 号的行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". 去除空白行\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(". 取出开头为英文字母的行\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(". 统计总行数\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mrcode@study ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^#'")]),s._v(" /etc/kdump.conf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^$'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])])]),s._v(" "),t("p",[s._v("中文维基百科 ASCII：https://zh.wikipedia.org/w/index.php?title=ASCII")])])}),[],!1,null,null,null);a.default=e.exports}}]);