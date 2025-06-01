"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cache_1 = __importStar(require("../utils/cache"));
class CacheService {
    static getValue(key) {
        try {
            this.checks(key);
            console.log('CACHE:', cache_1.default);
            if (!this.hasKey(key)) {
                throw new Error('Key not found');
            }
            let value = cache_1.default[key];
            console.log('VALUE:', value);
            return value;
        }
        catch (err) {
            console.log('ERROR:', err);
            throw new Error('Error Getting Value');
        }
    }
    static createEntry(key, value) {
        try {
            this.checks(key);
            cache_1.default[key] = value;
            console.log('CACHE:', cache_1.default);
            return true;
        }
        catch (err) {
            throw new Error('Error Getting Value');
        }
    }
    static deleteEntry(key) {
        try {
            this.checks(key);
            let hasKey = this.hasKey(key);
            if (!hasKey) {
                throw new Error('');
            }
            delete cache_1.default[key];
            console.log('CACHE:', cache_1.default);
            return true;
        }
        catch (err) {
            throw new Error('Error Getting Value');
        }
    }
    static hasKey(key) {
        this.checks(key);
        console.log('key:', key);
        if (cache_1.default.hasOwnProperty(key)) {
            return true;
        }
        console.log('true');
        return false;
    }
    static checks(key) {
        // check if initialized
        if (!cache_1.isInit) {
            throw new Error('Cache Not Initialized');
        }
        // check if key is truthy
        if (!key) {
            throw new Error('Invalid Key');
        }
    }
}
exports.default = CacheService;
