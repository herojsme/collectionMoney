var e = require('../@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
    value: !0
}),
    (exports.default = void 0),
    require('../@babel/runtime/helpers/Arrayincludes');
var a = e(require('../@babel/runtime/helpers/slicedToArray'));
require('../@babel/runtime/helpers/Objectentries');
var t = e(require('../@babel/runtime/helpers/classCallCheck')),
    n = e(require('../@babel/runtime/helpers/createClass')),
    r = GameGlobal.canvas,
    o = (function () {
        function e() {
            var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return (
                (0, t.default)(this, e),
                e.instance ||
                    (this.initGameGlobal(a),
                    (this.preloadDataProcessed = !1),
                    (this.platform = GameGlobal.systemInfo.platform),
                    (this.gameInstance = null),
                    (this.gameName = GameGlobal.GAME_NAME),
                    this.initInstance(),
                    (e.instance = this)),
                e.instance
            );
        }
        return (
            (0, n.default)(e, [
                {
                    key: 'initGameGlobal',
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        Object.entries(e).forEach(function (e) {
                            var t = (0, a.default)(e, 2),
                                n = t[0],
                                r = t[1];
                            GameGlobal[n] = r;
                        }),
                            (GameGlobal.UnityLoader = {
                                SystemInfo: {
                                    width: window.innerWidth,
                                    height: window.innerHeight,
                                    gpu: (function () {
                                        var e = r.getContext('webgl');
                                        if ((console.log('gl', e), e)) {
                                            var a = e.getExtension('WEBGL_debug_renderer_info');
                                            if (a) return e.getParameter(a.UNMASKED_RENDERER_WEBGL);
                                        }
                                        return console.log('unknown gpu'), 'unknown';
                                    })(),
                                    browser: 'wx',
                                    browserVersion: '0.0',
                                    language: window.navigator.userLanguage || window.navigator.language,
                                    hasWebGL: 1
                                },
                                UnityCache: {
                                    XMLHttpRequest: (function () {
                                        function e() {
                                            (0, t.default)(this, e), (this.xhr = new XMLHttpRequest()), (this.paramsCache = {}), this.bindEvent.call(this), (this.eventMap = {});
                                        }
                                        return (
                                            (0, n.default)(
                                                e,
                                                [
                                                    {
                                                        key: 'send',
                                                        value: function (a) {
                                                            var t = this,
                                                                n = arguments,
                                                                r = t.paramsCache,
                                                                o = (r.method, r.async, r.url),
                                                                l = (r.customHeaders, o.includes('StreamingAssets')),
                                                                s = o.includes('.json'),
                                                                i = e.checkHasCache(o);
                                                            if (!l || s) return t.xhr.send.apply(t.xhr, n);
                                                            if (i) {
                                                                console.warn('get bundle from local cache: ', o.substring(o.lastIndexOf('/') + 1));
                                                                var u = FileManager.readLargeFile(i);
                                                                t.createResponse({
                                                                    data: u
                                                                }),
                                                                    t.$emit('load');
                                                            } else {
                                                                var c = o.substring(o.lastIndexOf('/') + 1);
                                                                uni.downloadFile({
                                                                    url: o,
                                                                    filePath: FileManager.prefixPath + '/' + c,
                                                                    success: function (e) {
                                                                        console.warn('download bundle '.concat(c, ' success')),
                                                                            console.warn('bundle cache path: '.concat(FileManager.prefixPath + '/' + c)),
                                                                            FileManager.checkAndRemoveOldCache(c, function (e) {
                                                                                return e.replace(e.substring(e.lastIndexOf('_')), '') || e;
                                                                            });
                                                                        var a = e.filePath,
                                                                            n = e.statusCode,
                                                                            r = FileManager.readLargeFile(a);
                                                                        t.createResponse({
                                                                            data: r,
                                                                            statusCode: n
                                                                        }),
                                                                            t.$emit('load');
                                                                    },
                                                                    fail: function (e) {
                                                                        console.error('download assetbundle fail ', e);
                                                                    }
                                                                });
                                                            }
                                                        }
                                                    },
                                                    {
                                                        key: 'open',
                                                        value: function (e, a, t) {
                                                            console.log('xhr url: '.concat(a)),
                                                                (this.paramsCache = {
                                                                    method: e,
                                                                    url: a,
                                                                    async: t
                                                                }),
                                                                (a.includes('StreamingAssets') && !a.includes('.json')) || this.xhr.open.apply(this.xhr, arguments);
                                                        }
                                                    },
                                                    {
                                                        key: 'bindEvent',
                                                        value: function () {
                                                            var e = this;
                                                            [
                                                                'readyState',
                                                                'response',
                                                                'responseText',
                                                                'responseType',
                                                                'responseURL',
                                                                'responseXML',
                                                                'status',
                                                                'statusText',
                                                                'timeout',
                                                                'upload',
                                                                'withCredentials',
                                                                'onloadstart',
                                                                'onprogress',
                                                                'onabort',
                                                                'onerror',
                                                                'onload',
                                                                'ontimeout',
                                                                'onloadend',
                                                                'onreadystatechange'
                                                            ].forEach(function (a) {
                                                                Object.defineProperty(e, a, {
                                                                    get: function () {
                                                                        return e.xhr[a];
                                                                    },
                                                                    set: function (t) {
                                                                        e.xhr[a] = t;
                                                                    }
                                                                });
                                                            }),
                                                                [
                                                                    'abort',
                                                                    'getAllResponseHeaders',
                                                                    'getResponseHeader',
                                                                    'overrideMimeType',
                                                                    'addEventListener',
                                                                    'setRequestHeader'
                                                                ].forEach(function (a) {
                                                                    Object.defineProperty(e, a, {
                                                                        value: function () {
                                                                            return e.xhr[a].apply(e.xhr, arguments);
                                                                        }
                                                                    });
                                                                });
                                                        }
                                                    },
                                                    {
                                                        key: 'createResponse',
                                                        value: function (e) {
                                                            var a = e.data,
                                                                t = e.statusCode,
                                                                n = void 0 === t ? 200 : t;
                                                            (this.status = n), (this.response = a);
                                                        }
                                                    },
                                                    {
                                                        key: 'triggerEvent',
                                                        value: function (e) {
                                                            this.paramsCache.url;
                                                            var a = 'on' + e,
                                                                t = this[a];
                                                            if (t) {
                                                                for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                                                                t.apply(this, r || []);
                                                            }
                                                        }
                                                    }
                                                ],
                                                [
                                                    {
                                                        key: 'checkHasCache',
                                                        value: function (e) {
                                                            var a = e.substring(e.lastIndexOf('/') + 1);
                                                            return FileManager.getLocalFilePath(a);
                                                        }
                                                    }
                                                ]
                                            ),
                                            e
                                        );
                                    })()
                                }
                            });
                    }
                },
                {
                    key: 'initInstance',
                    value: function () {
                        this.gameInstance = {
                            onProgress: void 0,
                            compatibilityCheck: void 0,
                            Module: {
                                magicEmoji: !0,
                                wasmPath: GameGlobal.WASM_PATH,
                                graphicsAPI: ['WebGL 2.0', 'WebGL 1.0'],
                                onAbort: function (e) {
                                    var a = GameGlobal.Module;
                                    throw (void 0 !== e ? (a.print(e), a.printErr(e), (e = JSON.stringify(e))) : (e = ''), 'abort(' + e + ') at ' + a.stackTrace());
                                },
                                wasmInstantiated: function () {
                                    (GameGlobal.WASM_END_TIME = Date.now()),
                                        (GameGlobal.WASM_COMPILE_TIME_COST = ((GameGlobal.WASM_END_TIME - GameGlobal.WASM_BEGIN_TIME) / 1e3).toFixed(2)),
                                        console.log('wasm编译时间: ', WASM_COMPILE_TIME_COST, 's');
                                },
                                onRuntimeInitialized: function () {},
                                calledMainCb: function () {
                                    var e = ((Date.now() - GameGlobal.LOG_START_TIME) / 1e3).toFixed(2);
                                    console.log('首场景耗时: ', ((Date.now() - GameGlobal.DO_RUN_START) / 1e3).toFixed(2), 's'),
                                        console.log('黑屏时间: ', e, 's'),
                                        (GameGlobal.INIT_TIME_COST = e);
                                },
                                unityFileSystemInit: function () {
                                    var e = GameGlobal.Module;
                                    e.indexedDB || console.log('IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved.'),
                                        GameGlobal.FS.mkdir('/idbfs'),
                                        GameGlobal.FS.mount(GameGlobal.IDBFS, {}, '/idbfs'),
                                        e.rawData && (e.processRawData(), (e.rawData = void 0));
                                },
                                processRawData: function () {
                                    var e = Date.now(),
                                        a = GameGlobal.Module.rawData;
                                    if (a && !this.preloadDataProcessed) {
                                        eventLog('processRawData'), (this.preloadDataProcessed = !0);
                                        var t = new Uint8Array(a),
                                            n = new DataView(a),
                                            r = 0,
                                            o = 'UnityWebData1.0 ';
                                        if (!String.fromCharCode.apply(null, t.subarray(r, r + o.length)) == o) throw 'unknown data format';
                                        r += o.length;
                                        var l = n.getUint32(r, !0);
                                        for (r += 4; r < l; ) {
                                            var s = n.getUint32(r, !0);
                                            r += 4;
                                            var i = n.getUint32(r, !0);
                                            r += 4;
                                            var u = n.getUint32(r, !0);
                                            r += 4;
                                            var c = String.fromCharCode.apply(null, t.subarray(r, r + u));
                                            r += u;
                                            for (var d = 0, h = c.indexOf('/', d) + 1; h > 0; d = h, h = c.indexOf('/', d) + 1)
                                                GameGlobal.FS.createPath(c.substring(0, d), c.substring(d, h - 1), !0, !0);
                                            GameGlobal.FS.createDataFile(c, null, t.slice(s, s + i), !0, !0, !0);
                                        }
                                        console.log('memfs耗时: ', ((Date.now() - e) / 1e3).toFixed(2), 's');
                                    }
                                },
                                preRun: [],
                                postRun: [],
                                print: function (e) {},
                                printErr: function (e) {
                                    console.error(e);
                                },
                                Jobs: {},
                                canvas: r,
                                buildDownloadProgress: {},
                                resolveBuildUrl: function (e) {
                                    return e.match(/(http|https|ftp|file):\/\//) ? e : STREAMING_CDN.substring(0, STREAMING_CDN.lastIndexOf('/') + 1) + e;
                                },
                                streamingAssetsUrl: function () {
                                    return GameGlobal.Module.resolveBuildUrl('StreamingAssets');
                                },
                                pthreadMainPrefixURL: 'Build/',
                                webglContextAttributes: {
                                    premultipliedAlpha: 1,
                                    preserveDrawingBuffer: 1
                                }
                            },
                            SetFullscreen: function () {
                                if (GameGlobal.Module.SetFullscreen) return GameGlobal.Module.SetFullscreen.apply(GameGlobal.Module, arguments);
                            },
                            SendMessage: function () {
                                if (GameGlobal.Module.SendMessage) return GameGlobal.Module.SendMessage.apply(GameGlobal.Module, arguments);
                            }
                        };
                    }
                },
                {
                    key: 'startGame',
                    value: function () {
                        var e = this;
                        return (
                            this.prepareModule(),
                            Promise.all([this.loadSubPackage(), this.loadPreloadData()]).then(function () {
                                e.start();
                            })
                        );
                    }
                },
                {
                    key: 'loadSubPackage',
                    value: function () {
                        return new Promise(function (e, a) {
                            GameGlobal.UnityModule(GameGlobal.Module), e();
                        });
                    }
                },
                {
                    key: 'prepareModule',
                    value: function () {
                        (this.gameInstance.Module.gameInstance = this.gameInstance), (GameGlobal.Module = this.gameInstance.Module);
                    }
                },
                {
                    key: 'start',
                    value: function () {
                        GameGlobal.Module.removeRunDependency('wasm-preloadAssets'), GameGlobal.Module.processRawData();
                    }
                },
                {
                    key: 'loadPreloadData',
                    value: function () {
                        var e = this;
                        return new Promise(function (a, t) {
                            var n = GameGlobal.DATA_PATH;
                            return (e.gameInstance.Module.rawData = uni.getFileSystemManager().readFileSync(n)), a();
                        });
                    }
                }
            ]),
            e
        );
    })();
exports.default = o;
