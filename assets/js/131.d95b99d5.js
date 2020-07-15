(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{564:function(s,t,n){"use strict";n.r(t);var a=n(16),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"工作管理（job-control）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#工作管理（job-control）"}},[s._v("#")]),s._v(" 工作管理（job control）")]),s._v(" "),n("p",[s._v("是在 bash 环境下的概念，当我们登录系统取得 bash shell 后，在单一终端机下同时进行多个工作的行为管理。")]),s._v(" "),n("h2",{attrs:{id:"什么是工作管理？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是工作管理？"}},[s._v("#")]),s._v(" 什么是工作管理？")]),s._v(" "),n("p",[s._v("进行工作管理的行为中，其实每个工作都是目前 bash 的子进程，彼此之间是有相关性的。我们"),n("strong",[s._v("无法以 job control 的方式由 tty1 的环境去管理 tty2 的 bash")])]),s._v(" "),n("p",[s._v("为什么会有工作管理？系统有多个 tty 使用，这样切换很麻烦，还有之前讲解的 "),n("code",[s._v("/etc/security/limits.conf(第 13 章)")]),s._v("可以设置同时登录的联机数量，假设只允许一个呢？")]),s._v(" "),n("p",[s._v("假设我们只有一个终端机接口，因此在可以出现提示字符让你操作的环境称为 "),n("strong",[s._v("前景 foreground")]),s._v("，其他工作可以放入 "),n("strong",[s._v("背景 background")]),s._v(" 去暂停或运行。要注意的是：放入背景的工作在运行时，不能与使用者互动。比如 vim 不能再背景里面执行（running）的，因为你没有输入数据它就不会运行。"),n("strong",[s._v("而且放入背景的工作是不可以使用 ctrl+c 来终止的")])]),s._v(" "),n("p",[s._v("进行 bash 的 job control 必须要注意的限制是：")]),s._v(" "),n("ul",[n("li",[s._v("这些工作所触发的进程必须来自于你的 shell 的子进程（只管理自己的 bash）")]),s._v(" "),n("li",[s._v("前景 foreground：你可以控制与下达指令的环境")]),s._v(" "),n("li",[s._v("背景：可以自动运行的工作，你无法使用 ctrl + c 终止它，可以使用 bg、fg 呼叫该工作")]),s._v(" "),n("li",[s._v("背景中"),n("strong",[s._v("执行")]),s._v("的进程不能等待 terminal/shell 的输入（input）")])]),s._v(" "),n("h2",{attrs:{id:"job-control-的管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#job-control-的管理"}},[s._v("#")]),s._v(" job control 的管理")]),s._v(" "),n("h3",{attrs:{id:"直接将指令丢到背景中-执行-的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#直接将指令丢到背景中-执行-的"}},[s._v("#")]),s._v(" 直接将指令丢到背景中 "),n("em",[s._v("执行")]),s._v(" 的 "),n("code",[s._v("&")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 & 将 /etc/ 整个备份为 /tmp/etc/tar.gz 工作丢到背景中执行")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 原因就是，压缩费时，不想一直就在当前界面看着他完成")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar -zpcf /tmp/etc.tar.gz /etc &")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("19763")]),s._v("\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# job number 与 PID")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar: Removing leading `/' from member names")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# PID 与 bash 的控制有关，后续出现的数据信息是 tar 执行的数据流")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 由于没有加上数据流重导向，所以会影响画面，不过不会影响前景的操作")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 那他什么时候完成呢？当你输入几个指令后，发现出现了这一行")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 那么久表示在背景中的工作已经完成了")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("+  Done                    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zpcf /tmp/etc.tar.gz /etc\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[n("code",[s._v("[1]+")]),s._v(" 表示这个工作已经完成（Done），后面是具体的指令串。如果有有信息出现，那么你的前景会出现干扰，只需要按下 enter 键就会出现提示字符，更下下指令")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar -zpcvf /tmp/etc.tar.gz /etc &")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("由于输出了信息，stdout 和 stderr 都会输出到屏幕上，这样就会影响前景终端，所以一般都利用数据流重导向，将输出数据传送至某个文件中，比如")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar -zpcvf /tmp/etc.tar.gz /etc  > /tmp/log.txt 2>&1 &")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16592")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"将-目前-的工作丢到背景中-暂停-：ctrl-z"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#将-目前-的工作丢到背景中-暂停-：ctrl-z"}},[s._v("#")]),s._v(" 将 "),n("em",[s._v("目前")]),s._v(" 的工作丢到背景中_暂停_：ctrl+z")]),s._v(" "),n("p",[s._v("考虑这个场景，我正在使用 vim，却发现某个文件的路径不记得了，需要到 bash 环境下进程搜索，此时不需要结束 vim，可以把它丢到背景中等待")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim ~/.bashrc ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 vim 环境下按 ctrl + z 组合键")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("+  Stopped                 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.bashrc\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# \t\t# 这就取得了前景")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# find / -print")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 会大量输出信息，我们把这个工作也丢到背景中执行")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("+  Stopped                 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -print\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[n("code",[s._v("[2]+")]),s._v(" 表示这个是加入到背景中的第二个工作，Stopped 是状态，预设情况下，使用 ctrl+z 丢到背景中的工作都是暂停状态")]),s._v(" "),n("h3",{attrs:{id:"观察目前的背景工作状态：jobs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#观察目前的背景工作状态：jobs"}},[s._v("#")]),s._v(" 观察目前的背景工作状态：jobs")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("jobs")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-lrs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n选项与参数：\n\t-l：除了列出 job number 与指令之外，同时列出 PID 的号码\n\t-r：仅列出正在背景 run 的工作\n\t-s：仅列出正在背景中暂停 stop 的工作\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 范例 1：观察目前的 bash 中，所有工作与队友的 PID")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# jobs -l")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("26476")]),s._v(" Stopped                 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.bashrc\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("+  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2207")]),s._v(" Stopped                 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -print\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("仔细看上面有减号和加号：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("+")]),s._v("：表示最近被放到背景的工作；如果只输入 fg 指令，那么 "),n("code",[s._v("[3]")]),s._v(" 会被拿到前景中来处理")]),s._v(" "),n("li",[n("code",[s._v("-")]),s._v("：表示最近最后第二个被放置到背景中的工作。如果超过最后第三个以后的工作，就不会有 "),n("code",[s._v("-、+")]),s._v(" 符号了")])]),s._v(" "),n("h3",{attrs:{id:"将背景工作拿到前景来处理：fg"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#将背景工作拿到前景来处理：fg"}},[s._v("#")]),s._v(" 将背景工作拿到前景来处理：fg")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("fg")]),s._v(" %jobnumber\n\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$jobnumber")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" jobnumber 是工作号码（数字），哪个 % 是可有可无的\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 范例 1：先以 jobs 管擦工作，再将工作取出")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# jobs -l")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("- "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("26476")]),s._v(" Stopped                 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.bashrc\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("+  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2207")]),s._v(" Stopped                 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -print\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取出 + 号的工作，注意会刷屏，马上按下 ctrl + z ，再次放入到背景中")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fg")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 直接取出 2 的工作，在放到背景中")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fg %2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.bashrc\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("+  Stopped                 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.bashrc\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# jobs -l")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("+ "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("26476")]),s._v(" Stopped                 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.bashrc\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("-  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2207")]),s._v(" Stopped                 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -print\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以看到， 2 的工作被标记为了 + 号，表示是最近放进去的")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h3",{attrs:{id:"让工作在背景下的状态变成运行中：bg"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#让工作在背景下的状态变成运行中：bg"}},[s._v("#")]),s._v(" 让工作在背景下的状态变成运行中：bg")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 范例 1： 执行 find / -perm /7000 > /tmp/text.txt，立刻丢到背景去暂停")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# find / -perm /7000 > /tmp/text.txt")]),s._v("\nfind: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/proc/29541/task/29541/fd/5'")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" No such "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory\nfind: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/proc/29541/task/29541/fdinfo/5'")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" No such "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory\nfind: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/proc/29541/fd/6'")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" No such "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory\nfind: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/proc/29541/fdinfo/6'")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" No such "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory\n^Z\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("+  Stopped                 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -perm /7000 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /tmp/text.txt\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 范例 2：让该工作在背景下进行，并且观察他")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# jobs ; bg %4; jobs")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("-  Stopped                 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.bashrc\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("   Stopped                 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -print\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("+  Stopped                 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -perm /7000 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /tmp/text.txt\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("+ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -perm /7000 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /tmp/text.txt "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("+  Stopped                 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.bashrc\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("   Stopped                 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -print\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("-  Running                 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -perm /7000 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /tmp/text.txt "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 第 4 个由 Stopped 变成了 Running 状态")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("h3",{attrs:{id:"管理背景中的工作：kill"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#管理背景中的工作：kill"}},[s._v("#")]),s._v(" 管理背景中的工作：kill")]),s._v(" "),n("p",[s._v("通过 fg 拿到前景来，可以通过 kill 将该工作直接移除")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -signal "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$jobnumber")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -l\n\n选项与参数：\n\t-l：L 的小写，列出目前 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" 能够使用的信号（signal）有哪些？\n\tsignal：给予后续工作什么指示，用 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("man")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" signal 可知：\n\t\t-1：重新读取一次参数的配置文件（类似 reload）\n\t\t-2：代表与由键盘输入 ctrl+c 同样的动作\n\t\t-9：立刻强制删除一个工作\n\t\t-15：已正常的进程方式终止一项工作。与  -9 是不一样的\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("范例 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("： 找出目前 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" 环境下的背景工作，并将该工作 强制删除\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# jobs")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("+  Stopped                 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.bashrc\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("   Stopped                 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -print\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("-  Exit "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("                  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -perm /7000 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /tmp/text.txt\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kill -9 %3; jobs")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("+  Stopped                 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.bashrc\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("   Killed                  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -print\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 过几秒再运行 jobs 会发现 killed 的不见了")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 范例 2：找出目前 bash 环境下的而背景工作，并将该工作 正常 终止")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kill -SIGTERM %2")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("+  Stopped                 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.bashrc\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# jobs")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("+  Stopped                 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.bashrc\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -SIGTERM 与 -15 同效果，可以用哪个 kill -l 来查阅")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在这个案例中，会发现 vim 的工作无法被结束，无法通过 kill 正常终止")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("使用 vim 时候，会产生一个 "),n("code",[s._v(".filename.swp")]),s._v(" 文件，使用 -15 这个 signal 时，vim 会尝试以正常的步骤来结束掉该 vi 的工作，使用 "),n("code",[s._v(".filename.swp")]),s._v(" 会主动的被移除，若是使用 -9，那么 swp 文件不会被移除调用")]),s._v(" "),n("p",[s._v("kill 需要了解 1、9、15 的 signal 的含义，可以用 man 7 signal 查询相关资料，还有一个 killall 也是同样的用法。")]),s._v(" "),n("p",[s._v("kill 后面接的数字，默认是 PID，要管理 bash 的工作控制，需要加上 %数字 的方式")]),s._v(" "),n("h2",{attrs:{id:"脱机管理问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#脱机管理问题"}},[s._v("#")]),s._v(" 脱机管理问题")]),s._v(" "),n("p",[n("strong",[s._v("注意")]),s._v("：前面工作管理中的「背景」是指在终端机模式下可以避免「ctrl+c」中断，可以理解为是这个 bash 的背景，并 "),n("strong",[s._v("不是放到系统的背景")]),s._v(" 中去。所以，工作管理的背景依旧与终端机有关")]),s._v(" "),n("p",[s._v("如果你是以远程方式连接到 Linux 主机，并且将工作以 & 的方式放到背景中去，在工作未结束时，你脱机了，该工作不会继续进行，而是会被中断掉")]),s._v(" "),n("p",[s._v("那么可以使用前一章学习的 at 指令，因为它是将工作放置到系统背景，还可以使用 nohup 指令来达到效果")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("指令与参数"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在终端机前景中工作")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("指令与参数"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在终端机背景中工作")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[s._v("nohup 后面的指令不支持 bash 内置指令！")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1. 编辑一个会随眠  500 秒的程序")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim sleep500.sh")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n/bin/sleep 500s\n/bin/echo "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"I have sleep 500 seconds."')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 丢到背景中执行")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod a+x sleep500.sh ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nohup ./sleep500.sh &")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("14915")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nohup: ignoring input and appending output to 'nohup.out'")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("你登出登录后，再次登录系统，使用 pstree （这里没有说是什么）去查询你的进程，会发现它还在执行，还输出了一个信息，nohup 与终端机无关了，因此整个信息的输出就会被导向 "),n("code",[s._v("~/nohup.out")])])])}),[],!1,null,null,null);t.default=e.exports}}]);