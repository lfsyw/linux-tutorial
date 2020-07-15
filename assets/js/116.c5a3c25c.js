(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{635:function(s,a,e){"use strict";e.r(a);var n=e(16),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"本章练习"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本章练习"}},[s._v("#")]),s._v(" 本章练习")]),s._v(" "),e("h2",{attrs:{id:"情景模拟题-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#情景模拟题-1"}},[s._v("#")]),s._v(" 情景模拟题 1")]),s._v(" "),e("p",[s._v("将本服务的账户分开管理，")]),s._v(" "),e("ul",[e("li",[s._v("分为单纯邮件使用者：将该账户加入名为 mail 的初始群组，且此账户不可使用 bash 等 shell 登陆系统。")]),s._v(" "),e("li",[s._v("可登陆系统账户：将该账户加入 youcan 的次要群组")])]),s._v(" "),e("p",[s._v("练习期望：")]),s._v(" "),e("ul",[e("li",[s._v("目标：了解 "),e("code",[s._v("/sib/nologin")]),s._v(" 的用途")]),s._v(" "),e("li",[s._v("前提：可自行观察使用者是否已经建立等问题")]),s._v(" "),e("li",[s._v("需求：需了解 useradd、groupadd 等指令的用法")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 检查两个群组是否存在，不存在则建立")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mail /etc/group\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" youcan /etc/group\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" youcan\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 创建邮件账户，可以准备脚本来处理")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" popuser.sh\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("username")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" pop1 pop2 pop3\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -g 初始群组； -s 指定 bash； -M 不要创建家目录")]),s._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -g mail -s /sbin/nologin -M "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$username")]),s._v("\n\t"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$username")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" --stdin "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$username")]),s._v("\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将密码设置为账户相同")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" popuser.sh\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3. 建立一般账户，同样适用脚本创建")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" loginuser.sh\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("username")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" pop1 pop2 pop3\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -g 初始群组； -s 指定 bash； -M 不要创建家目录")]),s._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -G youcan -s /bin/login "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$username")]),s._v("\n\t"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$username")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" --stdin "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$username")]),s._v("\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将密码设置为账户相同")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" loginuser.sh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br")])]),e("h2",{attrs:{id:"简答题部分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简答题部分"}},[s._v("#")]),s._v(" 简答题部分")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("root 的 UID 与 GID 是多少？基于这个理由，让 test 这个账户具有 root 权限，怎么做？")]),s._v(" "),e("p",[s._v("都为 0，可以直接修改 "),e("code",[s._v("/etc/passwd")]),s._v(" 中 test 账户的 UID 和 GID 字段变成 0")])]),s._v(" "),e("li",[e("p",[s._v("如何将一个账户暂时停掉？让该账户无法登录？")]),s._v(" "),e("p",[s._v("由于是暂时失效，不能使用 userdel 来删除，有以下几种方式")]),s._v(" "),e("ul",[e("li",[s._v("将 "),e("code",[s._v("/etc/passwd")]),s._v(" 的 shell 字段修改为 "),e("code",[s._v("/sbin/nologin")])]),s._v(" "),e("li",[s._v("将 "),e("code",[s._v("/ec/shadow")]),s._v(" 的密码字段，内容前增加一个 !，让密码失效")]),s._v(" "),e("li",[s._v("将 "),e("code",[s._v("/etc/shadow")]),s._v(" 第 8 字段关于账户失效日期，设置为小于目前的日期数字")])])]),s._v(" "),e("li",[e("p",[s._v("使用 useradd 时，新增账户里面的 UID、GID 还有其他相关的密码控制是哪几个文件配置的?")]),s._v(" "),e("p",[e("code",[s._v("/etc/login.defs")]),s._v(" "),e("code",[s._v("/etc/default/useradd")])])]),s._v(" "),e("li",[e("p",[s._v("在使用 useradd 时，预设情况中，他们家目录就含有一个名称为 www 的子目录，该怎么操作？")]),s._v(" "),e("p",[s._v("会以 "),e("code",[s._v("/etc/skel")]),s._v(" 作为参考目录，可以在该目录下创建一个  www 的目录")])]),s._v(" "),e("li",[e("p",[s._v("简单说明系统账户与一般账户的差别？")]),s._v(" "),e("p",[s._v("一般而言，为了让系统能够顺利以较小的权限运行，系统会有很多账户，例如 mail、bin、adm 等。为了确保这些账户能够在系统上面具有独一无二的的权限，一般来说 Linux 会保留一些 UID 给系统使用，在 CentOS 5.x 上，小于 500 以下的 UID 即是所谓的系统账户")])]),s._v(" "),e("li",[e("p",[s._v("简单说明，为何 CentOS 建立使用者时，会主动创建一个与账户同名的群组，而不是使用 "),e("code",[s._v("/etc/default/useradd")]),s._v(" 的设置？")]),s._v(" "),e("p",[s._v("不同的 distribution 对于使用者 group 的建立机制不同，主要机制分为两种：")]),s._v(" "),e("ul",[e("li",[s._v("public group schemes：给予一个公用的群组，一般来说是 users；以 SUSe server9 为代表")]),s._v(" "),e("li",[s._v("private group schemes：创建一个与账户同名的群组，以 CentOS 7.x 为例")])])]),s._v(" "),e("li",[e("p",[s._v("如何创建一个使用者 alex，所属群组为 alexgroup，预计使用 csh，他的全名为 “Alex Tsai”，还需要加入 users 群组中")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" alexgroup\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -g 初始组， -G 次要组，-m 建立家目录")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -c "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Alex Tsai"')]),s._v(" -g alexgroup -G "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("users")]),s._v(" -m alex\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 务必先建立群组，才能够建立账户")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("由于种种因素，导致你的用户家目录以后都需要放置到 "),e("code",[s._v("/account")]),s._v(" 目录下，该如何配置，让 useradd 时，默认的家目录指向 "),e("code",[s._v("/account")]),s._v("？")]),s._v(" "),e("p",[s._v("最简单的办法是编辑 "),e("code",[s._v("/etc/default/useradd")]),s._v("，将 "),e("code",[s._v("HOME=/home 改为 /account")])])]),s._v(" "),e("li",[e("p",[s._v("要让 dmtsai 使用者，加入 mrcode1、mrcode2、mrcode3 三个群组，且不影响 dmtsai 原本已经支持的次要群组时，需要怎么操作？")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -a 增加，-G 次要群组，合用就是增加次要群组")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -a -G mrcode1,mrcode2,mrcode3\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])])])])}),[],!1,null,null,null);a.default=t.exports}}]);