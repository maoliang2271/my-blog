const fs = require('fs');
const path = require('path');

function readData (req, res, cb) {
    fs.readFile(path.resolve(__dirname, './data.json'), function (err, data) {
        if (err) {
            // res.writeHead(500, {'Content-Type': 'application/json;charset=utf-8'});
            res.send({
                errorNo: 1,
                errMsg: '接口异常'
            });
            throw err;
        } else {
            // res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
            cb(JSON.parse(data));
        }
    });
}

module.exports = function (app) {

    // 获取文章导航信息
    app.get('/api/setArticleNum', function(req, res){
        readData(req, res, function (data) {
            let resData = []; 
            if (data && data.data.length) {
                let obj = {};
                data.data.forEach(function (item) {
                    var key = item['menuInfo']['type'];
                    if (obj[key]) {
                        obj[key]['num']++;
                    } else {
                        obj[key] = Object.assign({}, item['menuInfo'], {
                            num: 1
                        });
                    }
                });
                for (i in obj) {
                    resData.push(obj[i]);
                }
                resData.unshift({
                    type: '全部',
                    num: data.data.length,
                    route: '/?type='
                });
            }
            res.send({
                errorNo: 0,
                errMsg: 'success',
                data: resData
            });
        });
    });

    // 获取文章列表
    app.get('/api/getBlogList', function(req, res){
        readData(req, res, function (data) {
            let resData = [];
            let hasMore = false; 
            if (data && data.data.length) {
                let [type, pageNum, pageSize] = [req.query['type'], req.query['pageNum'], req.query['pageSize']];
                // 类别筛选
                if (type) {
                    data.data = data.data.filter(function (item) {
                        return item['menuInfo']['type'] === type;
                    });
                }
                // 时间排序
                resData = data.data.sort(function (a, b) {
                    a = new Date(a['date']) - 0;
                    b = new Date(b['date']) - 0;
                    return a > b ? 1 : a == b ? 0 : -1;
                });
                // 分页
                if (resData.length > pageSize) {
                    resData = resData.slice(0, pageNum * pageSize);
                }
                // 判断是否有更多
                if (resData.length > pageNum * pageSize) {
                    hasMore = true;
                }
            }
            res.send({
                errorNo: 0,
                errMsg: 'success',
                data: resData,
                hasMore: hasMore
            });
        });
    });

    // 获取文章详情
    app.get('/api/getBlogDetail', function(req, res){
        readData(req, res, function (data) {
            let resData = {};
            if (data && data.data.length) {
                let blogId = req.query['blogId'];
                resData = data.data.filter(function (item) {
                    return item['id'] === blogId;
                });
            }
            res.send({
                errorNo: 0,
                errMsg: 'success',
                data: resData,
            });
        });
    });

    // 搜索文章
    app.get('/api/search', function(req, res){
        readData(req, res, function (data) {
            let resData = [];
            if (data && data.data.length) {
                let query = req.query['query'];
                resData = data.data.filter(function (item) {
                    let content = item['title'] + item['abstract'] + JSON.stringify(item['content']);
                    return content.includes(query);
                });
            }
            res.send({
                errorNo: 0,
                errMsg: 'success',
                data: resData,
            });
        });
    });
    
}