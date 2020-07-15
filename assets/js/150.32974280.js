(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{524:function(s,a,n){"use strict";n.r(a);var t=n(16),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"核心与核心模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#核心与核心模块"}},[s._v("#")]),s._v(" 核心与核心模块")]),s._v(" "),n("p",[s._v("整个开机流程讲完，在整个开机过程中，是否能够成功的驱动我们主机的硬件设备，是核心的工作，而核心一般都是压缩文件，因此需要先解压后才能加载主存储器中")]),s._v(" "),n("p",[s._v("目前的核心都是具有可读取模块化驱动程序的功能，即模块化（modules），该模块可能由硬件开发厂商提供，也有可能核心本来就支持，较新的硬件，通常都需要硬件开发商提供驱动程序的模块")]),s._v(" "),n("p",[s._v("核心与核心模块位置：")]),s._v(" "),n("ul",[n("li",[s._v("核心："),n("code",[s._v("/boot/vmlinuz")]),s._v(" 或 "),n("code",[s._v("/boot/vminuz-version")])]),s._v(" "),n("li",[s._v("核心解压缩需 RAM disk："),n("code",[s._v("/boot/initramfs(/boot/initramfs-version)")])]),s._v(" "),n("li",[s._v("核心模块："),n("code",[s._v("/lib/modules/version/kernel")]),s._v(" 或 "),n("code",[s._v("/lib/modules/$(uname-r)")]),s._v("/kernel")]),s._v(" "),n("li",[s._v("核心原始码："),n("code",[s._v("/usr/src/linux")]),s._v(" 或 "),n("code",[s._v("/usr/src/kernels/")]),s._v(" (默认不安装，安装才会有)")])]),s._v(" "),n("p",[s._v("如果该核心被顺利加载到系统中了，那么就会有如下信息记录下来")]),s._v(" "),n("ul",[n("li",[s._v("核心版本："),n("code",[s._v("/proc/version")])]),s._v(" "),n("li",[s._v("系统核心功能："),n("code",[s._v("/proc/sys/kernel")])])]),s._v(" "),n("p",[s._v("问题来了：如果有个新的硬件，我的操作系统不支持怎么办？")]),s._v(" "),n("ul",[n("li",[s._v("重新编译核心，并加入最新的硬件驱动程序原始码")]),s._v(" "),n("li",[s._v("将该硬件的驱动程序编译成为模块，在开机时加载该模块")])]),s._v(" "),n("p",[s._v("关于怎么编译可以参考后续的第 21 章。")]),s._v(" "),n("h2",{attrs:{id:"核心模块与相依性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#核心模块与相依性"}},[s._v("#")]),s._v(" 核心模块与相依性")]),s._v(" "),n("p",[s._v("基本上核心模块在 "),n("code",[s._v("/lib/modules/$(uname -r)/kernel")]),s._v(" 中，主要分成几个目录")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("arch：与硬件平台有关项目，例如 CPU 的等级等\ncrypto：核心所支持的加密技术，例如 md5 或则是 des 等\ndrivers：一些硬件的驱动程序，例如显卡、网卡、PCI 相关硬件\nfs：核心所支持的 filesystems，例如 vfat、reiserfs、nfs 等\nlib：一些函数库\nnet：与网络有关的各项协议数据，还有防火墙模块（net、ipv4、netfilter） 等\nsound：与音效有关\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("有一个文件记录了核心支持的模块的各项相依性："),n("code",[s._v("/lib/modules/$(uname -r)/modules.dep")]),s._v(", 可以使用 depmod 指令来管理")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("depmod "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-Ane"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n选项与参数：\n\t-A：不加任何参数时，depmod 会主动分析目前核心的模块，并且重新写入该文件中。若加入 -A 参数时，则会去搜索比 modules.dep 内还要新的模块，如果找到新模块，才会更新\n\t-n：不写入 modules.dep ,而是将结果输出到屏幕上\n\t-e：显示出目前已加载的不可执行的模块名称\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 范例：若我做好一个网卡驱动程序，文件名为 a.ko  ，如何更新核心想依性？")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" a.ko /lib/modules/"),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -r"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("/kernel/drivers/net\ndepmod\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("核心模块扩展名一定是 "),n("code",[s._v(".ko")]),s._v(" 结尾，当使用 depmod 后，该程序会在 "),n("code",[s._v("/lib/modules/$(uname -r)/kernel/")]),s._v(" 目录内，根据相关目录的定义将全部的模块拿来分析，最终才会将分析的结果写入 modules.dep 文件中")]),s._v(" "),n("p",[s._v("该文件很重要，会影响到本章后续会介绍的 modprobe 指令的应用")]),s._v(" "),n("h2",{attrs:{id:"核心模块的观察"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#核心模块的观察"}},[s._v("#")]),s._v(" 核心模块的观察")]),s._v(" "),n("p",[s._v("可以通过  lsmod 知道目前核心加载了多少模块")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# lsmod ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 模块名\t\t\t\t\t\t\t\t\t大小\t\t模块是否被其他模块所使用")]),s._v("\nModule                  Size  Used by\nxt_CHECKSUM            "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12549")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" \nipt_MASQUERADE         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12678")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" \nnf_nat_masquerade_ipv4    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("13430")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" ipt_MASQUERADE\ntun                    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("32026")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" \nbridge                "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("151336")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" \nstp                    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12976")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" bridge\nllc                    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("14552")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" stp,bridge\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\ndrm\t\t\t\t\t\t\t\t\t\t "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("311588")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" qx1,ttm,drm_kms_helper\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("模块是有相依性的，比如上面 nf_nat_masquerade_ipv4 先加载，ipt_MASQUERADE 模块才能够进一步加载到系统中，这两者是有相依性的")]),s._v(" "),n("p",[s._v("想要了解某个块，可以使用 modinfo")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("modinfo "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-adln"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("module_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("filename"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n选项与参数：\n\t-a：仅列出作者名称\n\t-d：仅列出该 modules 的说明（description）\n\t-l：仅列出授权 license\n\t-n：仅列出该模块的详细路径\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 范例：列出 drm 模块的相关信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# modinfo drm")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 该模块的来源")]),s._v("\nfilename:       /lib/modules/3.10.0-1062.el7.x86_64/kernel/drivers/gpu/drm/drm.ko.xz\nlicense:        GPL and additional rights\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 该模块的简介")]),s._v("\ndescription:    DRM shared core routines\nauthor:         Gareth Hughes, Leif Delgass, José Fonseca, Jon Smirl\nlicense:        GPL and additional rights\ndescription:    DRM bridge infrastructure\nauthor:         Ajay Kumar "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ajaykumar.rs@samsung.com"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nretpoline:      Y\nrhelversion:    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.7")]),s._v("\nsrcversion:     0B7C5A6948CEE2DF7C405B0\ndepends:        drm_panel_orientation_quirks\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nsig_hashalgo:   sha256\nparm:           edid_firmware:Do not probe monitor, use specified EDID blob from built-in data or /lib/firmware instead.  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nparm:           vblankoffdelay:Delay "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("until")]),s._v(" vblank irq auto-disable "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("msecs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(": never disable, "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(": disable immediately"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("int"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nparm:           timestamp_precision_usec:Max. error on timestamps "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("usecs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("int"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nparm:           edid_fixup:Minimum number of valid EDID header bytes "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("-8, default "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("int"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nparm:           debug:Enable debug output, where each bit enables a debug category.\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("p",[s._v("该指令处理可以查询在核心内的模块，还可以检查某个模块文件。")]),s._v(" "),n("h2",{attrs:{id:"核心模块的加载与移除"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#核心模块的加载与移除"}},[s._v("#")]),s._v(" 核心模块的加载与移除")]),s._v(" "),n("p",[s._v("如想手动加载模块？有很多方法，这里推荐最简单的方式，就是使用 modprobe 指令来加载模块，因为它会主动搜索 modules.dep 的内容，先克服了模块的相依性后，才决定需要加载的模块有哪些")]),s._v(" "),n("p",[s._v("而 insmod 则完全由使用者加载一个完整文件名的模块，并不会主动分析模块的相依性")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("insmod "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("/full/path/module_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("parameters"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 范例 1：尝试载入 cifs.ko 文件系统模块")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# insmod /lib/modules/$(uname -r)/kernel/fs/fat/fat.ko.xz")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# lsmod | grep fat")]),s._v("\nfat                    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("65950")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" \n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("like就被加载了，但是需要完整的路径")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("rmmod "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-fw"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" module_name\n\n-f：强制移除该模块，无论是否正在使用\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 范例 1：将刚刚加载的模块移除")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rmmod fat")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# lsmod | grep fat")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 就被移除掉了")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 范例 2：加载 vfat 这个文件系统模块")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# insmod /lib/modules/$(uname -r)/kernel/fs/fat/vfat.ko.xz")]),s._v("\ninsmod: ERROR: could not insert module /lib/modules/3.10.0-1062.el7.x86_64/kernel/fs/fat/vfat.ko.xz: Unknown symbol "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" module\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 无法加载")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("上面就由于有模块相依性，无法直接被加载，就可以使用 modprobe 来处理")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("modprobe "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-cfr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" module_name\n\n选项与参数：\n\t-c：列出目前系统所有的模块（更详细的代号对应表）\n\t-f：强制加载该模块\n\t-r：类似 rmmod\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 范例 1： 加载 vfat 模块")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# modprobe vfat")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# lsmod | grep vfat")]),s._v("\nvfat                   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("17461")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" \nfat                    "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("65950")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" vfat\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以看到，自己就帮我们解决了模块的相依性问题，而且只需要知道模块名")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"核心模块的额外参数设置：-etc-modprobe-d-conf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#核心模块的额外参数设置：-etc-modprobe-d-conf"}},[s._v("#")]),s._v(" 核心模块的额外参数设置："),n("code",[s._v("/etc/modprobe.d/*.conf")])]),s._v(" "),n("p",[s._v("如果有某些特殊的需求导致你必须要让核心模块加上某些参数时，这个时候可以回到上一章的最后一小节 "),n("strong",[s._v("开机过程会用到的主要配置文件")]),s._v(" 中去了解，重点就是要自己建议 "),n("code",[s._v(".conf")]),s._v(" 的文件，通过 options 来带入核心模块参数")])])}),[],!1,null,null,null);a.default=e.exports}}]);