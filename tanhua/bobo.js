/*
作者@king
波波视频（lsp）
下载地址:
/3kQb6qo
[Qx]
[rewrite_local]
#本地脚本

#波波视频
http://api.wscdn.vip(.+) url script-response-body https://raw.githubusercontent.com/nameking77/Qx/main/bobo

[MITM]
hostname = api.wscdn.vip,

*/

const path1 = "/index/User/ucenter";
const path2 = "/index/Get/videoInfo";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj.data.isVip = "1",
obj.data.isVip_forever = "1"
}
if ($request.url.indexOf(path2) != -1){
obj.data.buyStatus = "1"
}
$done({body: JSON.stringify(obj)});
