

var socket = io('ws://localhost:8081');
let ctr = null;
socket.emit('init');
ctr = setInterval(() => {
    if ($('.deleBut button').length > 0) {
        setTimeout(() => {
            let id = $('#work-space h5')[0].innerText;
            let pre = $('#smsMessage')[0].innerText;
            let after = $('#smsMessageDiv p input')[0].value;
            let type = [];
            for (var i = 0; i < $('.deleBut button').length; i++) {
                type.push($('.deleBut button')[i].innerText)
            };
            type=type.join('');
            if (type.match(/地点实体/g)) {
                let placeType = $("#addressTag1 [name='addRoriginalPlace']");
                let placeIndex = $("#addressTag1 [name='addrIndex']")
                let placeSum = placeType.length || 0;
                var placeArr = {};
                if (placeSum > 0) {
                    for (var i = 0; i < placeSum - 1; i++) {
                        let name = placeType[i].value;
                        let index = placeIndex[i].value;
                        placeArr[name] = index;
                    }
                }
            }
            if (type.match(/应用关联实体/g)) {
            	var appArr= $("#useLinkTag1 [name='useLinkName']")[0].value;
            }
            if (type.match(/人名实体/g)) {
                let nameType = $("#nameTag1 [name='namePerson']");
                let nameIndex = $("#nameTag1 [name='nameIndex']");
                let nameSum = nameType.length || 0;
                var nameArr = {};
                if (nameSum > 0) {
                    for (var i = 0; i < nameSum - 1; i++) {
                        let name = nameType[i].value;
                        let index = nameIndex[i].value;
                        nameArr[name] = index;
                    }
                }
            }
            let item = {
                id: id,
                pre: pre,
                cur: after,
                app: appArr || null,
                place: placeArr || null,
                name: nameArr || null
            }
            clearInterval(ctr);
            socket.emit('finish', item);
        }, 30)
    } else {
        let pre = $('#smsMessage')[0].innerText + '  ';
        let after = $('#smsMessageDiv p input')[0].value;
        if (pre == after) {
            socket.emit('skip', pre);
        };
    }
}, 70)