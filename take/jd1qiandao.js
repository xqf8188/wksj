// ==UserScript==
// @ScriptName        酷我音乐 Vip Crack
// @Author            ddgksf2013
// @DownloadURL       https://apps.apple.com/cn/app/id588673713
// @TgChannel         https://t.me/ddgksf2021
// @WechatID          公众号墨鱼手记
// @UpdateTime        2022-08-07
// @Function          听无损+下无损+听VIP书+换VIP肤+数字专辑
// @Attention         下无损音乐技巧：选听无损，并等其缓存完
// @Version           V2.0
// @ScriptTime        若脚本失效可抓取对应时间的旧版本应用
// @Attention         如需引用请注明出处，谢谢合作！
// @ScriptURL         https://codeberg.org/ddgksf2013/Cuttlefish/raw/branch/master/Rewrite/UnlockVip/Kuwo.conf
// ==/UserScript==




hostname = *kuwo*,*lrts*

^https?:\/\/.*(kuwo|lrts).*(music\.pay\?ne|\/a\.p|v\d\/api\/(user\/in|pay\/vi)|\w{3}\/v\d\/user\/vi|\w{3}\/spi\/ms|\w{3}\/v\d\/the|\w{3}\/enc\/use) url script-response-body https://raw.githubusercontent.com/xqf8188/wksj/main/take/jd1qiandao.js
^https?:\/\/.*(kuwo|lrts).*(music\.pay\?ui) url script-request-header https://raw.githubusercontent.com/xqf8188/wksj/main/take/jd1qiandao.js
