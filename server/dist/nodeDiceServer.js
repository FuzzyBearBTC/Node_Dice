/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _all = __webpack_require__(27);

var _all2 = _interopRequireDefault(_all);

var _development = __webpack_require__(28);

var _development2 = _interopRequireDefault(_development);

var _production = __webpack_require__(29);

var _production2 = _interopRequireDefault(_production);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// default is development environment
//console.log('process.env.socket: ' + process.env.SOCKET);
// process.env.NODE_ENV = JSON.stringify(process.env.NODE_ENV || 'development');
const config =  true ? Object.assign(_all2.default, _production2.default) : Object.assign(_all2.default, _development2.default);

// Load app configuration
exports.default = config;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = __webpack_require__(6);

var _path2 = _interopRequireDefault(_path);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _winston = __webpack_require__(35);

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_winston2.default.transports.DailyRotateFile = __webpack_require__(36); /**
                                                                                      * Copyright 2014 eRealm Info & Tech.
                                                                                      *
                                                                                      * Created by Ken on 8/08/2014
                                                                                      */
exports.default = new _winston2.default.Logger({
    transports: [new _winston2.default.transports.Console({
        level: 'debug',
        colorize: true
    }), new _winston2.default.transports.DailyRotateFile({
        level: 'silly',
        filename: _path2.default.join(_config2.default.serverRoot, '/logs/access-'),
        datePattern: 'yyyy-MM-dd.log',
        maxsize: 5242880 /* 5MB */
    })]
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _mongoose = __webpack_require__(33);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//   ttl = require('mongoose-ttl');
/**
 * Copyright 2014 Node Dice
 *
 * Created by Neo on 2014/11/27.
 */

_mongoose2.default.connect(_config2.default.mongodb.hostaddress + '/' + _config2.default.mongodb.dbname, { config: { autoIndex: "production" === 'development' } }); //connect to the mongodb driver.

//request the config files.
const db = _mongoose2.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));

exports.default = {
  db,
  mongoose: _mongoose2.default
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dbConnect = __webpack_require__(2);

var _dbConnect2 = _interopRequireDefault(_dbConnect);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _uuid = __webpack_require__(7);

var _uuid2 = _interopRequireDefault(_uuid);

var _coinsConfig = __webpack_require__(5);

var _coinsConfig2 = _interopRequireDefault(_coinsConfig);

var _crypto = __webpack_require__(4);

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import logger from '../helper/logger';
const mongoose = _dbConnect2.default.mongoose; /**
                                                * Copyright 2017 Node Dice
                                                *
                                                * Created by Neo on 2017/01/19.
                                                */

mongoose.Promise = global.Promise;
/*view models*/
/*user schema*/
const userSchema = new mongoose.Schema({
    userName: { type: String, index: { unique: true } },
    password: { type: String },
    clientSalt: String,
    serverSalt: String,
    nonce: Number,
    createTime: { type: Date },
    funds: [{
        coinName: String,
        depositAmount: Number,
        depositAddress: String,
        withdrawAddress: String,
        withdrawAmount: Number,
        profit: Number
    }]
}, { autoIndex: _config2.default.mongodb.autoIndex });
//Instance methods
userSchema.methods.getFund = function (coinName) {
    for (let i in this.funds) {
        let fund = this.funds[i];
        if (fund.coinName == coinName) return fund;
    }
    return null;
};

userSchema.methods.getBalance = function (coinName) {

    let fund = this.getFund(coinName);
    if (fund) return fund.depositAmount - fund.withdrawAmount + fund.profit;

    return 0;
};

userSchema.methods.addProfit = function (coinName, profit) {

    let fund = this.getFund(coinName);
    if (fund) {
        fund.profit += profit;
        return fund;
    }
};

userSchema.methods.setDeposit = function (coinName, amount) {

    let fund = this.getFund(coinName);
    if (fund && amount) {
        fund.depositAmount = amount;
    }

    return fund;
};

userSchema.methods.setDepositAddr = function (coinName, addr) {

    let fund = this.getFund(coinName);
    if (fund) {
        fund.depositAddress = addr;
        return fund;
    }
};

//Static methods
userSchema.statics = {
    CreateNewUser: async (userName, password) => {
        password = _crypto2.default.createHash('sha512').update(password).digest('hex');
        let user = new userModel({
            userName: userName,
            password: password,
            serverSalt: _uuid2.default.v4(),
            clientSalt: _uuid2.default.v4(),
            nonce: 0,
            createTime: new Date(),
            funds: [{
                coinName: 'BTC',
                depositAddress: '', depositAmount: 0,
                withdrawAddress: '', withdrawAmount: 0,
                profit: 0
            }, {
                coinName: 'NXT',
                depositAddress: '', depositAmount: 0,
                withdrawAddress: '', withdrawAmount: 0,
                profit: 0
            }]
        });

        return await user.save();
    },
    GetUserById: async (userid, fields) => {
        return await userModel.findOne({ _id: userid }, fields);
    },
    SaveClientSalt: async (userid, clientSalt) => {

        let u = await userModel.findOne({ _id: userid }, "clientSalt serverSalt");
        let _clientSalt, _serverSalt;
        _clientSalt = u.clientSalt;
        _serverSalt = u.serverSalt;

        u.clientSalt = clientSalt;
        u.serverSalt = _uuid2.default.v4();
        u.nonce = 0;
        await u.save();
        return { clientSalt: _clientSalt, serverSalt: _serverSalt };
    },
    GetNewAddress: async (userid, coinName) => {
        let helper = _coinsConfig2.default[coinName];
        const addr = await helper.GetNewAddress(userid);

        let u = await userModel.findOne({ _id: userid }, "funds");
        u.setDepositAddr('BTC', addr);
        await u.save();
        return addr;
    },
    GetBalance: async (userid, coinName) => {
        const helper = _coinsConfig2.default[coinName];
        const amount = helper.GetBalance(userid);

        const u = await userModel.findOne({ _id: userid }, "funds");

        u.setDeposit(coinName, amount);
        await u.save();

        return u.getBalance(coinName);
    },
    LoginUser: async (userName, password) => {
        password = _crypto2.default.createHash('sha512').update(password).digest('hex');
        return await userModel.findOne({ userName, password }, "_id userName serverSalt clientSalt nonce funds");
    }
};

const userModel = mongoose.model('User', userSchema);

/*exports models*/
exports.default = userModel;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bitcoinHelper = __webpack_require__(21);

var _bitcoinHelper2 = _interopRequireDefault(_bitcoinHelper);

var _nxtHelper = __webpack_require__(23);

var _nxtHelper2 = _interopRequireDefault(_nxtHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    'BTC': _bitcoinHelper2.default,
    'NXT': _nxtHelper2.default,
    getCoinNames: function () {
        return [{ coinName: 'BTC', min: 0.00000001, max: 1 }, { coinName: 'NXT', min: 1, max: 1000 }];
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Faucet = __webpack_require__(17);

var _Faucet2 = _interopRequireDefault(_Faucet);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import config from '../config';
//import path from 'path';
/**
 * Copyright 2014 Node Dice.
 *
 * Created by Neo on 03/20/2017
 */

exports.default = app => {

    //  const seo_title = 'bit coin btc nxt altcoin dice game';
    app.use((req, res, next) => {
        _logger2.default.info(new Date() + ' Request: ', req.originalUrl);
        next();
    });

    // default page
    app.get('/', (req, res) => {
        res.send('hello node dice');
    });

    // app.get('/Roll_Over_Or_Under', (req, res) => {

    //     res.render('./games/Roll_Over_Or_Under',
    //         { page_title: 'Over or Under? ' + seo_title });
    // });

    // app.get('/Investment', (req, res) => {
    //     res.render('./games/Investment', { page_title: 'Investment ' + seo_title });
    // });

    // app.get('/Verification', (req, res) => {
    //     res.render('./http/Verification', {page_title: 'Verification ' + seo_title});
    // });

    // app.get('/Support', (req, res) => {
    //     res.render('./http/Support', { page_title: 'Support' + seo_title });
    // });

    // app.get('/faq', (req, res) => {
    //     res.render('./http/faq', { page_title: 'Faq ' + seo_title });
    // });

    //verify the response and return new balance if succeeded.
    app.post('/reCaptCha', (req, res) => {
        _Faucet2.default.VerifyResponse(req.session.userid, req.body.g_recaptcha_response, (err, result) => {
            if (err) {
                res.json(err);
            } else {
                res.json(result);
            }
            res.end();
        });
    });
    //error handler
    // app.use(require('./views/http/index').http500);
    // app.use(require('./views/http/index').http404);
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _s_common = __webpack_require__(25);

var _s_common2 = _interopRequireDefault(_s_common);

var _s_overunder = __webpack_require__(26);

var _s_overunder2 = _interopRequireDefault(_s_overunder);

var _s_chat = __webpack_require__(24);

var _s_chat2 = _interopRequireDefault(_s_chat);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import uuid from 'uuid';
// import socketSession from './handshake.js';

// const assignSessionID = (socket, next) =>{
//          logger.info('foo='+socket.handshake.query.foo);
//         return next();
// };

exports.default = io => {
    _logger2.default.info("Web socket is enabled for following domain(s): " + _config2.default.origins);
    io.origins(_config2.default.origins);

    (0, _s_common2.default)(io);
    (0, _s_overunder2.default)(io);
    (0, _s_chat2.default)(io);
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("express-validator");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _express = __webpack_require__(12);

var _express2 = _interopRequireDefault(_express);

var _expressValidator = __webpack_require__(13);

var _expressValidator2 = _interopRequireDefault(_expressValidator);

var _compression = __webpack_require__(11);

var _compression2 = _interopRequireDefault(_compression);

var _bodyParser = __webpack_require__(10);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _http = __webpack_require__(14);

var _http2 = _interopRequireDefault(_http);

var _socket = __webpack_require__(15);

var _socket2 = _interopRequireDefault(_socket);

var _routes = __webpack_require__(8);

var _routes2 = _interopRequireDefault(_routes);

var _sockets = __webpack_require__(9);

var _sockets2 = _interopRequireDefault(_sockets);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright 2017 Node Dice
 *
 * Created by Neo on 2017/02/08
 */

//import newrelic from 'newrelic';
//import cluster from 'cluster');
const app = (0, _express2.default)();

/*require socket.io*/

// import cookieParser from 'cookie-parser';
// import session from 'express-session';
// import MongoConnect from 'connect-mongo';
// import socketHandshake from 'socket.io-handshake';

//favicon from 'serve-favicon'),
const server = _http2.default.createServer(app);

const io = (0, _socket2.default)(server, { cookie: 'dSession', cookiePath: '/', cookieHttpOnly: true });

//config express in all environments
app.disable('x-powered-by');

//Add express's middlewares
//app.use(favicon(config.clientRoot + '/favicon.ico'));
//Only used in development. In production, use nginx to serve static files
if (false) {
  app.use(_express2.default.static(_config2.default.clientRoot));
  app.use((0, _compression2.default)({ threshold: 512 }));
}
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use((0, _expressValidator2.default)([]));

//map routes for pages
(0, _routes2.default)(app);
//socket communication for games
(0, _sockets2.default)(io);

server.listen(_config2.default.port, function () {
  _logger2.default.info('Server running on port ' + _config2.default.port);
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _request = __webpack_require__(34);

var _request2 = _interopRequireDefault(_request);

var _faucetModel = __webpack_require__(20);

var _faucetModel2 = _interopRequireDefault(_faucetModel);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    VerifyResponse: function (userid, response, callback) {

        _request2.default.post({
            url: 'https://www.google.com/recaptcha/api/siteverify',
            form: {
                'secret': '6LeD4QMTAAAAAEWzJqieM9nJIhlIDygbrx0IOyUk',
                'response': response
            },
            method: 'POST',
            proxy: _config2.default.faucet.proxy
        }, (err, httpResponse, body) => {
            let re = JSON.parse(body);
            if (re.success) {
                _faucetModel2.default.GetPay(userid, function (err, result) {
                    callback(err, result);
                });
            } else {
                callback(null, { code: -1 }); //verify failed. no bitcoin;
            }
        });
    }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dbConnect = __webpack_require__(2);

var _dbConnect2 = _interopRequireDefault(_dbConnect);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright 2017 Node Dice
 *
 * Created by Neo on 2017/02/24.
 */

const mongoose = _dbConnect2.default.mongoose;
//const db = dbConnect.db;
/*bet schema*/
const betSchema = new mongoose.Schema({
    userid: String,
    userName: String,
    clientSalt: String,
    serverSalt: String,
    nonce: Number,
    amount: Number,
    selNum: Number,
    unit: String,
    betTime: { type: Date, expires: 60 * 60 * 24 * 30, index: true },
    rollNum: Number,
    profit: Number,
    payout: Number
}, { autoIndex: _config2.default.mongodb.autoIndex });
//Static methods
betSchema.statics = {
    getBetsByUser: async userid => {
        return await betModel.find({ userid }, 'userid userName rollNum nonce betTime selNum amount unit profit payout').sort({ betTime: -1 }).limit(100);
    },
    getAllBets: async () => {
        return await betModel.find({}, 'userid userName rollNum nonce betTime selNum amount unit profit payout').sort({ betTime: -1 }).limit(100);
    },
    getPayout: function (selNum) {
        return selNum <= 49.5 ? 99 / selNum : 99 / (99.99 - selNum);
    }

};

const betModel = mongoose.model('Bet', betSchema);

exports.default = betModel;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dbConnect = __webpack_require__(2);

var _dbConnect2 = _interopRequireDefault(_dbConnect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mongoose = _dbConnect2.default.mongoose;
mongoose.Promise = global.Promise;
/*chat schema*/
const chatSchema = new mongoose.Schema({
    userName: String,
    timeStamp: { type: Date, expires: 60 * 60 * 24 * 7 }, //msg expired in a week
    message: String
});

const chatModel = mongoose.model('Chat', chatSchema);

exports.default = {
    Chat: chatModel,
    GetChats: async () => {
        return await chatModel.find({}, 'userName timeStamp message').sort({ timeStamp: -1 }).limit(100);
    },
    AddChat: async chat => {
        const c = new chatModel({
            userName: chat.userName,
            timeStamp: chat.timeStamp,
            message: chat.message
        });

        await c.save();
    }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dbConnect = __webpack_require__(2);

var _dbConnect2 = _interopRequireDefault(_dbConnect);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

var _userModel = __webpack_require__(3);

var _userModel2 = _interopRequireDefault(_userModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mongoose = _dbConnect2.default.mongoose;

const faucetSchema = new mongoose.Schema({
    lastTime: Date,
    userid: String
});
/*Static methods*/
faucetSchema.statics = {
    GetPay: (userid, callback) => {
        _userModel2.default.GetUserById(userid, 'funds', (err, u) => {
            if (err) {
                callback(err, null);
            } else {
                faucetModel.findOne({ userid: userid }, 'lastTime', (err, fa) => {
                    let now = new Date();
                    if (!fa) {
                        fa = new faucetModel({
                            userid: userid,
                            lastTime: now
                        });
                    }

                    if (now == fa.lastTime || now - fa.lastTime >= _config2.default.faucet.interval) {
                        //send out bitcoin every 15 minutes

                        fa.lastTime = now;
                        fa.save();

                        let amount = randomIntInc(_config2.default.faucet.min, _config2.default.faucet.max);
                        u.addProfit('BTC', amount * 0.00000001);
                        u.save();

                        callback(null, { code: 0, faucet: amount, balance: u.getBalance('BTC') });
                    } else {
                        callback(null, { code: -2, lastTime: fa.lastTime }); //too soon
                    }
                });
            }
        });
    }
};
/*functions*/
const randomIntInc = (low, high) => {
    return Math.floor(Math.random() * (high - low + 1) + low);
};
const faucetModel = mongoose.model('Faucet', faucetSchema);

exports.default = faucetModel;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bitcoin = __webpack_require__(31);

var _bitcoin2 = _interopRequireDefault(_bitcoin);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const client = new _bitcoin2.default.Client(_config2.default.bitcoin);
exports.default = {
    GetNewAddress: userid => {
        return new Promise((resovle, reject) => {
            client.getNewAddress(userid, resovle, reject);
        });
    },
    GetBalance:
    //(userid) => {
    () => {
        //mini confirmation is 2, BTC only
        //Altcoin may need bigger confirmations.

        // if (process.env.NODE_ENV == "development")
        //     //In development, return 10 BTC for testing.
        return 10;
        // else
        //     client.getReceivedByAccount(userid, 2, callback);
    },
    WithdrawFunds: (userid, unit) => {
        //dummy code for lint rules
        userid = '';
        unit = 'BTC';

        return unit;
    }

};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _crypto = __webpack_require__(4);

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (key, text) => {

    //create HMAC using server seed as key and client seed as message
    let hash = _crypto2.default.createHmac('sha512', key).update(text).digest('hex');

    let index = 0;

    let lucky = parseInt(hash.substring(index * 5, index * 5 + 5), 16);

    //keep grabbing characters from the hash while greater than 
    while (lucky >= Math.pow(10, 6)) {
        index++;
        lucky = parseInt(hash.substring(index * 5, index * 5 + 5), 16);

        //if we reach the end of the hash, just default to highest number
        if (index * 5 + 5 > 128) {
            lucky = 99.99;
            break;
        }
    }

    lucky %= Math.pow(10, 4);
    lucky /= Math.pow(10, 2);

    return lucky;
}; //the seed pair itself
//var clientSeed = "your client seed"; //dont forget to exclude the dash and the nonce!
//var serverSeed = "your server seed";

//bet made with seed pair (excluding current bet)
//var nonce = 0;

//crypto lib for hmac function

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _uuid = __webpack_require__(7);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    GetNewAddress: (userid, callback) => {
        callback(null, _uuid2.default.v4());
    },
    GetBalance: // (userid) => {
    () => {
        //mini confirmation is 2, BTC only
        //Altcoin may need bigger confirmations.

        // if (process.env.NODE_ENV == "development")
        //     //In development, return 10 BTC for testing.
        return 1000000;
        // else
        //     callback(null, 0);
    },
    WithdrawFunds: (userid, unit) => {
        //dummy code for lint rules
        userid = '';
        unit = 'NXT';

        return unit;
    }

};
// import config from '../../config';

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _chatModel = __webpack_require__(19);

var _chatModel2 = _interopRequireDefault(_chatModel);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const chat = io => {
    io.on('connection', socket => {
        socket.on('getChats', async () => {
            try {
                const chats = await _chatModel2.default.GetChats();
                socket.emit('getChats', chats);
            } catch (err) {
                _logger2.default.error(err);
            }
        });

        socket.on('sendChat', async chat => {
            if (socket.user) {
                chat.userName = socket.user.userName;
                chat.timeStamp = new Date();
                try {
                    await _chatModel2.default.AddChat(chat);
                    io.emit('recvChat', {
                        userName: chat.userName,
                        timeStamp: chat.timeStamp,
                        message: chat.message
                    });
                } catch (err) {
                    _logger2.default.error(err);
                }
            }
        });
    });
};

exports.default = chat;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _userModel = __webpack_require__(3);

var _userModel2 = _interopRequireDefault(_userModel);

var _crypto = __webpack_require__(4);

var _crypto2 = _interopRequireDefault(_crypto);

var _coinsConfig = __webpack_require__(5);

var _coinsConfig2 = _interopRequireDefault(_coinsConfig);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright 2017 Node Dice
 *
 * Created by Neo on 2017/01/17.
 */
exports.default = io => {

    //socket.io events
    io.on('connection', socket => {
        const validateUser = user => {
            if (!user || !user.userid) {
                socket.emit('invalidUser', {});
                return false;
            }
            return true;
        };

        // const session = socket.handshake.session;
        socket.on('coinNames', () => socket.emit('coinNames', _coinsConfig2.default.getCoinNames()));

        //return a new user
        socket.on('newUser', async u => {

            try {
                const user = await _userModel2.default.CreateNewUser(u.userName, u.password);
                const newUser = {
                    userid: user._id,
                    userName: user.userName,
                    clientSalt: user.clientSalt,
                    funds: user.funds,
                    nonce: 0,
                    hashedServerSalt: _crypto2.default.createHash('sha512').update(user.serverSalt).digest('hex')
                };
                socket.user = { userid: newUser.userid, userName: newUser.userName };
                socket.emit('newUser', newUser);
            } catch (err) {
                if (err.code == 11000) socket.emit('newUser', { error: { code: 11000 } });else {
                    _logger2.default.error(err);
                    socket.emit('newUser', { error: 'Internal error. Try later.' });
                }
            }
        });

        //return an existing user
        socket.on('existingUser', async () => {
            if (!validateUser(socket.user)) return;

            try {
                const u = await _userModel2.default.GetUserById(socket.user.userid, "clientSalt serverSalt _id userName funds nonce");

                if (u) {
                    socket.emit('existingUser', {
                        userid: u._id,
                        userName: u.userName,
                        clientSalt: u.clientSalt,
                        funds: u.funds,
                        nonce: u.nonce,
                        hashedServerSalt: _crypto2.default.createHash('sha512').update(u.serverSalt).digest('hex')
                    });
                } else {
                    socket.emit('existingUser', { clientSalt: '', error: 'session expired' });
                }
            } catch (err) {
                _logger2.default.error(err);
                socket.emit('existingUser', { clientSalt: '', error: err });
            }
        });

        //update client salt
        socket.on('clientSalt', async clientSalt => {
            if (!validateUser(socket.user)) return;
            try {
                const oldSalt = await _userModel2.default.SaveClientSalt(socket.user.userid, clientSalt);

                socket.emit('clientSalt', oldSalt);
            } catch (err) {
                socket.emit('clientSalt', err);
            }
        });

        //get new bitcion address
        socket.on('newCoinAddr', async coinName => {
            if (!validateUser(socket.user)) return;
            try {
                const addr = await _userModel2.default.GetNewAddress(socket.user.userid, coinName);
                socket.emit('newCoinAddr', addr);
            } catch (err) {
                _logger2.default.error(err);
                socket.emit('newCoinAddr', err);
            }
        });

        //get user balance
        socket.on('getBalance', async coinName => {
            if (!validateUser(socket.user)) return;
            try {
                const balance = await _userModel2.default.GetBalance(socket.user.userid, coinName);
                socket.emit('getBalance', balance);
            } catch (err) {
                _logger2.default.info(err);
                socket.emit('loggedUser', { error: 'Internal error. Try later.' });
            }
        });

        //get user balance
        socket.on('loginUser', async u => {
            try {
                const user = await _userModel2.default.LoginUser(u.userName, u.password);

                if (!user) {
                    socket.emit('loggedUser', { error: 'Wrong user name and password combination.' });
                    return;
                }
                const loggedUser = {
                    userid: user._id,
                    userName: user.userName,
                    clientSalt: user.clientSalt,
                    funds: user.funds,
                    nonce: user.nonce,
                    hashedServerSalt: _crypto2.default.createHash('sha512').update(user.serverSalt).digest('hex')
                };
                socket.user = { userid: loggedUser.userid, userName: loggedUser.userName };
                socket.emit('loggedUser', loggedUser);
            } catch (err) {
                _logger2.default.info(err);
                socket.emit('loggedUser', { error: 'Internal error. Try later.' });
            }
        });
    });
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _userModel = __webpack_require__(3);

var _userModel2 = _interopRequireDefault(_userModel);

var _betModel = __webpack_require__(18);

var _betModel2 = _interopRequireDefault(_betModel);

var _cryptoroll = __webpack_require__(22);

var _cryptoroll2 = _interopRequireDefault(_cryptoroll);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

var _lodash = __webpack_require__(32);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const overunder = io => {

    io.on('connection', socket => {
        const gameName = 'overunder';
        socket.join(gameName);
        const validateUser = user => {
            if (!user || !user.userid) {
                socket.emit('invalidUser', {});
                return false;
            }
            return true;
        };
        //return a 
        socket.on('roll', async clientBet => {
            if (!validateUser(socket.user)) return;
            try {
                let u = await _userModel2.default.GetUserById(socket.user.userid, "clientSalt serverSalt nonce funds");
                //validate input
                if (!_lodash2.default.isNumber(clientBet.w - 0)) {
                    socket.emit('rollError', { code: -3 });
                    return;
                }

                if (clientBet.w <= 0) {
                    socket.emit('rollError', { code: -2 });
                    return;
                }
                if (u.getBalance(clientBet.coinName) < clientBet.w) {
                    // not enough fund
                    socket.emit('rollError', { code: -1 });
                    return;
                }

                //increase nonce
                u.nonce++;

                //get lucky number
                let rollNum = (0, _cryptoroll2.default)(u.serverSalt, u.clientSalt + '-' + u.nonce);
                const payout = _betModel2.default.getPayout(clientBet.sn);
                const profit = GetProfit(rollNum, clientBet.sn, clientBet.w, payout);
                let bet = new _betModel2.default({
                    userid: socket.user.userid,
                    userName: socket.user.userName,
                    clientSalt: u.clientSalt,
                    serverSalt: u.serverSalt,
                    nonce: u.nonce,
                    amount: clientBet.w,
                    selNum: clientBet.sn,
                    unit: clientBet.coinName,
                    betTime: new Date(),
                    rollNum,
                    profit,
                    payout
                });
                try {
                    await bet.save();
                } catch (err) {
                    _logger2.default.error('Saving bet error:' + err);
                    socket.emit('rollError', { code: -4 });
                    return;
                }

                //Todo: process bet's result here
                u.addProfit(clientBet.coinName, profit);
                try {

                    await u.save();
                } catch (err) {
                    _logger2.default.error('Saving user profit error:' + err);
                    socket.emit('rollError', { code: -5 });
                    return;
                }

                //Every bet is sent to everyone who is in over/under game. 
                const result = {
                    userid: socket.user.userid,
                    userName: socket.user.userName,
                    rollNum,
                    nonce: u.nonce,
                    betTime: bet.betTime,
                    selNum: bet.selNum,
                    amount: bet.amount,
                    unit: bet.unit,
                    profit,
                    payout
                };

                io.to(gameName).emit('allBets', result);
            } catch (err) {
                _logger2.default.error(err);
                socket.emit('rollError', { code: -6 });
            }
        });

        socket.on('getMyBets', async () => {
            if (!validateUser(socket.user)) return;
            try {
                const bets = await _betModel2.default.getBetsByUser(socket.user.userid);
                socket.emit('getMyBets', bets);
            } catch (err) {
                _logger2.default.error('GetBetsByUser error:' + err);
            }
        });

        socket.on('getAllBets', async () => {
            try {
                const bets = await _betModel2.default.getAllBets();
                socket.emit('getAllBets', bets);
            } catch (err) {
                _logger2.default.error('getAllBets error:' + err);
            }
        });

        //functions
        const GetProfit = (rollNum, selNum, amount, payout) => {

            if (selNum * 1 <= 49.5 && rollNum * 1 <= selNum * 1 || selNum * 1 >= 50.49 && rollNum * 1 >= selNum * 1) {
                return amount * (payout - 1);
            } else {
                return -1 * amount;
            }
        };
    });
}; /**
    * Copyright 2017 Node Dice
    *
    * Created by Neo on 2017/03/27.
    */

//import config from '../../config';
exports.default = overunder;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = __webpack_require__(6);

var _path2 = _interopRequireDefault(_path);

var _package = __webpack_require__(30);

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rootPath = _path2.default.resolve('.');
const config = {
    root: rootPath,
    serverRoot: rootPath + '/',
    clientRoot: rootPath + '/html/',
    cookieSecret: 'node_DICE',
    port: process.env.PORT || 3000,
    app: {
        name:  true ? _package2.default.name + ' (' + _package2.default.version + ')' : _package2.default.name + ' [' + _package2.default.version + ']',
        version: _package2.default.version,
        description: _package2.default.description
    },
    mail: {
        enable: true,
        transport: 'SMTP',
        fromaddress: '',
        options: {
            host: "smtp.gmail.com",
            port: 465,
            secureConnection: true,
            requiresAuth: true,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        }
    },
    session: {
        timeout: 30 * 24 * 60 * 60 * 1000
    },
    support: '',
    projectName: '',
    copyrightName: ''
};

exports.default = config;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

const config = {
    mongodb: {
        hostaddress: 'mongodb://localhost',
        port: 27017,
        dbname: 'node_dice'
    },
    // mongoStore: {
    //     url: 'mongodb://localhost/node_dice',
    //     autoRemove: 'interval',
    //     autoRemoveInterval: 10 // In minutes. Default 
    // },
    bitcoin: {
        host: 'rpc.blockchain.info',
        port: 443,
        ssl: true,
        user: 'your identification',
        pass: 'your password'
    },
    faucet: {
        interval: 15 * 60 * 1000,
        min: 100,
        max: 500,
        proxy: null //try to use proxy to connect to google if blocked
    },
    origins: "*:*"
};

exports.default = config;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
const config = {
    mongodb: {
        hostaddress: 'mongodb://mongo',
        port: 27017,
        dbname: 'node_dice',
        autoIndex: false
    },
    // mongoStore: {
    //     url: 'mongodb://localhost/node_dice',
    //     autoRemove: 'interval',
    //     autoRemoveInterval: 10 // In minutes. Default 
    // },
    port: 4000,
    origins: "*:*", //For security, it's better to set origins in prod
    bitcoin: {
        host: 'rpc.blockchain.info',
        port: 443,
        ssl: true,
        user: 'your identification',
        pass: 'your password'
    },
    faucet: {
        interval: 15 * 60 * 1000,
        min: 100,
        max: 500,
        proxy: null //try to use proxy to connect to google if blocked
    }

};

exports.default = config;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = {
	"name": "nodedice_server",
	"description": "An open source dice game faucet built on node.js for BTC/NXT",
	"version": "2.0.2",
	"keywords": [
		"open source",
		"node.js",
		"nodejs dice btc faucet"
	],
	"homepage": "https://github.com/popmanhe/node_dice",
	"author": "Neo He",
	"repository": {
		"type": "git",
		"url": "https://github.com/popmanhe/node_dice"
	},
	"scripts": {
		"start": "npm-run-all --parallel open:src run:dev lint:watch",
		"build": "npm-run-all open:dist run:prod",
		"prod": "npm-run-all open:dist",
		"open:src": "babel-node tools/srcServer.js",
		"open:dist": "babel-node tools/distServer.js",
		"run:dev": "nodemon dev/nodeDiceServer.js --watch dev",
		"run:prod": "pm2 start dist/nodeDiceServer.js",
		"lint": "esw src --color",
		"lint:watch": "npm run lint -- --watch"
	},
	"config": {
		"unsafe-perm": true
	},
	"bugs": {
		"url": "https://github.com/popmanhe/node_dice/issues",
		"email": "popman.he@gmail.com"
	},
	"license": "MIT BSD",
	"dependencies": {
		"bitcoin": "^3.0.1",
		"body-parser": "^1.16.0",
		"bson": "^1.0.4",
		"compression": "^1.6.2",
		"connect-mongo": "^1.3.2",
		"cookie-parser": "^1.3.3",
		"cookieparser": "^0.1.0",
		"cors": "^2.8.1",
		"debug": "^2.6.0",
		"errorhandler": "^1.3.5",
		"express": "^4.15.2",
		"express-session": "^1.15.0",
		"express-validator": "^3.1.2",
		"lodash": "^4.17.4",
		"lru-cache": "^4.0.2",
		"method-override": "^2.3.8",
		"mongodb": "^2.2.25",
		"mongoose": "^4.9.4",
		"morgan": "^1.8.1",
		"nodemailer": "3.1.7",
		"request": "^2.81.0",
		"serve-favicon": "^2.4.2",
		"should": "^11.2.1",
		"socket.io": "^1.7.3",
		"uuid": "^3.0.1",
		"winston": "^2.3.1",
		"winston-daily-rotate-file": "^1.4.6"
	},
	"devDependencies": {
		"babel-cli": "^6.24.0",
		"babel-eslint": "7.1.1",
		"babel-loader": "^6.4.1",
		"babel-preset-es2015": "^6.24.0",
		"babel-preset-env": "^1.3.2",
		"babel-preset-stage-0": "^6.22.0",
		"debug": "~0.7.4",
		"eslint": "3.17.1",
		"eslint-plugin-import": "2.2.0",
		"eslint-plugin-node": "4.2.1",
		"eslint-watch": "3.0.1",
		"nodemon": "^1.11.0",
		"npm-run-all": "4.0.2",
		"webpack": "2.3.2",
		"webpack-bundle-analyzer": "2.3.1",
		"webpack-dev-middleware": "1.10.1",
		"webpack-hot-middleware": "2.18.0",
		"webpack-md5-hash": "0.0.5"
	}
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("bitcoin");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("winston-daily-rotate-file");

/***/ })
/******/ ]);