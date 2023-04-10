var e = require('../@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
    value: !0
}),
    (exports.default = void 0),
    require('../@babel/runtime/helpers/Arrayincludes');
var t = e(require('../@babel/runtime/helpers/classCallCheck')),
    c = e(require('../@babel/runtime/helpers/createClass')),
    a = (function () {
        function e() {
            (0, t.default)(this, e), e.checkCacheDir();
        }
        return (
            (0, c.default)(e, null, [
                {
                    key: 'checkCacheDir',
                    value: function () {
                        var t = uni.getFileSystemManager(),
                            c = e.prefixPath;
                        try {
                            t.accessSync(c);
                        } catch (e) {
                            t.mkdirSync(c, !0), eventLog(''.concat(c, '目录不存在，创建目录'));
                        }
                    }
                },
                {
                    key: 'readLargeFile',
                    value: function (e) {
                        var t = uni.getFileSystemManager().statSync(e).size,
                            c = new ArrayBuffer(t),
                            a = 0;
                        for (a = 0; a < t; a += 8e6) {
                            var n = Math.min(8e6, t - a);
                            console.log('read part:', a, n);
                            var r = uni.getFileSystemManager().readFileSync(e, '', a, n);
                            new Uint8Array(c).set(new Uint8Array(r), a);
                        }
                        return c;
                    }
                },
                {
                    key: 'removeExpiredFile',
                    value: function () {
                        var t = uni.getFileSystemManager(),
                            c = t.stat,
                            a = t.unlinkSync;
                        c({
                            path: e.prefixPath,
                            recursive: !0,
                            success: function (t) {
                                Object.keys(t.stats).forEach(function (c) {
                                    var n = t.stats[c],
                                        r = (n.path, n.stats);
                                    '/' !== r.path &&
                                        r.isFile() &&
                                        (Date.now() / 1e3 - 1e3 * r.lastAccessedTime) / 86400 > 7 &&
                                        (console.error('删除长时间未使用资源 '.concat(e.prefixPath, '/').concat(r.path)), a(''.concat(e.prefixPath, '/').concat(r.path)));
                                });
                            }
                        });
                    }
                },
                {
                    key: 'unzipFile',
                    value: function (t, c) {
                        return (
                            eventLog('unzipFile'),
                            new Promise(function (a, n) {
                                var r = uni.getFileSystemManager(),
                                    o = r.unzip,
                                    i = r.statSync,
                                    l = r.unlinkSync,
                                    s = ''.concat(e.prefixPath),
                                    u = c.replace('.zip', ''),
                                    h = ''.concat(s, '/').concat(u);
                                try {
                                    i(h) && l(h);
                                } catch (e) {}
                                o({
                                    zipFilePath: t,
                                    targetPath: s,
                                    success: function () {
                                        eventLog('解压'.concat(c, '完成')),
                                            console.log('缓存文件：'.concat(c.replace('.zip', ''), '; 缓存路径: ').concat(h)),
                                            e.checkAndRemoveOldCache(c.replace('.zip', '')),
                                            a({
                                                filePath: h
                                            });
                                    },
                                    fail: function (e) {
                                        var t = e.errMsg;
                                        console.error('解压'.concat(c, '失败: ').concat(t)), n();
                                    }
                                });
                            })
                        );
                    }
                },
                {
                    key: 'removeMd5',
                    value: function (e) {
                        return e.replace(/([a-zA-Z0-9]{16}\.)/g, '');
                    }
                },
                {
                    key: 'saveFile',
                    value: function (t, c) {
                        return (
                            eventLog('saveFile'),
                            new Promise(function (a, n) {
                                var r = uni.getFileSystemManager(),
                                    o = e.prefixPath,
                                    i = ''.concat(o, '/').concat(t);
                                console.log('缓存文件：'.concat(t, '; 缓存路径: ').concat(i)), e.checkAndRemoveOldCache(t);
                                try {
                                    r.accessSync(i), eventLog(''.concat(t, '已有缓存')), a(i);
                                } catch (e) {
                                    r.saveFile({
                                        tempFilePath: c,
                                        filePath: i,
                                        success: function () {
                                            console.log('保存成功'), eventLog(''.concat(t, '缓存成功')), a(i);
                                        },
                                        fail: function (e) {
                                            console.error('保存失败：', e), eventLog(''.concat(t, '缓存失败')), a(c);
                                        }
                                    });
                                }
                            })
                        );
                    }
                },
                {
                    key: 'checkAndRemoveOldCache',
                    value: function (t) {
                        var c =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : function (t) {
                                          return e.removeMd5(t);
                                      },
                            a = c(t),
                            n = uni.getFileSystemManager(),
                            r = e.prefixPath;
                        try {
                            var o = n.readdirSync(r);
                            o.filter(function (c) {
                                return e.removeMd5(c).includes(a) && !c.includes(t);
                            }).forEach(function (e) {
                                eventLog('删除'.concat(a, '旧缓存')), n.unlinkSync(''.concat(r, '/').concat(e));
                            });
                        } catch (e) {
                            console.error('checkCacheError ', e);
                        }
                    }
                },
                {
                    key: 'getLocalFilePath',
                    value: function (t) {
                        var c = t;
                        eventLog('getLocalFilePath: '.concat(c));
                        var a = ''.concat(e.prefixPath, '/').concat(c),
                            n = uni.getFileSystemManager(),
                            r = a;
                        try {
                            n.accessSync(a);
                        } catch (e) {
                            r = '';
                        }
                        return r;
                    }
                }
            ]),
            e
        );
    })();
(exports.default = a), (a.prefixPath = ''.concat(uni.env.USER_DATA_PATH, '/__GAME_FILE_CACHE'));
