(function () {
    'use strict';
}());
/*
 * @author WMXPY
 * @contect wm@wmpcxpy.com
 * Main Module
 * @version Alpha 0.6.7
 * Caper Module
 * @version Alpha 0.3.11
 * Ajax Module
 * @varsion Beta 2.0.0
 * File Module
 * @version 1.0.2
 * @CHANGELOG
 */
var Cp$ = {
    /**
     * 
     * @param {object} init 
     * @returns 
     */
    animate: function (init) {
        return setTimeout(next, init.duration);

        function next() {
            if (init.content.length > 0) {
                let content = init.content.shift();
                init.target[init.elem] = content;
                setTimeout(next, init.duration);
                return null;
            } else {
                return;
            }
        }
    }
}
var Co$ = {
    /**
     * @param {target of Vuejs} target 
     * @param {data of Caper} data 
     */
    Typing: function (target, data) {
        let capersettings = {
            contect: []
        };
        for (var i in data) capersettings[i] = data[i];
        return this.typing(target, capersettings);
    },
    Caper: function (target, data) {
        var capersettings = {
            frame: 'Vue',
            elem: 'test',
            data: {
                start: null,
                end: null
            },
            content: [],
            duration: 500,
            mode: 'rnimate'
        };
        for (var i in data) capersettings[i] = data[i];
        return this.varify(target, capersettings);
    },
    caperjs: {
        rnimate: function (target, data) {
            return setInterval(() => {
                target[data.elem] = data.content[Cp$.globol.randoms(data.content.length)];
            }, data.duration);
        },
        animate: function (target, data) {
            return setTimeout(() => {
                if (data.content.length > 0) {
                    let content = data.content.shift();
                    target[data.elem] = content;
                    setTimeout(next, data.duration);
                } else {
                    return null;
                }
            }, data.duration);
        },
        iter: function (target, data) {
            let value = data.data.start;
            let end = data.data.end;
            if (end.length != value.length) value = caperfun.random.string(end.length);
            let count = 0;
            let dur = Math.max(data.duration, 50);
            let safeword = setInterval(() => {
                value = howmuchsame(end, value);
                target[data.elem] = value;
                if (value != end) {
                    count++;
                } else {
                    clearInterval(safeword);
                }
            }, dur);
            //todo
            function howmuchsame(tar, val) {
                var diff = tar.length;
                for (var i = 0; i < tar.length; i++) {
                    if (val.charAt(i) != tar.charAt(i)) {
                        var ran = caperfun.random.instring(diff, tar.charAt(i))
                        val = val.substring(0, i) + ran + val.substring(i + 1, val.length);
                    } else {
                        diff--;
                    }
                }
                return val;
            }
            return data.data.start;
        },
        countup: function (elem, data) {
            var startVal = data.start;
            var endVal = data.end;
            var decimal = data.decimal;
            var duration = data.duration;
            var value;

            function startCount(time) {
                // time is original  function taht caalled
                //after one run, requestAnimationFrame will applay timestamp to s
                value = startVal + (endVal - startVal) * (time / duration);
                value = Math.min(endVal, value);
                elem.innerHTML = value.toFixed(decimal);
                if (time < duration) requestAnimationFrame(startCount);
            }
            requestAnimationFrame(startCount)
        },
        countdown: function (elem, data, mode) {
            var startVal = data.start;
            var endVal = data.end;
            var decimal = data.decimal;
            var duration = data.duration;
            var value = startVal;
            //normal count
            function startCount(time) {
                //after one run, requestAnimationFrame will applay timestamp to s
                value = Math.max(endVal, startVal - (startVal - endVal) * (time / duration));
                elem.innerHTML = value.toFixed(decimal);
                if (time < duration) requestAnimationFrame(startCount);
            }
            //sec count
            function secCount() {
                //Count as timer
                value = value - 1;
                if (value < endVal) {
                    data.endfunction();
                    return null;
                } else {
                    elem.innerHTML = value.toFixed(decimal);
                    setTimeout(secCount, 1000);
                }
            }
            //switch of modes
            switch (mode) {
                case 'normal':
                    requestAnimationFrame(startCount);
                    break;
                case 'sec':
                    setTimeout(secCount, 100);
                    break;
                default:
                    requestAnimationFrame(startCount);
            }
        }
    },
    varify: function (target, data) {
        switch (data.mode) {
            case 'animate':
                return this.caperjs.animate(target, data);
            case 'rnimate':
            case 'ranimate':
            case 'randomanimate':
                return this.caperjs.rnimate(target, data);
            case 'iter':
                return this.caperjs.iter(target, data);
            case 'countup':
                return this.caperjs.countup(target, data);
            default:
                console.warn('Module Undefinded');
                return 0;
        }
    },
    globol: {
        randoms: (limit) => {
            return Math.floor(Math.random() * 10000) % limit;
        }
    }
}
export var Ca$ = {
    img: function (inin) {
        //default
        var ajaxsettings = {
            target: 'default',
            url: 'mengw.io',
            data: '',
            //default async
            //true for ajax, false for delay
            async: true,
            //default cache
            cache: true,
            //default 40s timeout
            //not really support yet
            timeout: 40000,
            //default call back json
            callback: 'json',
            //default IE 6
            IEborwser: 'Microsoft.XMLHTTP',
            //default form
            contentType: 'application/x-www-form-urlencoded',
            encode: [],
            //default consolelog
            success: function (data) {
                console.log(data);
            },
            //default consoleerror
            //updated to alert
            error: function (error) {
                console.debug(error);
            }
        };
        //inin method
        for (var i in inin) {
            ajaxsettings[i] = inin[i];
        }
        if (ajaxsettings.encode.length > 0) {
            // let stringfy = JSON.stringify(ajaxsettings.data);
            for (let i = 0; i < ajaxsettings.encode.length; i++) {
                ajaxsettings.data[ajaxsettings.encode[i]] = ajaxsettings.data[ajaxsettings.encode[i]].replace(/\+/g, "%2B").replace(/\&/g, "%26");
            }
            // ajaxsettings.data = JSON.parse(stringfy);
        }
        //create object
        //convert object to string
        if (typeof ajaxsettings.data === 'object') {
            var str = '';
            var value = '';
            for (var key in ajaxsettings.data) {
                value = ajaxsettings.data[key];
                //replace & in url
                if (ajaxsettings.data[key].indexOf('&') !== -1) {
                    value = ajaxsettings.data[key].replace(/\&/g, "%26");
                }
                //replace & in key
                if (key.indexOf('&') !== -1) {
                    key = key.replace(/&/g, escape('&'));
                }
                str += key + '=' + value + '&';
            }
            str = str.replace(/\+/g, "%2B");
            str = str.replace(/\&/g, "%26");
            ajaxsettings.data = str.substring(0, str.length - 1);
        }
        //cache
        var cache = null;
        if (ajaxsettings.cache) {
            cache = '';
        } else {
            cache = '&' + new Date().getTime();
        }
        //for old browser
        var ajaxobject = null;
        if (window.XMLHttpRequest) {
            //for Human Browser
            ajaxobject = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            //for non-human Browser
            ajaxobject = new ActiveXObject(ajaxsettings.IEborwser);
        } else {
            //for Borwser not support ajax
            console.log('Not supported, im done');
        }
        //shake with server
        ajaxobject.open('POST', ajaxsettings.url, ajaxsettings.async);
        //send request
        ajaxobject.setRequestHeader("Content-type", ajaxsettings.contentType);
        ajaxobject.send(ajaxsettings.data);
        //waiting for response
        ajaxobject.onreadystatechange = function () {
            if (ajaxobject.readyState === 4) {
                if (ajaxobject.status === 200)
                    ajaxsettings.success.call(ajaxobject, ajaxobject.responseText);
                else {
                    ajaxsettings.error();
                }
            }
        };
    },
    get: function (inin) {
        //default
        var ajaxsettings = {
            //default link
            target: 'default',
            url: './main.php',
            //default No data sended
            data: '',
            //default async
            //true for ajax, false for delay
            async: true,
            //default cache
            cache: true,
            //default 40s timeout
            //not really support yet
            timeout: 40000,
            //default call back json
            callback: 'json',
            encode: false,
            //default IE 6
            IEborwser: 'Microsoft.XMLHTTP',
            //default form
            contentType: 'application/x-www-form-urlencoded',
            //default consolelog
            success: function (data) {
                console.log(data);
            },
            //default consolelog
            //updated to alert
            error: function (error) {
                console.log(error);
            }
        };
        //inin method
        for (var i in inin) {
            ajaxsettings[i] = inin[i];
        }
        if (ajaxsettings.encode == true) {
            let stringfy = JSON.stringify(ajaxsettings.data);
            stringfy = stringfy.replace(/\+/g, "%2B");
            stringfy = stringfy.replace(/\&/g, "%26");
            ajaxsettings.data = JSON.parse(stringfy);
        }
        //create object
        //convert object to string
        if (typeof ajaxsettings.data === 'object') {
            var str = '';
            var value = '';
            for (var key in ajaxsettings.data) {
                value = ajaxsettings.data[key];
                //replace & in url
                if (ajaxsettings.data[key].indexOf('&') !== -1) value = ajaxsettings.data[key].replace(/&/g, escape('&'));
                //replace & in key
                if (key.indexOf('&') !== -1) {
                    key = key.replace(/&/g, escape('&'));
                }
                str += key + '=' + value + '&';
            }
            ajaxsettings.data = str.substring(0, str.length - 1);
        }
        var cache = '';
        if (ajaxsettings.cache) {
            cache = '';
        } else {
            cache = '&' + new Date().getTime();
        }
        //chche url
        ajaxsettings.url += '?' + ajaxsettings.data + cache;
        //for old browser
        var ajaxobject = null;
        if (window.XMLHttpRequest) {
            //for Human Browser
            ajaxobject = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            //for non-human Browser
            ajaxobject = new ActiveXObject(ajaxsettings.IEborwser);
        } else {
            //for Borwser not support ajax
            console.log('Not supported, im done');
        }
        //shake with server
        ajaxobject.open('GET', ajaxsettings.url, ajaxsettings.async);
        //send request
        ajaxobject.send(null);
        //waiting for response
        ajaxobject.onreadystatechange = function () {
            if (ajaxobject.readyState === 4) {
                if (ajaxobject.status === 200)
                    ajaxsettings.success.call(ajaxobject, ajaxobject.responseText);
                else {
                    ajaxsettings.error();
                }
            }
        };
    },
    post: function (inin) {
        //default
        var ajaxsettings = {
            target: 'default',
            url: './main.php',
            data: '',
            //default async
            //true for ajax, false for delay
            async: true,
            //default cache
            cache: true,
            //default 40s timeout
            //not really support yet
            timeout: 40000,
            //default call back json
            callback: 'json',
            //default IE 6
            IEborwser: 'Microsoft.XMLHTTP',
            //default form
            contentType: 'application/x-www-form-urlencoded',
            encode: [],
            //default consolelog
            success: function (data) {
                console.log(data);
            },
            //default consolelog
            //updated to alert
            error: function (error) {
                console.log(error);
                alert(error);
            }
        };
        //inin method
        for (var i in inin) {
            ajaxsettings[i] = inin[i];
        }
        if (ajaxsettings.encode.length > 0) {
            // let stringfy = JSON.stringify(ajaxsettings.data);
            for (let i = 0; i < ajaxsettings.encode.length; i++) {
                ajaxsettings.data[ajaxsettings.encode[i]] = ajaxsettings.data[ajaxsettings.encode[i]].replace(/\+/g, "%2B").replace(/\&/g, "%26");
            }
            // ajaxsettings.data = JSON.parse(stringfy);
        }
        //create object
        //convert object to string
        if (typeof ajaxsettings.data === 'object') {
            var str = '';
            var value = '';
            for (var key in ajaxsettings.data) {
                value = ajaxsettings.data[key];
                //replace & in url
                if (typeof ajaxsettings.data[key] == "string") {
                    if (ajaxsettings.data[key].indexOf('&') !== -1) {
                        value = ajaxsettings.data[key].replace(/\&/g, "%26");
                    }
                }
                //replace & in key
                if (key.indexOf('&') !== -1) {
                    key = key.replace(/&/g, escape('&'));
                }
                str += key + '=' + value + '&';
            }
            ajaxsettings.data = str.substring(0, str.length - 1);
        }
        //cache
        var cache = '';
        if (ajaxsettings.cache) {
            cache = '';
        } else {
            cache = '&' + new Date().getTime();
        }
        //for old browser
        var ajaxobject = null;
        if (window.XMLHttpRequest) {
            //for Human Browser
            ajaxobject = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            //for non-human Browser
            ajaxobject = new ActiveXObject(ajaxsettings.IEborwser);
        } else {
            //for Borwser not support ajax
            console.log('Not supported, im done');
        }
        //shake with server
        ajaxobject.open('POST', ajaxsettings.url, ajaxsettings.async);
        //send request
        ajaxobject.setRequestHeader("Content-type", ajaxsettings.contentType);
        ajaxobject.send(ajaxsettings.data);
        //waiting for response
        ajaxobject.onreadystatechange = function () {
            if (ajaxobject.readyState === 4) {
                if (ajaxobject.status === 200)
                    ajaxsettings.success.call(ajaxobject, ajaxobject.responseText);
                else {
                    ajaxsettings.error();
                }
            }
        };
    }
}
const Cr$ = {
    ran: limit => {
        const r = Math.floor(Math.random() * 10000);
        return r % limit;
    }
}
export var Cf$ = {
    read: function (inin, endfunction) {
        let defaultinin = {
            mode: 'content',
            file: ''
        }
        for (SVGLengthList i in inin) {
            defaultinin[i] = inin[i];
        }
        if (defaultinin.file.length < 1) return;
        let reader = new FileReader();
        reader.onloadend = function () {
            endfunction(reader.result);
        };
        switch (inin.mode) {
            case 'URL':
            case 'base64':
            case 'b64':
            case 'url':
                reader.readAsDataURL(inin.file);
                break;
            case 'Text':
            case 'test':
                reader.readAsText(inin.file);
                break;
            case 'BinaryString':
                reader.readAsBinaryString(inin.file);
                break;
            default:
                console.log('mode is not supported');
        }
    },
    download: function (file, filename) {
        const a = document.createElement('a');
        const url = window.URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
    }
};
var caperfun = {
    random: {
        //random a length length string
        string: function (length) {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ,.!@#$%^&*()|?<>";
            length = Math.max(0, length);
            for (var i = 0; i < length; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        },
        //random a int
        //need to imporve feature
        int: function (length) {
            return Math.random(length);
        },
        //random with little
        instring: function (length, little) {
            length = Math.max(0, length);
            var thisposs = little + this.string(length);
            return thisposs.charAt(Math.floor(Math.random() * thisposs.length));
        }
    }
}