var e;
GameGlobal.canvas ? (e = GameGlobal.canvas) : ((e = uni.createCanvas()), (GameGlobal.canvas = e)),
    (e.id = ''),
    (e.style.width = window.innerWidth),
    (e.style.height = window.innerHeight),
    (e.width = window.innerWidth * window.devicePixelRatio),
    (e.height = window.innerHeight * window.devicePixelRatio),
    (e.widthNative = 0),
    (e.heightNative = 0),
    (GameGlobal.globalGL = e.getContext('webgl', {
        alpha: !0
    })),
    (GameGlobal.LOG_START_TIME = Date.now()),
    (GameGlobal.WebAssembly = window.WXWebAssembly),
    (GameGlobal.alert = function (e) {
        console.error(e);
    }),
    (GameGlobal.abort = function (e) {
        console.error(e);
    }),
    (GameGlobal.eventLog = function (e) {
        console.log('[EVENT LOG] ', e);
    });
