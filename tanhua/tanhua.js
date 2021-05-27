var body = {
  "status" : "200",
  "msg" : "返回成功",
  "data" : {
    "mobile" : "18866889999",
    "status" : 1,
    "is_vip" : 1,
    "member_name" : "怪我咯",
    "head_pic" : "http://1008610010.laikanshu.top/2021/01/26/sOLQKA.jpg",
    "parent_id" : 22,
    "user_viptime" : "2088-06-06"
  }
};

$done({body:JSON.stringify(body)});
