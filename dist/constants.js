"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os = require("os");
exports.EOL = os.EOL;
exports.CarriageReturnLineFeed = '\r\n';
exports.LineFeed = '\n';
exports.CarriageReturnLineFeedCode = 0;
exports.LineFeedCode = 1;
exports.extensionRegex = /\.[^.]+$/;
exports.tsxRegex = /\.tsx$/i;
exports.tsTsxRegex = /\.ts(x?)$/i;
exports.dtsDtsxOrDtsDtsxMapRegex = /\.d\.ts(x?)(\.map)?$/i;
exports.dtsTsTsxRegex = /(\.d)?\.ts(x?)$/i;
exports.dtsTsTsxJsJsxRegex = /((\.d)?\.ts(x?)|js(x?))$/i;
exports.tsTsxJsJsxRegex = /\.tsx?$|\.jsx?$/i;
exports.jsJsx = /\.js(x?)$/i;
exports.jsJsxMap = /\.js(x?)\.map$/i;
exports.jsonRegex = /\.json$/i;
exports.nodeModules = /node_modules/i;
//# sourceMappingURL=constants.js.map