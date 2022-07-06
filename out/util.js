"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractAsKeyValue = void 0;
const extractAsKeyValue = (object) => ({
    key: Object.keys(object)[0],
    value: Object.values(object)[0],
});
exports.extractAsKeyValue = extractAsKeyValue;
//# sourceMappingURL=util.js.map