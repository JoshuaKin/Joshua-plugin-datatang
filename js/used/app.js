/**
 * app.js
 */
/*构建http服务*/
var app = require('http').createServer();
/*引入socket.io*/
var io = require('socket.io')(app);
/*定义监听端口，可以自定义，端口不要被占用*/
// var PORT = 8081;
var PORT = 8081; /*3389 阿里云开放监听端口*/
/*监听端口*/
app.listen(PORT);
var fs = require("fs");
var os = require("os");
var resultFile = '../../data/result.txt';
var skipFile = '../../data/skip.txt';
/**
 *监听客户端连接
 *io是我们定义的服务端的socket
 *回调函数里面的socket是本次连接的客户端socket
 *io与socket是一对多的关系
 */
var sum = 0;
var finished = 0;
var preTime = new Date().getTime();
var wholeTime = 0;
var nowId = 0;
var skiped = undefined;
var skips = /妗|磊|小牛|海|牛牛|小易|飞平|k|星星|菲|戴|波|徒弟|钦|老[^婆|师|公|奶|爷|爸|妈|哥|姐|妹|舅|姨|姑|父|母|是|总|家|板][\u4e00-\u9fa5]{0,1}|黔|晁|薇|兔|猴|维|么总|源|师傅|广|小胖|博|龙|璐|先生|营|山|坪|桐|苑|洲|际|谭|欧|雪|陕|襄|煤|矿|沙|井|垣|店|恒大|岗|群|洪|众|达|绿洲|司|馆|朗|堂|宜|保姆|婊|彪|塘|小鱼|兰|丁|黄|诺|文|萍|苹|倩|游|世|玲|黛|玉|护士|丽|莉|晓|霞|猫|梁|嘉|怡|郭|骆|岩|妍|泽|校|大学|圩|琴|童|街|萨|猪脚|主角|瑞|巧|铭|敏|梅|文|琳|灵|双|桂|小宝|阿宝|妮|芮|鑫|林|小牛|培|氏|司令|老常|焦|河|吉|毛|泰|翠|娇|导游|橘|兹|蛋|祯|琦|皓|媚|汪|冰|仔|佑|银|燕|肖|饶|熙|晋|曲|蒲|中心|威|段|俐|驰|蕾|皮|小人|户|支队|昭|化|轮|三|雍|济|慧|辉|勇|强|欣|兵|蕙|田|区|医生|领导|君|仁|医院|主人|娜|艾|县|村|光|城|行政|伍|青|场|楼|莎|主任|庄|志|妃|邓|晨|婷|余|长治|常州|葛|小刚|本山|岳|鹏|猴哥|洁|诗|秘|超|松|涛|云|韵|尹|静|淑|医院|社区|伟|区|泉|杨|洋|英|颖|山|张|宋|荣|容|苏|陶|姚|绍|杰|锋|唐山|闫|女士|沈|先生|店长|豪|芳|建|园|桥|松岗|同学|大同|教练|城|董事|大厦|高楼|金茂|塔|经理|主人|主管|上司|司机|老师|电视剧|金阳|书记|银行|君|军|酒店|涛|菁|公园|公司|站|乱遥|小姐|省|市|县|镇|乡|高速|公路|饭店|州|国|区|层|栋|巷|坊|岗|师|空|串|岸|湾|(胡|迪|德|峰|陈|李|赵|孙|金|榆|梅赵|孙|李|宁|吴|郑|王|冯|陈|褚|卫|蒋|沈|韩|杨|朱|秦|尤|许|何|吕|周|施|张|孔|曹|严|华|金|魏|陶|姜|戚|邹|喻|汉|刘|柳|柏|夏|窦|董|章|云|苏|潘|葛|奚|范|彭|郎|鲁|韦|昌|马|苗|凤|花|俞|任|袁|柳|酆|鲍|史|唐|费|廉|岑|薛|雷|贺|倪|汤)[^总|老板]/g;

io.on('connection', function(socket) {
    socket.on('finish', function(param) {
        finished++;
        /*计算每一题的使用时间*/
        var nowTime = new Date().getTime();
        var timeUsed = Math.floor((nowTime - preTime) / 1000);
        /*更改初始时间配置*/
        preTime = nowTime;
        wholeTime += timeUsed;
        var sec = wholeTime % 60;
        var min = Math.floor(wholeTime / 60);
        var hour = Math.floor(wholeTime / 3600);
        /*计算平均做题时间*/
        // var perWork=(wholeTime/finished).toFixed(1);
        /*计算完成效益*/
        var finishedEff = (finished / wholeTime * 60).toFixed(0);
        var wholeEff = ((finished / sum) * 100).toFixed(0);
        console.log('******');
        console.log('累计完成: ' + finished + '/' + sum);
        console.log('间隔时长: ' + timeUsed + 's');
        // console.log('平均时长: ' + perWork + 's');
        console.log('工作总时: ' + hour + '小时' + min + '分钟' + sec + '秒  平均: ' + finishedEff + ' 题/分钟');
        console.log('工作达标率: ' + wholeEff + '%');
        // console.log('编号: ' + param.id);
        // console.log('原文: ' + param.pre);
        // console.log('改文: ' + param.cur);
        // console.log('人名: ' + JSON.stringify(param.name));
        // console.log('******');
        var data = "";
        var readerStream = fs.createReadStream(resultFile);
        readerStream.setEncoding("UTF8");
        readerStream.on("data", function(chunk) {
            data += chunk;
        });
        readerStream.on("end", function() {
            writeStream();
        });
        readerStream.on("error", function(err) {
            console.log(err.stack);
        });

        function writeStream() {
            var subdata = data + '\n' + '*****' + '\n' + '编号: ' + param.id + '\n' + '原文: ' + param.pre + '\n' + '改文: ' + param.cur + '\n' + '地点: ' + JSON.stringify(param.place) + '\n'+ '人名: ' + JSON.stringify(param.name) + '\n'+ '应用: ' + param.app + '\n' + '*****';
            var writeStream = fs.createWriteStream(resultFile);
            writeStream.write(subdata, "UTF8");
            writeStream.end();
            writeStream.on("finish", function() {
                // console.log('写入完成');
            });
            writeStream.on("error", function() {
                console.log(error.stack);
            });
        }
    });
    socket.on('init', function() {
        sum++;
    });
    socket.on('skip', function(pre) {
        if (pre !== skiped) {
            skiped = pre;
            var data = "";
            var readerStream = fs.createReadStream(skipFile);
            readerStream.setEncoding("UTF8");
            readerStream.on("data", function(chunk) {
                data += chunk;
            });
            readerStream.on("end", function() {
                writeStream();
            });
            readerStream.on("error", function(err) {
                console.log(err.stack);
            });
            function writeStream() {
                var subdata = data + '\n' + '*****' + '\n' +  '原文: ' + skiped + '\n'+'阻碍项: '+pre.match(skips)+'\n'+ '*****';
                var writeStream = fs.createWriteStream(skipFile);
                writeStream.write(subdata, "UTF8");
                writeStream.end();
                writeStream.on("finish", function() {
                    // console.log('写入完成');
                });
                writeStream.on("error", function() {
                    console.log(error.stack);
                });
            }


        }

    });
});
console.log('后台统计已开启: ' + new Date());