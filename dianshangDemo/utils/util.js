const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
/*
{
    "code": 0,
    "data": [
        {
            "dateAdd": "2017-09-12 11:07:32",
            "icon": "",
            "id": 1872,
            "isUse": true,
            "key": "1",
            "level": 1,
            "name": "上装",
            "paixu": 0,
            "pid": 0,
            "type": "",
            "userId": 951
        },
        {
            "dateAdd": "2017-09-12 11:07:48",
            "icon": "",
            "id": 1873,
            "isUse": true,
            "key": "2",
            "level": 1,
            "name": "裤装",
            "paixu": 0,
            "pid": 0,
            "type": "",
            "userId": 951
        },
        {
            "dateAdd": "2017-09-12 11:08:02",
            "icon": "",
            "id": 1874,
            "isUse": true,
            "key": "3",
            "level": 1,
            "name": "家居内衣",
            "paixu": 0,
            "pid": 0,
            "type": "",
            "userId": 951
        },
        {
            "dateAdd": "2017-09-12 11:08:14",
            "icon": "",
            "id": 1875,
            "isUse": true,
            "key": "4",
            "level": 1,
            "name": "特价区",
            "paixu": 0,
            "pid": 0,
            "type": "",
            "userId": 951
        },
        {
            "dateAdd": "2017-09-13 09:37:53",
            "icon": "",
            "id": 1906,
            "isUse": true,
            "key": "5",
            "level": 1,
            "name": "裙装",
            "paixu": 0,
            "pid": 0,
            "type": "",
            "userId": 951
        },
        {
            "dateAdd": "2017-09-13 10:06:52",
            "icon": "",
            "id": 1907,
            "isUse": true,
            "key": "6",
            "level": 1,
            "name": "套装",
            "paixu": 0,
            "pid": 0,
            "type": "",
            "userId": 951
        },
        {
            "dateAdd": "2017-09-16 14:03:08",
            "icon": "",
            "id": 2016,
            "isUse": true,
            "key": "7",
            "level": 1,
            "name": "外套",
            "paixu": 0,
            "pid": 0,
            "type": "",
            "userId": 951
        },
        {
            "dateAdd": "2017-09-17 19:55:09",
            "icon": "",
            "id": 2054,
            "isUse": true,
            "key": "8",
            "level": 1,
            "name": "秒杀",
            "paixu": 0,
            "pid": 0,
            "type": "",
            "userId": 951
        },
        {
            "dateAdd": "2017-09-25 09:07:38",
            "icon": "",
            "id": 2245,
            "isUse": true,
            "key": "9",
            "level": 1,
            "name": "内裤",
            "paixu": 0,
            "pid": 0,
            "type": "",
            "userId": 951
        },
        {
            "dateAdd": "2017-09-25 09:07:58",
            "icon": "",
            "id": 2246,
            "isUse": true,
            "key": "10",
            "level": 1,
            "name": "袜子",
            "paixu": 0,
            "pid": 0,
            "type": "",
            "userId": 951
        },
        {
            "dateAdd": "2017-10-18 11:13:56",
            "icon": "",
            "id": 2787,
            "isUse": true,
            "key": "11",
            "level": 1,
            "name": "鞋",
            "paixu": 0,
            "pid": 0,
            "type": "",
            "userId": 951
        }
    ],
    "msg": "success"
}




{
    "code": 0,
    "data": [
        {
            "barCode": "",
            "categoryId": 1872,
            "characteristic": "尼多熊袜子，适合秋冬天",
            "commission": 5,
            "commissionType": 2,
            "dateAdd": "2017-10-30 10:31:27",
            "dateStart": "2017-10-30 10:24:54",
            "dateUpdate": "2018-05-04 15:31:29",
            "id": 6745,
            "logisticsId": 386,
            "minPrice": 90,
            "minScore": 0,
            "name": "10-12岁袜子",
            "numberFav": 0,
            "numberGoodReputation": 0,
            "numberOrders": 0,
            "paixu": 0,
            "pic": "https://cdn.it120.cc/apifactory/2017/10/30/94ed2ab19dc0ed01e65ac2fbd9e87147.jpg",
            "pingtuan": false,
            "pingtuanPrice": 0,
            "recommendStatus": 0,
            "recommendStatusStr": "普通",
            "shopId": 0,
            "status": 0,
            "statusStr": "上架",
            "stores": 10,
            "userId": 951,
            "views": 3037,
            "weight": 0
        },

 */