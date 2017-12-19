/**
 *  version:4.0
 *  time:2017-12-17
 **/
/*初始化*/
/*检查用*/
$('#smsMessageDiv p input')[0].value = $('#smsMessage')[0].innerText;
var origin = $('#smsMessageDiv p input');
var initTxt = origin[0].value = origin[0].value + '  ';
var btnSkip = $('#btnSkip');
var btnNext = $('#btnNext');
var type = $("#typeSelected");
var result = '操作行为:';
var nameArr = ['罗聘', '杨宗纬', '李宗伟', '梁嘉怡', '李明达', '彭万里', '高大山', '谢大海', '马宏宇', '林莽', '黄强辉', '章汉夫', '范长江', '林君雄', '谭平山', '朱希亮', '李四光', '甘铁生', '张伍绍', '马继祖', '程孝先', '宗敬先', '张广嗣', '汤绍箕', '吕显祖', '何光宗', '孙念祖', '马建国', '王振国', '冯兴国', '于学忠', '马连良', '胡宝善', '李宗仁', '焦宝祯', '焦方正', '王丽敏', '宋慧乔', '李方膺', '王丽丽', '王永春', '刁鹏', '吴迪', '陈昌海', '吴佩孚', '李昌钰', '朱德', '关羽', '刘备', '曹操', '张飞', '顾西风', '黄慎宇', '郑燮', '秦览红', '李家诚', '刘凯', '王俊凯', '王源', '易烊千玺', '高翔腾', '王永莲', '汪士慎', '吴磊', '丁敬', '蒋仁新', '黄明易', '陈豫钟', '陈鸿寿', '赵之琛', '李灵黛', '柳兰歌', '孙祈钒', '韩千叶', '李白', '杜牧', '杜甫', '李清照', '欧阳修', '徐晓红', '苏洵', '苏轼', '苏辙', '王安石', '曾巩', '杨颖', '黄晓明', '王宝强', '陈赫', '范冰冰', '李晨', '比尔盖茨', '马云', '萧敬腾', '丁俊晖', '罗本', '宋佩蓉', '普京', '特朗普', '奥巴马', '荆轲', '金湘玉', '白展堂', '曹寇', '蔡海山', '崔卫平', '程蝉', '曹旭', '蔡天新', '陈远', '陈丹青', '程鹤麟'];
var myName = nameArr[Math.floor(Math.random() * nameArr.length)];
var parentArr = ['爸爸', '妈妈', '哥哥', '妹妹', '老婆', '老公', '妹妹'];
var myParent = parentArr[Math.floor(Math.random() * parentArr.length)];
var cityArr = ['太原', '成都', '上海', '北京', '重庆', '郑州', '重庆', '西安', '贵安', '贵阳', '深圳', '新疆', '武汉', '湖南', '珠江', '香港', '临汾'];
var myCity = cityArr[Math.floor(Math.random() * cityArr.length)];
var me = /我[^们]/g;
var you = /你[^们]|你好/g;
var you2 = /您[^们]/g;
var he = /他[^们]/g;
var she = /她[^们]/g;
/*城市标注项*/
var citys = /太原|成都|介休|南郊|长安|自贡|上海|厦门|北京|安顺|重庆|遵义|定西|郑州|西安|东莞|贵阳|深圳|新疆|武汉|临汾|哈尔滨/g;
/*人名标注项*/
var parents = /[我家|方|红|你他|你她|你家|你二|一|二|三|四|五|六|七|八|九|您|她家|他家|你|我|她|你|他|咱|好|表|亲|堂|小|大|老|坏|乖|傻]{0,1}(儿媳妇|宝贝女儿|爹妈|媳妇|姐妹|儿女|婆娘|婆婆|幺爸|幺妈|爸妈|爷爷|奶奶|姨婆|情人|外公|姑妈|外婆|舅舅|女孩子|女孩|男孩|姨娘|兄弟|姨妈|叔叔|阿姨|姑姑|妈妈|闺蜜|爸爸|亲友|男朋友|女朋友|父亲|母亲|哥们|姐们|娘们|弟弟|侄子|侄女|哥哥|姐姐|妹妹|主席|猪婆|丫头|妹子|丈夫|丈母娘|男人|女人|邻居|亲家|学姐|学长|学弟|学妹|婶婶|丈母娘|老丈人|主席|伯父|姑娘|伙子|伯母|妻子|娃儿|妹儿|哥儿|弟儿|妈儿|爸儿|哥们儿|姐们儿|娘们儿|媳妇儿|老人家|爱人|对象|嫂嫂|爹爹|媳妇|幺妹妹|幺妹|幺叔|幺爹|幺儿|幺子|幺哥哥|幺哥|女婿|外甥|老公|闺女|老婆|儿子|女儿|姐夫|表弟|表妹|表哥|弟妹|幺妹妹|幺妹|幺叔|幺爹|幺儿|幺子|幺哥哥|幺哥|孩子|小孩|爱人|娃娃|娃子|小子|舅妈|嫂子|一姐|二姐|三姐|四姐|一哥|二哥|三哥|四哥|二舅|二舅妈|妮子|闺女|伯伯|老爸|妞妞|老哥|老妈|爷子|妈咪|宝儿|爸|妈|哥|姐|爷|弟|妹|爹|舅|叔|娘|姨|嫂|婶|幺|娃|姑|孩|妞|妮)/g;
var honys = /[^是|你|我|她|这|他|让|找|那|问][\u4e00-\u9fa5]{0,1}(老师|老板|先生|老人家|老人|女士|经理|男士|小姐|男子|女子|小笨蛋|小可爱|老子|老大|老二|老三|老四|老五|老六|笨笨|小鬼|一宝|二宝|三宝|四宝|王八蛋)|[\u4e00-\u9fa5]{1}总|[我家|你他|你她|你家|一|二|三|四|五|六|七|奶|八|九|她家|他家|你|我|她|你|他|咱|臭|破|辣|鸡|好|表|亲|堂|小|大|烂|狗|逼|骚|操|死|滚|坏|老|嫩]{0,1}(亲爱的|亲爱滴|宝贝儿|宝贝|宝宝|老师|美女|帅哥|老板|亲爱哒|傻子)|宝贝|傻瓜|奴|哈尼/g;
/*app标注项*/
var apps = /微信|淘宝|qq|QQ|陌陌|qq邮箱|QQ邮箱|旺旺|阿里巴巴|邮箱|美图|支付宝|陌陌/g;
/*时间项*/
var days = /星期一|星期二|星期三|星期四|星期五|白天|晚上|星期六|星期日|周一|周二|周三|周四|周五|周六|周七|周日|今天上午|今天中午|今天晚上|明天上午|明天中午|明天晚上|昨天中午|昨天上午|昨天晚上|今天|明天|后天|昨天|早上|晚上|中午|上午|下午|昨晚|今早|明晚|明日|昨夜|今晚|昨晚|明早|两点半|一点|两点|三点|四点|五点|六点|七点|八点|九点|十点|十一点|十二点|1点|2点|3点|4点|5点|6点|7点|8点|9点|10点|11点|12点/g;
/*小[\u4e00-\u9fa5]--小王,小*的匹配 未启用*/
/*跳过项*/
var skips = /平定|和尚|兄妹|姐弟|工|承哥|妃|飞|猪|傻|壶口|蔡|贵|兴|媛|广西|贵安|傻子|猪头|猪手|北关|罗|红|广东|四川|湖南|茹|娟|安徽|杜|孩子们|小孩们|帅哥|路上|崽|情人老公|情人老婆|[我家|你他|你她|你家|一|二|三|四|五|六|七|奶|八|九|她家|他家|你|我|她|你|他|咱|臭|破|辣|鸡|好|表|亲|堂|小|大|烂|狗|逼|骚|操|死|滚|坏|老|嫩]{0,1}(大爷的|奶奶的|你他妈|你妈逼|傻屌|猪婆|伙子|臭臭|奇葩|小子|杂种|妮子|猪猪|猪)|小伙子|小朋友|妈妈们|宝宝们|爸爸们|哥哥们|姐姐们|大刚|小兰浩|文英|小姐|先生|女士|男士|天才|小雨|仇|八宝|杜|平:|茜|桓|嫖|夜总会|艳|客|工行|姗|廖|飞|孟|露|红红|盈|于|儒|咪|锋|翟|胜|劳|交口|米工|老板娘|喃|丹丹|江|坡|宏|他妈的|你妈的|傻叉|狗逼|弱智|悠|浩|女人味|令令|黎|凡凡|育才|枝|寿阳|妗|睿睿|惠|磊|艳|罗|男人们|女人们|厂|薜|斌|小牛|小容|涂|蓉|牛牛|小易|飞平|红红|小红|k|星星|菲|戴|波|徒弟|钦|老[^婆|师|公|奶|爷|爸|妈|哥|姐|妹|舅|姨|姑|父|母|是|总|家|板][\u4e00-\u9fa5]{0,1}|黔|晁|薇|兔|猴|维|么总|源|师傅|广|小胖|博|龙|璐|先生|营|山|坪|桐|苑|洲|际|谭|欧|雪|陕|襄|煤|矿|沙|井|垣|店|恒大|岗|群|洪|众|达|绿洲|司|馆|朗|堂|宜|保姆|婊|彪|塘|小鱼|兰|丁|黄|诺|文|萍|苹|倩|游|世|玲|黛|玉|护士|丽|莉|晓|霞|猫|梁|嘉|怡|郭|骆|岩|妍|泽|校|大学|圩|琴|童|街|萨|猪脚|主角|瑞|巧|铭|敏|梅|文|琳|灵|双|桂|小宝|阿宝|妮|芮|鑫|林|小牛|培|氏|司令|老常|焦|河|吉|毛|泰|翠|娇|导游|橘|兹|蛋|祯|琦|皓|媚|汪|冰|仔|佑|燕|肖|饶|熙|晋|曲|蒲|中心|威|段|俐|驰|蕾|皮|小人|户|支队|昭|化|轮|三|雍|济|慧|辉|勇|强|欣|兵|蕙|田|区|医生|领导|君|仁|医院|主人|娜|艾|县|村|光|城|行政|伍|青|场|楼|莎|主任|庄|志|妃|邓|晨|婷|余|长治|常州|葛|小刚|本山|岳|鹏|猴哥|洁|诗|秘|超|松|涛|云|韵|尹|静|淑|医院|社区|伟|区|泉|杨|洋|英|颖|山|小张|宋|荣|苏|陶|姚|绍|杰|锋|唐山|闫|沈|店长|豪|芳|建|园|桥|松岗|同学|大同|教练|城|董事|大厦|高楼|金茂|塔|主人|主管|上司|司机|老师|电视剧|金阳|书记|银行|君|军|酒店|涛|菁|公园|公司|站|乱遥|省|市|县|镇|乡|高速|公路|饭店|州|国|区|层|栋|巷|坊|岗|师|串|岸|湾|(胡|迪|德|峰|陈|李|赵|孙|金|榆|梅赵|孙|李|宁|吴|郑|王|冯|陈|褚|卫|蒋|沈|韩|杨|朱|秦|尤|许|何|吕|周|施|张|孔|曹|严|华|金|魏|陶|姜|戚|邹|喻|汉|刘|柳|柏|夏|窦|董|章|云|苏|潘|葛|奚|范|彭|郎|鲁|韦|昌|苗|凤|花|俞|任|袁|柳|酆|鲍|史|唐|费|廉|岑|薛|雷|贺|倪|汤|高)[^总|老板|妹|哥]|小马|马马/g;
/*人名替换项*/
// var others =
/*城市替换项*/
var city = /六枝|琅沃|长北|新明|阳原|繁峙|香港|珠江|新天寨|淮海|绮陌|晴隆|遥平|大同|天丰|平遥|太谷|抚顺|官仓|运城|运泰|原平|珠江|河津|榆次|文水/g;
/*应用替换项*/
var app = /wechat|扣扣|扣|wlan/g;

/*原文匹配*/
var nameIndex = 0;
var cityIndex = 0;
var appIndex = 0;
var hasChange = false;
var mainCtr=null;
var fn_toInit = () => {
    var len = $('.deleBut .deBt').length;
    for (var i = 0; i < len; i++) {
        $('.deleBut .deBt')[0].click();
    }
    var nameLen = $('#nameForm .deleteButton').length;
    for (var i = 0; i < nameLen - 1; i++) {
        $('#nameForm .deleteButton')[0].click();
    }
    var cityLen = $('#addressForm .deleteButton').length;
    for (var i = 0; i < cityLen - 1; i++) {
        $('#addressForm .deleteButton')[0].click();
    }
    var appLen = $('#useLinkForm .deleteButton').length;
    for (var i = 0; i < appLen - 1; i++) {
        $('#useLinkForm .deleteButton')[0].click();
    }

}
var fn_toChange = () => {
    /*阻碍*/
    if (fn_ifSkip(skips)) {
        result += '阻碍';
        return false;
    };
    /*初始替换*/
    fn_del();
    /*app*/
    if (initTxt.match(apps)) {
        fn_appChange(apps);
        if (initTxt.match(parents) || initTxt.match(honys) || initTxt.match(citys)) {
            result += '应用关联+';
            hasChange = true;
        } else {
            result += '应用关联';
            return false;
        }
    }
    /*地点*/
    if (initTxt.match(citys)) {
        fn_cityChange(citys);
        if (initTxt.match(parents) || initTxt.match(honys)) {
            result += '地点关联+';
            hasChange = true;
        } else {
            result += '地点关联';
            return false;
        }
    }
    /*称谓*/
    if (initTxt.match(parents)) {
        fn_parentChange(parents);
        if (initTxt.match(honys)) {
            result += '人名-称谓+';
            hasChange = true;
        } else {
            result += '人名-称谓';
            return false;
        }
    }
    /*昵称*/
    if (fn_honyChange(honys)) {
        result += '人名-昵称';
        hasChange = true;
        return false;
    }
    if (hasChange) return false;
    /*人名*/
    if (fn_ifChange(you)) {
        result += '人名-你';
        return false;
    }
    if (fn_ifChange(you2)) {
        result += '人名-您';
        return false;
    }
    if (fn_ifChange(me)) {
        result += '人名-我';
        return false;
    }
    if (fn_ifChange(he)) {
        result += '人名-他';
        return false;
    }
    if (fn_ifChange(she)) {
        result += '人名-她 ';
        return false;
    }
    /*自处理*/
    if (Math.random() > 1) {
        fn_Common(myName);
        result += '自处理';
        return false;
    } else {
    	$('#inEffective').click()
        fn_skip();
        result += '数据剔除';
        return false;
    }
}
var fn_Common = (name) => {
    var tmp = Math.floor(Math.random() * (4 + 1));
    var tmpStr = '';
    for (var i = 0; i < initTxt.length - 2; i++) {
        tmpStr += initTxt[i];
    }
    initTxt = tmpStr;
    /*确定值*/
    tmp = 4
    switch (tmp) {
        case 0:
            origin[0].value = initTxt = `${initTxt}:${name}`;
            fn_nameChange();
            break;
        case 1:
            origin[0].value = initTxt = `${initTxt},回微信`;
            fn_appChange(app);
            break;
        case 2:
            origin[0].value = initTxt = `${initTxt}我在${myCity}`;
            fn_cityChange(citys);
            break;
        case 3:
            origin[0].value = initTxt = `${initTxt}${name}呢`;
            fn_nameChange();
            break;
        case 4:
            origin[0].value = initTxt = `${name}${initTxt}`;
            fn_nameChange();
            break;

        default:
            origin[0].value = initTxt = `${name}${initTxt}`;
            fn_nameChange();
            break;
    }
}
var fn_next = () => {
	clearTimeout(mainCtr);
    mainCtr=setTimeout(() => {
        // btnNext.click();
        $('#btnModify').click()
    }, 300)
}
var fn_skip = () => {
	clearTimeout(mainCtr);
    mainCtr=setTimeout(() => {
        // btnSkip.click();
        $('#btnModify').click()

    }, 400)
}
var fn_del = () => {
    // origin[0].value = initTxt = initTxt.replace(days, '一会儿');
    // origin[0].value = initTxt = initTxt.replace(others, myParent);
    origin[0].value = initTxt = initTxt.replace(city, myCity);
    // origin[0].value = initTxt = initTxt.replace(app, '微信');
    origin[0].value = initTxt = initTxt.replace(/扣扣/g, 'QQ');
}
var fn_ifSkip = (reg) => {
    if (initTxt.match(reg) != null) {
        fn_skip();
        return true;
    } else return false;
}
var fn_parentChange = (reg) => {
    var tmpReg = new RegExp(reg, 'g');
    if (initTxt.match(tmpReg)) {
        var len = initTxt.match(tmpReg).length;
        var oArr = initTxt.match(tmpReg);
    } else return false;
    var nArr = [];
    type[0].children[4].selected = true;
    type.change();
    oArr.map((value, index) => {
        if (nArr.indexOf(value) == -1) {
            var go = true;
            nArr.map((item)=>{
    			var subReg = new RegExp(item, 'g');
    			var _subReg=new RegExp(value, 'g')
            	var min=initTxt.search(subReg);
            	var max=min+item.length;
            	if (min<=_subReg&&max>=_subReg) {
            		go=false;
            	}
            })
            if (true) {
                nArr.push(value);
                if (nArr.length > 1 || nameIndex > 0) {
                    $("#work-space .contentBottom").click();
                }
                var _tmpReg = new RegExp(value, 'g')
                var tmpLen = 0;
                oArr.map((item) => {
                    if (item == value) {
                        tmpLen++;
                    }
                })
                for (var i = 0; i < tmpLen; i++) {
                    $("#nameTag1 select[name='nameType']")[nameIndex].children[1].selected = true;
                    $("#nameTag1 select[name='nameType']").change();
                    $("#nameTag1 [name='namePerson']")[nameIndex].value = value;
                    $("#nameTag1 [name='nameIndex']")[nameIndex].value = i + 1;
                    nameIndex++;
                    if (i + 1 < tmpLen) {
                        $("#work-space .contentBottom").click();
                    }
                }
            }
        }
    })
    fn_next();
    return true;
};
var fn_honyChange = (reg) => {
    var tmpReg = new RegExp(reg, 'g');
    if (initTxt.match(tmpReg)) {
        var len = initTxt.match(tmpReg).length;
        var oArr = initTxt.match(tmpReg);
    } else return false;
    var nArr = [];
    type[0].children[4].selected = true;
    type.change();
    oArr.map((value, index) => {
        if (nArr.indexOf(value) == -1) {
            nArr.push(value);
            if (nArr.length > 1 || nameIndex > 0) {
                $("#work-space .contentBottom").click();
            }
            var _tmpReg = new RegExp(value, 'g')
            var tmpLen = 0;
            oArr.map((item) => {
                if (item == value) {
                    tmpLen++;
                }
            })
            for (var i = 0; i < tmpLen; i++) {
                $("#nameTag1 select[name='nameType']")[nameIndex].children[2].selected = true;
                $("#nameTag1 select[name='nameType']").change();
                $("#nameTag1 [name='namePerson']")[nameIndex].value = value;
                $("#nameTag1 [name='nameIndex']")[nameIndex].value = i + 1;
                nameIndex++;
                if (i + 1 < tmpLen) {
                    $("#work-space .contentBottom").click();
                }
            }

        }
    })
    fn_next();
    return true;
}
var fn_cityChange = (reg) => {
    var tmpReg = new RegExp(reg, 'g');
    if (initTxt.match(tmpReg)) {
        var len = initTxt.match(tmpReg).length;
        var oArr = initTxt.match(tmpReg);
    } else return false;
    var nArr = [];
    type[0].children[0].selected = true;
    type.change();
    oArr.map((value, index) => {
        if (nArr.indexOf(value) == -1) {
            nArr.push(value);
            if (nArr.length > 1 || cityIndex > 0) {
                $("#work-space .contentBottom").click();
            }
            var _tmpReg = new RegExp(value, 'g')
            var tmpLen = 0;
            oArr.map((item) => {
                if (item == value) {
                    tmpLen++;
                }
            })
            for (var i = 0; i < tmpLen; i++) {
                $("#addressTag1 [name='addRoriginalPlace']")[cityIndex].value = value;
                $("#addressTag1 [name='addrIndex']")[cityIndex].value = i + 1;
                $("#addressTag1 [name='addrCity']")[cityIndex].value = value;
                cityIndex++;
                if (i + 1 < len) {
                    $("#work-space .contentBottom").click();
                }
            }

        }
    })
    fn_next();
    return true;
}
var fn_appChange = (reg) => {
    var tmpReg = new RegExp(reg, 'g');
    if (initTxt.match(tmpReg)) {
        var len = initTxt.match(tmpReg).length;
        var oArr = initTxt.match(tmpReg);
    } else return false;
    var nArr = [];
    type[0].children[12].selected = true;
    type.change();
    oArr.map((value, index) => {
        if (nArr.indexOf(value) == -1) {
            nArr.push(value);
            if (nArr.length > 1) {
                $("#work-space .contentBottom").click();
            }
            var _tmpReg = new RegExp(value, 'g');
            var tmpLen = 0;
            oArr.map((item) => {
                if (item == value) {
                    tmpLen++;
                }
            })
            for (var i = 0; i < tmpLen; i++) {
                $("#useLinkTag1 [name='useLinkName']")[appIndex].value = value;
                appIndex++;
                if (i + 1 < tmpLen) {
                    $("#work-space .contentBottom").click();
                }
            }
        }
    })
    fn_next();
    return true;

}
var fn_ifChange = (reg) => {
    var index = initTxt.search(reg);
    if (index !== -1) {
        initTxt = initTxt.split('');
        initTxt.splice(index, 1, myName);
        initTxt = initTxt.join("");
        origin[0].value = initTxt;
        fn_nameChange();
        return true;
    } else {
        return false;
    }
}
/*人名实体更改*/
var fn_nameChange = () => {
    type[0].children[4].selected = true;
    type.change();
    $("#nameTag1 [name='namePerson']")[0].value = myName;
    $("#nameTag1 [name='nameIndex']")[0].value = '1';
    fn_next();
    return false;
}
fn_toInit();
setTimeout(() => {
    fn_toChange();
    console.log(result)
}, 30)