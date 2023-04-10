var n = {
        audioInstances: [],
        audioContext: {},
        audioWebEnabled: 0,
        audioBufferInstances: []
    },
    e = {
        _JS_Sound_Init: function () {
            n.audioWebEnabled = 0;
        },
        _JS_Sound_Load: function (e, t) {
            for (
                var o = {
                        buffer: null,
                        duration: 0,
                        error: !1
                    },
                    u = -1,
                    a = 0;
                a < n.audioInstances.length;
                ++a
            ) {
                if (!n.audioInstances[a]) {
                    (n.audioInstances[a] = o), (u = a);
                    break;
                }
            }
            -1 == u && (u = n.audioInstances.push(o) - 1);
            var i = -1;
            for (a = 0; a < n.audioBufferInstances.length; ++a) {
                var r = n.audioBufferInstances[a];
                if (r.ptr == e && r.length == t) {
                    (o.buffer = r.filePath), (i = a);
                    break;
                }
            }
            if (
                (-1 == i &&
                    (i =
                        n.audioBufferInstances.push({
                            ptr: e,
                            length: t,
                            filePath: null
                        }) - 1),
                !n.audioBufferInstances[i].filePath)
            )
                if (uni.createBufferURL && uni.createBufferURL instanceof Function) {
                    var f = uni.createBufferURL(GameGlobal.Module.HEAPU8.buffer.slice(e, e + t));
                    (o.buffer = f), (n.audioBufferInstances[i].filePath = f);
                } else {
                    var c = ''.concat(uni.env.USER_DATA_PATH, '/audiowxgameaudio', i);
                    uni.getFileSystemManager().writeFile({
                        filePath: c,
                        data: GameGlobal.Module.HEAPU8.buffer.slice(e, e + t),
                        encoding: 'binary',
                        success: function () {
                            (o.buffer = c), (n.audioBufferInstances[i].filePath = c), console.log('write succ', c);
                        },
                        fail: function (n) {
                            (o.error = !0), console.log('write fail', c, n.errMsg);
                        }
                    });
                }
            return console.log('load sound', u), u;
        },
        _JS_Sound_Create_Channel: function (e, t) {
            for (var o = -1, u = 0; u < n.audioInstances.length; ++u) {
                if (!n.audioInstances[u]) {
                    (n.audioContext[u] = uni.createInnerAudioContext()), (o = u);
                    break;
                }
            }
            return -1 == o && (o = n.audioInstances.push(uni.createInnerAudioContext()) - 1), o;
        },
        _JS_Sound_Play: function (t, o, u, a) {
            if ((e._JS_Sound_Stop(o, 0), (i = n.audioInstances[t]).buffer)) {
                var i = n.audioInstances[t],
                    r = n.audioInstances[o];
                (r.src = i.buffer), (i.duration = r.duration), r.play();
            } else console.log('play with null buffer');
        },
        _JS_Sound_SetLoop: function (e, t) {
            n.audioInstances[e].loop = t;
        },
        _JS_Sound_Set3D: function (n, e) {},
        _JS_Sound_Stop: function (e, t) {
            0 == t
                ? (n.audioInstances[e].stop(), (n.audioInstances[e].onEnded = function () {}))
                : setTimeout(function () {
                      n.audioInstances[e].stop();
                  }, t);
        },
        _JS_Sound_SetVolume: function (e, t) {
            n.audioContext.volume = t;
        },
        _JS_Sound_SetPitch: function (n, e) {},
        _JS_Sound_GetLoadState: function (e) {
            var t = n.audioInstances[e];
            return t.buffer ? 0 : t.error ? 2 : 1;
        },
        _JS_Sound_ResumeIfNeeded: function () {
            for (var e in n.audioInstances) e && (e.buffer || (e.paused && e.play()));
        },
        _JS_Sound_GetLength: function (e) {
            return n.audioInstances[e].duration;
        }
    };
Object.defineProperty(canvas, 'clientHeight', {
    get: function () {
        return 1 * window.innerHeight;
    },
    configuarble: !0
}),
    Object.defineProperty(canvas, 'clientWidth', {
        get: function () {
            return 1 * window.innerWidth;
        },
        configuarble: !0
    }),
    Object.defineProperty(document.body, 'clientHeight', {
        get: function () {
            return 1 * window.innerHeight;
        },
        configuarble: !0
    }),
    Object.defineProperty(document.body, 'clientWidth', {
        get: function () {
            return 1 * window.innerWidth;
        },
        configuarble: !0
    }),
    (GameGlobal.UnityAdapter = e);
