const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
// mock一组数据
const produceNewsData = function () {
    let articles = []
    for (let i = 0; i < 100; i++) {
        let newArticleObject = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }
    return {
        data: articles
    }
}
// 拦截ajax请求，配置mock的数据
Mock.mock('/api/articles', 'get', produceNewsData)

const produceRecords = function () {
    let tableData = [
        {
            'date': '2020-03-27',
            'doctor': '张三'
        },
        {
            'date': '2021-03-05',
            'doctor': '李四'
        },
        {
            'date': '2021-03-29',
            'doctor': '王五'
        }
    ]
    return {
        records: tableData
    }
}

Mock.mock(RegExp('/api/basic/records.*'), 'get', produceRecords)

const produceRecordsDetail = function () {
    let images = [
        {
            img: 'http://localhost:8080/SGP003.jpg',
            res: 'http://localhost:8080/SGP003_res.jpg',
            cam: 'http://localhost:8080/SGP003_cam.jpg',
            cls: '黏膜肌层'
        },
        {
            img: 'http://localhost:8080/SGP003.jpg',
            res: 'http://localhost:8080/SGP003_res.jpg',
            cam: 'http://localhost:8080/SGP003_cam.jpg',
            cls: '黏膜肌层'
        },
        {
            img: 'http://localhost:8080/SGP003.jpg',
            res: 'http://localhost:8080/SGP003_res.jpg',
            cam: 'http://localhost:8080/SGP003_cam.jpg',
            cls: '黏膜肌层'
        },
        {
            img: 'http://localhost:8080/SGP003.jpg',
            res: 'http://localhost:8080/SGP003_res.jpg',
            cam: 'http://localhost:8080/SGP003_cam.jpg',
            cls: '黏膜肌层'
        },
    ]
    return {
        detail: images
    }
}
Mock.mock(RegExp('/api/basic/record_detail.*'), 'get', produceRecordsDetail)

const producePatient = function () {
    return {
        id: '20210508',
        name: '张三',
        age: 45,
        sex: '男'
    }
}
Mock.mock(RegExp('/api/basic/patient_info.*'), 'get', producePatient)

const login = function (params) {
    let user = JSON.parse(params.body).user
    let password = JSON.parse(params.body).password

    let name = '张三'

    if (user === 'admin' && password === '111111') {
        return {
            code: 200,
            name: name
        }
    }
}
Mock.mock('/api/basic/login', 'post', login)