

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var fit = require('canvas-fit');
var rxjs = require('rxjs');
var imageJs = require('image-js');
var _ = require('buffer/');
var operators = require('rxjs/operators');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var fit__default = /*#__PURE__*/_interopDefaultLegacy(fit);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var WsHOC = function (Canvas) { return function (_a) {
    var _b = _a.isOn, isOn = _b === void 0 ? true : _b, token = _a.token, websocketURL = _a.websocketURL, robotName = _a.robotName, _c = _a.exchange, exchange = _c === void 0 ? "rgbjpeg" : _c, _d = _a.handleError, handleError = _d === void 0 ? function (error) { console.log({ error: error }); } : _d, props = __rest(_a, ["isOn", "token", "websocketURL", "robotName", "exchange", "handleError"]);
    var _e = React.useState(new Image()), image = _e[0], setImage = _e[1];
    var _f = React.useState(undefined), websocket = _f[0], setWebsocket = _f[1];
    var connectWebsocket = function () {
        if (websocket !== undefined) {
            websocket.onopen = function () {
                var controlPacket = {
                    command: 'pull',
                    exchange: exchange,
                    accessToken: token,
                    robot_name: robotName
                };
                websocket.send(JSON.stringify(controlPacket));
            };
            websocket.onmessage = function (ev) { return __awaiter(void 0, void 0, void 0, function () {
                var data, dataType, _a, lengths, _b, jpgBlob;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 5, , 6]);
                            data = ev.data;
                            _a = Uint8Array.bind;
                            return [4 /*yield*/, data.slice(0, 1).arrayBuffer()];
                        case 1:
                            dataType = new (_a.apply(Uint8Array, [void 0, _c.sent()]))()[0];
                            if (!(dataType === 2)) return [3 /*break*/, 3];
                            _b = Uint32Array.bind;
                            return [4 /*yield*/, data.slice(1, 13).arrayBuffer()];
                        case 2:
                            lengths = new (_b.apply(Uint32Array, [void 0, _c.sent()]))();
                            jpgBlob = data.slice(9, 9 + lengths[0]);
                            jpgBlob.arrayBuffer().then(function (val) {
                                var imData = {
                                    data: Buffer.from(val),
                                    type: 'image/jpg'
                                };
                                var newImg = new Image();
                                var buf = imData.data.toString('base64');
                                newImg.src = "data:" + imData.type + ";base64," + buf;
                                newImg.onload = function () {
                                    setImage(newImg);
                                };
                            });
                            return [3 /*break*/, 4];
                        case 3:
                            data.arrayBuffer().then(function (val) {
                                var imData = {
                                    data: Buffer.from(val),
                                    type: 'image/jpg'
                                };
                                var newImg = new Image();
                                var buf = imData.data.toString('base64');
                                newImg.src = "data:" + imData.type + ";base64," + buf;
                                newImg.onload = function () {
                                    setImage(newImg);
                                };
                            });
                            _c.label = 4;
                        case 4: return [3 /*break*/, 6];
                        case 5:
                            _c.sent();
                            handleError(ev.data);
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                });
            }); };
            websocket.onclose = function (ev) {
                console.log('Socket is closed. Reconnect will be attempted.', ev.reason);
                if (ev.reason !== 'stay down') {
                    connectWebsocket();
                    setWebsocket(new WebSocket(websocketURL));
                }
                else {
                    setWebsocket(undefined);
                }
            };
            websocket.onerror = function (ev) {
                handleError(ev);
            };
        }
    };
    React.useEffect(function () {
        websocket && connectWebsocket();
    }, [websocket]);
    React.useEffect(function () {
        websocket && websocket.close(1000, "stay down");
        if (!isOn) {
            setWebsocket(undefined);
            setImage(new Image());
        }
        else {
            setWebsocket(new WebSocket(websocketURL));
        }
    }, [robotName, exchange, token, isOn]);
    return React__default["default"].createElement(Canvas, __assign({ image: image }, props));
}; };

var ReactRgbStream = function (_a) {
    var _b = _a.posX, posX = _b === void 0 ? 0 : _b, _c = _a.posY, posY = _c === void 0 ? 0 : _c, width = _a.width, height = _a.height, _d = _a.placeholderText, placeholderText = _d === void 0 ? 'No Image' : _d, _e = _a.image, image = _e === void 0 ? new Image() : _e;
    var canvasRef = React.useRef(null);
    var canvasDraw = function () {
        var canvas = canvasRef.current;
        if (canvas) {
            var context = canvas.getContext('2d');
            context && context.drawImage(image, posX, posY, width, height);
        }
    };
    var drawPlaceholder = function () {
        var canvas = canvasRef.current;
        if (canvas) {
            var context = canvas.getContext('2d');
            if (context) {
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.fillStyle = '#d3d3d3';
                context.textAlign = 'center';
                context.font = '5em Arial';
                context.textBaseline = 'middle';
                context.fillText(placeholderText, canvas.width / 2, canvas.height / 2);
            }
        }
    };
    React.useEffect(function () {
        if (image.src) {
            canvasDraw();
        }
        else {
            drawPlaceholder();
        }
    }, [image]);
    return React__default["default"].createElement("canvas", { ref: canvasRef, width: width, height: height });
};
var ReactRgbStream$1 = WsHOC(ReactRgbStream);

var RembrainImage = function (_a) {
    var token = _a.token, url = _a.url, width = _a.width, height = _a.height, _b = _a.alt, alt = _b === void 0 ? "Image" : _b, _c = _a.onLoad, onLoad = _c === void 0 ? function () { } : _c, _d = _a.onError, onError = _d === void 0 ? function () { } : _d;
    var _e = React.useState(""), src = _e[0], setSrc = _e[1];
    React.useEffect(function () {
        if (url) {
            fetch(url, { headers: { Authorization: token } }).then(function (resp) {
                resp.blob().then(function (blobResp) {
                    var data = blobResp;
                    var urlCreator = window.URL || window.webkitURL;
                    var objectUrl = urlCreator.createObjectURL(data);
                    setSrc(objectUrl);
                });
            }).catch(onError);
        }
    }, [url]);
    return (React__default["default"].createElement("img", { onLoad: onLoad, src: src && src, id: 'rembrainImage', className: 'rembrain-image', width: width, height: height, alt: alt ? alt : '' }));
};

var ReactResponsiveRgbStream = function (_a) {
    var token = _a.token, websocketURL = _a.websocketURL, robotName = _a.robotName, _b = _a.handleError, handleError = _b === void 0 ? function () { } : _b, maxWidth = _a.maxWidth, minWidth = _a.minWidth, aspectRatio = _a.aspectRatio, _c = _a.isOn, isOn = _c === void 0 ? true : _c, _d = _a.placeholderText, placeholderText = _d === void 0 ? 'No Image' : _d, _e = _a.exchange, exchange = _e === void 0 ? 'rgbjpeg' : _e;
    var resizeTimeout;
    var _f = React.useState(new Image()), image = _f[0], setImage = _f[1];
    var _g = React.useState(false), drawing = _g[0], setDrawing = _g[1];
    var _h = React.useState(undefined), websocket = _h[0], setWebsocket = _h[1];
    var canvasRef = React.useRef(null);
    var draw = function () {
        var canvas = canvasRef.current;
        if (canvas) {
            var ctx = canvas.getContext('2d');
            ctx && ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        }
    };
    var connectWebsocket = function () {
        if (websocket !== undefined) {
            websocket.onopen = function () {
                var controlPacket = {
                    command: 'pull',
                    exchange: exchange,
                    accessToken: token,
                    robot_name: robotName
                };
                websocket.send(JSON.stringify(controlPacket));
            };
            websocket.onmessage = function (ev) { return __awaiter(void 0, void 0, void 0, function () {
                var data, dataType, _a, lengths, _b, jpgBlob;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 5, , 6]);
                            data = ev.data;
                            _a = Uint8Array.bind;
                            return [4 /*yield*/, data.slice(0, 1).arrayBuffer()];
                        case 1:
                            dataType = new (_a.apply(Uint8Array, [void 0, _c.sent()]))()[0];
                            if (!(dataType == 2)) return [3 /*break*/, 3];
                            _b = Uint32Array.bind;
                            return [4 /*yield*/, data.slice(1, 13).arrayBuffer()];
                        case 2:
                            lengths = new (_b.apply(Uint32Array, [void 0, _c.sent()]))();
                            jpgBlob = data.slice(9, 9 + lengths[0]);
                            jpgBlob.arrayBuffer().then(function (val) {
                                var imData = {
                                    data: Buffer.from(val),
                                    type: 'image/jpg'
                                };
                                var newImg = new Image();
                                var buf = imData.data.toString('base64');
                                newImg.src = "data:" + imData.type + ";base64," + buf;
                                newImg.onload = function () {
                                    setImage(newImg);
                                };
                            });
                            return [3 /*break*/, 4];
                        case 3:
                            data.arrayBuffer().then(function (val) {
                                var imData = {
                                    data: Buffer.from(val),
                                    type: 'image/jpg'
                                };
                                var newImg = new Image();
                                var buf = imData.data.toString('base64');
                                newImg.src = "data:" + imData.type + ";base64," + buf;
                                newImg.onload = function () {
                                    setImage(newImg);
                                };
                            });
                            _c.label = 4;
                        case 4: return [3 /*break*/, 6];
                        case 5:
                            _c.sent();
                            handleError(ev.data);
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                });
            }); };
            websocket.onclose = function (ev) {
                console.log('Socket is closed. Reconnect will be attempted.', ev.reason);
                setWebsocket(new WebSocket(websocketURL));
                connectWebsocket();
            };
            websocket.onerror = function (ev) {
                handleError(ev);
                websocket.close();
            };
        }
    };
    var handleResize = function () {
        clearTimeout(resizeTimeout);
        setDrawing(false);
        resizeTimeout = setTimeout(function () {
            var canvas = canvasRef.current;
            if (canvas) {
                fit__default["default"](canvas);
                setDrawing(true);
                if (!image.src) {
                    drawPlaceholder();
                }
            }
        }, 500);
    };
    React.useEffect(function () {
        websocket && connectWebsocket();
        return function () {
            if (websocket) {
                websocket.onclose = function () { };
                websocket.close();
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [websocket]);
    var drawPlaceholder = function () {
        var canvas = canvasRef.current;
        if (canvas) {
            var context = canvas.getContext('2d');
            if (context) {
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.fillStyle = '#d3d3d3';
                context.textAlign = 'center';
                context.font = '5em Arial';
                context.textBaseline = 'middle';
                context.fillText(placeholderText, canvas.width / 2, canvas.height / 2);
            }
        }
    };
    React.useEffect(function () {
        websocket && websocket.close();
        setImage(new Image());
        drawPlaceholder();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [robotName, exchange, token]);
    React.useEffect(function () {
        if (!isOn) {
            setImage(new Image());
            if (websocket) {
                websocket.onclose = function () { };
                websocket.close();
            }
        }
        else {
            setWebsocket(new WebSocket(websocketURL));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOn]);
    React.useEffect(function () {
        var canvas = canvasRef.current;
        if (canvas) {
            fit__default["default"](canvas);
            draw();
            setDrawing(true);
            window.addEventListener('resize', handleResize, false);
        }
        return function () {
            window.removeEventListener('resize', handleResize, false);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    React.useEffect(function () {
        draw();
        if (!image.src) {
            drawPlaceholder();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [image]);
    return (React__default["default"].createElement("div", { style: {
            aspectRatio: aspectRatio.toString(),
            maxWidth: maxWidth,
            minWidth: minWidth,
            padding: 0,
            margin: 0,
            position: 'relative'
        } },
        React__default["default"].createElement("canvas", { style: drawing ? {} : { display: 'none' }, ref: canvasRef })));
};

var Rectangle = /** @class */ (function () {
    function Rectangle(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    Rectangle.fromPoints = function (p1, p2) {
        // Determine topLeft and bottomRight points of the rectangle
        var topLeft = {
            x: Math.min(p1.x, p2.x),
            y: Math.min(p1.y, p2.y)
        };
        var bottomRight = {
            x: Math.max(p1.x, p2.x),
            y: Math.max(p1.y, p2.y)
        };
        return new Rectangle(topLeft.x, topLeft.y, bottomRight.x - topLeft.x, bottomRight.y - topLeft.y);
    };
    Object.defineProperty(Rectangle.prototype, "TopLeft", {
        get: function () {
            return { x: this.x, y: this.y };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "TopRight", {
        get: function () {
            return { x: this.x + this.w, y: this.y };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "BottomLeft", {
        get: function () {
            return { x: this.x, y: this.y + this.h };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "BottomRight", {
        get: function () {
            return { x: this.x + this.w, y: this.y + this.h };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "Center", {
        get: function () {
            return { x: this.x + this.w * 0.5, y: this.y + this.h * 0.5 };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "CenterTop", {
        get: function () {
            return { x: this.x + this.w * 0.5, y: this.y };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "CenterBottom", {
        get: function () {
            return { x: this.x + this.w * 0.5, y: this.y + this.h };
        },
        enumerable: false,
        configurable: true
    });
    return Rectangle;
}());

var WebSocketImageReceiver = /** @class */ (function () {
    function WebSocketImageReceiver(settings) {
        var _this = this;
        this.imageSubject = new rxjs.ReplaySubject(1);
        this.depthSubject = new rxjs.ReplaySubject(1);
        this.dataSubject = new rxjs.ReplaySubject(1);
        this.onDataOpen = function (ev) {
            console.log('Data Websocket Opened', ev);
            _this.sendDataInitPacket();
        };
        this.onDataClosed = function (ev) {
            console.log('Data Websocket Closed', ev);
            console.log('Trying to open the websocket again');
            _this.openDataWebsocket();
        };
        this.onDataError = function (ev) {
            console.log('Data Websocket Error', ev);
        };
        this.onDataMessage = function (ev) {
            _this.unpackData(ev.data);
        };
        this.stateSubject = new rxjs.ReplaySubject(1);
        this.onStateClosed = function (ev) {
            console.log('State Websocket Closed', ev);
            console.log('Trying to open the websocket again');
            _this.openStateWebsocket();
        };
        this.onStateOpen = function (ev) {
            console.log('State Websocket Opened', ev);
            _this.sendStateInitPacket();
        };
        this.onStateError = function (ev) {
            console.log('State Websocket Error', ev);
        };
        this.onStateMessage = function (ev) {
            _this.unpackState(ev.data);
        };
        this.dataURL = settings.dataWSUrl;
        this.robotName = settings.robotName;
        this.accessToken = settings.accessToken;
        this.openDataWebsocket();
        this.openStateWebsocket();
    }
    WebSocketImageReceiver.prototype.openDataWebsocket = function () {
        this.dataWebsocket = new WebSocket(this.dataURL);
        this.dataWebsocket.onopen = this.onDataOpen;
        this.dataWebsocket.onclose = this.onDataClosed;
        this.dataWebsocket.onerror = this.onDataError;
        this.dataWebsocket.onmessage = this.onDataMessage;
    };
    WebSocketImageReceiver.prototype.sendDataInitPacket = function () {
        var controlPacket = {
            command: 'pull',
            exchange: "camera0",
            robot_name: this.robotName,
            accessToken: this.accessToken
        };
        // console.log("Sending", controlPacket);
        this.dataWebsocket.send(JSON.stringify(controlPacket));
    };
    WebSocketImageReceiver.prototype.unpackData = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var dataType, _a, HEADER_END, lengths, _b, imageBlob, depthBlob, statusBlob;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (typeof data === 'string') {
                            console.error('Error unpacking video feed:', data);
                            return [2 /*return*/];
                        }
                        _a = Uint8Array.bind;
                        return [4 /*yield*/, data.slice(0, 1).arrayBuffer()];
                    case 1:
                        dataType = new (_a.apply(Uint8Array, [void 0, _c.sent()]))()[0];
                        if (!(dataType != 1)) return [3 /*break*/, 2];
                        console.log("Data type " + dataType + " isn't JPG+PNG(1)");
                        return [3 /*break*/, 4];
                    case 2:
                        HEADER_END = 13;
                        _b = Uint32Array.bind;
                        return [4 /*yield*/, data.slice(1, HEADER_END).arrayBuffer()];
                    case 3:
                        lengths = new (_b.apply(Uint32Array, [void 0, _c.sent()]))();
                        imageBlob = data.slice(HEADER_END, HEADER_END + lengths[0]);
                        depthBlob = data.slice(HEADER_END + lengths[0], HEADER_END + lengths[0] + lengths[1]);
                        statusBlob = data.slice(HEADER_END + lengths[0] + lengths[1], HEADER_END + lengths[0] + lengths[1] + lengths[2]);
                        imageBlob.arrayBuffer().then(function (val) {
                            var imData = {
                                data: _.Buffer.from(val),
                                type: 'image/jpg'
                            };
                            _this.imageSubject.next(imData);
                        }, function (err) { return console.log('Error while sending image:', err); });
                        depthBlob
                            .arrayBuffer()
                            .then(function (val) { return imageJs.Image.load(val); }, function (err) { return console.log('Error while loading depth map: ', err); })
                            .then(function (depth) {
                            if (!depth)
                                return;
                            _this.depthSubject.next(depth);
                        });
                        statusBlob.text().then(function (val) { return _this.dataSubject.next(JSON.parse(val)); }, function (err) { return console.log('Error while getting status:', err); });
                        _c.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    WebSocketImageReceiver.prototype.openStateWebsocket = function () {
        this.stateWebsocket = new WebSocket(this.dataURL);
        this.stateWebsocket.onopen = this.onStateOpen;
        this.stateWebsocket.onclose = this.onStateClosed;
        this.stateWebsocket.onerror = this.onStateError;
        this.stateWebsocket.onmessage = this.onStateMessage;
    };
    WebSocketImageReceiver.prototype.sendStateInitPacket = function () {
        var controlPacket = {
            command: 'pull',
            exchange: "state",
            robot_name: this.robotName,
            accessToken: this.accessToken
        };
        this.stateWebsocket.send(JSON.stringify(controlPacket));
    };
    WebSocketImageReceiver.prototype.unpackState = function (data) {
        var _this = this;
        if (typeof data === 'string') {
            console.error('Error unpacking robot state:', data);
            return;
        }
        data.text().then(function (res) { return _this.stateSubject.next(JSON.parse(res)); });
    };
    WebSocketImageReceiver.prototype.shutdown = function () {
        this.dataWebsocket.onclose = null;
        this.stateWebsocket.onclose = null;
        this.dataWebsocket.close();
        this.stateWebsocket.close();
    };
    return WebSocketImageReceiver;
}());

var NetworkOperator = /** @class */ (function () {
    function NetworkOperator(settings) {
        var _this = this;
        // private hasSentCommand = false;
        this.messageQueue = [];
        this.onWSClosed = function (ev) {
            console.debug('Command Websocket Closed', ev);
            console.debug('Trying to open the websocket again');
            _this.openWebsocket();
        };
        this.onWSOpen = function (ev) {
            console.debug('Command Websocket Opened', ev);
            // this.hasSentCommand = false;
            if (_this.messageQueue.length) {
                console.log('There are unsent messages in the queue, sending them');
                _this.sendQueuedCommands();
            }
        };
        this.onWSError = function (ev) {
            console.log('Command Websocket Error', ev);
        };
        this.onWSMessage = function (ev) {
            _this.unpackData(ev.data);
        };
        this.settings = settings;
        this.openWebsocket();
    }
    NetworkOperator.prototype.enqueueCommand = function (command) {
        var messageObj = {
            command: 'push',
            exchange: "commands",
            robot_name: this.settings.robotName,
            message: command,
            accessToken: this.settings.accessToken
        };
        console.log('Enqueuing command:', command);
        this.messageQueue.push(messageObj);
        this.sendQueuedCommands();
    };
    NetworkOperator.prototype.sendQueuedCommands = function () {
        if (this.messageQueue.length == 0)
            return;
        // sending commands one by one, since the websocket closes after each one
        while (this.messageQueue.length &&
            this.commandWebsocket.readyState === WebSocket.OPEN) {
            var command = this.messageQueue.shift();
            console.debug('Sending:', command);
            this.commandWebsocket.send(JSON.stringify(command));
        }
    };
    NetworkOperator.prototype.openWebsocket = function () {
        this.commandWebsocket = new WebSocket(this.settings.dataWSUrl);
        this.commandWebsocket.onopen = this.onWSOpen;
        this.commandWebsocket.onclose = this.onWSClosed;
        this.commandWebsocket.onerror = this.onWSError;
        this.commandWebsocket.onmessage = this.onWSMessage;
    };
    NetworkOperator.prototype.unpackData = function (data) {
        if (typeof data === 'string') {
            console.error('Error on sending command: ', data);
            return;
        }
        data.text().then(function (res) { return console.log(JSON.parse(res)); });
    };
    NetworkOperator.prototype.shutdown = function () {
        this.commandWebsocket.onclose = null;
        this.commandWebsocket.close();
        this.commandWebsocket = null;
    };
    return NetworkOperator;
}());

var CommandSettings = /** @class */ (function () {
    function CommandSettings() {
        this.source = "operator";
    }
    CommandSettings.getInstance = function () {
        if (!CommandSettings.instance) {
            CommandSettings.instance = new CommandSettings();
        }
        return CommandSettings.instance;
    };
    return CommandSettings;
}());
var CommandBase = /** @class */ (function () {
    function CommandBase(op, robotStatus) {
        this.source = CommandSettings.getInstance().source;
        this.timestamp = Date.now();
        this.op = op;
        this.frame_timestamp = robotStatus.frameindex;
        this.timestamp = robotStatus.time;
    }
    return CommandBase;
}());

var CommandGoto = /** @class */ (function (_super) {
    __extends(CommandGoto, _super);
    function CommandGoto(robotStatus, selectionPoint, selectionArea, depthValAtSelection) {
        var _this = _super.call(this, "goto", robotStatus) || this;
        _this.pick_point = undefined;
        _this.pos = undefined;
        _this.object_rect = undefined;
        if (selectionPoint) {
            _this.pick_point = [selectionPoint.x, selectionPoint.y];
        }
        if (selectionArea) {
            _this.object_rect = [
                [selectionArea.TopLeft.x, selectionArea.TopLeft.y],
                [selectionArea.BottomRight.x, selectionArea.BottomRight.y]
            ];
        }
        if (depthValAtSelection && selectionPoint) {
            var z = depthValAtSelection * robotStatus.depth_unit;
            if (z) {
                var x = (selectionPoint.x - robotStatus.ppx) * z / robotStatus.fx;
                var y = (selectionPoint.y - robotStatus.ppy) * z / robotStatus.fy;
                _this.pos = [x, y, z];
            }
        }
        return _this;
    }
    return CommandGoto;
}(CommandBase));

var CommandSetTag = /** @class */ (function (_super) {
    __extends(CommandSetTag, _super);
    function CommandSetTag(tag_id, robotStatus) {
        var _this = _super.call(this, "calibration/set-tag", robotStatus) || this;
        _this.tag_id = tag_id;
        return _this;
    }
    return CommandSetTag;
}(CommandBase));

var CommandWaitForIdle = /** @class */ (function (_super) {
    __extends(CommandWaitForIdle, _super);
    function CommandWaitForIdle(robotStatus) {
        return _super.call(this, "wait-for-idle", robotStatus) || this;
    }
    return CommandWaitForIdle;
}(CommandBase));

var CommandSetJoints = /** @class */ (function (_super) {
    __extends(CommandSetJoints, _super);
    function CommandSetJoints(joints, robotStatus) {
        var _this = _super.call(this, "setJ", robotStatus) || this;
        _this.joints = joints;
        return _this;
    }
    return CommandSetJoints;
}(CommandBase));

// import { IImageReceiver } from "./image-receiver";
// import { NetworkOperator } from "./network-operator";
var OperatorCanvas = /** @class */ (function (_super) {
    __extends(OperatorCanvas, _super);
    function OperatorCanvas(props) {
        var _this = _super.call(this, props) || this;
        _this.robotState = undefined;
        _this.hasImage = false;
        _this.img = document.createElement("img");
        _this.subscriptions = [];
        _this.selectionSubject = new rxjs.BehaviorSubject(undefined);
        _this.releaseEventHandler = function (e) {
            // If right click was pressed - ignore
            if (e.button == 2) {
                return;
            }
            // Finish selection
            _this.selectionStart = null;
            if (_this.selection) {
                // Sending out that we have finished the selection to subscribers
                _this.selectionSubject.next(_this.selection);
                _this.medianPoint = _this.selection.Center;
            }
            _this.redraw();
        };
        _this.keyPressEventHandler = function (e) {
            if (e.key == " ") {
                _this.sendCommand();
            }
        };
        _this.pressEventHandler = function (e) {
            var point = _this.getXY(e);
            if (e.button == 2) {
                // right click - change median point
                _this.medianPoint = point;
                _this.redrawDepth(_this.selection);
            }
            else {
                // Left click or tap
                // restart selection process
                _this.selection = null;
                _this.selectionStart = point;
            }
            _this.redraw();
        };
        _this.dragEventHandler = function (e) {
            var point = _this.getXY(e);
            _this.mousePos = point;
            // if we're currently selecting, refresh selection
            if (_this.selectionStart) {
                _this.selection = Rectangle.fromPoints(_this.selectionStart, point);
            }
            _this.redraw();
            e.preventDefault();
        };
        _this.settings = {
            dataWSUrl: props.dataWSUrl,
            robotName: props.robotName,
            accessToken: props.accessToken,
        };
        _this.canvasRef = React__namespace.createRef();
        return _this;
    }
    OperatorCanvas.prototype.render = function () {
        return (React__namespace.createElement("canvas", { ref: this.canvasRef, width: "1280", height: "720", onContextMenu: function (e) { e.preventDefault(); }, tabIndex: 1, onMouseDown: this.pressEventHandler, onMouseMove: this.dragEventHandler, onMouseUp: this.releaseEventHandler, onKeyUp: this.keyPressEventHandler }));
    };
    OperatorCanvas.prototype.componentDidMount = function () {
        var _this = this;
        this.depthCanvas = document.createElement("canvas");
        this.depthCanvas.width = 1280;
        this.depthCanvas.height = 720;
        this._imageReceiver = new WebSocketImageReceiver(this.settings);
        this._networkOperator = new NetworkOperator(this.settings);
        this.img.onload = function () { return _this.redraw(); };
        // Subscribing to all the required observables
        this.subscriptions.push(this.selectionSubject.subscribe(function (s) { return _this.redrawDepth(s); }), this._imageReceiver.imageSubject.subscribe(function (d) { return _this.setVideoFeed(d); }), this._imageReceiver.depthSubject.subscribe(function (d) { return _this.setDepthData(d); }), this._imageReceiver.dataSubject.subscribe(function (d) { return _this.updateStatus(d); }), this._imageReceiver.stateSubject
            .pipe(operators.distinctUntilKeyChanged("state_machine"), operators.throttleTime(1000)).subscribe(function (d) { return _this.updateState(d); }));
    };
    OperatorCanvas.prototype.componentWillUnmount = function () {
        var _a, _b;
        (_a = this._imageReceiver) === null || _a === void 0 ? void 0 : _a.shutdown();
        (_b = this._networkOperator) === null || _b === void 0 ? void 0 : _b.shutdown();
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
        this.subscriptions = [];
    };
    OperatorCanvas.prototype.setVideoFeed = function (imageData) {
        // Assuming we are getting PNG for now
        if (imageData === undefined) {
            this.hasImage = false;
            return;
        }
        this.hasImage = true;
        var buf = imageData.data.toString('base64');
        this.img.src = "data:" + imageData.type + ";base64," + buf;
    };
    OperatorCanvas.prototype.setDepthData = function (depthData) {
        this.depthData = depthData;
        this.redrawDepth(this.selection);
        this.redraw();
    };
    OperatorCanvas.prototype.updateStatus = function (status) {
        this.robotData = status;
    };
    OperatorCanvas.prototype.updateState = function (state) {
        this.robotState = state;
        this.redraw();
    };
    OperatorCanvas.prototype.redraw = function () {
        var canvas = this.canvasRef.current;
        if (canvas) {
            var ctx = canvas.getContext("2d");
            if (this.hasImage) {
                // Base: image from the robot
                ctx.drawImage(this.img, 0, 0);
                // Compositing depth calculation on top
                ctx.save();
                ctx.globalCompositeOperation = "screen";
                ctx.drawImage(this.depthCanvas, 0, 0);
                ctx.restore();
                // Selection area
                if (this.selection) {
                    this.SetCanvasStyle(ctx, StrokeStyle.SelectionRectangle);
                    var rect = this.selection;
                    this.doCanvasRect(ctx, CanvasAction.Stroke, rect);
                }
                // Median point
                if (this.medianPoint) {
                    this.SetCanvasStyle(ctx, StrokeStyle.MedianPoint);
                    ctx.beginPath();
                    ctx.arc(this.medianPoint.x, this.medianPoint.y, 10, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                }
                // Crosshair
                if (this.mousePos) {
                    this.SetCanvasStyle(ctx, StrokeStyle.Crosshair);
                    // horizontal line
                    ctx.beginPath();
                    ctx.moveTo(0, this.mousePos.y);
                    ctx.lineTo(canvas.width, this.mousePos.y);
                    ctx.stroke();
                    ctx.closePath();
                    // vertical line
                    ctx.beginPath();
                    ctx.moveTo(this.mousePos.x, 0);
                    ctx.lineTo(this.mousePos.x, canvas.height);
                    ctx.stroke();
                    ctx.closePath();
                }
            }
            else {
                this.SetCanvasStyle(ctx, StrokeStyle.NoImage_BG);
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                var canvasRect = new Rectangle(0, 0, canvas.width, canvas.height);
                this.SetCanvasStyle(ctx, StrokeStyle.NoImage_Text);
                ctx.fillText("No Image", canvasRect.Center.x, canvasRect.Center.y);
            }
            // Plaque with robot's status
            this.SetCanvasStyle(ctx, StrokeStyle.PlaqueBackground);
            var plaqueWidth = 500;
            var plaqueHeight = 60;
            var plaqueRect = new Rectangle((canvas.offsetWidth - plaqueWidth) / 2, canvas.offsetHeight - plaqueHeight, plaqueWidth, plaqueHeight);
            this.doCanvasRect(ctx, CanvasAction.Fill, plaqueRect);
            // Text of robot's status
            if (this.robotState) {
                var state = this.robotState.state_machine;
                this.SetCanvasStyle(ctx, StrokeStyle.PlaqueText);
                ctx.fillText(state, plaqueRect.Center.x, plaqueRect.Center.y);
            }
            // Border
            this.SetCanvasStyle(ctx, StrokeStyle.Border);
            ctx.strokeRect(0, 0, canvas.width, canvas.height);
        }
    };
    // Redraws the depth calculation
    OperatorCanvas.prototype.redrawDepth = function (selection) {
        // In the process of selection - skip
        if (this.selectionStart || (!this.medianPoint))
            return;
        var depthCanvas = this.depthCanvas;
        var ctx = depthCanvas.getContext("2d");
        ctx.clearRect(0, 0, depthCanvas.width, depthCanvas.height);
        var imageCanvas = this.canvasRef.current;
        // No selection or no depth data - skip
        if (!selection || !this.depthData)
            return;
        // clamping selection to edges so we don't crop outside the range accidentally
        if (selection.x + selection.w > imageCanvas.width) {
            selection.w = imageCanvas.width - selection.x;
        }
        if (selection.y + selection.h > imageCanvas.height) {
            selection.h = imageCanvas.height - selection.y;
        }
        // not handling empty selections
        if (this.selection.w * this.selection.h == 0)
            return;
        var cropped_depth = this.depthData.crop({
            x: selection.x,
            y: selection.y,
            width: selection.w,
            height: selection.h
        });
        var median = this.getMedianForPoint(this.depthData, this.medianPoint);
        this.medianPointValue = median;
        // get the map we'd use for pixels that are close to the median
        var colorMap = this.calculateDepthDevColors(median, 30);
        var nChannels = 4;
        // calculate the ImageData that we will draw
        var pixelsToDraw = new Uint8ClampedArray(nChannels * cropped_depth.size);
        var imageData = new ImageData(selection.w, selection.h);
        for (var i = 0; i < cropped_depth.size; i++) {
            var depthPixel = cropped_depth.getPixel(i);
            var value = depthPixel[0];
            if (!colorMap.has(value)) {
                continue;
            }
            var color = colorMap.get(value);
            for (var j = 0; j < 4; j++) {
                pixelsToDraw[i * nChannels + j] = color[j];
            }
        }
        imageData.data.set(pixelsToDraw);
        // Draw it to the canvas
        ctx.putImageData(imageData, selection.x, selection.y);
    };
    OperatorCanvas.prototype.getMedianForPoint = function (image, point) {
        var cropRadius = 10;
        var cropX = point.x - cropRadius / 2;
        if (cropX < 0)
            cropX = 0;
        var cropY = point.y - cropRadius / 2;
        if (cropY < 0)
            cropY = 0;
        var cropW = (cropX + cropRadius < image.width) ? cropRadius : image.width - cropX;
        var cropH = (cropY + cropRadius < image.height) ? cropRadius : image.height - cropY;
        var crop = image.crop({
            x: cropX,
            y: cropY,
            width: cropW,
            height: cropH
        });
        return crop.median[0];
    };
    /**
     * Calculates a gradient of red-yellow-green in the interval
     * [median-spread, median+spread]
     * @param median the median value, that will be, well, in the middle
     * @param spread the spread of the values
     */
    OperatorCanvas.prototype.calculateDepthDevColors = function (median, spread) {
        if (spread === void 0) { spread = 20; }
        var map = new Map();
        var colorNear = [255, 0, 0, 255]; //red
        var colorMedian = [255, 255, 0, 255]; //yellow
        var colorFar = [0, 255, 0, 255]; //green
        // Calculating near-med gradient values
        for (var i = median - spread; i < median; i++) {
            var p = (i - (median - spread)) / spread; // percentage how far along the gradient we are
            var color = [
                colorNear[0] + p * (colorMedian[0] - colorNear[0]),
                colorNear[1] + p * (colorMedian[1] - colorNear[1]),
                colorNear[2] + p * (colorMedian[2] - colorNear[2]),
                255,
            ];
            map.set(i, color);
        }
        // Calculating med-far gradient values
        for (var i = median; i <= median + spread; i++) {
            var p = (i - median) / spread; // percentage how far along the gradient we are
            var color = [
                colorMedian[0] + p * (colorFar[0] - colorMedian[0]),
                colorMedian[1] + p * (colorFar[1] - colorMedian[1]),
                colorMedian[2] + p * (colorFar[2] - colorMedian[2]),
                255,
            ];
            map.set(i, color);
        }
        return map;
    };
    OperatorCanvas.prototype.sendCommand = function () {
        var cmdGoto = new CommandGoto(this.robotData, this.medianPoint, this.selection, this.medianPointValue);
        this._networkOperator.enqueueCommand(cmdGoto);
        var cmdIdle = new CommandWaitForIdle(this.robotData);
        this._networkOperator.enqueueCommand(cmdIdle);
    };
    OperatorCanvas.prototype.getXY = function (e) {
        var mouseX = e.pageX;
        var mouseY = e.pageY;
        mouseX -= this.canvasRef.current.offsetLeft;
        mouseY -= this.canvasRef.current.offsetTop;
        return { x: mouseX, y: mouseY };
    };
    OperatorCanvas.prototype.doCanvasRect = function (ctx, action, rect) {
        var x = rect.x;
        var y = rect.y;
        var w = rect.w;
        var h = rect.h;
        switch (action) {
            case CanvasAction.Fill:
                ctx.fillRect(x, y, w, h);
                break;
            case CanvasAction.Stroke:
                ctx.strokeRect(x, y, w, h);
                break;
        }
    };
    OperatorCanvas.prototype.SetCanvasStyle = function (ctx, style) {
        switch (style) {
            case StrokeStyle.Border:
                ctx.strokeStyle = "green";
                ctx.lineWidth = 20;
                break;
            case StrokeStyle.SelectionRectangle:
                ctx.strokeStyle = "red";
                ctx.lineWidth = 7;
                break;
            case StrokeStyle.PlaqueBackground:
                ctx.fillStyle = "black";
                break;
            case StrokeStyle.PlaqueText:
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillStyle = "white";
                ctx.font = "bold 48px sans-serif";
                break;
            case StrokeStyle.Crosshair:
                ctx.strokeStyle = "white";
                ctx.lineWidth = 2;
                break;
            case StrokeStyle.MedianPoint:
                ctx.fillStyle = "#aaaaaa99";
                ctx.strokeStyle = "#000000bb";
                ctx.lineWidth = 1;
                break;
            case StrokeStyle.NoImage_BG:
                ctx.fillStyle = "#aaaaaa";
                break;
            case StrokeStyle.NoImage_Text:
                ctx.fillStyle = "#eeeeee";
                ctx.font = "bold 200px sans-serif";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                break;
        }
    };
    return OperatorCanvas;
}(React__namespace.Component));
var CanvasAction;
(function (CanvasAction) {
    CanvasAction[CanvasAction["Stroke"] = 0] = "Stroke";
    CanvasAction[CanvasAction["Fill"] = 1] = "Fill";
})(CanvasAction || (CanvasAction = {}));
var StrokeStyle;
(function (StrokeStyle) {
    StrokeStyle[StrokeStyle["Border"] = 0] = "Border";
    StrokeStyle[StrokeStyle["Crosshair"] = 1] = "Crosshair";
    StrokeStyle[StrokeStyle["SelectionRectangle"] = 2] = "SelectionRectangle";
    StrokeStyle[StrokeStyle["PlaqueBackground"] = 3] = "PlaqueBackground";
    StrokeStyle[StrokeStyle["PlaqueText"] = 4] = "PlaqueText";
    StrokeStyle[StrokeStyle["MedianPoint"] = 5] = "MedianPoint";
    StrokeStyle[StrokeStyle["NoImage_BG"] = 6] = "NoImage_BG";
    StrokeStyle[StrokeStyle["NoImage_Text"] = 7] = "NoImage_Text";
})(StrokeStyle || (StrokeStyle = {}));

___$insertStyle(".debug-operator-container {\n  display: flex;\n  flex-direction: row;\n}\n.debug-operator-container .controls {\n  display: inline-flex;\n  vertical-align: top;\n  flex-direction: column-reverse;\n  margin-right: 10px;\n  margin-left: 10px;\n}\n.debug-operator-container .operator-buttons {\n  flex-grow: 1;\n}\n.debug-operator-container .input-container {\n  padding: 5px;\n  margin-bottom: 5px;\n  align-items: center;\n  grid-auto-rows: 25px;\n  grid-row-gap: 5px;\n  grid-column-gap: 5px;\n}\n.debug-operator-container .connection {\n  display: grid;\n  grid-template-columns: 0.7fr 2fr;\n}\n.debug-operator-container .connection > span {\n  text-align: right;\n}\n.debug-operator-container .joint-controls {\n  display: grid;\n  grid-template-columns: 20px repeat(2, 1fr) 100px repeat(2, 1fr);\n  grid-column-gap: 5px;\n  align-items: center;\n}\n.debug-operator-container .joint-controls .joint-num {\n  text-align: right;\n}\n.debug-operator-container .joint-controls .joint-degrees {\n  text-align: center;\n}\n.debug-operator-container .joint-controls + .joint-controls {\n  margin-top: 10px;\n}\n.debug-operator-container .vacuum {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.debug-operator-container .calibration {\n  border-radius: 5px;\n  padding: 5px;\n  margin-bottom: 5px;\n  align-items: center;\n}\n.debug-operator-container .calibration > div + div {\n  margin-top: 10px;\n}\n.debug-operator-container .calibration > .tags {\n  display: grid;\n  grid-auto-rows: 25px;\n  grid-column-gap: 5px;\n}\n.debug-operator-container .btn-send-home {\n  width: 100%;\n  margin-top: 7px;\n  margin-bottom: 7px;\n}\n.debug-operator-container .depth-view {\n  width: 320px;\n  height: 180px;\n}\n.debug-operator-container .camera-view {\n  width: 854px;\n  height: 480px;\n}\n.debug-operator-container .debug-command-container {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n.debug-operator-container .command-item-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  height: max-content !important;\n}\n.debug-operator-container .command-item {\n  margin: 5px;\n  font-size: 1.1em;\n  min-width: 100px;\n  background-color: lightgray;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-content: center;\n  align-items: center;\n  flex-grow: 1;\n  border-radius: 5px;\n  height: max-content !important;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  cursor: pointer;\n}\n.debug-operator-container .command-item > span {\n  margin-left: 10px;\n}\n.debug-operator-container .command-item-icon {\n  filter: brightness(0.9);\n  padding: 7px 12px;\n  display: flex;\n  align-items: center;\n  align-content: center;\n  background-color: lightgray;\n}\n.debug-operator-container .command-input {\n  width: max-content;\n  padding: 6px;\n  border-radius: 5px;\n  height: max-content !important;\n}\n.debug-operator-container .command-input-item {\n  display: flex;\n  flex-direction: column;\n}\n.debug-operator-container .command-input-item > span {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.debug-operator-container .command-item:hover {\n  filter: brightness(0.9);\n}\n.debug-operator-container .debug-operator-info-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}");

var OperatorDebug = /** @class */ (function (_super) {
    __extends(OperatorDebug, _super);
    function OperatorDebug(props) {
        var _this = _super.call(this, props) || this;
        _this.subscriptions = [];
        _this.lastFrameDate = Date.now();
        _this.radianToDegrees = function (rad) { return rad * 180 / Math.PI; };
        _this.degreesToRadian = function (deg) { return deg * Math.PI / 180; };
        _this.sendOp = function (op) { return _this._networkOperator.enqueueCommand(new CommandBase(op, _this.robotData)); };
        _this.sendOpClosure = function (op) { return function () { return _this.sendOp(op); }; };
        var tags = [6, 8, 11, 12];
        var tagSets = {};
        tags.map(function (t) { return tagSets[t] = false; });
        _this.state = {
            wsUrl: _this.props.dataWSUrl,
            robotName: _this.props.robotName,
            accessToken: _this.props.accessToken,
            fps: 0,
            depthData: undefined,
            imageData: undefined,
            connected: false,
            isCalibrating: false,
            tagsCalibrated: tagSets,
            joints: [],
            commandList: [],
            commandNameInput: "",
            commandOpInput: "",
            state_machine: ""
        };
        return _this;
    }
    OperatorDebug.prototype.connectionSettingChanged = function (e) {
        var _a;
        this.setState(__assign(__assign({}, this.state), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    OperatorDebug.prototype.componentWillUnmount = function () {
        this.disconnect();
    };
    OperatorDebug.prototype.componentDidMount = function () {
        this.connect();
        var commands = JSON.parse(localStorage.getItem("rembrain_debug_operator_commands"));
        commands && this.setState({ commandList: commands });
    };
    OperatorDebug.prototype.addCommand = function () {
        var _a = this.state, name = _a.commandNameInput, op = _a.commandOpInput;
        if (name && op) {
            var newList = __spreadArrays(this.state.commandList, [{ name: name, op: op }]);
            this.setState({ commandList: newList });
            localStorage.setItem("rembrain_debug_operator_commands", JSON.stringify(newList));
            this.setState({ commandNameInput: "", commandOpInput: "" });
        }
    };
    OperatorDebug.prototype.removeCommand = function (name) {
        var idx = this.state.commandList.findIndex(function (el) { return el.name === name; });
        var commandList = this.state.commandList;
        var newList = __spreadArrays(commandList.slice(0, idx), commandList.slice(idx + 1));
        this.setState({ commandList: newList });
        localStorage.setItem("rembrain_debug_operator_commands", JSON.stringify(newList));
    };
    OperatorDebug.prototype.connect = function () {
        var _this = this;
        // console.log(this.state);
        var settings = {
            accessToken: this.state.accessToken,
            dataWSUrl: this.state.wsUrl,
            robotName: this.state.robotName
        };
        var netop = new NetworkOperator(settings);
        var imgrec = new WebSocketImageReceiver(settings);
        this.subscriptions.push(imgrec.imageSubject.subscribe(function (camera) { return _this.gotCameraData(camera); }));
        this.subscriptions.push(imgrec.depthSubject.subscribe(function (depth) { return _this.gotDepthData(depth); }));
        this.subscriptions.push(imgrec.stateSubject.subscribe(function (state) { return _this.gotRobotState(state); }));
        this.subscriptions.push(imgrec.dataSubject.subscribe(function (data) { return _this.gotRobotData(data); }));
        this._imageReceiver = imgrec;
        this._networkOperator = netop;
        this.setState({ connected: true });
    };
    OperatorDebug.prototype.disconnect = function () {
        var _a, _b;
        (_a = this._networkOperator) === null || _a === void 0 ? void 0 : _a.shutdown();
        (_b = this._imageReceiver) === null || _b === void 0 ? void 0 : _b.shutdown();
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
        this.subscriptions = [];
        this.setState({
            connected: false,
            isCalibrating: false,
            joints: [],
        });
    };
    OperatorDebug.prototype.gotCameraData = function (cameraData) {
        if (cameraData === undefined)
            return;
        var buf = cameraData.data.toString('base64');
        this.setState({ imageData: "data:" + cameraData.type + ";base64," + buf });
        this.recalculateFPS();
    };
    OperatorDebug.prototype.recalculateFPS = function () {
        var newFrameDate = Date.now();
        var delta = newFrameDate - this.lastFrameDate;
        var fps = 1000 / delta;
        this.lastFrameDate = newFrameDate;
        this.setState({ fps: fps });
    };
    OperatorDebug.prototype.gotDepthData = function (depthData) {
        var type = "image/png";
        depthData.multiply(64); // Multiply by 2**8 to move it from 16bit to browser-visible 8bit space
        var buf = depthData.toBase64();
        this.setState({ depthData: "data:" + type + ";base64," + buf });
    };
    OperatorDebug.prototype.gotRobotState = function (state) {
        if (state === undefined)
            return;
        // console.log("State:", state);
        this.robotState = state;
        if (this.robotState.joints) {
            this.setState({ joints: state.joints, state_machine: state.state_machine });
        }
    };
    OperatorDebug.prototype.gotRobotData = function (data) {
        if (data === undefined)
            return;
        // console.log("Data:", data);
        this.robotData = data;
    };
    OperatorDebug.prototype.calibrationStart = function () {
        this.sendOp("ask_for_manual");
        this.sendOp("calibration/tag_detection");
        this.resetTagState();
        this.setState({ isCalibrating: true });
    };
    OperatorDebug.prototype.canFinishCalibration = function () {
        if (!this.state.isCalibrating)
            return false;
        var tags = this.state.tagsCalibrated;
        var unset = Object.keys(tags).filter(function (t) { return !tags[t]; });
        return unset.length == 0;
    };
    OperatorDebug.prototype.finishCalibration = function () {
        this.sendOp("calibartion/tag_calibration");
        this.sendOp("ask_for_idle");
        this.resetTagState();
        this.setState({ isCalibrating: false });
    };
    OperatorDebug.prototype.resetTagState = function () {
        var tags = this.state.tagsCalibrated;
        Object.keys(tags).forEach(function (t) { return tags[t] = false; });
        this.setState({ tagsCalibrated: tags });
    };
    OperatorDebug.prototype.detectCalibrationTags = function () {
        this.sendOp("calibration/tag_detection");
    };
    OperatorDebug.prototype.tagClicked = function (tag) {
        // Send the command
        var cmd = new CommandSetTag(Number(tag), this.robotData);
        this._networkOperator.enqueueCommand(cmd);
        // Setting this tag as clicked
        var tags = this.state.tagsCalibrated;
        tags[tag] = true;
        this.setState({ tagsCalibrated: tags });
    };
    OperatorDebug.prototype.renderTagButtons = function () {
        var _this = this;
        var tags = Object.keys(this.state.tagsCalibrated);
        var tagObjs = tags.map(function (tag) {
            return React__namespace.createElement("button", { onClick: function () { return _this.tagClicked(tag); }, key: tag, disabled: !_this.state.isCalibrating },
                _this.state.tagsCalibrated[tag] ? "Reset" : "Tag",
                " #",
                tag);
        });
        return (React__namespace.createElement("div", { className: "tags", style: { gridTemplateColumns: "repeat(" + tags.length + ", 1fr)" } }, tagObjs));
    };
    OperatorDebug.prototype.renderJoints = function () {
        var _this = this;
        if (this.state.joints.length == 0)
            return undefined;
        var jointControls = this.state.joints.map(function (j, i) {
            return React__namespace.createElement("div", { key: i, className: "joint-controls " },
                React__namespace.createElement("div", { className: "joint-num" },
                    i,
                    ":"),
                React__namespace.createElement("button", { onClick: function () { return _this.moveJoint(i, -15); } }, "-15\u00B0"),
                React__namespace.createElement("button", { onClick: function () { return _this.moveJoint(i, -5); } }, "-5\u00B0"),
                React__namespace.createElement("div", { className: "joint-degrees" },
                    _this.radianToDegrees(j).toFixed(2),
                    "\u00B0"),
                React__namespace.createElement("button", { onClick: function () { return _this.moveJoint(i, 5); } }, "+5\u00B0"),
                React__namespace.createElement("button", { onClick: function () { return _this.moveJoint(i, 15); } }, "+15\u00B0"));
        });
        return (React__namespace.createElement("div", null,
            React__namespace.createElement("span", null, "Joints"),
            React__namespace.createElement("div", { className: "input-container" }, jointControls)));
    };
    OperatorDebug.prototype.moveJoint = function (jointNum, degrees) {
        var _this = this;
        // All joint values are sent out in degrees
        var joints = this.state.joints.map(function (j) { return _this.radianToDegrees(j); });
        joints[jointNum] += degrees;
        // joints[jointNum] += this.degreesToRadian(degrees);
        var cmd = new CommandSetJoints(joints, this.robotData);
        this._networkOperator.enqueueCommand(cmd);
        // console.log(joints);
    };
    OperatorDebug.prototype.render = function () {
        var _this = this;
        return (React__namespace.createElement("div", { className: "debug-operator-container" },
            React__namespace.createElement("div", { className: "camera-view" },
                React__namespace.createElement("img", { width: "854", height: "480", src: this.state.imageData }),
                React__namespace.createElement("div", { className: "debug-command-container", onContextMenu: function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        return false;
                    } },
                    React__namespace.createElement("div", { className: "command-input" },
                        React__namespace.createElement("div", { className: "command-input-item" },
                            React__namespace.createElement("span", null, "Command name"),
                            React__namespace.createElement("input", { onChange: function (e) {
                                    _this.setState({ commandNameInput: e.target.value });
                                }, value: this.state.commandNameInput })),
                        React__namespace.createElement("div", { className: "command-input-item" },
                            React__namespace.createElement("span", null, "Command OP"),
                            React__namespace.createElement("input", { value: this.state.commandOpInput, onChange: function (e) {
                                    _this.setState({ commandOpInput: e.target.value });
                                } })),
                        React__namespace.createElement("button", { style: { marginTop: 10 }, onClick: function () { return _this.addCommand(); } }, "Add command")),
                    React__namespace.createElement("div", { className: "command-item-container" }, this.state.commandList.map(function (command) {
                        return React__namespace.createElement("div", { className: "command-item", onClick: function () {
                                return _this.sendOpClosure(command.op);
                            } },
                            React__namespace.createElement("span", null, command.name),
                            React__namespace.createElement("div", { className: "command-item-icon", onClick: function (ev) {
                                    ev.stopPropagation();
                                    _this.removeCommand(command.name);
                                } },
                                React__namespace.createElement("svg", { width: 10, "aria-hidden": "true", focusable: "false", "data-prefix": "fas", "data-icon": "xmark", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512" },
                                    React__namespace.createElement("path", { fill: "currentColor", d: "M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" }))));
                    })))),
            React__namespace.createElement("div", { className: "controls" },
                React__namespace.createElement("div", { className: "operator-buttons" },
                    this.renderJoints(),
                    React__namespace.createElement("span", null, "Vacuum"),
                    React__namespace.createElement("div", { className: "input-container vacuum" },
                        React__namespace.createElement("button", { onClick: this.sendOpClosure("manual_vacuum_on"), disabled: !this.state.connected }, "On"),
                        React__namespace.createElement("button", { onClick: this.sendOpClosure("manual_vacuum_off"), disabled: !this.state.connected }, "Off")),
                    React__namespace.createElement("span", null, "Calibration"),
                    React__namespace.createElement("div", { className: "input-container calibration" },
                        React__namespace.createElement("div", null,
                            React__namespace.createElement("button", { onClick: function () { return _this.calibrationStart(); }, disabled: !this.state.connected }, "Start calibration"),
                            React__namespace.createElement("button", { onClick: this.sendOpClosure("calibration/tag_detection"), disabled: !this.state.connected }, "Detect tags")),
                        this.renderTagButtons(),
                        React__namespace.createElement("div", null,
                            React__namespace.createElement("button", { onClick: function () { return _this.finishCalibration(); }, disabled: !this.canFinishCalibration() }, "Finish calibration"))),
                    React__namespace.createElement("div", { className: "debug-operator-info-container" },
                        React__namespace.createElement("span", null, "FPS: " + this.state.fps.toFixed(2)),
                        React__namespace.createElement("span", null, "State: " + this.state.state_machine))),
                React__namespace.createElement("div", null,
                    React__namespace.createElement("button", { className: "btn-send-home", onClick: this.sendOpClosure("go_home_safely"), disabled: !this.state.connected }, "Send home")),
                React__namespace.createElement("div", { className: "depth-view" },
                    React__namespace.createElement("img", { width: "320", height: "180", src: this.state.depthData })))));
    };
    return OperatorDebug;
}(React__namespace.Component));

exports.OperatorCanvas = OperatorCanvas;
exports.OperatorDebug = OperatorDebug;
exports.ReactResponsiveRgbStream = ReactResponsiveRgbStream;
exports.ReactRgbStream = ReactRgbStream$1;
exports.RembrainImage = RembrainImage;
//# sourceMappingURL=index.js.map
