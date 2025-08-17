console.warn('Scripts "build/three.js" and "build/three.min.js" are deprecated with r150+, and will be removed with r160. Please use ES Modules or alternatives: https://threejs.org/docs/index.html#manual/en/introduction/Installation'), /**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ function(t1, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define([
        "exports"
    ], e) : e((t1 = "undefined" != typeof globalThis ? globalThis : t1 || self).THREE = {});
}(this, function(t1) {
    "use strict";
    const e = "160", n = 1, i = 2, r = 3, s = 0, a = 1, o = 100, l = 204, c = 205, h = 0, u = 1, d = 2, p = 0, m = 1, f = 2, g = 3, _ = 4, v = 5, x = 6, y = "attached", M = "detached", S = 300, b = 301, T = 302, E = 303, w = 304, A = 306, R = 1e3, C = 1001, L = 1002, P = 1003, I = 1004, U = 1005, D = 1006, N = 1007, O = 1008, F = 1009, B = 1012, z = 1013, G = 1014, H = 1015, V = 1016, k = 1017, W = 1018, X = 1020, j = 1023, q = 1026, Y = 1027, Z = 1029, J = 1031, K = 1033, $ = 33776, Q = 33777, tt = 33778, et = 33779, nt = 35840, it = 35841, rt = 35842, st = 35843, at = 36196, ot = 37492, lt = 37496, ct = 37808, ht = 37809, ut = 37810, dt = 37811, pt = 37812, mt = 37813, ft = 37814, gt = 37815, _t = 37816, vt = 37817, xt = 37818, yt = 37819, Mt = 37820, St = 37821, bt = 36492, Tt = 36494, Et = 36495, wt = 36284, At = 36285, Rt = 36286, Ct = 2300, Lt = 2301, Pt = 2302, It = 2400, Ut = 2401, Dt = 2402, Nt = 2500, Ot = 2501, Ft = 3e3, Bt = 3001, zt = "", Gt = "srgb", Ht = "srgb-linear", Vt = "display-p3", kt = "display-p3-linear", Wt = "linear", Xt = "srgb", jt = "rec709", qt = "p3", Yt = 7680, Zt = 35044, Jt = "300 es", Kt = 1035, $t = 2e3, Qt = 2001;
    class te {
        addEventListener(t1, e) {
            void 0 === this._listeners && (this._listeners = {});
            const n = this._listeners;
            void 0 === n[t1] && (n[t1] = []), -1 === n[t1].indexOf(e) && n[t1].push(e);
        }
        hasEventListener(t1, e) {
            if (void 0 === this._listeners) return !1;
            const n = this._listeners;
            return void 0 !== n[t1] && -1 !== n[t1].indexOf(e);
        }
        removeEventListener(t1, e) {
            if (void 0 === this._listeners) return;
            const n = this._listeners[t1];
            if (void 0 !== n) {
                const t1 = n.indexOf(e);
                -1 !== t1 && n.splice(t1, 1);
            }
        }
        dispatchEvent(t1) {
            if (void 0 === this._listeners) return;
            const e = this._listeners[t1.type];
            if (void 0 !== e) {
                t1.target = this;
                const n = e.slice(0);
                for(let e = 0, i = n.length; e < i; e++)n[e].call(this, t1);
                t1.target = null;
            }
        }
    }
    const ee = [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "0a",
        "0b",
        "0c",
        "0d",
        "0e",
        "0f",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "1a",
        "1b",
        "1c",
        "1d",
        "1e",
        "1f",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "2a",
        "2b",
        "2c",
        "2d",
        "2e",
        "2f",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36",
        "37",
        "38",
        "39",
        "3a",
        "3b",
        "3c",
        "3d",
        "3e",
        "3f",
        "40",
        "41",
        "42",
        "43",
        "44",
        "45",
        "46",
        "47",
        "48",
        "49",
        "4a",
        "4b",
        "4c",
        "4d",
        "4e",
        "4f",
        "50",
        "51",
        "52",
        "53",
        "54",
        "55",
        "56",
        "57",
        "58",
        "59",
        "5a",
        "5b",
        "5c",
        "5d",
        "5e",
        "5f",
        "60",
        "61",
        "62",
        "63",
        "64",
        "65",
        "66",
        "67",
        "68",
        "69",
        "6a",
        "6b",
        "6c",
        "6d",
        "6e",
        "6f",
        "70",
        "71",
        "72",
        "73",
        "74",
        "75",
        "76",
        "77",
        "78",
        "79",
        "7a",
        "7b",
        "7c",
        "7d",
        "7e",
        "7f",
        "80",
        "81",
        "82",
        "83",
        "84",
        "85",
        "86",
        "87",
        "88",
        "89",
        "8a",
        "8b",
        "8c",
        "8d",
        "8e",
        "8f",
        "90",
        "91",
        "92",
        "93",
        "94",
        "95",
        "96",
        "97",
        "98",
        "99",
        "9a",
        "9b",
        "9c",
        "9d",
        "9e",
        "9f",
        "a0",
        "a1",
        "a2",
        "a3",
        "a4",
        "a5",
        "a6",
        "a7",
        "a8",
        "a9",
        "aa",
        "ab",
        "ac",
        "ad",
        "ae",
        "af",
        "b0",
        "b1",
        "b2",
        "b3",
        "b4",
        "b5",
        "b6",
        "b7",
        "b8",
        "b9",
        "ba",
        "bb",
        "bc",
        "bd",
        "be",
        "bf",
        "c0",
        "c1",
        "c2",
        "c3",
        "c4",
        "c5",
        "c6",
        "c7",
        "c8",
        "c9",
        "ca",
        "cb",
        "cc",
        "cd",
        "ce",
        "cf",
        "d0",
        "d1",
        "d2",
        "d3",
        "d4",
        "d5",
        "d6",
        "d7",
        "d8",
        "d9",
        "da",
        "db",
        "dc",
        "dd",
        "de",
        "df",
        "e0",
        "e1",
        "e2",
        "e3",
        "e4",
        "e5",
        "e6",
        "e7",
        "e8",
        "e9",
        "ea",
        "eb",
        "ec",
        "ed",
        "ee",
        "ef",
        "f0",
        "f1",
        "f2",
        "f3",
        "f4",
        "f5",
        "f6",
        "f7",
        "f8",
        "f9",
        "fa",
        "fb",
        "fc",
        "fd",
        "fe",
        "ff"
    ];
    let ne = 1234567;
    const ie = Math.PI / 180, re = 180 / Math.PI;
    function se() {
        const t1 = 4294967295 * Math.random() | 0, e = 4294967295 * Math.random() | 0, n = 4294967295 * Math.random() | 0, i = 4294967295 * Math.random() | 0;
        return (ee[255 & t1] + ee[t1 >> 8 & 255] + ee[t1 >> 16 & 255] + ee[t1 >> 24 & 255] + "-" + ee[255 & e] + ee[e >> 8 & 255] + "-" + ee[e >> 16 & 15 | 64] + ee[e >> 24 & 255] + "-" + ee[63 & n | 128] + ee[n >> 8 & 255] + "-" + ee[n >> 16 & 255] + ee[n >> 24 & 255] + ee[255 & i] + ee[i >> 8 & 255] + ee[i >> 16 & 255] + ee[i >> 24 & 255]).toLowerCase();
    }
    function ae(t1, e, n) {
        return Math.max(e, Math.min(n, t1));
    }
    function oe(t1, e) {
        return (t1 % e + e) % e;
    }
    function le(t1, e, n) {
        return (1 - n) * t1 + n * e;
    }
    function ce(t1) {
        return 0 == (t1 & t1 - 1) && 0 !== t1;
    }
    function he(t1) {
        return Math.pow(2, Math.floor(Math.log(t1) / Math.LN2));
    }
    function ue(t1, e) {
        switch(e.constructor){
            case Float32Array:
                return t1;
            case Uint32Array:
                return t1 / 4294967295;
            case Uint16Array:
                return t1 / 65535;
            case Uint8Array:
                return t1 / 255;
            case Int32Array:
                return Math.max(t1 / 2147483647, -1);
            case Int16Array:
                return Math.max(t1 / 32767, -1);
            case Int8Array:
                return Math.max(t1 / 127, -1);
            default:
                throw new Error("Invalid component type.");
        }
    }
    function de(t1, e) {
        switch(e.constructor){
            case Float32Array:
                return t1;
            case Uint32Array:
                return Math.round(4294967295 * t1);
            case Uint16Array:
                return Math.round(65535 * t1);
            case Uint8Array:
                return Math.round(255 * t1);
            case Int32Array:
                return Math.round(2147483647 * t1);
            case Int16Array:
                return Math.round(32767 * t1);
            case Int8Array:
                return Math.round(127 * t1);
            default:
                throw new Error("Invalid component type.");
        }
    }
    const pe = {
        DEG2RAD: ie,
        RAD2DEG: re,
        generateUUID: se,
        clamp: ae,
        euclideanModulo: oe,
        mapLinear: function(t1, e, n, i, r) {
            return i + (t1 - e) * (r - i) / (n - e);
        },
        inverseLerp: function(t1, e, n) {
            return t1 !== e ? (n - t1) / (e - t1) : 0;
        },
        lerp: le,
        damp: function(t1, e, n, i) {
            return le(t1, e, 1 - Math.exp(-n * i));
        },
        pingpong: function(t1, e = 1) {
            return e - Math.abs(oe(t1, 2 * e) - e);
        },
        smoothstep: function(t1, e, n) {
            return t1 <= e ? 0 : t1 >= n ? 1 : (t1 = (t1 - e) / (n - e)) * t1 * (3 - 2 * t1);
        },
        smootherstep: function(t1, e, n) {
            return t1 <= e ? 0 : t1 >= n ? 1 : (t1 = (t1 - e) / (n - e)) * t1 * t1 * (t1 * (6 * t1 - 15) + 10);
        },
        randInt: function(t1, e) {
            return t1 + Math.floor(Math.random() * (e - t1 + 1));
        },
        randFloat: function(t1, e) {
            return t1 + Math.random() * (e - t1);
        },
        randFloatSpread: function(t1) {
            return t1 * (.5 - Math.random());
        },
        seededRandom: function(t1) {
            void 0 !== t1 && (ne = t1);
            let e = ne += 1831565813;
            return e = Math.imul(e ^ e >>> 15, 1 | e), e ^= e + Math.imul(e ^ e >>> 7, 61 | e), ((e ^ e >>> 14) >>> 0) / 4294967296;
        },
        degToRad: function(t1) {
            return t1 * ie;
        },
        radToDeg: function(t1) {
            return t1 * re;
        },
        isPowerOfTwo: ce,
        ceilPowerOfTwo: function(t1) {
            return Math.pow(2, Math.ceil(Math.log(t1) / Math.LN2));
        },
        floorPowerOfTwo: he,
        setQuaternionFromProperEuler: function(t1, e, n, i, r) {
            const s = Math.cos, a = Math.sin, o = s(n / 2), l = a(n / 2), c = s((e + i) / 2), h = a((e + i) / 2), u = s((e - i) / 2), d = a((e - i) / 2), p = s((i - e) / 2), m = a((i - e) / 2);
            switch(r){
                case "XYX":
                    t1.set(o * h, l * u, l * d, o * c);
                    break;
                case "YZY":
                    t1.set(l * d, o * h, l * u, o * c);
                    break;
                case "ZXZ":
                    t1.set(l * u, l * d, o * h, o * c);
                    break;
                case "XZX":
                    t1.set(o * h, l * m, l * p, o * c);
                    break;
                case "YXY":
                    t1.set(l * p, o * h, l * m, o * c);
                    break;
                case "ZYZ":
                    t1.set(l * m, l * p, o * h, o * c);
                    break;
                default:
                    console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
            }
        },
        normalize: de,
        denormalize: ue
    };
    class me {
        constructor(t1 = 0, e = 0){
            me.prototype.isVector2 = !0, this.x = t1, this.y = e;
        }
        get width() {
            return this.x;
        }
        set width(t1) {
            this.x = t1;
        }
        get height() {
            return this.y;
        }
        set height(t1) {
            this.y = t1;
        }
        set(t1, e) {
            return this.x = t1, this.y = e, this;
        }
        setScalar(t1) {
            return this.x = t1, this.y = t1, this;
        }
        setX(t1) {
            return this.x = t1, this;
        }
        setY(t1) {
            return this.y = t1, this;
        }
        setComponent(t1, e) {
            switch(t1){
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t1);
            }
            return this;
        }
        getComponent(t1) {
            switch(t1){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw new Error("index is out of range: " + t1);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y);
        }
        copy(t1) {
            return this.x = t1.x, this.y = t1.y, this;
        }
        add(t1) {
            return this.x += t1.x, this.y += t1.y, this;
        }
        addScalar(t1) {
            return this.x += t1, this.y += t1, this;
        }
        addVectors(t1, e) {
            return this.x = t1.x + e.x, this.y = t1.y + e.y, this;
        }
        addScaledVector(t1, e) {
            return this.x += t1.x * e, this.y += t1.y * e, this;
        }
        sub(t1) {
            return this.x -= t1.x, this.y -= t1.y, this;
        }
        subScalar(t1) {
            return this.x -= t1, this.y -= t1, this;
        }
        subVectors(t1, e) {
            return this.x = t1.x - e.x, this.y = t1.y - e.y, this;
        }
        multiply(t1) {
            return this.x *= t1.x, this.y *= t1.y, this;
        }
        multiplyScalar(t1) {
            return this.x *= t1, this.y *= t1, this;
        }
        divide(t1) {
            return this.x /= t1.x, this.y /= t1.y, this;
        }
        divideScalar(t1) {
            return this.multiplyScalar(1 / t1);
        }
        applyMatrix3(t1) {
            const e = this.x, n = this.y, i = t1.elements;
            return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this;
        }
        min(t1) {
            return this.x = Math.min(this.x, t1.x), this.y = Math.min(this.y, t1.y), this;
        }
        max(t1) {
            return this.x = Math.max(this.x, t1.x), this.y = Math.max(this.y, t1.y), this;
        }
        clamp(t1, e) {
            return this.x = Math.max(t1.x, Math.min(e.x, this.x)), this.y = Math.max(t1.y, Math.min(e.y, this.y)), this;
        }
        clampScalar(t1, e) {
            return this.x = Math.max(t1, Math.min(e, this.x)), this.y = Math.max(t1, Math.min(e, this.y)), this;
        }
        clampLength(t1, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t1, Math.min(e, n)));
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
        }
        roundToZero() {
            return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this;
        }
        dot(t1) {
            return this.x * t1.x + this.y * t1.y;
        }
        cross(t1) {
            return this.x * t1.y - this.y * t1.x;
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y;
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y);
        }
        normalize() {
            return this.divideScalar(this.length() || 1);
        }
        angle() {
            return Math.atan2(-this.y, -this.x) + Math.PI;
        }
        angleTo(t1) {
            const e = Math.sqrt(this.lengthSq() * t1.lengthSq());
            if (0 === e) return Math.PI / 2;
            const n = this.dot(t1) / e;
            return Math.acos(ae(n, -1, 1));
        }
        distanceTo(t1) {
            return Math.sqrt(this.distanceToSquared(t1));
        }
        distanceToSquared(t1) {
            const e = this.x - t1.x, n = this.y - t1.y;
            return e * e + n * n;
        }
        manhattanDistanceTo(t1) {
            return Math.abs(this.x - t1.x) + Math.abs(this.y - t1.y);
        }
        setLength(t1) {
            return this.normalize().multiplyScalar(t1);
        }
        lerp(t1, e) {
            return this.x += (t1.x - this.x) * e, this.y += (t1.y - this.y) * e, this;
        }
        lerpVectors(t1, e, n) {
            return this.x = t1.x + (e.x - t1.x) * n, this.y = t1.y + (e.y - t1.y) * n, this;
        }
        equals(t1) {
            return t1.x === this.x && t1.y === this.y;
        }
        fromArray(t1, e = 0) {
            return this.x = t1[e], this.y = t1[e + 1], this;
        }
        toArray(t1 = [], e = 0) {
            return t1[e] = this.x, t1[e + 1] = this.y, t1;
        }
        fromBufferAttribute(t1, e) {
            return this.x = t1.getX(e), this.y = t1.getY(e), this;
        }
        rotateAround(t1, e) {
            const n = Math.cos(e), i = Math.sin(e), r = this.x - t1.x, s = this.y - t1.y;
            return this.x = r * n - s * i + t1.x, this.y = r * i + s * n + t1.y, this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this;
        }
        *[Symbol.iterator]() {
            yield this.x, yield this.y;
        }
    }
    class fe {
        constructor(t1, e, n, i, r, s, a, o, l){
            fe.prototype.isMatrix3 = !0, this.elements = [
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1
            ], void 0 !== t1 && this.set(t1, e, n, i, r, s, a, o, l);
        }
        set(t1, e, n, i, r, s, a, o, l) {
            const c = this.elements;
            return c[0] = t1, c[1] = i, c[2] = a, c[3] = e, c[4] = r, c[5] = o, c[6] = n, c[7] = s, c[8] = l, this;
        }
        identity() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
        }
        copy(t1) {
            const e = this.elements, n = t1.elements;
            return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
        }
        extractBasis(t1, e, n) {
            return t1.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
        }
        setFromMatrix4(t1) {
            const e = t1.elements;
            return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
        }
        multiply(t1) {
            return this.multiplyMatrices(this, t1);
        }
        premultiply(t1) {
            return this.multiplyMatrices(t1, this);
        }
        multiplyMatrices(t1, e) {
            const n = t1.elements, i = e.elements, r = this.elements, s = n[0], a = n[3], o = n[6], l = n[1], c = n[4], h = n[7], u = n[2], d = n[5], p = n[8], m = i[0], f = i[3], g = i[6], _ = i[1], v = i[4], x = i[7], y = i[2], M = i[5], S = i[8];
            return r[0] = s * m + a * _ + o * y, r[3] = s * f + a * v + o * M, r[6] = s * g + a * x + o * S, r[1] = l * m + c * _ + h * y, r[4] = l * f + c * v + h * M, r[7] = l * g + c * x + h * S, r[2] = u * m + d * _ + p * y, r[5] = u * f + d * v + p * M, r[8] = u * g + d * x + p * S, this;
        }
        multiplyScalar(t1) {
            const e = this.elements;
            return e[0] *= t1, e[3] *= t1, e[6] *= t1, e[1] *= t1, e[4] *= t1, e[7] *= t1, e[2] *= t1, e[5] *= t1, e[8] *= t1, this;
        }
        determinant() {
            const t1 = this.elements, e = t1[0], n = t1[1], i = t1[2], r = t1[3], s = t1[4], a = t1[5], o = t1[6], l = t1[7], c = t1[8];
            return e * s * c - e * a * l - n * r * c + n * a * o + i * r * l - i * s * o;
        }
        invert() {
            const t1 = this.elements, e = t1[0], n = t1[1], i = t1[2], r = t1[3], s = t1[4], a = t1[5], o = t1[6], l = t1[7], c = t1[8], h = c * s - a * l, u = a * o - c * r, d = l * r - s * o, p = e * h + n * u + i * d;
            if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
            const m = 1 / p;
            return t1[0] = h * m, t1[1] = (i * l - c * n) * m, t1[2] = (a * n - i * s) * m, t1[3] = u * m, t1[4] = (c * e - i * o) * m, t1[5] = (i * r - a * e) * m, t1[6] = d * m, t1[7] = (n * o - l * e) * m, t1[8] = (s * e - n * r) * m, this;
        }
        transpose() {
            let t1;
            const e = this.elements;
            return t1 = e[1], e[1] = e[3], e[3] = t1, t1 = e[2], e[2] = e[6], e[6] = t1, t1 = e[5], e[5] = e[7], e[7] = t1, this;
        }
        getNormalMatrix(t1) {
            return this.setFromMatrix4(t1).invert().transpose();
        }
        transposeIntoArray(t1) {
            const e = this.elements;
            return t1[0] = e[0], t1[1] = e[3], t1[2] = e[6], t1[3] = e[1], t1[4] = e[4], t1[5] = e[7], t1[6] = e[2], t1[7] = e[5], t1[8] = e[8], this;
        }
        setUvTransform(t1, e, n, i, r, s, a) {
            const o = Math.cos(r), l = Math.sin(r);
            return this.set(n * o, n * l, -n * (o * s + l * a) + s + t1, -i * l, i * o, -i * (-l * s + o * a) + a + e, 0, 0, 1), this;
        }
        scale(t1, e) {
            return this.premultiply(ge.makeScale(t1, e)), this;
        }
        rotate(t1) {
            return this.premultiply(ge.makeRotation(-t1)), this;
        }
        translate(t1, e) {
            return this.premultiply(ge.makeTranslation(t1, e)), this;
        }
        makeTranslation(t1, e) {
            return t1.isVector2 ? this.set(1, 0, t1.x, 0, 1, t1.y, 0, 0, 1) : this.set(1, 0, t1, 0, 1, e, 0, 0, 1), this;
        }
        makeRotation(t1) {
            const e = Math.cos(t1), n = Math.sin(t1);
            return this.set(e, -n, 0, n, e, 0, 0, 0, 1), this;
        }
        makeScale(t1, e) {
            return this.set(t1, 0, 0, 0, e, 0, 0, 0, 1), this;
        }
        equals(t1) {
            const e = this.elements, n = t1.elements;
            for(let t1 = 0; t1 < 9; t1++)if (e[t1] !== n[t1]) return !1;
            return !0;
        }
        fromArray(t1, e = 0) {
            for(let n = 0; n < 9; n++)this.elements[n] = t1[n + e];
            return this;
        }
        toArray(t1 = [], e = 0) {
            const n = this.elements;
            return t1[e] = n[0], t1[e + 1] = n[1], t1[e + 2] = n[2], t1[e + 3] = n[3], t1[e + 4] = n[4], t1[e + 5] = n[5], t1[e + 6] = n[6], t1[e + 7] = n[7], t1[e + 8] = n[8], t1;
        }
        clone() {
            return (new this.constructor).fromArray(this.elements);
        }
    }
    const ge = new fe;
    function _e(t1) {
        for(let e = t1.length - 1; e >= 0; --e)if (t1[e] >= 65535) return !0;
        return !1;
    }
    const ve = {
        Int8Array: Int8Array,
        Uint8Array: Uint8Array,
        Uint8ClampedArray: Uint8ClampedArray,
        Int16Array: Int16Array,
        Uint16Array: Uint16Array,
        Int32Array: Int32Array,
        Uint32Array: Uint32Array,
        Float32Array: Float32Array,
        Float64Array: Float64Array
    };
    function xe(t1, e) {
        return new ve[t1](e);
    }
    function ye(t1) {
        return document.createElementNS("http://www.w3.org/1999/xhtml", t1);
    }
    function Me() {
        const t1 = ye("canvas");
        return t1.style.display = "block", t1;
    }
    const Se = {};
    function be(t1) {
        t1 in Se || (Se[t1] = !0, console.warn(t1));
    }
    const Te = (new fe).set(.8224621, .177538, 0, .0331941, .9668058, 0, .0170827, .0723974, .9105199), Ee = (new fe).set(1.2249401, -0.2249404, 0, -0.0420569, 1.0420571, 0, -0.0196376, -0.0786361, 1.0982735), we = {
        [Ht]: {
            transfer: Wt,
            primaries: jt,
            toReference: (t1)=>t1,
            fromReference: (t1)=>t1
        },
        [Gt]: {
            transfer: Xt,
            primaries: jt,
            toReference: (t1)=>t1.convertSRGBToLinear(),
            fromReference: (t1)=>t1.convertLinearToSRGB()
        },
        [kt]: {
            transfer: Wt,
            primaries: qt,
            toReference: (t1)=>t1.applyMatrix3(Ee),
            fromReference: (t1)=>t1.applyMatrix3(Te)
        },
        [Vt]: {
            transfer: Xt,
            primaries: qt,
            toReference: (t1)=>t1.convertSRGBToLinear().applyMatrix3(Ee),
            fromReference: (t1)=>t1.applyMatrix3(Te).convertLinearToSRGB()
        }
    }, Ae = new Set([
        Ht,
        kt
    ]), Re = {
        enabled: !0,
        _workingColorSpace: Ht,
        get workingColorSpace () {
            return this._workingColorSpace;
        },
        set workingColorSpace (t){
            if (!Ae.has(t)) throw new Error(`Unsupported working color space, "${t}".`);
            this._workingColorSpace = t;
        },
        convert: function(t1, e, n) {
            if (!1 === this.enabled || e === n || !e || !n) return t1;
            const i = we[e].toReference;
            return (0, we[n].fromReference)(i(t1));
        },
        fromWorkingColorSpace: function(t1, e) {
            return this.convert(t1, this._workingColorSpace, e);
        },
        toWorkingColorSpace: function(t1, e) {
            return this.convert(t1, e, this._workingColorSpace);
        },
        getPrimaries: function(t1) {
            return we[t1].primaries;
        },
        getTransfer: function(t1) {
            return t1 === zt ? Wt : we[t1].transfer;
        }
    };
    function Ce(t1) {
        return t1 < .04045 ? .0773993808 * t1 : Math.pow(.9478672986 * t1 + .0521327014, 2.4);
    }
    function Le(t1) {
        return t1 < .0031308 ? 12.92 * t1 : 1.055 * Math.pow(t1, .41666) - .055;
    }
    let Pe;
    class Ie {
        static getDataURL(t1) {
            if (/^data:/i.test(t1.src)) return t1.src;
            if ("undefined" == typeof HTMLCanvasElement) return t1.src;
            let e;
            if (t1 instanceof HTMLCanvasElement) e = t1;
            else {
                void 0 === Pe && (Pe = ye("canvas")), Pe.width = t1.width, Pe.height = t1.height;
                const n = Pe.getContext("2d");
                t1 instanceof ImageData ? n.putImageData(t1, 0, 0) : n.drawImage(t1, 0, 0, t1.width, t1.height), e = Pe;
            }
            return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t1), e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png");
        }
        static sRGBToLinear(t1) {
            if ("undefined" != typeof HTMLImageElement && t1 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t1 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t1 instanceof ImageBitmap) {
                const e = ye("canvas");
                e.width = t1.width, e.height = t1.height;
                const n = e.getContext("2d");
                n.drawImage(t1, 0, 0, t1.width, t1.height);
                const i = n.getImageData(0, 0, t1.width, t1.height), r = i.data;
                for(let t1 = 0; t1 < r.length; t1++)r[t1] = 255 * Ce(r[t1] / 255);
                return n.putImageData(i, 0, 0), e;
            }
            if (t1.data) {
                const e = t1.data.slice(0);
                for(let t1 = 0; t1 < e.length; t1++)e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[t1] = Math.floor(255 * Ce(e[t1] / 255)) : e[t1] = Ce(e[t1]);
                return {
                    data: e,
                    width: t1.width,
                    height: t1.height
                };
            }
            return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t1;
        }
    }
    let Ue = 0;
    class De {
        constructor(t1 = null){
            this.isSource = !0, Object.defineProperty(this, "id", {
                value: Ue++
            }), this.uuid = se(), this.data = t1, this.version = 0;
        }
        set needsUpdate(t1) {
            !0 === t1 && this.version++;
        }
        toJSON(t1) {
            const e = void 0 === t1 || "string" == typeof t1;
            if (!e && void 0 !== t1.images[this.uuid]) return t1.images[this.uuid];
            const n = {
                uuid: this.uuid,
                url: ""
            }, i = this.data;
            if (null !== i) {
                let t1;
                if (Array.isArray(i)) {
                    t1 = [];
                    for(let e = 0, n = i.length; e < n; e++)i[e].isDataTexture ? t1.push(Ne(i[e].image)) : t1.push(Ne(i[e]));
                } else t1 = Ne(i);
                n.url = t1;
            }
            return e || (t1.images[this.uuid] = n), n;
        }
    }
    function Ne(t1) {
        return "undefined" != typeof HTMLImageElement && t1 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t1 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t1 instanceof ImageBitmap ? Ie.getDataURL(t1) : t1.data ? {
            data: Array.from(t1.data),
            width: t1.width,
            height: t1.height,
            type: t1.data.constructor.name
        } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
    }
    let Oe = 0;
    class Fe extends te {
        constructor(t1 = Fe.DEFAULT_IMAGE, e = Fe.DEFAULT_MAPPING, n = 1001, i = 1001, r = 1006, s = 1008, a = 1023, o = 1009, l = Fe.DEFAULT_ANISOTROPY, c = ""){
            super(), this.isTexture = !0, Object.defineProperty(this, "id", {
                value: Oe++
            }), this.uuid = se(), this.name = "", this.source = new De(t1), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = s, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = o, this.offset = new me(0, 0), this.repeat = new me(1, 1), this.center = new me(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new fe, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, "string" == typeof c ? this.colorSpace = c : (be("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = c === Bt ? Gt : zt), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
        }
        get image() {
            return this.source.data;
        }
        set image(t1 = null) {
            this.source.data = t1;
        }
        updateMatrix() {
            this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t1) {
            return this.name = t1.name, this.source = t1.source, this.mipmaps = t1.mipmaps.slice(0), this.mapping = t1.mapping, this.channel = t1.channel, this.wrapS = t1.wrapS, this.wrapT = t1.wrapT, this.magFilter = t1.magFilter, this.minFilter = t1.minFilter, this.anisotropy = t1.anisotropy, this.format = t1.format, this.internalFormat = t1.internalFormat, this.type = t1.type, this.offset.copy(t1.offset), this.repeat.copy(t1.repeat), this.center.copy(t1.center), this.rotation = t1.rotation, this.matrixAutoUpdate = t1.matrixAutoUpdate, this.matrix.copy(t1.matrix), this.generateMipmaps = t1.generateMipmaps, this.premultiplyAlpha = t1.premultiplyAlpha, this.flipY = t1.flipY, this.unpackAlignment = t1.unpackAlignment, this.colorSpace = t1.colorSpace, this.userData = JSON.parse(JSON.stringify(t1.userData)), this.needsUpdate = !0, this;
        }
        toJSON(t1) {
            const e = void 0 === t1 || "string" == typeof t1;
            if (!e && void 0 !== t1.textures[this.uuid]) return t1.textures[this.uuid];
            const n = {
                metadata: {
                    version: 4.6,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                image: this.source.toJSON(t1).uuid,
                mapping: this.mapping,
                channel: this.channel,
                repeat: [
                    this.repeat.x,
                    this.repeat.y
                ],
                offset: [
                    this.offset.x,
                    this.offset.y
                ],
                center: [
                    this.center.x,
                    this.center.y
                ],
                rotation: this.rotation,
                wrap: [
                    this.wrapS,
                    this.wrapT
                ],
                format: this.format,
                internalFormat: this.internalFormat,
                type: this.type,
                colorSpace: this.colorSpace,
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY,
                generateMipmaps: this.generateMipmaps,
                premultiplyAlpha: this.premultiplyAlpha,
                unpackAlignment: this.unpackAlignment
            };
            return Object.keys(this.userData).length > 0 && (n.userData = this.userData), e || (t1.textures[this.uuid] = n), n;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
        transformUv(t1) {
            if (this.mapping !== S) return t1;
            if (t1.applyMatrix3(this.matrix), t1.x < 0 || t1.x > 1) switch(this.wrapS){
                case R:
                    t1.x = t1.x - Math.floor(t1.x);
                    break;
                case C:
                    t1.x = t1.x < 0 ? 0 : 1;
                    break;
                case L:
                    1 === Math.abs(Math.floor(t1.x) % 2) ? t1.x = Math.ceil(t1.x) - t1.x : t1.x = t1.x - Math.floor(t1.x);
            }
            if (t1.y < 0 || t1.y > 1) switch(this.wrapT){
                case R:
                    t1.y = t1.y - Math.floor(t1.y);
                    break;
                case C:
                    t1.y = t1.y < 0 ? 0 : 1;
                    break;
                case L:
                    1 === Math.abs(Math.floor(t1.y) % 2) ? t1.y = Math.ceil(t1.y) - t1.y : t1.y = t1.y - Math.floor(t1.y);
            }
            return this.flipY && (t1.y = 1 - t1.y), t1;
        }
        set needsUpdate(t1) {
            !0 === t1 && (this.version++, this.source.needsUpdate = !0);
        }
        get encoding() {
            return be("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === Gt ? Bt : Ft;
        }
        set encoding(t1) {
            be("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = t1 === Bt ? Gt : zt;
        }
    }
    Fe.DEFAULT_IMAGE = null, Fe.DEFAULT_MAPPING = S, Fe.DEFAULT_ANISOTROPY = 1;
    class Be {
        constructor(t1 = 0, e = 0, n = 0, i = 1){
            Be.prototype.isVector4 = !0, this.x = t1, this.y = e, this.z = n, this.w = i;
        }
        get width() {
            return this.z;
        }
        set width(t1) {
            this.z = t1;
        }
        get height() {
            return this.w;
        }
        set height(t1) {
            this.w = t1;
        }
        set(t1, e, n, i) {
            return this.x = t1, this.y = e, this.z = n, this.w = i, this;
        }
        setScalar(t1) {
            return this.x = t1, this.y = t1, this.z = t1, this.w = t1, this;
        }
        setX(t1) {
            return this.x = t1, this;
        }
        setY(t1) {
            return this.y = t1, this;
        }
        setZ(t1) {
            return this.z = t1, this;
        }
        setW(t1) {
            return this.w = t1, this;
        }
        setComponent(t1, e) {
            switch(t1){
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                case 3:
                    this.w = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t1);
            }
            return this;
        }
        getComponent(t1) {
            switch(t1){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw new Error("index is out of range: " + t1);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y, this.z, this.w);
        }
        copy(t1) {
            return this.x = t1.x, this.y = t1.y, this.z = t1.z, this.w = void 0 !== t1.w ? t1.w : 1, this;
        }
        add(t1) {
            return this.x += t1.x, this.y += t1.y, this.z += t1.z, this.w += t1.w, this;
        }
        addScalar(t1) {
            return this.x += t1, this.y += t1, this.z += t1, this.w += t1, this;
        }
        addVectors(t1, e) {
            return this.x = t1.x + e.x, this.y = t1.y + e.y, this.z = t1.z + e.z, this.w = t1.w + e.w, this;
        }
        addScaledVector(t1, e) {
            return this.x += t1.x * e, this.y += t1.y * e, this.z += t1.z * e, this.w += t1.w * e, this;
        }
        sub(t1) {
            return this.x -= t1.x, this.y -= t1.y, this.z -= t1.z, this.w -= t1.w, this;
        }
        subScalar(t1) {
            return this.x -= t1, this.y -= t1, this.z -= t1, this.w -= t1, this;
        }
        subVectors(t1, e) {
            return this.x = t1.x - e.x, this.y = t1.y - e.y, this.z = t1.z - e.z, this.w = t1.w - e.w, this;
        }
        multiply(t1) {
            return this.x *= t1.x, this.y *= t1.y, this.z *= t1.z, this.w *= t1.w, this;
        }
        multiplyScalar(t1) {
            return this.x *= t1, this.y *= t1, this.z *= t1, this.w *= t1, this;
        }
        applyMatrix4(t1) {
            const e = this.x, n = this.y, i = this.z, r = this.w, s = t1.elements;
            return this.x = s[0] * e + s[4] * n + s[8] * i + s[12] * r, this.y = s[1] * e + s[5] * n + s[9] * i + s[13] * r, this.z = s[2] * e + s[6] * n + s[10] * i + s[14] * r, this.w = s[3] * e + s[7] * n + s[11] * i + s[15] * r, this;
        }
        divideScalar(t1) {
            return this.multiplyScalar(1 / t1);
        }
        setAxisAngleFromQuaternion(t1) {
            this.w = 2 * Math.acos(t1.w);
            const e = Math.sqrt(1 - t1.w * t1.w);
            return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t1.x / e, this.y = t1.y / e, this.z = t1.z / e), this;
        }
        setAxisAngleFromRotationMatrix(t1) {
            let e, n, i, r;
            const s = .01, a = .1, o = t1.elements, l = o[0], c = o[4], h = o[8], u = o[1], d = o[5], p = o[9], m = o[2], f = o[6], g = o[10];
            if (Math.abs(c - u) < s && Math.abs(h - m) < s && Math.abs(p - f) < s) {
                if (Math.abs(c + u) < a && Math.abs(h + m) < a && Math.abs(p + f) < a && Math.abs(l + d + g - 3) < a) return this.set(1, 0, 0, 0), this;
                e = Math.PI;
                const t1 = (l + 1) / 2, o = (d + 1) / 2, _ = (g + 1) / 2, v = (c + u) / 4, x = (h + m) / 4, y = (p + f) / 4;
                return t1 > o && t1 > _ ? t1 < s ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(t1), i = v / n, r = x / n) : o > _ ? o < s ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(o), n = v / i, r = y / i) : _ < s ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(_), n = x / r, i = y / r), this.set(n, i, r, e), this;
            }
            let _ = Math.sqrt((f - p) * (f - p) + (h - m) * (h - m) + (u - c) * (u - c));
            return Math.abs(_) < .001 && (_ = 1), this.x = (f - p) / _, this.y = (h - m) / _, this.z = (u - c) / _, this.w = Math.acos((l + d + g - 1) / 2), this;
        }
        min(t1) {
            return this.x = Math.min(this.x, t1.x), this.y = Math.min(this.y, t1.y), this.z = Math.min(this.z, t1.z), this.w = Math.min(this.w, t1.w), this;
        }
        max(t1) {
            return this.x = Math.max(this.x, t1.x), this.y = Math.max(this.y, t1.y), this.z = Math.max(this.z, t1.z), this.w = Math.max(this.w, t1.w), this;
        }
        clamp(t1, e) {
            return this.x = Math.max(t1.x, Math.min(e.x, this.x)), this.y = Math.max(t1.y, Math.min(e.y, this.y)), this.z = Math.max(t1.z, Math.min(e.z, this.z)), this.w = Math.max(t1.w, Math.min(e.w, this.w)), this;
        }
        clampScalar(t1, e) {
            return this.x = Math.max(t1, Math.min(e, this.x)), this.y = Math.max(t1, Math.min(e, this.y)), this.z = Math.max(t1, Math.min(e, this.z)), this.w = Math.max(t1, Math.min(e, this.w)), this;
        }
        clampLength(t1, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t1, Math.min(e, n)));
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
        }
        roundToZero() {
            return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
        }
        dot(t1) {
            return this.x * t1.x + this.y * t1.y + this.z * t1.z + this.w * t1.w;
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
        }
        normalize() {
            return this.divideScalar(this.length() || 1);
        }
        setLength(t1) {
            return this.normalize().multiplyScalar(t1);
        }
        lerp(t1, e) {
            return this.x += (t1.x - this.x) * e, this.y += (t1.y - this.y) * e, this.z += (t1.z - this.z) * e, this.w += (t1.w - this.w) * e, this;
        }
        lerpVectors(t1, e, n) {
            return this.x = t1.x + (e.x - t1.x) * n, this.y = t1.y + (e.y - t1.y) * n, this.z = t1.z + (e.z - t1.z) * n, this.w = t1.w + (e.w - t1.w) * n, this;
        }
        equals(t1) {
            return t1.x === this.x && t1.y === this.y && t1.z === this.z && t1.w === this.w;
        }
        fromArray(t1, e = 0) {
            return this.x = t1[e], this.y = t1[e + 1], this.z = t1[e + 2], this.w = t1[e + 3], this;
        }
        toArray(t1 = [], e = 0) {
            return t1[e] = this.x, t1[e + 1] = this.y, t1[e + 2] = this.z, t1[e + 3] = this.w, t1;
        }
        fromBufferAttribute(t1, e) {
            return this.x = t1.getX(e), this.y = t1.getY(e), this.z = t1.getZ(e), this.w = t1.getW(e), this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
        }
        *[Symbol.iterator]() {
            yield this.x, yield this.y, yield this.z, yield this.w;
        }
    }
    class ze extends te {
        constructor(t1 = 1, e = 1, n = {}){
            super(), this.isRenderTarget = !0, this.width = t1, this.height = e, this.depth = 1, this.scissor = new Be(0, 0, t1, e), this.scissorTest = !1, this.viewport = new Be(0, 0, t1, e);
            const i = {
                width: t1,
                height: e,
                depth: 1
            };
            void 0 !== n.encoding && (be("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === Bt ? Gt : zt), n = Object.assign({
                generateMipmaps: !1,
                internalFormat: null,
                minFilter: D,
                depthBuffer: !0,
                stencilBuffer: !1,
                depthTexture: null,
                samples: 0
            }, n), this.texture = new Fe(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps, this.texture.internalFormat = n.internalFormat, this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
        }
        setSize(t1, e, n = 1) {
            this.width === t1 && this.height === e && this.depth === n || (this.width = t1, this.height = e, this.depth = n, this.texture.image.width = t1, this.texture.image.height = e, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, t1, e), this.scissor.set(0, 0, t1, e);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t1) {
            this.width = t1.width, this.height = t1.height, this.depth = t1.depth, this.scissor.copy(t1.scissor), this.scissorTest = t1.scissorTest, this.viewport.copy(t1.viewport), this.texture = t1.texture.clone(), this.texture.isRenderTargetTexture = !0;
            const e = Object.assign({}, t1.texture.image);
            return this.texture.source = new De(e), this.depthBuffer = t1.depthBuffer, this.stencilBuffer = t1.stencilBuffer, null !== t1.depthTexture && (this.depthTexture = t1.depthTexture.clone()), this.samples = t1.samples, this;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
    }
    class Ge extends ze {
        constructor(t1 = 1, e = 1, n = {}){
            super(t1, e, n), this.isWebGLRenderTarget = !0;
        }
    }
    class He extends Fe {
        constructor(t1 = null, e = 1, n = 1, i = 1){
            super(null), this.isDataArrayTexture = !0, this.image = {
                data: t1,
                width: e,
                height: n,
                depth: i
            }, this.magFilter = P, this.minFilter = P, this.wrapR = C, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
        }
    }
    class Ve extends Fe {
        constructor(t1 = null, e = 1, n = 1, i = 1){
            super(null), this.isData3DTexture = !0, this.image = {
                data: t1,
                width: e,
                height: n,
                depth: i
            }, this.magFilter = P, this.minFilter = P, this.wrapR = C, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
        }
    }
    class ke {
        constructor(t1 = 0, e = 0, n = 0, i = 1){
            this.isQuaternion = !0, this._x = t1, this._y = e, this._z = n, this._w = i;
        }
        static slerpFlat(t1, e, n, i, r, s, a) {
            let o = n[i + 0], l = n[i + 1], c = n[i + 2], h = n[i + 3];
            const u = r[s + 0], d = r[s + 1], p = r[s + 2], m = r[s + 3];
            if (0 === a) return t1[e + 0] = o, t1[e + 1] = l, t1[e + 2] = c, void (t1[e + 3] = h);
            if (1 === a) return t1[e + 0] = u, t1[e + 1] = d, t1[e + 2] = p, void (t1[e + 3] = m);
            if (h !== m || o !== u || l !== d || c !== p) {
                let t1 = 1 - a;
                const e = o * u + l * d + c * p + h * m, n = e >= 0 ? 1 : -1, i = 1 - e * e;
                if (i > Number.EPSILON) {
                    const r = Math.sqrt(i), s = Math.atan2(r, e * n);
                    t1 = Math.sin(t1 * s) / r, a = Math.sin(a * s) / r;
                }
                const r = a * n;
                if (o = o * t1 + u * r, l = l * t1 + d * r, c = c * t1 + p * r, h = h * t1 + m * r, t1 === 1 - a) {
                    const t1 = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
                    o *= t1, l *= t1, c *= t1, h *= t1;
                }
            }
            t1[e] = o, t1[e + 1] = l, t1[e + 2] = c, t1[e + 3] = h;
        }
        static multiplyQuaternionsFlat(t1, e, n, i, r, s) {
            const a = n[i], o = n[i + 1], l = n[i + 2], c = n[i + 3], h = r[s], u = r[s + 1], d = r[s + 2], p = r[s + 3];
            return t1[e] = a * p + c * h + o * d - l * u, t1[e + 1] = o * p + c * u + l * h - a * d, t1[e + 2] = l * p + c * d + a * u - o * h, t1[e + 3] = c * p - a * h - o * u - l * d, t1;
        }
        get x() {
            return this._x;
        }
        set x(t1) {
            this._x = t1, this._onChangeCallback();
        }
        get y() {
            return this._y;
        }
        set y(t1) {
            this._y = t1, this._onChangeCallback();
        }
        get z() {
            return this._z;
        }
        set z(t1) {
            this._z = t1, this._onChangeCallback();
        }
        get w() {
            return this._w;
        }
        set w(t1) {
            this._w = t1, this._onChangeCallback();
        }
        set(t1, e, n, i) {
            return this._x = t1, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this;
        }
        clone() {
            return new this.constructor(this._x, this._y, this._z, this._w);
        }
        copy(t1) {
            return this._x = t1.x, this._y = t1.y, this._z = t1.z, this._w = t1.w, this._onChangeCallback(), this;
        }
        setFromEuler(t1, e = !0) {
            const n = t1._x, i = t1._y, r = t1._z, s = t1._order, a = Math.cos, o = Math.sin, l = a(n / 2), c = a(i / 2), h = a(r / 2), u = o(n / 2), d = o(i / 2), p = o(r / 2);
            switch(s){
                case "XYZ":
                    this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
                    break;
                case "YXZ":
                    this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
                    break;
                case "ZXY":
                    this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
                    break;
                case "ZYX":
                    this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
                    break;
                case "YZX":
                    this._x = u * c * h + l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h - u * d * p;
                    break;
                case "XZY":
                    this._x = u * c * h - l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h + u * d * p;
                    break;
                default:
                    console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s);
            }
            return !0 === e && this._onChangeCallback(), this;
        }
        setFromAxisAngle(t1, e) {
            const n = e / 2, i = Math.sin(n);
            return this._x = t1.x * i, this._y = t1.y * i, this._z = t1.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
        }
        setFromRotationMatrix(t1) {
            const e = t1.elements, n = e[0], i = e[4], r = e[8], s = e[1], a = e[5], o = e[9], l = e[2], c = e[6], h = e[10], u = n + a + h;
            if (u > 0) {
                const t1 = .5 / Math.sqrt(u + 1);
                this._w = .25 / t1, this._x = (c - o) * t1, this._y = (r - l) * t1, this._z = (s - i) * t1;
            } else if (n > a && n > h) {
                const t1 = 2 * Math.sqrt(1 + n - a - h);
                this._w = (c - o) / t1, this._x = .25 * t1, this._y = (i + s) / t1, this._z = (r + l) / t1;
            } else if (a > h) {
                const t1 = 2 * Math.sqrt(1 + a - n - h);
                this._w = (r - l) / t1, this._x = (i + s) / t1, this._y = .25 * t1, this._z = (o + c) / t1;
            } else {
                const t1 = 2 * Math.sqrt(1 + h - n - a);
                this._w = (s - i) / t1, this._x = (r + l) / t1, this._y = (o + c) / t1, this._z = .25 * t1;
            }
            return this._onChangeCallback(), this;
        }
        setFromUnitVectors(t1, e) {
            let n = t1.dot(e) + 1;
            return n < Number.EPSILON ? (n = 0, Math.abs(t1.x) > Math.abs(t1.z) ? (this._x = -t1.y, this._y = t1.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t1.z, this._z = t1.y, this._w = n)) : (this._x = t1.y * e.z - t1.z * e.y, this._y = t1.z * e.x - t1.x * e.z, this._z = t1.x * e.y - t1.y * e.x, this._w = n), this.normalize();
        }
        angleTo(t1) {
            return 2 * Math.acos(Math.abs(ae(this.dot(t1), -1, 1)));
        }
        rotateTowards(t1, e) {
            const n = this.angleTo(t1);
            if (0 === n) return this;
            const i = Math.min(1, e / n);
            return this.slerp(t1, i), this;
        }
        identity() {
            return this.set(0, 0, 0, 1);
        }
        invert() {
            return this.conjugate();
        }
        conjugate() {
            return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
        }
        dot(t1) {
            return this._x * t1._x + this._y * t1._y + this._z * t1._z + this._w * t1._w;
        }
        lengthSq() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
        }
        length() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
        }
        normalize() {
            let t1 = this.length();
            return 0 === t1 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t1 = 1 / t1, this._x = this._x * t1, this._y = this._y * t1, this._z = this._z * t1, this._w = this._w * t1), this._onChangeCallback(), this;
        }
        multiply(t1) {
            return this.multiplyQuaternions(this, t1);
        }
        premultiply(t1) {
            return this.multiplyQuaternions(t1, this);
        }
        multiplyQuaternions(t1, e) {
            const n = t1._x, i = t1._y, r = t1._z, s = t1._w, a = e._x, o = e._y, l = e._z, c = e._w;
            return this._x = n * c + s * a + i * l - r * o, this._y = i * c + s * o + r * a - n * l, this._z = r * c + s * l + n * o - i * a, this._w = s * c - n * a - i * o - r * l, this._onChangeCallback(), this;
        }
        slerp(t1, e) {
            if (0 === e) return this;
            if (1 === e) return this.copy(t1);
            const n = this._x, i = this._y, r = this._z, s = this._w;
            let a = s * t1._w + n * t1._x + i * t1._y + r * t1._z;
            if (a < 0 ? (this._w = -t1._w, this._x = -t1._x, this._y = -t1._y, this._z = -t1._z, a = -a) : this.copy(t1), a >= 1) return this._w = s, this._x = n, this._y = i, this._z = r, this;
            const o = 1 - a * a;
            if (o <= Number.EPSILON) {
                const t1 = 1 - e;
                return this._w = t1 * s + e * this._w, this._x = t1 * n + e * this._x, this._y = t1 * i + e * this._y, this._z = t1 * r + e * this._z, this.normalize(), this;
            }
            const l = Math.sqrt(o), c = Math.atan2(l, a), h = Math.sin((1 - e) * c) / l, u = Math.sin(e * c) / l;
            return this._w = s * h + this._w * u, this._x = n * h + this._x * u, this._y = i * h + this._y * u, this._z = r * h + this._z * u, this._onChangeCallback(), this;
        }
        slerpQuaternions(t1, e, n) {
            return this.copy(t1).slerp(e, n);
        }
        random() {
            const t1 = Math.random(), e = Math.sqrt(1 - t1), n = Math.sqrt(t1), i = 2 * Math.PI * Math.random(), r = 2 * Math.PI * Math.random();
            return this.set(e * Math.cos(i), n * Math.sin(r), n * Math.cos(r), e * Math.sin(i));
        }
        equals(t1) {
            return t1._x === this._x && t1._y === this._y && t1._z === this._z && t1._w === this._w;
        }
        fromArray(t1, e = 0) {
            return this._x = t1[e], this._y = t1[e + 1], this._z = t1[e + 2], this._w = t1[e + 3], this._onChangeCallback(), this;
        }
        toArray(t1 = [], e = 0) {
            return t1[e] = this._x, t1[e + 1] = this._y, t1[e + 2] = this._z, t1[e + 3] = this._w, t1;
        }
        fromBufferAttribute(t1, e) {
            return this._x = t1.getX(e), this._y = t1.getY(e), this._z = t1.getZ(e), this._w = t1.getW(e), this._onChangeCallback(), this;
        }
        toJSON() {
            return this.toArray();
        }
        _onChange(t1) {
            return this._onChangeCallback = t1, this;
        }
        _onChangeCallback() {}
        *[Symbol.iterator]() {
            yield this._x, yield this._y, yield this._z, yield this._w;
        }
    }
    class We {
        constructor(t1 = 0, e = 0, n = 0){
            We.prototype.isVector3 = !0, this.x = t1, this.y = e, this.z = n;
        }
        set(t1, e, n) {
            return void 0 === n && (n = this.z), this.x = t1, this.y = e, this.z = n, this;
        }
        setScalar(t1) {
            return this.x = t1, this.y = t1, this.z = t1, this;
        }
        setX(t1) {
            return this.x = t1, this;
        }
        setY(t1) {
            return this.y = t1, this;
        }
        setZ(t1) {
            return this.z = t1, this;
        }
        setComponent(t1, e) {
            switch(t1){
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t1);
            }
            return this;
        }
        getComponent(t1) {
            switch(t1){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw new Error("index is out of range: " + t1);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y, this.z);
        }
        copy(t1) {
            return this.x = t1.x, this.y = t1.y, this.z = t1.z, this;
        }
        add(t1) {
            return this.x += t1.x, this.y += t1.y, this.z += t1.z, this;
        }
        addScalar(t1) {
            return this.x += t1, this.y += t1, this.z += t1, this;
        }
        addVectors(t1, e) {
            return this.x = t1.x + e.x, this.y = t1.y + e.y, this.z = t1.z + e.z, this;
        }
        addScaledVector(t1, e) {
            return this.x += t1.x * e, this.y += t1.y * e, this.z += t1.z * e, this;
        }
        sub(t1) {
            return this.x -= t1.x, this.y -= t1.y, this.z -= t1.z, this;
        }
        subScalar(t1) {
            return this.x -= t1, this.y -= t1, this.z -= t1, this;
        }
        subVectors(t1, e) {
            return this.x = t1.x - e.x, this.y = t1.y - e.y, this.z = t1.z - e.z, this;
        }
        multiply(t1) {
            return this.x *= t1.x, this.y *= t1.y, this.z *= t1.z, this;
        }
        multiplyScalar(t1) {
            return this.x *= t1, this.y *= t1, this.z *= t1, this;
        }
        multiplyVectors(t1, e) {
            return this.x = t1.x * e.x, this.y = t1.y * e.y, this.z = t1.z * e.z, this;
        }
        applyEuler(t1) {
            return this.applyQuaternion(je.setFromEuler(t1));
        }
        applyAxisAngle(t1, e) {
            return this.applyQuaternion(je.setFromAxisAngle(t1, e));
        }
        applyMatrix3(t1) {
            const e = this.x, n = this.y, i = this.z, r = t1.elements;
            return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this;
        }
        applyNormalMatrix(t1) {
            return this.applyMatrix3(t1).normalize();
        }
        applyMatrix4(t1) {
            const e = this.x, n = this.y, i = this.z, r = t1.elements, s = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
            return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * s, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * s, this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * s, this;
        }
        applyQuaternion(t1) {
            const e = this.x, n = this.y, i = this.z, r = t1.x, s = t1.y, a = t1.z, o = t1.w, l = 2 * (s * i - a * n), c = 2 * (a * e - r * i), h = 2 * (r * n - s * e);
            return this.x = e + o * l + s * h - a * c, this.y = n + o * c + a * l - r * h, this.z = i + o * h + r * c - s * l, this;
        }
        project(t1) {
            return this.applyMatrix4(t1.matrixWorldInverse).applyMatrix4(t1.projectionMatrix);
        }
        unproject(t1) {
            return this.applyMatrix4(t1.projectionMatrixInverse).applyMatrix4(t1.matrixWorld);
        }
        transformDirection(t1) {
            const e = this.x, n = this.y, i = this.z, r = t1.elements;
            return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize();
        }
        divide(t1) {
            return this.x /= t1.x, this.y /= t1.y, this.z /= t1.z, this;
        }
        divideScalar(t1) {
            return this.multiplyScalar(1 / t1);
        }
        min(t1) {
            return this.x = Math.min(this.x, t1.x), this.y = Math.min(this.y, t1.y), this.z = Math.min(this.z, t1.z), this;
        }
        max(t1) {
            return this.x = Math.max(this.x, t1.x), this.y = Math.max(this.y, t1.y), this.z = Math.max(this.z, t1.z), this;
        }
        clamp(t1, e) {
            return this.x = Math.max(t1.x, Math.min(e.x, this.x)), this.y = Math.max(t1.y, Math.min(e.y, this.y)), this.z = Math.max(t1.z, Math.min(e.z, this.z)), this;
        }
        clampScalar(t1, e) {
            return this.x = Math.max(t1, Math.min(e, this.x)), this.y = Math.max(t1, Math.min(e, this.y)), this.z = Math.max(t1, Math.min(e, this.z)), this;
        }
        clampLength(t1, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t1, Math.min(e, n)));
        }
        floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
        }
        ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
        }
        round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
        }
        roundToZero() {
            return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
        }
        negate() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
        }
        dot(t1) {
            return this.x * t1.x + this.y * t1.y + this.z * t1.z;
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z;
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
        }
        normalize() {
            return this.divideScalar(this.length() || 1);
        }
        setLength(t1) {
            return this.normalize().multiplyScalar(t1);
        }
        lerp(t1, e) {
            return this.x += (t1.x - this.x) * e, this.y += (t1.y - this.y) * e, this.z += (t1.z - this.z) * e, this;
        }
        lerpVectors(t1, e, n) {
            return this.x = t1.x + (e.x - t1.x) * n, this.y = t1.y + (e.y - t1.y) * n, this.z = t1.z + (e.z - t1.z) * n, this;
        }
        cross(t1) {
            return this.crossVectors(this, t1);
        }
        crossVectors(t1, e) {
            const n = t1.x, i = t1.y, r = t1.z, s = e.x, a = e.y, o = e.z;
            return this.x = i * o - r * a, this.y = r * s - n * o, this.z = n * a - i * s, this;
        }
        projectOnVector(t1) {
            const e = t1.lengthSq();
            if (0 === e) return this.set(0, 0, 0);
            const n = t1.dot(this) / e;
            return this.copy(t1).multiplyScalar(n);
        }
        projectOnPlane(t1) {
            return Xe.copy(this).projectOnVector(t1), this.sub(Xe);
        }
        reflect(t1) {
            return this.sub(Xe.copy(t1).multiplyScalar(2 * this.dot(t1)));
        }
        angleTo(t1) {
            const e = Math.sqrt(this.lengthSq() * t1.lengthSq());
            if (0 === e) return Math.PI / 2;
            const n = this.dot(t1) / e;
            return Math.acos(ae(n, -1, 1));
        }
        distanceTo(t1) {
            return Math.sqrt(this.distanceToSquared(t1));
        }
        distanceToSquared(t1) {
            const e = this.x - t1.x, n = this.y - t1.y, i = this.z - t1.z;
            return e * e + n * n + i * i;
        }
        manhattanDistanceTo(t1) {
            return Math.abs(this.x - t1.x) + Math.abs(this.y - t1.y) + Math.abs(this.z - t1.z);
        }
        setFromSpherical(t1) {
            return this.setFromSphericalCoords(t1.radius, t1.phi, t1.theta);
        }
        setFromSphericalCoords(t1, e, n) {
            const i = Math.sin(e) * t1;
            return this.x = i * Math.sin(n), this.y = Math.cos(e) * t1, this.z = i * Math.cos(n), this;
        }
        setFromCylindrical(t1) {
            return this.setFromCylindricalCoords(t1.radius, t1.theta, t1.y);
        }
        setFromCylindricalCoords(t1, e, n) {
            return this.x = t1 * Math.sin(e), this.y = n, this.z = t1 * Math.cos(e), this;
        }
        setFromMatrixPosition(t1) {
            const e = t1.elements;
            return this.x = e[12], this.y = e[13], this.z = e[14], this;
        }
        setFromMatrixScale(t1) {
            const e = this.setFromMatrixColumn(t1, 0).length(), n = this.setFromMatrixColumn(t1, 1).length(), i = this.setFromMatrixColumn(t1, 2).length();
            return this.x = e, this.y = n, this.z = i, this;
        }
        setFromMatrixColumn(t1, e) {
            return this.fromArray(t1.elements, 4 * e);
        }
        setFromMatrix3Column(t1, e) {
            return this.fromArray(t1.elements, 3 * e);
        }
        setFromEuler(t1) {
            return this.x = t1._x, this.y = t1._y, this.z = t1._z, this;
        }
        setFromColor(t1) {
            return this.x = t1.r, this.y = t1.g, this.z = t1.b, this;
        }
        equals(t1) {
            return t1.x === this.x && t1.y === this.y && t1.z === this.z;
        }
        fromArray(t1, e = 0) {
            return this.x = t1[e], this.y = t1[e + 1], this.z = t1[e + 2], this;
        }
        toArray(t1 = [], e = 0) {
            return t1[e] = this.x, t1[e + 1] = this.y, t1[e + 2] = this.z, t1;
        }
        fromBufferAttribute(t1, e) {
            return this.x = t1.getX(e), this.y = t1.getY(e), this.z = t1.getZ(e), this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
        }
        randomDirection() {
            const t1 = 2 * (Math.random() - .5), e = Math.random() * Math.PI * 2, n = Math.sqrt(1 - t1 ** 2);
            return this.x = n * Math.cos(e), this.y = n * Math.sin(e), this.z = t1, this;
        }
        *[Symbol.iterator]() {
            yield this.x, yield this.y, yield this.z;
        }
    }
    const Xe = new We, je = new ke;
    class qe {
        constructor(t1 = new We(1 / 0, 1 / 0, 1 / 0), e = new We(-1 / 0, -1 / 0, -1 / 0)){
            this.isBox3 = !0, this.min = t1, this.max = e;
        }
        set(t1, e) {
            return this.min.copy(t1), this.max.copy(e), this;
        }
        setFromArray(t1) {
            this.makeEmpty();
            for(let e = 0, n = t1.length; e < n; e += 3)this.expandByPoint(Ze.fromArray(t1, e));
            return this;
        }
        setFromBufferAttribute(t1) {
            this.makeEmpty();
            for(let e = 0, n = t1.count; e < n; e++)this.expandByPoint(Ze.fromBufferAttribute(t1, e));
            return this;
        }
        setFromPoints(t1) {
            this.makeEmpty();
            for(let e = 0, n = t1.length; e < n; e++)this.expandByPoint(t1[e]);
            return this;
        }
        setFromCenterAndSize(t1, e) {
            const n = Ze.copy(e).multiplyScalar(.5);
            return this.min.copy(t1).sub(n), this.max.copy(t1).add(n), this;
        }
        setFromObject(t1, e = !1) {
            return this.makeEmpty(), this.expandByObject(t1, e);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t1) {
            return this.min.copy(t1.min), this.max.copy(t1.max), this;
        }
        makeEmpty() {
            return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
        }
        isEmpty() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
        }
        getCenter(t1) {
            return this.isEmpty() ? t1.set(0, 0, 0) : t1.addVectors(this.min, this.max).multiplyScalar(.5);
        }
        getSize(t1) {
            return this.isEmpty() ? t1.set(0, 0, 0) : t1.subVectors(this.max, this.min);
        }
        expandByPoint(t1) {
            return this.min.min(t1), this.max.max(t1), this;
        }
        expandByVector(t1) {
            return this.min.sub(t1), this.max.add(t1), this;
        }
        expandByScalar(t1) {
            return this.min.addScalar(-t1), this.max.addScalar(t1), this;
        }
        expandByObject(t1, e = !1) {
            t1.updateWorldMatrix(!1, !1);
            const n = t1.geometry;
            if (void 0 !== n) {
                const i = n.getAttribute("position");
                if (!0 === e && void 0 !== i && !0 !== t1.isInstancedMesh) for(let e = 0, n = i.count; e < n; e++)!0 === t1.isMesh ? t1.getVertexPosition(e, Ze) : Ze.fromBufferAttribute(i, e), Ze.applyMatrix4(t1.matrixWorld), this.expandByPoint(Ze);
                else void 0 !== t1.boundingBox ? (null === t1.boundingBox && t1.computeBoundingBox(), Je.copy(t1.boundingBox)) : (null === n.boundingBox && n.computeBoundingBox(), Je.copy(n.boundingBox)), Je.applyMatrix4(t1.matrixWorld), this.union(Je);
            }
            const i = t1.children;
            for(let t1 = 0, n = i.length; t1 < n; t1++)this.expandByObject(i[t1], e);
            return this;
        }
        containsPoint(t1) {
            return !(t1.x < this.min.x || t1.x > this.max.x || t1.y < this.min.y || t1.y > this.max.y || t1.z < this.min.z || t1.z > this.max.z);
        }
        containsBox(t1) {
            return this.min.x <= t1.min.x && t1.max.x <= this.max.x && this.min.y <= t1.min.y && t1.max.y <= this.max.y && this.min.z <= t1.min.z && t1.max.z <= this.max.z;
        }
        getParameter(t1, e) {
            return e.set((t1.x - this.min.x) / (this.max.x - this.min.x), (t1.y - this.min.y) / (this.max.y - this.min.y), (t1.z - this.min.z) / (this.max.z - this.min.z));
        }
        intersectsBox(t1) {
            return !(t1.max.x < this.min.x || t1.min.x > this.max.x || t1.max.y < this.min.y || t1.min.y > this.max.y || t1.max.z < this.min.z || t1.min.z > this.max.z);
        }
        intersectsSphere(t1) {
            return this.clampPoint(t1.center, Ze), Ze.distanceToSquared(t1.center) <= t1.radius * t1.radius;
        }
        intersectsPlane(t1) {
            let e, n;
            return t1.normal.x > 0 ? (e = t1.normal.x * this.min.x, n = t1.normal.x * this.max.x) : (e = t1.normal.x * this.max.x, n = t1.normal.x * this.min.x), t1.normal.y > 0 ? (e += t1.normal.y * this.min.y, n += t1.normal.y * this.max.y) : (e += t1.normal.y * this.max.y, n += t1.normal.y * this.min.y), t1.normal.z > 0 ? (e += t1.normal.z * this.min.z, n += t1.normal.z * this.max.z) : (e += t1.normal.z * this.max.z, n += t1.normal.z * this.min.z), e <= -t1.constant && n >= -t1.constant;
        }
        intersectsTriangle(t1) {
            if (this.isEmpty()) return !1;
            this.getCenter(rn), sn.subVectors(this.max, rn), Ke.subVectors(t1.a, rn), $e.subVectors(t1.b, rn), Qe.subVectors(t1.c, rn), tn.subVectors($e, Ke), en.subVectors(Qe, $e), nn.subVectors(Ke, Qe);
            let e = [
                0,
                -tn.z,
                tn.y,
                0,
                -en.z,
                en.y,
                0,
                -nn.z,
                nn.y,
                tn.z,
                0,
                -tn.x,
                en.z,
                0,
                -en.x,
                nn.z,
                0,
                -nn.x,
                -tn.y,
                tn.x,
                0,
                -en.y,
                en.x,
                0,
                -nn.y,
                nn.x,
                0
            ];
            return !!ln(e, Ke, $e, Qe, sn) && (e = [
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1
            ], !!ln(e, Ke, $e, Qe, sn) && (an.crossVectors(tn, en), e = [
                an.x,
                an.y,
                an.z
            ], ln(e, Ke, $e, Qe, sn)));
        }
        clampPoint(t1, e) {
            return e.copy(t1).clamp(this.min, this.max);
        }
        distanceToPoint(t1) {
            return this.clampPoint(t1, Ze).distanceTo(t1);
        }
        getBoundingSphere(t1) {
            return this.isEmpty() ? t1.makeEmpty() : (this.getCenter(t1.center), t1.radius = .5 * this.getSize(Ze).length()), t1;
        }
        intersect(t1) {
            return this.min.max(t1.min), this.max.min(t1.max), this.isEmpty() && this.makeEmpty(), this;
        }
        union(t1) {
            return this.min.min(t1.min), this.max.max(t1.max), this;
        }
        applyMatrix4(t1) {
            return this.isEmpty() || (Ye[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t1), Ye[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t1), Ye[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t1), Ye[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t1), Ye[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t1), Ye[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t1), Ye[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t1), Ye[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t1), this.setFromPoints(Ye)), this;
        }
        translate(t1) {
            return this.min.add(t1), this.max.add(t1), this;
        }
        equals(t1) {
            return t1.min.equals(this.min) && t1.max.equals(this.max);
        }
    }
    const Ye = [
        new We,
        new We,
        new We,
        new We,
        new We,
        new We,
        new We,
        new We
    ], Ze = new We, Je = new qe, Ke = new We, $e = new We, Qe = new We, tn = new We, en = new We, nn = new We, rn = new We, sn = new We, an = new We, on = new We;
    function ln(t1, e, n, i, r) {
        for(let s = 0, a = t1.length - 3; s <= a; s += 3){
            on.fromArray(t1, s);
            const a = r.x * Math.abs(on.x) + r.y * Math.abs(on.y) + r.z * Math.abs(on.z), o = e.dot(on), l = n.dot(on), c = i.dot(on);
            if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > a) return !1;
        }
        return !0;
    }
    const cn = new qe, hn = new We, un = new We;
    class dn {
        constructor(t1 = new We, e = -1){
            this.isSphere = !0, this.center = t1, this.radius = e;
        }
        set(t1, e) {
            return this.center.copy(t1), this.radius = e, this;
        }
        setFromPoints(t1, e) {
            const n = this.center;
            void 0 !== e ? n.copy(e) : cn.setFromPoints(t1).getCenter(n);
            let i = 0;
            for(let e = 0, r = t1.length; e < r; e++)i = Math.max(i, n.distanceToSquared(t1[e]));
            return this.radius = Math.sqrt(i), this;
        }
        copy(t1) {
            return this.center.copy(t1.center), this.radius = t1.radius, this;
        }
        isEmpty() {
            return this.radius < 0;
        }
        makeEmpty() {
            return this.center.set(0, 0, 0), this.radius = -1, this;
        }
        containsPoint(t1) {
            return t1.distanceToSquared(this.center) <= this.radius * this.radius;
        }
        distanceToPoint(t1) {
            return t1.distanceTo(this.center) - this.radius;
        }
        intersectsSphere(t1) {
            const e = this.radius + t1.radius;
            return t1.center.distanceToSquared(this.center) <= e * e;
        }
        intersectsBox(t1) {
            return t1.intersectsSphere(this);
        }
        intersectsPlane(t1) {
            return Math.abs(t1.distanceToPoint(this.center)) <= this.radius;
        }
        clampPoint(t1, e) {
            const n = this.center.distanceToSquared(t1);
            return e.copy(t1), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
        }
        getBoundingBox(t1) {
            return this.isEmpty() ? (t1.makeEmpty(), t1) : (t1.set(this.center, this.center), t1.expandByScalar(this.radius), t1);
        }
        applyMatrix4(t1) {
            return this.center.applyMatrix4(t1), this.radius = this.radius * t1.getMaxScaleOnAxis(), this;
        }
        translate(t1) {
            return this.center.add(t1), this;
        }
        expandByPoint(t1) {
            if (this.isEmpty()) return this.center.copy(t1), this.radius = 0, this;
            hn.subVectors(t1, this.center);
            const e = hn.lengthSq();
            if (e > this.radius * this.radius) {
                const t1 = Math.sqrt(e), n = .5 * (t1 - this.radius);
                this.center.addScaledVector(hn, n / t1), this.radius += n;
            }
            return this;
        }
        union(t1) {
            return t1.isEmpty() ? this : this.isEmpty() ? (this.copy(t1), this) : (!0 === this.center.equals(t1.center) ? this.radius = Math.max(this.radius, t1.radius) : (un.subVectors(t1.center, this.center).setLength(t1.radius), this.expandByPoint(hn.copy(t1.center).add(un)), this.expandByPoint(hn.copy(t1.center).sub(un))), this);
        }
        equals(t1) {
            return t1.center.equals(this.center) && t1.radius === this.radius;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    const pn = new We, mn = new We, fn = new We, gn = new We, _n = new We, vn = new We, xn = new We;
    class yn {
        constructor(t1 = new We, e = new We(0, 0, -1)){
            this.origin = t1, this.direction = e;
        }
        set(t1, e) {
            return this.origin.copy(t1), this.direction.copy(e), this;
        }
        copy(t1) {
            return this.origin.copy(t1.origin), this.direction.copy(t1.direction), this;
        }
        at(t1, e) {
            return e.copy(this.origin).addScaledVector(this.direction, t1);
        }
        lookAt(t1) {
            return this.direction.copy(t1).sub(this.origin).normalize(), this;
        }
        recast(t1) {
            return this.origin.copy(this.at(t1, pn)), this;
        }
        closestPointToPoint(t1, e) {
            e.subVectors(t1, this.origin);
            const n = e.dot(this.direction);
            return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n);
        }
        distanceToPoint(t1) {
            return Math.sqrt(this.distanceSqToPoint(t1));
        }
        distanceSqToPoint(t1) {
            const e = pn.subVectors(t1, this.origin).dot(this.direction);
            return e < 0 ? this.origin.distanceToSquared(t1) : (pn.copy(this.origin).addScaledVector(this.direction, e), pn.distanceToSquared(t1));
        }
        distanceSqToSegment(t1, e, n, i) {
            mn.copy(t1).add(e).multiplyScalar(.5), fn.copy(e).sub(t1).normalize(), gn.copy(this.origin).sub(mn);
            const r = .5 * t1.distanceTo(e), s = -this.direction.dot(fn), a = gn.dot(this.direction), o = -gn.dot(fn), l = gn.lengthSq(), c = Math.abs(1 - s * s);
            let h, u, d, p;
            if (c > 0) {
                if (h = s * o - a, u = s * a - o, p = r * c, h >= 0) {
                    if (u >= -p) {
                        if (u <= p) {
                            const t1 = 1 / c;
                            h *= t1, u *= t1, d = h * (h + s * u + 2 * a) + u * (s * h + u + 2 * o) + l;
                        } else u = r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
                    } else u = -r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
                } else u <= -p ? (h = Math.max(0, -(-s * r + a)), u = h > 0 ? -r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l) : u <= p ? (h = 0, u = Math.min(Math.max(-r, -o), r), d = u * (u + 2 * o) + l) : (h = Math.max(0, -(s * r + a)), u = h > 0 ? r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l);
            } else u = s > 0 ? -r : r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
            return n && n.copy(this.origin).addScaledVector(this.direction, h), i && i.copy(mn).addScaledVector(fn, u), d;
        }
        intersectSphere(t1, e) {
            pn.subVectors(t1.center, this.origin);
            const n = pn.dot(this.direction), i = pn.dot(pn) - n * n, r = t1.radius * t1.radius;
            if (i > r) return null;
            const s = Math.sqrt(r - i), a = n - s, o = n + s;
            return o < 0 ? null : a < 0 ? this.at(o, e) : this.at(a, e);
        }
        intersectsSphere(t1) {
            return this.distanceSqToPoint(t1.center) <= t1.radius * t1.radius;
        }
        distanceToPlane(t1) {
            const e = t1.normal.dot(this.direction);
            if (0 === e) return 0 === t1.distanceToPoint(this.origin) ? 0 : null;
            const n = -(this.origin.dot(t1.normal) + t1.constant) / e;
            return n >= 0 ? n : null;
        }
        intersectPlane(t1, e) {
            const n = this.distanceToPlane(t1);
            return null === n ? null : this.at(n, e);
        }
        intersectsPlane(t1) {
            const e = t1.distanceToPoint(this.origin);
            if (0 === e) return !0;
            return t1.normal.dot(this.direction) * e < 0;
        }
        intersectBox(t1, e) {
            let n, i, r, s, a, o;
            const l = 1 / this.direction.x, c = 1 / this.direction.y, h = 1 / this.direction.z, u = this.origin;
            return l >= 0 ? (n = (t1.min.x - u.x) * l, i = (t1.max.x - u.x) * l) : (n = (t1.max.x - u.x) * l, i = (t1.min.x - u.x) * l), c >= 0 ? (r = (t1.min.y - u.y) * c, s = (t1.max.y - u.y) * c) : (r = (t1.max.y - u.y) * c, s = (t1.min.y - u.y) * c), n > s || r > i ? null : ((r > n || isNaN(n)) && (n = r), (s < i || isNaN(i)) && (i = s), h >= 0 ? (a = (t1.min.z - u.z) * h, o = (t1.max.z - u.z) * h) : (a = (t1.max.z - u.z) * h, o = (t1.min.z - u.z) * h), n > o || a > i ? null : ((a > n || n != n) && (n = a), (o < i || i != i) && (i = o), i < 0 ? null : this.at(n >= 0 ? n : i, e)));
        }
        intersectsBox(t1) {
            return null !== this.intersectBox(t1, pn);
        }
        intersectTriangle(t1, e, n, i, r) {
            _n.subVectors(e, t1), vn.subVectors(n, t1), xn.crossVectors(_n, vn);
            let s, a = this.direction.dot(xn);
            if (a > 0) {
                if (i) return null;
                s = 1;
            } else {
                if (!(a < 0)) return null;
                s = -1, a = -a;
            }
            gn.subVectors(this.origin, t1);
            const o = s * this.direction.dot(vn.crossVectors(gn, vn));
            if (o < 0) return null;
            const l = s * this.direction.dot(_n.cross(gn));
            if (l < 0) return null;
            if (o + l > a) return null;
            const c = -s * gn.dot(xn);
            return c < 0 ? null : this.at(c / a, r);
        }
        applyMatrix4(t1) {
            return this.origin.applyMatrix4(t1), this.direction.transformDirection(t1), this;
        }
        equals(t1) {
            return t1.origin.equals(this.origin) && t1.direction.equals(this.direction);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    class Mn {
        constructor(t1, e, n, i, r, s, a, o, l, c, h, u, d, p, m, f){
            Mn.prototype.isMatrix4 = !0, this.elements = [
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1
            ], void 0 !== t1 && this.set(t1, e, n, i, r, s, a, o, l, c, h, u, d, p, m, f);
        }
        set(t1, e, n, i, r, s, a, o, l, c, h, u, d, p, m, f) {
            const g = this.elements;
            return g[0] = t1, g[4] = e, g[8] = n, g[12] = i, g[1] = r, g[5] = s, g[9] = a, g[13] = o, g[2] = l, g[6] = c, g[10] = h, g[14] = u, g[3] = d, g[7] = p, g[11] = m, g[15] = f, this;
        }
        identity() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        clone() {
            return (new Mn).fromArray(this.elements);
        }
        copy(t1) {
            const e = this.elements, n = t1.elements;
            return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
        }
        copyPosition(t1) {
            const e = this.elements, n = t1.elements;
            return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
        }
        setFromMatrix3(t1) {
            const e = t1.elements;
            return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this;
        }
        extractBasis(t1, e, n) {
            return t1.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
        }
        makeBasis(t1, e, n) {
            return this.set(t1.x, e.x, n.x, 0, t1.y, e.y, n.y, 0, t1.z, e.z, n.z, 0, 0, 0, 0, 1), this;
        }
        extractRotation(t1) {
            const e = this.elements, n = t1.elements, i = 1 / Sn.setFromMatrixColumn(t1, 0).length(), r = 1 / Sn.setFromMatrixColumn(t1, 1).length(), s = 1 / Sn.setFromMatrixColumn(t1, 2).length();
            return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * s, e[9] = n[9] * s, e[10] = n[10] * s, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
        }
        makeRotationFromEuler(t1) {
            const e = this.elements, n = t1.x, i = t1.y, r = t1.z, s = Math.cos(n), a = Math.sin(n), o = Math.cos(i), l = Math.sin(i), c = Math.cos(r), h = Math.sin(r);
            if ("XYZ" === t1.order) {
                const t1 = s * c, n = s * h, i = a * c, r = a * h;
                e[0] = o * c, e[4] = -o * h, e[8] = l, e[1] = n + i * l, e[5] = t1 - r * l, e[9] = -a * o, e[2] = r - t1 * l, e[6] = i + n * l, e[10] = s * o;
            } else if ("YXZ" === t1.order) {
                const t1 = o * c, n = o * h, i = l * c, r = l * h;
                e[0] = t1 + r * a, e[4] = i * a - n, e[8] = s * l, e[1] = s * h, e[5] = s * c, e[9] = -a, e[2] = n * a - i, e[6] = r + t1 * a, e[10] = s * o;
            } else if ("ZXY" === t1.order) {
                const t1 = o * c, n = o * h, i = l * c, r = l * h;
                e[0] = t1 - r * a, e[4] = -s * h, e[8] = i + n * a, e[1] = n + i * a, e[5] = s * c, e[9] = r - t1 * a, e[2] = -s * l, e[6] = a, e[10] = s * o;
            } else if ("ZYX" === t1.order) {
                const t1 = s * c, n = s * h, i = a * c, r = a * h;
                e[0] = o * c, e[4] = i * l - n, e[8] = t1 * l + r, e[1] = o * h, e[5] = r * l + t1, e[9] = n * l - i, e[2] = -l, e[6] = a * o, e[10] = s * o;
            } else if ("YZX" === t1.order) {
                const t1 = s * o, n = s * l, i = a * o, r = a * l;
                e[0] = o * c, e[4] = r - t1 * h, e[8] = i * h + n, e[1] = h, e[5] = s * c, e[9] = -a * c, e[2] = -l * c, e[6] = n * h + i, e[10] = t1 - r * h;
            } else if ("XZY" === t1.order) {
                const t1 = s * o, n = s * l, i = a * o, r = a * l;
                e[0] = o * c, e[4] = -h, e[8] = l * c, e[1] = t1 * h + r, e[5] = s * c, e[9] = n * h - i, e[2] = i * h - n, e[6] = a * c, e[10] = r * h + t1;
            }
            return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
        }
        makeRotationFromQuaternion(t1) {
            return this.compose(Tn, t1, En);
        }
        lookAt(t1, e, n) {
            const i = this.elements;
            return Rn.subVectors(t1, e), 0 === Rn.lengthSq() && (Rn.z = 1), Rn.normalize(), wn.crossVectors(n, Rn), 0 === wn.lengthSq() && (1 === Math.abs(n.z) ? Rn.x += 1e-4 : Rn.z += 1e-4, Rn.normalize(), wn.crossVectors(n, Rn)), wn.normalize(), An.crossVectors(Rn, wn), i[0] = wn.x, i[4] = An.x, i[8] = Rn.x, i[1] = wn.y, i[5] = An.y, i[9] = Rn.y, i[2] = wn.z, i[6] = An.z, i[10] = Rn.z, this;
        }
        multiply(t1) {
            return this.multiplyMatrices(this, t1);
        }
        premultiply(t1) {
            return this.multiplyMatrices(t1, this);
        }
        multiplyMatrices(t1, e) {
            const n = t1.elements, i = e.elements, r = this.elements, s = n[0], a = n[4], o = n[8], l = n[12], c = n[1], h = n[5], u = n[9], d = n[13], p = n[2], m = n[6], f = n[10], g = n[14], _ = n[3], v = n[7], x = n[11], y = n[15], M = i[0], S = i[4], b = i[8], T = i[12], E = i[1], w = i[5], A = i[9], R = i[13], C = i[2], L = i[6], P = i[10], I = i[14], U = i[3], D = i[7], N = i[11], O = i[15];
            return r[0] = s * M + a * E + o * C + l * U, r[4] = s * S + a * w + o * L + l * D, r[8] = s * b + a * A + o * P + l * N, r[12] = s * T + a * R + o * I + l * O, r[1] = c * M + h * E + u * C + d * U, r[5] = c * S + h * w + u * L + d * D, r[9] = c * b + h * A + u * P + d * N, r[13] = c * T + h * R + u * I + d * O, r[2] = p * M + m * E + f * C + g * U, r[6] = p * S + m * w + f * L + g * D, r[10] = p * b + m * A + f * P + g * N, r[14] = p * T + m * R + f * I + g * O, r[3] = _ * M + v * E + x * C + y * U, r[7] = _ * S + v * w + x * L + y * D, r[11] = _ * b + v * A + x * P + y * N, r[15] = _ * T + v * R + x * I + y * O, this;
        }
        multiplyScalar(t1) {
            const e = this.elements;
            return e[0] *= t1, e[4] *= t1, e[8] *= t1, e[12] *= t1, e[1] *= t1, e[5] *= t1, e[9] *= t1, e[13] *= t1, e[2] *= t1, e[6] *= t1, e[10] *= t1, e[14] *= t1, e[3] *= t1, e[7] *= t1, e[11] *= t1, e[15] *= t1, this;
        }
        determinant() {
            const t1 = this.elements, e = t1[0], n = t1[4], i = t1[8], r = t1[12], s = t1[1], a = t1[5], o = t1[9], l = t1[13], c = t1[2], h = t1[6], u = t1[10], d = t1[14];
            return t1[3] * (+r * o * h - i * l * h - r * a * u + n * l * u + i * a * d - n * o * d) + t1[7] * (+e * o * d - e * l * u + r * s * u - i * s * d + i * l * c - r * o * c) + t1[11] * (+e * l * h - e * a * d - r * s * h + n * s * d + r * a * c - n * l * c) + t1[15] * (-i * a * c - e * o * h + e * a * u + i * s * h - n * s * u + n * o * c);
        }
        transpose() {
            const t1 = this.elements;
            let e;
            return e = t1[1], t1[1] = t1[4], t1[4] = e, e = t1[2], t1[2] = t1[8], t1[8] = e, e = t1[6], t1[6] = t1[9], t1[9] = e, e = t1[3], t1[3] = t1[12], t1[12] = e, e = t1[7], t1[7] = t1[13], t1[13] = e, e = t1[11], t1[11] = t1[14], t1[14] = e, this;
        }
        setPosition(t1, e, n) {
            const i = this.elements;
            return t1.isVector3 ? (i[12] = t1.x, i[13] = t1.y, i[14] = t1.z) : (i[12] = t1, i[13] = e, i[14] = n), this;
        }
        invert() {
            const t1 = this.elements, e = t1[0], n = t1[1], i = t1[2], r = t1[3], s = t1[4], a = t1[5], o = t1[6], l = t1[7], c = t1[8], h = t1[9], u = t1[10], d = t1[11], p = t1[12], m = t1[13], f = t1[14], g = t1[15], _ = h * f * l - m * u * l + m * o * d - a * f * d - h * o * g + a * u * g, v = p * u * l - c * f * l - p * o * d + s * f * d + c * o * g - s * u * g, x = c * m * l - p * h * l + p * a * d - s * m * d - c * a * g + s * h * g, y = p * h * o - c * m * o - p * a * u + s * m * u + c * a * f - s * h * f, M = e * _ + n * v + i * x + r * y;
            if (0 === M) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            const S = 1 / M;
            return t1[0] = _ * S, t1[1] = (m * u * r - h * f * r - m * i * d + n * f * d + h * i * g - n * u * g) * S, t1[2] = (a * f * r - m * o * r + m * i * l - n * f * l - a * i * g + n * o * g) * S, t1[3] = (h * o * r - a * u * r - h * i * l + n * u * l + a * i * d - n * o * d) * S, t1[4] = v * S, t1[5] = (c * f * r - p * u * r + p * i * d - e * f * d - c * i * g + e * u * g) * S, t1[6] = (p * o * r - s * f * r - p * i * l + e * f * l + s * i * g - e * o * g) * S, t1[7] = (s * u * r - c * o * r + c * i * l - e * u * l - s * i * d + e * o * d) * S, t1[8] = x * S, t1[9] = (p * h * r - c * m * r - p * n * d + e * m * d + c * n * g - e * h * g) * S, t1[10] = (s * m * r - p * a * r + p * n * l - e * m * l - s * n * g + e * a * g) * S, t1[11] = (c * a * r - s * h * r - c * n * l + e * h * l + s * n * d - e * a * d) * S, t1[12] = y * S, t1[13] = (c * m * i - p * h * i + p * n * u - e * m * u - c * n * f + e * h * f) * S, t1[14] = (p * a * i - s * m * i - p * n * o + e * m * o + s * n * f - e * a * f) * S, t1[15] = (s * h * i - c * a * i + c * n * o - e * h * o - s * n * u + e * a * u) * S, this;
        }
        scale(t1) {
            const e = this.elements, n = t1.x, i = t1.y, r = t1.z;
            return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this;
        }
        getMaxScaleOnAxis() {
            const t1 = this.elements, e = t1[0] * t1[0] + t1[1] * t1[1] + t1[2] * t1[2], n = t1[4] * t1[4] + t1[5] * t1[5] + t1[6] * t1[6], i = t1[8] * t1[8] + t1[9] * t1[9] + t1[10] * t1[10];
            return Math.sqrt(Math.max(e, n, i));
        }
        makeTranslation(t1, e, n) {
            return t1.isVector3 ? this.set(1, 0, 0, t1.x, 0, 1, 0, t1.y, 0, 0, 1, t1.z, 0, 0, 0, 1) : this.set(1, 0, 0, t1, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
        }
        makeRotationX(t1) {
            const e = Math.cos(t1), n = Math.sin(t1);
            return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
        }
        makeRotationY(t1) {
            const e = Math.cos(t1), n = Math.sin(t1);
            return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
        }
        makeRotationZ(t1) {
            const e = Math.cos(t1), n = Math.sin(t1);
            return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        makeRotationAxis(t1, e) {
            const n = Math.cos(e), i = Math.sin(e), r = 1 - n, s = t1.x, a = t1.y, o = t1.z, l = r * s, c = r * a;
            return this.set(l * s + n, l * a - i * o, l * o + i * a, 0, l * a + i * o, c * a + n, c * o - i * s, 0, l * o - i * a, c * o + i * s, r * o * o + n, 0, 0, 0, 0, 1), this;
        }
        makeScale(t1, e, n) {
            return this.set(t1, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
        }
        makeShear(t1, e, n, i, r, s) {
            return this.set(1, n, r, 0, t1, 1, s, 0, e, i, 1, 0, 0, 0, 0, 1), this;
        }
        compose(t1, e, n) {
            const i = this.elements, r = e._x, s = e._y, a = e._z, o = e._w, l = r + r, c = s + s, h = a + a, u = r * l, d = r * c, p = r * h, m = s * c, f = s * h, g = a * h, _ = o * l, v = o * c, x = o * h, y = n.x, M = n.y, S = n.z;
            return i[0] = (1 - (m + g)) * y, i[1] = (d + x) * y, i[2] = (p - v) * y, i[3] = 0, i[4] = (d - x) * M, i[5] = (1 - (u + g)) * M, i[6] = (f + _) * M, i[7] = 0, i[8] = (p + v) * S, i[9] = (f - _) * S, i[10] = (1 - (u + m)) * S, i[11] = 0, i[12] = t1.x, i[13] = t1.y, i[14] = t1.z, i[15] = 1, this;
        }
        decompose(t1, e, n) {
            const i = this.elements;
            let r = Sn.set(i[0], i[1], i[2]).length();
            const s = Sn.set(i[4], i[5], i[6]).length(), a = Sn.set(i[8], i[9], i[10]).length();
            this.determinant() < 0 && (r = -r), t1.x = i[12], t1.y = i[13], t1.z = i[14], bn.copy(this);
            const o = 1 / r, l = 1 / s, c = 1 / a;
            return bn.elements[0] *= o, bn.elements[1] *= o, bn.elements[2] *= o, bn.elements[4] *= l, bn.elements[5] *= l, bn.elements[6] *= l, bn.elements[8] *= c, bn.elements[9] *= c, bn.elements[10] *= c, e.setFromRotationMatrix(bn), n.x = r, n.y = s, n.z = a, this;
        }
        makePerspective(t1, e, n, i, r, s, a = 2e3) {
            const o = this.elements, l = 2 * r / (e - t1), c = 2 * r / (n - i), h = (e + t1) / (e - t1), u = (n + i) / (n - i);
            let d, p;
            if (a === $t) d = -(s + r) / (s - r), p = -2 * s * r / (s - r);
            else {
                if (a !== Qt) throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
                d = -s / (s - r), p = -s * r / (s - r);
            }
            return o[0] = l, o[4] = 0, o[8] = h, o[12] = 0, o[1] = 0, o[5] = c, o[9] = u, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = d, o[14] = p, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this;
        }
        makeOrthographic(t1, e, n, i, r, s, a = 2e3) {
            const o = this.elements, l = 1 / (e - t1), c = 1 / (n - i), h = 1 / (s - r), u = (e + t1) * l, d = (n + i) * c;
            let p, m;
            if (a === $t) p = (s + r) * h, m = -2 * h;
            else {
                if (a !== Qt) throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
                p = r * h, m = -1 * h;
            }
            return o[0] = 2 * l, o[4] = 0, o[8] = 0, o[12] = -u, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -d, o[2] = 0, o[6] = 0, o[10] = m, o[14] = -p, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this;
        }
        equals(t1) {
            const e = this.elements, n = t1.elements;
            for(let t1 = 0; t1 < 16; t1++)if (e[t1] !== n[t1]) return !1;
            return !0;
        }
        fromArray(t1, e = 0) {
            for(let n = 0; n < 16; n++)this.elements[n] = t1[n + e];
            return this;
        }
        toArray(t1 = [], e = 0) {
            const n = this.elements;
            return t1[e] = n[0], t1[e + 1] = n[1], t1[e + 2] = n[2], t1[e + 3] = n[3], t1[e + 4] = n[4], t1[e + 5] = n[5], t1[e + 6] = n[6], t1[e + 7] = n[7], t1[e + 8] = n[8], t1[e + 9] = n[9], t1[e + 10] = n[10], t1[e + 11] = n[11], t1[e + 12] = n[12], t1[e + 13] = n[13], t1[e + 14] = n[14], t1[e + 15] = n[15], t1;
        }
    }
    const Sn = new We, bn = new Mn, Tn = new We(0, 0, 0), En = new We(1, 1, 1), wn = new We, An = new We, Rn = new We, Cn = new Mn, Ln = new ke;
    class Pn {
        constructor(t1 = 0, e = 0, n = 0, i = Pn.DEFAULT_ORDER){
            this.isEuler = !0, this._x = t1, this._y = e, this._z = n, this._order = i;
        }
        get x() {
            return this._x;
        }
        set x(t1) {
            this._x = t1, this._onChangeCallback();
        }
        get y() {
            return this._y;
        }
        set y(t1) {
            this._y = t1, this._onChangeCallback();
        }
        get z() {
            return this._z;
        }
        set z(t1) {
            this._z = t1, this._onChangeCallback();
        }
        get order() {
            return this._order;
        }
        set order(t1) {
            this._order = t1, this._onChangeCallback();
        }
        set(t1, e, n, i = this._order) {
            return this._x = t1, this._y = e, this._z = n, this._order = i, this._onChangeCallback(), this;
        }
        clone() {
            return new this.constructor(this._x, this._y, this._z, this._order);
        }
        copy(t1) {
            return this._x = t1._x, this._y = t1._y, this._z = t1._z, this._order = t1._order, this._onChangeCallback(), this;
        }
        setFromRotationMatrix(t1, e = this._order, n = !0) {
            const i = t1.elements, r = i[0], s = i[4], a = i[8], o = i[1], l = i[5], c = i[9], h = i[2], u = i[6], d = i[10];
            switch(e){
                case "XYZ":
                    this._y = Math.asin(ae(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-c, d), this._z = Math.atan2(-s, r)) : (this._x = Math.atan2(u, l), this._z = 0);
                    break;
                case "YXZ":
                    this._x = Math.asin(-ae(c, -1, 1)), Math.abs(c) < .9999999 ? (this._y = Math.atan2(a, d), this._z = Math.atan2(o, l)) : (this._y = Math.atan2(-h, r), this._z = 0);
                    break;
                case "ZXY":
                    this._x = Math.asin(ae(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(-h, d), this._z = Math.atan2(-s, l)) : (this._y = 0, this._z = Math.atan2(o, r));
                    break;
                case "ZYX":
                    this._y = Math.asin(-ae(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(u, d), this._z = Math.atan2(o, r)) : (this._x = 0, this._z = Math.atan2(-s, l));
                    break;
                case "YZX":
                    this._z = Math.asin(ae(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-c, l), this._y = Math.atan2(-h, r)) : (this._x = 0, this._y = Math.atan2(a, d));
                    break;
                case "XZY":
                    this._z = Math.asin(-ae(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(u, l), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-c, d), this._y = 0);
                    break;
                default:
                    console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
            }
            return this._order = e, !0 === n && this._onChangeCallback(), this;
        }
        setFromQuaternion(t1, e, n) {
            return Cn.makeRotationFromQuaternion(t1), this.setFromRotationMatrix(Cn, e, n);
        }
        setFromVector3(t1, e = this._order) {
            return this.set(t1.x, t1.y, t1.z, e);
        }
        reorder(t1) {
            return Ln.setFromEuler(this), this.setFromQuaternion(Ln, t1);
        }
        equals(t1) {
            return t1._x === this._x && t1._y === this._y && t1._z === this._z && t1._order === this._order;
        }
        fromArray(t1) {
            return this._x = t1[0], this._y = t1[1], this._z = t1[2], void 0 !== t1[3] && (this._order = t1[3]), this._onChangeCallback(), this;
        }
        toArray(t1 = [], e = 0) {
            return t1[e] = this._x, t1[e + 1] = this._y, t1[e + 2] = this._z, t1[e + 3] = this._order, t1;
        }
        _onChange(t1) {
            return this._onChangeCallback = t1, this;
        }
        _onChangeCallback() {}
        *[Symbol.iterator]() {
            yield this._x, yield this._y, yield this._z, yield this._order;
        }
    }
    Pn.DEFAULT_ORDER = "XYZ";
    class In {
        constructor(){
            this.mask = 1;
        }
        set(t1) {
            this.mask = (1 << t1 | 0) >>> 0;
        }
        enable(t1) {
            this.mask |= 1 << t1 | 0;
        }
        enableAll() {
            this.mask = -1;
        }
        toggle(t1) {
            this.mask ^= 1 << t1 | 0;
        }
        disable(t1) {
            this.mask &= ~(1 << t1 | 0);
        }
        disableAll() {
            this.mask = 0;
        }
        test(t1) {
            return 0 != (this.mask & t1.mask);
        }
        isEnabled(t1) {
            return 0 != (this.mask & (1 << t1 | 0));
        }
    }
    let Un = 0;
    const Dn = new We, Nn = new ke, On = new Mn, Fn = new We, Bn = new We, zn = new We, Gn = new ke, Hn = new We(1, 0, 0), Vn = new We(0, 1, 0), kn = new We(0, 0, 1), Wn = {
        type: "added"
    }, Xn = {
        type: "removed"
    };
    class jn extends te {
        constructor(){
            super(), this.isObject3D = !0, Object.defineProperty(this, "id", {
                value: Un++
            }), this.uuid = se(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = jn.DEFAULT_UP.clone();
            const t1 = new We, e = new Pn, n = new ke, i = new We(1, 1, 1);
            e._onChange(function() {
                n.setFromEuler(e, !1);
            }), n._onChange(function() {
                e.setFromQuaternion(n, void 0, !1);
            }), Object.defineProperties(this, {
                position: {
                    configurable: !0,
                    enumerable: !0,
                    value: t1
                },
                rotation: {
                    configurable: !0,
                    enumerable: !0,
                    value: e
                },
                quaternion: {
                    configurable: !0,
                    enumerable: !0,
                    value: n
                },
                scale: {
                    configurable: !0,
                    enumerable: !0,
                    value: i
                },
                modelViewMatrix: {
                    value: new Mn
                },
                normalMatrix: {
                    value: new fe
                }
            }), this.matrix = new Mn, this.matrixWorld = new Mn, this.matrixAutoUpdate = jn.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new In, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
        }
        onBeforeShadow() {}
        onAfterShadow() {}
        onBeforeRender() {}
        onAfterRender() {}
        applyMatrix4(t1) {
            this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t1), this.matrix.decompose(this.position, this.quaternion, this.scale);
        }
        applyQuaternion(t1) {
            return this.quaternion.premultiply(t1), this;
        }
        setRotationFromAxisAngle(t1, e) {
            this.quaternion.setFromAxisAngle(t1, e);
        }
        setRotationFromEuler(t1) {
            this.quaternion.setFromEuler(t1, !0);
        }
        setRotationFromMatrix(t1) {
            this.quaternion.setFromRotationMatrix(t1);
        }
        setRotationFromQuaternion(t1) {
            this.quaternion.copy(t1);
        }
        rotateOnAxis(t1, e) {
            return Nn.setFromAxisAngle(t1, e), this.quaternion.multiply(Nn), this;
        }
        rotateOnWorldAxis(t1, e) {
            return Nn.setFromAxisAngle(t1, e), this.quaternion.premultiply(Nn), this;
        }
        rotateX(t1) {
            return this.rotateOnAxis(Hn, t1);
        }
        rotateY(t1) {
            return this.rotateOnAxis(Vn, t1);
        }
        rotateZ(t1) {
            return this.rotateOnAxis(kn, t1);
        }
        translateOnAxis(t1, e) {
            return Dn.copy(t1).applyQuaternion(this.quaternion), this.position.add(Dn.multiplyScalar(e)), this;
        }
        translateX(t1) {
            return this.translateOnAxis(Hn, t1);
        }
        translateY(t1) {
            return this.translateOnAxis(Vn, t1);
        }
        translateZ(t1) {
            return this.translateOnAxis(kn, t1);
        }
        localToWorld(t1) {
            return this.updateWorldMatrix(!0, !1), t1.applyMatrix4(this.matrixWorld);
        }
        worldToLocal(t1) {
            return this.updateWorldMatrix(!0, !1), t1.applyMatrix4(On.copy(this.matrixWorld).invert());
        }
        lookAt(t1, e, n) {
            t1.isVector3 ? Fn.copy(t1) : Fn.set(t1, e, n);
            const i = this.parent;
            this.updateWorldMatrix(!0, !1), Bn.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? On.lookAt(Bn, Fn, this.up) : On.lookAt(Fn, Bn, this.up), this.quaternion.setFromRotationMatrix(On), i && (On.extractRotation(i.matrixWorld), Nn.setFromRotationMatrix(On), this.quaternion.premultiply(Nn.invert()));
        }
        add(t1) {
            if (arguments.length > 1) {
                for(let t1 = 0; t1 < arguments.length; t1++)this.add(arguments[t1]);
                return this;
            }
            return t1 === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t1), this) : (t1 && t1.isObject3D ? (null !== t1.parent && t1.parent.remove(t1), t1.parent = this, this.children.push(t1), t1.dispatchEvent(Wn)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t1), this);
        }
        remove(t1) {
            if (arguments.length > 1) {
                for(let t1 = 0; t1 < arguments.length; t1++)this.remove(arguments[t1]);
                return this;
            }
            const e = this.children.indexOf(t1);
            return -1 !== e && (t1.parent = null, this.children.splice(e, 1), t1.dispatchEvent(Xn)), this;
        }
        removeFromParent() {
            const t1 = this.parent;
            return null !== t1 && t1.remove(this), this;
        }
        clear() {
            return this.remove(...this.children);
        }
        attach(t1) {
            return this.updateWorldMatrix(!0, !1), On.copy(this.matrixWorld).invert(), null !== t1.parent && (t1.parent.updateWorldMatrix(!0, !1), On.multiply(t1.parent.matrixWorld)), t1.applyMatrix4(On), this.add(t1), t1.updateWorldMatrix(!1, !0), this;
        }
        getObjectById(t1) {
            return this.getObjectByProperty("id", t1);
        }
        getObjectByName(t1) {
            return this.getObjectByProperty("name", t1);
        }
        getObjectByProperty(t1, e) {
            if (this[t1] === e) return this;
            for(let n = 0, i = this.children.length; n < i; n++){
                const i = this.children[n].getObjectByProperty(t1, e);
                if (void 0 !== i) return i;
            }
        }
        getObjectsByProperty(t1, e, n = []) {
            this[t1] === e && n.push(this);
            const i = this.children;
            for(let r = 0, s = i.length; r < s; r++)i[r].getObjectsByProperty(t1, e, n);
            return n;
        }
        getWorldPosition(t1) {
            return this.updateWorldMatrix(!0, !1), t1.setFromMatrixPosition(this.matrixWorld);
        }
        getWorldQuaternion(t1) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Bn, t1, zn), t1;
        }
        getWorldScale(t1) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Bn, Gn, t1), t1;
        }
        getWorldDirection(t1) {
            this.updateWorldMatrix(!0, !1);
            const e = this.matrixWorld.elements;
            return t1.set(e[8], e[9], e[10]).normalize();
        }
        raycast() {}
        traverse(t1) {
            t1(this);
            const e = this.children;
            for(let n = 0, i = e.length; n < i; n++)e[n].traverse(t1);
        }
        traverseVisible(t1) {
            if (!1 === this.visible) return;
            t1(this);
            const e = this.children;
            for(let n = 0, i = e.length; n < i; n++)e[n].traverseVisible(t1);
        }
        traverseAncestors(t1) {
            const e = this.parent;
            null !== e && (t1(e), e.traverseAncestors(t1));
        }
        updateMatrix() {
            this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
        }
        updateMatrixWorld(t1) {
            this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t1) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t1 = !0);
            const e = this.children;
            for(let n = 0, i = e.length; n < i; n++){
                const i = e[n];
                !0 !== i.matrixWorldAutoUpdate && !0 !== t1 || i.updateMatrixWorld(t1);
            }
        }
        updateWorldMatrix(t1, e) {
            const n = this.parent;
            if (!0 === t1 && null !== n && !0 === n.matrixWorldAutoUpdate && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e) {
                const t1 = this.children;
                for(let e = 0, n = t1.length; e < n; e++){
                    const n = t1[e];
                    !0 === n.matrixWorldAutoUpdate && n.updateWorldMatrix(!1, !0);
                }
            }
        }
        toJSON(t1) {
            const e = void 0 === t1 || "string" == typeof t1, n = {};
            e && (t1 = {
                geometries: {},
                materials: {},
                textures: {},
                images: {},
                shapes: {},
                skeletons: {},
                animations: {},
                nodes: {}
            }, n.metadata = {
                version: 4.6,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            const i = {};
            function r(e, n) {
                return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t1)), n.uuid;
            }
            if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), !0 === this.castShadow && (i.castShadow = !0), !0 === this.receiveShadow && (i.receiveShadow = !0), !1 === this.visible && (i.visible = !1), !1 === this.frustumCulled && (i.frustumCulled = !1), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map((t1)=>({
                    boxInitialized: t1.boxInitialized,
                    boxMin: t1.box.min.toArray(),
                    boxMax: t1.box.max.toArray(),
                    sphereInitialized: t1.sphereInitialized,
                    sphereRadius: t1.sphere.radius,
                    sphereCenter: t1.sphere.center.toArray()
                })), i.maxGeometryCount = this._maxGeometryCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(t1), null !== this.boundingSphere && (i.boundingSphere = {
                center: i.boundingSphere.center.toArray(),
                radius: i.boundingSphere.radius
            }), null !== this.boundingBox && (i.boundingBox = {
                min: i.boundingBox.min.toArray(),
                max: i.boundingBox.max.toArray()
            })), this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(t1).uuid)), this.environment && this.environment.isTexture && !0 !== this.environment.isRenderTargetTexture && (i.environment = this.environment.toJSON(t1).uuid);
            else if (this.isMesh || this.isLine || this.isPoints) {
                i.geometry = r(t1.geometries, this.geometry);
                const e = this.geometry.parameters;
                if (void 0 !== e && void 0 !== e.shapes) {
                    const n = e.shapes;
                    if (Array.isArray(n)) for(let e = 0, i = n.length; e < i; e++){
                        const i = n[e];
                        r(t1.shapes, i);
                    }
                    else r(t1.shapes, n);
                }
            }
            if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(t1.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), void 0 !== this.material) {
                if (Array.isArray(this.material)) {
                    const e = [];
                    for(let n = 0, i = this.material.length; n < i; n++)e.push(r(t1.materials, this.material[n]));
                    i.material = e;
                } else i.material = r(t1.materials, this.material);
            }
            if (this.children.length > 0) {
                i.children = [];
                for(let e = 0; e < this.children.length; e++)i.children.push(this.children[e].toJSON(t1).object);
            }
            if (this.animations.length > 0) {
                i.animations = [];
                for(let e = 0; e < this.animations.length; e++){
                    const n = this.animations[e];
                    i.animations.push(r(t1.animations, n));
                }
            }
            if (e) {
                const e = s(t1.geometries), i = s(t1.materials), r = s(t1.textures), a = s(t1.images), o = s(t1.shapes), l = s(t1.skeletons), c = s(t1.animations), h = s(t1.nodes);
                e.length > 0 && (n.geometries = e), i.length > 0 && (n.materials = i), r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a), o.length > 0 && (n.shapes = o), l.length > 0 && (n.skeletons = l), c.length > 0 && (n.animations = c), h.length > 0 && (n.nodes = h);
            }
            return n.object = i, n;
            function s(t1) {
                const e = [];
                for(const n in t1){
                    const i = t1[n];
                    delete i.metadata, e.push(i);
                }
                return e;
            }
        }
        clone(t1) {
            return (new this.constructor).copy(this, t1);
        }
        copy(t1, e = !0) {
            if (this.name = t1.name, this.up.copy(t1.up), this.position.copy(t1.position), this.rotation.order = t1.rotation.order, this.quaternion.copy(t1.quaternion), this.scale.copy(t1.scale), this.matrix.copy(t1.matrix), this.matrixWorld.copy(t1.matrixWorld), this.matrixAutoUpdate = t1.matrixAutoUpdate, this.matrixWorldAutoUpdate = t1.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t1.matrixWorldNeedsUpdate, this.layers.mask = t1.layers.mask, this.visible = t1.visible, this.castShadow = t1.castShadow, this.receiveShadow = t1.receiveShadow, this.frustumCulled = t1.frustumCulled, this.renderOrder = t1.renderOrder, this.animations = t1.animations.slice(), this.userData = JSON.parse(JSON.stringify(t1.userData)), !0 === e) for(let e = 0; e < t1.children.length; e++){
                const n = t1.children[e];
                this.add(n.clone());
            }
            return this;
        }
    }
    jn.DEFAULT_UP = new We(0, 1, 0), jn.DEFAULT_MATRIX_AUTO_UPDATE = !0, jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
    const qn = new We, Yn = new We, Zn = new We, Jn = new We, Kn = new We, $n = new We, Qn = new We, ti = new We, ei = new We, ni = new We;
    let ii = !1;
    class ri {
        constructor(t1 = new We, e = new We, n = new We){
            this.a = t1, this.b = e, this.c = n;
        }
        static getNormal(t1, e, n, i) {
            i.subVectors(n, e), qn.subVectors(t1, e), i.cross(qn);
            const r = i.lengthSq();
            return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
        }
        static getBarycoord(t1, e, n, i, r) {
            qn.subVectors(i, e), Yn.subVectors(n, e), Zn.subVectors(t1, e);
            const s = qn.dot(qn), a = qn.dot(Yn), o = qn.dot(Zn), l = Yn.dot(Yn), c = Yn.dot(Zn), h = s * l - a * a;
            if (0 === h) return r.set(0, 0, 0), null;
            const u = 1 / h, d = (l * o - a * c) * u, p = (s * c - a * o) * u;
            return r.set(1 - d - p, p, d);
        }
        static containsPoint(t1, e, n, i) {
            return null !== this.getBarycoord(t1, e, n, i, Jn) && Jn.x >= 0 && Jn.y >= 0 && Jn.x + Jn.y <= 1;
        }
        static getUV(t1, e, n, i, r, s, a, o) {
            return !1 === ii && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), ii = !0), this.getInterpolation(t1, e, n, i, r, s, a, o);
        }
        static getInterpolation(t1, e, n, i, r, s, a, o) {
            return null === this.getBarycoord(t1, e, n, i, Jn) ? (o.x = 0, o.y = 0, "z" in o && (o.z = 0), "w" in o && (o.w = 0), null) : (o.setScalar(0), o.addScaledVector(r, Jn.x), o.addScaledVector(s, Jn.y), o.addScaledVector(a, Jn.z), o);
        }
        static isFrontFacing(t1, e, n, i) {
            return qn.subVectors(n, e), Yn.subVectors(t1, e), qn.cross(Yn).dot(i) < 0;
        }
        set(t1, e, n) {
            return this.a.copy(t1), this.b.copy(e), this.c.copy(n), this;
        }
        setFromPointsAndIndices(t1, e, n, i) {
            return this.a.copy(t1[e]), this.b.copy(t1[n]), this.c.copy(t1[i]), this;
        }
        setFromAttributeAndIndices(t1, e, n, i) {
            return this.a.fromBufferAttribute(t1, e), this.b.fromBufferAttribute(t1, n), this.c.fromBufferAttribute(t1, i), this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t1) {
            return this.a.copy(t1.a), this.b.copy(t1.b), this.c.copy(t1.c), this;
        }
        getArea() {
            return qn.subVectors(this.c, this.b), Yn.subVectors(this.a, this.b), .5 * qn.cross(Yn).length();
        }
        getMidpoint(t1) {
            return t1.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
        }
        getNormal(t1) {
            return ri.getNormal(this.a, this.b, this.c, t1);
        }
        getPlane(t1) {
            return t1.setFromCoplanarPoints(this.a, this.b, this.c);
        }
        getBarycoord(t1, e) {
            return ri.getBarycoord(t1, this.a, this.b, this.c, e);
        }
        getUV(t1, e, n, i, r) {
            return !1 === ii && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), ii = !0), ri.getInterpolation(t1, this.a, this.b, this.c, e, n, i, r);
        }
        getInterpolation(t1, e, n, i, r) {
            return ri.getInterpolation(t1, this.a, this.b, this.c, e, n, i, r);
        }
        containsPoint(t1) {
            return ri.containsPoint(t1, this.a, this.b, this.c);
        }
        isFrontFacing(t1) {
            return ri.isFrontFacing(this.a, this.b, this.c, t1);
        }
        intersectsBox(t1) {
            return t1.intersectsTriangle(this);
        }
        closestPointToPoint(t1, e) {
            const n = this.a, i = this.b, r = this.c;
            let s, a;
            Kn.subVectors(i, n), $n.subVectors(r, n), ti.subVectors(t1, n);
            const o = Kn.dot(ti), l = $n.dot(ti);
            if (o <= 0 && l <= 0) return e.copy(n);
            ei.subVectors(t1, i);
            const c = Kn.dot(ei), h = $n.dot(ei);
            if (c >= 0 && h <= c) return e.copy(i);
            const u = o * h - c * l;
            if (u <= 0 && o >= 0 && c <= 0) return s = o / (o - c), e.copy(n).addScaledVector(Kn, s);
            ni.subVectors(t1, r);
            const d = Kn.dot(ni), p = $n.dot(ni);
            if (p >= 0 && d <= p) return e.copy(r);
            const m = d * l - o * p;
            if (m <= 0 && l >= 0 && p <= 0) return a = l / (l - p), e.copy(n).addScaledVector($n, a);
            const f = c * p - d * h;
            if (f <= 0 && h - c >= 0 && d - p >= 0) return Qn.subVectors(r, i), a = (h - c) / (h - c + (d - p)), e.copy(i).addScaledVector(Qn, a);
            const g = 1 / (f + m + u);
            return s = m * g, a = u * g, e.copy(n).addScaledVector(Kn, s).addScaledVector($n, a);
        }
        equals(t1) {
            return t1.a.equals(this.a) && t1.b.equals(this.b) && t1.c.equals(this.c);
        }
    }
    const si = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    }, ai = {
        h: 0,
        s: 0,
        l: 0
    }, oi = {
        h: 0,
        s: 0,
        l: 0
    };
    function li(t1, e, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t1 + 6 * (e - t1) * n : n < .5 ? e : n < 2 / 3 ? t1 + 6 * (e - t1) * (2 / 3 - n) : t1;
    }
    class ci {
        constructor(t1, e, n){
            return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(t1, e, n);
        }
        set(t1, e, n) {
            if (void 0 === e && void 0 === n) {
                const e = t1;
                e && e.isColor ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e);
            } else this.setRGB(t1, e, n);
            return this;
        }
        setScalar(t1) {
            return this.r = t1, this.g = t1, this.b = t1, this;
        }
        setHex(t1, e = Gt) {
            return t1 = Math.floor(t1), this.r = (t1 >> 16 & 255) / 255, this.g = (t1 >> 8 & 255) / 255, this.b = (255 & t1) / 255, Re.toWorkingColorSpace(this, e), this;
        }
        setRGB(t1, e, n, i = Re.workingColorSpace) {
            return this.r = t1, this.g = e, this.b = n, Re.toWorkingColorSpace(this, i), this;
        }
        setHSL(t1, e, n, i = Re.workingColorSpace) {
            if (t1 = oe(t1, 1), e = ae(e, 0, 1), n = ae(n, 0, 1), 0 === e) this.r = this.g = this.b = n;
            else {
                const i = n <= .5 ? n * (1 + e) : n + e - n * e, r = 2 * n - i;
                this.r = li(r, i, t1 + 1 / 3), this.g = li(r, i, t1), this.b = li(r, i, t1 - 1 / 3);
            }
            return Re.toWorkingColorSpace(this, i), this;
        }
        setStyle(t1, e = Gt) {
            function n(e) {
                void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t1 + " will be ignored.");
            }
            let i;
            if (i = /^(\w+)\(([^\)]*)\)/.exec(t1)) {
                let r;
                const s = i[1], a = i[2];
                switch(s){
                    case "rgb":
                    case "rgba":
                        if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, e);
                        if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, e);
                        break;
                    case "hsl":
                    case "hsla":
                        if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, e);
                        break;
                    default:
                        console.warn("THREE.Color: Unknown color model " + t1);
                }
            } else if (i = /^\#([A-Fa-f\d]+)$/.exec(t1)) {
                const n = i[1], r = n.length;
                if (3 === r) return this.setRGB(parseInt(n.charAt(0), 16) / 15, parseInt(n.charAt(1), 16) / 15, parseInt(n.charAt(2), 16) / 15, e);
                if (6 === r) return this.setHex(parseInt(n, 16), e);
                console.warn("THREE.Color: Invalid hex color " + t1);
            } else if (t1 && t1.length > 0) return this.setColorName(t1, e);
            return this;
        }
        setColorName(t1, e = Gt) {
            const n = si[t1.toLowerCase()];
            return void 0 !== n ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t1), this;
        }
        clone() {
            return new this.constructor(this.r, this.g, this.b);
        }
        copy(t1) {
            return this.r = t1.r, this.g = t1.g, this.b = t1.b, this;
        }
        copySRGBToLinear(t1) {
            return this.r = Ce(t1.r), this.g = Ce(t1.g), this.b = Ce(t1.b), this;
        }
        copyLinearToSRGB(t1) {
            return this.r = Le(t1.r), this.g = Le(t1.g), this.b = Le(t1.b), this;
        }
        convertSRGBToLinear() {
            return this.copySRGBToLinear(this), this;
        }
        convertLinearToSRGB() {
            return this.copyLinearToSRGB(this), this;
        }
        getHex(t1 = Gt) {
            return Re.fromWorkingColorSpace(hi.copy(this), t1), 65536 * Math.round(ae(255 * hi.r, 0, 255)) + 256 * Math.round(ae(255 * hi.g, 0, 255)) + Math.round(ae(255 * hi.b, 0, 255));
        }
        getHexString(t1 = Gt) {
            return ("000000" + this.getHex(t1).toString(16)).slice(-6);
        }
        getHSL(t1, e = Re.workingColorSpace) {
            Re.fromWorkingColorSpace(hi.copy(this), e);
            const n = hi.r, i = hi.g, r = hi.b, s = Math.max(n, i, r), a = Math.min(n, i, r);
            let o, l;
            const c = (a + s) / 2;
            if (a === s) o = 0, l = 0;
            else {
                const t1 = s - a;
                switch(l = c <= .5 ? t1 / (s + a) : t1 / (2 - s - a), s){
                    case n:
                        o = (i - r) / t1 + (i < r ? 6 : 0);
                        break;
                    case i:
                        o = (r - n) / t1 + 2;
                        break;
                    case r:
                        o = (n - i) / t1 + 4;
                }
                o /= 6;
            }
            return t1.h = o, t1.s = l, t1.l = c, t1;
        }
        getRGB(t1, e = Re.workingColorSpace) {
            return Re.fromWorkingColorSpace(hi.copy(this), e), t1.r = hi.r, t1.g = hi.g, t1.b = hi.b, t1;
        }
        getStyle(t1 = Gt) {
            Re.fromWorkingColorSpace(hi.copy(this), t1);
            const e = hi.r, n = hi.g, i = hi.b;
            return t1 !== Gt ? `color(${t1} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(255 * e)},${Math.round(255 * n)},${Math.round(255 * i)})`;
        }
        offsetHSL(t1, e, n) {
            return this.getHSL(ai), this.setHSL(ai.h + t1, ai.s + e, ai.l + n);
        }
        add(t1) {
            return this.r += t1.r, this.g += t1.g, this.b += t1.b, this;
        }
        addColors(t1, e) {
            return this.r = t1.r + e.r, this.g = t1.g + e.g, this.b = t1.b + e.b, this;
        }
        addScalar(t1) {
            return this.r += t1, this.g += t1, this.b += t1, this;
        }
        sub(t1) {
            return this.r = Math.max(0, this.r - t1.r), this.g = Math.max(0, this.g - t1.g), this.b = Math.max(0, this.b - t1.b), this;
        }
        multiply(t1) {
            return this.r *= t1.r, this.g *= t1.g, this.b *= t1.b, this;
        }
        multiplyScalar(t1) {
            return this.r *= t1, this.g *= t1, this.b *= t1, this;
        }
        lerp(t1, e) {
            return this.r += (t1.r - this.r) * e, this.g += (t1.g - this.g) * e, this.b += (t1.b - this.b) * e, this;
        }
        lerpColors(t1, e, n) {
            return this.r = t1.r + (e.r - t1.r) * n, this.g = t1.g + (e.g - t1.g) * n, this.b = t1.b + (e.b - t1.b) * n, this;
        }
        lerpHSL(t1, e) {
            this.getHSL(ai), t1.getHSL(oi);
            const n = le(ai.h, oi.h, e), i = le(ai.s, oi.s, e), r = le(ai.l, oi.l, e);
            return this.setHSL(n, i, r), this;
        }
        setFromVector3(t1) {
            return this.r = t1.x, this.g = t1.y, this.b = t1.z, this;
        }
        applyMatrix3(t1) {
            const e = this.r, n = this.g, i = this.b, r = t1.elements;
            return this.r = r[0] * e + r[3] * n + r[6] * i, this.g = r[1] * e + r[4] * n + r[7] * i, this.b = r[2] * e + r[5] * n + r[8] * i, this;
        }
        equals(t1) {
            return t1.r === this.r && t1.g === this.g && t1.b === this.b;
        }
        fromArray(t1, e = 0) {
            return this.r = t1[e], this.g = t1[e + 1], this.b = t1[e + 2], this;
        }
        toArray(t1 = [], e = 0) {
            return t1[e] = this.r, t1[e + 1] = this.g, t1[e + 2] = this.b, t1;
        }
        fromBufferAttribute(t1, e) {
            return this.r = t1.getX(e), this.g = t1.getY(e), this.b = t1.getZ(e), this;
        }
        toJSON() {
            return this.getHex();
        }
        *[Symbol.iterator]() {
            yield this.r, yield this.g, yield this.b;
        }
    }
    const hi = new ci;
    ci.NAMES = si;
    let ui = 0;
    class di extends te {
        constructor(){
            super(), this.isMaterial = !0, Object.defineProperty(this, "id", {
                value: ui++
            }), this.uuid = se(), this.name = "", this.type = "Material", this.blending = 1, this.side = s, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = l, this.blendDst = c, this.blendEquation = o, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new ci(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Yt, this.stencilZFail = Yt, this.stencilZPass = Yt, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
        }
        get alphaTest() {
            return this._alphaTest;
        }
        set alphaTest(t1) {
            this._alphaTest > 0 != t1 > 0 && this.version++, this._alphaTest = t1;
        }
        onBuild() {}
        onBeforeRender() {}
        onBeforeCompile() {}
        customProgramCacheKey() {
            return this.onBeforeCompile.toString();
        }
        setValues(t1) {
            if (void 0 !== t1) for(const e in t1){
                const n = t1[e];
                if (void 0 === n) {
                    console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
                    continue;
                }
                const i = this[e];
                void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n : console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
            }
        }
        toJSON(t1) {
            const e = void 0 === t1 || "string" == typeof t1;
            e && (t1 = {
                textures: {},
                images: {}
            });
            const n = {
                metadata: {
                    version: 4.6,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            function i(t1) {
                const e = [];
                for(const n in t1){
                    const i = t1[n];
                    delete i.metadata, e.push(i);
                }
                return e;
            }
            if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), void 0 !== this.sheen && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t1).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t1).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t1).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), void 0 !== this.iridescence && (n.iridescence = this.iridescence), void 0 !== this.iridescenceIOR && (n.iridescenceIOR = this.iridescenceIOR), void 0 !== this.iridescenceThicknessRange && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t1).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t1).uuid), void 0 !== this.anisotropy && (n.anisotropy = this.anisotropy), void 0 !== this.anisotropyRotation && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t1).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t1).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t1).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t1).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t1).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t1).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t1).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t1).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t1).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t1).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t1).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t1).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t1).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t1).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t1).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t1).uuid, void 0 !== this.combine && (n.combine = this.combine)), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t1).uuid), void 0 !== this.transmission && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t1).uuid), void 0 !== this.thickness && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t1).uuid), void 0 !== this.attenuationDistance && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (n.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (n.size = this.size), null !== this.shadowSide && (n.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (n.blending = this.blending), this.side !== s && (n.side = this.side), !0 === this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = !0), this.blendSrc !== l && (n.blendSrc = this.blendSrc), this.blendDst !== c && (n.blendDst = this.blendDst), this.blendEquation !== o && (n.blendEquation = this.blendEquation), null !== this.blendSrcAlpha && (n.blendSrcAlpha = this.blendSrcAlpha), null !== this.blendDstAlpha && (n.blendDstAlpha = this.blendDstAlpha), null !== this.blendEquationAlpha && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), 0 !== this.blendAlpha && (n.blendAlpha = this.blendAlpha), 3 !== this.depthFunc && (n.depthFunc = this.depthFunc), !1 === this.depthTest && (n.depthTest = this.depthTest), !1 === this.depthWrite && (n.depthWrite = this.depthWrite), !1 === this.colorWrite && (n.colorWrite = this.colorWrite), 255 !== this.stencilWriteMask && (n.stencilWriteMask = this.stencilWriteMask), 519 !== this.stencilFunc && (n.stencilFunc = this.stencilFunc), 0 !== this.stencilRef && (n.stencilRef = this.stencilRef), 255 !== this.stencilFuncMask && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Yt && (n.stencilFail = this.stencilFail), this.stencilZFail !== Yt && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Yt && (n.stencilZPass = this.stencilZPass), !0 === this.stencilWrite && (n.stencilWrite = this.stencilWrite), void 0 !== this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.alphaHash && (n.alphaHash = !0), !0 === this.alphaToCoverage && (n.alphaToCoverage = !0), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = !0), !0 === this.forceSinglePass && (n.forceSinglePass = !0), !0 === this.wireframe && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.flatShading && (n.flatShading = !0), !1 === this.visible && (n.visible = !1), !1 === this.toneMapped && (n.toneMapped = !1), !1 === this.fog && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData), e) {
                const e = i(t1.textures), r = i(t1.images);
                e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r);
            }
            return n;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t1) {
            this.name = t1.name, this.blending = t1.blending, this.side = t1.side, this.vertexColors = t1.vertexColors, this.opacity = t1.opacity, this.transparent = t1.transparent, this.blendSrc = t1.blendSrc, this.blendDst = t1.blendDst, this.blendEquation = t1.blendEquation, this.blendSrcAlpha = t1.blendSrcAlpha, this.blendDstAlpha = t1.blendDstAlpha, this.blendEquationAlpha = t1.blendEquationAlpha, this.blendColor.copy(t1.blendColor), this.blendAlpha = t1.blendAlpha, this.depthFunc = t1.depthFunc, this.depthTest = t1.depthTest, this.depthWrite = t1.depthWrite, this.stencilWriteMask = t1.stencilWriteMask, this.stencilFunc = t1.stencilFunc, this.stencilRef = t1.stencilRef, this.stencilFuncMask = t1.stencilFuncMask, this.stencilFail = t1.stencilFail, this.stencilZFail = t1.stencilZFail, this.stencilZPass = t1.stencilZPass, this.stencilWrite = t1.stencilWrite;
            const e = t1.clippingPlanes;
            let n = null;
            if (null !== e) {
                const t1 = e.length;
                n = new Array(t1);
                for(let i = 0; i !== t1; ++i)n[i] = e[i].clone();
            }
            return this.clippingPlanes = n, this.clipIntersection = t1.clipIntersection, this.clipShadows = t1.clipShadows, this.shadowSide = t1.shadowSide, this.colorWrite = t1.colorWrite, this.precision = t1.precision, this.polygonOffset = t1.polygonOffset, this.polygonOffsetFactor = t1.polygonOffsetFactor, this.polygonOffsetUnits = t1.polygonOffsetUnits, this.dithering = t1.dithering, this.alphaTest = t1.alphaTest, this.alphaHash = t1.alphaHash, this.alphaToCoverage = t1.alphaToCoverage, this.premultipliedAlpha = t1.premultipliedAlpha, this.forceSinglePass = t1.forceSinglePass, this.visible = t1.visible, this.toneMapped = t1.toneMapped, this.userData = JSON.parse(JSON.stringify(t1.userData)), this;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
        set needsUpdate(t1) {
            !0 === t1 && this.version++;
        }
    }
    class pi extends di {
        constructor(t1){
            super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new ci(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = h, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.color.copy(t1.color), this.map = t1.map, this.lightMap = t1.lightMap, this.lightMapIntensity = t1.lightMapIntensity, this.aoMap = t1.aoMap, this.aoMapIntensity = t1.aoMapIntensity, this.specularMap = t1.specularMap, this.alphaMap = t1.alphaMap, this.envMap = t1.envMap, this.combine = t1.combine, this.reflectivity = t1.reflectivity, this.refractionRatio = t1.refractionRatio, this.wireframe = t1.wireframe, this.wireframeLinewidth = t1.wireframeLinewidth, this.wireframeLinecap = t1.wireframeLinecap, this.wireframeLinejoin = t1.wireframeLinejoin, this.fog = t1.fog, this;
        }
    }
    const mi = fi();
    function fi() {
        const t1 = new ArrayBuffer(4), e = new Float32Array(t1), n = new Uint32Array(t1), i = new Uint32Array(512), r = new Uint32Array(512);
        for(let t1 = 0; t1 < 256; ++t1){
            const e = t1 - 127;
            e < -27 ? (i[t1] = 0, i[256 | t1] = 32768, r[t1] = 24, r[256 | t1] = 24) : e < -14 ? (i[t1] = 1024 >> -e - 14, i[256 | t1] = 1024 >> -e - 14 | 32768, r[t1] = -e - 1, r[256 | t1] = -e - 1) : e <= 15 ? (i[t1] = e + 15 << 10, i[256 | t1] = e + 15 << 10 | 32768, r[t1] = 13, r[256 | t1] = 13) : e < 128 ? (i[t1] = 31744, i[256 | t1] = 64512, r[t1] = 24, r[256 | t1] = 24) : (i[t1] = 31744, i[256 | t1] = 64512, r[t1] = 13, r[256 | t1] = 13);
        }
        const s = new Uint32Array(2048), a = new Uint32Array(64), o = new Uint32Array(64);
        for(let t1 = 1; t1 < 1024; ++t1){
            let e = t1 << 13, n = 0;
            for(; 0 == (8388608 & e);)e <<= 1, n -= 8388608;
            e &= -8388609, n += 947912704, s[t1] = e | n;
        }
        for(let t1 = 1024; t1 < 2048; ++t1)s[t1] = 939524096 + (t1 - 1024 << 13);
        for(let t1 = 1; t1 < 31; ++t1)a[t1] = t1 << 23;
        a[31] = 1199570944, a[32] = 2147483648;
        for(let t1 = 33; t1 < 63; ++t1)a[t1] = 2147483648 + (t1 - 32 << 23);
        a[63] = 3347054592;
        for(let t1 = 1; t1 < 64; ++t1)32 !== t1 && (o[t1] = 1024);
        return {
            floatView: e,
            uint32View: n,
            baseTable: i,
            shiftTable: r,
            mantissaTable: s,
            exponentTable: a,
            offsetTable: o
        };
    }
    function gi(t1) {
        Math.abs(t1) > 65504 && console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."), t1 = ae(t1, -65504, 65504), mi.floatView[0] = t1;
        const e = mi.uint32View[0], n = e >> 23 & 511;
        return mi.baseTable[n] + ((8388607 & e) >> mi.shiftTable[n]);
    }
    function _i(t1) {
        const e = t1 >> 10;
        return mi.uint32View[0] = mi.mantissaTable[mi.offsetTable[e] + (1023 & t1)] + mi.exponentTable[e], mi.floatView[0];
    }
    const vi = {
        toHalfFloat: gi,
        fromHalfFloat: _i
    }, xi = new We, yi = new me;
    class Mi {
        constructor(t1, e, n = !1){
            if (Array.isArray(t1)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.isBufferAttribute = !0, this.name = "", this.array = t1, this.itemSize = e, this.count = void 0 !== t1 ? t1.length / e : 0, this.normalized = n, this.usage = Zt, this._updateRange = {
                offset: 0,
                count: -1
            }, this.updateRanges = [], this.gpuType = H, this.version = 0;
        }
        onUploadCallback() {}
        set needsUpdate(t1) {
            !0 === t1 && this.version++;
        }
        get updateRange() {
            return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
        }
        setUsage(t1) {
            return this.usage = t1, this;
        }
        addUpdateRange(t1, e) {
            this.updateRanges.push({
                start: t1,
                count: e
            });
        }
        clearUpdateRanges() {
            this.updateRanges.length = 0;
        }
        copy(t1) {
            return this.name = t1.name, this.array = new t1.array.constructor(t1.array), this.itemSize = t1.itemSize, this.count = t1.count, this.normalized = t1.normalized, this.usage = t1.usage, this.gpuType = t1.gpuType, this;
        }
        copyAt(t1, e, n) {
            t1 *= this.itemSize, n *= e.itemSize;
            for(let i = 0, r = this.itemSize; i < r; i++)this.array[t1 + i] = e.array[n + i];
            return this;
        }
        copyArray(t1) {
            return this.array.set(t1), this;
        }
        applyMatrix3(t1) {
            if (2 === this.itemSize) for(let e = 0, n = this.count; e < n; e++)yi.fromBufferAttribute(this, e), yi.applyMatrix3(t1), this.setXY(e, yi.x, yi.y);
            else if (3 === this.itemSize) for(let e = 0, n = this.count; e < n; e++)xi.fromBufferAttribute(this, e), xi.applyMatrix3(t1), this.setXYZ(e, xi.x, xi.y, xi.z);
            return this;
        }
        applyMatrix4(t1) {
            for(let e = 0, n = this.count; e < n; e++)xi.fromBufferAttribute(this, e), xi.applyMatrix4(t1), this.setXYZ(e, xi.x, xi.y, xi.z);
            return this;
        }
        applyNormalMatrix(t1) {
            for(let e = 0, n = this.count; e < n; e++)xi.fromBufferAttribute(this, e), xi.applyNormalMatrix(t1), this.setXYZ(e, xi.x, xi.y, xi.z);
            return this;
        }
        transformDirection(t1) {
            for(let e = 0, n = this.count; e < n; e++)xi.fromBufferAttribute(this, e), xi.transformDirection(t1), this.setXYZ(e, xi.x, xi.y, xi.z);
            return this;
        }
        set(t1, e = 0) {
            return this.array.set(t1, e), this;
        }
        getComponent(t1, e) {
            let n = this.array[t1 * this.itemSize + e];
            return this.normalized && (n = ue(n, this.array)), n;
        }
        setComponent(t1, e, n) {
            return this.normalized && (n = de(n, this.array)), this.array[t1 * this.itemSize + e] = n, this;
        }
        getX(t1) {
            let e = this.array[t1 * this.itemSize];
            return this.normalized && (e = ue(e, this.array)), e;
        }
        setX(t1, e) {
            return this.normalized && (e = de(e, this.array)), this.array[t1 * this.itemSize] = e, this;
        }
        getY(t1) {
            let e = this.array[t1 * this.itemSize + 1];
            return this.normalized && (e = ue(e, this.array)), e;
        }
        setY(t1, e) {
            return this.normalized && (e = de(e, this.array)), this.array[t1 * this.itemSize + 1] = e, this;
        }
        getZ(t1) {
            let e = this.array[t1 * this.itemSize + 2];
            return this.normalized && (e = ue(e, this.array)), e;
        }
        setZ(t1, e) {
            return this.normalized && (e = de(e, this.array)), this.array[t1 * this.itemSize + 2] = e, this;
        }
        getW(t1) {
            let e = this.array[t1 * this.itemSize + 3];
            return this.normalized && (e = ue(e, this.array)), e;
        }
        setW(t1, e) {
            return this.normalized && (e = de(e, this.array)), this.array[t1 * this.itemSize + 3] = e, this;
        }
        setXY(t1, e, n) {
            return t1 *= this.itemSize, this.normalized && (e = de(e, this.array), n = de(n, this.array)), this.array[t1 + 0] = e, this.array[t1 + 1] = n, this;
        }
        setXYZ(t1, e, n, i) {
            return t1 *= this.itemSize, this.normalized && (e = de(e, this.array), n = de(n, this.array), i = de(i, this.array)), this.array[t1 + 0] = e, this.array[t1 + 1] = n, this.array[t1 + 2] = i, this;
        }
        setXYZW(t1, e, n, i, r) {
            return t1 *= this.itemSize, this.normalized && (e = de(e, this.array), n = de(n, this.array), i = de(i, this.array), r = de(r, this.array)), this.array[t1 + 0] = e, this.array[t1 + 1] = n, this.array[t1 + 2] = i, this.array[t1 + 3] = r, this;
        }
        onUpload(t1) {
            return this.onUploadCallback = t1, this;
        }
        clone() {
            return new this.constructor(this.array, this.itemSize).copy(this);
        }
        toJSON() {
            const t1 = {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: Array.from(this.array),
                normalized: this.normalized
            };
            return "" !== this.name && (t1.name = this.name), this.usage !== Zt && (t1.usage = this.usage), t1;
        }
    }
    class Si extends Mi {
        constructor(t1, e, n){
            super(new Uint16Array(t1), e, n);
        }
    }
    class bi extends Mi {
        constructor(t1, e, n){
            super(new Uint32Array(t1), e, n);
        }
    }
    class Ti extends Mi {
        constructor(t1, e, n){
            super(new Float32Array(t1), e, n);
        }
    }
    let Ei = 0;
    const wi = new Mn, Ai = new jn, Ri = new We, Ci = new qe, Li = new qe, Pi = new We;
    class Ii extends te {
        constructor(){
            super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", {
                value: Ei++
            }), this.uuid = se(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
                start: 0,
                count: 1 / 0
            }, this.userData = {};
        }
        getIndex() {
            return this.index;
        }
        setIndex(t1) {
            return Array.isArray(t1) ? this.index = new (_e(t1) ? bi : Si)(t1, 1) : this.index = t1, this;
        }
        getAttribute(t1) {
            return this.attributes[t1];
        }
        setAttribute(t1, e) {
            return this.attributes[t1] = e, this;
        }
        deleteAttribute(t1) {
            return delete this.attributes[t1], this;
        }
        hasAttribute(t1) {
            return void 0 !== this.attributes[t1];
        }
        addGroup(t1, e, n = 0) {
            this.groups.push({
                start: t1,
                count: e,
                materialIndex: n
            });
        }
        clearGroups() {
            this.groups = [];
        }
        setDrawRange(t1, e) {
            this.drawRange.start = t1, this.drawRange.count = e;
        }
        applyMatrix4(t1) {
            const e = this.attributes.position;
            void 0 !== e && (e.applyMatrix4(t1), e.needsUpdate = !0);
            const n = this.attributes.normal;
            if (void 0 !== n) {
                const e = (new fe).getNormalMatrix(t1);
                n.applyNormalMatrix(e), n.needsUpdate = !0;
            }
            const i = this.attributes.tangent;
            return void 0 !== i && (i.transformDirection(t1), i.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this;
        }
        applyQuaternion(t1) {
            return wi.makeRotationFromQuaternion(t1), this.applyMatrix4(wi), this;
        }
        rotateX(t1) {
            return wi.makeRotationX(t1), this.applyMatrix4(wi), this;
        }
        rotateY(t1) {
            return wi.makeRotationY(t1), this.applyMatrix4(wi), this;
        }
        rotateZ(t1) {
            return wi.makeRotationZ(t1), this.applyMatrix4(wi), this;
        }
        translate(t1, e, n) {
            return wi.makeTranslation(t1, e, n), this.applyMatrix4(wi), this;
        }
        scale(t1, e, n) {
            return wi.makeScale(t1, e, n), this.applyMatrix4(wi), this;
        }
        lookAt(t1) {
            return Ai.lookAt(t1), Ai.updateMatrix(), this.applyMatrix4(Ai.matrix), this;
        }
        center() {
            return this.computeBoundingBox(), this.boundingBox.getCenter(Ri).negate(), this.translate(Ri.x, Ri.y, Ri.z), this;
        }
        setFromPoints(t1) {
            const e = [];
            for(let n = 0, i = t1.length; n < i; n++){
                const i = t1[n];
                e.push(i.x, i.y, i.z || 0);
            }
            return this.setAttribute("position", new Ti(e, 3)), this;
        }
        computeBoundingBox() {
            null === this.boundingBox && (this.boundingBox = new qe);
            const t1 = this.attributes.position, e = this.morphAttributes.position;
            if (t1 && t1.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new We(-1 / 0, -1 / 0, -1 / 0), new We(1 / 0, 1 / 0, 1 / 0));
            if (void 0 !== t1) {
                if (this.boundingBox.setFromBufferAttribute(t1), e) for(let t1 = 0, n = e.length; t1 < n; t1++){
                    const n = e[t1];
                    Ci.setFromBufferAttribute(n), this.morphTargetsRelative ? (Pi.addVectors(this.boundingBox.min, Ci.min), this.boundingBox.expandByPoint(Pi), Pi.addVectors(this.boundingBox.max, Ci.max), this.boundingBox.expandByPoint(Pi)) : (this.boundingBox.expandByPoint(Ci.min), this.boundingBox.expandByPoint(Ci.max));
                }
            } else this.boundingBox.makeEmpty();
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
        }
        computeBoundingSphere() {
            null === this.boundingSphere && (this.boundingSphere = new dn);
            const t1 = this.attributes.position, e = this.morphAttributes.position;
            if (t1 && t1.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new We, 1 / 0);
            if (t1) {
                const n = this.boundingSphere.center;
                if (Ci.setFromBufferAttribute(t1), e) for(let t1 = 0, n = e.length; t1 < n; t1++){
                    const n = e[t1];
                    Li.setFromBufferAttribute(n), this.morphTargetsRelative ? (Pi.addVectors(Ci.min, Li.min), Ci.expandByPoint(Pi), Pi.addVectors(Ci.max, Li.max), Ci.expandByPoint(Pi)) : (Ci.expandByPoint(Li.min), Ci.expandByPoint(Li.max));
                }
                Ci.getCenter(n);
                let i = 0;
                for(let e = 0, r = t1.count; e < r; e++)Pi.fromBufferAttribute(t1, e), i = Math.max(i, n.distanceToSquared(Pi));
                if (e) for(let r = 0, s = e.length; r < s; r++){
                    const s = e[r], a = this.morphTargetsRelative;
                    for(let e = 0, r = s.count; e < r; e++)Pi.fromBufferAttribute(s, e), a && (Ri.fromBufferAttribute(t1, e), Pi.add(Ri)), i = Math.max(i, n.distanceToSquared(Pi));
                }
                this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
            }
        }
        computeTangents() {
            const t1 = this.index, e = this.attributes;
            if (null === t1 || void 0 === e.position || void 0 === e.normal || void 0 === e.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
            const n = t1.array, i = e.position.array, r = e.normal.array, s = e.uv.array, a = i.length / 3;
            !1 === this.hasAttribute("tangent") && this.setAttribute("tangent", new Mi(new Float32Array(4 * a), 4));
            const o = this.getAttribute("tangent").array, l = [], c = [];
            for(let t1 = 0; t1 < a; t1++)l[t1] = new We, c[t1] = new We;
            const h = new We, u = new We, d = new We, p = new me, m = new me, f = new me, g = new We, _ = new We;
            function v(t1, e, n) {
                h.fromArray(i, 3 * t1), u.fromArray(i, 3 * e), d.fromArray(i, 3 * n), p.fromArray(s, 2 * t1), m.fromArray(s, 2 * e), f.fromArray(s, 2 * n), u.sub(h), d.sub(h), m.sub(p), f.sub(p);
                const r = 1 / (m.x * f.y - f.x * m.y);
                isFinite(r) && (g.copy(u).multiplyScalar(f.y).addScaledVector(d, -m.y).multiplyScalar(r), _.copy(d).multiplyScalar(m.x).addScaledVector(u, -f.x).multiplyScalar(r), l[t1].add(g), l[e].add(g), l[n].add(g), c[t1].add(_), c[e].add(_), c[n].add(_));
            }
            let x = this.groups;
            0 === x.length && (x = [
                {
                    start: 0,
                    count: n.length
                }
            ]);
            for(let t1 = 0, e = x.length; t1 < e; ++t1){
                const e = x[t1], i = e.start;
                for(let t1 = i, r = i + e.count; t1 < r; t1 += 3)v(n[t1 + 0], n[t1 + 1], n[t1 + 2]);
            }
            const y = new We, M = new We, S = new We, b = new We;
            function T(t1) {
                S.fromArray(r, 3 * t1), b.copy(S);
                const e = l[t1];
                y.copy(e), y.sub(S.multiplyScalar(S.dot(e))).normalize(), M.crossVectors(b, e);
                const n = M.dot(c[t1]) < 0 ? -1 : 1;
                o[4 * t1] = y.x, o[4 * t1 + 1] = y.y, o[4 * t1 + 2] = y.z, o[4 * t1 + 3] = n;
            }
            for(let t1 = 0, e = x.length; t1 < e; ++t1){
                const e = x[t1], i = e.start;
                for(let t1 = i, r = i + e.count; t1 < r; t1 += 3)T(n[t1 + 0]), T(n[t1 + 1]), T(n[t1 + 2]);
            }
        }
        computeVertexNormals() {
            const t1 = this.index, e = this.getAttribute("position");
            if (void 0 !== e) {
                let n = this.getAttribute("normal");
                if (void 0 === n) n = new Mi(new Float32Array(3 * e.count), 3), this.setAttribute("normal", n);
                else for(let t1 = 0, e = n.count; t1 < e; t1++)n.setXYZ(t1, 0, 0, 0);
                const i = new We, r = new We, s = new We, a = new We, o = new We, l = new We, c = new We, h = new We;
                if (t1) for(let u = 0, d = t1.count; u < d; u += 3){
                    const d = t1.getX(u + 0), p = t1.getX(u + 1), m = t1.getX(u + 2);
                    i.fromBufferAttribute(e, d), r.fromBufferAttribute(e, p), s.fromBufferAttribute(e, m), c.subVectors(s, r), h.subVectors(i, r), c.cross(h), a.fromBufferAttribute(n, d), o.fromBufferAttribute(n, p), l.fromBufferAttribute(n, m), a.add(c), o.add(c), l.add(c), n.setXYZ(d, a.x, a.y, a.z), n.setXYZ(p, o.x, o.y, o.z), n.setXYZ(m, l.x, l.y, l.z);
                }
                else for(let t1 = 0, a = e.count; t1 < a; t1 += 3)i.fromBufferAttribute(e, t1 + 0), r.fromBufferAttribute(e, t1 + 1), s.fromBufferAttribute(e, t1 + 2), c.subVectors(s, r), h.subVectors(i, r), c.cross(h), n.setXYZ(t1 + 0, c.x, c.y, c.z), n.setXYZ(t1 + 1, c.x, c.y, c.z), n.setXYZ(t1 + 2, c.x, c.y, c.z);
                this.normalizeNormals(), n.needsUpdate = !0;
            }
        }
        normalizeNormals() {
            const t1 = this.attributes.normal;
            for(let e = 0, n = t1.count; e < n; e++)Pi.fromBufferAttribute(t1, e), Pi.normalize(), t1.setXYZ(e, Pi.x, Pi.y, Pi.z);
        }
        toNonIndexed() {
            function t1(t1, e) {
                const n = t1.array, i = t1.itemSize, r = t1.normalized, s = new n.constructor(e.length * i);
                let a = 0, o = 0;
                for(let r = 0, l = e.length; r < l; r++){
                    a = t1.isInterleavedBufferAttribute ? e[r] * t1.data.stride + t1.offset : e[r] * i;
                    for(let t1 = 0; t1 < i; t1++)s[o++] = n[a++];
                }
                return new Mi(s, i, r);
            }
            if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
            const e = new Ii, n = this.index.array, i = this.attributes;
            for(const r in i){
                const s = t1(i[r], n);
                e.setAttribute(r, s);
            }
            const r = this.morphAttributes;
            for(const i in r){
                const s = [], a = r[i];
                for(let e = 0, i = a.length; e < i; e++){
                    const i = t1(a[e], n);
                    s.push(i);
                }
                e.morphAttributes[i] = s;
            }
            e.morphTargetsRelative = this.morphTargetsRelative;
            const s = this.groups;
            for(let t1 = 0, n = s.length; t1 < n; t1++){
                const n = s[t1];
                e.addGroup(n.start, n.count, n.materialIndex);
            }
            return e;
        }
        toJSON() {
            const t1 = {
                metadata: {
                    version: 4.6,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            if (t1.uuid = this.uuid, t1.type = this.type, "" !== this.name && (t1.name = this.name), Object.keys(this.userData).length > 0 && (t1.userData = this.userData), void 0 !== this.parameters) {
                const e = this.parameters;
                for(const n in e)void 0 !== e[n] && (t1[n] = e[n]);
                return t1;
            }
            t1.data = {
                attributes: {}
            };
            const e = this.index;
            null !== e && (t1.data.index = {
                type: e.array.constructor.name,
                array: Array.prototype.slice.call(e.array)
            });
            const n = this.attributes;
            for(const e in n){
                const i = n[e];
                t1.data.attributes[e] = i.toJSON(t1.data);
            }
            const i = {};
            let r = !1;
            for(const e in this.morphAttributes){
                const n = this.morphAttributes[e], s = [];
                for(let e = 0, i = n.length; e < i; e++){
                    const i = n[e];
                    s.push(i.toJSON(t1.data));
                }
                s.length > 0 && (i[e] = s, r = !0);
            }
            r && (t1.data.morphAttributes = i, t1.data.morphTargetsRelative = this.morphTargetsRelative);
            const s = this.groups;
            s.length > 0 && (t1.data.groups = JSON.parse(JSON.stringify(s)));
            const a = this.boundingSphere;
            return null !== a && (t1.data.boundingSphere = {
                center: a.center.toArray(),
                radius: a.radius
            }), t1;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t1) {
            this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
            const e = {};
            this.name = t1.name;
            const n = t1.index;
            null !== n && this.setIndex(n.clone(e));
            const i = t1.attributes;
            for(const t1 in i){
                const n = i[t1];
                this.setAttribute(t1, n.clone(e));
            }
            const r = t1.morphAttributes;
            for(const t1 in r){
                const n = [], i = r[t1];
                for(let t1 = 0, r = i.length; t1 < r; t1++)n.push(i[t1].clone(e));
                this.morphAttributes[t1] = n;
            }
            this.morphTargetsRelative = t1.morphTargetsRelative;
            const s = t1.groups;
            for(let t1 = 0, e = s.length; t1 < e; t1++){
                const e = s[t1];
                this.addGroup(e.start, e.count, e.materialIndex);
            }
            const a = t1.boundingBox;
            null !== a && (this.boundingBox = a.clone());
            const o = t1.boundingSphere;
            return null !== o && (this.boundingSphere = o.clone()), this.drawRange.start = t1.drawRange.start, this.drawRange.count = t1.drawRange.count, this.userData = t1.userData, this;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
    }
    const Ui = new Mn, Di = new yn, Ni = new dn, Oi = new We, Fi = new We, Bi = new We, zi = new We, Gi = new We, Hi = new We, Vi = new me, ki = new me, Wi = new me, Xi = new We, ji = new We, qi = new We, Yi = new We, Zi = new We;
    class Ji extends jn {
        constructor(t1 = new Ii, e = new pi){
            super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t1, this.material = e, this.updateMorphTargets();
        }
        copy(t1, e) {
            return super.copy(t1, e), void 0 !== t1.morphTargetInfluences && (this.morphTargetInfluences = t1.morphTargetInfluences.slice()), void 0 !== t1.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t1.morphTargetDictionary)), this.material = Array.isArray(t1.material) ? t1.material.slice() : t1.material, this.geometry = t1.geometry, this;
        }
        updateMorphTargets() {
            const t1 = this.geometry.morphAttributes, e = Object.keys(t1);
            if (e.length > 0) {
                const n = t1[e[0]];
                if (void 0 !== n) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for(let t1 = 0, e = n.length; t1 < e; t1++){
                        const e = n[t1].name || String(t1);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t1;
                    }
                }
            }
        }
        getVertexPosition(t1, e) {
            const n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, s = n.morphTargetsRelative;
            e.fromBufferAttribute(i, t1);
            const a = this.morphTargetInfluences;
            if (r && a) {
                Hi.set(0, 0, 0);
                for(let n = 0, i = r.length; n < i; n++){
                    const i = a[n], o = r[n];
                    0 !== i && (Gi.fromBufferAttribute(o, t1), s ? Hi.addScaledVector(Gi, i) : Hi.addScaledVector(Gi.sub(e), i));
                }
                e.add(Hi);
            }
            return e;
        }
        raycast(t1, e) {
            const n = this.geometry, i = this.material, r = this.matrixWorld;
            if (void 0 !== i) {
                if (null === n.boundingSphere && n.computeBoundingSphere(), Ni.copy(n.boundingSphere), Ni.applyMatrix4(r), Di.copy(t1.ray).recast(t1.near), !1 === Ni.containsPoint(Di.origin)) {
                    if (null === Di.intersectSphere(Ni, Oi)) return;
                    if (Di.origin.distanceToSquared(Oi) > (t1.far - t1.near) ** 2) return;
                }
                Ui.copy(r).invert(), Di.copy(t1.ray).applyMatrix4(Ui), null !== n.boundingBox && !1 === Di.intersectsBox(n.boundingBox) || this._computeIntersections(t1, e, Di);
            }
        }
        _computeIntersections(t1, e, n) {
            let i;
            const r = this.geometry, s = this.material, a = r.index, o = r.attributes.position, l = r.attributes.uv, c = r.attributes.uv1, h = r.attributes.normal, u = r.groups, d = r.drawRange;
            if (null !== a) {
                if (Array.isArray(s)) for(let r = 0, o = u.length; r < o; r++){
                    const o = u[r], p = s[o.materialIndex];
                    for(let r = Math.max(o.start, d.start), s = Math.min(a.count, Math.min(o.start + o.count, d.start + d.count)); r < s; r += 3)i = Ki(this, p, t1, n, l, c, h, a.getX(r), a.getX(r + 1), a.getX(r + 2)), i && (i.faceIndex = Math.floor(r / 3), i.face.materialIndex = o.materialIndex, e.push(i));
                }
                else for(let r = Math.max(0, d.start), o = Math.min(a.count, d.start + d.count); r < o; r += 3)i = Ki(this, s, t1, n, l, c, h, a.getX(r), a.getX(r + 1), a.getX(r + 2)), i && (i.faceIndex = Math.floor(r / 3), e.push(i));
            } else if (void 0 !== o) {
                if (Array.isArray(s)) for(let r = 0, a = u.length; r < a; r++){
                    const a = u[r], p = s[a.materialIndex];
                    for(let r = Math.max(a.start, d.start), s = Math.min(o.count, Math.min(a.start + a.count, d.start + d.count)); r < s; r += 3)i = Ki(this, p, t1, n, l, c, h, r, r + 1, r + 2), i && (i.faceIndex = Math.floor(r / 3), i.face.materialIndex = a.materialIndex, e.push(i));
                }
                else for(let r = Math.max(0, d.start), a = Math.min(o.count, d.start + d.count); r < a; r += 3)i = Ki(this, s, t1, n, l, c, h, r, r + 1, r + 2), i && (i.faceIndex = Math.floor(r / 3), e.push(i));
            }
        }
    }
    function Ki(t1, e, n, i, r, o, l, c, h, u) {
        t1.getVertexPosition(c, Fi), t1.getVertexPosition(h, Bi), t1.getVertexPosition(u, zi);
        const d = function(t1, e, n, i, r, o, l, c) {
            let h;
            if (h = e.side === a ? i.intersectTriangle(l, o, r, !0, c) : i.intersectTriangle(r, o, l, e.side === s, c), null === h) return null;
            Zi.copy(c), Zi.applyMatrix4(t1.matrixWorld);
            const u = n.ray.origin.distanceTo(Zi);
            return u < n.near || u > n.far ? null : {
                distance: u,
                point: Zi.clone(),
                object: t1
            };
        }(t1, e, n, i, Fi, Bi, zi, Yi);
        if (d) {
            r && (Vi.fromBufferAttribute(r, c), ki.fromBufferAttribute(r, h), Wi.fromBufferAttribute(r, u), d.uv = ri.getInterpolation(Yi, Fi, Bi, zi, Vi, ki, Wi, new me)), o && (Vi.fromBufferAttribute(o, c), ki.fromBufferAttribute(o, h), Wi.fromBufferAttribute(o, u), d.uv1 = ri.getInterpolation(Yi, Fi, Bi, zi, Vi, ki, Wi, new me), d.uv2 = d.uv1), l && (Xi.fromBufferAttribute(l, c), ji.fromBufferAttribute(l, h), qi.fromBufferAttribute(l, u), d.normal = ri.getInterpolation(Yi, Fi, Bi, zi, Xi, ji, qi, new We), d.normal.dot(i.direction) > 0 && d.normal.multiplyScalar(-1));
            const t1 = {
                a: c,
                b: h,
                c: u,
                normal: new We,
                materialIndex: 0
            };
            ri.getNormal(Fi, Bi, zi, t1.normal), d.face = t1;
        }
        return d;
    }
    class $i extends Ii {
        constructor(t1 = 1, e = 1, n = 1, i = 1, r = 1, s = 1){
            super(), this.type = "BoxGeometry", this.parameters = {
                width: t1,
                height: e,
                depth: n,
                widthSegments: i,
                heightSegments: r,
                depthSegments: s
            };
            const a = this;
            i = Math.floor(i), r = Math.floor(r), s = Math.floor(s);
            const o = [], l = [], c = [], h = [];
            let u = 0, d = 0;
            function p(t1, e, n, i, r, s, p, m, f, g, _) {
                const v = s / f, x = p / g, y = s / 2, M = p / 2, S = m / 2, b = f + 1, T = g + 1;
                let E = 0, w = 0;
                const A = new We;
                for(let s = 0; s < T; s++){
                    const a = s * x - M;
                    for(let o = 0; o < b; o++){
                        const u = o * v - y;
                        A[t1] = u * i, A[e] = a * r, A[n] = S, l.push(A.x, A.y, A.z), A[t1] = 0, A[e] = 0, A[n] = m > 0 ? 1 : -1, c.push(A.x, A.y, A.z), h.push(o / f), h.push(1 - s / g), E += 1;
                    }
                }
                for(let t1 = 0; t1 < g; t1++)for(let e = 0; e < f; e++){
                    const n = u + e + b * t1, i = u + e + b * (t1 + 1), r = u + (e + 1) + b * (t1 + 1), s = u + (e + 1) + b * t1;
                    o.push(n, i, s), o.push(i, r, s), w += 6;
                }
                a.addGroup(d, w, _), d += w, u += E;
            }
            p("z", "y", "x", -1, -1, n, e, t1, s, r, 0), p("z", "y", "x", 1, -1, n, e, -t1, s, r, 1), p("x", "z", "y", 1, 1, t1, n, e, i, s, 2), p("x", "z", "y", 1, -1, t1, n, -e, i, s, 3), p("x", "y", "z", 1, -1, t1, e, n, i, r, 4), p("x", "y", "z", -1, -1, t1, e, -n, i, r, 5), this.setIndex(o), this.setAttribute("position", new Ti(l, 3)), this.setAttribute("normal", new Ti(c, 3)), this.setAttribute("uv", new Ti(h, 2));
        }
        copy(t1) {
            return super.copy(t1), this.parameters = Object.assign({}, t1.parameters), this;
        }
        static fromJSON(t1) {
            return new $i(t1.width, t1.height, t1.depth, t1.widthSegments, t1.heightSegments, t1.depthSegments);
        }
    }
    function Qi(t1) {
        const e = {};
        for(const n in t1){
            e[n] = {};
            for(const i in t1[n]){
                const r = t1[n][i];
                r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[n][i] = null) : e[n][i] = r.clone() : Array.isArray(r) ? e[n][i] = r.slice() : e[n][i] = r;
            }
        }
        return e;
    }
    function tr(t1) {
        const e = {};
        for(let n = 0; n < t1.length; n++){
            const i = Qi(t1[n]);
            for(const t1 in i)e[t1] = i[t1];
        }
        return e;
    }
    function er(t1) {
        return null === t1.getRenderTarget() ? t1.outputColorSpace : Re.workingColorSpace;
    }
    const nr = {
        clone: Qi,
        merge: tr
    };
    class ir extends di {
        constructor(t1){
            super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
                derivatives: !1,
                fragDepth: !1,
                drawBuffers: !1,
                shaderTextureLOD: !1,
                clipCullDistance: !1
            }, this.defaultAttributeValues = {
                color: [
                    1,
                    1,
                    1
                ],
                uv: [
                    0,
                    0
                ],
                uv1: [
                    0,
                    0
                ]
            }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== t1 && this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.fragmentShader = t1.fragmentShader, this.vertexShader = t1.vertexShader, this.uniforms = Qi(t1.uniforms), this.uniformsGroups = function(t1) {
                const e = [];
                for(let n = 0; n < t1.length; n++)e.push(t1[n].clone());
                return e;
            }(t1.uniformsGroups), this.defines = Object.assign({}, t1.defines), this.wireframe = t1.wireframe, this.wireframeLinewidth = t1.wireframeLinewidth, this.fog = t1.fog, this.lights = t1.lights, this.clipping = t1.clipping, this.extensions = Object.assign({}, t1.extensions), this.glslVersion = t1.glslVersion, this;
        }
        toJSON(t1) {
            const e = super.toJSON(t1);
            e.glslVersion = this.glslVersion, e.uniforms = {};
            for(const n in this.uniforms){
                const i = this.uniforms[n].value;
                i && i.isTexture ? e.uniforms[n] = {
                    type: "t",
                    value: i.toJSON(t1).uuid
                } : i && i.isColor ? e.uniforms[n] = {
                    type: "c",
                    value: i.getHex()
                } : i && i.isVector2 ? e.uniforms[n] = {
                    type: "v2",
                    value: i.toArray()
                } : i && i.isVector3 ? e.uniforms[n] = {
                    type: "v3",
                    value: i.toArray()
                } : i && i.isVector4 ? e.uniforms[n] = {
                    type: "v4",
                    value: i.toArray()
                } : i && i.isMatrix3 ? e.uniforms[n] = {
                    type: "m3",
                    value: i.toArray()
                } : i && i.isMatrix4 ? e.uniforms[n] = {
                    type: "m4",
                    value: i.toArray()
                } : e.uniforms[n] = {
                    value: i
                };
            }
            Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
            const n = {};
            for(const t1 in this.extensions)!0 === this.extensions[t1] && (n[t1] = !0);
            return Object.keys(n).length > 0 && (e.extensions = n), e;
        }
    }
    class rr extends jn {
        constructor(){
            super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Mn, this.projectionMatrix = new Mn, this.projectionMatrixInverse = new Mn, this.coordinateSystem = $t;
        }
        copy(t1, e) {
            return super.copy(t1, e), this.matrixWorldInverse.copy(t1.matrixWorldInverse), this.projectionMatrix.copy(t1.projectionMatrix), this.projectionMatrixInverse.copy(t1.projectionMatrixInverse), this.coordinateSystem = t1.coordinateSystem, this;
        }
        getWorldDirection(t1) {
            return super.getWorldDirection(t1).negate();
        }
        updateMatrixWorld(t1) {
            super.updateMatrixWorld(t1), this.matrixWorldInverse.copy(this.matrixWorld).invert();
        }
        updateWorldMatrix(t1, e) {
            super.updateWorldMatrix(t1, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    class sr extends rr {
        constructor(t1 = 50, e = 1, n = .1, i = 2e3){
            super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t1, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
        }
        copy(t1, e) {
            return super.copy(t1, e), this.fov = t1.fov, this.zoom = t1.zoom, this.near = t1.near, this.far = t1.far, this.focus = t1.focus, this.aspect = t1.aspect, this.view = null === t1.view ? null : Object.assign({}, t1.view), this.filmGauge = t1.filmGauge, this.filmOffset = t1.filmOffset, this;
        }
        setFocalLength(t1) {
            const e = .5 * this.getFilmHeight() / t1;
            this.fov = 2 * re * Math.atan(e), this.updateProjectionMatrix();
        }
        getFocalLength() {
            const t1 = Math.tan(.5 * ie * this.fov);
            return .5 * this.getFilmHeight() / t1;
        }
        getEffectiveFOV() {
            return 2 * re * Math.atan(Math.tan(.5 * ie * this.fov) / this.zoom);
        }
        getFilmWidth() {
            return this.filmGauge * Math.min(this.aspect, 1);
        }
        getFilmHeight() {
            return this.filmGauge / Math.max(this.aspect, 1);
        }
        setViewOffset(t1, e, n, i, r, s) {
            this.aspect = t1 / e, null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = t1, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
        }
        clearViewOffset() {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
        }
        updateProjectionMatrix() {
            const t1 = this.near;
            let e = t1 * Math.tan(.5 * ie * this.fov) / this.zoom, n = 2 * e, i = this.aspect * n, r = -0.5 * i;
            const s = this.view;
            if (null !== this.view && this.view.enabled) {
                const t1 = s.fullWidth, a = s.fullHeight;
                r += s.offsetX * i / t1, e -= s.offsetY * n / a, i *= s.width / t1, n *= s.height / a;
            }
            const a = this.filmOffset;
            0 !== a && (r += t1 * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t1, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }
        toJSON(t1) {
            const e = super.toJSON(t1);
            return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
        }
    }
    const ar = -90;
    class or extends jn {
        constructor(t1, e, n){
            super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
            const i = new sr(ar, 1, t1, e);
            i.layers = this.layers, this.add(i);
            const r = new sr(ar, 1, t1, e);
            r.layers = this.layers, this.add(r);
            const s = new sr(ar, 1, t1, e);
            s.layers = this.layers, this.add(s);
            const a = new sr(ar, 1, t1, e);
            a.layers = this.layers, this.add(a);
            const o = new sr(ar, 1, t1, e);
            o.layers = this.layers, this.add(o);
            const l = new sr(ar, 1, t1, e);
            l.layers = this.layers, this.add(l);
        }
        updateCoordinateSystem() {
            const t1 = this.coordinateSystem, e = this.children.concat(), [n, i, r, s, a, o] = e;
            for (const t1 of e)this.remove(t1);
            if (t1 === $t) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), s.up.set(0, 0, 1), s.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), o.up.set(0, 1, 0), o.lookAt(0, 0, -1);
            else {
                if (t1 !== Qt) throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t1);
                n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), s.up.set(0, 0, -1), s.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), o.up.set(0, -1, 0), o.lookAt(0, 0, -1);
            }
            for (const t1 of e)this.add(t1), t1.updateMatrixWorld();
        }
        update(t1, e) {
            null === this.parent && this.updateMatrixWorld();
            const { renderTarget: n, activeMipmapLevel: i } = this;
            this.coordinateSystem !== t1.coordinateSystem && (this.coordinateSystem = t1.coordinateSystem, this.updateCoordinateSystem());
            const [r, s, a, o, l, c] = this.children, h = t1.getRenderTarget(), u = t1.getActiveCubeFace(), d = t1.getActiveMipmapLevel(), p = t1.xr.enabled;
            t1.xr.enabled = !1;
            const m = n.texture.generateMipmaps;
            n.texture.generateMipmaps = !1, t1.setRenderTarget(n, 0, i), t1.render(e, r), t1.setRenderTarget(n, 1, i), t1.render(e, s), t1.setRenderTarget(n, 2, i), t1.render(e, a), t1.setRenderTarget(n, 3, i), t1.render(e, o), t1.setRenderTarget(n, 4, i), t1.render(e, l), n.texture.generateMipmaps = m, t1.setRenderTarget(n, 5, i), t1.render(e, c), t1.setRenderTarget(h, u, d), t1.xr.enabled = p, n.texture.needsPMREMUpdate = !0;
        }
    }
    class lr extends Fe {
        constructor(t1, e, n, i, r, s, a, o, l, c){
            super(t1 = void 0 !== t1 ? t1 : [], e = void 0 !== e ? e : b, n, i, r, s, a, o, l, c), this.isCubeTexture = !0, this.flipY = !1;
        }
        get images() {
            return this.image;
        }
        set images(t1) {
            this.image = t1;
        }
    }
    class cr extends Ge {
        constructor(t1 = 1, e = {}){
            super(t1, t1, e), this.isWebGLCubeRenderTarget = !0;
            const n = {
                width: t1,
                height: t1,
                depth: 1
            }, i = [
                n,
                n,
                n,
                n,
                n,
                n
            ];
            void 0 !== e.encoding && (be("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), e.colorSpace = e.encoding === Bt ? Gt : zt), this.texture = new lr(i, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps, this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : D;
        }
        fromEquirectangularTexture(t1, e) {
            this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
            const n = {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                },
                vertexShader: "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
                fragmentShader: "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t"
            }, i = new $i(5, 5, 5), r = new ir({
                name: "CubemapFromEquirect",
                uniforms: Qi(n.uniforms),
                vertexShader: n.vertexShader,
                fragmentShader: n.fragmentShader,
                side: a,
                blending: 0
            });
            r.uniforms.tEquirect.value = e;
            const s = new Ji(i, r), o = e.minFilter;
            e.minFilter === O && (e.minFilter = D);
            return new or(1, 10, this).update(t1, s), e.minFilter = o, s.geometry.dispose(), s.material.dispose(), this;
        }
        clear(t1, e, n, i) {
            const r = t1.getRenderTarget();
            for(let r = 0; r < 6; r++)t1.setRenderTarget(this, r), t1.clear(e, n, i);
            t1.setRenderTarget(r);
        }
    }
    const hr = new We, ur = new We, dr = new fe;
    class pr {
        constructor(t1 = new We(1, 0, 0), e = 0){
            this.isPlane = !0, this.normal = t1, this.constant = e;
        }
        set(t1, e) {
            return this.normal.copy(t1), this.constant = e, this;
        }
        setComponents(t1, e, n, i) {
            return this.normal.set(t1, e, n), this.constant = i, this;
        }
        setFromNormalAndCoplanarPoint(t1, e) {
            return this.normal.copy(t1), this.constant = -e.dot(this.normal), this;
        }
        setFromCoplanarPoints(t1, e, n) {
            const i = hr.subVectors(n, e).cross(ur.subVectors(t1, e)).normalize();
            return this.setFromNormalAndCoplanarPoint(i, t1), this;
        }
        copy(t1) {
            return this.normal.copy(t1.normal), this.constant = t1.constant, this;
        }
        normalize() {
            const t1 = 1 / this.normal.length();
            return this.normal.multiplyScalar(t1), this.constant *= t1, this;
        }
        negate() {
            return this.constant *= -1, this.normal.negate(), this;
        }
        distanceToPoint(t1) {
            return this.normal.dot(t1) + this.constant;
        }
        distanceToSphere(t1) {
            return this.distanceToPoint(t1.center) - t1.radius;
        }
        projectPoint(t1, e) {
            return e.copy(t1).addScaledVector(this.normal, -this.distanceToPoint(t1));
        }
        intersectLine(t1, e) {
            const n = t1.delta(hr), i = this.normal.dot(n);
            if (0 === i) return 0 === this.distanceToPoint(t1.start) ? e.copy(t1.start) : null;
            const r = -(t1.start.dot(this.normal) + this.constant) / i;
            return r < 0 || r > 1 ? null : e.copy(t1.start).addScaledVector(n, r);
        }
        intersectsLine(t1) {
            const e = this.distanceToPoint(t1.start), n = this.distanceToPoint(t1.end);
            return e < 0 && n > 0 || n < 0 && e > 0;
        }
        intersectsBox(t1) {
            return t1.intersectsPlane(this);
        }
        intersectsSphere(t1) {
            return t1.intersectsPlane(this);
        }
        coplanarPoint(t1) {
            return t1.copy(this.normal).multiplyScalar(-this.constant);
        }
        applyMatrix4(t1, e) {
            const n = e || dr.getNormalMatrix(t1), i = this.coplanarPoint(hr).applyMatrix4(t1), r = this.normal.applyMatrix3(n).normalize();
            return this.constant = -i.dot(r), this;
        }
        translate(t1) {
            return this.constant -= t1.dot(this.normal), this;
        }
        equals(t1) {
            return t1.normal.equals(this.normal) && t1.constant === this.constant;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    const mr = new dn, fr = new We;
    class gr {
        constructor(t1 = new pr, e = new pr, n = new pr, i = new pr, r = new pr, s = new pr){
            this.planes = [
                t1,
                e,
                n,
                i,
                r,
                s
            ];
        }
        set(t1, e, n, i, r, s) {
            const a = this.planes;
            return a[0].copy(t1), a[1].copy(e), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(s), this;
        }
        copy(t1) {
            const e = this.planes;
            for(let n = 0; n < 6; n++)e[n].copy(t1.planes[n]);
            return this;
        }
        setFromProjectionMatrix(t1, e = 2e3) {
            const n = this.planes, i = t1.elements, r = i[0], s = i[1], a = i[2], o = i[3], l = i[4], c = i[5], h = i[6], u = i[7], d = i[8], p = i[9], m = i[10], f = i[11], g = i[12], _ = i[13], v = i[14], x = i[15];
            if (n[0].setComponents(o - r, u - l, f - d, x - g).normalize(), n[1].setComponents(o + r, u + l, f + d, x + g).normalize(), n[2].setComponents(o + s, u + c, f + p, x + _).normalize(), n[3].setComponents(o - s, u - c, f - p, x - _).normalize(), n[4].setComponents(o - a, u - h, f - m, x - v).normalize(), e === $t) n[5].setComponents(o + a, u + h, f + m, x + v).normalize();
            else {
                if (e !== Qt) throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
                n[5].setComponents(a, h, m, v).normalize();
            }
            return this;
        }
        intersectsObject(t1) {
            if (void 0 !== t1.boundingSphere) null === t1.boundingSphere && t1.computeBoundingSphere(), mr.copy(t1.boundingSphere).applyMatrix4(t1.matrixWorld);
            else {
                const e = t1.geometry;
                null === e.boundingSphere && e.computeBoundingSphere(), mr.copy(e.boundingSphere).applyMatrix4(t1.matrixWorld);
            }
            return this.intersectsSphere(mr);
        }
        intersectsSprite(t1) {
            return mr.center.set(0, 0, 0), mr.radius = .7071067811865476, mr.applyMatrix4(t1.matrixWorld), this.intersectsSphere(mr);
        }
        intersectsSphere(t1) {
            const e = this.planes, n = t1.center, i = -t1.radius;
            for(let t1 = 0; t1 < 6; t1++){
                if (e[t1].distanceToPoint(n) < i) return !1;
            }
            return !0;
        }
        intersectsBox(t1) {
            const e = this.planes;
            for(let n = 0; n < 6; n++){
                const i = e[n];
                if (fr.x = i.normal.x > 0 ? t1.max.x : t1.min.x, fr.y = i.normal.y > 0 ? t1.max.y : t1.min.y, fr.z = i.normal.z > 0 ? t1.max.z : t1.min.z, i.distanceToPoint(fr) < 0) return !1;
            }
            return !0;
        }
        containsPoint(t1) {
            const e = this.planes;
            for(let n = 0; n < 6; n++)if (e[n].distanceToPoint(t1) < 0) return !1;
            return !0;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }
    function _r() {
        let t1 = null, e = !1, n = null, i = null;
        function r(e, s) {
            n(e, s), i = t1.requestAnimationFrame(r);
        }
        return {
            start: function() {
                !0 !== e && null !== n && (i = t1.requestAnimationFrame(r), e = !0);
            },
            stop: function() {
                t1.cancelAnimationFrame(i), e = !1;
            },
            setAnimationLoop: function(t1) {
                n = t1;
            },
            setContext: function(e) {
                t1 = e;
            }
        };
    }
    function vr(t1, e) {
        const n = e.isWebGL2, i = new WeakMap;
        return {
            get: function(t1) {
                return t1.isInterleavedBufferAttribute && (t1 = t1.data), i.get(t1);
            },
            remove: function(e) {
                e.isInterleavedBufferAttribute && (e = e.data);
                const n = i.get(e);
                n && (t1.deleteBuffer(n.buffer), i.delete(e));
            },
            update: function(e, r) {
                if (e.isGLBufferAttribute) {
                    const t1 = i.get(e);
                    return void ((!t1 || t1.version < e.version) && i.set(e, {
                        buffer: e.buffer,
                        type: e.type,
                        bytesPerElement: e.elementSize,
                        version: e.version
                    }));
                }
                e.isInterleavedBufferAttribute && (e = e.data);
                const s = i.get(e);
                if (void 0 === s) i.set(e, function(e, i) {
                    const r = e.array, s = e.usage, a = r.byteLength, o = t1.createBuffer();
                    let l;
                    if (t1.bindBuffer(i, o), t1.bufferData(i, r, s), e.onUploadCallback(), r instanceof Float32Array) l = t1.FLOAT;
                    else if (r instanceof Uint16Array) {
                        if (e.isFloat16BufferAttribute) {
                            if (!n) throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
                            l = t1.HALF_FLOAT;
                        } else l = t1.UNSIGNED_SHORT;
                    } else if (r instanceof Int16Array) l = t1.SHORT;
                    else if (r instanceof Uint32Array) l = t1.UNSIGNED_INT;
                    else if (r instanceof Int32Array) l = t1.INT;
                    else if (r instanceof Int8Array) l = t1.BYTE;
                    else if (r instanceof Uint8Array) l = t1.UNSIGNED_BYTE;
                    else {
                        if (!(r instanceof Uint8ClampedArray)) throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r);
                        l = t1.UNSIGNED_BYTE;
                    }
                    return {
                        buffer: o,
                        type: l,
                        bytesPerElement: r.BYTES_PER_ELEMENT,
                        version: e.version,
                        size: a
                    };
                }(e, r));
                else if (s.version < e.version) {
                    if (s.size !== e.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
                    !function(e, i, r) {
                        const s = i.array, a = i._updateRange, o = i.updateRanges;
                        if (t1.bindBuffer(r, e), -1 === a.count && 0 === o.length && t1.bufferSubData(r, 0, s), 0 !== o.length) {
                            for(let e = 0, i = o.length; e < i; e++){
                                const i = o[e];
                                n ? t1.bufferSubData(r, i.start * s.BYTES_PER_ELEMENT, s, i.start, i.count) : t1.bufferSubData(r, i.start * s.BYTES_PER_ELEMENT, s.subarray(i.start, i.start + i.count));
                            }
                            i.clearUpdateRanges();
                        }
                        -1 !== a.count && (n ? t1.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s, a.offset, a.count) : t1.bufferSubData(r, a.offset * s.BYTES_PER_ELEMENT, s.subarray(a.offset, a.offset + a.count)), a.count = -1), i.onUploadCallback();
                    }(s.buffer, e, r), s.version = e.version;
                }
            }
        };
    }
    class xr extends Ii {
        constructor(t1 = 1, e = 1, n = 1, i = 1){
            super(), this.type = "PlaneGeometry", this.parameters = {
                width: t1,
                height: e,
                widthSegments: n,
                heightSegments: i
            };
            const r = t1 / 2, s = e / 2, a = Math.floor(n), o = Math.floor(i), l = a + 1, c = o + 1, h = t1 / a, u = e / o, d = [], p = [], m = [], f = [];
            for(let t1 = 0; t1 < c; t1++){
                const e = t1 * u - s;
                for(let n = 0; n < l; n++){
                    const i = n * h - r;
                    p.push(i, -e, 0), m.push(0, 0, 1), f.push(n / a), f.push(1 - t1 / o);
                }
            }
            for(let t1 = 0; t1 < o; t1++)for(let e = 0; e < a; e++){
                const n = e + l * t1, i = e + l * (t1 + 1), r = e + 1 + l * (t1 + 1), s = e + 1 + l * t1;
                d.push(n, i, s), d.push(i, r, s);
            }
            this.setIndex(d), this.setAttribute("position", new Ti(p, 3)), this.setAttribute("normal", new Ti(m, 3)), this.setAttribute("uv", new Ti(f, 2));
        }
        copy(t1) {
            return super.copy(t1), this.parameters = Object.assign({}, t1.parameters), this;
        }
        static fromJSON(t1) {
            return new xr(t1.width, t1.height, t1.widthSegments, t1.heightSegments);
        }
    }
    const yr = {
        alphahash_fragment: "#ifdef USE_ALPHAHASH\n\tif ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif",
        alphahash_pars_fragment: "#ifdef USE_ALPHAHASH\n\tconst float ALPHA_HASH_SCALE = 0.05;\n\tfloat hash2D( vec2 value ) {\n\t\treturn fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n\t}\n\tfloat hash3D( vec3 value ) {\n\t\treturn hash2D( vec2( hash2D( value.xy ), value.z ) );\n\t}\n\tfloat getAlphaHashThreshold( vec3 position ) {\n\t\tfloat maxDeriv = max(\n\t\t\tlength( dFdx( position.xyz ) ),\n\t\t\tlength( dFdy( position.xyz ) )\n\t\t);\n\t\tfloat pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n\t\tvec2 pixScales = vec2(\n\t\t\texp2( floor( log2( pixScale ) ) ),\n\t\t\texp2( ceil( log2( pixScale ) ) )\n\t\t);\n\t\tvec2 alpha = vec2(\n\t\t\thash3D( floor( pixScales.x * position.xyz ) ),\n\t\t\thash3D( floor( pixScales.y * position.xyz ) )\n\t\t);\n\t\tfloat lerpFactor = fract( log2( pixScale ) );\n\t\tfloat x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n\t\tfloat a = min( lerpFactor, 1.0 - lerpFactor );\n\t\tvec3 cases = vec3(\n\t\t\tx * x / ( 2.0 * a * ( 1.0 - a ) ),\n\t\t\t( x - 0.5 * a ) / ( 1.0 - a ),\n\t\t\t1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n\t\t);\n\t\tfloat threshold = ( x < ( 1.0 - a ) )\n\t\t\t? ( ( x < a ) ? cases.x : cases.y )\n\t\t\t: cases.z;\n\t\treturn clamp( threshold , 1.0e-6, 1.0 );\n\t}\n#endif",
        alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",
        alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
        alphatest_fragment: "#ifdef USE_ALPHATEST\n\tif ( diffuseColor.a < alphaTest ) discard;\n#endif",
        alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",
        aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_CLEARCOAT ) \n\t\tclearcoatSpecularIndirect *= ambientOcclusion;\n\t#endif\n\t#if defined( USE_SHEEN ) \n\t\tsheenSpecularIndirect *= ambientOcclusion;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",
        aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
        batching_pars_vertex: "#ifdef USE_BATCHING\n\tattribute float batchId;\n\tuniform highp sampler2D batchingTexture;\n\tmat4 getBatchingMatrix( const in float i ) {\n\t\tint size = textureSize( batchingTexture, 0 ).x;\n\t\tint j = int( i ) * 4;\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\tvec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n\t\tvec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n\t\tvec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n\t\tvec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n#endif",
        batching_vertex: "#ifdef USE_BATCHING\n\tmat4 batchingMatrix = getBatchingMatrix( batchId );\n#endif",
        begin_vertex: "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n\tvPosition = vec3( position );\n#endif",
        beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
        bsdfs: "float G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n} // validated",
        iridescence_fragment: "#ifdef USE_IRIDESCENCE\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,  0.0556434,\n\t\t-1.5371385,  1.8760108, -0.2040259,\n\t\t-0.4985314,  0.0415560,  1.0572252\n\t);\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\t}\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\t}\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\t}\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\t}\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\t\tvec3 I;\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\t\t\treturn vec3( 1.0 );\n\t\t}\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\t\t}\n\t\treturn max( I, vec3( 0.0 ) );\n\t}\n#endif",
        bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vBumpMapUv );\n\t\tvec2 dSTdy = dFdy( vBumpMapUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n\t\tvec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
        clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
        clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
        clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
        clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
        color_fragment: "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
        color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
        color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
        color_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
        common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n\tvarying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n\tconst vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n\treturn dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",
        cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\thighp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= cubeUV_r1 ) {\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
        defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n\tmat3 bm = mat3( batchingMatrix );\n\ttransformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n\ttransformedNormal = bm * transformedNormal;\n\t#ifdef USE_TANGENT\n\t\ttransformedTangent = bm * transformedTangent;\n\t#endif\n#endif\n#ifdef USE_INSTANCING\n\tmat3 im = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n\ttransformedNormal = im * transformedNormal;\n\t#ifdef USE_TANGENT\n\t\ttransformedTangent = im * transformedTangent;\n\t#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\ttransformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
        displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
        displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",
        emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
        emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
        colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
        colorspace_pars_fragment: "\nconst mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(\n\tvec3( 0.8224621, 0.177538, 0.0 ),\n\tvec3( 0.0331941, 0.9668058, 0.0 ),\n\tvec3( 0.0170827, 0.0723974, 0.9105199 )\n);\nconst mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(\n\tvec3( 1.2249401, - 0.2249404, 0.0 ),\n\tvec3( - 0.0420569, 1.0420571, 0.0 ),\n\tvec3( - 0.0196376, - 0.0786361, 1.0982735 )\n);\nvec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {\n\treturn vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );\n}\nvec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {\n\treturn vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );\n}\nvec4 LinearTransferOETF( in vec4 value ) {\n\treturn value;\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn sRGBTransferOETF( value );\n}",
        envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
        envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
        envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
        envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
        envmap_physical_pars_fragment: "#ifdef USE_ENVMAP\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\t#ifdef USE_ANISOTROPY\n\t\tvec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n\t\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\t\tvec3 bentNormal = cross( bitangent, viewDir );\n\t\t\t\tbentNormal = normalize( cross( bentNormal, bitangent ) );\n\t\t\t\tbentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n\t\t\t\treturn getIBLRadiance( viewDir, bentNormal, roughness );\n\t\t\t#else\n\t\t\t\treturn vec3( 0.0 );\n\t\t\t#endif\n\t\t}\n\t#endif\n#endif",
        envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
        fog_vertex: "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",
        fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",
        fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
        fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
        gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\t#endif\n}",
        lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",
        lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
        lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
        lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n\tvec3 diffuseColor;\n\tfloat specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Lambert\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Lambert",
        lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n\tuniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t#if defined ( LEGACY_LIGHTS )\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t\t}\n\t\treturn 1.0;\n\t#else\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tif ( cutoffDistance > 0.0 ) {\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t}\n\t\treturn distanceFalloff;\n\t#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometryPosition;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometryPosition;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",
        lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
        lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon",
        lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
        lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong",
        lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\tmaterial.ior = ior;\n\t#ifdef USE_SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULAR_COLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n\t\t#endif\n\t\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\t#ifdef USE_IRIDESCENCEMAP\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n\t#endif\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n\t#else\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\t#endif\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\t#ifdef USE_ANISOTROPYMAP\n\t\tmat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n\t\tvec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n\t\tvec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n\t#else\n\t\tvec2 anisotropyV = anisotropyVector;\n\t#endif\n\tmaterial.anisotropy = length( anisotropyV );\n\tif( material.anisotropy == 0.0 ) {\n\t\tanisotropyV = vec2( 1.0, 0.0 );\n\t} else {\n\t\tanisotropyV /= material.anisotropy;\n\t\tmaterial.anisotropy = saturate( material.anisotropy );\n\t}\n\tmaterial.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n\tmaterial.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n\tmaterial.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif",
        lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\t#ifdef IOR\n\t\tfloat ior;\n\t#endif\n\t#ifdef USE_TRANSMISSION\n\t\tfloat transmission;\n\t\tfloat transmissionAlpha;\n\t\tfloat thickness;\n\t\tfloat attenuationDistance;\n\t\tvec3 attenuationColor;\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat anisotropy;\n\t\tfloat alphaT;\n\t\tvec3 anisotropyT;\n\t\tvec3 anisotropyB;\n\t#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n\tfloat V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n\t\tfloat gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n\t\tfloat gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n\t\tfloat v = 0.5 / ( gv + gl );\n\t\treturn saturate(v);\n\t}\n\tfloat D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n\t\tfloat a2 = alphaT * alphaB;\n\t\thighp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n\t\thighp float v2 = dot( v, v );\n\t\tfloat w2 = a2 / v2;\n\t\treturn RECIPROCAL_PI * a2 * pow2 ( w2 );\n\t}\n#endif\n#ifdef USE_CLEARCOAT\n\tvec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n\t\tvec3 f0 = material.clearcoatF0;\n\t\tfloat f90 = material.clearcoatF90;\n\t\tfloat roughness = material.clearcoatRoughness;\n\t\tfloat alpha = pow2( roughness );\n\t\tvec3 halfDir = normalize( lightDir + viewDir );\n\t\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\t\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\t\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\t\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\t\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t\treturn F * ( V * D );\n\t}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n\tvec3 f0 = material.specularColor;\n\tfloat f90 = material.specularF90;\n\tfloat roughness = material.roughness;\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t#ifdef USE_IRIDESCENCE\n\t\tF = mix( F, material.iridescenceFresnel, material.iridescence );\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat dotTL = dot( material.anisotropyT, lightDir );\n\t\tfloat dotTV = dot( material.anisotropyT, viewDir );\n\t\tfloat dotTH = dot( material.anisotropyT, halfDir );\n\t\tfloat dotBL = dot( material.anisotropyB, lightDir );\n\t\tfloat dotBV = dot( material.anisotropyB, viewDir );\n\t\tfloat dotBH = dot( material.anisotropyB, halfDir );\n\t\tfloat V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n\t\tfloat D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n\t#else\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t#endif\n\treturn F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\t#ifdef USE_IRIDESCENCE\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\t#else\n\t\tvec3 Fr = specularColor;\n\t#endif\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometryNormal;\n\t\tvec3 viewDir = geometryViewDir;\n\t\tvec3 position = geometryPosition;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t#ifdef USE_IRIDESCENCE\n\t\tcomputeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\t#else\n\t\tcomputeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\t#endif\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
        lights_fragment_begin: "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n\tgeometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n\tfloat dotNVi = saturate( dot( normal, geometryViewDir ) );\n\tif ( material.iridescenceThickness == 0.0 ) {\n\t\tmaterial.iridescence = 0.0;\n\t} else {\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\t}\n\tif ( material.iridescence > 0.0 ) {\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\t}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometryPosition, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometryPosition, directLight );\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if defined( USE_LIGHT_PROBES )\n\t\tirradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
        lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometryNormal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\t#ifdef USE_ANISOTROPY\n\t\tradiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n\t#else\n\t\tradiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",
        lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif",
        logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
        logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
        logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
        logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
        map_fragment: "#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vMapUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif",
        map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
        map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t#if defined( USE_POINTS_UV )\n\t\tvec2 uv = vUv;\n\t#else\n\t\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
        map_particle_pars_fragment: "#if defined( USE_POINTS_UV )\n\tvarying vec2 vUv;\n#else\n\t#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t\tuniform mat3 uvTransform;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
        metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
        metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
        morphcolor_vertex: "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif",
        morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\t#endif\n#endif",
        morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform ivec2 morphTargetsTextureSize;\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t\t}\n\t#else\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\t\t#else\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\t\t#endif\n\t#endif\n#endif",
        morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t\t#endif\n\t#endif\n#endif",
        normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal *= faceDirection;\n\t#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn = getTangentFrame( - vViewPosition, normal,\n\t\t#if defined( USE_NORMALMAP )\n\t\t\tvNormalMapUv\n\t\t#elif defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tvClearcoatNormalMapUv\n\t\t#else\n\t\t\tvUv\n\t\t#endif\n\t\t);\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn[0] *= faceDirection;\n\t\ttbn[1] *= faceDirection;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn2[0] *= faceDirection;\n\t\ttbn2[1] *= faceDirection;\n\t#endif\n#endif\nvec3 nonPerturbedNormal = normal;",
        normal_fragment_maps: "#ifdef USE_NORMALMAP_OBJECTSPACE\n\tnormal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n\tvec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\tnormal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
        normal_pars_fragment: "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
        normal_pars_vertex: "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
        normal_vertex: "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",
        normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n\tmat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( uv.st );\n\t\tvec2 st1 = dFdy( uv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n\t\treturn mat3( T * scale, B * scale, N );\n\t}\n#endif",
        clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = nonPerturbedNormal;\n#endif",
        clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\tclearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",
        clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif",
        iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n\tuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform sampler2D iridescenceThicknessMap;\n#endif",
        opaque_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
        packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec2 packDepthToRG( in highp float v ) {\n\treturn packDepthToRGBA( v ).yx;\n}\nfloat unpackRGToDepth( const in highp vec2 v ) {\n\treturn unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * depth - far );\n}",
        premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
        project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n\tmvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
        dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
        dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
        roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
        roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
        shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n\tuniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n\t\tbool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
        shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n\tuniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
        shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\tvec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition;\n\t\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n\t\t#endif\n\t\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n#endif",
        shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
        skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
        skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tint size = textureSize( boneTexture, 0 ).x;\n\t\tint j = int( i ) * 4;\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\tvec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n\t\tvec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n\t\tvec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n\t\tvec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n#endif",
        skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
        skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
        specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
        specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
        tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
        tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n\tvec3( 1.6605, - 0.1246, - 0.0182 ),\n\tvec3( - 0.5876, 1.1329, - 0.1006 ),\n\tvec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n\tvec3( 0.6274, 0.0691, 0.0164 ),\n\tvec3( 0.3293, 0.9195, 0.0880 ),\n\tvec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n\tvec3 x2 = x * x;\n\tvec3 x4 = x2 * x2;\n\treturn + 15.5 * x4 * x2\n\t\t- 40.14 * x4 * x\n\t\t+ 31.96 * x4\n\t\t- 6.868 * x2 * x\n\t\t+ 0.4298 * x2\n\t\t+ 0.1191 * x\n\t\t- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n\tconst mat3 AgXInsetMatrix = mat3(\n\t\tvec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n\t\tvec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n\t\tvec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n\t);\n\tconst mat3 AgXOutsetMatrix = mat3(\n\t\tvec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n\t\tvec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n\t\tvec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n\t);\n\tconst float AgxMinEv = - 12.47393;\tconst float AgxMaxEv = 4.026069;\n\tcolor = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n\tcolor *= toneMappingExposure;\n\tcolor = AgXInsetMatrix * color;\n\tcolor = max( color, 1e-10 );\tcolor = log2( color );\n\tcolor = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n\tcolor = clamp( color, 0.0, 1.0 );\n\tcolor = agxDefaultContrastApprox( color );\n\tcolor = AgXOutsetMatrix * color;\n\tcolor = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n\tcolor = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n\treturn color;\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
        transmission_fragment: "#ifdef USE_TRANSMISSION\n\tmaterial.transmission = transmission;\n\tmaterial.transmissionAlpha = 1.0;\n\tmaterial.thickness = thickness;\n\tmaterial.attenuationDistance = attenuationDistance;\n\tmaterial.attenuationColor = attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tmaterial.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tmaterial.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmitted = getIBLVolumeRefraction(\n\t\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n\t\tmaterial.attenuationColor, material.attenuationDistance );\n\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n\ttotalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",
        transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tfloat w0( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n\t}\n\tfloat w1( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n\t}\n\tfloat w2( float a ){\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n\t}\n\tfloat w3( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * a * a );\n\t}\n\tfloat g0( float a ) {\n\t\treturn w0( a ) + w1( a );\n\t}\n\tfloat g1( float a ) {\n\t\treturn w2( a ) + w3( a );\n\t}\n\tfloat h0( float a ) {\n\t\treturn - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n\t}\n\tfloat h1( float a ) {\n\t\treturn 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n\t}\n\tvec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n\t\tuv = uv * texelSize.zw + 0.5;\n\t\tvec2 iuv = floor( uv );\n\t\tvec2 fuv = fract( uv );\n\t\tfloat g0x = g0( fuv.x );\n\t\tfloat g1x = g1( fuv.x );\n\t\tfloat h0x = h0( fuv.x );\n\t\tfloat h1x = h1( fuv.x );\n\t\tfloat h0y = h0( fuv.y );\n\t\tfloat h1y = h1( fuv.y );\n\t\tvec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\treturn g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n\t\t\tg1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n\t}\n\tvec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n\t\tvec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n\t\tvec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n\t\tvec2 fLodSizeInv = 1.0 / fLodSize;\n\t\tvec2 cLodSizeInv = 1.0 / cLodSize;\n\t\tvec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n\t\tvec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n\t\treturn mix( fSample, cSample, fract( lod ) );\n\t}\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\treturn textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n\t}\n\tvec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( isinf( attenuationDistance ) ) {\n\t\t\treturn vec3( 1.0 );\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\tvec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\tvec3 attenuatedColor = transmittance * transmittedLight.rgb;\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\tfloat transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n\t}\n#endif",
        uv_pars_fragment: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif",
        uv_pars_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tuniform mat3 mapTransform;\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform mat3 alphaMapTransform;\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tuniform mat3 lightMapTransform;\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tuniform mat3 aoMapTransform;\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tuniform mat3 bumpMapTransform;\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tuniform mat3 normalMapTransform;\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tuniform mat3 displacementMapTransform;\n\tvarying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tuniform mat3 emissiveMapTransform;\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tuniform mat3 metalnessMapTransform;\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tuniform mat3 roughnessMapTransform;\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tuniform mat3 anisotropyMapTransform;\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tuniform mat3 clearcoatMapTransform;\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform mat3 clearcoatNormalMapTransform;\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform mat3 clearcoatRoughnessMapTransform;\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tuniform mat3 sheenColorMapTransform;\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tuniform mat3 sheenRoughnessMapTransform;\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tuniform mat3 iridescenceMapTransform;\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform mat3 iridescenceThicknessMapTransform;\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tuniform mat3 specularMapTransform;\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tuniform mat3 specularColorMapTransform;\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tuniform mat3 specularIntensityMapTransform;\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif",
        uv_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n\tvMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n\tvAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n\tvLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n\tvAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n\tvBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n\tvNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tvDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n\tvMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n\tvSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tvTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n\tvThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",
        worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_BATCHING\n\t\tworldPosition = batchingMatrix * worldPosition;\n\t#endif\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
        background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
        background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\ttexColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
        backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
        backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n\tuniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n\tuniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );\n\t#else\n\t\tvec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
        cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
        cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = texColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
        depth_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
        depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
        distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
        distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
        equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
        equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
        linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
        linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
        meshbasic_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
        meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_lambert_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
        meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
        meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}",
        meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",
        meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef USE_SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULAR_COLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\tuniform vec2 anisotropyVector;\n\t#ifdef USE_ANISOTROPYMAP\n\t\tuniform sampler2D anisotropyMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n\t#endif\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
        points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\nvoid main() {\n\t#ifdef USE_POINTS_UV\n\t\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\t#endif\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
        points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
        shadow_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
        shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n}",
        sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
        sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n}"
    }, Mr = {
        common: {
            diffuse: {
                value: new ci(16777215)
            },
            opacity: {
                value: 1
            },
            map: {
                value: null
            },
            mapTransform: {
                value: new fe
            },
            alphaMap: {
                value: null
            },
            alphaMapTransform: {
                value: new fe
            },
            alphaTest: {
                value: 0
            }
        },
        specularmap: {
            specularMap: {
                value: null
            },
            specularMapTransform: {
                value: new fe
            }
        },
        envmap: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            reflectivity: {
                value: 1
            },
            ior: {
                value: 1.5
            },
            refractionRatio: {
                value: .98
            }
        },
        aomap: {
            aoMap: {
                value: null
            },
            aoMapIntensity: {
                value: 1
            },
            aoMapTransform: {
                value: new fe
            }
        },
        lightmap: {
            lightMap: {
                value: null
            },
            lightMapIntensity: {
                value: 1
            },
            lightMapTransform: {
                value: new fe
            }
        },
        bumpmap: {
            bumpMap: {
                value: null
            },
            bumpMapTransform: {
                value: new fe
            },
            bumpScale: {
                value: 1
            }
        },
        normalmap: {
            normalMap: {
                value: null
            },
            normalMapTransform: {
                value: new fe
            },
            normalScale: {
                value: new me(1, 1)
            }
        },
        displacementmap: {
            displacementMap: {
                value: null
            },
            displacementMapTransform: {
                value: new fe
            },
            displacementScale: {
                value: 1
            },
            displacementBias: {
                value: 0
            }
        },
        emissivemap: {
            emissiveMap: {
                value: null
            },
            emissiveMapTransform: {
                value: new fe
            }
        },
        metalnessmap: {
            metalnessMap: {
                value: null
            },
            metalnessMapTransform: {
                value: new fe
            }
        },
        roughnessmap: {
            roughnessMap: {
                value: null
            },
            roughnessMapTransform: {
                value: new fe
            }
        },
        gradientmap: {
            gradientMap: {
                value: null
            }
        },
        fog: {
            fogDensity: {
                value: 25e-5
            },
            fogNear: {
                value: 1
            },
            fogFar: {
                value: 2e3
            },
            fogColor: {
                value: new ci(16777215)
            }
        },
        lights: {
            ambientLightColor: {
                value: []
            },
            lightProbe: {
                value: []
            },
            directionalLights: {
                value: [],
                properties: {
                    direction: {},
                    color: {}
                }
            },
            directionalLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            directionalShadowMap: {
                value: []
            },
            directionalShadowMatrix: {
                value: []
            },
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {}
                }
            },
            spotLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotLightMap: {
                value: []
            },
            spotShadowMap: {
                value: []
            },
            spotLightMatrix: {
                value: []
            },
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {}
                }
            },
            pointLightShadows: {
                value: [],
                properties: {
                    shadowBias: {},
                    shadowNormalBias: {},
                    shadowRadius: {},
                    shadowMapSize: {},
                    shadowCameraNear: {},
                    shadowCameraFar: {}
                }
            },
            pointShadowMap: {
                value: []
            },
            pointShadowMatrix: {
                value: []
            },
            hemisphereLights: {
                value: [],
                properties: {
                    direction: {},
                    skyColor: {},
                    groundColor: {}
                }
            },
            rectAreaLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    width: {},
                    height: {}
                }
            },
            ltc_1: {
                value: null
            },
            ltc_2: {
                value: null
            }
        },
        points: {
            diffuse: {
                value: new ci(16777215)
            },
            opacity: {
                value: 1
            },
            size: {
                value: 1
            },
            scale: {
                value: 1
            },
            map: {
                value: null
            },
            alphaMap: {
                value: null
            },
            alphaMapTransform: {
                value: new fe
            },
            alphaTest: {
                value: 0
            },
            uvTransform: {
                value: new fe
            }
        },
        sprite: {
            diffuse: {
                value: new ci(16777215)
            },
            opacity: {
                value: 1
            },
            center: {
                value: new me(.5, .5)
            },
            rotation: {
                value: 0
            },
            map: {
                value: null
            },
            mapTransform: {
                value: new fe
            },
            alphaMap: {
                value: null
            },
            alphaMapTransform: {
                value: new fe
            },
            alphaTest: {
                value: 0
            }
        }
    }, Sr = {
        basic: {
            uniforms: tr([
                Mr.common,
                Mr.specularmap,
                Mr.envmap,
                Mr.aomap,
                Mr.lightmap,
                Mr.fog
            ]),
            vertexShader: yr.meshbasic_vert,
            fragmentShader: yr.meshbasic_frag
        },
        lambert: {
            uniforms: tr([
                Mr.common,
                Mr.specularmap,
                Mr.envmap,
                Mr.aomap,
                Mr.lightmap,
                Mr.emissivemap,
                Mr.bumpmap,
                Mr.normalmap,
                Mr.displacementmap,
                Mr.fog,
                Mr.lights,
                {
                    emissive: {
                        value: new ci(0)
                    }
                }
            ]),
            vertexShader: yr.meshlambert_vert,
            fragmentShader: yr.meshlambert_frag
        },
        phong: {
            uniforms: tr([
                Mr.common,
                Mr.specularmap,
                Mr.envmap,
                Mr.aomap,
                Mr.lightmap,
                Mr.emissivemap,
                Mr.bumpmap,
                Mr.normalmap,
                Mr.displacementmap,
                Mr.fog,
                Mr.lights,
                {
                    emissive: {
                        value: new ci(0)
                    },
                    specular: {
                        value: new ci(1118481)
                    },
                    shininess: {
                        value: 30
                    }
                }
            ]),
            vertexShader: yr.meshphong_vert,
            fragmentShader: yr.meshphong_frag
        },
        standard: {
            uniforms: tr([
                Mr.common,
                Mr.envmap,
                Mr.aomap,
                Mr.lightmap,
                Mr.emissivemap,
                Mr.bumpmap,
                Mr.normalmap,
                Mr.displacementmap,
                Mr.roughnessmap,
                Mr.metalnessmap,
                Mr.fog,
                Mr.lights,
                {
                    emissive: {
                        value: new ci(0)
                    },
                    roughness: {
                        value: 1
                    },
                    metalness: {
                        value: 0
                    },
                    envMapIntensity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: yr.meshphysical_vert,
            fragmentShader: yr.meshphysical_frag
        },
        toon: {
            uniforms: tr([
                Mr.common,
                Mr.aomap,
                Mr.lightmap,
                Mr.emissivemap,
                Mr.bumpmap,
                Mr.normalmap,
                Mr.displacementmap,
                Mr.gradientmap,
                Mr.fog,
                Mr.lights,
                {
                    emissive: {
                        value: new ci(0)
                    }
                }
            ]),
            vertexShader: yr.meshtoon_vert,
            fragmentShader: yr.meshtoon_frag
        },
        matcap: {
            uniforms: tr([
                Mr.common,
                Mr.bumpmap,
                Mr.normalmap,
                Mr.displacementmap,
                Mr.fog,
                {
                    matcap: {
                        value: null
                    }
                }
            ]),
            vertexShader: yr.meshmatcap_vert,
            fragmentShader: yr.meshmatcap_frag
        },
        points: {
            uniforms: tr([
                Mr.points,
                Mr.fog
            ]),
            vertexShader: yr.points_vert,
            fragmentShader: yr.points_frag
        },
        dashed: {
            uniforms: tr([
                Mr.common,
                Mr.fog,
                {
                    scale: {
                        value: 1
                    },
                    dashSize: {
                        value: 1
                    },
                    totalSize: {
                        value: 2
                    }
                }
            ]),
            vertexShader: yr.linedashed_vert,
            fragmentShader: yr.linedashed_frag
        },
        depth: {
            uniforms: tr([
                Mr.common,
                Mr.displacementmap
            ]),
            vertexShader: yr.depth_vert,
            fragmentShader: yr.depth_frag
        },
        normal: {
            uniforms: tr([
                Mr.common,
                Mr.bumpmap,
                Mr.normalmap,
                Mr.displacementmap,
                {
                    opacity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: yr.meshnormal_vert,
            fragmentShader: yr.meshnormal_frag
        },
        sprite: {
            uniforms: tr([
                Mr.sprite,
                Mr.fog
            ]),
            vertexShader: yr.sprite_vert,
            fragmentShader: yr.sprite_frag
        },
        background: {
            uniforms: {
                uvTransform: {
                    value: new fe
                },
                t2D: {
                    value: null
                },
                backgroundIntensity: {
                    value: 1
                }
            },
            vertexShader: yr.background_vert,
            fragmentShader: yr.background_frag
        },
        backgroundCube: {
            uniforms: {
                envMap: {
                    value: null
                },
                flipEnvMap: {
                    value: -1
                },
                backgroundBlurriness: {
                    value: 0
                },
                backgroundIntensity: {
                    value: 1
                }
            },
            vertexShader: yr.backgroundCube_vert,
            fragmentShader: yr.backgroundCube_frag
        },
        cube: {
            uniforms: {
                tCube: {
                    value: null
                },
                tFlip: {
                    value: -1
                },
                opacity: {
                    value: 1
                }
            },
            vertexShader: yr.cube_vert,
            fragmentShader: yr.cube_frag
        },
        equirect: {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: yr.equirect_vert,
            fragmentShader: yr.equirect_frag
        },
        distanceRGBA: {
            uniforms: tr([
                Mr.common,
                Mr.displacementmap,
                {
                    referencePosition: {
                        value: new We
                    },
                    nearDistance: {
                        value: 1
                    },
                    farDistance: {
                        value: 1e3
                    }
                }
            ]),
            vertexShader: yr.distanceRGBA_vert,
            fragmentShader: yr.distanceRGBA_frag
        },
        shadow: {
            uniforms: tr([
                Mr.lights,
                Mr.fog,
                {
                    color: {
                        value: new ci(0)
                    },
                    opacity: {
                        value: 1
                    }
                }
            ]),
            vertexShader: yr.shadow_vert,
            fragmentShader: yr.shadow_frag
        }
    };
    Sr.physical = {
        uniforms: tr([
            Sr.standard.uniforms,
            {
                clearcoat: {
                    value: 0
                },
                clearcoatMap: {
                    value: null
                },
                clearcoatMapTransform: {
                    value: new fe
                },
                clearcoatNormalMap: {
                    value: null
                },
                clearcoatNormalMapTransform: {
                    value: new fe
                },
                clearcoatNormalScale: {
                    value: new me(1, 1)
                },
                clearcoatRoughness: {
                    value: 0
                },
                clearcoatRoughnessMap: {
                    value: null
                },
                clearcoatRoughnessMapTransform: {
                    value: new fe
                },
                iridescence: {
                    value: 0
                },
                iridescenceMap: {
                    value: null
                },
                iridescenceMapTransform: {
                    value: new fe
                },
                iridescenceIOR: {
                    value: 1.3
                },
                iridescenceThicknessMinimum: {
                    value: 100
                },
                iridescenceThicknessMaximum: {
                    value: 400
                },
                iridescenceThicknessMap: {
                    value: null
                },
                iridescenceThicknessMapTransform: {
                    value: new fe
                },
                sheen: {
                    value: 0
                },
                sheenColor: {
                    value: new ci(0)
                },
                sheenColorMap: {
                    value: null
                },
                sheenColorMapTransform: {
                    value: new fe
                },
                sheenRoughness: {
                    value: 1
                },
                sheenRoughnessMap: {
                    value: null
                },
                sheenRoughnessMapTransform: {
                    value: new fe
                },
                transmission: {
                    value: 0
                },
                transmissionMap: {
                    value: null
                },
                transmissionMapTransform: {
                    value: new fe
                },
                transmissionSamplerSize: {
                    value: new me
                },
                transmissionSamplerMap: {
                    value: null
                },
                thickness: {
                    value: 0
                },
                thicknessMap: {
                    value: null
                },
                thicknessMapTransform: {
                    value: new fe
                },
                attenuationDistance: {
                    value: 0
                },
                attenuationColor: {
                    value: new ci(0)
                },
                specularColor: {
                    value: new ci(1, 1, 1)
                },
                specularColorMap: {
                    value: null
                },
                specularColorMapTransform: {
                    value: new fe
                },
                specularIntensity: {
                    value: 1
                },
                specularIntensityMap: {
                    value: null
                },
                specularIntensityMapTransform: {
                    value: new fe
                },
                anisotropyVector: {
                    value: new me
                },
                anisotropyMap: {
                    value: null
                },
                anisotropyMapTransform: {
                    value: new fe
                }
            }
        ]),
        vertexShader: yr.meshphysical_vert,
        fragmentShader: yr.meshphysical_frag
    };
    const br = {
        r: 0,
        b: 0,
        g: 0
    };
    function Tr(t1, e, n, i, r, o, l) {
        const c = new ci(0);
        let h, u, d = !0 === o ? 0 : 1, p = null, m = 0, f = null;
        function g(e, n) {
            e.getRGB(br, er(t1)), i.buffers.color.setClear(br.r, br.g, br.b, n, l);
        }
        return {
            getClearColor: function() {
                return c;
            },
            setClearColor: function(t1, e = 1) {
                c.set(t1), d = e, g(c, d);
            },
            getClearAlpha: function() {
                return d;
            },
            setClearAlpha: function(t1) {
                d = t1, g(c, d);
            },
            render: function(o, _) {
                let v = !1, x = !0 === _.isScene ? _.background : null;
                if (x && x.isTexture) x = (_.backgroundBlurriness > 0 ? n : e).get(x);
                null === x ? g(c, d) : x && x.isColor && (g(x, 1), v = !0);
                const y = t1.xr.getEnvironmentBlendMode();
                "additive" === y ? i.buffers.color.setClear(0, 0, 0, 1, l) : "alpha-blend" === y && i.buffers.color.setClear(0, 0, 0, 0, l), (t1.autoClear || v) && t1.clear(t1.autoClearColor, t1.autoClearDepth, t1.autoClearStencil), x && (x.isCubeTexture || x.mapping === A) ? (void 0 === u && (u = new Ji(new $i(1, 1, 1), new ir({
                    name: "BackgroundCubeMaterial",
                    uniforms: Qi(Sr.backgroundCube.uniforms),
                    vertexShader: Sr.backgroundCube.vertexShader,
                    fragmentShader: Sr.backgroundCube.fragmentShader,
                    side: a,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                })), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(t1, e, n) {
                    this.matrixWorld.copyPosition(n.matrixWorld);
                }, Object.defineProperty(u.material, "envMap", {
                    get: function() {
                        return this.uniforms.envMap.value;
                    }
                }), r.update(u)), u.material.uniforms.envMap.value = x, u.material.uniforms.flipEnvMap.value = x.isCubeTexture && !1 === x.isRenderTargetTexture ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = _.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = _.backgroundIntensity, u.material.toneMapped = Re.getTransfer(x.colorSpace) !== Xt, p === x && m === x.version && f === t1.toneMapping || (u.material.needsUpdate = !0, p = x, m = x.version, f = t1.toneMapping), u.layers.enableAll(), o.unshift(u, u.geometry, u.material, 0, 0, null)) : x && x.isTexture && (void 0 === h && (h = new Ji(new xr(2, 2), new ir({
                    name: "BackgroundMaterial",
                    uniforms: Qi(Sr.background.uniforms),
                    vertexShader: Sr.background.vertexShader,
                    fragmentShader: Sr.background.fragmentShader,
                    side: s,
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                })), h.geometry.deleteAttribute("normal"), Object.defineProperty(h.material, "map", {
                    get: function() {
                        return this.uniforms.t2D.value;
                    }
                }), r.update(h)), h.material.uniforms.t2D.value = x, h.material.uniforms.backgroundIntensity.value = _.backgroundIntensity, h.material.toneMapped = Re.getTransfer(x.colorSpace) !== Xt, !0 === x.matrixAutoUpdate && x.updateMatrix(), h.material.uniforms.uvTransform.value.copy(x.matrix), p === x && m === x.version && f === t1.toneMapping || (h.material.needsUpdate = !0, p = x, m = x.version, f = t1.toneMapping), h.layers.enableAll(), o.unshift(h, h.geometry, h.material, 0, 0, null));
            }
        };
    }
    function Er(t1, e, n, i) {
        const r = t1.getParameter(t1.MAX_VERTEX_ATTRIBS), s = i.isWebGL2 ? null : e.get("OES_vertex_array_object"), a = i.isWebGL2 || null !== s, o = {}, l = p(null);
        let c = l, h = !1;
        function u(e) {
            return i.isWebGL2 ? t1.bindVertexArray(e) : s.bindVertexArrayOES(e);
        }
        function d(e) {
            return i.isWebGL2 ? t1.deleteVertexArray(e) : s.deleteVertexArrayOES(e);
        }
        function p(t1) {
            const e = [], n = [], i = [];
            for(let t1 = 0; t1 < r; t1++)e[t1] = 0, n[t1] = 0, i[t1] = 0;
            return {
                geometry: null,
                program: null,
                wireframe: !1,
                newAttributes: e,
                enabledAttributes: n,
                attributeDivisors: i,
                object: t1,
                attributes: {},
                index: null
            };
        }
        function m() {
            const t1 = c.newAttributes;
            for(let e = 0, n = t1.length; e < n; e++)t1[e] = 0;
        }
        function f(t1) {
            g(t1, 0);
        }
        function g(n, r) {
            const s = c.newAttributes, a = c.enabledAttributes, o = c.attributeDivisors;
            if (s[n] = 1, 0 === a[n] && (t1.enableVertexAttribArray(n), a[n] = 1), o[n] !== r) (i.isWebGL2 ? t1 : e.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r), o[n] = r;
        }
        function _() {
            const e = c.newAttributes, n = c.enabledAttributes;
            for(let i = 0, r = n.length; i < r; i++)n[i] !== e[i] && (t1.disableVertexAttribArray(i), n[i] = 0);
        }
        function v(e, n, i, r, s, a, o) {
            !0 === o ? t1.vertexAttribIPointer(e, n, i, s, a) : t1.vertexAttribPointer(e, n, i, r, s, a);
        }
        function x() {
            y(), h = !0, c !== l && (c = l, u(c.object));
        }
        function y() {
            l.geometry = null, l.program = null, l.wireframe = !1;
        }
        return {
            setup: function(r, l, d, x, y) {
                let M = !1;
                if (a) {
                    const e = function(e, n, r) {
                        const a = !0 === r.wireframe;
                        let l = o[e.id];
                        void 0 === l && (l = {}, o[e.id] = l);
                        let c = l[n.id];
                        void 0 === c && (c = {}, l[n.id] = c);
                        let h = c[a];
                        void 0 === h && (h = p(i.isWebGL2 ? t1.createVertexArray() : s.createVertexArrayOES()), c[a] = h);
                        return h;
                    }(x, d, l);
                    c !== e && (c = e, u(c.object)), M = function(t1, e, n, i) {
                        const r = c.attributes, s = e.attributes;
                        let a = 0;
                        const o = n.getAttributes();
                        for(const e in o)if (o[e].location >= 0) {
                            const n = r[e];
                            let i = s[e];
                            if (void 0 === i && ("instanceMatrix" === e && t1.instanceMatrix && (i = t1.instanceMatrix), "instanceColor" === e && t1.instanceColor && (i = t1.instanceColor)), void 0 === n) return !0;
                            if (n.attribute !== i) return !0;
                            if (i && n.data !== i.data) return !0;
                            a++;
                        }
                        return c.attributesNum !== a || c.index !== i;
                    }(r, x, d, y), M && function(t1, e, n, i) {
                        const r = {}, s = e.attributes;
                        let a = 0;
                        const o = n.getAttributes();
                        for(const e in o)if (o[e].location >= 0) {
                            let n = s[e];
                            void 0 === n && ("instanceMatrix" === e && t1.instanceMatrix && (n = t1.instanceMatrix), "instanceColor" === e && t1.instanceColor && (n = t1.instanceColor));
                            const i = {};
                            i.attribute = n, n && n.data && (i.data = n.data), r[e] = i, a++;
                        }
                        c.attributes = r, c.attributesNum = a, c.index = i;
                    }(r, x, d, y);
                } else {
                    const t1 = !0 === l.wireframe;
                    c.geometry === x.id && c.program === d.id && c.wireframe === t1 || (c.geometry = x.id, c.program = d.id, c.wireframe = t1, M = !0);
                }
                null !== y && n.update(y, t1.ELEMENT_ARRAY_BUFFER), (M || h) && (h = !1, function(r, s, a, o) {
                    if (!1 === i.isWebGL2 && (r.isInstancedMesh || o.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays")) return;
                    m();
                    const l = o.attributes, c = a.getAttributes(), h = s.defaultAttributeValues;
                    for(const e in c){
                        const s = c[e];
                        if (s.location >= 0) {
                            let a = l[e];
                            if (void 0 === a && ("instanceMatrix" === e && r.instanceMatrix && (a = r.instanceMatrix), "instanceColor" === e && r.instanceColor && (a = r.instanceColor)), void 0 !== a) {
                                const e = a.normalized, l = a.itemSize, c = n.get(a);
                                if (void 0 === c) continue;
                                const h = c.buffer, u = c.type, d = c.bytesPerElement, p = !0 === i.isWebGL2 && (u === t1.INT || u === t1.UNSIGNED_INT || a.gpuType === z);
                                if (a.isInterleavedBufferAttribute) {
                                    const n = a.data, i = n.stride, c = a.offset;
                                    if (n.isInstancedInterleavedBuffer) {
                                        for(let t1 = 0; t1 < s.locationSize; t1++)g(s.location + t1, n.meshPerAttribute);
                                        !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = n.meshPerAttribute * n.count);
                                    } else for(let t1 = 0; t1 < s.locationSize; t1++)f(s.location + t1);
                                    t1.bindBuffer(t1.ARRAY_BUFFER, h);
                                    for(let t1 = 0; t1 < s.locationSize; t1++)v(s.location + t1, l / s.locationSize, u, e, i * d, (c + l / s.locationSize * t1) * d, p);
                                } else {
                                    if (a.isInstancedBufferAttribute) {
                                        for(let t1 = 0; t1 < s.locationSize; t1++)g(s.location + t1, a.meshPerAttribute);
                                        !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = a.meshPerAttribute * a.count);
                                    } else for(let t1 = 0; t1 < s.locationSize; t1++)f(s.location + t1);
                                    t1.bindBuffer(t1.ARRAY_BUFFER, h);
                                    for(let t1 = 0; t1 < s.locationSize; t1++)v(s.location + t1, l / s.locationSize, u, e, l * d, l / s.locationSize * t1 * d, p);
                                }
                            } else if (void 0 !== h) {
                                const n = h[e];
                                if (void 0 !== n) switch(n.length){
                                    case 2:
                                        t1.vertexAttrib2fv(s.location, n);
                                        break;
                                    case 3:
                                        t1.vertexAttrib3fv(s.location, n);
                                        break;
                                    case 4:
                                        t1.vertexAttrib4fv(s.location, n);
                                        break;
                                    default:
                                        t1.vertexAttrib1fv(s.location, n);
                                }
                            }
                        }
                    }
                    _();
                }(r, l, d, x), null !== y && t1.bindBuffer(t1.ELEMENT_ARRAY_BUFFER, n.get(y).buffer));
            },
            reset: x,
            resetDefaultState: y,
            dispose: function() {
                x();
                for(const t1 in o){
                    const e = o[t1];
                    for(const t1 in e){
                        const n = e[t1];
                        for(const t1 in n)d(n[t1].object), delete n[t1];
                        delete e[t1];
                    }
                    delete o[t1];
                }
            },
            releaseStatesOfGeometry: function(t1) {
                if (void 0 === o[t1.id]) return;
                const e = o[t1.id];
                for(const t1 in e){
                    const n = e[t1];
                    for(const t1 in n)d(n[t1].object), delete n[t1];
                    delete e[t1];
                }
                delete o[t1.id];
            },
            releaseStatesOfProgram: function(t1) {
                for(const e in o){
                    const n = o[e];
                    if (void 0 === n[t1.id]) continue;
                    const i = n[t1.id];
                    for(const t1 in i)d(i[t1].object), delete i[t1];
                    delete n[t1.id];
                }
            },
            initAttributes: m,
            enableAttribute: f,
            disableUnusedAttributes: _
        };
    }
    function wr(t1, e, n, i) {
        const r = i.isWebGL2;
        let s;
        this.setMode = function(t1) {
            s = t1;
        }, this.render = function(e, i) {
            t1.drawArrays(s, e, i), n.update(i, s, 1);
        }, this.renderInstances = function(i, a, o) {
            if (0 === o) return;
            let l, c;
            if (r) l = t1, c = "drawArraysInstanced";
            else if (l = e.get("ANGLE_instanced_arrays"), c = "drawArraysInstancedANGLE", null === l) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            l[c](s, i, a, o), n.update(a, s, o);
        }, this.renderMultiDraw = function(t1, i, r) {
            if (0 === r) return;
            const a = e.get("WEBGL_multi_draw");
            if (null === a) for(let e = 0; e < r; e++)this.render(t1[e], i[e]);
            else {
                a.multiDrawArraysWEBGL(s, t1, 0, i, 0, r);
                let e = 0;
                for(let t1 = 0; t1 < r; t1++)e += i[t1];
                n.update(e, s, 1);
            }
        };
    }
    function Ar(t1, e, n) {
        let i;
        function r(e) {
            if ("highp" === e) {
                if (t1.getShaderPrecisionFormat(t1.VERTEX_SHADER, t1.HIGH_FLOAT).precision > 0 && t1.getShaderPrecisionFormat(t1.FRAGMENT_SHADER, t1.HIGH_FLOAT).precision > 0) return "highp";
                e = "mediump";
            }
            return "mediump" === e && t1.getShaderPrecisionFormat(t1.VERTEX_SHADER, t1.MEDIUM_FLOAT).precision > 0 && t1.getShaderPrecisionFormat(t1.FRAGMENT_SHADER, t1.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
        }
        const s = "undefined" != typeof WebGL2RenderingContext && "WebGL2RenderingContext" === t1.constructor.name;
        let a = void 0 !== n.precision ? n.precision : "highp";
        const o = r(a);
        o !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", o, "instead."), a = o);
        const l = s || e.has("WEBGL_draw_buffers"), c = !0 === n.logarithmicDepthBuffer, h = t1.getParameter(t1.MAX_TEXTURE_IMAGE_UNITS), u = t1.getParameter(t1.MAX_VERTEX_TEXTURE_IMAGE_UNITS), d = t1.getParameter(t1.MAX_TEXTURE_SIZE), p = t1.getParameter(t1.MAX_CUBE_MAP_TEXTURE_SIZE), m = t1.getParameter(t1.MAX_VERTEX_ATTRIBS), f = t1.getParameter(t1.MAX_VERTEX_UNIFORM_VECTORS), g = t1.getParameter(t1.MAX_VARYING_VECTORS), _ = t1.getParameter(t1.MAX_FRAGMENT_UNIFORM_VECTORS), v = u > 0, x = s || e.has("OES_texture_float");
        return {
            isWebGL2: s,
            drawBuffers: l,
            getMaxAnisotropy: function() {
                if (void 0 !== i) return i;
                if (!0 === e.has("EXT_texture_filter_anisotropic")) {
                    const n = e.get("EXT_texture_filter_anisotropic");
                    i = t1.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                } else i = 0;
                return i;
            },
            getMaxPrecision: r,
            precision: a,
            logarithmicDepthBuffer: c,
            maxTextures: h,
            maxVertexTextures: u,
            maxTextureSize: d,
            maxCubemapSize: p,
            maxAttributes: m,
            maxVertexUniforms: f,
            maxVaryings: g,
            maxFragmentUniforms: _,
            vertexTextures: v,
            floatFragmentTextures: x,
            floatVertexTextures: v && x,
            maxSamples: s ? t1.getParameter(t1.MAX_SAMPLES) : 0
        };
    }
    function Rr(t1) {
        const e = this;
        let n = null, i = 0, r = !1, s = !1;
        const a = new pr, o = new fe, l = {
            value: null,
            needsUpdate: !1
        };
        function c(t1, n, i, r) {
            const s = null !== t1 ? t1.length : 0;
            let c = null;
            if (0 !== s) {
                if (c = l.value, !0 !== r || null === c) {
                    const e = i + 4 * s, r = n.matrixWorldInverse;
                    o.getNormalMatrix(r), (null === c || c.length < e) && (c = new Float32Array(e));
                    for(let e = 0, n = i; e !== s; ++e, n += 4)a.copy(t1[e]).applyMatrix4(r, o), a.normal.toArray(c, n), c[n + 3] = a.constant;
                }
                l.value = c, l.needsUpdate = !0;
            }
            return e.numPlanes = s, e.numIntersection = 0, c;
        }
        this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t1, e) {
            const n = 0 !== t1.length || e || 0 !== i || r;
            return r = e, i = t1.length, n;
        }, this.beginShadows = function() {
            s = !0, c(null);
        }, this.endShadows = function() {
            s = !1;
        }, this.setGlobalState = function(t1, e) {
            n = c(t1, e, 0);
        }, this.setState = function(a, o, h) {
            const u = a.clippingPlanes, d = a.clipIntersection, p = a.clipShadows, m = t1.get(a);
            if (!r || null === u || 0 === u.length || s && !p) s ? c(null) : function() {
                l.value !== n && (l.value = n, l.needsUpdate = i > 0);
                e.numPlanes = i, e.numIntersection = 0;
            }();
            else {
                const t1 = s ? 0 : i, e = 4 * t1;
                let r = m.clippingState || null;
                l.value = r, r = c(u, o, e, h);
                for(let t1 = 0; t1 !== e; ++t1)r[t1] = n[t1];
                m.clippingState = r, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += t1;
            }
        };
    }
    function Cr(t1) {
        let e = new WeakMap;
        function n(t1, e) {
            return e === E ? t1.mapping = b : e === w && (t1.mapping = T), t1;
        }
        function i(t1) {
            const n = t1.target;
            n.removeEventListener("dispose", i);
            const r = e.get(n);
            void 0 !== r && (e.delete(n), r.dispose());
        }
        return {
            get: function(r) {
                if (r && r.isTexture) {
                    const s = r.mapping;
                    if (s === E || s === w) {
                        if (e.has(r)) return n(e.get(r).texture, r.mapping);
                        {
                            const s = r.image;
                            if (s && s.height > 0) {
                                const a = new cr(s.height / 2);
                                return a.fromEquirectangularTexture(t1, r), e.set(r, a), r.addEventListener("dispose", i), n(a.texture, r.mapping);
                            }
                            return null;
                        }
                    }
                }
                return r;
            },
            dispose: function() {
                e = new WeakMap;
            }
        };
    }
    class Lr extends rr {
        constructor(t1 = -1, e = 1, n = 1, i = -1, r = .1, s = 2e3){
            super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t1, this.right = e, this.top = n, this.bottom = i, this.near = r, this.far = s, this.updateProjectionMatrix();
        }
        copy(t1, e) {
            return super.copy(t1, e), this.left = t1.left, this.right = t1.right, this.top = t1.top, this.bottom = t1.bottom, this.near = t1.near, this.far = t1.far, this.zoom = t1.zoom, this.view = null === t1.view ? null : Object.assign({}, t1.view), this;
        }
        setViewOffset(t1, e, n, i, r, s) {
            null === this.view && (this.view = {
                enabled: !0,
                fullWidth: 1,
                fullHeight: 1,
                offsetX: 0,
                offsetY: 0,
                width: 1,
                height: 1
            }), this.view.enabled = !0, this.view.fullWidth = t1, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
        }
        clearViewOffset() {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix();
        }
        updateProjectionMatrix() {
            const t1 = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
            let r = n - t1, s = n + t1, a = i + e, o = i - e;
            if (null !== this.view && this.view.enabled) {
                const t1 = (this.right - this.left) / this.view.fullWidth / this.zoom, e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
                r += t1 * this.view.offsetX, s = r + t1 * this.view.width, a -= e * this.view.offsetY, o = a - e * this.view.height;
            }
            this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }
        toJSON(t1) {
            const e = super.toJSON(t1);
            return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e;
        }
    }
    const Pr = [
        .125,
        .215,
        .35,
        .446,
        .526,
        .582
    ], Ir = 20, Ur = new Lr, Dr = new ci;
    let Nr = null, Or = 0, Fr = 0;
    const Br = (1 + Math.sqrt(5)) / 2, zr = 1 / Br, Gr = [
        new We(1, 1, 1),
        new We(-1, 1, 1),
        new We(1, 1, -1),
        new We(-1, 1, -1),
        new We(0, Br, zr),
        new We(0, Br, -zr),
        new We(zr, 0, Br),
        new We(-zr, 0, Br),
        new We(Br, zr, 0),
        new We(-Br, zr, 0)
    ];
    class Hr {
        constructor(t1){
            this._renderer = t1, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
        }
        fromScene(t1, e = 0, n = .1, i = 100) {
            Nr = this._renderer.getRenderTarget(), Or = this._renderer.getActiveCubeFace(), Fr = this._renderer.getActiveMipmapLevel(), this._setSize(256);
            const r = this._allocateTargets();
            return r.depthBuffer = !0, this._sceneToCubeUV(t1, n, i, r), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r;
        }
        fromEquirectangular(t1, e = null) {
            return this._fromTexture(t1, e);
        }
        fromCubemap(t1, e = null) {
            return this._fromTexture(t1, e);
        }
        compileCubemapShader() {
            null === this._cubemapMaterial && (this._cubemapMaterial = Xr(), this._compileMaterial(this._cubemapMaterial));
        }
        compileEquirectangularShader() {
            null === this._equirectMaterial && (this._equirectMaterial = Wr(), this._compileMaterial(this._equirectMaterial));
        }
        dispose() {
            this._dispose(), null !== this._cubemapMaterial && this._cubemapMaterial.dispose(), null !== this._equirectMaterial && this._equirectMaterial.dispose();
        }
        _setSize(t1) {
            this._lodMax = Math.floor(Math.log2(t1)), this._cubeSize = Math.pow(2, this._lodMax);
        }
        _dispose() {
            null !== this._blurMaterial && this._blurMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
            for(let t1 = 0; t1 < this._lodPlanes.length; t1++)this._lodPlanes[t1].dispose();
        }
        _cleanup(t1) {
            this._renderer.setRenderTarget(Nr, Or, Fr), t1.scissorTest = !1, kr(t1, 0, 0, t1.width, t1.height);
        }
        _fromTexture(t1, e) {
            t1.mapping === b || t1.mapping === T ? this._setSize(0 === t1.image.length ? 16 : t1.image[0].width || t1.image[0].image.width) : this._setSize(t1.image.width / 4), Nr = this._renderer.getRenderTarget(), Or = this._renderer.getActiveCubeFace(), Fr = this._renderer.getActiveMipmapLevel();
            const n = e || this._allocateTargets();
            return this._textureToCubeUV(t1, n), this._applyPMREM(n), this._cleanup(n), n;
        }
        _allocateTargets() {
            const t1 = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = {
                magFilter: D,
                minFilter: D,
                generateMipmaps: !1,
                type: V,
                format: j,
                colorSpace: Ht,
                depthBuffer: !1
            }, i = Vr(t1, e, n);
            if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== t1 || this._pingPongRenderTarget.height !== e) {
                null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = Vr(t1, e, n);
                const { _lodMax: i } = this;
                ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = function(t1) {
                    const e = [], n = [], i = [];
                    let r = t1;
                    const s = t1 - 4 + 1 + Pr.length;
                    for(let a = 0; a < s; a++){
                        const s = Math.pow(2, r);
                        n.push(s);
                        let o = 1 / s;
                        a > t1 - 4 ? o = Pr[a - t1 + 4 - 1] : 0 === a && (o = 0), i.push(o);
                        const l = 1 / (s - 2), c = -l, h = 1 + l, u = [
                            c,
                            c,
                            h,
                            c,
                            h,
                            h,
                            c,
                            c,
                            h,
                            h,
                            c,
                            h
                        ], d = 6, p = 6, m = 3, f = 2, g = 1, _ = new Float32Array(m * p * d), v = new Float32Array(f * p * d), x = new Float32Array(g * p * d);
                        for(let t1 = 0; t1 < d; t1++){
                            const e = t1 % 3 * 2 / 3 - 1, n = t1 > 2 ? 0 : -1, i = [
                                e,
                                n,
                                0,
                                e + 2 / 3,
                                n,
                                0,
                                e + 2 / 3,
                                n + 1,
                                0,
                                e,
                                n,
                                0,
                                e + 2 / 3,
                                n + 1,
                                0,
                                e,
                                n + 1,
                                0
                            ];
                            _.set(i, m * p * t1), v.set(u, f * p * t1);
                            const r = [
                                t1,
                                t1,
                                t1,
                                t1,
                                t1,
                                t1
                            ];
                            x.set(r, g * p * t1);
                        }
                        const y = new Ii;
                        y.setAttribute("position", new Mi(_, m)), y.setAttribute("uv", new Mi(v, f)), y.setAttribute("faceIndex", new Mi(x, g)), e.push(y), r > 4 && r--;
                    }
                    return {
                        lodPlanes: e,
                        sizeLods: n,
                        sigmas: i
                    };
                }(i)), this._blurMaterial = function(t1, e, n) {
                    const i = new Float32Array(Ir), r = new We(0, 1, 0), s = new ir({
                        name: "SphericalGaussianBlur",
                        defines: {
                            n: Ir,
                            CUBEUV_TEXEL_WIDTH: 1 / e,
                            CUBEUV_TEXEL_HEIGHT: 1 / n,
                            CUBEUV_MAX_MIP: `${t1}.0`
                        },
                        uniforms: {
                            envMap: {
                                value: null
                            },
                            samples: {
                                value: 1
                            },
                            weights: {
                                value: i
                            },
                            latitudinal: {
                                value: !1
                            },
                            dTheta: {
                                value: 0
                            },
                            mipInt: {
                                value: 0
                            },
                            poleAxis: {
                                value: r
                            }
                        },
                        vertexShader: jr(),
                        fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",
                        blending: 0,
                        depthTest: !1,
                        depthWrite: !1
                    });
                    return s;
                }(i, t1, e);
            }
            return i;
        }
        _compileMaterial(t1) {
            const e = new Ji(this._lodPlanes[0], t1);
            this._renderer.compile(e, Ur);
        }
        _sceneToCubeUV(t1, e, n, i) {
            const r = new sr(90, 1, e, n), s = [
                1,
                -1,
                1,
                1,
                1,
                1
            ], o = [
                1,
                1,
                1,
                -1,
                -1,
                -1
            ], l = this._renderer, c = l.autoClear, h = l.toneMapping;
            l.getClearColor(Dr), l.toneMapping = p, l.autoClear = !1;
            const u = new pi({
                name: "PMREM.Background",
                side: a,
                depthWrite: !1,
                depthTest: !1
            }), d = new Ji(new $i, u);
            let m = !1;
            const f = t1.background;
            f ? f.isColor && (u.color.copy(f), t1.background = null, m = !0) : (u.color.copy(Dr), m = !0);
            for(let e = 0; e < 6; e++){
                const n = e % 3;
                0 === n ? (r.up.set(0, s[e], 0), r.lookAt(o[e], 0, 0)) : 1 === n ? (r.up.set(0, 0, s[e]), r.lookAt(0, o[e], 0)) : (r.up.set(0, s[e], 0), r.lookAt(0, 0, o[e]));
                const a = this._cubeSize;
                kr(i, n * a, e > 2 ? a : 0, a, a), l.setRenderTarget(i), m && l.render(d, r), l.render(t1, r);
            }
            d.geometry.dispose(), d.material.dispose(), l.toneMapping = h, l.autoClear = c, t1.background = f;
        }
        _textureToCubeUV(t1, e) {
            const n = this._renderer, i = t1.mapping === b || t1.mapping === T;
            i ? (null === this._cubemapMaterial && (this._cubemapMaterial = Xr()), this._cubemapMaterial.uniforms.flipEnvMap.value = !1 === t1.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = Wr());
            const r = i ? this._cubemapMaterial : this._equirectMaterial, s = new Ji(this._lodPlanes[0], r);
            r.uniforms.envMap.value = t1;
            const a = this._cubeSize;
            kr(e, 0, 0, 3 * a, 2 * a), n.setRenderTarget(e), n.render(s, Ur);
        }
        _applyPMREM(t1) {
            const e = this._renderer, n = e.autoClear;
            e.autoClear = !1;
            for(let e = 1; e < this._lodPlanes.length; e++){
                const n = Math.sqrt(this._sigmas[e] * this._sigmas[e] - this._sigmas[e - 1] * this._sigmas[e - 1]), i = Gr[(e - 1) % Gr.length];
                this._blur(t1, e - 1, e, n, i);
            }
            e.autoClear = n;
        }
        _blur(t1, e, n, i, r) {
            const s = this._pingPongRenderTarget;
            this._halfBlur(t1, s, e, n, i, "latitudinal", r), this._halfBlur(s, t1, n, n, i, "longitudinal", r);
        }
        _halfBlur(t1, e, n, i, r, s, a) {
            const o = this._renderer, l = this._blurMaterial;
            "latitudinal" !== s && "longitudinal" !== s && console.error("blur direction must be either latitudinal or longitudinal!");
            const c = new Ji(this._lodPlanes[i], l), h = l.uniforms, u = this._sizeLods[n] - 1, d = isFinite(r) ? Math.PI / (2 * u) : 2 * Math.PI / 39, p = r / d, m = isFinite(r) ? 1 + Math.floor(3 * p) : Ir;
            m > Ir && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);
            const f = [];
            let g = 0;
            for(let t1 = 0; t1 < Ir; ++t1){
                const e = t1 / p, n = Math.exp(-e * e / 2);
                f.push(n), 0 === t1 ? g += n : t1 < m && (g += 2 * n);
            }
            for(let t1 = 0; t1 < f.length; t1++)f[t1] = f[t1] / g;
            h.envMap.value = t1.texture, h.samples.value = m, h.weights.value = f, h.latitudinal.value = "latitudinal" === s, a && (h.poleAxis.value = a);
            const { _lodMax: _ } = this;
            h.dTheta.value = d, h.mipInt.value = _ - n;
            const v = this._sizeLods[i];
            kr(e, 3 * v * (i > _ - 4 ? i - _ + 4 : 0), 4 * (this._cubeSize - v), 3 * v, 2 * v), o.setRenderTarget(e), o.render(c, Ur);
        }
    }
    function Vr(t1, e, n) {
        const i = new Ge(t1, e, n);
        return i.texture.mapping = A, i.texture.name = "PMREM.cubeUv", i.scissorTest = !0, i;
    }
    function kr(t1, e, n, i, r) {
        t1.viewport.set(e, n, i, r), t1.scissor.set(e, n, i, r);
    }
    function Wr() {
        return new ir({
            name: "EquirectangularToCubeUV",
            uniforms: {
                envMap: {
                    value: null
                }
            },
            vertexShader: jr(),
            fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t",
            blending: 0,
            depthTest: !1,
            depthWrite: !1
        });
    }
    function Xr() {
        return new ir({
            name: "CubemapToCubeUV",
            uniforms: {
                envMap: {
                    value: null
                },
                flipEnvMap: {
                    value: -1
                }
            },
            vertexShader: jr(),
            fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",
            blending: 0,
            depthTest: !1,
            depthWrite: !1
        });
    }
    function jr() {
        return "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t";
    }
    function qr(t1) {
        let e = new WeakMap, n = null;
        function i(t1) {
            const n = t1.target;
            n.removeEventListener("dispose", i);
            const r = e.get(n);
            void 0 !== r && (e.delete(n), r.dispose());
        }
        return {
            get: function(r) {
                if (r && r.isTexture) {
                    const s = r.mapping, a = s === E || s === w, o = s === b || s === T;
                    if (a || o) {
                        if (r.isRenderTargetTexture && !0 === r.needsPMREMUpdate) {
                            r.needsPMREMUpdate = !1;
                            let i = e.get(r);
                            return null === n && (n = new Hr(t1)), i = a ? n.fromEquirectangular(r, i) : n.fromCubemap(r, i), e.set(r, i), i.texture;
                        }
                        if (e.has(r)) return e.get(r).texture;
                        {
                            const s = r.image;
                            if (a && s && s.height > 0 || o && s && function(t1) {
                                let e = 0;
                                const n = 6;
                                for(let i = 0; i < n; i++)void 0 !== t1[i] && e++;
                                return e === n;
                            }(s)) {
                                null === n && (n = new Hr(t1));
                                const s = a ? n.fromEquirectangular(r) : n.fromCubemap(r);
                                return e.set(r, s), r.addEventListener("dispose", i), s.texture;
                            }
                            return null;
                        }
                    }
                }
                return r;
            },
            dispose: function() {
                e = new WeakMap, null !== n && (n.dispose(), n = null);
            }
        };
    }
    function Yr(t1) {
        const e = {};
        function n(n) {
            if (void 0 !== e[n]) return e[n];
            let i;
            switch(n){
                case "WEBGL_depth_texture":
                    i = t1.getExtension("WEBGL_depth_texture") || t1.getExtension("MOZ_WEBGL_depth_texture") || t1.getExtension("WEBKIT_WEBGL_depth_texture");
                    break;
                case "EXT_texture_filter_anisotropic":
                    i = t1.getExtension("EXT_texture_filter_anisotropic") || t1.getExtension("MOZ_EXT_texture_filter_anisotropic") || t1.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                    break;
                case "WEBGL_compressed_texture_s3tc":
                    i = t1.getExtension("WEBGL_compressed_texture_s3tc") || t1.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t1.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                    break;
                case "WEBGL_compressed_texture_pvrtc":
                    i = t1.getExtension("WEBGL_compressed_texture_pvrtc") || t1.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                    break;
                default:
                    i = t1.getExtension(n);
            }
            return e[n] = i, i;
        }
        return {
            has: function(t1) {
                return null !== n(t1);
            },
            init: function(t1) {
                t1.isWebGL2 ? (n("EXT_color_buffer_float"), n("WEBGL_clip_cull_distance")) : (n("WEBGL_depth_texture"), n("OES_texture_float"), n("OES_texture_half_float"), n("OES_texture_half_float_linear"), n("OES_standard_derivatives"), n("OES_element_index_uint"), n("OES_vertex_array_object"), n("ANGLE_instanced_arrays")), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture");
            },
            get: function(t1) {
                const e = n(t1);
                return null === e && console.warn("THREE.WebGLRenderer: " + t1 + " extension not supported."), e;
            }
        };
    }
    function Zr(t1, e, n, i) {
        const r = {}, s = new WeakMap;
        function a(t1) {
            const o = t1.target;
            null !== o.index && e.remove(o.index);
            for(const t1 in o.attributes)e.remove(o.attributes[t1]);
            for(const t1 in o.morphAttributes){
                const n = o.morphAttributes[t1];
                for(let t1 = 0, i = n.length; t1 < i; t1++)e.remove(n[t1]);
            }
            o.removeEventListener("dispose", a), delete r[o.id];
            const l = s.get(o);
            l && (e.remove(l), s.delete(o)), i.releaseStatesOfGeometry(o), !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount, n.memory.geometries--;
        }
        function o(t1) {
            const n = [], i = t1.index, r = t1.attributes.position;
            let a = 0;
            if (null !== i) {
                const t1 = i.array;
                a = i.version;
                for(let e = 0, i = t1.length; e < i; e += 3){
                    const i = t1[e + 0], r = t1[e + 1], s = t1[e + 2];
                    n.push(i, r, r, s, s, i);
                }
            } else {
                if (void 0 === r) return;
                {
                    const t1 = r.array;
                    a = r.version;
                    for(let e = 0, i = t1.length / 3 - 1; e < i; e += 3){
                        const t1 = e + 0, i = e + 1, r = e + 2;
                        n.push(t1, i, i, r, r, t1);
                    }
                }
            }
            const o = new (_e(n) ? bi : Si)(n, 1);
            o.version = a;
            const l = s.get(t1);
            l && e.remove(l), s.set(t1, o);
        }
        return {
            get: function(t1, e) {
                return !0 === r[e.id] || (e.addEventListener("dispose", a), r[e.id] = !0, n.memory.geometries++), e;
            },
            update: function(n) {
                const i = n.attributes;
                for(const n in i)e.update(i[n], t1.ARRAY_BUFFER);
                const r = n.morphAttributes;
                for(const n in r){
                    const i = r[n];
                    for(let n = 0, r = i.length; n < r; n++)e.update(i[n], t1.ARRAY_BUFFER);
                }
            },
            getWireframeAttribute: function(t1) {
                const e = s.get(t1);
                if (e) {
                    const n = t1.index;
                    null !== n && e.version < n.version && o(t1);
                } else o(t1);
                return s.get(t1);
            }
        };
    }
    function Jr(t1, e, n, i) {
        const r = i.isWebGL2;
        let s, a, o;
        this.setMode = function(t1) {
            s = t1;
        }, this.setIndex = function(t1) {
            a = t1.type, o = t1.bytesPerElement;
        }, this.render = function(e, i) {
            t1.drawElements(s, i, a, e * o), n.update(i, s, 1);
        }, this.renderInstances = function(i, l, c) {
            if (0 === c) return;
            let h, u;
            if (r) h = t1, u = "drawElementsInstanced";
            else if (h = e.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", null === h) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            h[u](s, l, a, i * o, c), n.update(l, s, c);
        }, this.renderMultiDraw = function(t1, i, r) {
            if (0 === r) return;
            const l = e.get("WEBGL_multi_draw");
            if (null === l) for(let e = 0; e < r; e++)this.render(t1[e] / o, i[e]);
            else {
                l.multiDrawElementsWEBGL(s, i, 0, a, t1, 0, r);
                let e = 0;
                for(let t1 = 0; t1 < r; t1++)e += i[t1];
                n.update(e, s, 1);
            }
        };
    }
    function Kr(t1) {
        const e = {
            frame: 0,
            calls: 0,
            triangles: 0,
            points: 0,
            lines: 0
        };
        return {
            memory: {
                geometries: 0,
                textures: 0
            },
            render: e,
            programs: null,
            autoReset: !0,
            reset: function() {
                e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
            },
            update: function(n, i, r) {
                switch(e.calls++, i){
                    case t1.TRIANGLES:
                        e.triangles += r * (n / 3);
                        break;
                    case t1.LINES:
                        e.lines += r * (n / 2);
                        break;
                    case t1.LINE_STRIP:
                        e.lines += r * (n - 1);
                        break;
                    case t1.LINE_LOOP:
                        e.lines += r * n;
                        break;
                    case t1.POINTS:
                        e.points += r * n;
                        break;
                    default:
                        console.error("THREE.WebGLInfo: Unknown draw mode:", i);
                }
            }
        };
    }
    function $r(t1, e) {
        return t1[0] - e[0];
    }
    function Qr(t1, e) {
        return Math.abs(e[1]) - Math.abs(t1[1]);
    }
    function ts(t1, e, n) {
        const i = {}, r = new Float32Array(8), s = new WeakMap, a = new Be, o = [];
        for(let t1 = 0; t1 < 8; t1++)o[t1] = [
            t1,
            0
        ];
        return {
            update: function(l, c, h) {
                const u = l.morphTargetInfluences;
                if (!0 === e.isWebGL2) {
                    const d = c.morphAttributes.position || c.morphAttributes.normal || c.morphAttributes.color, p = void 0 !== d ? d.length : 0;
                    let m = s.get(c);
                    if (void 0 === m || m.count !== p) {
                        void 0 !== m && m.texture.dispose();
                        const _ = void 0 !== c.morphAttributes.position, v = void 0 !== c.morphAttributes.normal, x = void 0 !== c.morphAttributes.color, y = c.morphAttributes.position || [], M = c.morphAttributes.normal || [], S = c.morphAttributes.color || [];
                        let b = 0;
                        !0 === _ && (b = 1), !0 === v && (b = 2), !0 === x && (b = 3);
                        let T = c.attributes.position.count * b, E = 1;
                        T > e.maxTextureSize && (E = Math.ceil(T / e.maxTextureSize), T = e.maxTextureSize);
                        const w = new Float32Array(T * E * 4 * p), A = new He(w, T, E, p);
                        A.type = H, A.needsUpdate = !0;
                        const R = 4 * b;
                        for(let L = 0; L < p; L++){
                            const P = y[L], I = M[L], U = S[L], D = T * E * 4 * L;
                            for(let N = 0; N < P.count; N++){
                                const O = N * R;
                                !0 === _ && (a.fromBufferAttribute(P, N), w[D + O + 0] = a.x, w[D + O + 1] = a.y, w[D + O + 2] = a.z, w[D + O + 3] = 0), !0 === v && (a.fromBufferAttribute(I, N), w[D + O + 4] = a.x, w[D + O + 5] = a.y, w[D + O + 6] = a.z, w[D + O + 7] = 0), !0 === x && (a.fromBufferAttribute(U, N), w[D + O + 8] = a.x, w[D + O + 9] = a.y, w[D + O + 10] = a.z, w[D + O + 11] = 4 === U.itemSize ? a.w : 1);
                            }
                        }
                        function C() {
                            A.dispose(), s.delete(c), c.removeEventListener("dispose", C);
                        }
                        m = {
                            count: p,
                            texture: A,
                            size: new me(T, E)
                        }, s.set(c, m), c.addEventListener("dispose", C);
                    }
                    let f = 0;
                    for(let F = 0; F < u.length; F++)f += u[F];
                    const g = c.morphTargetsRelative ? 1 : 1 - f;
                    h.getUniforms().setValue(t1, "morphTargetBaseInfluence", g), h.getUniforms().setValue(t1, "morphTargetInfluences", u), h.getUniforms().setValue(t1, "morphTargetsTexture", m.texture, n), h.getUniforms().setValue(t1, "morphTargetsTextureSize", m.size);
                } else {
                    const B = void 0 === u ? 0 : u.length;
                    let z = i[c.id];
                    if (void 0 === z || z.length !== B) {
                        z = [];
                        for(let X = 0; X < B; X++)z[X] = [
                            X,
                            0
                        ];
                        i[c.id] = z;
                    }
                    for(let j = 0; j < B; j++){
                        const q = z[j];
                        q[0] = j, q[1] = u[j];
                    }
                    z.sort(Qr);
                    for(let Y = 0; Y < 8; Y++)Y < B && z[Y][1] ? (o[Y][0] = z[Y][0], o[Y][1] = z[Y][1]) : (o[Y][0] = Number.MAX_SAFE_INTEGER, o[Y][1] = 0);
                    o.sort($r);
                    const G = c.morphAttributes.position, V = c.morphAttributes.normal;
                    let k = 0;
                    for(let Z = 0; Z < 8; Z++){
                        const J = o[Z], K = J[0], $ = J[1];
                        K !== Number.MAX_SAFE_INTEGER && $ ? (G && c.getAttribute("morphTarget" + Z) !== G[K] && c.setAttribute("morphTarget" + Z, G[K]), V && c.getAttribute("morphNormal" + Z) !== V[K] && c.setAttribute("morphNormal" + Z, V[K]), r[Z] = $, k += $) : (G && !0 === c.hasAttribute("morphTarget" + Z) && c.deleteAttribute("morphTarget" + Z), V && !0 === c.hasAttribute("morphNormal" + Z) && c.deleteAttribute("morphNormal" + Z), r[Z] = 0);
                    }
                    const W = c.morphTargetsRelative ? 1 : 1 - k;
                    h.getUniforms().setValue(t1, "morphTargetBaseInfluence", W), h.getUniforms().setValue(t1, "morphTargetInfluences", r);
                }
            }
        };
    }
    function es(t1, e, n, i) {
        let r = new WeakMap;
        function s(t1) {
            const e = t1.target;
            e.removeEventListener("dispose", s), n.remove(e.instanceMatrix), null !== e.instanceColor && n.remove(e.instanceColor);
        }
        return {
            update: function(a) {
                const o = i.render.frame, l = a.geometry, c = e.get(a, l);
                if (r.get(c) !== o && (e.update(c), r.set(c, o)), a.isInstancedMesh && (!1 === a.hasEventListener("dispose", s) && a.addEventListener("dispose", s), r.get(a) !== o && (n.update(a.instanceMatrix, t1.ARRAY_BUFFER), null !== a.instanceColor && n.update(a.instanceColor, t1.ARRAY_BUFFER), r.set(a, o))), a.isSkinnedMesh) {
                    const t1 = a.skeleton;
                    r.get(t1) !== o && (t1.update(), r.set(t1, o));
                }
                return c;
            },
            dispose: function() {
                r = new WeakMap;
            }
        };
    }
    class ns extends Fe {
        constructor(t1, e, n, i, r, s, a, o, l, c){
            if ((c = void 0 !== c ? c : q) !== q && c !== Y) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
            void 0 === n && c === q && (n = G), void 0 === n && c === Y && (n = X), super(null, i, r, s, a, o, c, n, l), this.isDepthTexture = !0, this.image = {
                width: t1,
                height: e
            }, this.magFilter = void 0 !== a ? a : P, this.minFilter = void 0 !== o ? o : P, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
        }
        copy(t1) {
            return super.copy(t1), this.compareFunction = t1.compareFunction, this;
        }
        toJSON(t1) {
            const e = super.toJSON(t1);
            return null !== this.compareFunction && (e.compareFunction = this.compareFunction), e;
        }
    }
    const is = new Fe, rs = new ns(1, 1);
    rs.compareFunction = 515;
    const ss = new He, as = new Ve, os = new lr, ls = [], cs = [], hs = new Float32Array(16), us = new Float32Array(9), ds = new Float32Array(4);
    function ps(t1, e, n) {
        const i = t1[0];
        if (i <= 0 || i > 0) return t1;
        const r = e * n;
        let s = ls[r];
        if (void 0 === s && (s = new Float32Array(r), ls[r] = s), 0 !== e) {
            i.toArray(s, 0);
            for(let i = 1, r = 0; i !== e; ++i)r += n, t1[i].toArray(s, r);
        }
        return s;
    }
    function ms(t1, e) {
        if (t1.length !== e.length) return !1;
        for(let n = 0, i = t1.length; n < i; n++)if (t1[n] !== e[n]) return !1;
        return !0;
    }
    function fs(t1, e) {
        for(let n = 0, i = e.length; n < i; n++)t1[n] = e[n];
    }
    function gs(t1, e) {
        let n = cs[e];
        void 0 === n && (n = new Int32Array(e), cs[e] = n);
        for(let i = 0; i !== e; ++i)n[i] = t1.allocateTextureUnit();
        return n;
    }
    function _s(t1, e) {
        const n = this.cache;
        n[0] !== e && (t1.uniform1f(this.addr, e), n[0] = e);
    }
    function vs(t1, e) {
        const n = this.cache;
        if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t1.uniform2f(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
        else {
            if (ms(n, e)) return;
            t1.uniform2fv(this.addr, e), fs(n, e);
        }
    }
    function xs(t1, e) {
        const n = this.cache;
        if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t1.uniform3f(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
        else if (void 0 !== e.r) n[0] === e.r && n[1] === e.g && n[2] === e.b || (t1.uniform3f(this.addr, e.r, e.g, e.b), n[0] = e.r, n[1] = e.g, n[2] = e.b);
        else {
            if (ms(n, e)) return;
            t1.uniform3fv(this.addr, e), fs(n, e);
        }
    }
    function ys(t1, e) {
        const n = this.cache;
        if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t1.uniform4f(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
        else {
            if (ms(n, e)) return;
            t1.uniform4fv(this.addr, e), fs(n, e);
        }
    }
    function Ms(t1, e) {
        const n = this.cache, i = e.elements;
        if (void 0 === i) {
            if (ms(n, e)) return;
            t1.uniformMatrix2fv(this.addr, !1, e), fs(n, e);
        } else {
            if (ms(n, i)) return;
            ds.set(i), t1.uniformMatrix2fv(this.addr, !1, ds), fs(n, i);
        }
    }
    function Ss(t1, e) {
        const n = this.cache, i = e.elements;
        if (void 0 === i) {
            if (ms(n, e)) return;
            t1.uniformMatrix3fv(this.addr, !1, e), fs(n, e);
        } else {
            if (ms(n, i)) return;
            us.set(i), t1.uniformMatrix3fv(this.addr, !1, us), fs(n, i);
        }
    }
    function bs(t1, e) {
        const n = this.cache, i = e.elements;
        if (void 0 === i) {
            if (ms(n, e)) return;
            t1.uniformMatrix4fv(this.addr, !1, e), fs(n, e);
        } else {
            if (ms(n, i)) return;
            hs.set(i), t1.uniformMatrix4fv(this.addr, !1, hs), fs(n, i);
        }
    }
    function Ts(t1, e) {
        const n = this.cache;
        n[0] !== e && (t1.uniform1i(this.addr, e), n[0] = e);
    }
    function Es(t1, e) {
        const n = this.cache;
        if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t1.uniform2i(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
        else {
            if (ms(n, e)) return;
            t1.uniform2iv(this.addr, e), fs(n, e);
        }
    }
    function ws(t1, e) {
        const n = this.cache;
        if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t1.uniform3i(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
        else {
            if (ms(n, e)) return;
            t1.uniform3iv(this.addr, e), fs(n, e);
        }
    }
    function As(t1, e) {
        const n = this.cache;
        if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t1.uniform4i(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
        else {
            if (ms(n, e)) return;
            t1.uniform4iv(this.addr, e), fs(n, e);
        }
    }
    function Rs(t1, e) {
        const n = this.cache;
        n[0] !== e && (t1.uniform1ui(this.addr, e), n[0] = e);
    }
    function Cs(t1, e) {
        const n = this.cache;
        if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t1.uniform2ui(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
        else {
            if (ms(n, e)) return;
            t1.uniform2uiv(this.addr, e), fs(n, e);
        }
    }
    function Ls(t1, e) {
        const n = this.cache;
        if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t1.uniform3ui(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
        else {
            if (ms(n, e)) return;
            t1.uniform3uiv(this.addr, e), fs(n, e);
        }
    }
    function Ps(t1, e) {
        const n = this.cache;
        if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t1.uniform4ui(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
        else {
            if (ms(n, e)) return;
            t1.uniform4uiv(this.addr, e), fs(n, e);
        }
    }
    function Is(t1, e, n) {
        const i = this.cache, r = n.allocateTextureUnit();
        i[0] !== r && (t1.uniform1i(this.addr, r), i[0] = r);
        const s = this.type === t1.SAMPLER_2D_SHADOW ? rs : is;
        n.setTexture2D(e || s, r);
    }
    function Us(t1, e, n) {
        const i = this.cache, r = n.allocateTextureUnit();
        i[0] !== r && (t1.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(e || as, r);
    }
    function Ds(t1, e, n) {
        const i = this.cache, r = n.allocateTextureUnit();
        i[0] !== r && (t1.uniform1i(this.addr, r), i[0] = r), n.setTextureCube(e || os, r);
    }
    function Ns(t1, e, n) {
        const i = this.cache, r = n.allocateTextureUnit();
        i[0] !== r && (t1.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(e || ss, r);
    }
    function Os(t1, e) {
        t1.uniform1fv(this.addr, e);
    }
    function Fs(t1, e) {
        const n = ps(e, this.size, 2);
        t1.uniform2fv(this.addr, n);
    }
    function Bs(t1, e) {
        const n = ps(e, this.size, 3);
        t1.uniform3fv(this.addr, n);
    }
    function zs(t1, e) {
        const n = ps(e, this.size, 4);
        t1.uniform4fv(this.addr, n);
    }
    function Gs(t1, e) {
        const n = ps(e, this.size, 4);
        t1.uniformMatrix2fv(this.addr, !1, n);
    }
    function Hs(t1, e) {
        const n = ps(e, this.size, 9);
        t1.uniformMatrix3fv(this.addr, !1, n);
    }
    function Vs(t1, e) {
        const n = ps(e, this.size, 16);
        t1.uniformMatrix4fv(this.addr, !1, n);
    }
    function ks(t1, e) {
        t1.uniform1iv(this.addr, e);
    }
    function Ws(t1, e) {
        t1.uniform2iv(this.addr, e);
    }
    function Xs(t1, e) {
        t1.uniform3iv(this.addr, e);
    }
    function js(t1, e) {
        t1.uniform4iv(this.addr, e);
    }
    function qs(t1, e) {
        t1.uniform1uiv(this.addr, e);
    }
    function Ys(t1, e) {
        t1.uniform2uiv(this.addr, e);
    }
    function Zs(t1, e) {
        t1.uniform3uiv(this.addr, e);
    }
    function Js(t1, e) {
        t1.uniform4uiv(this.addr, e);
    }
    function Ks(t1, e, n) {
        const i = this.cache, r = e.length, s = gs(n, r);
        ms(i, s) || (t1.uniform1iv(this.addr, s), fs(i, s));
        for(let t1 = 0; t1 !== r; ++t1)n.setTexture2D(e[t1] || is, s[t1]);
    }
    function $s(t1, e, n) {
        const i = this.cache, r = e.length, s = gs(n, r);
        ms(i, s) || (t1.uniform1iv(this.addr, s), fs(i, s));
        for(let t1 = 0; t1 !== r; ++t1)n.setTexture3D(e[t1] || as, s[t1]);
    }
    function Qs(t1, e, n) {
        const i = this.cache, r = e.length, s = gs(n, r);
        ms(i, s) || (t1.uniform1iv(this.addr, s), fs(i, s));
        for(let t1 = 0; t1 !== r; ++t1)n.setTextureCube(e[t1] || os, s[t1]);
    }
    function ta(t1, e, n) {
        const i = this.cache, r = e.length, s = gs(n, r);
        ms(i, s) || (t1.uniform1iv(this.addr, s), fs(i, s));
        for(let t1 = 0; t1 !== r; ++t1)n.setTexture2DArray(e[t1] || ss, s[t1]);
    }
    class ea {
        constructor(t1, e, n){
            this.id = t1, this.addr = n, this.cache = [], this.type = e.type, this.setValue = function(t1) {
                switch(t1){
                    case 5126:
                        return _s;
                    case 35664:
                        return vs;
                    case 35665:
                        return xs;
                    case 35666:
                        return ys;
                    case 35674:
                        return Ms;
                    case 35675:
                        return Ss;
                    case 35676:
                        return bs;
                    case 5124:
                    case 35670:
                        return Ts;
                    case 35667:
                    case 35671:
                        return Es;
                    case 35668:
                    case 35672:
                        return ws;
                    case 35669:
                    case 35673:
                        return As;
                    case 5125:
                        return Rs;
                    case 36294:
                        return Cs;
                    case 36295:
                        return Ls;
                    case 36296:
                        return Ps;
                    case 35678:
                    case 36198:
                    case 36298:
                    case 36306:
                    case 35682:
                        return Is;
                    case 35679:
                    case 36299:
                    case 36307:
                        return Us;
                    case 35680:
                    case 36300:
                    case 36308:
                    case 36293:
                        return Ds;
                    case 36289:
                    case 36303:
                    case 36311:
                    case 36292:
                        return Ns;
                }
            }(e.type);
        }
    }
    class na {
        constructor(t1, e, n){
            this.id = t1, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = function(t1) {
                switch(t1){
                    case 5126:
                        return Os;
                    case 35664:
                        return Fs;
                    case 35665:
                        return Bs;
                    case 35666:
                        return zs;
                    case 35674:
                        return Gs;
                    case 35675:
                        return Hs;
                    case 35676:
                        return Vs;
                    case 5124:
                    case 35670:
                        return ks;
                    case 35667:
                    case 35671:
                        return Ws;
                    case 35668:
                    case 35672:
                        return Xs;
                    case 35669:
                    case 35673:
                        return js;
                    case 5125:
                        return qs;
                    case 36294:
                        return Ys;
                    case 36295:
                        return Zs;
                    case 36296:
                        return Js;
                    case 35678:
                    case 36198:
                    case 36298:
                    case 36306:
                    case 35682:
                        return Ks;
                    case 35679:
                    case 36299:
                    case 36307:
                        return $s;
                    case 35680:
                    case 36300:
                    case 36308:
                    case 36293:
                        return Qs;
                    case 36289:
                    case 36303:
                    case 36311:
                    case 36292:
                        return ta;
                }
            }(e.type);
        }
    }
    class ia {
        constructor(t1){
            this.id = t1, this.seq = [], this.map = {};
        }
        setValue(t1, e, n) {
            const i = this.seq;
            for(let r = 0, s = i.length; r !== s; ++r){
                const s = i[r];
                s.setValue(t1, e[s.id], n);
            }
        }
    }
    const ra = /(\w+)(\])?(\[|\.)?/g;
    function sa(t1, e) {
        t1.seq.push(e), t1.map[e.id] = e;
    }
    function aa(t1, e, n) {
        const i = t1.name, r = i.length;
        for(ra.lastIndex = 0;;){
            const s = ra.exec(i), a = ra.lastIndex;
            let o = s[1];
            const l = "]" === s[2], c = s[3];
            if (l && (o |= 0), void 0 === c || "[" === c && a + 2 === r) {
                sa(n, void 0 === c ? new ea(o, t1, e) : new na(o, t1, e));
                break;
            }
            {
                let t1 = n.map[o];
                void 0 === t1 && (t1 = new ia(o), sa(n, t1)), n = t1;
            }
        }
    }
    class oa {
        constructor(t1, e){
            this.seq = [], this.map = {};
            const n = t1.getProgramParameter(e, t1.ACTIVE_UNIFORMS);
            for(let i = 0; i < n; ++i){
                const n = t1.getActiveUniform(e, i);
                aa(n, t1.getUniformLocation(e, n.name), this);
            }
        }
        setValue(t1, e, n, i) {
            const r = this.map[e];
            void 0 !== r && r.setValue(t1, n, i);
        }
        setOptional(t1, e, n) {
            const i = e[n];
            void 0 !== i && this.setValue(t1, n, i);
        }
        static upload(t1, e, n, i) {
            for(let r = 0, s = e.length; r !== s; ++r){
                const s = e[r], a = n[s.id];
                !1 !== a.needsUpdate && s.setValue(t1, a.value, i);
            }
        }
        static seqWithValue(t1, e) {
            const n = [];
            for(let i = 0, r = t1.length; i !== r; ++i){
                const r = t1[i];
                r.id in e && n.push(r);
            }
            return n;
        }
    }
    function la(t1, e, n) {
        const i = t1.createShader(e);
        return t1.shaderSource(i, n), t1.compileShader(i), i;
    }
    const ca = 37297;
    let ha = 0;
    function ua(t1, e, n) {
        const i = t1.getShaderParameter(e, t1.COMPILE_STATUS), r = t1.getShaderInfoLog(e).trim();
        if (i && "" === r) return "";
        const s = /ERROR: 0:(\d+)/.exec(r);
        if (s) {
            const i = parseInt(s[1]);
            return n.toUpperCase() + "\n\n" + r + "\n\n" + function(t1, e) {
                const n = t1.split("\n"), i = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, n.length);
                for(let t1 = r; t1 < s; t1++){
                    const r = t1 + 1;
                    i.push(`${r === e ? ">" : " "} ${r}: ${n[t1]}`);
                }
                return i.join("\n");
            }(t1.getShaderSource(e), i);
        }
        return r;
    }
    function da(t1, e) {
        const n = function(t1) {
            const e = Re.getPrimaries(Re.workingColorSpace), n = Re.getPrimaries(t1);
            let i;
            switch(e === n ? i = "" : e === qt && n === jt ? i = "LinearDisplayP3ToLinearSRGB" : e === jt && n === qt && (i = "LinearSRGBToLinearDisplayP3"), t1){
                case Ht:
                case kt:
                    return [
                        i,
                        "LinearTransferOETF"
                    ];
                case Gt:
                case Vt:
                    return [
                        i,
                        "sRGBTransferOETF"
                    ];
                default:
                    return console.warn("THREE.WebGLProgram: Unsupported color space:", t1), [
                        i,
                        "LinearTransferOETF"
                    ];
            }
        }(e);
        return `vec4 ${t1}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`;
    }
    function pa(t1, e) {
        let n;
        switch(e){
            case m:
                n = "Linear";
                break;
            case f:
                n = "Reinhard";
                break;
            case g:
                n = "OptimizedCineon";
                break;
            case _:
                n = "ACESFilmic";
                break;
            case x:
                n = "AgX";
                break;
            case v:
                n = "Custom";
                break;
            default:
                console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), n = "Linear";
        }
        return "vec3 " + t1 + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
    }
    function ma(t1) {
        return "" !== t1;
    }
    function fa(t1, e) {
        const n = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
        return t1.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
    }
    function ga(t1, e) {
        return t1.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
    }
    const _a = /^[ \t]*#include +<([\w\d./]+)>/gm;
    function va(t1) {
        return t1.replace(_a, ya);
    }
    const xa = new Map([
        [
            "encodings_fragment",
            "colorspace_fragment"
        ],
        [
            "encodings_pars_fragment",
            "colorspace_pars_fragment"
        ],
        [
            "output_fragment",
            "opaque_fragment"
        ]
    ]);
    function ya(t1, e) {
        let n = yr[e];
        if (void 0 === n) {
            const t1 = xa.get(e);
            if (void 0 === t1) throw new Error("Can not resolve #include <" + e + ">");
            n = yr[t1], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, t1);
        }
        return va(n);
    }
    const Ma = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
    function Sa(t1) {
        return t1.replace(Ma, ba);
    }
    function ba(t1, e, n, i) {
        let r = "";
        for(let t1 = parseInt(e); t1 < parseInt(n); t1++)r += i.replace(/\[\s*i\s*\]/g, "[ " + t1 + " ]").replace(/UNROLLED_LOOP_INDEX/g, t1);
        return r;
    }
    function Ta(t1) {
        let e = "precision " + t1.precision + " float;\nprecision " + t1.precision + " int;";
        return "highp" === t1.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t1.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t1.precision && (e += "\n#define LOW_PRECISION"), e;
    }
    function Ea(t1, e, s, a) {
        const o = t1.getContext(), l = s.defines;
        let c = s.vertexShader, m = s.fragmentShader;
        const f = function(t1) {
            let e = "SHADOWMAP_TYPE_BASIC";
            return t1.shadowMapType === n ? e = "SHADOWMAP_TYPE_PCF" : t1.shadowMapType === i ? e = "SHADOWMAP_TYPE_PCF_SOFT" : t1.shadowMapType === r && (e = "SHADOWMAP_TYPE_VSM"), e;
        }(s), g = function(t1) {
            let e = "ENVMAP_TYPE_CUBE";
            if (t1.envMap) switch(t1.envMapMode){
                case b:
                case T:
                    e = "ENVMAP_TYPE_CUBE";
                    break;
                case A:
                    e = "ENVMAP_TYPE_CUBE_UV";
            }
            return e;
        }(s), _ = function(t1) {
            let e = "ENVMAP_MODE_REFLECTION";
            t1.envMap && t1.envMapMode === T && (e = "ENVMAP_MODE_REFRACTION");
            return e;
        }(s), v = function(t1) {
            let e = "ENVMAP_BLENDING_NONE";
            if (t1.envMap) switch(t1.combine){
                case h:
                    e = "ENVMAP_BLENDING_MULTIPLY";
                    break;
                case u:
                    e = "ENVMAP_BLENDING_MIX";
                    break;
                case d:
                    e = "ENVMAP_BLENDING_ADD";
            }
            return e;
        }(s), x = function(t1) {
            const e = t1.envMapCubeUVHeight;
            if (null === e) return null;
            const n = Math.log2(e) - 2, i = 1 / e;
            return {
                texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
                texelHeight: i,
                maxMip: n
            };
        }(s), y = s.isWebGL2 ? "" : function(t1) {
            return [
                t1.extensionDerivatives || t1.envMapCubeUVHeight || t1.bumpMap || t1.normalMapTangentSpace || t1.clearcoatNormalMap || t1.flatShading || "physical" === t1.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "",
                (t1.extensionFragDepth || t1.logarithmicDepthBuffer) && t1.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
                t1.extensionDrawBuffers && t1.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
                (t1.extensionShaderTextureLOD || t1.envMap || t1.transmission) && t1.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
            ].filter(ma).join("\n");
        }(s), M = function(t1) {
            return [
                t1.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : ""
            ].filter(ma).join("\n");
        }(s), S = function(t1) {
            const e = [];
            for(const n in t1){
                const i = t1[n];
                !1 !== i && e.push("#define " + n + " " + i);
            }
            return e.join("\n");
        }(l), E = o.createProgram();
        let w, R, C = s.glslVersion ? "#version " + s.glslVersion + "\n" : "";
        s.isRawShaderMaterial ? (w = [
            "#define SHADER_TYPE " + s.shaderType,
            "#define SHADER_NAME " + s.shaderName,
            S
        ].filter(ma).join("\n"), w.length > 0 && (w += "\n"), R = [
            y,
            "#define SHADER_TYPE " + s.shaderType,
            "#define SHADER_NAME " + s.shaderName,
            S
        ].filter(ma).join("\n"), R.length > 0 && (R += "\n")) : (w = [
            Ta(s),
            "#define SHADER_TYPE " + s.shaderType,
            "#define SHADER_NAME " + s.shaderName,
            S,
            s.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
            s.batching ? "#define USE_BATCHING" : "",
            s.instancing ? "#define USE_INSTANCING" : "",
            s.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
            s.useFog && s.fog ? "#define USE_FOG" : "",
            s.useFog && s.fogExp2 ? "#define FOG_EXP2" : "",
            s.map ? "#define USE_MAP" : "",
            s.envMap ? "#define USE_ENVMAP" : "",
            s.envMap ? "#define " + _ : "",
            s.lightMap ? "#define USE_LIGHTMAP" : "",
            s.aoMap ? "#define USE_AOMAP" : "",
            s.bumpMap ? "#define USE_BUMPMAP" : "",
            s.normalMap ? "#define USE_NORMALMAP" : "",
            s.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
            s.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
            s.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
            s.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
            s.anisotropy ? "#define USE_ANISOTROPY" : "",
            s.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
            s.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
            s.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
            s.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
            s.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
            s.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
            s.specularMap ? "#define USE_SPECULARMAP" : "",
            s.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
            s.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
            s.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
            s.metalnessMap ? "#define USE_METALNESSMAP" : "",
            s.alphaMap ? "#define USE_ALPHAMAP" : "",
            s.alphaHash ? "#define USE_ALPHAHASH" : "",
            s.transmission ? "#define USE_TRANSMISSION" : "",
            s.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
            s.thicknessMap ? "#define USE_THICKNESSMAP" : "",
            s.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
            s.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
            s.mapUv ? "#define MAP_UV " + s.mapUv : "",
            s.alphaMapUv ? "#define ALPHAMAP_UV " + s.alphaMapUv : "",
            s.lightMapUv ? "#define LIGHTMAP_UV " + s.lightMapUv : "",
            s.aoMapUv ? "#define AOMAP_UV " + s.aoMapUv : "",
            s.emissiveMapUv ? "#define EMISSIVEMAP_UV " + s.emissiveMapUv : "",
            s.bumpMapUv ? "#define BUMPMAP_UV " + s.bumpMapUv : "",
            s.normalMapUv ? "#define NORMALMAP_UV " + s.normalMapUv : "",
            s.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + s.displacementMapUv : "",
            s.metalnessMapUv ? "#define METALNESSMAP_UV " + s.metalnessMapUv : "",
            s.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + s.roughnessMapUv : "",
            s.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + s.anisotropyMapUv : "",
            s.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + s.clearcoatMapUv : "",
            s.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + s.clearcoatNormalMapUv : "",
            s.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + s.clearcoatRoughnessMapUv : "",
            s.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + s.iridescenceMapUv : "",
            s.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + s.iridescenceThicknessMapUv : "",
            s.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + s.sheenColorMapUv : "",
            s.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + s.sheenRoughnessMapUv : "",
            s.specularMapUv ? "#define SPECULARMAP_UV " + s.specularMapUv : "",
            s.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + s.specularColorMapUv : "",
            s.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + s.specularIntensityMapUv : "",
            s.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + s.transmissionMapUv : "",
            s.thicknessMapUv ? "#define THICKNESSMAP_UV " + s.thicknessMapUv : "",
            s.vertexTangents && !1 === s.flatShading ? "#define USE_TANGENT" : "",
            s.vertexColors ? "#define USE_COLOR" : "",
            s.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
            s.vertexUv1s ? "#define USE_UV1" : "",
            s.vertexUv2s ? "#define USE_UV2" : "",
            s.vertexUv3s ? "#define USE_UV3" : "",
            s.pointsUvs ? "#define USE_POINTS_UV" : "",
            s.flatShading ? "#define FLAT_SHADED" : "",
            s.skinning ? "#define USE_SKINNING" : "",
            s.morphTargets ? "#define USE_MORPHTARGETS" : "",
            s.morphNormals && !1 === s.flatShading ? "#define USE_MORPHNORMALS" : "",
            s.morphColors && s.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
            s.morphTargetsCount > 0 && s.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
            s.morphTargetsCount > 0 && s.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + s.morphTextureStride : "",
            s.morphTargetsCount > 0 && s.isWebGL2 ? "#define MORPHTARGETS_COUNT " + s.morphTargetsCount : "",
            s.doubleSided ? "#define DOUBLE_SIDED" : "",
            s.flipSided ? "#define FLIP_SIDED" : "",
            s.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
            s.shadowMapEnabled ? "#define " + f : "",
            s.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
            s.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
            s.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
            s.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
            s.logarithmicDepthBuffer && s.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
            "uniform mat4 modelMatrix;",
            "uniform mat4 modelViewMatrix;",
            "uniform mat4 projectionMatrix;",
            "uniform mat4 viewMatrix;",
            "uniform mat3 normalMatrix;",
            "uniform vec3 cameraPosition;",
            "uniform bool isOrthographic;",
            "#ifdef USE_INSTANCING",
            "\tattribute mat4 instanceMatrix;",
            "#endif",
            "#ifdef USE_INSTANCING_COLOR",
            "\tattribute vec3 instanceColor;",
            "#endif",
            "attribute vec3 position;",
            "attribute vec3 normal;",
            "attribute vec2 uv;",
            "#ifdef USE_UV1",
            "\tattribute vec2 uv1;",
            "#endif",
            "#ifdef USE_UV2",
            "\tattribute vec2 uv2;",
            "#endif",
            "#ifdef USE_UV3",
            "\tattribute vec2 uv3;",
            "#endif",
            "#ifdef USE_TANGENT",
            "\tattribute vec4 tangent;",
            "#endif",
            "#if defined( USE_COLOR_ALPHA )",
            "\tattribute vec4 color;",
            "#elif defined( USE_COLOR )",
            "\tattribute vec3 color;",
            "#endif",
            "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
            "\tattribute vec3 morphTarget0;",
            "\tattribute vec3 morphTarget1;",
            "\tattribute vec3 morphTarget2;",
            "\tattribute vec3 morphTarget3;",
            "\t#ifdef USE_MORPHNORMALS",
            "\t\tattribute vec3 morphNormal0;",
            "\t\tattribute vec3 morphNormal1;",
            "\t\tattribute vec3 morphNormal2;",
            "\t\tattribute vec3 morphNormal3;",
            "\t#else",
            "\t\tattribute vec3 morphTarget4;",
            "\t\tattribute vec3 morphTarget5;",
            "\t\tattribute vec3 morphTarget6;",
            "\t\tattribute vec3 morphTarget7;",
            "\t#endif",
            "#endif",
            "#ifdef USE_SKINNING",
            "\tattribute vec4 skinIndex;",
            "\tattribute vec4 skinWeight;",
            "#endif",
            "\n"
        ].filter(ma).join("\n"), R = [
            y,
            Ta(s),
            "#define SHADER_TYPE " + s.shaderType,
            "#define SHADER_NAME " + s.shaderName,
            S,
            s.useFog && s.fog ? "#define USE_FOG" : "",
            s.useFog && s.fogExp2 ? "#define FOG_EXP2" : "",
            s.map ? "#define USE_MAP" : "",
            s.matcap ? "#define USE_MATCAP" : "",
            s.envMap ? "#define USE_ENVMAP" : "",
            s.envMap ? "#define " + g : "",
            s.envMap ? "#define " + _ : "",
            s.envMap ? "#define " + v : "",
            x ? "#define CUBEUV_TEXEL_WIDTH " + x.texelWidth : "",
            x ? "#define CUBEUV_TEXEL_HEIGHT " + x.texelHeight : "",
            x ? "#define CUBEUV_MAX_MIP " + x.maxMip + ".0" : "",
            s.lightMap ? "#define USE_LIGHTMAP" : "",
            s.aoMap ? "#define USE_AOMAP" : "",
            s.bumpMap ? "#define USE_BUMPMAP" : "",
            s.normalMap ? "#define USE_NORMALMAP" : "",
            s.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
            s.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
            s.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
            s.anisotropy ? "#define USE_ANISOTROPY" : "",
            s.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
            s.clearcoat ? "#define USE_CLEARCOAT" : "",
            s.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
            s.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
            s.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
            s.iridescence ? "#define USE_IRIDESCENCE" : "",
            s.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
            s.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
            s.specularMap ? "#define USE_SPECULARMAP" : "",
            s.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
            s.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
            s.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
            s.metalnessMap ? "#define USE_METALNESSMAP" : "",
            s.alphaMap ? "#define USE_ALPHAMAP" : "",
            s.alphaTest ? "#define USE_ALPHATEST" : "",
            s.alphaHash ? "#define USE_ALPHAHASH" : "",
            s.sheen ? "#define USE_SHEEN" : "",
            s.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
            s.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
            s.transmission ? "#define USE_TRANSMISSION" : "",
            s.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
            s.thicknessMap ? "#define USE_THICKNESSMAP" : "",
            s.vertexTangents && !1 === s.flatShading ? "#define USE_TANGENT" : "",
            s.vertexColors || s.instancingColor ? "#define USE_COLOR" : "",
            s.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
            s.vertexUv1s ? "#define USE_UV1" : "",
            s.vertexUv2s ? "#define USE_UV2" : "",
            s.vertexUv3s ? "#define USE_UV3" : "",
            s.pointsUvs ? "#define USE_POINTS_UV" : "",
            s.gradientMap ? "#define USE_GRADIENTMAP" : "",
            s.flatShading ? "#define FLAT_SHADED" : "",
            s.doubleSided ? "#define DOUBLE_SIDED" : "",
            s.flipSided ? "#define FLIP_SIDED" : "",
            s.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
            s.shadowMapEnabled ? "#define " + f : "",
            s.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
            s.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
            s.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
            s.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
            s.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
            s.logarithmicDepthBuffer && s.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
            "uniform mat4 viewMatrix;",
            "uniform vec3 cameraPosition;",
            "uniform bool isOrthographic;",
            s.toneMapping !== p ? "#define TONE_MAPPING" : "",
            s.toneMapping !== p ? yr.tonemapping_pars_fragment : "",
            s.toneMapping !== p ? pa("toneMapping", s.toneMapping) : "",
            s.dithering ? "#define DITHERING" : "",
            s.opaque ? "#define OPAQUE" : "",
            yr.colorspace_pars_fragment,
            da("linearToOutputTexel", s.outputColorSpace),
            s.useDepthPacking ? "#define DEPTH_PACKING " + s.depthPacking : "",
            "\n"
        ].filter(ma).join("\n")), c = va(c), c = fa(c, s), c = ga(c, s), m = va(m), m = fa(m, s), m = ga(m, s), c = Sa(c), m = Sa(m), s.isWebGL2 && !0 !== s.isRawShaderMaterial && (C = "#version 300 es\n", w = [
            M,
            "precision mediump sampler2DArray;",
            "#define attribute in",
            "#define varying out",
            "#define texture2D texture"
        ].join("\n") + "\n" + w, R = [
            "precision mediump sampler2DArray;",
            "#define varying in",
            s.glslVersion === Jt ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
            s.glslVersion === Jt ? "" : "#define gl_FragColor pc_fragColor",
            "#define gl_FragDepthEXT gl_FragDepth",
            "#define texture2D texture",
            "#define textureCube texture",
            "#define texture2DProj textureProj",
            "#define texture2DLodEXT textureLod",
            "#define texture2DProjLodEXT textureProjLod",
            "#define textureCubeLodEXT textureLod",
            "#define texture2DGradEXT textureGrad",
            "#define texture2DProjGradEXT textureProjGrad",
            "#define textureCubeGradEXT textureGrad"
        ].join("\n") + "\n" + R);
        const L = C + w + c, P = C + R + m, I = la(o, o.VERTEX_SHADER, L), U = la(o, o.FRAGMENT_SHADER, P);
        function D(e) {
            if (t1.debug.checkShaderErrors) {
                const n = o.getProgramInfoLog(E).trim(), i = o.getShaderInfoLog(I).trim(), r = o.getShaderInfoLog(U).trim();
                let s = !0, a = !0;
                if (!1 === o.getProgramParameter(E, o.LINK_STATUS)) {
                    if (s = !1, "function" == typeof t1.debug.onShaderError) t1.debug.onShaderError(o, E, I, U);
                    else {
                        const t1 = ua(o, I, "vertex"), e = ua(o, U, "fragment");
                        console.error("THREE.WebGLProgram: Shader Error " + o.getError() + " - VALIDATE_STATUS " + o.getProgramParameter(E, o.VALIDATE_STATUS) + "\n\nProgram Info Log: " + n + "\n" + t1 + "\n" + e);
                    }
                } else "" !== n ? console.warn("THREE.WebGLProgram: Program Info Log:", n) : "" !== i && "" !== r || (a = !1);
                a && (e.diagnostics = {
                    runnable: s,
                    programLog: n,
                    vertexShader: {
                        log: i,
                        prefix: w
                    },
                    fragmentShader: {
                        log: r,
                        prefix: R
                    }
                });
            }
            o.deleteShader(I), o.deleteShader(U), N = new oa(o, E), O = function(t1, e) {
                const n = {}, i = t1.getProgramParameter(e, t1.ACTIVE_ATTRIBUTES);
                for(let r = 0; r < i; r++){
                    const i = t1.getActiveAttrib(e, r), s = i.name;
                    let a = 1;
                    i.type === t1.FLOAT_MAT2 && (a = 2), i.type === t1.FLOAT_MAT3 && (a = 3), i.type === t1.FLOAT_MAT4 && (a = 4), n[s] = {
                        type: i.type,
                        location: t1.getAttribLocation(e, s),
                        locationSize: a
                    };
                }
                return n;
            }(o, E);
        }
        let N, O;
        o.attachShader(E, I), o.attachShader(E, U), void 0 !== s.index0AttributeName ? o.bindAttribLocation(E, 0, s.index0AttributeName) : !0 === s.morphTargets && o.bindAttribLocation(E, 0, "position"), o.linkProgram(E), this.getUniforms = function() {
            return void 0 === N && D(this), N;
        }, this.getAttributes = function() {
            return void 0 === O && D(this), O;
        };
        let F = !1 === s.rendererExtensionParallelShaderCompile;
        return this.isReady = function() {
            return !1 === F && (F = o.getProgramParameter(E, ca)), F;
        }, this.destroy = function() {
            a.releaseStatesOfProgram(this), o.deleteProgram(E), this.program = void 0;
        }, this.type = s.shaderType, this.name = s.shaderName, this.id = ha++, this.cacheKey = e, this.usedTimes = 1, this.program = E, this.vertexShader = I, this.fragmentShader = U, this;
    }
    let wa = 0;
    class Aa {
        constructor(){
            this.shaderCache = new Map, this.materialCache = new Map;
        }
        update(t1) {
            const e = t1.vertexShader, n = t1.fragmentShader, i = this._getShaderStage(e), r = this._getShaderStage(n), s = this._getShaderCacheForMaterial(t1);
            return !1 === s.has(i) && (s.add(i), i.usedTimes++), !1 === s.has(r) && (s.add(r), r.usedTimes++), this;
        }
        remove(t1) {
            const e = this.materialCache.get(t1);
            for (const t1 of e)t1.usedTimes--, 0 === t1.usedTimes && this.shaderCache.delete(t1.code);
            return this.materialCache.delete(t1), this;
        }
        getVertexShaderID(t1) {
            return this._getShaderStage(t1.vertexShader).id;
        }
        getFragmentShaderID(t1) {
            return this._getShaderStage(t1.fragmentShader).id;
        }
        dispose() {
            this.shaderCache.clear(), this.materialCache.clear();
        }
        _getShaderCacheForMaterial(t1) {
            const e = this.materialCache;
            let n = e.get(t1);
            return void 0 === n && (n = new Set, e.set(t1, n)), n;
        }
        _getShaderStage(t1) {
            const e = this.shaderCache;
            let n = e.get(t1);
            return void 0 === n && (n = new Ra(t1), e.set(t1, n)), n;
        }
    }
    class Ra {
        constructor(t1){
            this.id = wa++, this.code = t1, this.usedTimes = 0;
        }
    }
    function Ca(t1, e, n, i, r, s, o) {
        const l = new In, c = new Aa, h = [], u = r.isWebGL2, d = r.logarithmicDepthBuffer, m = r.vertexTextures;
        let f = r.precision;
        const g = {
            MeshDepthMaterial: "depth",
            MeshDistanceMaterial: "distanceRGBA",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshToonMaterial: "toon",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            MeshMatcapMaterial: "matcap",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points",
            ShadowMaterial: "shadow",
            SpriteMaterial: "sprite"
        };
        function _(t1) {
            return 0 === t1 ? "uv" : `uv${t1}`;
        }
        return {
            getParameters: function(s, l, h, v, x) {
                const y = v.fog, M = x.geometry, S = s.isMeshStandardMaterial ? v.environment : null, b = (s.isMeshStandardMaterial ? n : e).get(s.envMap || S), T = b && b.mapping === A ? b.image.height : null, E = g[s.type];
                null !== s.precision && (f = r.getMaxPrecision(s.precision), f !== s.precision && console.warn("THREE.WebGLProgram.getParameters:", s.precision, "not supported, using", f, "instead."));
                const w = M.morphAttributes.position || M.morphAttributes.normal || M.morphAttributes.color, R = void 0 !== w ? w.length : 0;
                let C, L, P, I, U = 0;
                if (void 0 !== M.morphAttributes.position && (U = 1), void 0 !== M.morphAttributes.normal && (U = 2), void 0 !== M.morphAttributes.color && (U = 3), E) {
                    const t1 = Sr[E];
                    C = t1.vertexShader, L = t1.fragmentShader;
                } else C = s.vertexShader, L = s.fragmentShader, c.update(s), P = c.getVertexShaderID(s), I = c.getFragmentShaderID(s);
                const D = t1.getRenderTarget(), N = !0 === x.isInstancedMesh, O = !0 === x.isBatchedMesh, F = !!s.map, B = !!s.matcap, z = !!b, G = !!s.aoMap, H = !!s.lightMap, V = !!s.bumpMap, k = !!s.normalMap, W = !!s.displacementMap, X = !!s.emissiveMap, j = !!s.metalnessMap, q = !!s.roughnessMap, Y = s.anisotropy > 0, Z = s.clearcoat > 0, J = s.iridescence > 0, K = s.sheen > 0, $ = s.transmission > 0, Q = Y && !!s.anisotropyMap, tt = Z && !!s.clearcoatMap, et = Z && !!s.clearcoatNormalMap, nt = Z && !!s.clearcoatRoughnessMap, it = J && !!s.iridescenceMap, rt = J && !!s.iridescenceThicknessMap, st = K && !!s.sheenColorMap, at = K && !!s.sheenRoughnessMap, ot = !!s.specularMap, lt = !!s.specularColorMap, ct = !!s.specularIntensityMap, ht = $ && !!s.transmissionMap, ut = $ && !!s.thicknessMap, dt = !!s.gradientMap, pt = !!s.alphaMap, mt = s.alphaTest > 0, ft = !!s.alphaHash, gt = !!s.extensions, _t = !!M.attributes.uv1, vt = !!M.attributes.uv2, xt = !!M.attributes.uv3;
                let yt = p;
                return s.toneMapped && (null !== D && !0 !== D.isXRRenderTarget || (yt = t1.toneMapping)), {
                    isWebGL2: u,
                    shaderID: E,
                    shaderType: s.type,
                    shaderName: s.name,
                    vertexShader: C,
                    fragmentShader: L,
                    defines: s.defines,
                    customVertexShaderID: P,
                    customFragmentShaderID: I,
                    isRawShaderMaterial: !0 === s.isRawShaderMaterial,
                    glslVersion: s.glslVersion,
                    precision: f,
                    batching: O,
                    instancing: N,
                    instancingColor: N && null !== x.instanceColor,
                    supportsVertexTextures: m,
                    outputColorSpace: null === D ? t1.outputColorSpace : !0 === D.isXRRenderTarget ? D.texture.colorSpace : Ht,
                    map: F,
                    matcap: B,
                    envMap: z,
                    envMapMode: z && b.mapping,
                    envMapCubeUVHeight: T,
                    aoMap: G,
                    lightMap: H,
                    bumpMap: V,
                    normalMap: k,
                    displacementMap: m && W,
                    emissiveMap: X,
                    normalMapObjectSpace: k && 1 === s.normalMapType,
                    normalMapTangentSpace: k && 0 === s.normalMapType,
                    metalnessMap: j,
                    roughnessMap: q,
                    anisotropy: Y,
                    anisotropyMap: Q,
                    clearcoat: Z,
                    clearcoatMap: tt,
                    clearcoatNormalMap: et,
                    clearcoatRoughnessMap: nt,
                    iridescence: J,
                    iridescenceMap: it,
                    iridescenceThicknessMap: rt,
                    sheen: K,
                    sheenColorMap: st,
                    sheenRoughnessMap: at,
                    specularMap: ot,
                    specularColorMap: lt,
                    specularIntensityMap: ct,
                    transmission: $,
                    transmissionMap: ht,
                    thicknessMap: ut,
                    gradientMap: dt,
                    opaque: !1 === s.transparent && 1 === s.blending,
                    alphaMap: pt,
                    alphaTest: mt,
                    alphaHash: ft,
                    combine: s.combine,
                    mapUv: F && _(s.map.channel),
                    aoMapUv: G && _(s.aoMap.channel),
                    lightMapUv: H && _(s.lightMap.channel),
                    bumpMapUv: V && _(s.bumpMap.channel),
                    normalMapUv: k && _(s.normalMap.channel),
                    displacementMapUv: W && _(s.displacementMap.channel),
                    emissiveMapUv: X && _(s.emissiveMap.channel),
                    metalnessMapUv: j && _(s.metalnessMap.channel),
                    roughnessMapUv: q && _(s.roughnessMap.channel),
                    anisotropyMapUv: Q && _(s.anisotropyMap.channel),
                    clearcoatMapUv: tt && _(s.clearcoatMap.channel),
                    clearcoatNormalMapUv: et && _(s.clearcoatNormalMap.channel),
                    clearcoatRoughnessMapUv: nt && _(s.clearcoatRoughnessMap.channel),
                    iridescenceMapUv: it && _(s.iridescenceMap.channel),
                    iridescenceThicknessMapUv: rt && _(s.iridescenceThicknessMap.channel),
                    sheenColorMapUv: st && _(s.sheenColorMap.channel),
                    sheenRoughnessMapUv: at && _(s.sheenRoughnessMap.channel),
                    specularMapUv: ot && _(s.specularMap.channel),
                    specularColorMapUv: lt && _(s.specularColorMap.channel),
                    specularIntensityMapUv: ct && _(s.specularIntensityMap.channel),
                    transmissionMapUv: ht && _(s.transmissionMap.channel),
                    thicknessMapUv: ut && _(s.thicknessMap.channel),
                    alphaMapUv: pt && _(s.alphaMap.channel),
                    vertexTangents: !!M.attributes.tangent && (k || Y),
                    vertexColors: s.vertexColors,
                    vertexAlphas: !0 === s.vertexColors && !!M.attributes.color && 4 === M.attributes.color.itemSize,
                    vertexUv1s: _t,
                    vertexUv2s: vt,
                    vertexUv3s: xt,
                    pointsUvs: !0 === x.isPoints && !!M.attributes.uv && (F || pt),
                    fog: !!y,
                    useFog: !0 === s.fog,
                    fogExp2: y && y.isFogExp2,
                    flatShading: !0 === s.flatShading,
                    sizeAttenuation: !0 === s.sizeAttenuation,
                    logarithmicDepthBuffer: d,
                    skinning: !0 === x.isSkinnedMesh,
                    morphTargets: void 0 !== M.morphAttributes.position,
                    morphNormals: void 0 !== M.morphAttributes.normal,
                    morphColors: void 0 !== M.morphAttributes.color,
                    morphTargetsCount: R,
                    morphTextureStride: U,
                    numDirLights: l.directional.length,
                    numPointLights: l.point.length,
                    numSpotLights: l.spot.length,
                    numSpotLightMaps: l.spotLightMap.length,
                    numRectAreaLights: l.rectArea.length,
                    numHemiLights: l.hemi.length,
                    numDirLightShadows: l.directionalShadowMap.length,
                    numPointLightShadows: l.pointShadowMap.length,
                    numSpotLightShadows: l.spotShadowMap.length,
                    numSpotLightShadowsWithMaps: l.numSpotLightShadowsWithMaps,
                    numLightProbes: l.numLightProbes,
                    numClippingPlanes: o.numPlanes,
                    numClipIntersection: o.numIntersection,
                    dithering: s.dithering,
                    shadowMapEnabled: t1.shadowMap.enabled && h.length > 0,
                    shadowMapType: t1.shadowMap.type,
                    toneMapping: yt,
                    useLegacyLights: t1._useLegacyLights,
                    decodeVideoTexture: F && !0 === s.map.isVideoTexture && Re.getTransfer(s.map.colorSpace) === Xt,
                    premultipliedAlpha: s.premultipliedAlpha,
                    doubleSided: 2 === s.side,
                    flipSided: s.side === a,
                    useDepthPacking: s.depthPacking >= 0,
                    depthPacking: s.depthPacking || 0,
                    index0AttributeName: s.index0AttributeName,
                    extensionDerivatives: gt && !0 === s.extensions.derivatives,
                    extensionFragDepth: gt && !0 === s.extensions.fragDepth,
                    extensionDrawBuffers: gt && !0 === s.extensions.drawBuffers,
                    extensionShaderTextureLOD: gt && !0 === s.extensions.shaderTextureLOD,
                    extensionClipCullDistance: gt && s.extensions.clipCullDistance && i.has("WEBGL_clip_cull_distance"),
                    rendererExtensionFragDepth: u || i.has("EXT_frag_depth"),
                    rendererExtensionDrawBuffers: u || i.has("WEBGL_draw_buffers"),
                    rendererExtensionShaderTextureLod: u || i.has("EXT_shader_texture_lod"),
                    rendererExtensionParallelShaderCompile: i.has("KHR_parallel_shader_compile"),
                    customProgramCacheKey: s.customProgramCacheKey()
                };
            },
            getProgramCacheKey: function(e) {
                const n = [];
                if (e.shaderID ? n.push(e.shaderID) : (n.push(e.customVertexShaderID), n.push(e.customFragmentShaderID)), void 0 !== e.defines) for(const t1 in e.defines)n.push(t1), n.push(e.defines[t1]);
                return !1 === e.isRawShaderMaterial && (!function(t1, e) {
                    t1.push(e.precision), t1.push(e.outputColorSpace), t1.push(e.envMapMode), t1.push(e.envMapCubeUVHeight), t1.push(e.mapUv), t1.push(e.alphaMapUv), t1.push(e.lightMapUv), t1.push(e.aoMapUv), t1.push(e.bumpMapUv), t1.push(e.normalMapUv), t1.push(e.displacementMapUv), t1.push(e.emissiveMapUv), t1.push(e.metalnessMapUv), t1.push(e.roughnessMapUv), t1.push(e.anisotropyMapUv), t1.push(e.clearcoatMapUv), t1.push(e.clearcoatNormalMapUv), t1.push(e.clearcoatRoughnessMapUv), t1.push(e.iridescenceMapUv), t1.push(e.iridescenceThicknessMapUv), t1.push(e.sheenColorMapUv), t1.push(e.sheenRoughnessMapUv), t1.push(e.specularMapUv), t1.push(e.specularColorMapUv), t1.push(e.specularIntensityMapUv), t1.push(e.transmissionMapUv), t1.push(e.thicknessMapUv), t1.push(e.combine), t1.push(e.fogExp2), t1.push(e.sizeAttenuation), t1.push(e.morphTargetsCount), t1.push(e.morphAttributeCount), t1.push(e.numDirLights), t1.push(e.numPointLights), t1.push(e.numSpotLights), t1.push(e.numSpotLightMaps), t1.push(e.numHemiLights), t1.push(e.numRectAreaLights), t1.push(e.numDirLightShadows), t1.push(e.numPointLightShadows), t1.push(e.numSpotLightShadows), t1.push(e.numSpotLightShadowsWithMaps), t1.push(e.numLightProbes), t1.push(e.shadowMapType), t1.push(e.toneMapping), t1.push(e.numClippingPlanes), t1.push(e.numClipIntersection), t1.push(e.depthPacking);
                }(n, e), function(t1, e) {
                    l.disableAll(), e.isWebGL2 && l.enable(0);
                    e.supportsVertexTextures && l.enable(1);
                    e.instancing && l.enable(2);
                    e.instancingColor && l.enable(3);
                    e.matcap && l.enable(4);
                    e.envMap && l.enable(5);
                    e.normalMapObjectSpace && l.enable(6);
                    e.normalMapTangentSpace && l.enable(7);
                    e.clearcoat && l.enable(8);
                    e.iridescence && l.enable(9);
                    e.alphaTest && l.enable(10);
                    e.vertexColors && l.enable(11);
                    e.vertexAlphas && l.enable(12);
                    e.vertexUv1s && l.enable(13);
                    e.vertexUv2s && l.enable(14);
                    e.vertexUv3s && l.enable(15);
                    e.vertexTangents && l.enable(16);
                    e.anisotropy && l.enable(17);
                    e.alphaHash && l.enable(18);
                    e.batching && l.enable(19);
                    t1.push(l.mask), l.disableAll(), e.fog && l.enable(0);
                    e.useFog && l.enable(1);
                    e.flatShading && l.enable(2);
                    e.logarithmicDepthBuffer && l.enable(3);
                    e.skinning && l.enable(4);
                    e.morphTargets && l.enable(5);
                    e.morphNormals && l.enable(6);
                    e.morphColors && l.enable(7);
                    e.premultipliedAlpha && l.enable(8);
                    e.shadowMapEnabled && l.enable(9);
                    e.useLegacyLights && l.enable(10);
                    e.doubleSided && l.enable(11);
                    e.flipSided && l.enable(12);
                    e.useDepthPacking && l.enable(13);
                    e.dithering && l.enable(14);
                    e.transmission && l.enable(15);
                    e.sheen && l.enable(16);
                    e.opaque && l.enable(17);
                    e.pointsUvs && l.enable(18);
                    e.decodeVideoTexture && l.enable(19);
                    t1.push(l.mask);
                }(n, e), n.push(t1.outputColorSpace)), n.push(e.customProgramCacheKey), n.join();
            },
            getUniforms: function(t1) {
                const e = g[t1.type];
                let n;
                if (e) {
                    const t1 = Sr[e];
                    n = nr.clone(t1.uniforms);
                } else n = t1.uniforms;
                return n;
            },
            acquireProgram: function(e, n) {
                let i;
                for(let t1 = 0, e = h.length; t1 < e; t1++){
                    const e = h[t1];
                    if (e.cacheKey === n) {
                        i = e, ++i.usedTimes;
                        break;
                    }
                }
                return void 0 === i && (i = new Ea(t1, n, e, s), h.push(i)), i;
            },
            releaseProgram: function(t1) {
                if (0 == --t1.usedTimes) {
                    const e = h.indexOf(t1);
                    h[e] = h[h.length - 1], h.pop(), t1.destroy();
                }
            },
            releaseShaderCache: function(t1) {
                c.remove(t1);
            },
            programs: h,
            dispose: function() {
                c.dispose();
            }
        };
    }
    function La() {
        let t1 = new WeakMap;
        return {
            get: function(e) {
                let n = t1.get(e);
                return void 0 === n && (n = {}, t1.set(e, n)), n;
            },
            remove: function(e) {
                t1.delete(e);
            },
            update: function(e, n, i) {
                t1.get(e)[n] = i;
            },
            dispose: function() {
                t1 = new WeakMap;
            }
        };
    }
    function Pa(t1, e) {
        return t1.groupOrder !== e.groupOrder ? t1.groupOrder - e.groupOrder : t1.renderOrder !== e.renderOrder ? t1.renderOrder - e.renderOrder : t1.material.id !== e.material.id ? t1.material.id - e.material.id : t1.z !== e.z ? t1.z - e.z : t1.id - e.id;
    }
    function Ia(t1, e) {
        return t1.groupOrder !== e.groupOrder ? t1.groupOrder - e.groupOrder : t1.renderOrder !== e.renderOrder ? t1.renderOrder - e.renderOrder : t1.z !== e.z ? e.z - t1.z : t1.id - e.id;
    }
    function Ua() {
        const t1 = [];
        let e = 0;
        const n = [], i = [], r = [];
        function s(n, i, r, s, a, o) {
            let l = t1[e];
            return void 0 === l ? (l = {
                id: n.id,
                object: n,
                geometry: i,
                material: r,
                groupOrder: s,
                renderOrder: n.renderOrder,
                z: a,
                group: o
            }, t1[e] = l) : (l.id = n.id, l.object = n, l.geometry = i, l.material = r, l.groupOrder = s, l.renderOrder = n.renderOrder, l.z = a, l.group = o), e++, l;
        }
        return {
            opaque: n,
            transmissive: i,
            transparent: r,
            init: function() {
                e = 0, n.length = 0, i.length = 0, r.length = 0;
            },
            push: function(t1, e, a, o, l, c) {
                const h = s(t1, e, a, o, l, c);
                a.transmission > 0 ? i.push(h) : !0 === a.transparent ? r.push(h) : n.push(h);
            },
            unshift: function(t1, e, a, o, l, c) {
                const h = s(t1, e, a, o, l, c);
                a.transmission > 0 ? i.unshift(h) : !0 === a.transparent ? r.unshift(h) : n.unshift(h);
            },
            finish: function() {
                for(let n = e, i = t1.length; n < i; n++){
                    const e = t1[n];
                    if (null === e.id) break;
                    e.id = null, e.object = null, e.geometry = null, e.material = null, e.group = null;
                }
            },
            sort: function(t1, e) {
                n.length > 1 && n.sort(t1 || Pa), i.length > 1 && i.sort(e || Ia), r.length > 1 && r.sort(e || Ia);
            }
        };
    }
    function Da() {
        let t1 = new WeakMap;
        return {
            get: function(e, n) {
                const i = t1.get(e);
                let r;
                return void 0 === i ? (r = new Ua, t1.set(e, [
                    r
                ])) : n >= i.length ? (r = new Ua, i.push(r)) : r = i[n], r;
            },
            dispose: function() {
                t1 = new WeakMap;
            }
        };
    }
    function Na() {
        const t1 = {};
        return {
            get: function(e) {
                if (void 0 !== t1[e.id]) return t1[e.id];
                let n;
                switch(e.type){
                    case "DirectionalLight":
                        n = {
                            direction: new We,
                            color: new ci
                        };
                        break;
                    case "SpotLight":
                        n = {
                            position: new We,
                            direction: new We,
                            color: new ci,
                            distance: 0,
                            coneCos: 0,
                            penumbraCos: 0,
                            decay: 0
                        };
                        break;
                    case "PointLight":
                        n = {
                            position: new We,
                            color: new ci,
                            distance: 0,
                            decay: 0
                        };
                        break;
                    case "HemisphereLight":
                        n = {
                            direction: new We,
                            skyColor: new ci,
                            groundColor: new ci
                        };
                        break;
                    case "RectAreaLight":
                        n = {
                            color: new ci,
                            position: new We,
                            halfWidth: new We,
                            halfHeight: new We
                        };
                }
                return t1[e.id] = n, n;
            }
        };
    }
    let Oa = 0;
    function Fa(t1, e) {
        return (e.castShadow ? 2 : 0) - (t1.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (t1.map ? 1 : 0);
    }
    function Ba(t1, e) {
        const n = new Na, i = function() {
            const t1 = {};
            return {
                get: function(e) {
                    if (void 0 !== t1[e.id]) return t1[e.id];
                    let n;
                    switch(e.type){
                        case "DirectionalLight":
                        case "SpotLight":
                            n = {
                                shadowBias: 0,
                                shadowNormalBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new me
                            };
                            break;
                        case "PointLight":
                            n = {
                                shadowBias: 0,
                                shadowNormalBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new me,
                                shadowCameraNear: 1,
                                shadowCameraFar: 1e3
                            };
                    }
                    return t1[e.id] = n, n;
                }
            };
        }(), r = {
            version: 0,
            hash: {
                directionalLength: -1,
                pointLength: -1,
                spotLength: -1,
                rectAreaLength: -1,
                hemiLength: -1,
                numDirectionalShadows: -1,
                numPointShadows: -1,
                numSpotShadows: -1,
                numSpotMaps: -1,
                numLightProbes: -1
            },
            ambient: [
                0,
                0,
                0
            ],
            probe: [],
            directional: [],
            directionalShadow: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotLightMap: [],
            spotShadow: [],
            spotShadowMap: [],
            spotLightMatrix: [],
            rectArea: [],
            rectAreaLTC1: null,
            rectAreaLTC2: null,
            point: [],
            pointShadow: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: [],
            numSpotLightShadowsWithMaps: 0,
            numLightProbes: 0
        };
        for(let t1 = 0; t1 < 9; t1++)r.probe.push(new We);
        const s = new We, a = new Mn, o = new Mn;
        return {
            setup: function(s, a) {
                let o = 0, l = 0, c = 0;
                for(let t1 = 0; t1 < 9; t1++)r.probe[t1].set(0, 0, 0);
                let h = 0, u = 0, d = 0, p = 0, m = 0, f = 0, g = 0, _ = 0, v = 0, x = 0, y = 0;
                s.sort(Fa);
                const M = !0 === a ? Math.PI : 1;
                for(let t1 = 0, e = s.length; t1 < e; t1++){
                    const e = s[t1], a = e.color, S = e.intensity, b = e.distance, T = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
                    if (e.isAmbientLight) o += a.r * S * M, l += a.g * S * M, c += a.b * S * M;
                    else if (e.isLightProbe) {
                        for(let t1 = 0; t1 < 9; t1++)r.probe[t1].addScaledVector(e.sh.coefficients[t1], S);
                        y++;
                    } else if (e.isDirectionalLight) {
                        const t1 = n.get(e);
                        if (t1.color.copy(e.color).multiplyScalar(e.intensity * M), e.castShadow) {
                            const t1 = e.shadow, n = i.get(e);
                            n.shadowBias = t1.bias, n.shadowNormalBias = t1.normalBias, n.shadowRadius = t1.radius, n.shadowMapSize = t1.mapSize, r.directionalShadow[h] = n, r.directionalShadowMap[h] = T, r.directionalShadowMatrix[h] = e.shadow.matrix, f++;
                        }
                        r.directional[h] = t1, h++;
                    } else if (e.isSpotLight) {
                        const t1 = n.get(e);
                        t1.position.setFromMatrixPosition(e.matrixWorld), t1.color.copy(a).multiplyScalar(S * M), t1.distance = b, t1.coneCos = Math.cos(e.angle), t1.penumbraCos = Math.cos(e.angle * (1 - e.penumbra)), t1.decay = e.decay, r.spot[d] = t1;
                        const s = e.shadow;
                        if (e.map && (r.spotLightMap[v] = e.map, v++, s.updateMatrices(e), e.castShadow && x++), r.spotLightMatrix[d] = s.matrix, e.castShadow) {
                            const t1 = i.get(e);
                            t1.shadowBias = s.bias, t1.shadowNormalBias = s.normalBias, t1.shadowRadius = s.radius, t1.shadowMapSize = s.mapSize, r.spotShadow[d] = t1, r.spotShadowMap[d] = T, _++;
                        }
                        d++;
                    } else if (e.isRectAreaLight) {
                        const t1 = n.get(e);
                        t1.color.copy(a).multiplyScalar(S), t1.halfWidth.set(.5 * e.width, 0, 0), t1.halfHeight.set(0, .5 * e.height, 0), r.rectArea[p] = t1, p++;
                    } else if (e.isPointLight) {
                        const t1 = n.get(e);
                        if (t1.color.copy(e.color).multiplyScalar(e.intensity * M), t1.distance = e.distance, t1.decay = e.decay, e.castShadow) {
                            const t1 = e.shadow, n = i.get(e);
                            n.shadowBias = t1.bias, n.shadowNormalBias = t1.normalBias, n.shadowRadius = t1.radius, n.shadowMapSize = t1.mapSize, n.shadowCameraNear = t1.camera.near, n.shadowCameraFar = t1.camera.far, r.pointShadow[u] = n, r.pointShadowMap[u] = T, r.pointShadowMatrix[u] = e.shadow.matrix, g++;
                        }
                        r.point[u] = t1, u++;
                    } else if (e.isHemisphereLight) {
                        const t1 = n.get(e);
                        t1.skyColor.copy(e.color).multiplyScalar(S * M), t1.groundColor.copy(e.groundColor).multiplyScalar(S * M), r.hemi[m] = t1, m++;
                    }
                }
                p > 0 && (e.isWebGL2 ? !0 === t1.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = Mr.LTC_FLOAT_1, r.rectAreaLTC2 = Mr.LTC_FLOAT_2) : (r.rectAreaLTC1 = Mr.LTC_HALF_1, r.rectAreaLTC2 = Mr.LTC_HALF_2) : !0 === t1.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = Mr.LTC_FLOAT_1, r.rectAreaLTC2 = Mr.LTC_FLOAT_2) : !0 === t1.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = Mr.LTC_HALF_1, r.rectAreaLTC2 = Mr.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = o, r.ambient[1] = l, r.ambient[2] = c;
                const S = r.hash;
                S.directionalLength === h && S.pointLength === u && S.spotLength === d && S.rectAreaLength === p && S.hemiLength === m && S.numDirectionalShadows === f && S.numPointShadows === g && S.numSpotShadows === _ && S.numSpotMaps === v && S.numLightProbes === y || (r.directional.length = h, r.spot.length = d, r.rectArea.length = p, r.point.length = u, r.hemi.length = m, r.directionalShadow.length = f, r.directionalShadowMap.length = f, r.pointShadow.length = g, r.pointShadowMap.length = g, r.spotShadow.length = _, r.spotShadowMap.length = _, r.directionalShadowMatrix.length = f, r.pointShadowMatrix.length = g, r.spotLightMatrix.length = _ + v - x, r.spotLightMap.length = v, r.numSpotLightShadowsWithMaps = x, r.numLightProbes = y, S.directionalLength = h, S.pointLength = u, S.spotLength = d, S.rectAreaLength = p, S.hemiLength = m, S.numDirectionalShadows = f, S.numPointShadows = g, S.numSpotShadows = _, S.numSpotMaps = v, S.numLightProbes = y, r.version = Oa++);
            },
            setupView: function(t1, e) {
                let n = 0, i = 0, l = 0, c = 0, h = 0;
                const u = e.matrixWorldInverse;
                for(let e = 0, d = t1.length; e < d; e++){
                    const d = t1[e];
                    if (d.isDirectionalLight) {
                        const t1 = r.directional[n];
                        t1.direction.setFromMatrixPosition(d.matrixWorld), s.setFromMatrixPosition(d.target.matrixWorld), t1.direction.sub(s), t1.direction.transformDirection(u), n++;
                    } else if (d.isSpotLight) {
                        const t1 = r.spot[l];
                        t1.position.setFromMatrixPosition(d.matrixWorld), t1.position.applyMatrix4(u), t1.direction.setFromMatrixPosition(d.matrixWorld), s.setFromMatrixPosition(d.target.matrixWorld), t1.direction.sub(s), t1.direction.transformDirection(u), l++;
                    } else if (d.isRectAreaLight) {
                        const t1 = r.rectArea[c];
                        t1.position.setFromMatrixPosition(d.matrixWorld), t1.position.applyMatrix4(u), o.identity(), a.copy(d.matrixWorld), a.premultiply(u), o.extractRotation(a), t1.halfWidth.set(.5 * d.width, 0, 0), t1.halfHeight.set(0, .5 * d.height, 0), t1.halfWidth.applyMatrix4(o), t1.halfHeight.applyMatrix4(o), c++;
                    } else if (d.isPointLight) {
                        const t1 = r.point[i];
                        t1.position.setFromMatrixPosition(d.matrixWorld), t1.position.applyMatrix4(u), i++;
                    } else if (d.isHemisphereLight) {
                        const t1 = r.hemi[h];
                        t1.direction.setFromMatrixPosition(d.matrixWorld), t1.direction.transformDirection(u), h++;
                    }
                }
            },
            state: r
        };
    }
    function za(t1, e) {
        const n = new Ba(t1, e), i = [], r = [];
        return {
            init: function() {
                i.length = 0, r.length = 0;
            },
            state: {
                lightsArray: i,
                shadowsArray: r,
                lights: n
            },
            setupLights: function(t1) {
                n.setup(i, t1);
            },
            setupLightsView: function(t1) {
                n.setupView(i, t1);
            },
            pushLight: function(t1) {
                i.push(t1);
            },
            pushShadow: function(t1) {
                r.push(t1);
            }
        };
    }
    function Ga(t1, e) {
        let n = new WeakMap;
        return {
            get: function(i, r = 0) {
                const s = n.get(i);
                let a;
                return void 0 === s ? (a = new za(t1, e), n.set(i, [
                    a
                ])) : r >= s.length ? (a = new za(t1, e), s.push(a)) : a = s[r], a;
            },
            dispose: function() {
                n = new WeakMap;
            }
        };
    }
    class Ha extends di {
        constructor(t1){
            super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.depthPacking = t1.depthPacking, this.map = t1.map, this.alphaMap = t1.alphaMap, this.displacementMap = t1.displacementMap, this.displacementScale = t1.displacementScale, this.displacementBias = t1.displacementBias, this.wireframe = t1.wireframe, this.wireframeLinewidth = t1.wireframeLinewidth, this;
        }
    }
    class Va extends di {
        constructor(t1){
            super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.map = t1.map, this.alphaMap = t1.alphaMap, this.displacementMap = t1.displacementMap, this.displacementScale = t1.displacementScale, this.displacementBias = t1.displacementBias, this;
        }
    }
    function ka(t1, e, i) {
        let o = new gr;
        const l = new me, c = new me, h = new Be, u = new Ha({
            depthPacking: 3201
        }), d = new Va, p = {}, m = i.maxTextureSize, f = {
            [s]: a,
            [a]: s,
            2: 2
        }, g = new ir({
            defines: {
                VSM_SAMPLES: 8
            },
            uniforms: {
                shadow_pass: {
                    value: null
                },
                resolution: {
                    value: new me
                },
                radius: {
                    value: 4
                }
            },
            vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
            fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
        }), _ = g.clone();
        _.defines.HORIZONTAL_PASS = 1;
        const v = new Ii;
        v.setAttribute("position", new Mi(new Float32Array([
            -1,
            -1,
            .5,
            3,
            -1,
            .5,
            -1,
            3,
            .5
        ]), 3));
        const x = new Ji(v, g), y = this;
        this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = n;
        let M = this.type;
        function S(n, i) {
            const r = e.update(x);
            g.defines.VSM_SAMPLES !== n.blurSamples && (g.defines.VSM_SAMPLES = n.blurSamples, _.defines.VSM_SAMPLES = n.blurSamples, g.needsUpdate = !0, _.needsUpdate = !0), null === n.mapPass && (n.mapPass = new Ge(l.x, l.y)), g.uniforms.shadow_pass.value = n.map.texture, g.uniforms.resolution.value = n.mapSize, g.uniforms.radius.value = n.radius, t1.setRenderTarget(n.mapPass), t1.clear(), t1.renderBufferDirect(i, null, r, g, x, null), _.uniforms.shadow_pass.value = n.mapPass.texture, _.uniforms.resolution.value = n.mapSize, _.uniforms.radius.value = n.radius, t1.setRenderTarget(n.map), t1.clear(), t1.renderBufferDirect(i, null, r, _, x, null);
        }
        function b(e, n, i, s) {
            let a = null;
            const o = !0 === i.isPointLight ? e.customDistanceMaterial : e.customDepthMaterial;
            if (void 0 !== o) a = o;
            else if (a = !0 === i.isPointLight ? d : u, t1.localClippingEnabled && !0 === n.clipShadows && Array.isArray(n.clippingPlanes) && 0 !== n.clippingPlanes.length || n.displacementMap && 0 !== n.displacementScale || n.alphaMap && n.alphaTest > 0 || n.map && n.alphaTest > 0) {
                const t1 = a.uuid, e = n.uuid;
                let i = p[t1];
                void 0 === i && (i = {}, p[t1] = i);
                let r = i[e];
                void 0 === r && (r = a.clone(), i[e] = r, n.addEventListener("dispose", E)), a = r;
            }
            if (a.visible = n.visible, a.wireframe = n.wireframe, a.side = s === r ? null !== n.shadowSide ? n.shadowSide : n.side : null !== n.shadowSide ? n.shadowSide : f[n.side], a.alphaMap = n.alphaMap, a.alphaTest = n.alphaTest, a.map = n.map, a.clipShadows = n.clipShadows, a.clippingPlanes = n.clippingPlanes, a.clipIntersection = n.clipIntersection, a.displacementMap = n.displacementMap, a.displacementScale = n.displacementScale, a.displacementBias = n.displacementBias, a.wireframeLinewidth = n.wireframeLinewidth, a.linewidth = n.linewidth, !0 === i.isPointLight && !0 === a.isMeshDistanceMaterial) t1.properties.get(a).light = i;
            return a;
        }
        function T(n, i, s, a, l) {
            if (!1 === n.visible) return;
            if (n.layers.test(i.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && l === r) && (!n.frustumCulled || o.intersectsObject(n))) {
                n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, n.matrixWorld);
                const r = e.update(n), o = n.material;
                if (Array.isArray(o)) {
                    const e = r.groups;
                    for(let c = 0, h = e.length; c < h; c++){
                        const h = e[c], u = o[h.materialIndex];
                        if (u && u.visible) {
                            const e = b(n, u, a, l);
                            n.onBeforeShadow(t1, n, i, s, r, e, h), t1.renderBufferDirect(s, null, r, e, n, h), n.onAfterShadow(t1, n, i, s, r, e, h);
                        }
                    }
                } else if (o.visible) {
                    const e = b(n, o, a, l);
                    n.onBeforeShadow(t1, n, i, s, r, e, null), t1.renderBufferDirect(s, null, r, e, n, null), n.onAfterShadow(t1, n, i, s, r, e, null);
                }
            }
            const c = n.children;
            for(let t1 = 0, e = c.length; t1 < e; t1++)T(c[t1], i, s, a, l);
        }
        function E(t1) {
            t1.target.removeEventListener("dispose", E);
            for(const e in p){
                const n = p[e], i = t1.target.uuid;
                if (i in n) n[i].dispose(), delete n[i];
            }
        }
        this.render = function(e, n, i) {
            if (!1 === y.enabled) return;
            if (!1 === y.autoUpdate && !1 === y.needsUpdate) return;
            if (0 === e.length) return;
            const s = t1.getRenderTarget(), a = t1.getActiveCubeFace(), u = t1.getActiveMipmapLevel(), d = t1.state;
            d.setBlending(0), d.buffers.color.setClear(1, 1, 1, 1), d.buffers.depth.setTest(!0), d.setScissorTest(!1);
            const p = M !== r && this.type === r, f = M === r && this.type !== r;
            for(let s = 0, a = e.length; s < a; s++){
                const a = e[s], u = a.shadow;
                if (void 0 === u) {
                    console.warn("THREE.WebGLShadowMap:", a, "has no shadow.");
                    continue;
                }
                if (!1 === u.autoUpdate && !1 === u.needsUpdate) continue;
                l.copy(u.mapSize);
                const g = u.getFrameExtents();
                if (l.multiply(g), c.copy(u.mapSize), (l.x > m || l.y > m) && (l.x > m && (c.x = Math.floor(m / g.x), l.x = c.x * g.x, u.mapSize.x = c.x), l.y > m && (c.y = Math.floor(m / g.y), l.y = c.y * g.y, u.mapSize.y = c.y)), null === u.map || !0 === p || !0 === f) {
                    const t1 = this.type !== r ? {
                        minFilter: P,
                        magFilter: P
                    } : {};
                    null !== u.map && u.map.dispose(), u.map = new Ge(l.x, l.y, t1), u.map.texture.name = a.name + ".shadowMap", u.camera.updateProjectionMatrix();
                }
                t1.setRenderTarget(u.map), t1.clear();
                const _ = u.getViewportCount();
                for(let t1 = 0; t1 < _; t1++){
                    const e = u.getViewport(t1);
                    h.set(c.x * e.x, c.y * e.y, c.x * e.z, c.y * e.w), d.viewport(h), u.updateMatrices(a, t1), o = u.getFrustum(), T(n, i, u.camera, a, this.type);
                }
                !0 !== u.isPointLightShadow && this.type === r && S(u, i), u.needsUpdate = !1;
            }
            M = this.type, y.needsUpdate = !1, t1.setRenderTarget(s, a, u);
        };
    }
    function Wa(t1, e, n) {
        const i = n.isWebGL2;
        const r = new function() {
            let e = !1;
            const n = new Be;
            let i = null;
            const r = new Be(0, 0, 0, 0);
            return {
                setMask: function(n) {
                    i === n || e || (t1.colorMask(n, n, n, n), i = n);
                },
                setLocked: function(t1) {
                    e = t1;
                },
                setClear: function(e, i, s, a, o) {
                    !0 === o && (e *= a, i *= a, s *= a), n.set(e, i, s, a), !1 === r.equals(n) && (t1.clearColor(e, i, s, a), r.copy(n));
                },
                reset: function() {
                    e = !1, i = null, r.set(-1, 0, 0, 0);
                }
            };
        }, s = new function() {
            let e = !1, n = null, i = null, r = null;
            return {
                setTest: function(e) {
                    e ? j(t1.DEPTH_TEST) : q(t1.DEPTH_TEST);
                },
                setMask: function(i) {
                    n === i || e || (t1.depthMask(i), n = i);
                },
                setFunc: function(e) {
                    if (i !== e) {
                        switch(e){
                            case 0:
                                t1.depthFunc(t1.NEVER);
                                break;
                            case 1:
                                t1.depthFunc(t1.ALWAYS);
                                break;
                            case 2:
                                t1.depthFunc(t1.LESS);
                                break;
                            case 3:
                            default:
                                t1.depthFunc(t1.LEQUAL);
                                break;
                            case 4:
                                t1.depthFunc(t1.EQUAL);
                                break;
                            case 5:
                                t1.depthFunc(t1.GEQUAL);
                                break;
                            case 6:
                                t1.depthFunc(t1.GREATER);
                                break;
                            case 7:
                                t1.depthFunc(t1.NOTEQUAL);
                        }
                        i = e;
                    }
                },
                setLocked: function(t1) {
                    e = t1;
                },
                setClear: function(e) {
                    r !== e && (t1.clearDepth(e), r = e);
                },
                reset: function() {
                    e = !1, n = null, i = null, r = null;
                }
            };
        }, h = new function() {
            let e = !1, n = null, i = null, r = null, s = null, a = null, o = null, l = null, c = null;
            return {
                setTest: function(n) {
                    e || (n ? j(t1.STENCIL_TEST) : q(t1.STENCIL_TEST));
                },
                setMask: function(i) {
                    n === i || e || (t1.stencilMask(i), n = i);
                },
                setFunc: function(e, n, a) {
                    i === e && r === n && s === a || (t1.stencilFunc(e, n, a), i = e, r = n, s = a);
                },
                setOp: function(e, n, i) {
                    a === e && o === n && l === i || (t1.stencilOp(e, n, i), a = e, o = n, l = i);
                },
                setLocked: function(t1) {
                    e = t1;
                },
                setClear: function(e) {
                    c !== e && (t1.clearStencil(e), c = e);
                },
                reset: function() {
                    e = !1, n = null, i = null, r = null, s = null, a = null, o = null, l = null, c = null;
                }
            };
        }, u = new WeakMap, d = new WeakMap;
        let p = {}, m = {}, f = new WeakMap, g = [], _ = null, v = !1, x = null, y = null, M = null, S = null, b = null, T = null, E = null, w = new ci(0, 0, 0), A = 0, R = !1, C = null, L = null, P = null, I = null, U = null;
        const D = t1.getParameter(t1.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
        let N = !1, O = 0;
        const F = t1.getParameter(t1.VERSION);
        -1 !== F.indexOf("WebGL") ? (O = parseFloat(/^WebGL (\d)/.exec(F)[1]), N = O >= 1) : -1 !== F.indexOf("OpenGL ES") && (O = parseFloat(/^OpenGL ES (\d)/.exec(F)[1]), N = O >= 2);
        let B = null, z = {};
        const G = t1.getParameter(t1.SCISSOR_BOX), H = t1.getParameter(t1.VIEWPORT), V = (new Be).fromArray(G), k = (new Be).fromArray(H);
        function W(e, n, r, s) {
            const a = new Uint8Array(4), o = t1.createTexture();
            t1.bindTexture(e, o), t1.texParameteri(e, t1.TEXTURE_MIN_FILTER, t1.NEAREST), t1.texParameteri(e, t1.TEXTURE_MAG_FILTER, t1.NEAREST);
            for(let o = 0; o < r; o++)!i || e !== t1.TEXTURE_3D && e !== t1.TEXTURE_2D_ARRAY ? t1.texImage2D(n + o, 0, t1.RGBA, 1, 1, 0, t1.RGBA, t1.UNSIGNED_BYTE, a) : t1.texImage3D(n, 0, t1.RGBA, 1, 1, s, 0, t1.RGBA, t1.UNSIGNED_BYTE, a);
            return o;
        }
        const X = {};
        function j(e) {
            !0 !== p[e] && (t1.enable(e), p[e] = !0);
        }
        function q(e) {
            !1 !== p[e] && (t1.disable(e), p[e] = !1);
        }
        X[t1.TEXTURE_2D] = W(t1.TEXTURE_2D, t1.TEXTURE_2D, 1), X[t1.TEXTURE_CUBE_MAP] = W(t1.TEXTURE_CUBE_MAP, t1.TEXTURE_CUBE_MAP_POSITIVE_X, 6), i && (X[t1.TEXTURE_2D_ARRAY] = W(t1.TEXTURE_2D_ARRAY, t1.TEXTURE_2D_ARRAY, 1, 1), X[t1.TEXTURE_3D] = W(t1.TEXTURE_3D, t1.TEXTURE_3D, 1, 1)), r.setClear(0, 0, 0, 1), s.setClear(1), h.setClear(0), j(t1.DEPTH_TEST), s.setFunc(3), K(!1), $(1), j(t1.CULL_FACE), J(0);
        const Y = {
            [o]: t1.FUNC_ADD,
            101: t1.FUNC_SUBTRACT,
            102: t1.FUNC_REVERSE_SUBTRACT
        };
        if (i) Y[103] = t1.MIN, Y[104] = t1.MAX;
        else {
            const t1 = e.get("EXT_blend_minmax");
            null !== t1 && (Y[103] = t1.MIN_EXT, Y[104] = t1.MAX_EXT);
        }
        const Z = {
            200: t1.ZERO,
            201: t1.ONE,
            202: t1.SRC_COLOR,
            [l]: t1.SRC_ALPHA,
            210: t1.SRC_ALPHA_SATURATE,
            208: t1.DST_COLOR,
            206: t1.DST_ALPHA,
            203: t1.ONE_MINUS_SRC_COLOR,
            [c]: t1.ONE_MINUS_SRC_ALPHA,
            209: t1.ONE_MINUS_DST_COLOR,
            207: t1.ONE_MINUS_DST_ALPHA,
            211: t1.CONSTANT_COLOR,
            212: t1.ONE_MINUS_CONSTANT_COLOR,
            213: t1.CONSTANT_ALPHA,
            214: t1.ONE_MINUS_CONSTANT_ALPHA
        };
        function J(e, n, i, r, s, a, l, c, h, u) {
            if (0 !== e) {
                if (!1 === v && (j(t1.BLEND), v = !0), 5 === e) s = s || n, a = a || i, l = l || r, n === y && s === b || (t1.blendEquationSeparate(Y[n], Y[s]), y = n, b = s), i === M && r === S && a === T && l === E || (t1.blendFuncSeparate(Z[i], Z[r], Z[a], Z[l]), M = i, S = r, T = a, E = l), !1 !== c.equals(w) && h === A || (t1.blendColor(c.r, c.g, c.b, h), w.copy(c), A = h), x = e, R = !1;
                else if (e !== x || u !== R) {
                    if (y === o && b === o || (t1.blendEquation(t1.FUNC_ADD), y = o, b = o), u) switch(e){
                        case 1:
                            t1.blendFuncSeparate(t1.ONE, t1.ONE_MINUS_SRC_ALPHA, t1.ONE, t1.ONE_MINUS_SRC_ALPHA);
                            break;
                        case 2:
                            t1.blendFunc(t1.ONE, t1.ONE);
                            break;
                        case 3:
                            t1.blendFuncSeparate(t1.ZERO, t1.ONE_MINUS_SRC_COLOR, t1.ZERO, t1.ONE);
                            break;
                        case 4:
                            t1.blendFuncSeparate(t1.ZERO, t1.SRC_COLOR, t1.ZERO, t1.SRC_ALPHA);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", e);
                    }
                    else switch(e){
                        case 1:
                            t1.blendFuncSeparate(t1.SRC_ALPHA, t1.ONE_MINUS_SRC_ALPHA, t1.ONE, t1.ONE_MINUS_SRC_ALPHA);
                            break;
                        case 2:
                            t1.blendFunc(t1.SRC_ALPHA, t1.ONE);
                            break;
                        case 3:
                            t1.blendFuncSeparate(t1.ZERO, t1.ONE_MINUS_SRC_COLOR, t1.ZERO, t1.ONE);
                            break;
                        case 4:
                            t1.blendFunc(t1.ZERO, t1.SRC_COLOR);
                            break;
                        default:
                            console.error("THREE.WebGLState: Invalid blending: ", e);
                    }
                    M = null, S = null, T = null, E = null, w.set(0, 0, 0), A = 0, x = e, R = u;
                }
            } else !0 === v && (q(t1.BLEND), v = !1);
        }
        function K(e) {
            C !== e && (e ? t1.frontFace(t1.CW) : t1.frontFace(t1.CCW), C = e);
        }
        function $(e) {
            0 !== e ? (j(t1.CULL_FACE), e !== L && (1 === e ? t1.cullFace(t1.BACK) : 2 === e ? t1.cullFace(t1.FRONT) : t1.cullFace(t1.FRONT_AND_BACK))) : q(t1.CULL_FACE), L = e;
        }
        function Q(e, n, i) {
            e ? (j(t1.POLYGON_OFFSET_FILL), I === n && U === i || (t1.polygonOffset(n, i), I = n, U = i)) : q(t1.POLYGON_OFFSET_FILL);
        }
        return {
            buffers: {
                color: r,
                depth: s,
                stencil: h
            },
            enable: j,
            disable: q,
            bindFramebuffer: function(e, n) {
                return m[e] !== n && (t1.bindFramebuffer(e, n), m[e] = n, i && (e === t1.DRAW_FRAMEBUFFER && (m[t1.FRAMEBUFFER] = n), e === t1.FRAMEBUFFER && (m[t1.DRAW_FRAMEBUFFER] = n)), !0);
            },
            drawBuffers: function(i, r) {
                let s = g, a = !1;
                if (i) {
                    if (s = f.get(r), void 0 === s && (s = [], f.set(r, s)), i.isWebGLMultipleRenderTargets) {
                        const e = i.texture;
                        if (s.length !== e.length || s[0] !== t1.COLOR_ATTACHMENT0) {
                            for(let n = 0, i = e.length; n < i; n++)s[n] = t1.COLOR_ATTACHMENT0 + n;
                            s.length = e.length, a = !0;
                        }
                    } else s[0] !== t1.COLOR_ATTACHMENT0 && (s[0] = t1.COLOR_ATTACHMENT0, a = !0);
                } else s[0] !== t1.BACK && (s[0] = t1.BACK, a = !0);
                a && (n.isWebGL2 ? t1.drawBuffers(s) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(s));
            },
            useProgram: function(e) {
                return _ !== e && (t1.useProgram(e), _ = e, !0);
            },
            setBlending: J,
            setMaterial: function(e, n) {
                2 === e.side ? q(t1.CULL_FACE) : j(t1.CULL_FACE);
                let i = e.side === a;
                n && (i = !i), K(i), 1 === e.blending && !1 === e.transparent ? J(0) : J(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.blendColor, e.blendAlpha, e.premultipliedAlpha), s.setFunc(e.depthFunc), s.setTest(e.depthTest), s.setMask(e.depthWrite), r.setMask(e.colorWrite);
                const o = e.stencilWrite;
                h.setTest(o), o && (h.setMask(e.stencilWriteMask), h.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask), h.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)), Q(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits), !0 === e.alphaToCoverage ? j(t1.SAMPLE_ALPHA_TO_COVERAGE) : q(t1.SAMPLE_ALPHA_TO_COVERAGE);
            },
            setFlipSided: K,
            setCullFace: $,
            setLineWidth: function(e) {
                e !== P && (N && t1.lineWidth(e), P = e);
            },
            setPolygonOffset: Q,
            setScissorTest: function(e) {
                e ? j(t1.SCISSOR_TEST) : q(t1.SCISSOR_TEST);
            },
            activeTexture: function(e) {
                void 0 === e && (e = t1.TEXTURE0 + D - 1), B !== e && (t1.activeTexture(e), B = e);
            },
            bindTexture: function(e, n, i) {
                void 0 === i && (i = null === B ? t1.TEXTURE0 + D - 1 : B);
                let r = z[i];
                void 0 === r && (r = {
                    type: void 0,
                    texture: void 0
                }, z[i] = r), r.type === e && r.texture === n || (B !== i && (t1.activeTexture(i), B = i), t1.bindTexture(e, n || X[e]), r.type = e, r.texture = n);
            },
            unbindTexture: function() {
                const e = z[B];
                void 0 !== e && void 0 !== e.type && (t1.bindTexture(e.type, null), e.type = void 0, e.texture = void 0);
            },
            compressedTexImage2D: function() {
                try {
                    t1.compressedTexImage2D.apply(t1, arguments);
                } catch (t1) {
                    console.error("THREE.WebGLState:", t1);
                }
            },
            compressedTexImage3D: function() {
                try {
                    t1.compressedTexImage3D.apply(t1, arguments);
                } catch (t1) {
                    console.error("THREE.WebGLState:", t1);
                }
            },
            texImage2D: function() {
                try {
                    t1.texImage2D.apply(t1, arguments);
                } catch (t1) {
                    console.error("THREE.WebGLState:", t1);
                }
            },
            texImage3D: function() {
                try {
                    t1.texImage3D.apply(t1, arguments);
                } catch (t1) {
                    console.error("THREE.WebGLState:", t1);
                }
            },
            updateUBOMapping: function(e, n) {
                let i = d.get(n);
                void 0 === i && (i = new WeakMap, d.set(n, i));
                let r = i.get(e);
                void 0 === r && (r = t1.getUniformBlockIndex(n, e.name), i.set(e, r));
            },
            uniformBlockBinding: function(e, n) {
                const i = d.get(n).get(e);
                u.get(n) !== i && (t1.uniformBlockBinding(n, i, e.__bindingPointIndex), u.set(n, i));
            },
            texStorage2D: function() {
                try {
                    t1.texStorage2D.apply(t1, arguments);
                } catch (t1) {
                    console.error("THREE.WebGLState:", t1);
                }
            },
            texStorage3D: function() {
                try {
                    t1.texStorage3D.apply(t1, arguments);
                } catch (t1) {
                    console.error("THREE.WebGLState:", t1);
                }
            },
            texSubImage2D: function() {
                try {
                    t1.texSubImage2D.apply(t1, arguments);
                } catch (t1) {
                    console.error("THREE.WebGLState:", t1);
                }
            },
            texSubImage3D: function() {
                try {
                    t1.texSubImage3D.apply(t1, arguments);
                } catch (t1) {
                    console.error("THREE.WebGLState:", t1);
                }
            },
            compressedTexSubImage2D: function() {
                try {
                    t1.compressedTexSubImage2D.apply(t1, arguments);
                } catch (t1) {
                    console.error("THREE.WebGLState:", t1);
                }
            },
            compressedTexSubImage3D: function() {
                try {
                    t1.compressedTexSubImage3D.apply(t1, arguments);
                } catch (t1) {
                    console.error("THREE.WebGLState:", t1);
                }
            },
            scissor: function(e) {
                !1 === V.equals(e) && (t1.scissor(e.x, e.y, e.z, e.w), V.copy(e));
            },
            viewport: function(e) {
                !1 === k.equals(e) && (t1.viewport(e.x, e.y, e.z, e.w), k.copy(e));
            },
            reset: function() {
                t1.disable(t1.BLEND), t1.disable(t1.CULL_FACE), t1.disable(t1.DEPTH_TEST), t1.disable(t1.POLYGON_OFFSET_FILL), t1.disable(t1.SCISSOR_TEST), t1.disable(t1.STENCIL_TEST), t1.disable(t1.SAMPLE_ALPHA_TO_COVERAGE), t1.blendEquation(t1.FUNC_ADD), t1.blendFunc(t1.ONE, t1.ZERO), t1.blendFuncSeparate(t1.ONE, t1.ZERO, t1.ONE, t1.ZERO), t1.blendColor(0, 0, 0, 0), t1.colorMask(!0, !0, !0, !0), t1.clearColor(0, 0, 0, 0), t1.depthMask(!0), t1.depthFunc(t1.LESS), t1.clearDepth(1), t1.stencilMask(4294967295), t1.stencilFunc(t1.ALWAYS, 0, 4294967295), t1.stencilOp(t1.KEEP, t1.KEEP, t1.KEEP), t1.clearStencil(0), t1.cullFace(t1.BACK), t1.frontFace(t1.CCW), t1.polygonOffset(0, 0), t1.activeTexture(t1.TEXTURE0), t1.bindFramebuffer(t1.FRAMEBUFFER, null), !0 === i && (t1.bindFramebuffer(t1.DRAW_FRAMEBUFFER, null), t1.bindFramebuffer(t1.READ_FRAMEBUFFER, null)), t1.useProgram(null), t1.lineWidth(1), t1.scissor(0, 0, t1.canvas.width, t1.canvas.height), t1.viewport(0, 0, t1.canvas.width, t1.canvas.height), p = {}, B = null, z = {}, m = {}, f = new WeakMap, g = [], _ = null, v = !1, x = null, y = null, M = null, S = null, b = null, T = null, E = null, w = new ci(0, 0, 0), A = 0, R = !1, C = null, L = null, P = null, I = null, U = null, V.set(0, 0, t1.canvas.width, t1.canvas.height), k.set(0, 0, t1.canvas.width, t1.canvas.height), r.reset(), s.reset(), h.reset();
            }
        };
    }
    function Xa(t1, e, n, i, r, s, a) {
        const o = r.isWebGL2, l = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, c = "undefined" != typeof navigator && /OculusBrowser/g.test(navigator.userAgent), h = new WeakMap;
        let u;
        const d = new WeakMap;
        let p = !1;
        try {
            p = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
        } catch (t1) {}
        function m(t1, e) {
            return p ? new OffscreenCanvas(t1, e) : ye("canvas");
        }
        function f(t1, e, n, i) {
            let r = 1;
            if ((t1.width > i || t1.height > i) && (r = i / Math.max(t1.width, t1.height)), r < 1 || !0 === e) {
                if ("undefined" != typeof HTMLImageElement && t1 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t1 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t1 instanceof ImageBitmap) {
                    const i = e ? he : Math.floor, s = i(r * t1.width), a = i(r * t1.height);
                    void 0 === u && (u = m(s, a));
                    const o = n ? m(s, a) : u;
                    o.width = s, o.height = a;
                    return o.getContext("2d").drawImage(t1, 0, 0, s, a), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t1.width + "x" + t1.height + ") to (" + s + "x" + a + ")."), o;
                }
                return "data" in t1 && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t1.width + "x" + t1.height + ")."), t1;
            }
            return t1;
        }
        function g(t1) {
            return ce(t1.width) && ce(t1.height);
        }
        function _(t1, e) {
            return t1.generateMipmaps && e && t1.minFilter !== P && t1.minFilter !== D;
        }
        function v(e) {
            t1.generateMipmap(e);
        }
        function x(n, i, r, s, a = !1) {
            if (!1 === o) return i;
            if (null !== n) {
                if (void 0 !== t1[n]) return t1[n];
                console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'");
            }
            let l = i;
            if (i === t1.RED && (r === t1.FLOAT && (l = t1.R32F), r === t1.HALF_FLOAT && (l = t1.R16F), r === t1.UNSIGNED_BYTE && (l = t1.R8)), i === t1.RED_INTEGER && (r === t1.UNSIGNED_BYTE && (l = t1.R8UI), r === t1.UNSIGNED_SHORT && (l = t1.R16UI), r === t1.UNSIGNED_INT && (l = t1.R32UI), r === t1.BYTE && (l = t1.R8I), r === t1.SHORT && (l = t1.R16I), r === t1.INT && (l = t1.R32I)), i === t1.RG && (r === t1.FLOAT && (l = t1.RG32F), r === t1.HALF_FLOAT && (l = t1.RG16F), r === t1.UNSIGNED_BYTE && (l = t1.RG8)), i === t1.RGBA) {
                const e = a ? Wt : Re.getTransfer(s);
                r === t1.FLOAT && (l = t1.RGBA32F), r === t1.HALF_FLOAT && (l = t1.RGBA16F), r === t1.UNSIGNED_BYTE && (l = e === Xt ? t1.SRGB8_ALPHA8 : t1.RGBA8), r === t1.UNSIGNED_SHORT_4_4_4_4 && (l = t1.RGBA4), r === t1.UNSIGNED_SHORT_5_5_5_1 && (l = t1.RGB5_A1);
            }
            return l !== t1.R16F && l !== t1.R32F && l !== t1.RG16F && l !== t1.RG32F && l !== t1.RGBA16F && l !== t1.RGBA32F || e.get("EXT_color_buffer_float"), l;
        }
        function y(t1, e, n) {
            return !0 === _(t1, n) || t1.isFramebufferTexture && t1.minFilter !== P && t1.minFilter !== D ? Math.log2(Math.max(e.width, e.height)) + 1 : void 0 !== t1.mipmaps && t1.mipmaps.length > 0 ? t1.mipmaps.length : t1.isCompressedTexture && Array.isArray(t1.image) ? e.mipmaps.length : 1;
        }
        function M(e) {
            return e === P || e === I || e === U ? t1.NEAREST : t1.LINEAR;
        }
        function S(t1) {
            const e = t1.target;
            e.removeEventListener("dispose", S), function(t1) {
                const e = i.get(t1);
                if (void 0 === e.__webglInit) return;
                const n = t1.source, r = d.get(n);
                if (r) {
                    const i = r[e.__cacheKey];
                    i.usedTimes--, 0 === i.usedTimes && T(t1), 0 === Object.keys(r).length && d.delete(n);
                }
                i.remove(t1);
            }(e), e.isVideoTexture && h.delete(e);
        }
        function b(e) {
            const n = e.target;
            n.removeEventListener("dispose", b), function(e) {
                const n = e.texture, r = i.get(e), s = i.get(n);
                void 0 !== s.__webglTexture && (t1.deleteTexture(s.__webglTexture), a.memory.textures--);
                e.depthTexture && e.depthTexture.dispose();
                if (e.isWebGLCubeRenderTarget) for(let e = 0; e < 6; e++){
                    if (Array.isArray(r.__webglFramebuffer[e])) for(let n = 0; n < r.__webglFramebuffer[e].length; n++)t1.deleteFramebuffer(r.__webglFramebuffer[e][n]);
                    else t1.deleteFramebuffer(r.__webglFramebuffer[e]);
                    r.__webglDepthbuffer && t1.deleteRenderbuffer(r.__webglDepthbuffer[e]);
                }
                else {
                    if (Array.isArray(r.__webglFramebuffer)) for(let e = 0; e < r.__webglFramebuffer.length; e++)t1.deleteFramebuffer(r.__webglFramebuffer[e]);
                    else t1.deleteFramebuffer(r.__webglFramebuffer);
                    if (r.__webglDepthbuffer && t1.deleteRenderbuffer(r.__webglDepthbuffer), r.__webglMultisampledFramebuffer && t1.deleteFramebuffer(r.__webglMultisampledFramebuffer), r.__webglColorRenderbuffer) for(let e = 0; e < r.__webglColorRenderbuffer.length; e++)r.__webglColorRenderbuffer[e] && t1.deleteRenderbuffer(r.__webglColorRenderbuffer[e]);
                    r.__webglDepthRenderbuffer && t1.deleteRenderbuffer(r.__webglDepthRenderbuffer);
                }
                if (e.isWebGLMultipleRenderTargets) for(let e = 0, r = n.length; e < r; e++){
                    const r = i.get(n[e]);
                    r.__webglTexture && (t1.deleteTexture(r.__webglTexture), a.memory.textures--), i.remove(n[e]);
                }
                i.remove(n), i.remove(e);
            }(n);
        }
        function T(e) {
            const n = i.get(e);
            t1.deleteTexture(n.__webglTexture);
            const r = e.source;
            delete d.get(r)[n.__cacheKey], a.memory.textures--;
        }
        let E = 0;
        function w(e, r) {
            const s = i.get(e);
            if (e.isVideoTexture && function(t1) {
                const e = a.render.frame;
                h.get(t1) !== e && (h.set(t1, e), t1.update());
            }(e), !1 === e.isRenderTargetTexture && e.version > 0 && s.__version !== e.version) {
                const t1 = e.image;
                if (null === t1) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
                else {
                    if (!1 !== t1.complete) return void J(s, e, r);
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
                }
            }
            n.bindTexture(t1.TEXTURE_2D, s.__webglTexture, t1.TEXTURE0 + r);
        }
        const A = {
            [R]: t1.REPEAT,
            [C]: t1.CLAMP_TO_EDGE,
            [L]: t1.MIRRORED_REPEAT
        }, z = {
            [P]: t1.NEAREST,
            [I]: t1.NEAREST_MIPMAP_NEAREST,
            [U]: t1.NEAREST_MIPMAP_LINEAR,
            [D]: t1.LINEAR,
            [N]: t1.LINEAR_MIPMAP_NEAREST,
            [O]: t1.LINEAR_MIPMAP_LINEAR
        }, k = {
            512: t1.NEVER,
            519: t1.ALWAYS,
            513: t1.LESS,
            515: t1.LEQUAL,
            514: t1.EQUAL,
            518: t1.GEQUAL,
            516: t1.GREATER,
            517: t1.NOTEQUAL
        };
        function W(n, s, a) {
            if (a ? (t1.texParameteri(n, t1.TEXTURE_WRAP_S, A[s.wrapS]), t1.texParameteri(n, t1.TEXTURE_WRAP_T, A[s.wrapT]), n !== t1.TEXTURE_3D && n !== t1.TEXTURE_2D_ARRAY || t1.texParameteri(n, t1.TEXTURE_WRAP_R, A[s.wrapR]), t1.texParameteri(n, t1.TEXTURE_MAG_FILTER, z[s.magFilter]), t1.texParameteri(n, t1.TEXTURE_MIN_FILTER, z[s.minFilter])) : (t1.texParameteri(n, t1.TEXTURE_WRAP_S, t1.CLAMP_TO_EDGE), t1.texParameteri(n, t1.TEXTURE_WRAP_T, t1.CLAMP_TO_EDGE), n !== t1.TEXTURE_3D && n !== t1.TEXTURE_2D_ARRAY || t1.texParameteri(n, t1.TEXTURE_WRAP_R, t1.CLAMP_TO_EDGE), s.wrapS === C && s.wrapT === C || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t1.texParameteri(n, t1.TEXTURE_MAG_FILTER, M(s.magFilter)), t1.texParameteri(n, t1.TEXTURE_MIN_FILTER, M(s.minFilter)), s.minFilter !== P && s.minFilter !== D && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), s.compareFunction && (t1.texParameteri(n, t1.TEXTURE_COMPARE_MODE, t1.COMPARE_REF_TO_TEXTURE), t1.texParameteri(n, t1.TEXTURE_COMPARE_FUNC, k[s.compareFunction])), !0 === e.has("EXT_texture_filter_anisotropic")) {
                const a = e.get("EXT_texture_filter_anisotropic");
                if (s.magFilter === P) return;
                if (s.minFilter !== U && s.minFilter !== O) return;
                if (s.type === H && !1 === e.has("OES_texture_float_linear")) return;
                if (!1 === o && s.type === V && !1 === e.has("OES_texture_half_float_linear")) return;
                (s.anisotropy > 1 || i.get(s).__currentAnisotropy) && (t1.texParameterf(n, a.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s.anisotropy, r.getMaxAnisotropy())), i.get(s).__currentAnisotropy = s.anisotropy);
            }
        }
        function Z(e, n) {
            let i = !1;
            void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", S));
            const r = n.source;
            let s = d.get(r);
            void 0 === s && (s = {}, d.set(r, s));
            const o = function(t1) {
                const e = [];
                return e.push(t1.wrapS), e.push(t1.wrapT), e.push(t1.wrapR || 0), e.push(t1.magFilter), e.push(t1.minFilter), e.push(t1.anisotropy), e.push(t1.internalFormat), e.push(t1.format), e.push(t1.type), e.push(t1.generateMipmaps), e.push(t1.premultiplyAlpha), e.push(t1.flipY), e.push(t1.unpackAlignment), e.push(t1.colorSpace), e.join();
            }(n);
            if (o !== e.__cacheKey) {
                void 0 === s[o] && (s[o] = {
                    texture: t1.createTexture(),
                    usedTimes: 0
                }, a.memory.textures++, i = !0), s[o].usedTimes++;
                const r = s[e.__cacheKey];
                void 0 !== r && (s[e.__cacheKey].usedTimes--, 0 === r.usedTimes && T(n)), e.__cacheKey = o, e.__webglTexture = s[o].texture;
            }
            return i;
        }
        function J(e, a, l) {
            let c = t1.TEXTURE_2D;
            (a.isDataArrayTexture || a.isCompressedArrayTexture) && (c = t1.TEXTURE_2D_ARRAY), a.isData3DTexture && (c = t1.TEXTURE_3D);
            const h = Z(e, a), u = a.source;
            n.bindTexture(c, e.__webglTexture, t1.TEXTURE0 + l);
            const d = i.get(u);
            if (u.version !== d.__version || !0 === h) {
                n.activeTexture(t1.TEXTURE0 + l);
                const e = Re.getPrimaries(Re.workingColorSpace), i = a.colorSpace === zt ? null : Re.getPrimaries(a.colorSpace), p = a.colorSpace === zt || e === i ? t1.NONE : t1.BROWSER_DEFAULT_WEBGL;
                t1.pixelStorei(t1.UNPACK_FLIP_Y_WEBGL, a.flipY), t1.pixelStorei(t1.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a.premultiplyAlpha), t1.pixelStorei(t1.UNPACK_ALIGNMENT, a.unpackAlignment), t1.pixelStorei(t1.UNPACK_COLORSPACE_CONVERSION_WEBGL, p);
                const m = function(t1) {
                    return !o && (t1.wrapS !== C || t1.wrapT !== C || t1.minFilter !== P && t1.minFilter !== D);
                }(a) && !1 === g(a.image);
                let M = f(a.image, m, !1, r.maxTextureSize);
                M = nt(a, M);
                const S = g(M) || o, b = s.convert(a.format, a.colorSpace);
                let T, E = s.convert(a.type), w = x(a.internalFormat, b, E, a.colorSpace, a.isVideoTexture);
                W(c, a, S);
                const A = a.mipmaps, R = o && !0 !== a.isVideoTexture && w !== at, L = void 0 === d.__version || !0 === h, I = y(a, M, S);
                if (a.isDepthTexture) w = t1.DEPTH_COMPONENT, o ? w = a.type === H ? t1.DEPTH_COMPONENT32F : a.type === G ? t1.DEPTH_COMPONENT24 : a.type === X ? t1.DEPTH24_STENCIL8 : t1.DEPTH_COMPONENT16 : a.type === H && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), a.format === q && w === t1.DEPTH_COMPONENT && a.type !== B && a.type !== G && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), a.type = G, E = s.convert(a.type)), a.format === Y && w === t1.DEPTH_COMPONENT && (w = t1.DEPTH_STENCIL, a.type !== X && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), a.type = X, E = s.convert(a.type))), L && (R ? n.texStorage2D(t1.TEXTURE_2D, 1, w, M.width, M.height) : n.texImage2D(t1.TEXTURE_2D, 0, w, M.width, M.height, 0, b, E, null));
                else if (a.isDataTexture) {
                    if (A.length > 0 && S) {
                        R && L && n.texStorage2D(t1.TEXTURE_2D, I, w, A[0].width, A[0].height);
                        for(let e = 0, i = A.length; e < i; e++)T = A[e], R ? n.texSubImage2D(t1.TEXTURE_2D, e, 0, 0, T.width, T.height, b, E, T.data) : n.texImage2D(t1.TEXTURE_2D, e, w, T.width, T.height, 0, b, E, T.data);
                        a.generateMipmaps = !1;
                    } else R ? (L && n.texStorage2D(t1.TEXTURE_2D, I, w, M.width, M.height), n.texSubImage2D(t1.TEXTURE_2D, 0, 0, 0, M.width, M.height, b, E, M.data)) : n.texImage2D(t1.TEXTURE_2D, 0, w, M.width, M.height, 0, b, E, M.data);
                } else if (a.isCompressedTexture) {
                    if (a.isCompressedArrayTexture) {
                        R && L && n.texStorage3D(t1.TEXTURE_2D_ARRAY, I, w, A[0].width, A[0].height, M.depth);
                        for(let e = 0, i = A.length; e < i; e++)T = A[e], a.format !== j ? null !== b ? R ? n.compressedTexSubImage3D(t1.TEXTURE_2D_ARRAY, e, 0, 0, 0, T.width, T.height, M.depth, b, T.data, 0, 0) : n.compressedTexImage3D(t1.TEXTURE_2D_ARRAY, e, w, T.width, T.height, M.depth, 0, T.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : R ? n.texSubImage3D(t1.TEXTURE_2D_ARRAY, e, 0, 0, 0, T.width, T.height, M.depth, b, E, T.data) : n.texImage3D(t1.TEXTURE_2D_ARRAY, e, w, T.width, T.height, M.depth, 0, b, E, T.data);
                    } else {
                        R && L && n.texStorage2D(t1.TEXTURE_2D, I, w, A[0].width, A[0].height);
                        for(let e = 0, i = A.length; e < i; e++)T = A[e], a.format !== j ? null !== b ? R ? n.compressedTexSubImage2D(t1.TEXTURE_2D, e, 0, 0, T.width, T.height, b, T.data) : n.compressedTexImage2D(t1.TEXTURE_2D, e, w, T.width, T.height, 0, T.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : R ? n.texSubImage2D(t1.TEXTURE_2D, e, 0, 0, T.width, T.height, b, E, T.data) : n.texImage2D(t1.TEXTURE_2D, e, w, T.width, T.height, 0, b, E, T.data);
                    }
                } else if (a.isDataArrayTexture) R ? (L && n.texStorage3D(t1.TEXTURE_2D_ARRAY, I, w, M.width, M.height, M.depth), n.texSubImage3D(t1.TEXTURE_2D_ARRAY, 0, 0, 0, 0, M.width, M.height, M.depth, b, E, M.data)) : n.texImage3D(t1.TEXTURE_2D_ARRAY, 0, w, M.width, M.height, M.depth, 0, b, E, M.data);
                else if (a.isData3DTexture) R ? (L && n.texStorage3D(t1.TEXTURE_3D, I, w, M.width, M.height, M.depth), n.texSubImage3D(t1.TEXTURE_3D, 0, 0, 0, 0, M.width, M.height, M.depth, b, E, M.data)) : n.texImage3D(t1.TEXTURE_3D, 0, w, M.width, M.height, M.depth, 0, b, E, M.data);
                else if (a.isFramebufferTexture) {
                    if (L) {
                        if (R) n.texStorage2D(t1.TEXTURE_2D, I, w, M.width, M.height);
                        else {
                            let e = M.width, i = M.height;
                            for(let r = 0; r < I; r++)n.texImage2D(t1.TEXTURE_2D, r, w, e, i, 0, b, E, null), e >>= 1, i >>= 1;
                        }
                    }
                } else if (A.length > 0 && S) {
                    R && L && n.texStorage2D(t1.TEXTURE_2D, I, w, A[0].width, A[0].height);
                    for(let e = 0, i = A.length; e < i; e++)T = A[e], R ? n.texSubImage2D(t1.TEXTURE_2D, e, 0, 0, b, E, T) : n.texImage2D(t1.TEXTURE_2D, e, w, b, E, T);
                    a.generateMipmaps = !1;
                } else R ? (L && n.texStorage2D(t1.TEXTURE_2D, I, w, M.width, M.height), n.texSubImage2D(t1.TEXTURE_2D, 0, 0, 0, b, E, M)) : n.texImage2D(t1.TEXTURE_2D, 0, w, b, E, M);
                _(a, S) && v(c), d.__version = u.version, a.onUpdate && a.onUpdate(a);
            }
            e.__version = a.version;
        }
        function K(e, r, a, o, c, h) {
            const u = s.convert(a.format, a.colorSpace), d = s.convert(a.type), p = x(a.internalFormat, u, d, a.colorSpace);
            if (!i.get(r).__hasExternalTextures) {
                const e = Math.max(1, r.width >> h), i = Math.max(1, r.height >> h);
                c === t1.TEXTURE_3D || c === t1.TEXTURE_2D_ARRAY ? n.texImage3D(c, h, p, e, i, r.depth, 0, u, d, null) : n.texImage2D(c, h, p, e, i, 0, u, d, null);
            }
            n.bindFramebuffer(t1.FRAMEBUFFER, e), et(r) ? l.framebufferTexture2DMultisampleEXT(t1.FRAMEBUFFER, o, c, i.get(a).__webglTexture, 0, tt(r)) : (c === t1.TEXTURE_2D || c >= t1.TEXTURE_CUBE_MAP_POSITIVE_X && c <= t1.TEXTURE_CUBE_MAP_NEGATIVE_Z) && t1.framebufferTexture2D(t1.FRAMEBUFFER, o, c, i.get(a).__webglTexture, h), n.bindFramebuffer(t1.FRAMEBUFFER, null);
        }
        function $(e, n, i) {
            if (t1.bindRenderbuffer(t1.RENDERBUFFER, e), n.depthBuffer && !n.stencilBuffer) {
                let r = !0 === o ? t1.DEPTH_COMPONENT24 : t1.DEPTH_COMPONENT16;
                if (i || et(n)) {
                    const e = n.depthTexture;
                    e && e.isDepthTexture && (e.type === H ? r = t1.DEPTH_COMPONENT32F : e.type === G && (r = t1.DEPTH_COMPONENT24));
                    const i = tt(n);
                    et(n) ? l.renderbufferStorageMultisampleEXT(t1.RENDERBUFFER, i, r, n.width, n.height) : t1.renderbufferStorageMultisample(t1.RENDERBUFFER, i, r, n.width, n.height);
                } else t1.renderbufferStorage(t1.RENDERBUFFER, r, n.width, n.height);
                t1.framebufferRenderbuffer(t1.FRAMEBUFFER, t1.DEPTH_ATTACHMENT, t1.RENDERBUFFER, e);
            } else if (n.depthBuffer && n.stencilBuffer) {
                const r = tt(n);
                i && !1 === et(n) ? t1.renderbufferStorageMultisample(t1.RENDERBUFFER, r, t1.DEPTH24_STENCIL8, n.width, n.height) : et(n) ? l.renderbufferStorageMultisampleEXT(t1.RENDERBUFFER, r, t1.DEPTH24_STENCIL8, n.width, n.height) : t1.renderbufferStorage(t1.RENDERBUFFER, t1.DEPTH_STENCIL, n.width, n.height), t1.framebufferRenderbuffer(t1.FRAMEBUFFER, t1.DEPTH_STENCIL_ATTACHMENT, t1.RENDERBUFFER, e);
            } else {
                const e = !0 === n.isWebGLMultipleRenderTargets ? n.texture : [
                    n.texture
                ];
                for(let r = 0; r < e.length; r++){
                    const a = e[r], o = s.convert(a.format, a.colorSpace), c = s.convert(a.type), h = x(a.internalFormat, o, c, a.colorSpace), u = tt(n);
                    i && !1 === et(n) ? t1.renderbufferStorageMultisample(t1.RENDERBUFFER, u, h, n.width, n.height) : et(n) ? l.renderbufferStorageMultisampleEXT(t1.RENDERBUFFER, u, h, n.width, n.height) : t1.renderbufferStorage(t1.RENDERBUFFER, h, n.width, n.height);
                }
            }
            t1.bindRenderbuffer(t1.RENDERBUFFER, null);
        }
        function Q(e) {
            const r = i.get(e), s = !0 === e.isWebGLCubeRenderTarget;
            if (e.depthTexture && !r.__autoAllocateDepthBuffer) {
                if (s) throw new Error("target.depthTexture not supported in Cube render targets");
                !function(e, r) {
                    if (r && r.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
                    if (n.bindFramebuffer(t1.FRAMEBUFFER, e), !r.depthTexture || !r.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                    i.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width, r.depthTexture.image.height = r.height, r.depthTexture.needsUpdate = !0), w(r.depthTexture, 0);
                    const s = i.get(r.depthTexture).__webglTexture, a = tt(r);
                    if (r.depthTexture.format === q) et(r) ? l.framebufferTexture2DMultisampleEXT(t1.FRAMEBUFFER, t1.DEPTH_ATTACHMENT, t1.TEXTURE_2D, s, 0, a) : t1.framebufferTexture2D(t1.FRAMEBUFFER, t1.DEPTH_ATTACHMENT, t1.TEXTURE_2D, s, 0);
                    else {
                        if (r.depthTexture.format !== Y) throw new Error("Unknown depthTexture format");
                        et(r) ? l.framebufferTexture2DMultisampleEXT(t1.FRAMEBUFFER, t1.DEPTH_STENCIL_ATTACHMENT, t1.TEXTURE_2D, s, 0, a) : t1.framebufferTexture2D(t1.FRAMEBUFFER, t1.DEPTH_STENCIL_ATTACHMENT, t1.TEXTURE_2D, s, 0);
                    }
                }(r.__webglFramebuffer, e);
            } else if (s) {
                r.__webglDepthbuffer = [];
                for(let i = 0; i < 6; i++)n.bindFramebuffer(t1.FRAMEBUFFER, r.__webglFramebuffer[i]), r.__webglDepthbuffer[i] = t1.createRenderbuffer(), $(r.__webglDepthbuffer[i], e, !1);
            } else n.bindFramebuffer(t1.FRAMEBUFFER, r.__webglFramebuffer), r.__webglDepthbuffer = t1.createRenderbuffer(), $(r.__webglDepthbuffer, e, !1);
            n.bindFramebuffer(t1.FRAMEBUFFER, null);
        }
        function tt(t1) {
            return Math.min(r.maxSamples, t1.samples);
        }
        function et(t1) {
            const n = i.get(t1);
            return o && t1.samples > 0 && !0 === e.has("WEBGL_multisampled_render_to_texture") && !1 !== n.__useRenderToTexture;
        }
        function nt(t1, n) {
            const i = t1.colorSpace, r = t1.format, s = t1.type;
            return !0 === t1.isCompressedTexture || !0 === t1.isVideoTexture || t1.format === Kt || i !== Ht && i !== zt && (Re.getTransfer(i) === Xt ? !1 === o ? !0 === e.has("EXT_sRGB") && r === j ? (t1.format = Kt, t1.minFilter = D, t1.generateMipmaps = !1) : n = Ie.sRGBToLinear(n) : r === j && s === F || console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", i)), n;
        }
        this.allocateTextureUnit = function() {
            const t1 = E;
            return t1 >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + t1 + " texture units while this GPU supports only " + r.maxTextures), E += 1, t1;
        }, this.resetTextureUnits = function() {
            E = 0;
        }, this.setTexture2D = w, this.setTexture2DArray = function(e, r) {
            const s = i.get(e);
            e.version > 0 && s.__version !== e.version ? J(s, e, r) : n.bindTexture(t1.TEXTURE_2D_ARRAY, s.__webglTexture, t1.TEXTURE0 + r);
        }, this.setTexture3D = function(e, r) {
            const s = i.get(e);
            e.version > 0 && s.__version !== e.version ? J(s, e, r) : n.bindTexture(t1.TEXTURE_3D, s.__webglTexture, t1.TEXTURE0 + r);
        }, this.setTextureCube = function(e, a) {
            const l = i.get(e);
            e.version > 0 && l.__version !== e.version ? function(e, a, l) {
                if (6 !== a.image.length) return;
                const c = Z(e, a), h = a.source;
                n.bindTexture(t1.TEXTURE_CUBE_MAP, e.__webglTexture, t1.TEXTURE0 + l);
                const u = i.get(h);
                if (h.version !== u.__version || !0 === c) {
                    n.activeTexture(t1.TEXTURE0 + l);
                    const e = Re.getPrimaries(Re.workingColorSpace), i = a.colorSpace === zt ? null : Re.getPrimaries(a.colorSpace), d = a.colorSpace === zt || e === i ? t1.NONE : t1.BROWSER_DEFAULT_WEBGL;
                    t1.pixelStorei(t1.UNPACK_FLIP_Y_WEBGL, a.flipY), t1.pixelStorei(t1.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a.premultiplyAlpha), t1.pixelStorei(t1.UNPACK_ALIGNMENT, a.unpackAlignment), t1.pixelStorei(t1.UNPACK_COLORSPACE_CONVERSION_WEBGL, d);
                    const p = a.isCompressedTexture || a.image[0].isCompressedTexture, m = a.image[0] && a.image[0].isDataTexture, M = [];
                    for(let t1 = 0; t1 < 6; t1++)M[t1] = p || m ? m ? a.image[t1].image : a.image[t1] : f(a.image[t1], !1, !0, r.maxCubemapSize), M[t1] = nt(a, M[t1]);
                    const S = M[0], b = g(S) || o, T = s.convert(a.format, a.colorSpace), E = s.convert(a.type), w = x(a.internalFormat, T, E, a.colorSpace), A = o && !0 !== a.isVideoTexture, R = void 0 === u.__version || !0 === c;
                    let C, L = y(a, S, b);
                    if (W(t1.TEXTURE_CUBE_MAP, a, b), p) {
                        A && R && n.texStorage2D(t1.TEXTURE_CUBE_MAP, L, w, S.width, S.height);
                        for(let e = 0; e < 6; e++){
                            C = M[e].mipmaps;
                            for(let i = 0; i < C.length; i++){
                                const r = C[i];
                                a.format !== j ? null !== T ? A ? n.compressedTexSubImage2D(t1.TEXTURE_CUBE_MAP_POSITIVE_X + e, i, 0, 0, r.width, r.height, T, r.data) : n.compressedTexImage2D(t1.TEXTURE_CUBE_MAP_POSITIVE_X + e, i, w, r.width, r.height, 0, r.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : A ? n.texSubImage2D(t1.TEXTURE_CUBE_MAP_POSITIVE_X + e, i, 0, 0, r.width, r.height, T, E, r.data) : n.texImage2D(t1.TEXTURE_CUBE_MAP_POSITIVE_X + e, i, w, r.width, r.height, 0, T, E, r.data);
                            }
                        }
                    } else {
                        C = a.mipmaps, A && R && (C.length > 0 && L++, n.texStorage2D(t1.TEXTURE_CUBE_MAP, L, w, M[0].width, M[0].height));
                        for(let e = 0; e < 6; e++)if (m) {
                            A ? n.texSubImage2D(t1.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, 0, 0, M[e].width, M[e].height, T, E, M[e].data) : n.texImage2D(t1.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, w, M[e].width, M[e].height, 0, T, E, M[e].data);
                            for(let i = 0; i < C.length; i++){
                                const r = C[i].image[e].image;
                                A ? n.texSubImage2D(t1.TEXTURE_CUBE_MAP_POSITIVE_X + e, i + 1, 0, 0, r.width, r.height, T, E, r.data) : n.texImage2D(t1.TEXTURE_CUBE_MAP_POSITIVE_X + e, i + 1, w, r.width, r.height, 0, T, E, r.data);
                            }
                        } else {
                            A ? n.texSubImage2D(t1.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, 0, 0, T, E, M[e]) : n.texImage2D(t1.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, w, T, E, M[e]);
                            for(let i = 0; i < C.length; i++){
                                const r = C[i];
                                A ? n.texSubImage2D(t1.TEXTURE_CUBE_MAP_POSITIVE_X + e, i + 1, 0, 0, T, E, r.image[e]) : n.texImage2D(t1.TEXTURE_CUBE_MAP_POSITIVE_X + e, i + 1, w, T, E, r.image[e]);
                            }
                        }
                    }
                    _(a, b) && v(t1.TEXTURE_CUBE_MAP), u.__version = h.version, a.onUpdate && a.onUpdate(a);
                }
                e.__version = a.version;
            }(l, e, a) : n.bindTexture(t1.TEXTURE_CUBE_MAP, l.__webglTexture, t1.TEXTURE0 + a);
        }, this.rebindTextures = function(e, n, r) {
            const s = i.get(e);
            void 0 !== n && K(s.__webglFramebuffer, e, e.texture, t1.COLOR_ATTACHMENT0, t1.TEXTURE_2D, 0), void 0 !== r && Q(e);
        }, this.setupRenderTarget = function(e) {
            const l = e.texture, c = i.get(e), h = i.get(l);
            e.addEventListener("dispose", b), !0 !== e.isWebGLMultipleRenderTargets && (void 0 === h.__webglTexture && (h.__webglTexture = t1.createTexture()), h.__version = l.version, a.memory.textures++);
            const u = !0 === e.isWebGLCubeRenderTarget, d = !0 === e.isWebGLMultipleRenderTargets, p = g(e) || o;
            if (u) {
                c.__webglFramebuffer = [];
                for(let e = 0; e < 6; e++)if (o && l.mipmaps && l.mipmaps.length > 0) {
                    c.__webglFramebuffer[e] = [];
                    for(let n = 0; n < l.mipmaps.length; n++)c.__webglFramebuffer[e][n] = t1.createFramebuffer();
                } else c.__webglFramebuffer[e] = t1.createFramebuffer();
            } else {
                if (o && l.mipmaps && l.mipmaps.length > 0) {
                    c.__webglFramebuffer = [];
                    for(let e = 0; e < l.mipmaps.length; e++)c.__webglFramebuffer[e] = t1.createFramebuffer();
                } else c.__webglFramebuffer = t1.createFramebuffer();
                if (d) {
                    if (r.drawBuffers) {
                        const n = e.texture;
                        for(let e = 0, r = n.length; e < r; e++){
                            const r = i.get(n[e]);
                            void 0 === r.__webglTexture && (r.__webglTexture = t1.createTexture(), a.memory.textures++);
                        }
                    } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
                }
                if (o && e.samples > 0 && !1 === et(e)) {
                    const i = d ? l : [
                        l
                    ];
                    c.__webglMultisampledFramebuffer = t1.createFramebuffer(), c.__webglColorRenderbuffer = [], n.bindFramebuffer(t1.FRAMEBUFFER, c.__webglMultisampledFramebuffer);
                    for(let n = 0; n < i.length; n++){
                        const r = i[n];
                        c.__webglColorRenderbuffer[n] = t1.createRenderbuffer(), t1.bindRenderbuffer(t1.RENDERBUFFER, c.__webglColorRenderbuffer[n]);
                        const a = s.convert(r.format, r.colorSpace), o = s.convert(r.type), l = x(r.internalFormat, a, o, r.colorSpace, !0 === e.isXRRenderTarget), h = tt(e);
                        t1.renderbufferStorageMultisample(t1.RENDERBUFFER, h, l, e.width, e.height), t1.framebufferRenderbuffer(t1.FRAMEBUFFER, t1.COLOR_ATTACHMENT0 + n, t1.RENDERBUFFER, c.__webglColorRenderbuffer[n]);
                    }
                    t1.bindRenderbuffer(t1.RENDERBUFFER, null), e.depthBuffer && (c.__webglDepthRenderbuffer = t1.createRenderbuffer(), $(c.__webglDepthRenderbuffer, e, !0)), n.bindFramebuffer(t1.FRAMEBUFFER, null);
                }
            }
            if (u) {
                n.bindTexture(t1.TEXTURE_CUBE_MAP, h.__webglTexture), W(t1.TEXTURE_CUBE_MAP, l, p);
                for(let n = 0; n < 6; n++)if (o && l.mipmaps && l.mipmaps.length > 0) for(let i = 0; i < l.mipmaps.length; i++)K(c.__webglFramebuffer[n][i], e, l, t1.COLOR_ATTACHMENT0, t1.TEXTURE_CUBE_MAP_POSITIVE_X + n, i);
                else K(c.__webglFramebuffer[n], e, l, t1.COLOR_ATTACHMENT0, t1.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0);
                _(l, p) && v(t1.TEXTURE_CUBE_MAP), n.unbindTexture();
            } else if (d) {
                const r = e.texture;
                for(let s = 0, a = r.length; s < a; s++){
                    const a = r[s], o = i.get(a);
                    n.bindTexture(t1.TEXTURE_2D, o.__webglTexture), W(t1.TEXTURE_2D, a, p), K(c.__webglFramebuffer, e, a, t1.COLOR_ATTACHMENT0 + s, t1.TEXTURE_2D, 0), _(a, p) && v(t1.TEXTURE_2D);
                }
                n.unbindTexture();
            } else {
                let i = t1.TEXTURE_2D;
                if ((e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) && (o ? i = e.isWebGL3DRenderTarget ? t1.TEXTURE_3D : t1.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), n.bindTexture(i, h.__webglTexture), W(i, l, p), o && l.mipmaps && l.mipmaps.length > 0) for(let n = 0; n < l.mipmaps.length; n++)K(c.__webglFramebuffer[n], e, l, t1.COLOR_ATTACHMENT0, i, n);
                else K(c.__webglFramebuffer, e, l, t1.COLOR_ATTACHMENT0, i, 0);
                _(l, p) && v(i), n.unbindTexture();
            }
            e.depthBuffer && Q(e);
        }, this.updateRenderTargetMipmap = function(e) {
            const r = g(e) || o, s = !0 === e.isWebGLMultipleRenderTargets ? e.texture : [
                e.texture
            ];
            for(let a = 0, o = s.length; a < o; a++){
                const o = s[a];
                if (_(o, r)) {
                    const r = e.isWebGLCubeRenderTarget ? t1.TEXTURE_CUBE_MAP : t1.TEXTURE_2D, s = i.get(o).__webglTexture;
                    n.bindTexture(r, s), v(r), n.unbindTexture();
                }
            }
        }, this.updateMultisampleRenderTarget = function(e) {
            if (o && e.samples > 0 && !1 === et(e)) {
                const r = e.isWebGLMultipleRenderTargets ? e.texture : [
                    e.texture
                ], s = e.width, a = e.height;
                let o = t1.COLOR_BUFFER_BIT;
                const l = [], h = e.stencilBuffer ? t1.DEPTH_STENCIL_ATTACHMENT : t1.DEPTH_ATTACHMENT, u = i.get(e), d = !0 === e.isWebGLMultipleRenderTargets;
                if (d) for(let e = 0; e < r.length; e++)n.bindFramebuffer(t1.FRAMEBUFFER, u.__webglMultisampledFramebuffer), t1.framebufferRenderbuffer(t1.FRAMEBUFFER, t1.COLOR_ATTACHMENT0 + e, t1.RENDERBUFFER, null), n.bindFramebuffer(t1.FRAMEBUFFER, u.__webglFramebuffer), t1.framebufferTexture2D(t1.DRAW_FRAMEBUFFER, t1.COLOR_ATTACHMENT0 + e, t1.TEXTURE_2D, null, 0);
                n.bindFramebuffer(t1.READ_FRAMEBUFFER, u.__webglMultisampledFramebuffer), n.bindFramebuffer(t1.DRAW_FRAMEBUFFER, u.__webglFramebuffer);
                for(let n = 0; n < r.length; n++){
                    l.push(t1.COLOR_ATTACHMENT0 + n), e.depthBuffer && l.push(h);
                    const p = void 0 !== u.__ignoreDepthValues && u.__ignoreDepthValues;
                    if (!1 === p && (e.depthBuffer && (o |= t1.DEPTH_BUFFER_BIT), e.stencilBuffer && (o |= t1.STENCIL_BUFFER_BIT)), d && t1.framebufferRenderbuffer(t1.READ_FRAMEBUFFER, t1.COLOR_ATTACHMENT0, t1.RENDERBUFFER, u.__webglColorRenderbuffer[n]), !0 === p && (t1.invalidateFramebuffer(t1.READ_FRAMEBUFFER, [
                        h
                    ]), t1.invalidateFramebuffer(t1.DRAW_FRAMEBUFFER, [
                        h
                    ])), d) {
                        const e = i.get(r[n]).__webglTexture;
                        t1.framebufferTexture2D(t1.DRAW_FRAMEBUFFER, t1.COLOR_ATTACHMENT0, t1.TEXTURE_2D, e, 0);
                    }
                    t1.blitFramebuffer(0, 0, s, a, 0, 0, s, a, o, t1.NEAREST), c && t1.invalidateFramebuffer(t1.READ_FRAMEBUFFER, l);
                }
                if (n.bindFramebuffer(t1.READ_FRAMEBUFFER, null), n.bindFramebuffer(t1.DRAW_FRAMEBUFFER, null), d) for(let e = 0; e < r.length; e++){
                    n.bindFramebuffer(t1.FRAMEBUFFER, u.__webglMultisampledFramebuffer), t1.framebufferRenderbuffer(t1.FRAMEBUFFER, t1.COLOR_ATTACHMENT0 + e, t1.RENDERBUFFER, u.__webglColorRenderbuffer[e]);
                    const s = i.get(r[e]).__webglTexture;
                    n.bindFramebuffer(t1.FRAMEBUFFER, u.__webglFramebuffer), t1.framebufferTexture2D(t1.DRAW_FRAMEBUFFER, t1.COLOR_ATTACHMENT0 + e, t1.TEXTURE_2D, s, 0);
                }
                n.bindFramebuffer(t1.DRAW_FRAMEBUFFER, u.__webglMultisampledFramebuffer);
            }
        }, this.setupDepthRenderbuffer = Q, this.setupFrameBufferTexture = K, this.useMultisampledRTT = et;
    }
    function ja(t1, e, n) {
        const i = n.isWebGL2;
        return {
            convert: function(n, r = "") {
                let s;
                const a = Re.getTransfer(r);
                if (n === F) return t1.UNSIGNED_BYTE;
                if (n === k) return t1.UNSIGNED_SHORT_4_4_4_4;
                if (n === W) return t1.UNSIGNED_SHORT_5_5_5_1;
                if (1010 === n) return t1.BYTE;
                if (1011 === n) return t1.SHORT;
                if (n === B) return t1.UNSIGNED_SHORT;
                if (n === z) return t1.INT;
                if (n === G) return t1.UNSIGNED_INT;
                if (n === H) return t1.FLOAT;
                if (n === V) return i ? t1.HALF_FLOAT : (s = e.get("OES_texture_half_float"), null !== s ? s.HALF_FLOAT_OES : null);
                if (1021 === n) return t1.ALPHA;
                if (n === j) return t1.RGBA;
                if (1024 === n) return t1.LUMINANCE;
                if (1025 === n) return t1.LUMINANCE_ALPHA;
                if (n === q) return t1.DEPTH_COMPONENT;
                if (n === Y) return t1.DEPTH_STENCIL;
                if (n === Kt) return s = e.get("EXT_sRGB"), null !== s ? s.SRGB_ALPHA_EXT : null;
                if (1028 === n) return t1.RED;
                if (n === Z) return t1.RED_INTEGER;
                if (1030 === n) return t1.RG;
                if (n === J) return t1.RG_INTEGER;
                if (n === K) return t1.RGBA_INTEGER;
                if (n === $ || n === Q || n === tt || n === et) {
                    if (a === Xt) {
                        if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), null === s) return null;
                        if (n === $) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                        if (n === Q) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                        if (n === tt) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                        if (n === et) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
                    } else {
                        if (s = e.get("WEBGL_compressed_texture_s3tc"), null === s) return null;
                        if (n === $) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
                        if (n === Q) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                        if (n === tt) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                        if (n === et) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                    }
                }
                if (n === nt || n === it || n === rt || n === st) {
                    if (s = e.get("WEBGL_compressed_texture_pvrtc"), null === s) return null;
                    if (n === nt) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (n === it) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (n === rt) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (n === st) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
                }
                if (n === at) return s = e.get("WEBGL_compressed_texture_etc1"), null !== s ? s.COMPRESSED_RGB_ETC1_WEBGL : null;
                if (n === ot || n === lt) {
                    if (s = e.get("WEBGL_compressed_texture_etc"), null === s) return null;
                    if (n === ot) return a === Xt ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
                    if (n === lt) return a === Xt ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
                }
                if (n === ct || n === ht || n === ut || n === dt || n === pt || n === mt || n === ft || n === gt || n === _t || n === vt || n === xt || n === yt || n === Mt || n === St) {
                    if (s = e.get("WEBGL_compressed_texture_astc"), null === s) return null;
                    if (n === ct) return a === Xt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
                    if (n === ht) return a === Xt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
                    if (n === ut) return a === Xt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
                    if (n === dt) return a === Xt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
                    if (n === pt) return a === Xt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
                    if (n === mt) return a === Xt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
                    if (n === ft) return a === Xt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
                    if (n === gt) return a === Xt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
                    if (n === _t) return a === Xt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
                    if (n === vt) return a === Xt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
                    if (n === xt) return a === Xt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
                    if (n === yt) return a === Xt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
                    if (n === Mt) return a === Xt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
                    if (n === St) return a === Xt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
                }
                if (n === bt || n === Tt || n === Et) {
                    if (s = e.get("EXT_texture_compression_bptc"), null === s) return null;
                    if (n === bt) return a === Xt ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
                    if (n === Tt) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
                    if (n === Et) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
                }
                if (36283 === n || n === wt || n === At || n === Rt) {
                    if (s = e.get("EXT_texture_compression_rgtc"), null === s) return null;
                    if (n === bt) return s.COMPRESSED_RED_RGTC1_EXT;
                    if (n === wt) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
                    if (n === At) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
                    if (n === Rt) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
                }
                return n === X ? i ? t1.UNSIGNED_INT_24_8 : (s = e.get("WEBGL_depth_texture"), null !== s ? s.UNSIGNED_INT_24_8_WEBGL : null) : void 0 !== t1[n] ? t1[n] : null;
            }
        };
    }
    class qa extends sr {
        constructor(t1 = []){
            super(), this.isArrayCamera = !0, this.cameras = t1;
        }
    }
    class Ya extends jn {
        constructor(){
            super(), this.isGroup = !0, this.type = "Group";
        }
    }
    const Za = {
        type: "move"
    };
    class Ja {
        constructor(){
            this._targetRay = null, this._grip = null, this._hand = null;
        }
        getHandSpace() {
            return null === this._hand && (this._hand = new Ya, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
                pinching: !1
            }), this._hand;
        }
        getTargetRaySpace() {
            return null === this._targetRay && (this._targetRay = new Ya, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new We, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new We), this._targetRay;
        }
        getGripSpace() {
            return null === this._grip && (this._grip = new Ya, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new We, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new We), this._grip;
        }
        dispatchEvent(t1) {
            return null !== this._targetRay && this._targetRay.dispatchEvent(t1), null !== this._grip && this._grip.dispatchEvent(t1), null !== this._hand && this._hand.dispatchEvent(t1), this;
        }
        connect(t1) {
            if (t1 && t1.hand) {
                const e = this._hand;
                if (e) for (const n of t1.hand.values())this._getHandJoint(e, n);
            }
            return this.dispatchEvent({
                type: "connected",
                data: t1
            }), this;
        }
        disconnect(t1) {
            return this.dispatchEvent({
                type: "disconnected",
                data: t1
            }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this;
        }
        update(t1, e, n) {
            let i = null, r = null, s = null;
            const a = this._targetRay, o = this._grip, l = this._hand;
            if (t1 && "visible-blurred" !== e.session.visibilityState) {
                if (l && t1.hand) {
                    s = !0;
                    for (const i of t1.hand.values()){
                        const t1 = e.getJointPose(i, n), r = this._getHandJoint(l, i);
                        null !== t1 && (r.matrix.fromArray(t1.transform.matrix), r.matrix.decompose(r.position, r.rotation, r.scale), r.matrixWorldNeedsUpdate = !0, r.jointRadius = t1.radius), r.visible = null !== t1;
                    }
                    const i = l.joints["index-finger-tip"], r = l.joints["thumb-tip"], a = i.position.distanceTo(r.position), o = .02, c = .005;
                    l.inputState.pinching && a > o + c ? (l.inputState.pinching = !1, this.dispatchEvent({
                        type: "pinchend",
                        handedness: t1.handedness,
                        target: this
                    })) : !l.inputState.pinching && a <= o - c && (l.inputState.pinching = !0, this.dispatchEvent({
                        type: "pinchstart",
                        handedness: t1.handedness,
                        target: this
                    }));
                } else null !== o && t1.gripSpace && (r = e.getPose(t1.gripSpace, n), null !== r && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1));
                null !== a && (i = e.getPose(t1.targetRaySpace, n), null === i && null !== r && (i = r), null !== i && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Za)));
            }
            return null !== a && (a.visible = null !== i), null !== o && (o.visible = null !== r), null !== l && (l.visible = null !== s), this;
        }
        _getHandJoint(t1, e) {
            if (void 0 === t1.joints[e.jointName]) {
                const n = new Ya;
                n.matrixAutoUpdate = !1, n.visible = !1, t1.joints[e.jointName] = n, t1.add(n);
            }
            return t1.joints[e.jointName];
        }
    }
    class Ka extends te {
        constructor(t1, e){
            super();
            const n = this;
            let i = null, r = 1, s = null, a = "local-floor", o = 1, l = null, c = null, h = null, u = null, d = null, p = null;
            const m = e.getContextAttributes();
            let f = null, g = null;
            const _ = [], v = [], x = new me;
            let y = null;
            const M = new sr;
            M.layers.enable(1), M.viewport = new Be;
            const S = new sr;
            S.layers.enable(2), S.viewport = new Be;
            const b = [
                M,
                S
            ], T = new qa;
            T.layers.enable(1), T.layers.enable(2);
            let E = null, w = null;
            function A(t1) {
                const e = v.indexOf(t1.inputSource);
                if (-1 === e) return;
                const n = _[e];
                void 0 !== n && (n.update(t1.inputSource, t1.frame, l || s), n.dispatchEvent({
                    type: t1.type,
                    data: t1.inputSource
                }));
            }
            function R() {
                i.removeEventListener("select", A), i.removeEventListener("selectstart", A), i.removeEventListener("selectend", A), i.removeEventListener("squeeze", A), i.removeEventListener("squeezestart", A), i.removeEventListener("squeezeend", A), i.removeEventListener("end", R), i.removeEventListener("inputsourceschange", C);
                for(let t1 = 0; t1 < _.length; t1++){
                    const e = v[t1];
                    null !== e && (v[t1] = null, _[t1].disconnect(e));
                }
                E = null, w = null, t1.setRenderTarget(f), d = null, u = null, h = null, i = null, g = null, D.stop(), n.isPresenting = !1, t1.setPixelRatio(y), t1.setSize(x.width, x.height, !1), n.dispatchEvent({
                    type: "sessionend"
                });
            }
            function C(t1) {
                for(let e = 0; e < t1.removed.length; e++){
                    const n = t1.removed[e], i = v.indexOf(n);
                    i >= 0 && (v[i] = null, _[i].disconnect(n));
                }
                for(let e = 0; e < t1.added.length; e++){
                    const n = t1.added[e];
                    let i = v.indexOf(n);
                    if (-1 === i) {
                        for(let t1 = 0; t1 < _.length; t1++){
                            if (t1 >= v.length) {
                                v.push(n), i = t1;
                                break;
                            }
                            if (null === v[t1]) {
                                v[t1] = n, i = t1;
                                break;
                            }
                        }
                        if (-1 === i) break;
                    }
                    const r = _[i];
                    r && r.connect(n);
                }
            }
            this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(t1) {
                let e = _[t1];
                return void 0 === e && (e = new Ja, _[t1] = e), e.getTargetRaySpace();
            }, this.getControllerGrip = function(t1) {
                let e = _[t1];
                return void 0 === e && (e = new Ja, _[t1] = e), e.getGripSpace();
            }, this.getHand = function(t1) {
                let e = _[t1];
                return void 0 === e && (e = new Ja, _[t1] = e), e.getHandSpace();
            }, this.setFramebufferScaleFactor = function(t1) {
                r = t1, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
            }, this.setReferenceSpaceType = function(t1) {
                a = t1, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
            }, this.getReferenceSpace = function() {
                return l || s;
            }, this.setReferenceSpace = function(t1) {
                l = t1;
            }, this.getBaseLayer = function() {
                return null !== u ? u : d;
            }, this.getBinding = function() {
                return h;
            }, this.getFrame = function() {
                return p;
            }, this.getSession = function() {
                return i;
            }, this.setSession = async function(c) {
                if (i = c, null !== i) {
                    if (f = t1.getRenderTarget(), i.addEventListener("select", A), i.addEventListener("selectstart", A), i.addEventListener("selectend", A), i.addEventListener("squeeze", A), i.addEventListener("squeezestart", A), i.addEventListener("squeezeend", A), i.addEventListener("end", R), i.addEventListener("inputsourceschange", C), !0 !== m.xrCompatible && await e.makeXRCompatible(), y = t1.getPixelRatio(), t1.getSize(x), void 0 === i.renderState.layers || !1 === t1.capabilities.isWebGL2) {
                        const n = {
                            antialias: void 0 !== i.renderState.layers || m.antialias,
                            alpha: !0,
                            depth: m.depth,
                            stencil: m.stencil,
                            framebufferScaleFactor: r
                        };
                        d = new XRWebGLLayer(i, e, n), i.updateRenderState({
                            baseLayer: d
                        }), t1.setPixelRatio(1), t1.setSize(d.framebufferWidth, d.framebufferHeight, !1), g = new Ge(d.framebufferWidth, d.framebufferHeight, {
                            format: j,
                            type: F,
                            colorSpace: t1.outputColorSpace,
                            stencilBuffer: m.stencil
                        });
                    } else {
                        let n = null, s = null, a = null;
                        m.depth && (a = m.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, n = m.stencil ? Y : q, s = m.stencil ? X : G);
                        const o = {
                            colorFormat: e.RGBA8,
                            depthFormat: a,
                            scaleFactor: r
                        };
                        h = new XRWebGLBinding(i, e), u = h.createProjectionLayer(o), i.updateRenderState({
                            layers: [
                                u
                            ]
                        }), t1.setPixelRatio(1), t1.setSize(u.textureWidth, u.textureHeight, !1), g = new Ge(u.textureWidth, u.textureHeight, {
                            format: j,
                            type: F,
                            depthTexture: new ns(u.textureWidth, u.textureHeight, s, void 0, void 0, void 0, void 0, void 0, void 0, n),
                            stencilBuffer: m.stencil,
                            colorSpace: t1.outputColorSpace,
                            samples: m.antialias ? 4 : 0
                        });
                        t1.properties.get(g).__ignoreDepthValues = u.ignoreDepthValues;
                    }
                    g.isXRRenderTarget = !0, this.setFoveation(o), l = null, s = await i.requestReferenceSpace(a), D.setContext(i), D.start(), n.isPresenting = !0, n.dispatchEvent({
                        type: "sessionstart"
                    });
                }
            }, this.getEnvironmentBlendMode = function() {
                if (null !== i) return i.environmentBlendMode;
            };
            const L = new We, P = new We;
            function I(t1, e) {
                null === e ? t1.matrixWorld.copy(t1.matrix) : t1.matrixWorld.multiplyMatrices(e.matrixWorld, t1.matrix), t1.matrixWorldInverse.copy(t1.matrixWorld).invert();
            }
            this.updateCamera = function(t1) {
                if (null === i) return;
                T.near = S.near = M.near = t1.near, T.far = S.far = M.far = t1.far, E === T.near && w === T.far || (i.updateRenderState({
                    depthNear: T.near,
                    depthFar: T.far
                }), E = T.near, w = T.far);
                const e = t1.parent, n = T.cameras;
                I(T, e);
                for(let t1 = 0; t1 < n.length; t1++)I(n[t1], e);
                2 === n.length ? function(t1, e, n) {
                    L.setFromMatrixPosition(e.matrixWorld), P.setFromMatrixPosition(n.matrixWorld);
                    const i = L.distanceTo(P), r = e.projectionMatrix.elements, s = n.projectionMatrix.elements, a = r[14] / (r[10] - 1), o = r[14] / (r[10] + 1), l = (r[9] + 1) / r[5], c = (r[9] - 1) / r[5], h = (r[8] - 1) / r[0], u = (s[8] + 1) / s[0], d = a * h, p = a * u, m = i / (-h + u), f = m * -h;
                    e.matrixWorld.decompose(t1.position, t1.quaternion, t1.scale), t1.translateX(f), t1.translateZ(m), t1.matrixWorld.compose(t1.position, t1.quaternion, t1.scale), t1.matrixWorldInverse.copy(t1.matrixWorld).invert();
                    const g = a + m, _ = o + m, v = d - f, x = p + (i - f), y = l * o / _ * g, M = c * o / _ * g;
                    t1.projectionMatrix.makePerspective(v, x, y, M, g, _), t1.projectionMatrixInverse.copy(t1.projectionMatrix).invert();
                }(T, M, S) : T.projectionMatrix.copy(M.projectionMatrix), function(t1, e, n) {
                    null === n ? t1.matrix.copy(e.matrixWorld) : (t1.matrix.copy(n.matrixWorld), t1.matrix.invert(), t1.matrix.multiply(e.matrixWorld));
                    t1.matrix.decompose(t1.position, t1.quaternion, t1.scale), t1.updateMatrixWorld(!0), t1.projectionMatrix.copy(e.projectionMatrix), t1.projectionMatrixInverse.copy(e.projectionMatrixInverse), t1.isPerspectiveCamera && (t1.fov = 2 * re * Math.atan(1 / t1.projectionMatrix.elements[5]), t1.zoom = 1);
                }(t1, T, e);
            }, this.getCamera = function() {
                return T;
            }, this.getFoveation = function() {
                if (null !== u || null !== d) return o;
            }, this.setFoveation = function(t1) {
                o = t1, null !== u && (u.fixedFoveation = t1), null !== d && void 0 !== d.fixedFoveation && (d.fixedFoveation = t1);
            };
            let U = null;
            const D = new _r;
            D.setAnimationLoop(function(e, i) {
                if (c = i.getViewerPose(l || s), p = i, null !== c) {
                    const e = c.views;
                    null !== d && (t1.setRenderTargetFramebuffer(g, d.framebuffer), t1.setRenderTarget(g));
                    let n = !1;
                    e.length !== T.cameras.length && (T.cameras.length = 0, n = !0);
                    for(let i = 0; i < e.length; i++){
                        const r = e[i];
                        let s = null;
                        if (null !== d) s = d.getViewport(r);
                        else {
                            const e = h.getViewSubImage(u, r);
                            s = e.viewport, 0 === i && (t1.setRenderTargetTextures(g, e.colorTexture, u.ignoreDepthValues ? void 0 : e.depthStencilTexture), t1.setRenderTarget(g));
                        }
                        let a = b[i];
                        void 0 === a && (a = new sr, a.layers.enable(i), a.viewport = new Be, b[i] = a), a.matrix.fromArray(r.transform.matrix), a.matrix.decompose(a.position, a.quaternion, a.scale), a.projectionMatrix.fromArray(r.projectionMatrix), a.projectionMatrixInverse.copy(a.projectionMatrix).invert(), a.viewport.set(s.x, s.y, s.width, s.height), 0 === i && (T.matrix.copy(a.matrix), T.matrix.decompose(T.position, T.quaternion, T.scale)), !0 === n && T.cameras.push(a);
                    }
                }
                for(let t1 = 0; t1 < _.length; t1++){
                    const e = v[t1], n = _[t1];
                    null !== e && void 0 !== n && n.update(e, i, l || s);
                }
                U && U(e, i), i.detectedPlanes && n.dispatchEvent({
                    type: "planesdetected",
                    data: i
                }), p = null;
            }), this.setAnimationLoop = function(t1) {
                U = t1;
            }, this.dispose = function() {};
        }
    }
    function $a(t1, e) {
        function n(t1, e) {
            !0 === t1.matrixAutoUpdate && t1.updateMatrix(), e.value.copy(t1.matrix);
        }
        function i(i, r) {
            i.opacity.value = r.opacity, r.color && i.diffuse.value.copy(r.color), r.emissive && i.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity), r.map && (i.map.value = r.map, n(r.map, i.mapTransform)), r.alphaMap && (i.alphaMap.value = r.alphaMap, n(r.alphaMap, i.alphaMapTransform)), r.bumpMap && (i.bumpMap.value = r.bumpMap, n(r.bumpMap, i.bumpMapTransform), i.bumpScale.value = r.bumpScale, r.side === a && (i.bumpScale.value *= -1)), r.normalMap && (i.normalMap.value = r.normalMap, n(r.normalMap, i.normalMapTransform), i.normalScale.value.copy(r.normalScale), r.side === a && i.normalScale.value.negate()), r.displacementMap && (i.displacementMap.value = r.displacementMap, n(r.displacementMap, i.displacementMapTransform), i.displacementScale.value = r.displacementScale, i.displacementBias.value = r.displacementBias), r.emissiveMap && (i.emissiveMap.value = r.emissiveMap, n(r.emissiveMap, i.emissiveMapTransform)), r.specularMap && (i.specularMap.value = r.specularMap, n(r.specularMap, i.specularMapTransform)), r.alphaTest > 0 && (i.alphaTest.value = r.alphaTest);
            const s = e.get(r).envMap;
            if (s && (i.envMap.value = s, i.flipEnvMap.value = s.isCubeTexture && !1 === s.isRenderTargetTexture ? -1 : 1, i.reflectivity.value = r.reflectivity, i.ior.value = r.ior, i.refractionRatio.value = r.refractionRatio), r.lightMap) {
                i.lightMap.value = r.lightMap;
                const e = !0 === t1._useLegacyLights ? Math.PI : 1;
                i.lightMapIntensity.value = r.lightMapIntensity * e, n(r.lightMap, i.lightMapTransform);
            }
            r.aoMap && (i.aoMap.value = r.aoMap, i.aoMapIntensity.value = r.aoMapIntensity, n(r.aoMap, i.aoMapTransform));
        }
        return {
            refreshFogUniforms: function(e, n) {
                n.color.getRGB(e.fogColor.value, er(t1)), n.isFog ? (e.fogNear.value = n.near, e.fogFar.value = n.far) : n.isFogExp2 && (e.fogDensity.value = n.density);
            },
            refreshMaterialUniforms: function(t1, r, s, o, l) {
                r.isMeshBasicMaterial || r.isMeshLambertMaterial ? i(t1, r) : r.isMeshToonMaterial ? (i(t1, r), function(t1, e) {
                    e.gradientMap && (t1.gradientMap.value = e.gradientMap);
                }(t1, r)) : r.isMeshPhongMaterial ? (i(t1, r), function(t1, e) {
                    t1.specular.value.copy(e.specular), t1.shininess.value = Math.max(e.shininess, 1e-4);
                }(t1, r)) : r.isMeshStandardMaterial ? (i(t1, r), function(t1, i) {
                    t1.metalness.value = i.metalness, i.metalnessMap && (t1.metalnessMap.value = i.metalnessMap, n(i.metalnessMap, t1.metalnessMapTransform));
                    t1.roughness.value = i.roughness, i.roughnessMap && (t1.roughnessMap.value = i.roughnessMap, n(i.roughnessMap, t1.roughnessMapTransform));
                    const r = e.get(i).envMap;
                    r && (t1.envMapIntensity.value = i.envMapIntensity);
                }(t1, r), r.isMeshPhysicalMaterial && function(t1, e, i) {
                    t1.ior.value = e.ior, e.sheen > 0 && (t1.sheenColor.value.copy(e.sheenColor).multiplyScalar(e.sheen), t1.sheenRoughness.value = e.sheenRoughness, e.sheenColorMap && (t1.sheenColorMap.value = e.sheenColorMap, n(e.sheenColorMap, t1.sheenColorMapTransform)), e.sheenRoughnessMap && (t1.sheenRoughnessMap.value = e.sheenRoughnessMap, n(e.sheenRoughnessMap, t1.sheenRoughnessMapTransform)));
                    e.clearcoat > 0 && (t1.clearcoat.value = e.clearcoat, t1.clearcoatRoughness.value = e.clearcoatRoughness, e.clearcoatMap && (t1.clearcoatMap.value = e.clearcoatMap, n(e.clearcoatMap, t1.clearcoatMapTransform)), e.clearcoatRoughnessMap && (t1.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap, n(e.clearcoatRoughnessMap, t1.clearcoatRoughnessMapTransform)), e.clearcoatNormalMap && (t1.clearcoatNormalMap.value = e.clearcoatNormalMap, n(e.clearcoatNormalMap, t1.clearcoatNormalMapTransform), t1.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), e.side === a && t1.clearcoatNormalScale.value.negate()));
                    e.iridescence > 0 && (t1.iridescence.value = e.iridescence, t1.iridescenceIOR.value = e.iridescenceIOR, t1.iridescenceThicknessMinimum.value = e.iridescenceThicknessRange[0], t1.iridescenceThicknessMaximum.value = e.iridescenceThicknessRange[1], e.iridescenceMap && (t1.iridescenceMap.value = e.iridescenceMap, n(e.iridescenceMap, t1.iridescenceMapTransform)), e.iridescenceThicknessMap && (t1.iridescenceThicknessMap.value = e.iridescenceThicknessMap, n(e.iridescenceThicknessMap, t1.iridescenceThicknessMapTransform)));
                    e.transmission > 0 && (t1.transmission.value = e.transmission, t1.transmissionSamplerMap.value = i.texture, t1.transmissionSamplerSize.value.set(i.width, i.height), e.transmissionMap && (t1.transmissionMap.value = e.transmissionMap, n(e.transmissionMap, t1.transmissionMapTransform)), t1.thickness.value = e.thickness, e.thicknessMap && (t1.thicknessMap.value = e.thicknessMap, n(e.thicknessMap, t1.thicknessMapTransform)), t1.attenuationDistance.value = e.attenuationDistance, t1.attenuationColor.value.copy(e.attenuationColor));
                    e.anisotropy > 0 && (t1.anisotropyVector.value.set(e.anisotropy * Math.cos(e.anisotropyRotation), e.anisotropy * Math.sin(e.anisotropyRotation)), e.anisotropyMap && (t1.anisotropyMap.value = e.anisotropyMap, n(e.anisotropyMap, t1.anisotropyMapTransform)));
                    t1.specularIntensity.value = e.specularIntensity, t1.specularColor.value.copy(e.specularColor), e.specularColorMap && (t1.specularColorMap.value = e.specularColorMap, n(e.specularColorMap, t1.specularColorMapTransform));
                    e.specularIntensityMap && (t1.specularIntensityMap.value = e.specularIntensityMap, n(e.specularIntensityMap, t1.specularIntensityMapTransform));
                }(t1, r, l)) : r.isMeshMatcapMaterial ? (i(t1, r), function(t1, e) {
                    e.matcap && (t1.matcap.value = e.matcap);
                }(t1, r)) : r.isMeshDepthMaterial ? i(t1, r) : r.isMeshDistanceMaterial ? (i(t1, r), function(t1, n) {
                    const i = e.get(n).light;
                    t1.referencePosition.value.setFromMatrixPosition(i.matrixWorld), t1.nearDistance.value = i.shadow.camera.near, t1.farDistance.value = i.shadow.camera.far;
                }(t1, r)) : r.isMeshNormalMaterial ? i(t1, r) : r.isLineBasicMaterial ? (function(t1, e) {
                    t1.diffuse.value.copy(e.color), t1.opacity.value = e.opacity, e.map && (t1.map.value = e.map, n(e.map, t1.mapTransform));
                }(t1, r), r.isLineDashedMaterial && function(t1, e) {
                    t1.dashSize.value = e.dashSize, t1.totalSize.value = e.dashSize + e.gapSize, t1.scale.value = e.scale;
                }(t1, r)) : r.isPointsMaterial ? function(t1, e, i, r) {
                    t1.diffuse.value.copy(e.color), t1.opacity.value = e.opacity, t1.size.value = e.size * i, t1.scale.value = .5 * r, e.map && (t1.map.value = e.map, n(e.map, t1.uvTransform));
                    e.alphaMap && (t1.alphaMap.value = e.alphaMap, n(e.alphaMap, t1.alphaMapTransform));
                    e.alphaTest > 0 && (t1.alphaTest.value = e.alphaTest);
                }(t1, r, s, o) : r.isSpriteMaterial ? function(t1, e) {
                    t1.diffuse.value.copy(e.color), t1.opacity.value = e.opacity, t1.rotation.value = e.rotation, e.map && (t1.map.value = e.map, n(e.map, t1.mapTransform));
                    e.alphaMap && (t1.alphaMap.value = e.alphaMap, n(e.alphaMap, t1.alphaMapTransform));
                    e.alphaTest > 0 && (t1.alphaTest.value = e.alphaTest);
                }(t1, r) : r.isShadowMaterial ? (t1.color.value.copy(r.color), t1.opacity.value = r.opacity) : r.isShaderMaterial && (r.uniformsNeedUpdate = !1);
            }
        };
    }
    function Qa(t1, e, n, i) {
        let r = {}, s = {}, a = [];
        const o = n.isWebGL2 ? t1.getParameter(t1.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
        function l(t1, e, n, i) {
            const r = t1.value, s = e + "_" + n;
            if (void 0 === i[s]) return i[s] = "number" == typeof r || "boolean" == typeof r ? r : r.clone(), !0;
            {
                const t1 = i[s];
                if ("number" == typeof r || "boolean" == typeof r) {
                    if (t1 !== r) return i[s] = r, !0;
                } else if (!1 === t1.equals(r)) return t1.copy(r), !0;
            }
            return !1;
        }
        function c(t1) {
            const e = {
                boundary: 0,
                storage: 0
            };
            return "number" == typeof t1 || "boolean" == typeof t1 ? (e.boundary = 4, e.storage = 4) : t1.isVector2 ? (e.boundary = 8, e.storage = 8) : t1.isVector3 || t1.isColor ? (e.boundary = 16, e.storage = 12) : t1.isVector4 ? (e.boundary = 16, e.storage = 16) : t1.isMatrix3 ? (e.boundary = 48, e.storage = 48) : t1.isMatrix4 ? (e.boundary = 64, e.storage = 64) : t1.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", t1), e;
        }
        function h(e) {
            const n = e.target;
            n.removeEventListener("dispose", h);
            const i = a.indexOf(n.__bindingPointIndex);
            a.splice(i, 1), t1.deleteBuffer(r[n.id]), delete r[n.id], delete s[n.id];
        }
        return {
            bind: function(t1, e) {
                const n = e.program;
                i.uniformBlockBinding(t1, n);
            },
            update: function(n, u) {
                let d = r[n.id];
                void 0 === d && (!function(t1) {
                    const e = t1.uniforms;
                    let n = 0;
                    const i = 16;
                    for(let t1 = 0, r = e.length; t1 < r; t1++){
                        const r = Array.isArray(e[t1]) ? e[t1] : [
                            e[t1]
                        ];
                        for(let t1 = 0, e = r.length; t1 < e; t1++){
                            const e = r[t1], s = Array.isArray(e.value) ? e.value : [
                                e.value
                            ];
                            for(let t1 = 0, r = s.length; t1 < r; t1++){
                                const r = c(s[t1]), a = n % i;
                                0 !== a && i - a < r.boundary && (n += i - a), e.__data = new Float32Array(r.storage / Float32Array.BYTES_PER_ELEMENT), e.__offset = n, n += r.storage;
                            }
                        }
                    }
                    const r = n % i;
                    r > 0 && (n += i - r);
                    t1.__size = n, t1.__cache = {};
                }(n), d = function(e) {
                    const n = function() {
                        for(let t1 = 0; t1 < o; t1++)if (-1 === a.indexOf(t1)) return a.push(t1), t1;
                        return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
                    }();
                    e.__bindingPointIndex = n;
                    const i = t1.createBuffer(), r = e.__size, s = e.usage;
                    return t1.bindBuffer(t1.UNIFORM_BUFFER, i), t1.bufferData(t1.UNIFORM_BUFFER, r, s), t1.bindBuffer(t1.UNIFORM_BUFFER, null), t1.bindBufferBase(t1.UNIFORM_BUFFER, n, i), i;
                }(n), r[n.id] = d, n.addEventListener("dispose", h));
                const p = u.program;
                i.updateUBOMapping(n, p);
                const m = e.render.frame;
                s[n.id] !== m && (!function(e) {
                    const n = r[e.id], i = e.uniforms, s = e.__cache;
                    t1.bindBuffer(t1.UNIFORM_BUFFER, n);
                    for(let e = 0, n = i.length; e < n; e++){
                        const n = Array.isArray(i[e]) ? i[e] : [
                            i[e]
                        ];
                        for(let i = 0, r = n.length; i < r; i++){
                            const r = n[i];
                            if (!0 === l(r, e, i, s)) {
                                const e = r.__offset, n = Array.isArray(r.value) ? r.value : [
                                    r.value
                                ];
                                let i = 0;
                                for(let s = 0; s < n.length; s++){
                                    const a = n[s], o = c(a);
                                    "number" == typeof a || "boolean" == typeof a ? (r.__data[0] = a, t1.bufferSubData(t1.UNIFORM_BUFFER, e + i, r.__data)) : a.isMatrix3 ? (r.__data[0] = a.elements[0], r.__data[1] = a.elements[1], r.__data[2] = a.elements[2], r.__data[3] = 0, r.__data[4] = a.elements[3], r.__data[5] = a.elements[4], r.__data[6] = a.elements[5], r.__data[7] = 0, r.__data[8] = a.elements[6], r.__data[9] = a.elements[7], r.__data[10] = a.elements[8], r.__data[11] = 0) : (a.toArray(r.__data, i), i += o.storage / Float32Array.BYTES_PER_ELEMENT);
                                }
                                t1.bufferSubData(t1.UNIFORM_BUFFER, e, r.__data);
                            }
                        }
                    }
                    t1.bindBuffer(t1.UNIFORM_BUFFER, null);
                }(n), s[n.id] = m);
            },
            dispose: function() {
                for(const e in r)t1.deleteBuffer(r[e]);
                a = [], r = {}, s = {};
            }
        };
    }
    class to {
        constructor(t1 = {}){
            const { canvas: n = Me(), context: i = null, depth: r = !0, stencil: o = !0, alpha: l = !1, antialias: c = !1, premultipliedAlpha: h = !0, preserveDrawingBuffer: u = !1, powerPreference: d = "default", failIfMajorPerformanceCaveat: m = !1 } = t1;
            let f;
            this.isWebGLRenderer = !0, f = null !== i ? i.getContextAttributes().alpha : l;
            const g = new Uint32Array(4), _ = new Int32Array(4);
            let v = null, x = null;
            const y = [], M = [];
            this.domElement = n, this.debug = {
                checkShaderErrors: !0,
                onShaderError: null
            }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = Gt, this._useLegacyLights = !1, this.toneMapping = p, this.toneMappingExposure = 1;
            const S = this;
            let b = !1, T = 0, E = 0, w = null, A = -1, R = null;
            const C = new Be, L = new Be;
            let P = null;
            const I = new ci(0);
            let U = 0, D = n.width, N = n.height, z = 1, q = null, Y = null;
            const $ = new Be(0, 0, D, N), Q = new Be(0, 0, D, N);
            let tt = !1;
            const et = new gr;
            let nt = !1, it = !1, rt = null;
            const st = new Mn, at = new me, ot = new We, lt = {
                background: null,
                fog: null,
                environment: null,
                overrideMaterial: null,
                isScene: !0
            };
            function ct() {
                return null === w ? z : 1;
            }
            let ht, ut, dt, pt, mt, ft, gt, _t, vt, xt, yt, Mt, St, bt, Tt, Et, wt, At, Rt, Ct, Lt, Pt, It, Ut, Dt = i;
            function Nt(t1, e) {
                for(let i = 0; i < t1.length; i++){
                    const r = t1[i], s = n.getContext(r, e);
                    if (null !== s) return s;
                }
                return null;
            }
            try {
                const t1 = {
                    alpha: !0,
                    depth: r,
                    stencil: o,
                    antialias: c,
                    premultipliedAlpha: h,
                    preserveDrawingBuffer: u,
                    powerPreference: d,
                    failIfMajorPerformanceCaveat: m
                };
                if ("setAttribute" in n && n.setAttribute("data-engine", `three.js r${e}`), n.addEventListener("webglcontextlost", Bt, !1), n.addEventListener("webglcontextrestored", zt, !1), n.addEventListener("webglcontextcreationerror", Vt, !1), null === Dt) {
                    const e = [
                        "webgl2",
                        "webgl",
                        "experimental-webgl"
                    ];
                    if (!0 === S.isWebGL1Renderer && e.shift(), Dt = Nt(e, t1), null === Dt) throw Nt(e) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
                }
                "undefined" != typeof WebGLRenderingContext && Dt instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), void 0 === Dt.getShaderPrecisionFormat && (Dt.getShaderPrecisionFormat = function() {
                    return {
                        rangeMin: 1,
                        rangeMax: 1,
                        precision: 1
                    };
                });
            } catch (t1) {
                throw console.error("THREE.WebGLRenderer: " + t1.message), t1;
            }
            function Ot() {
                ht = new Yr(Dt), ut = new Ar(Dt, ht, t1), ht.init(ut), Pt = new ja(Dt, ht, ut), dt = new Wa(Dt, ht, ut), pt = new Kr(Dt), mt = new La, ft = new Xa(Dt, ht, dt, mt, ut, Pt, pt), gt = new Cr(S), _t = new qr(S), vt = new vr(Dt, ut), It = new Er(Dt, ht, vt, ut), xt = new Zr(Dt, vt, pt, It), yt = new es(Dt, xt, vt, pt), Rt = new ts(Dt, ut, ft), Et = new Rr(mt), Mt = new Ca(S, gt, _t, ht, ut, It, Et), St = new $a(S, mt), bt = new Da, Tt = new Ga(ht, ut), At = new Tr(S, gt, _t, dt, yt, f, h), wt = new ka(S, yt, ut), Ut = new Qa(Dt, pt, ut, dt), Ct = new wr(Dt, ht, pt, ut), Lt = new Jr(Dt, ht, pt, ut), pt.programs = Mt.programs, S.capabilities = ut, S.extensions = ht, S.properties = mt, S.renderLists = bt, S.shadowMap = wt, S.state = dt, S.info = pt;
            }
            Ot();
            const Ft = new Ka(S, Dt);
            function Bt(t1) {
                t1.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), b = !0;
            }
            function zt() {
                console.log("THREE.WebGLRenderer: Context Restored."), b = !1;
                const t1 = pt.autoReset, e = wt.enabled, n = wt.autoUpdate, i = wt.needsUpdate, r = wt.type;
                Ot(), pt.autoReset = t1, wt.enabled = e, wt.autoUpdate = n, wt.needsUpdate = i, wt.type = r;
            }
            function Vt(t1) {
                console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", t1.statusMessage);
            }
            function kt(t1) {
                const e = t1.target;
                e.removeEventListener("dispose", kt), function(t1) {
                    (function(t1) {
                        const e = mt.get(t1).programs;
                        void 0 !== e && (e.forEach(function(t1) {
                            Mt.releaseProgram(t1);
                        }), t1.isShaderMaterial && Mt.releaseShaderCache(t1));
                    })(t1), mt.remove(t1);
                }(e);
            }
            function Wt(t1, e, n) {
                !0 === t1.transparent && 2 === t1.side && !1 === t1.forceSinglePass ? (t1.side = a, t1.needsUpdate = !0, Qt(t1, e, n), t1.side = s, t1.needsUpdate = !0, Qt(t1, e, n), t1.side = 2) : Qt(t1, e, n);
            }
            this.xr = Ft, this.getContext = function() {
                return Dt;
            }, this.getContextAttributes = function() {
                return Dt.getContextAttributes();
            }, this.forceContextLoss = function() {
                const t1 = ht.get("WEBGL_lose_context");
                t1 && t1.loseContext();
            }, this.forceContextRestore = function() {
                const t1 = ht.get("WEBGL_lose_context");
                t1 && t1.restoreContext();
            }, this.getPixelRatio = function() {
                return z;
            }, this.setPixelRatio = function(t1) {
                void 0 !== t1 && (z = t1, this.setSize(D, N, !1));
            }, this.getSize = function(t1) {
                return t1.set(D, N);
            }, this.setSize = function(t1, e, i = !0) {
                Ft.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (D = t1, N = e, n.width = Math.floor(t1 * z), n.height = Math.floor(e * z), !0 === i && (n.style.width = t1 + "px", n.style.height = e + "px"), this.setViewport(0, 0, t1, e));
            }, this.getDrawingBufferSize = function(t1) {
                return t1.set(D * z, N * z).floor();
            }, this.setDrawingBufferSize = function(t1, e, i) {
                D = t1, N = e, z = i, n.width = Math.floor(t1 * i), n.height = Math.floor(e * i), this.setViewport(0, 0, t1, e);
            }, this.getCurrentViewport = function(t1) {
                return t1.copy(C);
            }, this.getViewport = function(t1) {
                return t1.copy($);
            }, this.setViewport = function(t1, e, n, i) {
                t1.isVector4 ? $.set(t1.x, t1.y, t1.z, t1.w) : $.set(t1, e, n, i), dt.viewport(C.copy($).multiplyScalar(z).floor());
            }, this.getScissor = function(t1) {
                return t1.copy(Q);
            }, this.setScissor = function(t1, e, n, i) {
                t1.isVector4 ? Q.set(t1.x, t1.y, t1.z, t1.w) : Q.set(t1, e, n, i), dt.scissor(L.copy(Q).multiplyScalar(z).floor());
            }, this.getScissorTest = function() {
                return tt;
            }, this.setScissorTest = function(t1) {
                dt.setScissorTest(tt = t1);
            }, this.setOpaqueSort = function(t1) {
                q = t1;
            }, this.setTransparentSort = function(t1) {
                Y = t1;
            }, this.getClearColor = function(t1) {
                return t1.copy(At.getClearColor());
            }, this.setClearColor = function() {
                At.setClearColor.apply(At, arguments);
            }, this.getClearAlpha = function() {
                return At.getClearAlpha();
            }, this.setClearAlpha = function() {
                At.setClearAlpha.apply(At, arguments);
            }, this.clear = function(t1 = !0, e = !0, n = !0) {
                let i = 0;
                if (t1) {
                    let t1 = !1;
                    if (null !== w) {
                        const e = w.texture.format;
                        t1 = e === K || e === J || e === Z;
                    }
                    if (t1) {
                        const t1 = w.texture.type, e = t1 === F || t1 === G || t1 === B || t1 === X || t1 === k || t1 === W, n = At.getClearColor(), i = At.getClearAlpha(), r = n.r, s = n.g, a = n.b;
                        e ? (g[0] = r, g[1] = s, g[2] = a, g[3] = i, Dt.clearBufferuiv(Dt.COLOR, 0, g)) : (_[0] = r, _[1] = s, _[2] = a, _[3] = i, Dt.clearBufferiv(Dt.COLOR, 0, _));
                    } else i |= Dt.COLOR_BUFFER_BIT;
                }
                e && (i |= Dt.DEPTH_BUFFER_BIT), n && (i |= Dt.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), Dt.clear(i);
            }, this.clearColor = function() {
                this.clear(!0, !1, !1);
            }, this.clearDepth = function() {
                this.clear(!1, !0, !1);
            }, this.clearStencil = function() {
                this.clear(!1, !1, !0);
            }, this.dispose = function() {
                n.removeEventListener("webglcontextlost", Bt, !1), n.removeEventListener("webglcontextrestored", zt, !1), n.removeEventListener("webglcontextcreationerror", Vt, !1), bt.dispose(), Tt.dispose(), mt.dispose(), gt.dispose(), _t.dispose(), yt.dispose(), It.dispose(), Ut.dispose(), Mt.dispose(), Ft.dispose(), Ft.removeEventListener("sessionstart", jt), Ft.removeEventListener("sessionend", qt), rt && (rt.dispose(), rt = null), Yt.stop();
            }, this.renderBufferDirect = function(t1, e, n, i, r, s) {
                null === e && (e = lt);
                const a = r.isMesh && r.matrixWorld.determinant() < 0, o = function(t1, e, n, i, r) {
                    !0 !== e.isScene && (e = lt);
                    ft.resetTextureUnits();
                    const s = e.fog, a = i.isMeshStandardMaterial ? e.environment : null, o = null === w ? S.outputColorSpace : !0 === w.isXRRenderTarget ? w.texture.colorSpace : Ht, l = (i.isMeshStandardMaterial ? _t : gt).get(i.envMap || a), c = !0 === i.vertexColors && !!n.attributes.color && 4 === n.attributes.color.itemSize, h = !!n.attributes.tangent && (!!i.normalMap || i.anisotropy > 0), u = !!n.morphAttributes.position, d = !!n.morphAttributes.normal, m = !!n.morphAttributes.color;
                    let f = p;
                    i.toneMapped && (null !== w && !0 !== w.isXRRenderTarget || (f = S.toneMapping));
                    const g = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color, _ = void 0 !== g ? g.length : 0, v = mt.get(i), y = x.state.lights;
                    if (!0 === nt && (!0 === it || t1 !== R)) {
                        const e = t1 === R && i.id === A;
                        Et.setState(i, t1, e);
                    }
                    let M = !1;
                    i.version === v.__version ? v.needsLights && v.lightsStateVersion !== y.state.version || v.outputColorSpace !== o || r.isBatchedMesh && !1 === v.batching ? M = !0 : r.isBatchedMesh || !0 !== v.batching ? r.isInstancedMesh && !1 === v.instancing ? M = !0 : r.isInstancedMesh || !0 !== v.instancing ? r.isSkinnedMesh && !1 === v.skinning ? M = !0 : r.isSkinnedMesh || !0 !== v.skinning ? r.isInstancedMesh && !0 === v.instancingColor && null === r.instanceColor || r.isInstancedMesh && !1 === v.instancingColor && null !== r.instanceColor || v.envMap !== l || !0 === i.fog && v.fog !== s ? M = !0 : void 0 === v.numClippingPlanes || v.numClippingPlanes === Et.numPlanes && v.numIntersection === Et.numIntersection ? (v.vertexAlphas !== c || v.vertexTangents !== h || v.morphTargets !== u || v.morphNormals !== d || v.morphColors !== m || v.toneMapping !== f || !0 === ut.isWebGL2 && v.morphTargetsCount !== _) && (M = !0) : M = !0 : M = !0 : M = !0 : M = !0 : (M = !0, v.__version = i.version);
                    let b = v.currentProgram;
                    !0 === M && (b = Qt(i, e, r));
                    let T = !1, E = !1, C = !1;
                    const L = b.getUniforms(), P = v.uniforms;
                    dt.useProgram(b.program) && (T = !0, E = !0, C = !0);
                    i.id !== A && (A = i.id, E = !0);
                    if (T || R !== t1) {
                        L.setValue(Dt, "projectionMatrix", t1.projectionMatrix), L.setValue(Dt, "viewMatrix", t1.matrixWorldInverse);
                        const e = L.map.cameraPosition;
                        void 0 !== e && e.setValue(Dt, ot.setFromMatrixPosition(t1.matrixWorld)), ut.logarithmicDepthBuffer && L.setValue(Dt, "logDepthBufFC", 2 / (Math.log(t1.far + 1) / Math.LN2)), (i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial) && L.setValue(Dt, "isOrthographic", !0 === t1.isOrthographicCamera), R !== t1 && (R = t1, E = !0, C = !0);
                    }
                    if (r.isSkinnedMesh) {
                        L.setOptional(Dt, r, "bindMatrix"), L.setOptional(Dt, r, "bindMatrixInverse");
                        const t1 = r.skeleton;
                        t1 && (ut.floatVertexTextures ? (null === t1.boneTexture && t1.computeBoneTexture(), L.setValue(Dt, "boneTexture", t1.boneTexture, ft)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
                    }
                    r.isBatchedMesh && (L.setOptional(Dt, r, "batchingTexture"), L.setValue(Dt, "batchingTexture", r._matricesTexture, ft));
                    const I = n.morphAttributes;
                    (void 0 !== I.position || void 0 !== I.normal || void 0 !== I.color && !0 === ut.isWebGL2) && Rt.update(r, n, b);
                    (E || v.receiveShadow !== r.receiveShadow) && (v.receiveShadow = r.receiveShadow, L.setValue(Dt, "receiveShadow", r.receiveShadow));
                    i.isMeshGouraudMaterial && null !== i.envMap && (P.envMap.value = l, P.flipEnvMap.value = l.isCubeTexture && !1 === l.isRenderTargetTexture ? -1 : 1);
                    E && (L.setValue(Dt, "toneMappingExposure", S.toneMappingExposure), v.needsLights && (D = C, (U = P).ambientLightColor.needsUpdate = D, U.lightProbe.needsUpdate = D, U.directionalLights.needsUpdate = D, U.directionalLightShadows.needsUpdate = D, U.pointLights.needsUpdate = D, U.pointLightShadows.needsUpdate = D, U.spotLights.needsUpdate = D, U.spotLightShadows.needsUpdate = D, U.rectAreaLights.needsUpdate = D, U.hemisphereLights.needsUpdate = D), s && !0 === i.fog && St.refreshFogUniforms(P, s), St.refreshMaterialUniforms(P, i, z, N, rt), oa.upload(Dt, te(v), P, ft));
                    var U, D;
                    i.isShaderMaterial && !0 === i.uniformsNeedUpdate && (oa.upload(Dt, te(v), P, ft), i.uniformsNeedUpdate = !1);
                    i.isSpriteMaterial && L.setValue(Dt, "center", r.center);
                    if (L.setValue(Dt, "modelViewMatrix", r.modelViewMatrix), L.setValue(Dt, "normalMatrix", r.normalMatrix), L.setValue(Dt, "modelMatrix", r.matrixWorld), i.isShaderMaterial || i.isRawShaderMaterial) {
                        const t1 = i.uniformsGroups;
                        for(let e = 0, n = t1.length; e < n; e++)if (ut.isWebGL2) {
                            const n = t1[e];
                            Ut.update(n, b), Ut.bind(n, b);
                        } else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
                    }
                    return b;
                }(t1, e, n, i, r);
                dt.setMaterial(i, a);
                let l = n.index, c = 1;
                if (!0 === i.wireframe) {
                    if (l = xt.getWireframeAttribute(n), void 0 === l) return;
                    c = 2;
                }
                const h = n.drawRange, u = n.attributes.position;
                let d = h.start * c, m = (h.start + h.count) * c;
                null !== s && (d = Math.max(d, s.start * c), m = Math.min(m, (s.start + s.count) * c)), null !== l ? (d = Math.max(d, 0), m = Math.min(m, l.count)) : null != u && (d = Math.max(d, 0), m = Math.min(m, u.count));
                const f = m - d;
                if (f < 0 || f === 1 / 0) return;
                let g;
                It.setup(r, i, o, n, l);
                let _ = Ct;
                if (null !== l && (g = vt.get(l), _ = Lt, _.setIndex(g)), r.isMesh) !0 === i.wireframe ? (dt.setLineWidth(i.wireframeLinewidth * ct()), _.setMode(Dt.LINES)) : _.setMode(Dt.TRIANGLES);
                else if (r.isLine) {
                    let t1 = i.linewidth;
                    void 0 === t1 && (t1 = 1), dt.setLineWidth(t1 * ct()), r.isLineSegments ? _.setMode(Dt.LINES) : r.isLineLoop ? _.setMode(Dt.LINE_LOOP) : _.setMode(Dt.LINE_STRIP);
                } else r.isPoints ? _.setMode(Dt.POINTS) : r.isSprite && _.setMode(Dt.TRIANGLES);
                if (r.isBatchedMesh) _.renderMultiDraw(r._multiDrawStarts, r._multiDrawCounts, r._multiDrawCount);
                else if (r.isInstancedMesh) _.renderInstances(d, f, r.count);
                else if (n.isInstancedBufferGeometry) {
                    const t1 = void 0 !== n._maxInstanceCount ? n._maxInstanceCount : 1 / 0, e = Math.min(n.instanceCount, t1);
                    _.renderInstances(d, f, e);
                } else _.render(d, f);
            }, this.compile = function(t1, e, n = null) {
                null === n && (n = t1), x = Tt.get(n), x.init(), M.push(x), n.traverseVisible(function(t1) {
                    t1.isLight && t1.layers.test(e.layers) && (x.pushLight(t1), t1.castShadow && x.pushShadow(t1));
                }), t1 !== n && t1.traverseVisible(function(t1) {
                    t1.isLight && t1.layers.test(e.layers) && (x.pushLight(t1), t1.castShadow && x.pushShadow(t1));
                }), x.setupLights(S._useLegacyLights);
                const i = new Set;
                return t1.traverse(function(t1) {
                    const e = t1.material;
                    if (e) {
                        if (Array.isArray(e)) for(let r = 0; r < e.length; r++){
                            const s = e[r];
                            Wt(s, n, t1), i.add(s);
                        }
                        else Wt(e, n, t1), i.add(e);
                    }
                }), M.pop(), x = null, i;
            }, this.compileAsync = function(t1, e, n = null) {
                const i = this.compile(t1, e, n);
                return new Promise((e)=>{
                    function n() {
                        i.forEach(function(t1) {
                            mt.get(t1).currentProgram.isReady() && i.delete(t1);
                        }), 0 !== i.size ? setTimeout(n, 10) : e(t1);
                    }
                    null !== ht.get("KHR_parallel_shader_compile") ? n() : setTimeout(n, 10);
                });
            };
            let Xt = null;
            function jt() {
                Yt.stop();
            }
            function qt() {
                Yt.start();
            }
            const Yt = new _r;
            function Zt(t1, e, n, i) {
                if (!1 === t1.visible) return;
                if (t1.layers.test(e.layers)) {
                    if (t1.isGroup) n = t1.renderOrder;
                    else if (t1.isLOD) !0 === t1.autoUpdate && t1.update(e);
                    else if (t1.isLight) x.pushLight(t1), t1.castShadow && x.pushShadow(t1);
                    else if (t1.isSprite) {
                        if (!t1.frustumCulled || et.intersectsSprite(t1)) {
                            i && ot.setFromMatrixPosition(t1.matrixWorld).applyMatrix4(st);
                            const e = yt.update(t1), r = t1.material;
                            r.visible && v.push(t1, e, r, n, ot.z, null);
                        }
                    } else if ((t1.isMesh || t1.isLine || t1.isPoints) && (!t1.frustumCulled || et.intersectsObject(t1))) {
                        const e = yt.update(t1), r = t1.material;
                        if (i && (void 0 !== t1.boundingSphere ? (null === t1.boundingSphere && t1.computeBoundingSphere(), ot.copy(t1.boundingSphere.center)) : (null === e.boundingSphere && e.computeBoundingSphere(), ot.copy(e.boundingSphere.center)), ot.applyMatrix4(t1.matrixWorld).applyMatrix4(st)), Array.isArray(r)) {
                            const i = e.groups;
                            for(let s = 0, a = i.length; s < a; s++){
                                const a = i[s], o = r[a.materialIndex];
                                o && o.visible && v.push(t1, e, o, n, ot.z, a);
                            }
                        } else r.visible && v.push(t1, e, r, n, ot.z, null);
                    }
                }
                const r = t1.children;
                for(let t1 = 0, s = r.length; t1 < s; t1++)Zt(r[t1], e, n, i);
            }
            function Jt(t1, e, n, i) {
                const r = t1.opaque, s = t1.transmissive, o = t1.transparent;
                x.setupLightsView(n), !0 === nt && Et.setGlobalState(S.clippingPlanes, n), s.length > 0 && function(t1, e, n, i) {
                    const r = !0 === n.isScene ? n.overrideMaterial : null;
                    if (null !== r) return;
                    const s = ut.isWebGL2;
                    null === rt && (rt = new Ge(1, 1, {
                        generateMipmaps: !0,
                        type: ht.has("EXT_color_buffer_half_float") ? V : F,
                        minFilter: O,
                        samples: s ? 4 : 0
                    }));
                    S.getDrawingBufferSize(at), s ? rt.setSize(at.x, at.y) : rt.setSize(he(at.x), he(at.y));
                    const o = S.getRenderTarget();
                    S.setRenderTarget(rt), S.getClearColor(I), U = S.getClearAlpha(), U < 1 && S.setClearColor(16777215, .5);
                    S.clear();
                    const l = S.toneMapping;
                    S.toneMapping = p, Kt(t1, n, i), ft.updateMultisampleRenderTarget(rt), ft.updateRenderTargetMipmap(rt);
                    let c = !1;
                    for(let t1 = 0, r = e.length; t1 < r; t1++){
                        const r = e[t1], s = r.object, o = r.geometry, l = r.material, h = r.group;
                        if (2 === l.side && s.layers.test(i.layers)) {
                            const t1 = l.side;
                            l.side = a, l.needsUpdate = !0, $t(s, n, i, o, l, h), l.side = t1, l.needsUpdate = !0, c = !0;
                        }
                    }
                    !0 === c && (ft.updateMultisampleRenderTarget(rt), ft.updateRenderTargetMipmap(rt));
                    S.setRenderTarget(o), S.setClearColor(I, U), S.toneMapping = l;
                }(r, s, e, n), i && dt.viewport(C.copy(i)), r.length > 0 && Kt(r, e, n), s.length > 0 && Kt(s, e, n), o.length > 0 && Kt(o, e, n), dt.buffers.depth.setTest(!0), dt.buffers.depth.setMask(!0), dt.buffers.color.setMask(!0), dt.setPolygonOffset(!1);
            }
            function Kt(t1, e, n) {
                const i = !0 === e.isScene ? e.overrideMaterial : null;
                for(let r = 0, s = t1.length; r < s; r++){
                    const s = t1[r], a = s.object, o = s.geometry, l = null === i ? s.material : i, c = s.group;
                    a.layers.test(n.layers) && $t(a, e, n, o, l, c);
                }
            }
            function $t(t1, e, n, i, r, o) {
                t1.onBeforeRender(S, e, n, i, r, o), t1.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t1.matrixWorld), t1.normalMatrix.getNormalMatrix(t1.modelViewMatrix), r.onBeforeRender(S, e, n, i, t1, o), !0 === r.transparent && 2 === r.side && !1 === r.forceSinglePass ? (r.side = a, r.needsUpdate = !0, S.renderBufferDirect(n, e, i, r, t1, o), r.side = s, r.needsUpdate = !0, S.renderBufferDirect(n, e, i, r, t1, o), r.side = 2) : S.renderBufferDirect(n, e, i, r, t1, o), t1.onAfterRender(S, e, n, i, r, o);
            }
            function Qt(t1, e, n) {
                !0 !== e.isScene && (e = lt);
                const i = mt.get(t1), r = x.state.lights, s = x.state.shadowsArray, a = r.state.version, o = Mt.getParameters(t1, r.state, s, e, n), l = Mt.getProgramCacheKey(o);
                let c = i.programs;
                i.environment = t1.isMeshStandardMaterial ? e.environment : null, i.fog = e.fog, i.envMap = (t1.isMeshStandardMaterial ? _t : gt).get(t1.envMap || i.environment), void 0 === c && (t1.addEventListener("dispose", kt), c = new Map, i.programs = c);
                let h = c.get(l);
                if (void 0 !== h) {
                    if (i.currentProgram === h && i.lightsStateVersion === a) return ee(t1, o), h;
                } else o.uniforms = Mt.getUniforms(t1), t1.onBuild(n, o, S), t1.onBeforeCompile(o, S), h = Mt.acquireProgram(o, l), c.set(l, h), i.uniforms = o.uniforms;
                const u = i.uniforms;
                return (t1.isShaderMaterial || t1.isRawShaderMaterial) && !0 !== t1.clipping || (u.clippingPlanes = Et.uniform), ee(t1, o), i.needsLights = function(t1) {
                    return t1.isMeshLambertMaterial || t1.isMeshToonMaterial || t1.isMeshPhongMaterial || t1.isMeshStandardMaterial || t1.isShadowMaterial || t1.isShaderMaterial && !0 === t1.lights;
                }(t1), i.lightsStateVersion = a, i.needsLights && (u.ambientLightColor.value = r.state.ambient, u.lightProbe.value = r.state.probe, u.directionalLights.value = r.state.directional, u.directionalLightShadows.value = r.state.directionalShadow, u.spotLights.value = r.state.spot, u.spotLightShadows.value = r.state.spotShadow, u.rectAreaLights.value = r.state.rectArea, u.ltc_1.value = r.state.rectAreaLTC1, u.ltc_2.value = r.state.rectAreaLTC2, u.pointLights.value = r.state.point, u.pointLightShadows.value = r.state.pointShadow, u.hemisphereLights.value = r.state.hemi, u.directionalShadowMap.value = r.state.directionalShadowMap, u.directionalShadowMatrix.value = r.state.directionalShadowMatrix, u.spotShadowMap.value = r.state.spotShadowMap, u.spotLightMatrix.value = r.state.spotLightMatrix, u.spotLightMap.value = r.state.spotLightMap, u.pointShadowMap.value = r.state.pointShadowMap, u.pointShadowMatrix.value = r.state.pointShadowMatrix), i.currentProgram = h, i.uniformsList = null, h;
            }
            function te(t1) {
                if (null === t1.uniformsList) {
                    const e = t1.currentProgram.getUniforms();
                    t1.uniformsList = oa.seqWithValue(e.seq, t1.uniforms);
                }
                return t1.uniformsList;
            }
            function ee(t1, e) {
                const n = mt.get(t1);
                n.outputColorSpace = e.outputColorSpace, n.batching = e.batching, n.instancing = e.instancing, n.instancingColor = e.instancingColor, n.skinning = e.skinning, n.morphTargets = e.morphTargets, n.morphNormals = e.morphNormals, n.morphColors = e.morphColors, n.morphTargetsCount = e.morphTargetsCount, n.numClippingPlanes = e.numClippingPlanes, n.numIntersection = e.numClipIntersection, n.vertexAlphas = e.vertexAlphas, n.vertexTangents = e.vertexTangents, n.toneMapping = e.toneMapping;
            }
            Yt.setAnimationLoop(function(t1) {
                Xt && Xt(t1);
            }), "undefined" != typeof self && Yt.setContext(self), this.setAnimationLoop = function(t1) {
                Xt = t1, Ft.setAnimationLoop(t1), null === t1 ? Yt.stop() : Yt.start();
            }, Ft.addEventListener("sessionstart", jt), Ft.addEventListener("sessionend", qt), this.render = function(t1, e) {
                if (void 0 !== e && !0 !== e.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
                if (!0 === b) return;
                !0 === t1.matrixWorldAutoUpdate && t1.updateMatrixWorld(), null === e.parent && !0 === e.matrixWorldAutoUpdate && e.updateMatrixWorld(), !0 === Ft.enabled && !0 === Ft.isPresenting && (!0 === Ft.cameraAutoUpdate && Ft.updateCamera(e), e = Ft.getCamera()), !0 === t1.isScene && t1.onBeforeRender(S, t1, e, w), x = Tt.get(t1, M.length), x.init(), M.push(x), st.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), et.setFromProjectionMatrix(st), it = this.localClippingEnabled, nt = Et.init(this.clippingPlanes, it), v = bt.get(t1, y.length), v.init(), y.push(v), Zt(t1, e, 0, S.sortObjects), v.finish(), !0 === S.sortObjects && v.sort(q, Y), this.info.render.frame++, !0 === nt && Et.beginShadows();
                const n = x.state.shadowsArray;
                if (wt.render(n, t1, e), !0 === nt && Et.endShadows(), !0 === this.info.autoReset && this.info.reset(), At.render(v, t1), x.setupLights(S._useLegacyLights), e.isArrayCamera) {
                    const n = e.cameras;
                    for(let e = 0, i = n.length; e < i; e++){
                        const i = n[e];
                        Jt(v, t1, i, i.viewport);
                    }
                } else Jt(v, t1, e);
                null !== w && (ft.updateMultisampleRenderTarget(w), ft.updateRenderTargetMipmap(w)), !0 === t1.isScene && t1.onAfterRender(S, t1, e), It.resetDefaultState(), A = -1, R = null, M.pop(), x = M.length > 0 ? M[M.length - 1] : null, y.pop(), v = y.length > 0 ? y[y.length - 1] : null;
            }, this.getActiveCubeFace = function() {
                return T;
            }, this.getActiveMipmapLevel = function() {
                return E;
            }, this.getRenderTarget = function() {
                return w;
            }, this.setRenderTargetTextures = function(t1, e, n) {
                mt.get(t1.texture).__webglTexture = e, mt.get(t1.depthTexture).__webglTexture = n;
                const i = mt.get(t1);
                i.__hasExternalTextures = !0, i.__hasExternalTextures && (i.__autoAllocateDepthBuffer = void 0 === n, i.__autoAllocateDepthBuffer || !0 === ht.has("WEBGL_multisampled_render_to_texture") && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), i.__useRenderToTexture = !1));
            }, this.setRenderTargetFramebuffer = function(t1, e) {
                const n = mt.get(t1);
                n.__webglFramebuffer = e, n.__useDefaultFramebuffer = void 0 === e;
            }, this.setRenderTarget = function(t1, e = 0, n = 0) {
                w = t1, T = e, E = n;
                let i = !0, r = null, s = !1, a = !1;
                if (t1) {
                    const o = mt.get(t1);
                    void 0 !== o.__useDefaultFramebuffer ? (dt.bindFramebuffer(Dt.FRAMEBUFFER, null), i = !1) : void 0 === o.__webglFramebuffer ? ft.setupRenderTarget(t1) : o.__hasExternalTextures && ft.rebindTextures(t1, mt.get(t1.texture).__webglTexture, mt.get(t1.depthTexture).__webglTexture);
                    const l = t1.texture;
                    (l.isData3DTexture || l.isDataArrayTexture || l.isCompressedArrayTexture) && (a = !0);
                    const c = mt.get(t1).__webglFramebuffer;
                    t1.isWebGLCubeRenderTarget ? (r = Array.isArray(c[e]) ? c[e][n] : c[e], s = !0) : r = ut.isWebGL2 && t1.samples > 0 && !1 === ft.useMultisampledRTT(t1) ? mt.get(t1).__webglMultisampledFramebuffer : Array.isArray(c) ? c[n] : c, C.copy(t1.viewport), L.copy(t1.scissor), P = t1.scissorTest;
                } else C.copy($).multiplyScalar(z).floor(), L.copy(Q).multiplyScalar(z).floor(), P = tt;
                if (dt.bindFramebuffer(Dt.FRAMEBUFFER, r) && ut.drawBuffers && i && dt.drawBuffers(t1, r), dt.viewport(C), dt.scissor(L), dt.setScissorTest(P), s) {
                    const i = mt.get(t1.texture);
                    Dt.framebufferTexture2D(Dt.FRAMEBUFFER, Dt.COLOR_ATTACHMENT0, Dt.TEXTURE_CUBE_MAP_POSITIVE_X + e, i.__webglTexture, n);
                } else if (a) {
                    const i = mt.get(t1.texture), r = e || 0;
                    Dt.framebufferTextureLayer(Dt.FRAMEBUFFER, Dt.COLOR_ATTACHMENT0, i.__webglTexture, n || 0, r);
                }
                A = -1;
            }, this.readRenderTargetPixels = function(t1, e, n, i, r, s, a) {
                if (!t1 || !t1.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                let o = mt.get(t1).__webglFramebuffer;
                if (t1.isWebGLCubeRenderTarget && void 0 !== a && (o = o[a]), o) {
                    dt.bindFramebuffer(Dt.FRAMEBUFFER, o);
                    try {
                        const a = t1.texture, o = a.format, l = a.type;
                        if (o !== j && Pt.convert(o) !== Dt.getParameter(Dt.IMPLEMENTATION_COLOR_READ_FORMAT)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                        const c = l === V && (ht.has("EXT_color_buffer_half_float") || ut.isWebGL2 && ht.has("EXT_color_buffer_float"));
                        if (!(l === F || Pt.convert(l) === Dt.getParameter(Dt.IMPLEMENTATION_COLOR_READ_TYPE) || l === H && (ut.isWebGL2 || ht.has("OES_texture_float") || ht.has("WEBGL_color_buffer_float")) || c)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                        e >= 0 && e <= t1.width - i && n >= 0 && n <= t1.height - r && Dt.readPixels(e, n, i, r, Pt.convert(o), Pt.convert(l), s);
                    } finally{
                        const t1 = null !== w ? mt.get(w).__webglFramebuffer : null;
                        dt.bindFramebuffer(Dt.FRAMEBUFFER, t1);
                    }
                }
            }, this.copyFramebufferToTexture = function(t1, e, n = 0) {
                const i = Math.pow(2, -n), r = Math.floor(e.image.width * i), s = Math.floor(e.image.height * i);
                ft.setTexture2D(e, 0), Dt.copyTexSubImage2D(Dt.TEXTURE_2D, n, 0, 0, t1.x, t1.y, r, s), dt.unbindTexture();
            }, this.copyTextureToTexture = function(t1, e, n, i = 0) {
                const r = e.image.width, s = e.image.height, a = Pt.convert(n.format), o = Pt.convert(n.type);
                ft.setTexture2D(n, 0), Dt.pixelStorei(Dt.UNPACK_FLIP_Y_WEBGL, n.flipY), Dt.pixelStorei(Dt.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n.premultiplyAlpha), Dt.pixelStorei(Dt.UNPACK_ALIGNMENT, n.unpackAlignment), e.isDataTexture ? Dt.texSubImage2D(Dt.TEXTURE_2D, i, t1.x, t1.y, r, s, a, o, e.image.data) : e.isCompressedTexture ? Dt.compressedTexSubImage2D(Dt.TEXTURE_2D, i, t1.x, t1.y, e.mipmaps[0].width, e.mipmaps[0].height, a, e.mipmaps[0].data) : Dt.texSubImage2D(Dt.TEXTURE_2D, i, t1.x, t1.y, a, o, e.image), 0 === i && n.generateMipmaps && Dt.generateMipmap(Dt.TEXTURE_2D), dt.unbindTexture();
            }, this.copyTextureToTexture3D = function(t1, e, n, i, r = 0) {
                if (S.isWebGL1Renderer) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
                const s = t1.max.x - t1.min.x + 1, a = t1.max.y - t1.min.y + 1, o = t1.max.z - t1.min.z + 1, l = Pt.convert(i.format), c = Pt.convert(i.type);
                let h;
                if (i.isData3DTexture) ft.setTexture3D(i, 0), h = Dt.TEXTURE_3D;
                else {
                    if (!i.isDataArrayTexture && !i.isCompressedArrayTexture) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
                    ft.setTexture2DArray(i, 0), h = Dt.TEXTURE_2D_ARRAY;
                }
                Dt.pixelStorei(Dt.UNPACK_FLIP_Y_WEBGL, i.flipY), Dt.pixelStorei(Dt.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i.premultiplyAlpha), Dt.pixelStorei(Dt.UNPACK_ALIGNMENT, i.unpackAlignment);
                const u = Dt.getParameter(Dt.UNPACK_ROW_LENGTH), d = Dt.getParameter(Dt.UNPACK_IMAGE_HEIGHT), p = Dt.getParameter(Dt.UNPACK_SKIP_PIXELS), m = Dt.getParameter(Dt.UNPACK_SKIP_ROWS), f = Dt.getParameter(Dt.UNPACK_SKIP_IMAGES), g = n.isCompressedTexture ? n.mipmaps[r] : n.image;
                Dt.pixelStorei(Dt.UNPACK_ROW_LENGTH, g.width), Dt.pixelStorei(Dt.UNPACK_IMAGE_HEIGHT, g.height), Dt.pixelStorei(Dt.UNPACK_SKIP_PIXELS, t1.min.x), Dt.pixelStorei(Dt.UNPACK_SKIP_ROWS, t1.min.y), Dt.pixelStorei(Dt.UNPACK_SKIP_IMAGES, t1.min.z), n.isDataTexture || n.isData3DTexture ? Dt.texSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, c, g.data) : n.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), Dt.compressedTexSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, g.data)) : Dt.texSubImage3D(h, r, e.x, e.y, e.z, s, a, o, l, c, g), Dt.pixelStorei(Dt.UNPACK_ROW_LENGTH, u), Dt.pixelStorei(Dt.UNPACK_IMAGE_HEIGHT, d), Dt.pixelStorei(Dt.UNPACK_SKIP_PIXELS, p), Dt.pixelStorei(Dt.UNPACK_SKIP_ROWS, m), Dt.pixelStorei(Dt.UNPACK_SKIP_IMAGES, f), 0 === r && i.generateMipmaps && Dt.generateMipmap(h), dt.unbindTexture();
            }, this.initTexture = function(t1) {
                t1.isCubeTexture ? ft.setTextureCube(t1, 0) : t1.isData3DTexture ? ft.setTexture3D(t1, 0) : t1.isDataArrayTexture || t1.isCompressedArrayTexture ? ft.setTexture2DArray(t1, 0) : ft.setTexture2D(t1, 0), dt.unbindTexture();
            }, this.resetState = function() {
                T = 0, E = 0, w = null, dt.reset(), It.reset();
            }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                detail: this
            }));
        }
        get coordinateSystem() {
            return $t;
        }
        get outputColorSpace() {
            return this._outputColorSpace;
        }
        set outputColorSpace(t1) {
            this._outputColorSpace = t1;
            const e = this.getContext();
            e.drawingBufferColorSpace = t1 === Vt ? "display-p3" : "srgb", e.unpackColorSpace = Re.workingColorSpace === kt ? "display-p3" : "srgb";
        }
        get outputEncoding() {
            return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === Gt ? Bt : Ft;
        }
        set outputEncoding(t1) {
            console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = t1 === Bt ? Gt : Ht;
        }
        get useLegacyLights() {
            return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
        }
        set useLegacyLights(t1) {
            console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = t1;
        }
    }
    class eo extends to {
    }
    eo.prototype.isWebGL1Renderer = !0;
    class no {
        constructor(t1, e = 25e-5){
            this.isFogExp2 = !0, this.name = "", this.color = new ci(t1), this.density = e;
        }
        clone() {
            return new no(this.color, this.density);
        }
        toJSON() {
            return {
                type: "FogExp2",
                name: this.name,
                color: this.color.getHex(),
                density: this.density
            };
        }
    }
    class io {
        constructor(t1, e = 1, n = 1e3){
            this.isFog = !0, this.name = "", this.color = new ci(t1), this.near = e, this.far = n;
        }
        clone() {
            return new io(this.color, this.near, this.far);
        }
        toJSON() {
            return {
                type: "Fog",
                name: this.name,
                color: this.color.getHex(),
                near: this.near,
                far: this.far
            };
        }
    }
    class ro extends jn {
        constructor(){
            super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                detail: this
            }));
        }
        copy(t1, e) {
            return super.copy(t1, e), null !== t1.background && (this.background = t1.background.clone()), null !== t1.environment && (this.environment = t1.environment.clone()), null !== t1.fog && (this.fog = t1.fog.clone()), this.backgroundBlurriness = t1.backgroundBlurriness, this.backgroundIntensity = t1.backgroundIntensity, null !== t1.overrideMaterial && (this.overrideMaterial = t1.overrideMaterial.clone()), this.matrixAutoUpdate = t1.matrixAutoUpdate, this;
        }
        toJSON(t1) {
            const e = super.toJSON(t1);
            return null !== this.fog && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), 1 !== this.backgroundIntensity && (e.object.backgroundIntensity = this.backgroundIntensity), e;
        }
    }
    class so {
        constructor(t1, e){
            this.isInterleavedBuffer = !0, this.array = t1, this.stride = e, this.count = void 0 !== t1 ? t1.length / e : 0, this.usage = Zt, this._updateRange = {
                offset: 0,
                count: -1
            }, this.updateRanges = [], this.version = 0, this.uuid = se();
        }
        onUploadCallback() {}
        set needsUpdate(t1) {
            !0 === t1 && this.version++;
        }
        get updateRange() {
            return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
        }
        setUsage(t1) {
            return this.usage = t1, this;
        }
        addUpdateRange(t1, e) {
            this.updateRanges.push({
                start: t1,
                count: e
            });
        }
        clearUpdateRanges() {
            this.updateRanges.length = 0;
        }
        copy(t1) {
            return this.array = new t1.array.constructor(t1.array), this.count = t1.count, this.stride = t1.stride, this.usage = t1.usage, this;
        }
        copyAt(t1, e, n) {
            t1 *= this.stride, n *= e.stride;
            for(let i = 0, r = this.stride; i < r; i++)this.array[t1 + i] = e.array[n + i];
            return this;
        }
        set(t1, e = 0) {
            return this.array.set(t1, e), this;
        }
        clone(t1) {
            void 0 === t1.arrayBuffers && (t1.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = se()), void 0 === t1.arrayBuffers[this.array.buffer._uuid] && (t1.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
            const e = new this.array.constructor(t1.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(e, this.stride);
            return n.setUsage(this.usage), n;
        }
        onUpload(t1) {
            return this.onUploadCallback = t1, this;
        }
        toJSON(t1) {
            return void 0 === t1.arrayBuffers && (t1.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = se()), void 0 === t1.arrayBuffers[this.array.buffer._uuid] && (t1.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
                uuid: this.uuid,
                buffer: this.array.buffer._uuid,
                type: this.array.constructor.name,
                stride: this.stride
            };
        }
    }
    const ao = new We;
    class oo {
        constructor(t1, e, n, i = !1){
            this.isInterleavedBufferAttribute = !0, this.name = "", this.data = t1, this.itemSize = e, this.offset = n, this.normalized = i;
        }
        get count() {
            return this.data.count;
        }
        get array() {
            return this.data.array;
        }
        set needsUpdate(t1) {
            this.data.needsUpdate = t1;
        }
        applyMatrix4(t1) {
            for(let e = 0, n = this.data.count; e < n; e++)ao.fromBufferAttribute(this, e), ao.applyMatrix4(t1), this.setXYZ(e, ao.x, ao.y, ao.z);
            return this;
        }
        applyNormalMatrix(t1) {
            for(let e = 0, n = this.count; e < n; e++)ao.fromBufferAttribute(this, e), ao.applyNormalMatrix(t1), this.setXYZ(e, ao.x, ao.y, ao.z);
            return this;
        }
        transformDirection(t1) {
            for(let e = 0, n = this.count; e < n; e++)ao.fromBufferAttribute(this, e), ao.transformDirection(t1), this.setXYZ(e, ao.x, ao.y, ao.z);
            return this;
        }
        setX(t1, e) {
            return this.normalized && (e = de(e, this.array)), this.data.array[t1 * this.data.stride + this.offset] = e, this;
        }
        setY(t1, e) {
            return this.normalized && (e = de(e, this.array)), this.data.array[t1 * this.data.stride + this.offset + 1] = e, this;
        }
        setZ(t1, e) {
            return this.normalized && (e = de(e, this.array)), this.data.array[t1 * this.data.stride + this.offset + 2] = e, this;
        }
        setW(t1, e) {
            return this.normalized && (e = de(e, this.array)), this.data.array[t1 * this.data.stride + this.offset + 3] = e, this;
        }
        getX(t1) {
            let e = this.data.array[t1 * this.data.stride + this.offset];
            return this.normalized && (e = ue(e, this.array)), e;
        }
        getY(t1) {
            let e = this.data.array[t1 * this.data.stride + this.offset + 1];
            return this.normalized && (e = ue(e, this.array)), e;
        }
        getZ(t1) {
            let e = this.data.array[t1 * this.data.stride + this.offset + 2];
            return this.normalized && (e = ue(e, this.array)), e;
        }
        getW(t1) {
            let e = this.data.array[t1 * this.data.stride + this.offset + 3];
            return this.normalized && (e = ue(e, this.array)), e;
        }
        setXY(t1, e, n) {
            return t1 = t1 * this.data.stride + this.offset, this.normalized && (e = de(e, this.array), n = de(n, this.array)), this.data.array[t1 + 0] = e, this.data.array[t1 + 1] = n, this;
        }
        setXYZ(t1, e, n, i) {
            return t1 = t1 * this.data.stride + this.offset, this.normalized && (e = de(e, this.array), n = de(n, this.array), i = de(i, this.array)), this.data.array[t1 + 0] = e, this.data.array[t1 + 1] = n, this.data.array[t1 + 2] = i, this;
        }
        setXYZW(t1, e, n, i, r) {
            return t1 = t1 * this.data.stride + this.offset, this.normalized && (e = de(e, this.array), n = de(n, this.array), i = de(i, this.array), r = de(r, this.array)), this.data.array[t1 + 0] = e, this.data.array[t1 + 1] = n, this.data.array[t1 + 2] = i, this.data.array[t1 + 3] = r, this;
        }
        clone(t1) {
            if (void 0 === t1) {
                console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
                const t1 = [];
                for(let e = 0; e < this.count; e++){
                    const n = e * this.data.stride + this.offset;
                    for(let e = 0; e < this.itemSize; e++)t1.push(this.data.array[n + e]);
                }
                return new Mi(new this.array.constructor(t1), this.itemSize, this.normalized);
            }
            return void 0 === t1.interleavedBuffers && (t1.interleavedBuffers = {}), void 0 === t1.interleavedBuffers[this.data.uuid] && (t1.interleavedBuffers[this.data.uuid] = this.data.clone(t1)), new oo(t1.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
        }
        toJSON(t1) {
            if (void 0 === t1) {
                console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
                const t1 = [];
                for(let e = 0; e < this.count; e++){
                    const n = e * this.data.stride + this.offset;
                    for(let e = 0; e < this.itemSize; e++)t1.push(this.data.array[n + e]);
                }
                return {
                    itemSize: this.itemSize,
                    type: this.array.constructor.name,
                    array: t1,
                    normalized: this.normalized
                };
            }
            return void 0 === t1.interleavedBuffers && (t1.interleavedBuffers = {}), void 0 === t1.interleavedBuffers[this.data.uuid] && (t1.interleavedBuffers[this.data.uuid] = this.data.toJSON(t1)), {
                isInterleavedBufferAttribute: !0,
                itemSize: this.itemSize,
                data: this.data.uuid,
                offset: this.offset,
                normalized: this.normalized
            };
        }
    }
    class lo extends di {
        constructor(t1){
            super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new ci(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.color.copy(t1.color), this.map = t1.map, this.alphaMap = t1.alphaMap, this.rotation = t1.rotation, this.sizeAttenuation = t1.sizeAttenuation, this.fog = t1.fog, this;
        }
    }
    let co;
    const ho = new We, uo = new We, po = new We, mo = new me, fo = new me, go = new Mn, _o = new We, vo = new We, xo = new We, yo = new me, Mo = new me, So = new me;
    class bo extends jn {
        constructor(t1 = new lo){
            if (super(), this.isSprite = !0, this.type = "Sprite", void 0 === co) {
                co = new Ii;
                const t1 = new Float32Array([
                    -0.5,
                    -0.5,
                    0,
                    0,
                    0,
                    .5,
                    -0.5,
                    0,
                    1,
                    0,
                    .5,
                    .5,
                    0,
                    1,
                    1,
                    -0.5,
                    .5,
                    0,
                    0,
                    1
                ]), e = new so(t1, 5);
                co.setIndex([
                    0,
                    1,
                    2,
                    0,
                    2,
                    3
                ]), co.setAttribute("position", new oo(e, 3, 0, !1)), co.setAttribute("uv", new oo(e, 2, 3, !1));
            }
            this.geometry = co, this.material = t1, this.center = new me(.5, .5);
        }
        raycast(t1, e) {
            null === t1.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), uo.setFromMatrixScale(this.matrixWorld), go.copy(t1.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t1.camera.matrixWorldInverse, this.matrixWorld), po.setFromMatrixPosition(this.modelViewMatrix), t1.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && uo.multiplyScalar(-po.z);
            const n = this.material.rotation;
            let i, r;
            0 !== n && (r = Math.cos(n), i = Math.sin(n));
            const s = this.center;
            To(_o.set(-0.5, -0.5, 0), po, s, uo, i, r), To(vo.set(.5, -0.5, 0), po, s, uo, i, r), To(xo.set(.5, .5, 0), po, s, uo, i, r), yo.set(0, 0), Mo.set(1, 0), So.set(1, 1);
            let a = t1.ray.intersectTriangle(_o, vo, xo, !1, ho);
            if (null === a && (To(vo.set(-0.5, .5, 0), po, s, uo, i, r), Mo.set(0, 1), a = t1.ray.intersectTriangle(_o, xo, vo, !1, ho), null === a)) return;
            const o = t1.ray.origin.distanceTo(ho);
            o < t1.near || o > t1.far || e.push({
                distance: o,
                point: ho.clone(),
                uv: ri.getInterpolation(ho, _o, vo, xo, yo, Mo, So, new me),
                face: null,
                object: this
            });
        }
        copy(t1, e) {
            return super.copy(t1, e), void 0 !== t1.center && this.center.copy(t1.center), this.material = t1.material, this;
        }
    }
    function To(t1, e, n, i, r, s) {
        mo.subVectors(t1, n).addScalar(.5).multiply(i), void 0 !== r ? (fo.x = s * mo.x - r * mo.y, fo.y = r * mo.x + s * mo.y) : fo.copy(mo), t1.copy(e), t1.x += fo.x, t1.y += fo.y, t1.applyMatrix4(go);
    }
    const Eo = new We, wo = new We;
    class Ao extends jn {
        constructor(){
            super(), this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, {
                levels: {
                    enumerable: !0,
                    value: []
                },
                isLOD: {
                    value: !0
                }
            }), this.autoUpdate = !0;
        }
        copy(t1) {
            super.copy(t1, !1);
            const e = t1.levels;
            for(let t1 = 0, n = e.length; t1 < n; t1++){
                const n = e[t1];
                this.addLevel(n.object.clone(), n.distance, n.hysteresis);
            }
            return this.autoUpdate = t1.autoUpdate, this;
        }
        addLevel(t1, e = 0, n = 0) {
            e = Math.abs(e);
            const i = this.levels;
            let r;
            for(r = 0; r < i.length && !(e < i[r].distance); r++);
            return i.splice(r, 0, {
                distance: e,
                hysteresis: n,
                object: t1
            }), this.add(t1), this;
        }
        getCurrentLevel() {
            return this._currentLevel;
        }
        getObjectForDistance(t1) {
            const e = this.levels;
            if (e.length > 0) {
                let n, i;
                for(n = 1, i = e.length; n < i; n++){
                    let i = e[n].distance;
                    if (e[n].object.visible && (i -= i * e[n].hysteresis), t1 < i) break;
                }
                return e[n - 1].object;
            }
            return null;
        }
        raycast(t1, e) {
            if (this.levels.length > 0) {
                Eo.setFromMatrixPosition(this.matrixWorld);
                const n = t1.ray.origin.distanceTo(Eo);
                this.getObjectForDistance(n).raycast(t1, e);
            }
        }
        update(t1) {
            const e = this.levels;
            if (e.length > 1) {
                Eo.setFromMatrixPosition(t1.matrixWorld), wo.setFromMatrixPosition(this.matrixWorld);
                const n = Eo.distanceTo(wo) / t1.zoom;
                let i, r;
                for(e[0].object.visible = !0, i = 1, r = e.length; i < r; i++){
                    let t1 = e[i].distance;
                    if (e[i].object.visible && (t1 -= t1 * e[i].hysteresis), !(n >= t1)) break;
                    e[i - 1].object.visible = !1, e[i].object.visible = !0;
                }
                for(this._currentLevel = i - 1; i < r; i++)e[i].object.visible = !1;
            }
        }
        toJSON(t1) {
            const e = super.toJSON(t1);
            !1 === this.autoUpdate && (e.object.autoUpdate = !1), e.object.levels = [];
            const n = this.levels;
            for(let t1 = 0, i = n.length; t1 < i; t1++){
                const i = n[t1];
                e.object.levels.push({
                    object: i.object.uuid,
                    distance: i.distance,
                    hysteresis: i.hysteresis
                });
            }
            return e;
        }
    }
    const Ro = new We, Co = new Be, Lo = new Be, Po = new We, Io = new Mn, Uo = new We, Do = new dn, No = new Mn, Oo = new yn;
    class Fo extends Ji {
        constructor(t1, e){
            super(t1, e), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = y, this.bindMatrix = new Mn, this.bindMatrixInverse = new Mn, this.boundingBox = null, this.boundingSphere = null;
        }
        computeBoundingBox() {
            const t1 = this.geometry;
            null === this.boundingBox && (this.boundingBox = new qe), this.boundingBox.makeEmpty();
            const e = t1.getAttribute("position");
            for(let t1 = 0; t1 < e.count; t1++)this.getVertexPosition(t1, Uo), this.boundingBox.expandByPoint(Uo);
        }
        computeBoundingSphere() {
            const t1 = this.geometry;
            null === this.boundingSphere && (this.boundingSphere = new dn), this.boundingSphere.makeEmpty();
            const e = t1.getAttribute("position");
            for(let t1 = 0; t1 < e.count; t1++)this.getVertexPosition(t1, Uo), this.boundingSphere.expandByPoint(Uo);
        }
        copy(t1, e) {
            return super.copy(t1, e), this.bindMode = t1.bindMode, this.bindMatrix.copy(t1.bindMatrix), this.bindMatrixInverse.copy(t1.bindMatrixInverse), this.skeleton = t1.skeleton, null !== t1.boundingBox && (this.boundingBox = t1.boundingBox.clone()), null !== t1.boundingSphere && (this.boundingSphere = t1.boundingSphere.clone()), this;
        }
        raycast(t1, e) {
            const n = this.material, i = this.matrixWorld;
            void 0 !== n && (null === this.boundingSphere && this.computeBoundingSphere(), Do.copy(this.boundingSphere), Do.applyMatrix4(i), !1 !== t1.ray.intersectsSphere(Do) && (No.copy(i).invert(), Oo.copy(t1.ray).applyMatrix4(No), null !== this.boundingBox && !1 === Oo.intersectsBox(this.boundingBox) || this._computeIntersections(t1, e, Oo)));
        }
        getVertexPosition(t1, e) {
            return super.getVertexPosition(t1, e), this.applyBoneTransform(t1, e), e;
        }
        bind(t1, e) {
            this.skeleton = t1, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert();
        }
        pose() {
            this.skeleton.pose();
        }
        normalizeSkinWeights() {
            const t1 = new Be, e = this.geometry.attributes.skinWeight;
            for(let n = 0, i = e.count; n < i; n++){
                t1.fromBufferAttribute(e, n);
                const i = 1 / t1.manhattanLength();
                i !== 1 / 0 ? t1.multiplyScalar(i) : t1.set(1, 0, 0, 0), e.setXYZW(n, t1.x, t1.y, t1.z, t1.w);
            }
        }
        updateMatrixWorld(t1) {
            super.updateMatrixWorld(t1), this.bindMode === y ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === M ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
        }
        applyBoneTransform(t1, e) {
            const n = this.skeleton, i = this.geometry;
            Co.fromBufferAttribute(i.attributes.skinIndex, t1), Lo.fromBufferAttribute(i.attributes.skinWeight, t1), Ro.copy(e).applyMatrix4(this.bindMatrix), e.set(0, 0, 0);
            for(let t1 = 0; t1 < 4; t1++){
                const i = Lo.getComponent(t1);
                if (0 !== i) {
                    const r = Co.getComponent(t1);
                    Io.multiplyMatrices(n.bones[r].matrixWorld, n.boneInverses[r]), e.addScaledVector(Po.copy(Ro).applyMatrix4(Io), i);
                }
            }
            return e.applyMatrix4(this.bindMatrixInverse);
        }
        boneTransform(t1, e) {
            return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."), this.applyBoneTransform(t1, e);
        }
    }
    class Bo extends jn {
        constructor(){
            super(), this.isBone = !0, this.type = "Bone";
        }
    }
    class zo extends Fe {
        constructor(t1 = null, e = 1, n = 1, i, r, s, a, o, l = 1003, c = 1003, h, u){
            super(null, s, a, o, l, c, i, r, h, u), this.isDataTexture = !0, this.image = {
                data: t1,
                width: e,
                height: n
            }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
        }
    }
    const Go = new Mn, Ho = new Mn;
    class Vo {
        constructor(t1 = [], e = []){
            this.uuid = se(), this.bones = t1.slice(0), this.boneInverses = e, this.boneMatrices = null, this.boneTexture = null, this.init();
        }
        init() {
            const t1 = this.bones, e = this.boneInverses;
            if (this.boneMatrices = new Float32Array(16 * t1.length), 0 === e.length) this.calculateInverses();
            else if (t1.length !== e.length) {
                console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
                for(let t1 = 0, e = this.bones.length; t1 < e; t1++)this.boneInverses.push(new Mn);
            }
        }
        calculateInverses() {
            this.boneInverses.length = 0;
            for(let t1 = 0, e = this.bones.length; t1 < e; t1++){
                const e = new Mn;
                this.bones[t1] && e.copy(this.bones[t1].matrixWorld).invert(), this.boneInverses.push(e);
            }
        }
        pose() {
            for(let t1 = 0, e = this.bones.length; t1 < e; t1++){
                const e = this.bones[t1];
                e && e.matrixWorld.copy(this.boneInverses[t1]).invert();
            }
            for(let t1 = 0, e = this.bones.length; t1 < e; t1++){
                const e = this.bones[t1];
                e && (e.parent && e.parent.isBone ? (e.matrix.copy(e.parent.matrixWorld).invert(), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale));
            }
        }
        update() {
            const t1 = this.bones, e = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
            for(let i = 0, r = t1.length; i < r; i++){
                const r = t1[i] ? t1[i].matrixWorld : Ho;
                Go.multiplyMatrices(r, e[i]), Go.toArray(n, 16 * i);
            }
            null !== i && (i.needsUpdate = !0);
        }
        clone() {
            return new Vo(this.bones, this.boneInverses);
        }
        computeBoneTexture() {
            let t1 = Math.sqrt(4 * this.bones.length);
            t1 = 4 * Math.ceil(t1 / 4), t1 = Math.max(t1, 4);
            const e = new Float32Array(t1 * t1 * 4);
            e.set(this.boneMatrices);
            const n = new zo(e, t1, t1, j, H);
            return n.needsUpdate = !0, this.boneMatrices = e, this.boneTexture = n, this;
        }
        getBoneByName(t1) {
            for(let e = 0, n = this.bones.length; e < n; e++){
                const n = this.bones[e];
                if (n.name === t1) return n;
            }
        }
        dispose() {
            null !== this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = null);
        }
        fromJSON(t1, e) {
            this.uuid = t1.uuid;
            for(let n = 0, i = t1.bones.length; n < i; n++){
                const i = t1.bones[n];
                let r = e[i];
                void 0 === r && (console.warn("THREE.Skeleton: No bone found with UUID:", i), r = new Bo), this.bones.push(r), this.boneInverses.push((new Mn).fromArray(t1.boneInverses[n]));
            }
            return this.init(), this;
        }
        toJSON() {
            const t1 = {
                metadata: {
                    version: 4.6,
                    type: "Skeleton",
                    generator: "Skeleton.toJSON"
                },
                bones: [],
                boneInverses: []
            };
            t1.uuid = this.uuid;
            const e = this.bones, n = this.boneInverses;
            for(let i = 0, r = e.length; i < r; i++){
                const r = e[i];
                t1.bones.push(r.uuid);
                const s = n[i];
                t1.boneInverses.push(s.toArray());
            }
            return t1;
        }
    }
    class ko extends Mi {
        constructor(t1, e, n, i = 1){
            super(t1, e, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i;
        }
        copy(t1) {
            return super.copy(t1), this.meshPerAttribute = t1.meshPerAttribute, this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.meshPerAttribute = this.meshPerAttribute, t1.isInstancedBufferAttribute = !0, t1;
        }
    }
    const Wo = new Mn, Xo = new Mn, jo = [], qo = new qe, Yo = new Mn, Zo = new Ji, Jo = new dn;
    class Ko extends Ji {
        constructor(t1, e, n){
            super(t1, e), this.isInstancedMesh = !0, this.instanceMatrix = new ko(new Float32Array(16 * n), 16), this.instanceColor = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
            for(let t1 = 0; t1 < n; t1++)this.setMatrixAt(t1, Yo);
        }
        computeBoundingBox() {
            const t1 = this.geometry, e = this.count;
            null === this.boundingBox && (this.boundingBox = new qe), null === t1.boundingBox && t1.computeBoundingBox(), this.boundingBox.makeEmpty();
            for(let n = 0; n < e; n++)this.getMatrixAt(n, Wo), qo.copy(t1.boundingBox).applyMatrix4(Wo), this.boundingBox.union(qo);
        }
        computeBoundingSphere() {
            const t1 = this.geometry, e = this.count;
            null === this.boundingSphere && (this.boundingSphere = new dn), null === t1.boundingSphere && t1.computeBoundingSphere(), this.boundingSphere.makeEmpty();
            for(let n = 0; n < e; n++)this.getMatrixAt(n, Wo), Jo.copy(t1.boundingSphere).applyMatrix4(Wo), this.boundingSphere.union(Jo);
        }
        copy(t1, e) {
            return super.copy(t1, e), this.instanceMatrix.copy(t1.instanceMatrix), null !== t1.instanceColor && (this.instanceColor = t1.instanceColor.clone()), this.count = t1.count, null !== t1.boundingBox && (this.boundingBox = t1.boundingBox.clone()), null !== t1.boundingSphere && (this.boundingSphere = t1.boundingSphere.clone()), this;
        }
        getColorAt(t1, e) {
            e.fromArray(this.instanceColor.array, 3 * t1);
        }
        getMatrixAt(t1, e) {
            e.fromArray(this.instanceMatrix.array, 16 * t1);
        }
        raycast(t1, e) {
            const n = this.matrixWorld, i = this.count;
            if (Zo.geometry = this.geometry, Zo.material = this.material, void 0 !== Zo.material && (null === this.boundingSphere && this.computeBoundingSphere(), Jo.copy(this.boundingSphere), Jo.applyMatrix4(n), !1 !== t1.ray.intersectsSphere(Jo))) for(let r = 0; r < i; r++){
                this.getMatrixAt(r, Wo), Xo.multiplyMatrices(n, Wo), Zo.matrixWorld = Xo, Zo.raycast(t1, jo);
                for(let t1 = 0, n = jo.length; t1 < n; t1++){
                    const n = jo[t1];
                    n.instanceId = r, n.object = this, e.push(n);
                }
                jo.length = 0;
            }
        }
        setColorAt(t1, e) {
            null === this.instanceColor && (this.instanceColor = new ko(new Float32Array(3 * this.instanceMatrix.count), 3)), e.toArray(this.instanceColor.array, 3 * t1);
        }
        setMatrixAt(t1, e) {
            e.toArray(this.instanceMatrix.array, 16 * t1);
        }
        updateMorphTargets() {}
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
    }
    function $o(t1, e) {
        return t1.z - e.z;
    }
    function Qo(t1, e) {
        return e.z - t1.z;
    }
    class tl {
        constructor(){
            this.index = 0, this.pool = [], this.list = [];
        }
        push(t1, e) {
            const n = this.pool, i = this.list;
            this.index >= n.length && n.push({
                start: -1,
                count: -1,
                z: -1
            });
            const r = n[this.index];
            i.push(r), this.index++, r.start = t1.start, r.count = t1.count, r.z = e;
        }
        reset() {
            this.list.length = 0, this.index = 0;
        }
    }
    const el = "batchId", nl = new Mn, il = new Mn, rl = new Mn, sl = new Mn, al = new gr, ol = new qe, ll = new dn, cl = new We, hl = new tl, ul = new Ji, dl = [];
    function pl(t1, e, n = 0) {
        const i = e.itemSize;
        if (t1.isInterleavedBufferAttribute || t1.array.constructor !== e.array.constructor) {
            const r = t1.count;
            for(let s = 0; s < r; s++)for(let r = 0; r < i; r++)e.setComponent(s + n, r, t1.getComponent(s, r));
        } else e.array.set(t1.array, n * i);
        e.needsUpdate = !0;
    }
    class ml extends Ji {
        get maxGeometryCount() {
            return this._maxGeometryCount;
        }
        constructor(t1, e, n = 2 * e, i){
            super(new Ii, i), this.isBatchedMesh = !0, this.perObjectFrustumCulled = !0, this.sortObjects = !0, this.boundingBox = null, this.boundingSphere = null, this.customSort = null, this._drawRanges = [], this._reservedRanges = [], this._visibility = [], this._active = [], this._bounds = [], this._maxGeometryCount = t1, this._maxVertexCount = e, this._maxIndexCount = n, this._geometryInitialized = !1, this._geometryCount = 0, this._multiDrawCounts = new Int32Array(t1), this._multiDrawStarts = new Int32Array(t1), this._multiDrawCount = 0, this._visibilityChanged = !0, this._matricesTexture = null, this._initMatricesTexture();
        }
        _initMatricesTexture() {
            let t1 = Math.sqrt(4 * this._maxGeometryCount);
            t1 = 4 * Math.ceil(t1 / 4), t1 = Math.max(t1, 4);
            const e = new Float32Array(t1 * t1 * 4), n = new zo(e, t1, t1, j, H);
            this._matricesTexture = n;
        }
        _initializeGeometry(t1) {
            const e = this.geometry, n = this._maxVertexCount, i = this._maxGeometryCount, r = this._maxIndexCount;
            if (!1 === this._geometryInitialized) {
                for(const i in t1.attributes){
                    const r = t1.getAttribute(i), { array: s, itemSize: a, normalized: o } = r, l = new s.constructor(n * a), c = new r.constructor(l, a, o);
                    c.setUsage(r.usage), e.setAttribute(i, c);
                }
                if (null !== t1.getIndex()) {
                    const t1 = n > 65536 ? new Uint32Array(r) : new Uint16Array(r);
                    e.setIndex(new Mi(t1, 1));
                }
                const s = i > 65536 ? new Uint32Array(n) : new Uint16Array(n);
                e.setAttribute(el, new Mi(s, 1)), this._geometryInitialized = !0;
            }
        }
        _validateGeometry(t1) {
            if (t1.getAttribute(el)) throw new Error(`BatchedMesh: Geometry cannot use attribute "${el}"`);
            const e = this.geometry;
            if (Boolean(t1.getIndex()) !== Boolean(e.getIndex())) throw new Error('BatchedMesh: All geometries must consistently have "index".');
            for(const n in e.attributes){
                if (n === el) continue;
                if (!t1.hasAttribute(n)) throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);
                const i = t1.getAttribute(n), r = e.getAttribute(n);
                if (i.itemSize !== r.itemSize || i.normalized !== r.normalized) throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.");
            }
        }
        setCustomSort(t1) {
            return this.customSort = t1, this;
        }
        computeBoundingBox() {
            null === this.boundingBox && (this.boundingBox = new qe);
            const t1 = this._geometryCount, e = this.boundingBox, n = this._active;
            e.makeEmpty();
            for(let i = 0; i < t1; i++)!1 !== n[i] && (this.getMatrixAt(i, nl), this.getBoundingBoxAt(i, ol).applyMatrix4(nl), e.union(ol));
        }
        computeBoundingSphere() {
            null === this.boundingSphere && (this.boundingSphere = new dn);
            const t1 = this._geometryCount, e = this.boundingSphere, n = this._active;
            e.makeEmpty();
            for(let i = 0; i < t1; i++)!1 !== n[i] && (this.getMatrixAt(i, nl), this.getBoundingSphereAt(i, ll).applyMatrix4(nl), e.union(ll));
        }
        addGeometry(t1, e = -1, n = -1) {
            if (this._initializeGeometry(t1), this._validateGeometry(t1), this._geometryCount >= this._maxGeometryCount) throw new Error("BatchedMesh: Maximum geometry count reached.");
            const i = {
                vertexStart: -1,
                vertexCount: -1,
                indexStart: -1,
                indexCount: -1
            };
            let r = null;
            const s = this._reservedRanges, a = this._drawRanges, o = this._bounds;
            0 !== this._geometryCount && (r = s[s.length - 1]), i.vertexCount = -1 === e ? t1.getAttribute("position").count : e, i.vertexStart = null === r ? 0 : r.vertexStart + r.vertexCount;
            const l = t1.getIndex(), c = null !== l;
            if (c && (i.indexCount = -1 === n ? l.count : n, i.indexStart = null === r ? 0 : r.indexStart + r.indexCount), -1 !== i.indexStart && i.indexStart + i.indexCount > this._maxIndexCount || i.vertexStart + i.vertexCount > this._maxVertexCount) throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");
            const h = this._visibility, u = this._active, d = this._matricesTexture, p = this._matricesTexture.image.data;
            h.push(!0), u.push(!0);
            const m = this._geometryCount;
            this._geometryCount++, rl.toArray(p, 16 * m), d.needsUpdate = !0, s.push(i), a.push({
                start: c ? i.indexStart : i.vertexStart,
                count: -1
            }), o.push({
                boxInitialized: !1,
                box: new qe,
                sphereInitialized: !1,
                sphere: new dn
            });
            const f = this.geometry.getAttribute(el);
            for(let t1 = 0; t1 < i.vertexCount; t1++)f.setX(i.vertexStart + t1, m);
            return f.needsUpdate = !0, this.setGeometryAt(m, t1), m;
        }
        setGeometryAt(t1, e) {
            if (t1 >= this._geometryCount) throw new Error("BatchedMesh: Maximum geometry count reached.");
            this._validateGeometry(e);
            const n = this.geometry, i = null !== n.getIndex(), r = n.getIndex(), s = e.getIndex(), a = this._reservedRanges[t1];
            if (i && s.count > a.indexCount || e.attributes.position.count > a.vertexCount) throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");
            const o = a.vertexStart, l = a.vertexCount;
            for(const t1 in n.attributes){
                if (t1 === el) continue;
                const i = e.getAttribute(t1), r = n.getAttribute(t1);
                pl(i, r, o);
                const s = i.itemSize;
                for(let t1 = i.count, e = l; t1 < e; t1++){
                    const e = o + t1;
                    for(let t1 = 0; t1 < s; t1++)r.setComponent(e, t1, 0);
                }
                r.needsUpdate = !0;
            }
            if (i) {
                const t1 = a.indexStart;
                for(let e = 0; e < s.count; e++)r.setX(t1 + e, o + s.getX(e));
                for(let e = s.count, n = a.indexCount; e < n; e++)r.setX(t1 + e, o);
                r.needsUpdate = !0;
            }
            const c = this._bounds[t1];
            null !== e.boundingBox ? (c.box.copy(e.boundingBox), c.boxInitialized = !0) : c.boxInitialized = !1, null !== e.boundingSphere ? (c.sphere.copy(e.boundingSphere), c.sphereInitialized = !0) : c.sphereInitialized = !1;
            const h = this._drawRanges[t1], u = e.getAttribute("position");
            return h.count = i ? s.count : u.count, this._visibilityChanged = !0, t1;
        }
        deleteGeometry(t1) {
            const e = this._active;
            return t1 >= e.length || !1 === e[t1] || (e[t1] = !1, this._visibilityChanged = !0), this;
        }
        getBoundingBoxAt(t1, e) {
            if (!1 === this._active[t1]) return this;
            const n = this._bounds[t1], i = n.box, r = this.geometry;
            if (!1 === n.boxInitialized) {
                i.makeEmpty();
                const e = r.index, s = r.attributes.position, a = this._drawRanges[t1];
                for(let t1 = a.start, n = a.start + a.count; t1 < n; t1++){
                    let n = t1;
                    e && (n = e.getX(n)), i.expandByPoint(cl.fromBufferAttribute(s, n));
                }
                n.boxInitialized = !0;
            }
            return e.copy(i), e;
        }
        getBoundingSphereAt(t1, e) {
            if (!1 === this._active[t1]) return this;
            const n = this._bounds[t1], i = n.sphere, r = this.geometry;
            if (!1 === n.sphereInitialized) {
                i.makeEmpty(), this.getBoundingBoxAt(t1, ol), ol.getCenter(i.center);
                const e = r.index, s = r.attributes.position, a = this._drawRanges[t1];
                let o = 0;
                for(let t1 = a.start, n = a.start + a.count; t1 < n; t1++){
                    let n = t1;
                    e && (n = e.getX(n)), cl.fromBufferAttribute(s, n), o = Math.max(o, i.center.distanceToSquared(cl));
                }
                i.radius = Math.sqrt(o), n.sphereInitialized = !0;
            }
            return e.copy(i), e;
        }
        setMatrixAt(t1, e) {
            const n = this._active, i = this._matricesTexture, r = this._matricesTexture.image.data;
            return t1 >= this._geometryCount || !1 === n[t1] || (e.toArray(r, 16 * t1), i.needsUpdate = !0), this;
        }
        getMatrixAt(t1, e) {
            const n = this._active, i = this._matricesTexture.image.data;
            return t1 >= this._geometryCount || !1 === n[t1] ? null : e.fromArray(i, 16 * t1);
        }
        setVisibleAt(t1, e) {
            const n = this._visibility, i = this._active;
            return t1 >= this._geometryCount || !1 === i[t1] || n[t1] === e || (n[t1] = e, this._visibilityChanged = !0), this;
        }
        getVisibleAt(t1) {
            const e = this._visibility, n = this._active;
            return !(t1 >= this._geometryCount || !1 === n[t1]) && e[t1];
        }
        raycast(t1, e) {
            const n = this._visibility, i = this._active, r = this._drawRanges, s = this._geometryCount, a = this.matrixWorld, o = this.geometry;
            ul.material = this.material, ul.geometry.index = o.index, ul.geometry.attributes = o.attributes, null === ul.geometry.boundingBox && (ul.geometry.boundingBox = new qe), null === ul.geometry.boundingSphere && (ul.geometry.boundingSphere = new dn);
            for(let o = 0; o < s; o++){
                if (!n[o] || !i[o]) continue;
                const s = r[o];
                ul.geometry.setDrawRange(s.start, s.count), this.getMatrixAt(o, ul.matrixWorld).premultiply(a), this.getBoundingBoxAt(o, ul.geometry.boundingBox), this.getBoundingSphereAt(o, ul.geometry.boundingSphere), ul.raycast(t1, dl);
                for(let t1 = 0, n = dl.length; t1 < n; t1++){
                    const n = dl[t1];
                    n.object = this, n.batchId = o, e.push(n);
                }
                dl.length = 0;
            }
            ul.material = null, ul.geometry.index = null, ul.geometry.attributes = {}, ul.geometry.setDrawRange(0, 1 / 0);
        }
        copy(t1) {
            return super.copy(t1), this.geometry = t1.geometry.clone(), this.perObjectFrustumCulled = t1.perObjectFrustumCulled, this.sortObjects = t1.sortObjects, this.boundingBox = null !== t1.boundingBox ? t1.boundingBox.clone() : null, this.boundingSphere = null !== t1.boundingSphere ? t1.boundingSphere.clone() : null, this._drawRanges = t1._drawRanges.map((t1)=>({
                    ...t1
                })), this._reservedRanges = t1._reservedRanges.map((t1)=>({
                    ...t1
                })), this._visibility = t1._visibility.slice(), this._active = t1._active.slice(), this._bounds = t1._bounds.map((t1)=>({
                    boxInitialized: t1.boxInitialized,
                    box: t1.box.clone(),
                    sphereInitialized: t1.sphereInitialized,
                    sphere: t1.sphere.clone()
                })), this._maxGeometryCount = t1._maxGeometryCount, this._maxVertexCount = t1._maxVertexCount, this._maxIndexCount = t1._maxIndexCount, this._geometryInitialized = t1._geometryInitialized, this._geometryCount = t1._geometryCount, this._multiDrawCounts = t1._multiDrawCounts.slice(), this._multiDrawStarts = t1._multiDrawStarts.slice(), this._matricesTexture = t1._matricesTexture.clone(), this._matricesTexture.image.data = this._matricesTexture.image.slice(), this;
        }
        dispose() {
            return this.geometry.dispose(), this._matricesTexture.dispose(), this._matricesTexture = null, this;
        }
        onBeforeRender(t1, e, n, i, r) {
            if (!this._visibilityChanged && !this.perObjectFrustumCulled && !this.sortObjects) return;
            const s = i.getIndex(), a = null === s ? 1 : s.array.BYTES_PER_ELEMENT, o = this._visibility, l = this._multiDrawStarts, c = this._multiDrawCounts, h = this._drawRanges, u = this.perObjectFrustumCulled;
            u && (sl.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse).multiply(this.matrixWorld), al.setFromProjectionMatrix(sl, t1.isWebGPURenderer ? Qt : $t));
            let d = 0;
            if (this.sortObjects) {
                il.copy(this.matrixWorld).invert(), cl.setFromMatrixPosition(n.matrixWorld).applyMatrix4(il);
                for(let t1 = 0, e = o.length; t1 < e; t1++)if (o[t1]) {
                    this.getMatrixAt(t1, nl), this.getBoundingSphereAt(t1, ll).applyMatrix4(nl);
                    let e = !1;
                    if (u && (e = !al.intersectsSphere(ll)), !e) {
                        const e = cl.distanceTo(ll.center);
                        hl.push(h[t1], e);
                    }
                }
                const t1 = hl.list, e = this.customSort;
                null === e ? t1.sort(r.transparent ? Qo : $o) : e.call(this, t1, n);
                for(let e = 0, n = t1.length; e < n; e++){
                    const n = t1[e];
                    l[d] = n.start * a, c[d] = n.count, d++;
                }
                hl.reset();
            } else for(let t1 = 0, e = o.length; t1 < e; t1++)if (o[t1]) {
                let e = !1;
                if (u && (this.getMatrixAt(t1, nl), this.getBoundingSphereAt(t1, ll).applyMatrix4(nl), e = !al.intersectsSphere(ll)), !e) {
                    const e = h[t1];
                    l[d] = e.start * a, c[d] = e.count, d++;
                }
            }
            this._multiDrawCount = d, this._visibilityChanged = !1;
        }
        onBeforeShadow(t1, e, n, i, r, s) {
            this.onBeforeRender(t1, null, i, r, s);
        }
    }
    class fl extends di {
        constructor(t1){
            super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new ci(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.color.copy(t1.color), this.map = t1.map, this.linewidth = t1.linewidth, this.linecap = t1.linecap, this.linejoin = t1.linejoin, this.fog = t1.fog, this;
        }
    }
    const gl = new We, _l = new We, vl = new Mn, xl = new yn, yl = new dn;
    class Ml extends jn {
        constructor(t1 = new Ii, e = new fl){
            super(), this.isLine = !0, this.type = "Line", this.geometry = t1, this.material = e, this.updateMorphTargets();
        }
        copy(t1, e) {
            return super.copy(t1, e), this.material = Array.isArray(t1.material) ? t1.material.slice() : t1.material, this.geometry = t1.geometry, this;
        }
        computeLineDistances() {
            const t1 = this.geometry;
            if (null === t1.index) {
                const e = t1.attributes.position, n = [
                    0
                ];
                for(let t1 = 1, i = e.count; t1 < i; t1++)gl.fromBufferAttribute(e, t1 - 1), _l.fromBufferAttribute(e, t1), n[t1] = n[t1 - 1], n[t1] += gl.distanceTo(_l);
                t1.setAttribute("lineDistance", new Ti(n, 1));
            } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            return this;
        }
        raycast(t1, e) {
            const n = this.geometry, i = this.matrixWorld, r = t1.params.Line.threshold, s = n.drawRange;
            if (null === n.boundingSphere && n.computeBoundingSphere(), yl.copy(n.boundingSphere), yl.applyMatrix4(i), yl.radius += r, !1 === t1.ray.intersectsSphere(yl)) return;
            vl.copy(i).invert(), xl.copy(t1.ray).applyMatrix4(vl);
            const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a, l = new We, c = new We, h = new We, u = new We, d = this.isLineSegments ? 2 : 1, p = n.index, m = n.attributes.position;
            if (null !== p) for(let n = Math.max(0, s.start), i = Math.min(p.count, s.start + s.count) - 1; n < i; n += d){
                const i = p.getX(n), r = p.getX(n + 1);
                l.fromBufferAttribute(m, i), c.fromBufferAttribute(m, r);
                if (xl.distanceSqToSegment(l, c, u, h) > o) continue;
                u.applyMatrix4(this.matrixWorld);
                const s = t1.ray.origin.distanceTo(u);
                s < t1.near || s > t1.far || e.push({
                    distance: s,
                    point: h.clone().applyMatrix4(this.matrixWorld),
                    index: n,
                    face: null,
                    faceIndex: null,
                    object: this
                });
            }
            else for(let n = Math.max(0, s.start), i = Math.min(m.count, s.start + s.count) - 1; n < i; n += d){
                l.fromBufferAttribute(m, n), c.fromBufferAttribute(m, n + 1);
                if (xl.distanceSqToSegment(l, c, u, h) > o) continue;
                u.applyMatrix4(this.matrixWorld);
                const i = t1.ray.origin.distanceTo(u);
                i < t1.near || i > t1.far || e.push({
                    distance: i,
                    point: h.clone().applyMatrix4(this.matrixWorld),
                    index: n,
                    face: null,
                    faceIndex: null,
                    object: this
                });
            }
        }
        updateMorphTargets() {
            const t1 = this.geometry.morphAttributes, e = Object.keys(t1);
            if (e.length > 0) {
                const n = t1[e[0]];
                if (void 0 !== n) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for(let t1 = 0, e = n.length; t1 < e; t1++){
                        const e = n[t1].name || String(t1);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t1;
                    }
                }
            }
        }
    }
    const Sl = new We, bl = new We;
    class Tl extends Ml {
        constructor(t1, e){
            super(t1, e), this.isLineSegments = !0, this.type = "LineSegments";
        }
        computeLineDistances() {
            const t1 = this.geometry;
            if (null === t1.index) {
                const e = t1.attributes.position, n = [];
                for(let t1 = 0, i = e.count; t1 < i; t1 += 2)Sl.fromBufferAttribute(e, t1), bl.fromBufferAttribute(e, t1 + 1), n[t1] = 0 === t1 ? 0 : n[t1 - 1], n[t1 + 1] = n[t1] + Sl.distanceTo(bl);
                t1.setAttribute("lineDistance", new Ti(n, 1));
            } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            return this;
        }
    }
    class El extends Ml {
        constructor(t1, e){
            super(t1, e), this.isLineLoop = !0, this.type = "LineLoop";
        }
    }
    class wl extends di {
        constructor(t1){
            super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new ci(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.color.copy(t1.color), this.map = t1.map, this.alphaMap = t1.alphaMap, this.size = t1.size, this.sizeAttenuation = t1.sizeAttenuation, this.fog = t1.fog, this;
        }
    }
    const Al = new Mn, Rl = new yn, Cl = new dn, Ll = new We;
    class Pl extends jn {
        constructor(t1 = new Ii, e = new wl){
            super(), this.isPoints = !0, this.type = "Points", this.geometry = t1, this.material = e, this.updateMorphTargets();
        }
        copy(t1, e) {
            return super.copy(t1, e), this.material = Array.isArray(t1.material) ? t1.material.slice() : t1.material, this.geometry = t1.geometry, this;
        }
        raycast(t1, e) {
            const n = this.geometry, i = this.matrixWorld, r = t1.params.Points.threshold, s = n.drawRange;
            if (null === n.boundingSphere && n.computeBoundingSphere(), Cl.copy(n.boundingSphere), Cl.applyMatrix4(i), Cl.radius += r, !1 === t1.ray.intersectsSphere(Cl)) return;
            Al.copy(i).invert(), Rl.copy(t1.ray).applyMatrix4(Al);
            const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a, l = n.index, c = n.attributes.position;
            if (null !== l) for(let n = Math.max(0, s.start), r = Math.min(l.count, s.start + s.count); n < r; n++){
                const r = l.getX(n);
                Ll.fromBufferAttribute(c, r), Il(Ll, r, o, i, t1, e, this);
            }
            else for(let n = Math.max(0, s.start), r = Math.min(c.count, s.start + s.count); n < r; n++)Ll.fromBufferAttribute(c, n), Il(Ll, n, o, i, t1, e, this);
        }
        updateMorphTargets() {
            const t1 = this.geometry.morphAttributes, e = Object.keys(t1);
            if (e.length > 0) {
                const n = t1[e[0]];
                if (void 0 !== n) {
                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                    for(let t1 = 0, e = n.length; t1 < e; t1++){
                        const e = n[t1].name || String(t1);
                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t1;
                    }
                }
            }
        }
    }
    function Il(t1, e, n, i, r, s, a) {
        const o = Rl.distanceSqToPoint(t1);
        if (o < n) {
            const n = new We;
            Rl.closestPointToPoint(t1, n), n.applyMatrix4(i);
            const l = r.ray.origin.distanceTo(n);
            if (l < r.near || l > r.far) return;
            s.push({
                distance: l,
                distanceToRay: Math.sqrt(o),
                point: n,
                index: e,
                face: null,
                object: a
            });
        }
    }
    class Ul extends Fe {
        constructor(t1, e, n, i, r, s, a, o, l, c, h, u){
            super(null, s, a, o, l, c, i, r, h, u), this.isCompressedTexture = !0, this.image = {
                width: e,
                height: n
            }, this.mipmaps = t1, this.flipY = !1, this.generateMipmaps = !1;
        }
    }
    class Dl {
        constructor(){
            this.type = "Curve", this.arcLengthDivisions = 200;
        }
        getPoint() {
            return console.warn("THREE.Curve: .getPoint() not implemented."), null;
        }
        getPointAt(t1, e) {
            const n = this.getUtoTmapping(t1);
            return this.getPoint(n, e);
        }
        getPoints(t1 = 5) {
            const e = [];
            for(let n = 0; n <= t1; n++)e.push(this.getPoint(n / t1));
            return e;
        }
        getSpacedPoints(t1 = 5) {
            const e = [];
            for(let n = 0; n <= t1; n++)e.push(this.getPointAt(n / t1));
            return e;
        }
        getLength() {
            const t1 = this.getLengths();
            return t1[t1.length - 1];
        }
        getLengths(t1 = this.arcLengthDivisions) {
            if (this.cacheArcLengths && this.cacheArcLengths.length === t1 + 1 && !this.needsUpdate) return this.cacheArcLengths;
            this.needsUpdate = !1;
            const e = [];
            let n, i = this.getPoint(0), r = 0;
            e.push(0);
            for(let s = 1; s <= t1; s++)n = this.getPoint(s / t1), r += n.distanceTo(i), e.push(r), i = n;
            return this.cacheArcLengths = e, e;
        }
        updateArcLengths() {
            this.needsUpdate = !0, this.getLengths();
        }
        getUtoTmapping(t1, e) {
            const n = this.getLengths();
            let i = 0;
            const r = n.length;
            let s;
            s = e || t1 * n[r - 1];
            let a, o = 0, l = r - 1;
            for(; o <= l;)if (i = Math.floor(o + (l - o) / 2), a = n[i] - s, a < 0) o = i + 1;
            else {
                if (!(a > 0)) {
                    l = i;
                    break;
                }
                l = i - 1;
            }
            if (i = l, n[i] === s) return i / (r - 1);
            const c = n[i];
            return (i + (s - c) / (n[i + 1] - c)) / (r - 1);
        }
        getTangent(t1, e) {
            const n = 1e-4;
            let i = t1 - n, r = t1 + n;
            i < 0 && (i = 0), r > 1 && (r = 1);
            const s = this.getPoint(i), a = this.getPoint(r), o = e || (s.isVector2 ? new me : new We);
            return o.copy(a).sub(s).normalize(), o;
        }
        getTangentAt(t1, e) {
            const n = this.getUtoTmapping(t1);
            return this.getTangent(n, e);
        }
        computeFrenetFrames(t1, e) {
            const n = new We, i = [], r = [], s = [], a = new We, o = new Mn;
            for(let e = 0; e <= t1; e++){
                const n = e / t1;
                i[e] = this.getTangentAt(n, new We);
            }
            r[0] = new We, s[0] = new We;
            let l = Number.MAX_VALUE;
            const c = Math.abs(i[0].x), h = Math.abs(i[0].y), u = Math.abs(i[0].z);
            c <= l && (l = c, n.set(1, 0, 0)), h <= l && (l = h, n.set(0, 1, 0)), u <= l && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], a), s[0].crossVectors(i[0], r[0]);
            for(let e = 1; e <= t1; e++){
                if (r[e] = r[e - 1].clone(), s[e] = s[e - 1].clone(), a.crossVectors(i[e - 1], i[e]), a.length() > Number.EPSILON) {
                    a.normalize();
                    const t1 = Math.acos(ae(i[e - 1].dot(i[e]), -1, 1));
                    r[e].applyMatrix4(o.makeRotationAxis(a, t1));
                }
                s[e].crossVectors(i[e], r[e]);
            }
            if (!0 === e) {
                let e = Math.acos(ae(r[0].dot(r[t1]), -1, 1));
                e /= t1, i[0].dot(a.crossVectors(r[0], r[t1])) > 0 && (e = -e);
                for(let n = 1; n <= t1; n++)r[n].applyMatrix4(o.makeRotationAxis(i[n], e * n)), s[n].crossVectors(i[n], r[n]);
            }
            return {
                tangents: i,
                normals: r,
                binormals: s
            };
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t1) {
            return this.arcLengthDivisions = t1.arcLengthDivisions, this;
        }
        toJSON() {
            const t1 = {
                metadata: {
                    version: 4.6,
                    type: "Curve",
                    generator: "Curve.toJSON"
                }
            };
            return t1.arcLengthDivisions = this.arcLengthDivisions, t1.type = this.type, t1;
        }
        fromJSON(t1) {
            return this.arcLengthDivisions = t1.arcLengthDivisions, this;
        }
    }
    class Nl extends Dl {
        constructor(t1 = 0, e = 0, n = 1, i = 1, r = 0, s = 2 * Math.PI, a = !1, o = 0){
            super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = t1, this.aY = e, this.xRadius = n, this.yRadius = i, this.aStartAngle = r, this.aEndAngle = s, this.aClockwise = a, this.aRotation = o;
        }
        getPoint(t1, e) {
            const n = e || new me, i = 2 * Math.PI;
            let r = this.aEndAngle - this.aStartAngle;
            const s = Math.abs(r) < Number.EPSILON;
            for(; r < 0;)r += i;
            for(; r > i;)r -= i;
            r < Number.EPSILON && (r = s ? 0 : i), !0 !== this.aClockwise || s || (r === i ? r = -i : r -= i);
            const a = this.aStartAngle + t1 * r;
            let o = this.aX + this.xRadius * Math.cos(a), l = this.aY + this.yRadius * Math.sin(a);
            if (0 !== this.aRotation) {
                const t1 = Math.cos(this.aRotation), e = Math.sin(this.aRotation), n = o - this.aX, i = l - this.aY;
                o = n * t1 - i * e + this.aX, l = n * e + i * t1 + this.aY;
            }
            return n.set(o, l);
        }
        copy(t1) {
            return super.copy(t1), this.aX = t1.aX, this.aY = t1.aY, this.xRadius = t1.xRadius, this.yRadius = t1.yRadius, this.aStartAngle = t1.aStartAngle, this.aEndAngle = t1.aEndAngle, this.aClockwise = t1.aClockwise, this.aRotation = t1.aRotation, this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.aX = this.aX, t1.aY = this.aY, t1.xRadius = this.xRadius, t1.yRadius = this.yRadius, t1.aStartAngle = this.aStartAngle, t1.aEndAngle = this.aEndAngle, t1.aClockwise = this.aClockwise, t1.aRotation = this.aRotation, t1;
        }
        fromJSON(t1) {
            return super.fromJSON(t1), this.aX = t1.aX, this.aY = t1.aY, this.xRadius = t1.xRadius, this.yRadius = t1.yRadius, this.aStartAngle = t1.aStartAngle, this.aEndAngle = t1.aEndAngle, this.aClockwise = t1.aClockwise, this.aRotation = t1.aRotation, this;
        }
    }
    class Ol extends Nl {
        constructor(t1, e, n, i, r, s){
            super(t1, e, n, n, i, r, s), this.isArcCurve = !0, this.type = "ArcCurve";
        }
    }
    function Fl() {
        let t1 = 0, e = 0, n = 0, i = 0;
        function r(r, s, a, o) {
            t1 = r, e = a, n = -3 * r + 3 * s - 2 * a - o, i = 2 * r - 2 * s + a + o;
        }
        return {
            initCatmullRom: function(t1, e, n, i, s) {
                r(e, n, s * (n - t1), s * (i - e));
            },
            initNonuniformCatmullRom: function(t1, e, n, i, s, a, o) {
                let l = (e - t1) / s - (n - t1) / (s + a) + (n - e) / a, c = (n - e) / a - (i - e) / (a + o) + (i - n) / o;
                l *= a, c *= a, r(e, n, l, c);
            },
            calc: function(r) {
                const s = r * r;
                return t1 + e * r + n * s + i * (s * r);
            }
        };
    }
    const Bl = new We, zl = new Fl, Gl = new Fl, Hl = new Fl;
    class Vl extends Dl {
        constructor(t1 = [], e = !1, n = "centripetal", i = .5){
            super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = t1, this.closed = e, this.curveType = n, this.tension = i;
        }
        getPoint(t1, e = new We) {
            const n = e, i = this.points, r = i.length, s = (r - (this.closed ? 0 : 1)) * t1;
            let a, o, l = Math.floor(s), c = s - l;
            this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r : 0 === c && l === r - 1 && (l = r - 2, c = 1), this.closed || l > 0 ? a = i[(l - 1) % r] : (Bl.subVectors(i[0], i[1]).add(i[0]), a = Bl);
            const h = i[l % r], u = i[(l + 1) % r];
            if (this.closed || l + 2 < r ? o = i[(l + 2) % r] : (Bl.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), o = Bl), "centripetal" === this.curveType || "chordal" === this.curveType) {
                const t1 = "chordal" === this.curveType ? .5 : .25;
                let e = Math.pow(a.distanceToSquared(h), t1), n = Math.pow(h.distanceToSquared(u), t1), i = Math.pow(u.distanceToSquared(o), t1);
                n < 1e-4 && (n = 1), e < 1e-4 && (e = n), i < 1e-4 && (i = n), zl.initNonuniformCatmullRom(a.x, h.x, u.x, o.x, e, n, i), Gl.initNonuniformCatmullRom(a.y, h.y, u.y, o.y, e, n, i), Hl.initNonuniformCatmullRom(a.z, h.z, u.z, o.z, e, n, i);
            } else "catmullrom" === this.curveType && (zl.initCatmullRom(a.x, h.x, u.x, o.x, this.tension), Gl.initCatmullRom(a.y, h.y, u.y, o.y, this.tension), Hl.initCatmullRom(a.z, h.z, u.z, o.z, this.tension));
            return n.set(zl.calc(c), Gl.calc(c), Hl.calc(c)), n;
        }
        copy(t1) {
            super.copy(t1), this.points = [];
            for(let e = 0, n = t1.points.length; e < n; e++){
                const n = t1.points[e];
                this.points.push(n.clone());
            }
            return this.closed = t1.closed, this.curveType = t1.curveType, this.tension = t1.tension, this;
        }
        toJSON() {
            const t1 = super.toJSON();
            t1.points = [];
            for(let e = 0, n = this.points.length; e < n; e++){
                const n = this.points[e];
                t1.points.push(n.toArray());
            }
            return t1.closed = this.closed, t1.curveType = this.curveType, t1.tension = this.tension, t1;
        }
        fromJSON(t1) {
            super.fromJSON(t1), this.points = [];
            for(let e = 0, n = t1.points.length; e < n; e++){
                const n = t1.points[e];
                this.points.push((new We).fromArray(n));
            }
            return this.closed = t1.closed, this.curveType = t1.curveType, this.tension = t1.tension, this;
        }
    }
    function kl(t1, e, n, i, r) {
        const s = .5 * (i - e), a = .5 * (r - n), o = t1 * t1;
        return (2 * n - 2 * i + s + a) * (t1 * o) + (-3 * n + 3 * i - 2 * s - a) * o + s * t1 + n;
    }
    function Wl(t1, e, n, i) {
        return function(t1, e) {
            const n = 1 - t1;
            return n * n * e;
        }(t1, e) + function(t1, e) {
            return 2 * (1 - t1) * t1 * e;
        }(t1, n) + function(t1, e) {
            return t1 * t1 * e;
        }(t1, i);
    }
    function Xl(t1, e, n, i, r) {
        return function(t1, e) {
            const n = 1 - t1;
            return n * n * n * e;
        }(t1, e) + function(t1, e) {
            const n = 1 - t1;
            return 3 * n * n * t1 * e;
        }(t1, n) + function(t1, e) {
            return 3 * (1 - t1) * t1 * t1 * e;
        }(t1, i) + function(t1, e) {
            return t1 * t1 * t1 * e;
        }(t1, r);
    }
    class jl extends Dl {
        constructor(t1 = new me, e = new me, n = new me, i = new me){
            super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = t1, this.v1 = e, this.v2 = n, this.v3 = i;
        }
        getPoint(t1, e = new me) {
            const n = e, i = this.v0, r = this.v1, s = this.v2, a = this.v3;
            return n.set(Xl(t1, i.x, r.x, s.x, a.x), Xl(t1, i.y, r.y, s.y, a.y)), n;
        }
        copy(t1) {
            return super.copy(t1), this.v0.copy(t1.v0), this.v1.copy(t1.v1), this.v2.copy(t1.v2), this.v3.copy(t1.v3), this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.v0 = this.v0.toArray(), t1.v1 = this.v1.toArray(), t1.v2 = this.v2.toArray(), t1.v3 = this.v3.toArray(), t1;
        }
        fromJSON(t1) {
            return super.fromJSON(t1), this.v0.fromArray(t1.v0), this.v1.fromArray(t1.v1), this.v2.fromArray(t1.v2), this.v3.fromArray(t1.v3), this;
        }
    }
    class ql extends Dl {
        constructor(t1 = new We, e = new We, n = new We, i = new We){
            super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = t1, this.v1 = e, this.v2 = n, this.v3 = i;
        }
        getPoint(t1, e = new We) {
            const n = e, i = this.v0, r = this.v1, s = this.v2, a = this.v3;
            return n.set(Xl(t1, i.x, r.x, s.x, a.x), Xl(t1, i.y, r.y, s.y, a.y), Xl(t1, i.z, r.z, s.z, a.z)), n;
        }
        copy(t1) {
            return super.copy(t1), this.v0.copy(t1.v0), this.v1.copy(t1.v1), this.v2.copy(t1.v2), this.v3.copy(t1.v3), this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.v0 = this.v0.toArray(), t1.v1 = this.v1.toArray(), t1.v2 = this.v2.toArray(), t1.v3 = this.v3.toArray(), t1;
        }
        fromJSON(t1) {
            return super.fromJSON(t1), this.v0.fromArray(t1.v0), this.v1.fromArray(t1.v1), this.v2.fromArray(t1.v2), this.v3.fromArray(t1.v3), this;
        }
    }
    class Yl extends Dl {
        constructor(t1 = new me, e = new me){
            super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = t1, this.v2 = e;
        }
        getPoint(t1, e = new me) {
            const n = e;
            return 1 === t1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t1).add(this.v1)), n;
        }
        getPointAt(t1, e) {
            return this.getPoint(t1, e);
        }
        getTangent(t1, e = new me) {
            return e.subVectors(this.v2, this.v1).normalize();
        }
        getTangentAt(t1, e) {
            return this.getTangent(t1, e);
        }
        copy(t1) {
            return super.copy(t1), this.v1.copy(t1.v1), this.v2.copy(t1.v2), this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.v1 = this.v1.toArray(), t1.v2 = this.v2.toArray(), t1;
        }
        fromJSON(t1) {
            return super.fromJSON(t1), this.v1.fromArray(t1.v1), this.v2.fromArray(t1.v2), this;
        }
    }
    class Zl extends Dl {
        constructor(t1 = new We, e = new We){
            super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = t1, this.v2 = e;
        }
        getPoint(t1, e = new We) {
            const n = e;
            return 1 === t1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t1).add(this.v1)), n;
        }
        getPointAt(t1, e) {
            return this.getPoint(t1, e);
        }
        getTangent(t1, e = new We) {
            return e.subVectors(this.v2, this.v1).normalize();
        }
        getTangentAt(t1, e) {
            return this.getTangent(t1, e);
        }
        copy(t1) {
            return super.copy(t1), this.v1.copy(t1.v1), this.v2.copy(t1.v2), this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.v1 = this.v1.toArray(), t1.v2 = this.v2.toArray(), t1;
        }
        fromJSON(t1) {
            return super.fromJSON(t1), this.v1.fromArray(t1.v1), this.v2.fromArray(t1.v2), this;
        }
    }
    class Jl extends Dl {
        constructor(t1 = new me, e = new me, n = new me){
            super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = t1, this.v1 = e, this.v2 = n;
        }
        getPoint(t1, e = new me) {
            const n = e, i = this.v0, r = this.v1, s = this.v2;
            return n.set(Wl(t1, i.x, r.x, s.x), Wl(t1, i.y, r.y, s.y)), n;
        }
        copy(t1) {
            return super.copy(t1), this.v0.copy(t1.v0), this.v1.copy(t1.v1), this.v2.copy(t1.v2), this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.v0 = this.v0.toArray(), t1.v1 = this.v1.toArray(), t1.v2 = this.v2.toArray(), t1;
        }
        fromJSON(t1) {
            return super.fromJSON(t1), this.v0.fromArray(t1.v0), this.v1.fromArray(t1.v1), this.v2.fromArray(t1.v2), this;
        }
    }
    class Kl extends Dl {
        constructor(t1 = new We, e = new We, n = new We){
            super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = t1, this.v1 = e, this.v2 = n;
        }
        getPoint(t1, e = new We) {
            const n = e, i = this.v0, r = this.v1, s = this.v2;
            return n.set(Wl(t1, i.x, r.x, s.x), Wl(t1, i.y, r.y, s.y), Wl(t1, i.z, r.z, s.z)), n;
        }
        copy(t1) {
            return super.copy(t1), this.v0.copy(t1.v0), this.v1.copy(t1.v1), this.v2.copy(t1.v2), this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.v0 = this.v0.toArray(), t1.v1 = this.v1.toArray(), t1.v2 = this.v2.toArray(), t1;
        }
        fromJSON(t1) {
            return super.fromJSON(t1), this.v0.fromArray(t1.v0), this.v1.fromArray(t1.v1), this.v2.fromArray(t1.v2), this;
        }
    }
    class $l extends Dl {
        constructor(t1 = []){
            super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = t1;
        }
        getPoint(t1, e = new me) {
            const n = e, i = this.points, r = (i.length - 1) * t1, s = Math.floor(r), a = r - s, o = i[0 === s ? s : s - 1], l = i[s], c = i[s > i.length - 2 ? i.length - 1 : s + 1], h = i[s > i.length - 3 ? i.length - 1 : s + 2];
            return n.set(kl(a, o.x, l.x, c.x, h.x), kl(a, o.y, l.y, c.y, h.y)), n;
        }
        copy(t1) {
            super.copy(t1), this.points = [];
            for(let e = 0, n = t1.points.length; e < n; e++){
                const n = t1.points[e];
                this.points.push(n.clone());
            }
            return this;
        }
        toJSON() {
            const t1 = super.toJSON();
            t1.points = [];
            for(let e = 0, n = this.points.length; e < n; e++){
                const n = this.points[e];
                t1.points.push(n.toArray());
            }
            return t1;
        }
        fromJSON(t1) {
            super.fromJSON(t1), this.points = [];
            for(let e = 0, n = t1.points.length; e < n; e++){
                const n = t1.points[e];
                this.points.push((new me).fromArray(n));
            }
            return this;
        }
    }
    var Ql = Object.freeze({
        __proto__: null,
        ArcCurve: Ol,
        CatmullRomCurve3: Vl,
        CubicBezierCurve: jl,
        CubicBezierCurve3: ql,
        EllipseCurve: Nl,
        LineCurve: Yl,
        LineCurve3: Zl,
        QuadraticBezierCurve: Jl,
        QuadraticBezierCurve3: Kl,
        SplineCurve: $l
    });
    class tc extends Dl {
        constructor(){
            super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
        }
        add(t1) {
            this.curves.push(t1);
        }
        closePath() {
            const t1 = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1);
            if (!t1.equals(e)) {
                const n = !0 === t1.isVector2 ? "LineCurve" : "LineCurve3";
                this.curves.push(new Ql[n](e, t1));
            }
            return this;
        }
        getPoint(t1, e) {
            const n = t1 * this.getLength(), i = this.getCurveLengths();
            let r = 0;
            for(; r < i.length;){
                if (i[r] >= n) {
                    const t1 = i[r] - n, s = this.curves[r], a = s.getLength(), o = 0 === a ? 0 : 1 - t1 / a;
                    return s.getPointAt(o, e);
                }
                r++;
            }
            return null;
        }
        getLength() {
            const t1 = this.getCurveLengths();
            return t1[t1.length - 1];
        }
        updateArcLengths() {
            this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
        }
        getCurveLengths() {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
            const t1 = [];
            let e = 0;
            for(let n = 0, i = this.curves.length; n < i; n++)e += this.curves[n].getLength(), t1.push(e);
            return this.cacheLengths = t1, t1;
        }
        getSpacedPoints(t1 = 40) {
            const e = [];
            for(let n = 0; n <= t1; n++)e.push(this.getPoint(n / t1));
            return this.autoClose && e.push(e[0]), e;
        }
        getPoints(t1 = 12) {
            const e = [];
            let n;
            for(let i = 0, r = this.curves; i < r.length; i++){
                const s = r[i], a = s.isEllipseCurve ? 2 * t1 : s.isLineCurve || s.isLineCurve3 ? 1 : s.isSplineCurve ? t1 * s.points.length : t1, o = s.getPoints(a);
                for(let t1 = 0; t1 < o.length; t1++){
                    const i = o[t1];
                    n && n.equals(i) || (e.push(i), n = i);
                }
            }
            return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
        }
        copy(t1) {
            super.copy(t1), this.curves = [];
            for(let e = 0, n = t1.curves.length; e < n; e++){
                const n = t1.curves[e];
                this.curves.push(n.clone());
            }
            return this.autoClose = t1.autoClose, this;
        }
        toJSON() {
            const t1 = super.toJSON();
            t1.autoClose = this.autoClose, t1.curves = [];
            for(let e = 0, n = this.curves.length; e < n; e++){
                const n = this.curves[e];
                t1.curves.push(n.toJSON());
            }
            return t1;
        }
        fromJSON(t1) {
            super.fromJSON(t1), this.autoClose = t1.autoClose, this.curves = [];
            for(let e = 0, n = t1.curves.length; e < n; e++){
                const n = t1.curves[e];
                this.curves.push((new Ql[n.type]).fromJSON(n));
            }
            return this;
        }
    }
    class ec extends tc {
        constructor(t1){
            super(), this.type = "Path", this.currentPoint = new me, t1 && this.setFromPoints(t1);
        }
        setFromPoints(t1) {
            this.moveTo(t1[0].x, t1[0].y);
            for(let e = 1, n = t1.length; e < n; e++)this.lineTo(t1[e].x, t1[e].y);
            return this;
        }
        moveTo(t1, e) {
            return this.currentPoint.set(t1, e), this;
        }
        lineTo(t1, e) {
            const n = new Yl(this.currentPoint.clone(), new me(t1, e));
            return this.curves.push(n), this.currentPoint.set(t1, e), this;
        }
        quadraticCurveTo(t1, e, n, i) {
            const r = new Jl(this.currentPoint.clone(), new me(t1, e), new me(n, i));
            return this.curves.push(r), this.currentPoint.set(n, i), this;
        }
        bezierCurveTo(t1, e, n, i, r, s) {
            const a = new jl(this.currentPoint.clone(), new me(t1, e), new me(n, i), new me(r, s));
            return this.curves.push(a), this.currentPoint.set(r, s), this;
        }
        splineThru(t1) {
            const e = [
                this.currentPoint.clone()
            ].concat(t1), n = new $l(e);
            return this.curves.push(n), this.currentPoint.copy(t1[t1.length - 1]), this;
        }
        arc(t1, e, n, i, r, s) {
            const a = this.currentPoint.x, o = this.currentPoint.y;
            return this.absarc(t1 + a, e + o, n, i, r, s), this;
        }
        absarc(t1, e, n, i, r, s) {
            return this.absellipse(t1, e, n, n, i, r, s), this;
        }
        ellipse(t1, e, n, i, r, s, a, o) {
            const l = this.currentPoint.x, c = this.currentPoint.y;
            return this.absellipse(t1 + l, e + c, n, i, r, s, a, o), this;
        }
        absellipse(t1, e, n, i, r, s, a, o) {
            const l = new Nl(t1, e, n, i, r, s, a, o);
            if (this.curves.length > 0) {
                const t1 = l.getPoint(0);
                t1.equals(this.currentPoint) || this.lineTo(t1.x, t1.y);
            }
            this.curves.push(l);
            const c = l.getPoint(1);
            return this.currentPoint.copy(c), this;
        }
        copy(t1) {
            return super.copy(t1), this.currentPoint.copy(t1.currentPoint), this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.currentPoint = this.currentPoint.toArray(), t1;
        }
        fromJSON(t1) {
            return super.fromJSON(t1), this.currentPoint.fromArray(t1.currentPoint), this;
        }
    }
    class nc extends Ii {
        constructor(t1 = [
            new me(0, -0.5),
            new me(.5, 0),
            new me(0, .5)
        ], e = 12, n = 0, i = 2 * Math.PI){
            super(), this.type = "LatheGeometry", this.parameters = {
                points: t1,
                segments: e,
                phiStart: n,
                phiLength: i
            }, e = Math.floor(e), i = ae(i, 0, 2 * Math.PI);
            const r = [], s = [], a = [], o = [], l = [], c = 1 / e, h = new We, u = new me, d = new We, p = new We, m = new We;
            let f = 0, g = 0;
            for(let e = 0; e <= t1.length - 1; e++)switch(e){
                case 0:
                    f = t1[e + 1].x - t1[e].x, g = t1[e + 1].y - t1[e].y, d.x = 1 * g, d.y = -f, d.z = 0 * g, m.copy(d), d.normalize(), o.push(d.x, d.y, d.z);
                    break;
                case t1.length - 1:
                    o.push(m.x, m.y, m.z);
                    break;
                default:
                    f = t1[e + 1].x - t1[e].x, g = t1[e + 1].y - t1[e].y, d.x = 1 * g, d.y = -f, d.z = 0 * g, p.copy(d), d.x += m.x, d.y += m.y, d.z += m.z, d.normalize(), o.push(d.x, d.y, d.z), m.copy(p);
            }
            for(let r = 0; r <= e; r++){
                const d = n + r * c * i, p = Math.sin(d), m = Math.cos(d);
                for(let n = 0; n <= t1.length - 1; n++){
                    h.x = t1[n].x * p, h.y = t1[n].y, h.z = t1[n].x * m, s.push(h.x, h.y, h.z), u.x = r / e, u.y = n / (t1.length - 1), a.push(u.x, u.y);
                    const i = o[3 * n + 0] * p, c = o[3 * n + 1], d = o[3 * n + 0] * m;
                    l.push(i, c, d);
                }
            }
            for(let n = 0; n < e; n++)for(let e = 0; e < t1.length - 1; e++){
                const i = e + n * t1.length, s = i, a = i + t1.length, o = i + t1.length + 1, l = i + 1;
                r.push(s, a, l), r.push(o, l, a);
            }
            this.setIndex(r), this.setAttribute("position", new Ti(s, 3)), this.setAttribute("uv", new Ti(a, 2)), this.setAttribute("normal", new Ti(l, 3));
        }
        copy(t1) {
            return super.copy(t1), this.parameters = Object.assign({}, t1.parameters), this;
        }
        static fromJSON(t1) {
            return new nc(t1.points, t1.segments, t1.phiStart, t1.phiLength);
        }
    }
    class ic extends nc {
        constructor(t1 = 1, e = 1, n = 4, i = 8){
            const r = new ec;
            r.absarc(0, -e / 2, t1, 1.5 * Math.PI, 0), r.absarc(0, e / 2, t1, 0, .5 * Math.PI), super(r.getPoints(n), i), this.type = "CapsuleGeometry", this.parameters = {
                radius: t1,
                length: e,
                capSegments: n,
                radialSegments: i
            };
        }
        static fromJSON(t1) {
            return new ic(t1.radius, t1.length, t1.capSegments, t1.radialSegments);
        }
    }
    class rc extends Ii {
        constructor(t1 = 1, e = 32, n = 0, i = 2 * Math.PI){
            super(), this.type = "CircleGeometry", this.parameters = {
                radius: t1,
                segments: e,
                thetaStart: n,
                thetaLength: i
            }, e = Math.max(3, e);
            const r = [], s = [], a = [], o = [], l = new We, c = new me;
            s.push(0, 0, 0), a.push(0, 0, 1), o.push(.5, .5);
            for(let r = 0, h = 3; r <= e; r++, h += 3){
                const u = n + r / e * i;
                l.x = t1 * Math.cos(u), l.y = t1 * Math.sin(u), s.push(l.x, l.y, l.z), a.push(0, 0, 1), c.x = (s[h] / t1 + 1) / 2, c.y = (s[h + 1] / t1 + 1) / 2, o.push(c.x, c.y);
            }
            for(let t1 = 1; t1 <= e; t1++)r.push(t1, t1 + 1, 0);
            this.setIndex(r), this.setAttribute("position", new Ti(s, 3)), this.setAttribute("normal", new Ti(a, 3)), this.setAttribute("uv", new Ti(o, 2));
        }
        copy(t1) {
            return super.copy(t1), this.parameters = Object.assign({}, t1.parameters), this;
        }
        static fromJSON(t1) {
            return new rc(t1.radius, t1.segments, t1.thetaStart, t1.thetaLength);
        }
    }
    class sc extends Ii {
        constructor(t1 = 1, e = 1, n = 1, i = 32, r = 1, s = !1, a = 0, o = 2 * Math.PI){
            super(), this.type = "CylinderGeometry", this.parameters = {
                radiusTop: t1,
                radiusBottom: e,
                height: n,
                radialSegments: i,
                heightSegments: r,
                openEnded: s,
                thetaStart: a,
                thetaLength: o
            };
            const l = this;
            i = Math.floor(i), r = Math.floor(r);
            const c = [], h = [], u = [], d = [];
            let p = 0;
            const m = [], f = n / 2;
            let g = 0;
            function _(n) {
                const r = p, s = new me, m = new We;
                let _ = 0;
                const v = !0 === n ? t1 : e, x = !0 === n ? 1 : -1;
                for(let t1 = 1; t1 <= i; t1++)h.push(0, f * x, 0), u.push(0, x, 0), d.push(.5, .5), p++;
                const y = p;
                for(let t1 = 0; t1 <= i; t1++){
                    const e = t1 / i * o + a, n = Math.cos(e), r = Math.sin(e);
                    m.x = v * r, m.y = f * x, m.z = v * n, h.push(m.x, m.y, m.z), u.push(0, x, 0), s.x = .5 * n + .5, s.y = .5 * r * x + .5, d.push(s.x, s.y), p++;
                }
                for(let t1 = 0; t1 < i; t1++){
                    const e = r + t1, i = y + t1;
                    !0 === n ? c.push(i, i + 1, e) : c.push(i + 1, i, e), _ += 3;
                }
                l.addGroup(g, _, !0 === n ? 1 : 2), g += _;
            }
            !function() {
                const s = new We, _ = new We;
                let v = 0;
                const x = (e - t1) / n;
                for(let l = 0; l <= r; l++){
                    const c = [], g = l / r, v = g * (e - t1) + t1;
                    for(let t1 = 0; t1 <= i; t1++){
                        const e = t1 / i, r = e * o + a, l = Math.sin(r), m = Math.cos(r);
                        _.x = v * l, _.y = -g * n + f, _.z = v * m, h.push(_.x, _.y, _.z), s.set(l, x, m).normalize(), u.push(s.x, s.y, s.z), d.push(e, 1 - g), c.push(p++);
                    }
                    m.push(c);
                }
                for(let t1 = 0; t1 < i; t1++)for(let e = 0; e < r; e++){
                    const n = m[e][t1], i = m[e + 1][t1], r = m[e + 1][t1 + 1], s = m[e][t1 + 1];
                    c.push(n, i, s), c.push(i, r, s), v += 6;
                }
                l.addGroup(g, v, 0), g += v;
            }(), !1 === s && (t1 > 0 && _(!0), e > 0 && _(!1)), this.setIndex(c), this.setAttribute("position", new Ti(h, 3)), this.setAttribute("normal", new Ti(u, 3)), this.setAttribute("uv", new Ti(d, 2));
        }
        copy(t1) {
            return super.copy(t1), this.parameters = Object.assign({}, t1.parameters), this;
        }
        static fromJSON(t1) {
            return new sc(t1.radiusTop, t1.radiusBottom, t1.height, t1.radialSegments, t1.heightSegments, t1.openEnded, t1.thetaStart, t1.thetaLength);
        }
    }
    class ac extends sc {
        constructor(t1 = 1, e = 1, n = 32, i = 1, r = !1, s = 0, a = 2 * Math.PI){
            super(0, t1, e, n, i, r, s, a), this.type = "ConeGeometry", this.parameters = {
                radius: t1,
                height: e,
                radialSegments: n,
                heightSegments: i,
                openEnded: r,
                thetaStart: s,
                thetaLength: a
            };
        }
        static fromJSON(t1) {
            return new ac(t1.radius, t1.height, t1.radialSegments, t1.heightSegments, t1.openEnded, t1.thetaStart, t1.thetaLength);
        }
    }
    class oc extends Ii {
        constructor(t1 = [], e = [], n = 1, i = 0){
            super(), this.type = "PolyhedronGeometry", this.parameters = {
                vertices: t1,
                indices: e,
                radius: n,
                detail: i
            };
            const r = [], s = [];
            function a(t1, e, n, i) {
                const r = i + 1, s = [];
                for(let i = 0; i <= r; i++){
                    s[i] = [];
                    const a = t1.clone().lerp(n, i / r), o = e.clone().lerp(n, i / r), l = r - i;
                    for(let t1 = 0; t1 <= l; t1++)s[i][t1] = 0 === t1 && i === r ? a : a.clone().lerp(o, t1 / l);
                }
                for(let t1 = 0; t1 < r; t1++)for(let e = 0; e < 2 * (r - t1) - 1; e++){
                    const n = Math.floor(e / 2);
                    e % 2 == 0 ? (o(s[t1][n + 1]), o(s[t1 + 1][n]), o(s[t1][n])) : (o(s[t1][n + 1]), o(s[t1 + 1][n + 1]), o(s[t1 + 1][n]));
                }
            }
            function o(t1) {
                r.push(t1.x, t1.y, t1.z);
            }
            function l(e, n) {
                const i = 3 * e;
                n.x = t1[i + 0], n.y = t1[i + 1], n.z = t1[i + 2];
            }
            function c(t1, e, n, i) {
                i < 0 && 1 === t1.x && (s[e] = t1.x - 1), 0 === n.x && 0 === n.z && (s[e] = i / 2 / Math.PI + .5);
            }
            function h(t1) {
                return Math.atan2(t1.z, -t1.x);
            }
            !function(t1) {
                const n = new We, i = new We, r = new We;
                for(let s = 0; s < e.length; s += 3)l(e[s + 0], n), l(e[s + 1], i), l(e[s + 2], r), a(n, i, r, t1);
            }(i), function(t1) {
                const e = new We;
                for(let n = 0; n < r.length; n += 3)e.x = r[n + 0], e.y = r[n + 1], e.z = r[n + 2], e.normalize().multiplyScalar(t1), r[n + 0] = e.x, r[n + 1] = e.y, r[n + 2] = e.z;
            }(n), function() {
                const t1 = new We;
                for(let n = 0; n < r.length; n += 3){
                    t1.x = r[n + 0], t1.y = r[n + 1], t1.z = r[n + 2];
                    const i = h(t1) / 2 / Math.PI + .5, a = (e = t1, Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI + .5);
                    s.push(i, 1 - a);
                }
                var e;
                (function() {
                    const t1 = new We, e = new We, n = new We, i = new We, a = new me, o = new me, l = new me;
                    for(let u = 0, d = 0; u < r.length; u += 9, d += 6){
                        t1.set(r[u + 0], r[u + 1], r[u + 2]), e.set(r[u + 3], r[u + 4], r[u + 5]), n.set(r[u + 6], r[u + 7], r[u + 8]), a.set(s[d + 0], s[d + 1]), o.set(s[d + 2], s[d + 3]), l.set(s[d + 4], s[d + 5]), i.copy(t1).add(e).add(n).divideScalar(3);
                        const p = h(i);
                        c(a, d + 0, t1, p), c(o, d + 2, e, p), c(l, d + 4, n, p);
                    }
                })(), function() {
                    for(let t1 = 0; t1 < s.length; t1 += 6){
                        const e = s[t1 + 0], n = s[t1 + 2], i = s[t1 + 4], r = Math.max(e, n, i), a = Math.min(e, n, i);
                        r > .9 && a < .1 && (e < .2 && (s[t1 + 0] += 1), n < .2 && (s[t1 + 2] += 1), i < .2 && (s[t1 + 4] += 1));
                    }
                }();
            }(), this.setAttribute("position", new Ti(r, 3)), this.setAttribute("normal", new Ti(r.slice(), 3)), this.setAttribute("uv", new Ti(s, 2)), 0 === i ? this.computeVertexNormals() : this.normalizeNormals();
        }
        copy(t1) {
            return super.copy(t1), this.parameters = Object.assign({}, t1.parameters), this;
        }
        static fromJSON(t1) {
            return new oc(t1.vertices, t1.indices, t1.radius, t1.details);
        }
    }
    class lc extends oc {
        constructor(t1 = 1, e = 0){
            const n = (1 + Math.sqrt(5)) / 2, i = 1 / n;
            super([
                -1,
                -1,
                -1,
                -1,
                -1,
                1,
                -1,
                1,
                -1,
                -1,
                1,
                1,
                1,
                -1,
                -1,
                1,
                -1,
                1,
                1,
                1,
                -1,
                1,
                1,
                1,
                0,
                -i,
                -n,
                0,
                -i,
                n,
                0,
                i,
                -n,
                0,
                i,
                n,
                -i,
                -n,
                0,
                -i,
                n,
                0,
                i,
                -n,
                0,
                i,
                n,
                0,
                -n,
                0,
                -i,
                n,
                0,
                -i,
                -n,
                0,
                i,
                n,
                0,
                i
            ], [
                3,
                11,
                7,
                3,
                7,
                15,
                3,
                15,
                13,
                7,
                19,
                17,
                7,
                17,
                6,
                7,
                6,
                15,
                17,
                4,
                8,
                17,
                8,
                10,
                17,
                10,
                6,
                8,
                0,
                16,
                8,
                16,
                2,
                8,
                2,
                10,
                0,
                12,
                1,
                0,
                1,
                18,
                0,
                18,
                16,
                6,
                10,
                2,
                6,
                2,
                13,
                6,
                13,
                15,
                2,
                16,
                18,
                2,
                18,
                3,
                2,
                3,
                13,
                18,
                1,
                9,
                18,
                9,
                11,
                18,
                11,
                3,
                4,
                14,
                12,
                4,
                12,
                0,
                4,
                0,
                8,
                11,
                9,
                5,
                11,
                5,
                19,
                11,
                19,
                7,
                19,
                5,
                14,
                19,
                14,
                4,
                19,
                4,
                17,
                1,
                12,
                14,
                1,
                14,
                5,
                1,
                5,
                9
            ], t1, e), this.type = "DodecahedronGeometry", this.parameters = {
                radius: t1,
                detail: e
            };
        }
        static fromJSON(t1) {
            return new lc(t1.radius, t1.detail);
        }
    }
    const cc = new We, hc = new We, uc = new We, dc = new ri;
    class pc extends Ii {
        constructor(t1 = null, e = 1){
            if (super(), this.type = "EdgesGeometry", this.parameters = {
                geometry: t1,
                thresholdAngle: e
            }, null !== t1) {
                const n = 4, i = Math.pow(10, n), r = Math.cos(ie * e), s = t1.getIndex(), a = t1.getAttribute("position"), o = s ? s.count : a.count, l = [
                    0,
                    0,
                    0
                ], c = [
                    "a",
                    "b",
                    "c"
                ], h = new Array(3), u = {}, d = [];
                for(let t1 = 0; t1 < o; t1 += 3){
                    s ? (l[0] = s.getX(t1), l[1] = s.getX(t1 + 1), l[2] = s.getX(t1 + 2)) : (l[0] = t1, l[1] = t1 + 1, l[2] = t1 + 2);
                    const { a: e, b: n, c: o } = dc;
                    if (e.fromBufferAttribute(a, l[0]), n.fromBufferAttribute(a, l[1]), o.fromBufferAttribute(a, l[2]), dc.getNormal(uc), h[0] = `${Math.round(e.x * i)},${Math.round(e.y * i)},${Math.round(e.z * i)}`, h[1] = `${Math.round(n.x * i)},${Math.round(n.y * i)},${Math.round(n.z * i)}`, h[2] = `${Math.round(o.x * i)},${Math.round(o.y * i)},${Math.round(o.z * i)}`, h[0] !== h[1] && h[1] !== h[2] && h[2] !== h[0]) for(let t1 = 0; t1 < 3; t1++){
                        const e = (t1 + 1) % 3, n = h[t1], i = h[e], s = dc[c[t1]], a = dc[c[e]], o = `${n}_${i}`, p = `${i}_${n}`;
                        p in u && u[p] ? (uc.dot(u[p].normal) <= r && (d.push(s.x, s.y, s.z), d.push(a.x, a.y, a.z)), u[p] = null) : o in u || (u[o] = {
                            index0: l[t1],
                            index1: l[e],
                            normal: uc.clone()
                        });
                    }
                }
                for(const t1 in u)if (u[t1]) {
                    const { index0: e, index1: n } = u[t1];
                    cc.fromBufferAttribute(a, e), hc.fromBufferAttribute(a, n), d.push(cc.x, cc.y, cc.z), d.push(hc.x, hc.y, hc.z);
                }
                this.setAttribute("position", new Ti(d, 3));
            }
        }
        copy(t1) {
            return super.copy(t1), this.parameters = Object.assign({}, t1.parameters), this;
        }
    }
    class mc extends ec {
        constructor(t1){
            super(t1), this.uuid = se(), this.type = "Shape", this.holes = [];
        }
        getPointsHoles(t1) {
            const e = [];
            for(let n = 0, i = this.holes.length; n < i; n++)e[n] = this.holes[n].getPoints(t1);
            return e;
        }
        extractPoints(t1) {
            return {
                shape: this.getPoints(t1),
                holes: this.getPointsHoles(t1)
            };
        }
        copy(t1) {
            super.copy(t1), this.holes = [];
            for(let e = 0, n = t1.holes.length; e < n; e++){
                const n = t1.holes[e];
                this.holes.push(n.clone());
            }
            return this;
        }
        toJSON() {
            const t1 = super.toJSON();
            t1.uuid = this.uuid, t1.holes = [];
            for(let e = 0, n = this.holes.length; e < n; e++){
                const n = this.holes[e];
                t1.holes.push(n.toJSON());
            }
            return t1;
        }
        fromJSON(t1) {
            super.fromJSON(t1), this.uuid = t1.uuid, this.holes = [];
            for(let e = 0, n = t1.holes.length; e < n; e++){
                const n = t1.holes[e];
                this.holes.push((new ec).fromJSON(n));
            }
            return this;
        }
    }
    const fc = function(t1, e, n = 2) {
        const i = e && e.length, r = i ? e[0] * n : t1.length;
        let s = gc(t1, 0, r, n, !0);
        const a = [];
        if (!s || s.next === s.prev) return a;
        let o, l, c, h, u, d, p;
        if (i && (s = function(t1, e, n, i) {
            const r = [];
            let s, a, o, l, c;
            for(s = 0, a = e.length; s < a; s++)o = e[s] * i, l = s < a - 1 ? e[s + 1] * i : t1.length, c = gc(t1, o, l, i, !1), c === c.next && (c.steiner = !0), r.push(Ac(c));
            for(r.sort(bc), s = 0; s < r.length; s++)n = Tc(r[s], n);
            return n;
        }(t1, e, s, n)), t1.length > 80 * n) {
            o = c = t1[0], l = h = t1[1];
            for(let e = n; e < r; e += n)u = t1[e], d = t1[e + 1], u < o && (o = u), d < l && (l = d), u > c && (c = u), d > h && (h = d);
            p = Math.max(c - o, h - l), p = 0 !== p ? 32767 / p : 0;
        }
        return vc(s, a, n, o, l, p, 0), a;
    };
    function gc(t1, e, n, i, r) {
        let s, a;
        if (r === function(t1, e, n, i) {
            let r = 0;
            for(let s = e, a = n - i; s < n; s += i)r += (t1[a] - t1[s]) * (t1[s + 1] + t1[a + 1]), a = s;
            return r;
        }(t1, e, n, i) > 0) for(s = e; s < n; s += i)a = Fc(s, t1[s], t1[s + 1], a);
        else for(s = n - i; s >= e; s -= i)a = Fc(s, t1[s], t1[s + 1], a);
        return a && Pc(a, a.next) && (Bc(a), a = a.next), a;
    }
    function _c(t1, e) {
        if (!t1) return t1;
        e || (e = t1);
        let n, i = t1;
        do if (n = !1, i.steiner || !Pc(i, i.next) && 0 !== Lc(i.prev, i, i.next)) i = i.next;
        else {
            if (Bc(i), i = e = i.prev, i === i.next) break;
            n = !0;
        }
        while (n || i !== e);
        return e;
    }
    function vc(t1, e, n, i, r, s, a) {
        if (!t1) return;
        !a && s && function(t1, e, n, i) {
            let r = t1;
            do 0 === r.z && (r.z = wc(r.x, r.y, e, n, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next;
            while (r !== t1);
            r.prevZ.nextZ = null, r.prevZ = null, function(t1) {
                let e, n, i, r, s, a, o, l, c = 1;
                do {
                    for(n = t1, t1 = null, s = null, a = 0; n;){
                        for(a++, i = n, o = 0, e = 0; e < c && (o++, i = i.nextZ, i); e++);
                        for(l = c; o > 0 || l > 0 && i;)0 !== o && (0 === l || !i || n.z <= i.z) ? (r = n, n = n.nextZ, o--) : (r = i, i = i.nextZ, l--), s ? s.nextZ = r : t1 = r, r.prevZ = s, s = r;
                        n = i;
                    }
                    s.nextZ = null, c *= 2;
                }while (a > 1);
            }(r);
        }(t1, i, r, s);
        let o, l, c = t1;
        for(; t1.prev !== t1.next;)if (o = t1.prev, l = t1.next, s ? yc(t1, i, r, s) : xc(t1)) e.push(o.i / n | 0), e.push(t1.i / n | 0), e.push(l.i / n | 0), Bc(t1), t1 = l.next, c = l.next;
        else if ((t1 = l) === c) {
            a ? 1 === a ? vc(t1 = Mc(_c(t1), e, n), e, n, i, r, s, 2) : 2 === a && Sc(t1, e, n, i, r, s) : vc(_c(t1), e, n, i, r, s, 1);
            break;
        }
    }
    function xc(t1) {
        const e = t1.prev, n = t1, i = t1.next;
        if (Lc(e, n, i) >= 0) return !1;
        const r = e.x, s = n.x, a = i.x, o = e.y, l = n.y, c = i.y, h = r < s ? r < a ? r : a : s < a ? s : a, u = o < l ? o < c ? o : c : l < c ? l : c, d = r > s ? r > a ? r : a : s > a ? s : a, p = o > l ? o > c ? o : c : l > c ? l : c;
        let m = i.next;
        for(; m !== e;){
            if (m.x >= h && m.x <= d && m.y >= u && m.y <= p && Rc(r, o, s, l, a, c, m.x, m.y) && Lc(m.prev, m, m.next) >= 0) return !1;
            m = m.next;
        }
        return !0;
    }
    function yc(t1, e, n, i) {
        const r = t1.prev, s = t1, a = t1.next;
        if (Lc(r, s, a) >= 0) return !1;
        const o = r.x, l = s.x, c = a.x, h = r.y, u = s.y, d = a.y, p = o < l ? o < c ? o : c : l < c ? l : c, m = h < u ? h < d ? h : d : u < d ? u : d, f = o > l ? o > c ? o : c : l > c ? l : c, g = h > u ? h > d ? h : d : u > d ? u : d, _ = wc(p, m, e, n, i), v = wc(f, g, e, n, i);
        let x = t1.prevZ, y = t1.nextZ;
        for(; x && x.z >= _ && y && y.z <= v;){
            if (x.x >= p && x.x <= f && x.y >= m && x.y <= g && x !== r && x !== a && Rc(o, h, l, u, c, d, x.x, x.y) && Lc(x.prev, x, x.next) >= 0) return !1;
            if (x = x.prevZ, y.x >= p && y.x <= f && y.y >= m && y.y <= g && y !== r && y !== a && Rc(o, h, l, u, c, d, y.x, y.y) && Lc(y.prev, y, y.next) >= 0) return !1;
            y = y.nextZ;
        }
        for(; x && x.z >= _;){
            if (x.x >= p && x.x <= f && x.y >= m && x.y <= g && x !== r && x !== a && Rc(o, h, l, u, c, d, x.x, x.y) && Lc(x.prev, x, x.next) >= 0) return !1;
            x = x.prevZ;
        }
        for(; y && y.z <= v;){
            if (y.x >= p && y.x <= f && y.y >= m && y.y <= g && y !== r && y !== a && Rc(o, h, l, u, c, d, y.x, y.y) && Lc(y.prev, y, y.next) >= 0) return !1;
            y = y.nextZ;
        }
        return !0;
    }
    function Mc(t1, e, n) {
        let i = t1;
        do {
            const r = i.prev, s = i.next.next;
            !Pc(r, s) && Ic(r, i, i.next, s) && Nc(r, s) && Nc(s, r) && (e.push(r.i / n | 0), e.push(i.i / n | 0), e.push(s.i / n | 0), Bc(i), Bc(i.next), i = t1 = s), i = i.next;
        }while (i !== t1);
        return _c(i);
    }
    function Sc(t1, e, n, i, r, s) {
        let a = t1;
        do {
            let t1 = a.next.next;
            for(; t1 !== a.prev;){
                if (a.i !== t1.i && Cc(a, t1)) {
                    let o = Oc(a, t1);
                    return a = _c(a, a.next), o = _c(o, o.next), vc(a, e, n, i, r, s, 0), void vc(o, e, n, i, r, s, 0);
                }
                t1 = t1.next;
            }
            a = a.next;
        }while (a !== t1);
    }
    function bc(t1, e) {
        return t1.x - e.x;
    }
    function Tc(t1, e) {
        const n = function(t1, e) {
            let n, i = e, r = -1 / 0;
            const s = t1.x, a = t1.y;
            do {
                if (a <= i.y && a >= i.next.y && i.next.y !== i.y) {
                    const t1 = i.x + (a - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
                    if (t1 <= s && t1 > r && (r = t1, n = i.x < i.next.x ? i : i.next, t1 === s)) return n;
                }
                i = i.next;
            }while (i !== e);
            if (!n) return null;
            const o = n, l = n.x, c = n.y;
            let h, u = 1 / 0;
            i = n;
            do s >= i.x && i.x >= l && s !== i.x && Rc(a < c ? s : r, a, l, c, a < c ? r : s, a, i.x, i.y) && (h = Math.abs(a - i.y) / (s - i.x), Nc(i, t1) && (h < u || h === u && (i.x > n.x || i.x === n.x && Ec(n, i))) && (n = i, u = h)), i = i.next;
            while (i !== o);
            return n;
        }(t1, e);
        if (!n) return e;
        const i = Oc(n, t1);
        return _c(i, i.next), _c(n, n.next);
    }
    function Ec(t1, e) {
        return Lc(t1.prev, t1, e.prev) < 0 && Lc(e.next, t1, t1.next) < 0;
    }
    function wc(t1, e, n, i, r) {
        return (t1 = 1431655765 & ((t1 = 858993459 & ((t1 = 252645135 & ((t1 = 16711935 & ((t1 = (t1 - n) * r | 0) | t1 << 8)) | t1 << 4)) | t1 << 2)) | t1 << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = (e - i) * r | 0) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1;
    }
    function Ac(t1) {
        let e = t1, n = t1;
        do (e.x < n.x || e.x === n.x && e.y < n.y) && (n = e), e = e.next;
        while (e !== t1);
        return n;
    }
    function Rc(t1, e, n, i, r, s, a, o) {
        return (r - a) * (e - o) >= (t1 - a) * (s - o) && (t1 - a) * (i - o) >= (n - a) * (e - o) && (n - a) * (s - o) >= (r - a) * (i - o);
    }
    function Cc(t1, e) {
        return t1.next.i !== e.i && t1.prev.i !== e.i && !function(t1, e) {
            let n = t1;
            do {
                if (n.i !== t1.i && n.next.i !== t1.i && n.i !== e.i && n.next.i !== e.i && Ic(n, n.next, t1, e)) return !0;
                n = n.next;
            }while (n !== t1);
            return !1;
        }(t1, e) && (Nc(t1, e) && Nc(e, t1) && function(t1, e) {
            let n = t1, i = !1;
            const r = (t1.x + e.x) / 2, s = (t1.y + e.y) / 2;
            do n.y > s != n.next.y > s && n.next.y !== n.y && r < (n.next.x - n.x) * (s - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next;
            while (n !== t1);
            return i;
        }(t1, e) && (Lc(t1.prev, t1, e.prev) || Lc(t1, e.prev, e)) || Pc(t1, e) && Lc(t1.prev, t1, t1.next) > 0 && Lc(e.prev, e, e.next) > 0);
    }
    function Lc(t1, e, n) {
        return (e.y - t1.y) * (n.x - e.x) - (e.x - t1.x) * (n.y - e.y);
    }
    function Pc(t1, e) {
        return t1.x === e.x && t1.y === e.y;
    }
    function Ic(t1, e, n, i) {
        const r = Dc(Lc(t1, e, n)), s = Dc(Lc(t1, e, i)), a = Dc(Lc(n, i, t1)), o = Dc(Lc(n, i, e));
        return r !== s && a !== o || !(0 !== r || !Uc(t1, n, e)) || !(0 !== s || !Uc(t1, i, e)) || !(0 !== a || !Uc(n, t1, i)) || !(0 !== o || !Uc(n, e, i));
    }
    function Uc(t1, e, n) {
        return e.x <= Math.max(t1.x, n.x) && e.x >= Math.min(t1.x, n.x) && e.y <= Math.max(t1.y, n.y) && e.y >= Math.min(t1.y, n.y);
    }
    function Dc(t1) {
        return t1 > 0 ? 1 : t1 < 0 ? -1 : 0;
    }
    function Nc(t1, e) {
        return Lc(t1.prev, t1, t1.next) < 0 ? Lc(t1, e, t1.next) >= 0 && Lc(t1, t1.prev, e) >= 0 : Lc(t1, e, t1.prev) < 0 || Lc(t1, t1.next, e) < 0;
    }
    function Oc(t1, e) {
        const n = new zc(t1.i, t1.x, t1.y), i = new zc(e.i, e.x, e.y), r = t1.next, s = e.prev;
        return t1.next = e, e.prev = t1, n.next = r, r.prev = n, i.next = n, n.prev = i, s.next = i, i.prev = s, i;
    }
    function Fc(t1, e, n, i) {
        const r = new zc(t1, e, n);
        return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r;
    }
    function Bc(t1) {
        t1.next.prev = t1.prev, t1.prev.next = t1.next, t1.prevZ && (t1.prevZ.nextZ = t1.nextZ), t1.nextZ && (t1.nextZ.prevZ = t1.prevZ);
    }
    function zc(t1, e, n) {
        this.i = t1, this.x = e, this.y = n, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1;
    }
    class Gc {
        static area(t1) {
            const e = t1.length;
            let n = 0;
            for(let i = e - 1, r = 0; r < e; i = r++)n += t1[i].x * t1[r].y - t1[r].x * t1[i].y;
            return .5 * n;
        }
        static isClockWise(t1) {
            return Gc.area(t1) < 0;
        }
        static triangulateShape(t1, e) {
            const n = [], i = [], r = [];
            Hc(t1), Vc(n, t1);
            let s = t1.length;
            e.forEach(Hc);
            for(let t1 = 0; t1 < e.length; t1++)i.push(s), s += e[t1].length, Vc(n, e[t1]);
            const a = fc(n, i);
            for(let t1 = 0; t1 < a.length; t1 += 3)r.push(a.slice(t1, t1 + 3));
            return r;
        }
    }
    function Hc(t1) {
        const e = t1.length;
        e > 2 && t1[e - 1].equals(t1[0]) && t1.pop();
    }
    function Vc(t1, e) {
        for(let n = 0; n < e.length; n++)t1.push(e[n].x), t1.push(e[n].y);
    }
    class kc extends Ii {
        constructor(t1 = new mc([
            new me(.5, .5),
            new me(-0.5, .5),
            new me(-0.5, -0.5),
            new me(.5, -0.5)
        ]), e = {}){
            super(), this.type = "ExtrudeGeometry", this.parameters = {
                shapes: t1,
                options: e
            }, t1 = Array.isArray(t1) ? t1 : [
                t1
            ];
            const n = this, i = [], r = [];
            for(let e = 0, n = t1.length; e < n; e++)s(t1[e]);
            function s(t1) {
                const s = [], a = void 0 !== e.curveSegments ? e.curveSegments : 12, o = void 0 !== e.steps ? e.steps : 1, l = void 0 !== e.depth ? e.depth : 1;
                let c = void 0 === e.bevelEnabled || e.bevelEnabled, h = void 0 !== e.bevelThickness ? e.bevelThickness : .2, u = void 0 !== e.bevelSize ? e.bevelSize : h - .1, d = void 0 !== e.bevelOffset ? e.bevelOffset : 0, p = void 0 !== e.bevelSegments ? e.bevelSegments : 3;
                const m = e.extrudePath, f = void 0 !== e.UVGenerator ? e.UVGenerator : Wc;
                let g, _, v, x, y, M = !1;
                m && (g = m.getSpacedPoints(o), M = !0, c = !1, _ = m.computeFrenetFrames(o, !1), v = new We, x = new We, y = new We), c || (p = 0, h = 0, u = 0, d = 0);
                const S = t1.extractPoints(a);
                let b = S.shape;
                const T = S.holes;
                if (!Gc.isClockWise(b)) {
                    b = b.reverse();
                    for(let t1 = 0, e = T.length; t1 < e; t1++){
                        const e = T[t1];
                        Gc.isClockWise(e) && (T[t1] = e.reverse());
                    }
                }
                const E = Gc.triangulateShape(b, T), w = b;
                for(let t1 = 0, e = T.length; t1 < e; t1++){
                    const e = T[t1];
                    b = b.concat(e);
                }
                function A(t1, e, n) {
                    return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), t1.clone().addScaledVector(e, n);
                }
                const R = b.length, C = E.length;
                function L(t1, e, n) {
                    let i, r, s;
                    const a = t1.x - e.x, o = t1.y - e.y, l = n.x - t1.x, c = n.y - t1.y, h = a * a + o * o, u = a * c - o * l;
                    if (Math.abs(u) > Number.EPSILON) {
                        const u = Math.sqrt(h), d = Math.sqrt(l * l + c * c), p = e.x - o / u, m = e.y + a / u, f = ((n.x - c / d - p) * c - (n.y + l / d - m) * l) / (a * c - o * l);
                        i = p + a * f - t1.x, r = m + o * f - t1.y;
                        const g = i * i + r * r;
                        if (g <= 2) return new me(i, r);
                        s = Math.sqrt(g / 2);
                    } else {
                        let t1 = !1;
                        a > Number.EPSILON ? l > Number.EPSILON && (t1 = !0) : a < -Number.EPSILON ? l < -Number.EPSILON && (t1 = !0) : Math.sign(o) === Math.sign(c) && (t1 = !0), t1 ? (i = -o, r = a, s = Math.sqrt(h)) : (i = a, r = o, s = Math.sqrt(h / 2));
                    }
                    return new me(i / s, r / s);
                }
                const P = [];
                for(let t1 = 0, e = w.length, n = e - 1, i = t1 + 1; t1 < e; t1++, n++, i++)n === e && (n = 0), i === e && (i = 0), P[t1] = L(w[t1], w[n], w[i]);
                const I = [];
                let U, D = P.concat();
                for(let t1 = 0, e = T.length; t1 < e; t1++){
                    const e = T[t1];
                    U = [];
                    for(let t1 = 0, n = e.length, i = n - 1, r = t1 + 1; t1 < n; t1++, i++, r++)i === n && (i = 0), r === n && (r = 0), U[t1] = L(e[t1], e[i], e[r]);
                    I.push(U), D = D.concat(U);
                }
                for(let t1 = 0; t1 < p; t1++){
                    const e = t1 / p, n = h * Math.cos(e * Math.PI / 2), i = u * Math.sin(e * Math.PI / 2) + d;
                    for(let t1 = 0, e = w.length; t1 < e; t1++){
                        const e = A(w[t1], P[t1], i);
                        F(e.x, e.y, -n);
                    }
                    for(let t1 = 0, e = T.length; t1 < e; t1++){
                        const e = T[t1];
                        U = I[t1];
                        for(let t1 = 0, r = e.length; t1 < r; t1++){
                            const r = A(e[t1], U[t1], i);
                            F(r.x, r.y, -n);
                        }
                    }
                }
                const N = u + d;
                for(let t1 = 0; t1 < R; t1++){
                    const e = c ? A(b[t1], D[t1], N) : b[t1];
                    M ? (x.copy(_.normals[0]).multiplyScalar(e.x), v.copy(_.binormals[0]).multiplyScalar(e.y), y.copy(g[0]).add(x).add(v), F(y.x, y.y, y.z)) : F(e.x, e.y, 0);
                }
                for(let t1 = 1; t1 <= o; t1++)for(let e = 0; e < R; e++){
                    const n = c ? A(b[e], D[e], N) : b[e];
                    M ? (x.copy(_.normals[t1]).multiplyScalar(n.x), v.copy(_.binormals[t1]).multiplyScalar(n.y), y.copy(g[t1]).add(x).add(v), F(y.x, y.y, y.z)) : F(n.x, n.y, l / o * t1);
                }
                for(let t1 = p - 1; t1 >= 0; t1--){
                    const e = t1 / p, n = h * Math.cos(e * Math.PI / 2), i = u * Math.sin(e * Math.PI / 2) + d;
                    for(let t1 = 0, e = w.length; t1 < e; t1++){
                        const e = A(w[t1], P[t1], i);
                        F(e.x, e.y, l + n);
                    }
                    for(let t1 = 0, e = T.length; t1 < e; t1++){
                        const e = T[t1];
                        U = I[t1];
                        for(let t1 = 0, r = e.length; t1 < r; t1++){
                            const r = A(e[t1], U[t1], i);
                            M ? F(r.x, r.y + g[o - 1].y, g[o - 1].x + n) : F(r.x, r.y, l + n);
                        }
                    }
                }
                function O(t1, e) {
                    let n = t1.length;
                    for(; --n >= 0;){
                        const i = n;
                        let r = n - 1;
                        r < 0 && (r = t1.length - 1);
                        for(let t1 = 0, n = o + 2 * p; t1 < n; t1++){
                            const n = R * t1, s = R * (t1 + 1);
                            z(e + i + n, e + r + n, e + r + s, e + i + s);
                        }
                    }
                }
                function F(t1, e, n) {
                    s.push(t1), s.push(e), s.push(n);
                }
                function B(t1, e, r) {
                    G(t1), G(e), G(r);
                    const s = i.length / 3, a = f.generateTopUV(n, i, s - 3, s - 2, s - 1);
                    H(a[0]), H(a[1]), H(a[2]);
                }
                function z(t1, e, r, s) {
                    G(t1), G(e), G(s), G(e), G(r), G(s);
                    const a = i.length / 3, o = f.generateSideWallUV(n, i, a - 6, a - 3, a - 2, a - 1);
                    H(o[0]), H(o[1]), H(o[3]), H(o[1]), H(o[2]), H(o[3]);
                }
                function G(t1) {
                    i.push(s[3 * t1 + 0]), i.push(s[3 * t1 + 1]), i.push(s[3 * t1 + 2]);
                }
                function H(t1) {
                    r.push(t1.x), r.push(t1.y);
                }
                !function() {
                    const t1 = i.length / 3;
                    if (c) {
                        let t1 = 0, e = R * t1;
                        for(let t1 = 0; t1 < C; t1++){
                            const n = E[t1];
                            B(n[2] + e, n[1] + e, n[0] + e);
                        }
                        t1 = o + 2 * p, e = R * t1;
                        for(let t1 = 0; t1 < C; t1++){
                            const n = E[t1];
                            B(n[0] + e, n[1] + e, n[2] + e);
                        }
                    } else {
                        for(let t1 = 0; t1 < C; t1++){
                            const e = E[t1];
                            B(e[2], e[1], e[0]);
                        }
                        for(let t1 = 0; t1 < C; t1++){
                            const e = E[t1];
                            B(e[0] + R * o, e[1] + R * o, e[2] + R * o);
                        }
                    }
                    n.addGroup(t1, i.length / 3 - t1, 0);
                }(), function() {
                    const t1 = i.length / 3;
                    let e = 0;
                    O(w, e), e += w.length;
                    for(let t1 = 0, n = T.length; t1 < n; t1++){
                        const n = T[t1];
                        O(n, e), e += n.length;
                    }
                    n.addGroup(t1, i.length / 3 - t1, 1);
                }();
            }
            this.setAttribute("position", new Ti(i, 3)), this.setAttribute("uv", new Ti(r, 2)), this.computeVertexNormals();
        }
        copy(t1) {
            return super.copy(t1), this.parameters = Object.assign({}, t1.parameters), this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return function(t1, e, n) {
                if (n.shapes = [], Array.isArray(t1)) for(let e = 0, i = t1.length; e < i; e++){
                    const i = t1[e];
                    n.shapes.push(i.uuid);
                }
                else n.shapes.push(t1.uuid);
                n.options = Object.assign({}, e), void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON());
                return n;
            }(this.parameters.shapes, this.parameters.options, t1);
        }
        static fromJSON(t1, e) {
            const n = [];
            for(let i = 0, r = t1.shapes.length; i < r; i++){
                const r = e[t1.shapes[i]];
                n.push(r);
            }
            const i = t1.options.extrudePath;
            return void 0 !== i && (t1.options.extrudePath = (new Ql[i.type]).fromJSON(i)), new kc(n, t1.options);
        }
    }
    const Wc = {
        generateTopUV: function(t1, e, n, i, r) {
            const s = e[3 * n], a = e[3 * n + 1], o = e[3 * i], l = e[3 * i + 1], c = e[3 * r], h = e[3 * r + 1];
            return [
                new me(s, a),
                new me(o, l),
                new me(c, h)
            ];
        },
        generateSideWallUV: function(t1, e, n, i, r, s) {
            const a = e[3 * n], o = e[3 * n + 1], l = e[3 * n + 2], c = e[3 * i], h = e[3 * i + 1], u = e[3 * i + 2], d = e[3 * r], p = e[3 * r + 1], m = e[3 * r + 2], f = e[3 * s], g = e[3 * s + 1], _ = e[3 * s + 2];
            return Math.abs(o - h) < Math.abs(a - c) ? [
                new me(a, 1 - l),
                new me(c, 1 - u),
                new me(d, 1 - m),
                new me(f, 1 - _)
            ] : [
                new me(o, 1 - l),
                new me(h, 1 - u),
                new me(p, 1 - m),
                new me(g, 1 - _)
            ];
        }
    };
    class Xc extends oc {
        constructor(t1 = 1, e = 0){
            const n = (1 + Math.sqrt(5)) / 2;
            super([
                -1,
                n,
                0,
                1,
                n,
                0,
                -1,
                -n,
                0,
                1,
                -n,
                0,
                0,
                -1,
                n,
                0,
                1,
                n,
                0,
                -1,
                -n,
                0,
                1,
                -n,
                n,
                0,
                -1,
                n,
                0,
                1,
                -n,
                0,
                -1,
                -n,
                0,
                1
            ], [
                0,
                11,
                5,
                0,
                5,
                1,
                0,
                1,
                7,
                0,
                7,
                10,
                0,
                10,
                11,
                1,
                5,
                9,
                5,
                11,
                4,
                11,
                10,
                2,
                10,
                7,
                6,
                7,
                1,
                8,
                3,
                9,
                4,
                3,
                4,
                2,
                3,
                2,
                6,
                3,
                6,
                8,
                3,
                8,
                9,
                4,
                9,
                5,
                2,
                4,
                11,
                6,
                2,
                10,
                8,
                6,
                7,
                9,
                8,
                1
            ], t1, e), this.type = "IcosahedronGeometry", this.parameters = {
                radius: t1,
                detail: e
            };
        }
        static fromJSON(t1) {
            return new Xc(t1.radius, t1.detail);
        }
    }
    class jc extends oc {
        constructor(t1 = 1, e = 0){
            super([
                1,
                0,
                0,
                -1,
                0,
                0,
                0,
                1,
                0,
                0,
                -1,
                0,
                0,
                0,
                1,
                0,
                0,
                -1
            ], [
                0,
                2,
                4,
                0,
                4,
                3,
                0,
                3,
                5,
                0,
                5,
                2,
                1,
                2,
                5,
                1,
                5,
                3,
                1,
                3,
                4,
                1,
                4,
                2
            ], t1, e), this.type = "OctahedronGeometry", this.parameters = {
                radius: t1,
                detail: e
            };
        }
        static fromJSON(t1) {
            return new jc(t1.radius, t1.detail);
        }
    }
    class qc extends Ii {
        constructor(t1 = .5, e = 1, n = 32, i = 1, r = 0, s = 2 * Math.PI){
            super(), this.type = "RingGeometry", this.parameters = {
                innerRadius: t1,
                outerRadius: e,
                thetaSegments: n,
                phiSegments: i,
                thetaStart: r,
                thetaLength: s
            }, n = Math.max(3, n);
            const a = [], o = [], l = [], c = [];
            let h = t1;
            const u = (e - t1) / (i = Math.max(1, i)), d = new We, p = new me;
            for(let t1 = 0; t1 <= i; t1++){
                for(let t1 = 0; t1 <= n; t1++){
                    const i = r + t1 / n * s;
                    d.x = h * Math.cos(i), d.y = h * Math.sin(i), o.push(d.x, d.y, d.z), l.push(0, 0, 1), p.x = (d.x / e + 1) / 2, p.y = (d.y / e + 1) / 2, c.push(p.x, p.y);
                }
                h += u;
            }
            for(let t1 = 0; t1 < i; t1++){
                const e = t1 * (n + 1);
                for(let t1 = 0; t1 < n; t1++){
                    const i = t1 + e, r = i, s = i + n + 1, o = i + n + 2, l = i + 1;
                    a.push(r, s, l), a.push(s, o, l);
                }
            }
            this.setIndex(a), this.setAttribute("position", new Ti(o, 3)), this.setAttribute("normal", new Ti(l, 3)), this.setAttribute("uv", new Ti(c, 2));
        }
        copy(t1) {
            return super.copy(t1), this.parameters = Object.assign({}, t1.parameters), this;
        }
        static fromJSON(t1) {
            return new qc(t1.innerRadius, t1.outerRadius, t1.thetaSegments, t1.phiSegments, t1.thetaStart, t1.thetaLength);
        }
    }
    class Yc extends Ii {
        constructor(t1 = new mc([
            new me(0, .5),
            new me(-0.5, -0.5),
            new me(.5, -0.5)
        ]), e = 12){
            super(), this.type = "ShapeGeometry", this.parameters = {
                shapes: t1,
                curveSegments: e
            };
            const n = [], i = [], r = [], s = [];
            let a = 0, o = 0;
            if (!1 === Array.isArray(t1)) l(t1);
            else for(let e = 0; e < t1.length; e++)l(t1[e]), this.addGroup(a, o, e), a += o, o = 0;
            function l(t1) {
                const a = i.length / 3, l = t1.extractPoints(e);
                let c = l.shape;
                const h = l.holes;
                !1 === Gc.isClockWise(c) && (c = c.reverse());
                for(let t1 = 0, e = h.length; t1 < e; t1++){
                    const e = h[t1];
                    !0 === Gc.isClockWise(e) && (h[t1] = e.reverse());
                }
                const u = Gc.triangulateShape(c, h);
                for(let t1 = 0, e = h.length; t1 < e; t1++){
                    const e = h[t1];
                    c = c.concat(e);
                }
                for(let t1 = 0, e = c.length; t1 < e; t1++){
                    const e = c[t1];
                    i.push(e.x, e.y, 0), r.push(0, 0, 1), s.push(e.x, e.y);
                }
                for(let t1 = 0, e = u.length; t1 < e; t1++){
                    const e = u[t1], i = e[0] + a, r = e[1] + a, s = e[2] + a;
                    n.push(i, r, s), o += 3;
                }
            }
            this.setIndex(n), this.setAttribute("position", new Ti(i, 3)), this.setAttribute("normal", new Ti(r, 3)), this.setAttribute("uv", new Ti(s, 2));
        }
        copy(t1) {
            return super.copy(t1), this.parameters = Object.assign({}, t1.parameters), this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return function(t1, e) {
                if (e.shapes = [], Array.isArray(t1)) for(let n = 0, i = t1.length; n < i; n++){
                    const i = t1[n];
                    e.shapes.push(i.uuid);
                }
                else e.shapes.push(t1.uuid);
                return e;
            }(this.parameters.shapes, t1);
        }
        static fromJSON(t1, e) {
            const n = [];
            for(let i = 0, r = t1.shapes.length; i < r; i++){
                const r = e[t1.shapes[i]];
                n.push(r);
            }
            return new Yc(n, t1.curveSegments);
        }
    }
    class Zc extends Ii {
        constructor(t1 = 1, e = 32, n = 16, i = 0, r = 2 * Math.PI, s = 0, a = Math.PI){
            super(), this.type = "SphereGeometry", this.parameters = {
                radius: t1,
                widthSegments: e,
                heightSegments: n,
                phiStart: i,
                phiLength: r,
                thetaStart: s,
                thetaLength: a
            }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
            const o = Math.min(s + a, Math.PI);
            let l = 0;
            const c = [], h = new We, u = new We, d = [], p = [], m = [], f = [];
            for(let d = 0; d <= n; d++){
                const g = [], _ = d / n;
                let v = 0;
                0 === d && 0 === s ? v = .5 / e : d === n && o === Math.PI && (v = -0.5 / e);
                for(let n = 0; n <= e; n++){
                    const o = n / e;
                    h.x = -t1 * Math.cos(i + o * r) * Math.sin(s + _ * a), h.y = t1 * Math.cos(s + _ * a), h.z = t1 * Math.sin(i + o * r) * Math.sin(s + _ * a), p.push(h.x, h.y, h.z), u.copy(h).normalize(), m.push(u.x, u.y, u.z), f.push(o + v, 1 - _), g.push(l++);
                }
                c.push(g);
            }
            for(let t1 = 0; t1 < n; t1++)for(let i = 0; i < e; i++){
                const e = c[t1][i + 1], r = c[t1][i], a = c[t1 + 1][i], l = c[t1 + 1][i + 1];
                (0 !== t1 || s > 0) && d.push(e, r, l), (t1 !== n - 1 || o < Math.PI) && d.push(r, a, l);
            }
            this.setIndex(d), this.setAttribute("position", new Ti(p, 3)), this.setAttribute("normal", new Ti(m, 3)), this.setAttribute("uv", new Ti(f, 2));
        }
        copy(t1) {
            return super.copy(t1), this.parameters = Object.assign({}, t1.parameters), this;
        }
        static fromJSON(t1) {
            return new Zc(t1.radius, t1.widthSegments, t1.heightSegments, t1.phiStart, t1.phiLength, t1.thetaStart, t1.thetaLength);
        }
    }
    class Jc extends oc {
        constructor(t1 = 1, e = 0){
            super([
                1,
                1,
                1,
                -1,
                -1,
                1,
                -1,
                1,
                -1,
                1,
                -1,
                -1
            ], [
                2,
                1,
                0,
                0,
                3,
                2,
                1,
                3,
                0,
                2,
                3,
                1
            ], t1, e), this.type = "TetrahedronGeometry", this.parameters = {
                radius: t1,
                detail: e
            };
        }
        static fromJSON(t1) {
            return new Jc(t1.radius, t1.detail);
        }
    }
    class Kc extends Ii {
        constructor(t1 = 1, e = .4, n = 12, i = 48, r = 2 * Math.PI){
            super(), this.type = "TorusGeometry", this.parameters = {
                radius: t1,
                tube: e,
                radialSegments: n,
                tubularSegments: i,
                arc: r
            }, n = Math.floor(n), i = Math.floor(i);
            const s = [], a = [], o = [], l = [], c = new We, h = new We, u = new We;
            for(let s = 0; s <= n; s++)for(let d = 0; d <= i; d++){
                const p = d / i * r, m = s / n * Math.PI * 2;
                h.x = (t1 + e * Math.cos(m)) * Math.cos(p), h.y = (t1 + e * Math.cos(m)) * Math.sin(p), h.z = e * Math.sin(m), a.push(h.x, h.y, h.z), c.x = t1 * Math.cos(p), c.y = t1 * Math.sin(p), u.subVectors(h, c).normalize(), o.push(u.x, u.y, u.z), l.push(d / i), l.push(s / n);
            }
            for(let t1 = 1; t1 <= n; t1++)for(let e = 1; e <= i; e++){
                const n = (i + 1) * t1 + e - 1, r = (i + 1) * (t1 - 1) + e - 1, a = (i + 1) * (t1 - 1) + e, o = (i + 1) * t1 + e;
                s.push(n, r, o), s.push(r, a, o);
            }
            this.setIndex(s), this.setAttribute("position", new Ti(a, 3)), this.setAttribute("normal", new Ti(o, 3)), this.setAttribute("uv", new Ti(l, 2));
        }
        copy(t1) {
            return super.copy(t1), this.parameters = Object.assign({}, t1.parameters), this;
        }
        static fromJSON(t1) {
            return new Kc(t1.radius, t1.tube, t1.radialSegments, t1.tubularSegments, t1.arc);
        }
    }
    class $c extends Ii {
        constructor(t1 = 1, e = .4, n = 64, i = 8, r = 2, s = 3){
            super(), this.type = "TorusKnotGeometry", this.parameters = {
                radius: t1,
                tube: e,
                tubularSegments: n,
                radialSegments: i,
                p: r,
                q: s
            }, n = Math.floor(n), i = Math.floor(i);
            const a = [], o = [], l = [], c = [], h = new We, u = new We, d = new We, p = new We, m = new We, f = new We, g = new We;
            for(let a = 0; a <= n; ++a){
                const v = a / n * r * Math.PI * 2;
                _(v, r, s, t1, d), _(v + .01, r, s, t1, p), f.subVectors(p, d), g.addVectors(p, d), m.crossVectors(f, g), g.crossVectors(m, f), m.normalize(), g.normalize();
                for(let t1 = 0; t1 <= i; ++t1){
                    const r = t1 / i * Math.PI * 2, s = -e * Math.cos(r), p = e * Math.sin(r);
                    h.x = d.x + (s * g.x + p * m.x), h.y = d.y + (s * g.y + p * m.y), h.z = d.z + (s * g.z + p * m.z), o.push(h.x, h.y, h.z), u.subVectors(h, d).normalize(), l.push(u.x, u.y, u.z), c.push(a / n), c.push(t1 / i);
                }
            }
            for(let t1 = 1; t1 <= n; t1++)for(let e = 1; e <= i; e++){
                const n = (i + 1) * (t1 - 1) + (e - 1), r = (i + 1) * t1 + (e - 1), s = (i + 1) * t1 + e, o = (i + 1) * (t1 - 1) + e;
                a.push(n, r, o), a.push(r, s, o);
            }
            function _(t1, e, n, i, r) {
                const s = Math.cos(t1), a = Math.sin(t1), o = n / e * t1, l = Math.cos(o);
                r.x = i * (2 + l) * .5 * s, r.y = i * (2 + l) * a * .5, r.z = i * Math.sin(o) * .5;
            }
            this.setIndex(a), this.setAttribute("position", new Ti(o, 3)), this.setAttribute("normal", new Ti(l, 3)), this.setAttribute("uv", new Ti(c, 2));
        }
        copy(t1) {
            return super.copy(t1), this.parameters = Object.assign({}, t1.parameters), this;
        }
        static fromJSON(t1) {
            return new $c(t1.radius, t1.tube, t1.tubularSegments, t1.radialSegments, t1.p, t1.q);
        }
    }
    class Qc extends Ii {
        constructor(t1 = new Kl(new We(-1, -1, 0), new We(-1, 1, 0), new We(1, 1, 0)), e = 64, n = 1, i = 8, r = !1){
            super(), this.type = "TubeGeometry", this.parameters = {
                path: t1,
                tubularSegments: e,
                radius: n,
                radialSegments: i,
                closed: r
            };
            const s = t1.computeFrenetFrames(e, r);
            this.tangents = s.tangents, this.normals = s.normals, this.binormals = s.binormals;
            const a = new We, o = new We, l = new me;
            let c = new We;
            const h = [], u = [], d = [], p = [];
            function m(r) {
                c = t1.getPointAt(r / e, c);
                const l = s.normals[r], d = s.binormals[r];
                for(let t1 = 0; t1 <= i; t1++){
                    const e = t1 / i * Math.PI * 2, r = Math.sin(e), s = -Math.cos(e);
                    o.x = s * l.x + r * d.x, o.y = s * l.y + r * d.y, o.z = s * l.z + r * d.z, o.normalize(), u.push(o.x, o.y, o.z), a.x = c.x + n * o.x, a.y = c.y + n * o.y, a.z = c.z + n * o.z, h.push(a.x, a.y, a.z);
                }
            }
            !function() {
                for(let t1 = 0; t1 < e; t1++)m(t1);
                m(!1 === r ? e : 0), function() {
                    for(let t1 = 0; t1 <= e; t1++)for(let n = 0; n <= i; n++)l.x = t1 / e, l.y = n / i, d.push(l.x, l.y);
                }(), function() {
                    for(let t1 = 1; t1 <= e; t1++)for(let e = 1; e <= i; e++){
                        const n = (i + 1) * (t1 - 1) + (e - 1), r = (i + 1) * t1 + (e - 1), s = (i + 1) * t1 + e, a = (i + 1) * (t1 - 1) + e;
                        p.push(n, r, a), p.push(r, s, a);
                    }
                }();
            }(), this.setIndex(p), this.setAttribute("position", new Ti(h, 3)), this.setAttribute("normal", new Ti(u, 3)), this.setAttribute("uv", new Ti(d, 2));
        }
        copy(t1) {
            return super.copy(t1), this.parameters = Object.assign({}, t1.parameters), this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.path = this.parameters.path.toJSON(), t1;
        }
        static fromJSON(t1) {
            return new Qc((new Ql[t1.path.type]).fromJSON(t1.path), t1.tubularSegments, t1.radius, t1.radialSegments, t1.closed);
        }
    }
    class th extends Ii {
        constructor(t1 = null){
            if (super(), this.type = "WireframeGeometry", this.parameters = {
                geometry: t1
            }, null !== t1) {
                const e = [], n = new Set, i = new We, r = new We;
                if (null !== t1.index) {
                    const s = t1.attributes.position, a = t1.index;
                    let o = t1.groups;
                    0 === o.length && (o = [
                        {
                            start: 0,
                            count: a.count,
                            materialIndex: 0
                        }
                    ]);
                    for(let t1 = 0, l = o.length; t1 < l; ++t1){
                        const l = o[t1], c = l.start;
                        for(let t1 = c, o = c + l.count; t1 < o; t1 += 3)for(let o = 0; o < 3; o++){
                            const l = a.getX(t1 + o), c = a.getX(t1 + (o + 1) % 3);
                            i.fromBufferAttribute(s, l), r.fromBufferAttribute(s, c), !0 === eh(i, r, n) && (e.push(i.x, i.y, i.z), e.push(r.x, r.y, r.z));
                        }
                    }
                } else {
                    const s = t1.attributes.position;
                    for(let t1 = 0, a = s.count / 3; t1 < a; t1++)for(let a = 0; a < 3; a++){
                        const o = 3 * t1 + a, l = 3 * t1 + (a + 1) % 3;
                        i.fromBufferAttribute(s, o), r.fromBufferAttribute(s, l), !0 === eh(i, r, n) && (e.push(i.x, i.y, i.z), e.push(r.x, r.y, r.z));
                    }
                }
                this.setAttribute("position", new Ti(e, 3));
            }
        }
        copy(t1) {
            return super.copy(t1), this.parameters = Object.assign({}, t1.parameters), this;
        }
    }
    function eh(t1, e, n) {
        const i = `${t1.x},${t1.y},${t1.z}-${e.x},${e.y},${e.z}`, r = `${e.x},${e.y},${e.z}-${t1.x},${t1.y},${t1.z}`;
        return !0 !== n.has(i) && !0 !== n.has(r) && (n.add(i), n.add(r), !0);
    }
    var nh = Object.freeze({
        __proto__: null,
        BoxGeometry: $i,
        CapsuleGeometry: ic,
        CircleGeometry: rc,
        ConeGeometry: ac,
        CylinderGeometry: sc,
        DodecahedronGeometry: lc,
        EdgesGeometry: pc,
        ExtrudeGeometry: kc,
        IcosahedronGeometry: Xc,
        LatheGeometry: nc,
        OctahedronGeometry: jc,
        PlaneGeometry: xr,
        PolyhedronGeometry: oc,
        RingGeometry: qc,
        ShapeGeometry: Yc,
        SphereGeometry: Zc,
        TetrahedronGeometry: Jc,
        TorusGeometry: Kc,
        TorusKnotGeometry: $c,
        TubeGeometry: Qc,
        WireframeGeometry: th
    });
    class ih extends di {
        constructor(t1){
            super(), this.isShadowMaterial = !0, this.type = "ShadowMaterial", this.color = new ci(0), this.transparent = !0, this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.color.copy(t1.color), this.fog = t1.fog, this;
        }
    }
    class rh extends ir {
        constructor(t1){
            super(t1), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
        }
    }
    class sh extends di {
        constructor(t1){
            super(), this.isMeshStandardMaterial = !0, this.defines = {
                STANDARD: ""
            }, this.type = "MeshStandardMaterial", this.color = new ci(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ci(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new me(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.defines = {
                STANDARD: ""
            }, this.color.copy(t1.color), this.roughness = t1.roughness, this.metalness = t1.metalness, this.map = t1.map, this.lightMap = t1.lightMap, this.lightMapIntensity = t1.lightMapIntensity, this.aoMap = t1.aoMap, this.aoMapIntensity = t1.aoMapIntensity, this.emissive.copy(t1.emissive), this.emissiveMap = t1.emissiveMap, this.emissiveIntensity = t1.emissiveIntensity, this.bumpMap = t1.bumpMap, this.bumpScale = t1.bumpScale, this.normalMap = t1.normalMap, this.normalMapType = t1.normalMapType, this.normalScale.copy(t1.normalScale), this.displacementMap = t1.displacementMap, this.displacementScale = t1.displacementScale, this.displacementBias = t1.displacementBias, this.roughnessMap = t1.roughnessMap, this.metalnessMap = t1.metalnessMap, this.alphaMap = t1.alphaMap, this.envMap = t1.envMap, this.envMapIntensity = t1.envMapIntensity, this.wireframe = t1.wireframe, this.wireframeLinewidth = t1.wireframeLinewidth, this.wireframeLinecap = t1.wireframeLinecap, this.wireframeLinejoin = t1.wireframeLinejoin, this.flatShading = t1.flatShading, this.fog = t1.fog, this;
        }
    }
    class ah extends sh {
        constructor(t1){
            super(), this.isMeshPhysicalMaterial = !0, this.defines = {
                STANDARD: "",
                PHYSICAL: ""
            }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new me(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
                get: function() {
                    return ae(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
                },
                set: function(t1) {
                    this.ior = (1 + .4 * t1) / (1 - .4 * t1);
                }
            }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [
                100,
                400
            ], this.iridescenceThicknessMap = null, this.sheenColor = new ci(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new ci(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new ci(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(t1);
        }
        get anisotropy() {
            return this._anisotropy;
        }
        set anisotropy(t1) {
            this._anisotropy > 0 != t1 > 0 && this.version++, this._anisotropy = t1;
        }
        get clearcoat() {
            return this._clearcoat;
        }
        set clearcoat(t1) {
            this._clearcoat > 0 != t1 > 0 && this.version++, this._clearcoat = t1;
        }
        get iridescence() {
            return this._iridescence;
        }
        set iridescence(t1) {
            this._iridescence > 0 != t1 > 0 && this.version++, this._iridescence = t1;
        }
        get sheen() {
            return this._sheen;
        }
        set sheen(t1) {
            this._sheen > 0 != t1 > 0 && this.version++, this._sheen = t1;
        }
        get transmission() {
            return this._transmission;
        }
        set transmission(t1) {
            this._transmission > 0 != t1 > 0 && this.version++, this._transmission = t1;
        }
        copy(t1) {
            return super.copy(t1), this.defines = {
                STANDARD: "",
                PHYSICAL: ""
            }, this.anisotropy = t1.anisotropy, this.anisotropyRotation = t1.anisotropyRotation, this.anisotropyMap = t1.anisotropyMap, this.clearcoat = t1.clearcoat, this.clearcoatMap = t1.clearcoatMap, this.clearcoatRoughness = t1.clearcoatRoughness, this.clearcoatRoughnessMap = t1.clearcoatRoughnessMap, this.clearcoatNormalMap = t1.clearcoatNormalMap, this.clearcoatNormalScale.copy(t1.clearcoatNormalScale), this.ior = t1.ior, this.iridescence = t1.iridescence, this.iridescenceMap = t1.iridescenceMap, this.iridescenceIOR = t1.iridescenceIOR, this.iridescenceThicknessRange = [
                ...t1.iridescenceThicknessRange
            ], this.iridescenceThicknessMap = t1.iridescenceThicknessMap, this.sheen = t1.sheen, this.sheenColor.copy(t1.sheenColor), this.sheenColorMap = t1.sheenColorMap, this.sheenRoughness = t1.sheenRoughness, this.sheenRoughnessMap = t1.sheenRoughnessMap, this.transmission = t1.transmission, this.transmissionMap = t1.transmissionMap, this.thickness = t1.thickness, this.thicknessMap = t1.thicknessMap, this.attenuationDistance = t1.attenuationDistance, this.attenuationColor.copy(t1.attenuationColor), this.specularIntensity = t1.specularIntensity, this.specularIntensityMap = t1.specularIntensityMap, this.specularColor.copy(t1.specularColor), this.specularColorMap = t1.specularColorMap, this;
        }
    }
    class oh extends di {
        constructor(t1){
            super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new ci(16777215), this.specular = new ci(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ci(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new me(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = h, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.color.copy(t1.color), this.specular.copy(t1.specular), this.shininess = t1.shininess, this.map = t1.map, this.lightMap = t1.lightMap, this.lightMapIntensity = t1.lightMapIntensity, this.aoMap = t1.aoMap, this.aoMapIntensity = t1.aoMapIntensity, this.emissive.copy(t1.emissive), this.emissiveMap = t1.emissiveMap, this.emissiveIntensity = t1.emissiveIntensity, this.bumpMap = t1.bumpMap, this.bumpScale = t1.bumpScale, this.normalMap = t1.normalMap, this.normalMapType = t1.normalMapType, this.normalScale.copy(t1.normalScale), this.displacementMap = t1.displacementMap, this.displacementScale = t1.displacementScale, this.displacementBias = t1.displacementBias, this.specularMap = t1.specularMap, this.alphaMap = t1.alphaMap, this.envMap = t1.envMap, this.combine = t1.combine, this.reflectivity = t1.reflectivity, this.refractionRatio = t1.refractionRatio, this.wireframe = t1.wireframe, this.wireframeLinewidth = t1.wireframeLinewidth, this.wireframeLinecap = t1.wireframeLinecap, this.wireframeLinejoin = t1.wireframeLinejoin, this.flatShading = t1.flatShading, this.fog = t1.fog, this;
        }
    }
    class lh extends di {
        constructor(t1){
            super(), this.isMeshToonMaterial = !0, this.defines = {
                TOON: ""
            }, this.type = "MeshToonMaterial", this.color = new ci(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ci(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new me(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.color.copy(t1.color), this.map = t1.map, this.gradientMap = t1.gradientMap, this.lightMap = t1.lightMap, this.lightMapIntensity = t1.lightMapIntensity, this.aoMap = t1.aoMap, this.aoMapIntensity = t1.aoMapIntensity, this.emissive.copy(t1.emissive), this.emissiveMap = t1.emissiveMap, this.emissiveIntensity = t1.emissiveIntensity, this.bumpMap = t1.bumpMap, this.bumpScale = t1.bumpScale, this.normalMap = t1.normalMap, this.normalMapType = t1.normalMapType, this.normalScale.copy(t1.normalScale), this.displacementMap = t1.displacementMap, this.displacementScale = t1.displacementScale, this.displacementBias = t1.displacementBias, this.alphaMap = t1.alphaMap, this.wireframe = t1.wireframe, this.wireframeLinewidth = t1.wireframeLinewidth, this.wireframeLinecap = t1.wireframeLinecap, this.wireframeLinejoin = t1.wireframeLinejoin, this.fog = t1.fog, this;
        }
    }
    class ch extends di {
        constructor(t1){
            super(), this.isMeshNormalMaterial = !0, this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new me(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.flatShading = !1, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.bumpMap = t1.bumpMap, this.bumpScale = t1.bumpScale, this.normalMap = t1.normalMap, this.normalMapType = t1.normalMapType, this.normalScale.copy(t1.normalScale), this.displacementMap = t1.displacementMap, this.displacementScale = t1.displacementScale, this.displacementBias = t1.displacementBias, this.wireframe = t1.wireframe, this.wireframeLinewidth = t1.wireframeLinewidth, this.flatShading = t1.flatShading, this;
        }
    }
    class hh extends di {
        constructor(t1){
            super(), this.isMeshLambertMaterial = !0, this.type = "MeshLambertMaterial", this.color = new ci(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ci(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new me(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = h, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.color.copy(t1.color), this.map = t1.map, this.lightMap = t1.lightMap, this.lightMapIntensity = t1.lightMapIntensity, this.aoMap = t1.aoMap, this.aoMapIntensity = t1.aoMapIntensity, this.emissive.copy(t1.emissive), this.emissiveMap = t1.emissiveMap, this.emissiveIntensity = t1.emissiveIntensity, this.bumpMap = t1.bumpMap, this.bumpScale = t1.bumpScale, this.normalMap = t1.normalMap, this.normalMapType = t1.normalMapType, this.normalScale.copy(t1.normalScale), this.displacementMap = t1.displacementMap, this.displacementScale = t1.displacementScale, this.displacementBias = t1.displacementBias, this.specularMap = t1.specularMap, this.alphaMap = t1.alphaMap, this.envMap = t1.envMap, this.combine = t1.combine, this.reflectivity = t1.reflectivity, this.refractionRatio = t1.refractionRatio, this.wireframe = t1.wireframe, this.wireframeLinewidth = t1.wireframeLinewidth, this.wireframeLinecap = t1.wireframeLinecap, this.wireframeLinejoin = t1.wireframeLinejoin, this.flatShading = t1.flatShading, this.fog = t1.fog, this;
        }
    }
    class uh extends di {
        constructor(t1){
            super(), this.isMeshMatcapMaterial = !0, this.defines = {
                MATCAP: ""
            }, this.type = "MeshMatcapMaterial", this.color = new ci(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new me(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.fog = !0, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.defines = {
                MATCAP: ""
            }, this.color.copy(t1.color), this.matcap = t1.matcap, this.map = t1.map, this.bumpMap = t1.bumpMap, this.bumpScale = t1.bumpScale, this.normalMap = t1.normalMap, this.normalMapType = t1.normalMapType, this.normalScale.copy(t1.normalScale), this.displacementMap = t1.displacementMap, this.displacementScale = t1.displacementScale, this.displacementBias = t1.displacementBias, this.alphaMap = t1.alphaMap, this.flatShading = t1.flatShading, this.fog = t1.fog, this;
        }
    }
    class dh extends fl {
        constructor(t1){
            super(), this.isLineDashedMaterial = !0, this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t1);
        }
        copy(t1) {
            return super.copy(t1), this.scale = t1.scale, this.dashSize = t1.dashSize, this.gapSize = t1.gapSize, this;
        }
    }
    function ph(t1, e, n) {
        return !t1 || !n && t1.constructor === e ? t1 : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t1) : Array.prototype.slice.call(t1);
    }
    function mh(t1) {
        return ArrayBuffer.isView(t1) && !(t1 instanceof DataView);
    }
    function fh(t1) {
        const e = t1.length, n = new Array(e);
        for(let t1 = 0; t1 !== e; ++t1)n[t1] = t1;
        return n.sort(function(e, n) {
            return t1[e] - t1[n];
        }), n;
    }
    function gh(t1, e, n) {
        const i = t1.length, r = new t1.constructor(i);
        for(let s = 0, a = 0; a !== i; ++s){
            const i = n[s] * e;
            for(let n = 0; n !== e; ++n)r[a++] = t1[i + n];
        }
        return r;
    }
    function _h(t1, e, n, i) {
        let r = 1, s = t1[0];
        for(; void 0 !== s && void 0 === s[i];)s = t1[r++];
        if (void 0 === s) return;
        let a = s[i];
        if (void 0 !== a) {
            if (Array.isArray(a)) do a = s[i], void 0 !== a && (e.push(s.time), n.push.apply(n, a)), s = t1[r++];
            while (void 0 !== s);
            else if (void 0 !== a.toArray) do a = s[i], void 0 !== a && (e.push(s.time), a.toArray(n, n.length)), s = t1[r++];
            while (void 0 !== s);
            else do a = s[i], void 0 !== a && (e.push(s.time), n.push(a)), s = t1[r++];
            while (void 0 !== s);
        }
    }
    const vh = {
        convertArray: ph,
        isTypedArray: mh,
        getKeyframeOrder: fh,
        sortedArray: gh,
        flattenJSON: _h,
        subclip: function(t1, e, n, i, r = 30) {
            const s = t1.clone();
            s.name = e;
            const a = [];
            for(let t1 = 0; t1 < s.tracks.length; ++t1){
                const e = s.tracks[t1], o = e.getValueSize(), l = [], c = [];
                for(let t1 = 0; t1 < e.times.length; ++t1){
                    const s = e.times[t1] * r;
                    if (!(s < n || s >= i)) {
                        l.push(e.times[t1]);
                        for(let n = 0; n < o; ++n)c.push(e.values[t1 * o + n]);
                    }
                }
                0 !== l.length && (e.times = ph(l, e.times.constructor), e.values = ph(c, e.values.constructor), a.push(e));
            }
            s.tracks = a;
            let o = 1 / 0;
            for(let t1 = 0; t1 < s.tracks.length; ++t1)o > s.tracks[t1].times[0] && (o = s.tracks[t1].times[0]);
            for(let t1 = 0; t1 < s.tracks.length; ++t1)s.tracks[t1].shift(-1 * o);
            return s.resetDuration(), s;
        },
        makeClipAdditive: function(t1, e = 0, n = t1, i = 30) {
            i <= 0 && (i = 30);
            const r = n.tracks.length, s = e / i;
            for(let e = 0; e < r; ++e){
                const i = n.tracks[e], r = i.ValueTypeName;
                if ("bool" === r || "string" === r) continue;
                const a = t1.tracks.find(function(t1) {
                    return t1.name === i.name && t1.ValueTypeName === r;
                });
                if (void 0 === a) continue;
                let o = 0;
                const l = i.getValueSize();
                i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (o = l / 3);
                let c = 0;
                const h = a.getValueSize();
                a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (c = h / 3);
                const u = i.times.length - 1;
                let d;
                if (s <= i.times[0]) {
                    const t1 = o, e = l - o;
                    d = i.values.slice(t1, e);
                } else if (s >= i.times[u]) {
                    const t1 = u * l + o, e = t1 + l - o;
                    d = i.values.slice(t1, e);
                } else {
                    const t1 = i.createInterpolant(), e = o, n = l - o;
                    t1.evaluate(s), d = t1.resultBuffer.slice(e, n);
                }
                if ("quaternion" === r) (new ke).fromArray(d).normalize().conjugate().toArray(d);
                const p = a.times.length;
                for(let t1 = 0; t1 < p; ++t1){
                    const e = t1 * h + c;
                    if ("quaternion" === r) ke.multiplyQuaternionsFlat(a.values, e, d, 0, a.values, e);
                    else {
                        const t1 = h - 2 * c;
                        for(let n = 0; n < t1; ++n)a.values[e + n] -= d[n];
                    }
                }
            }
            return t1.blendMode = Ot, t1;
        }
    };
    class xh {
        constructor(t1, e, n, i){
            this.parameterPositions = t1, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
        }
        evaluate(t1) {
            const e = this.parameterPositions;
            let n = this._cachedIndex, i = e[n], r = e[n - 1];
            t: {
                e: {
                    let s;
                    n: {
                        i: if (!(t1 < i)) {
                            for(let s = n + 2;;){
                                if (void 0 === i) {
                                    if (t1 < r) break i;
                                    return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
                                }
                                if (n === s) break;
                                if (r = i, i = e[++n], t1 < i) break e;
                            }
                            s = e.length;
                            break n;
                        }
                        if (t1 >= r) break t;
                        {
                            const a = e[1];
                            t1 < a && (n = 2, r = a);
                            for(let s = n - 2;;){
                                if (void 0 === r) return this._cachedIndex = 0, this.copySampleValue_(0);
                                if (n === s) break;
                                if (i = r, r = e[--n - 1], t1 >= r) break e;
                            }
                            s = n, n = 0;
                        }
                    }
                    for(; n < s;){
                        const i = n + s >>> 1;
                        t1 < e[i] ? s = i : n = i + 1;
                    }
                    if (i = e[n], r = e[n - 1], void 0 === r) return this._cachedIndex = 0, this.copySampleValue_(0);
                    if (void 0 === i) return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
                }
                this._cachedIndex = n, this.intervalChanged_(n, r, i);
            }
            return this.interpolate_(n, r, t1, i);
        }
        getSettings_() {
            return this.settings || this.DefaultSettings_;
        }
        copySampleValue_(t1) {
            const e = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = t1 * i;
            for(let t1 = 0; t1 !== i; ++t1)e[t1] = n[r + t1];
            return e;
        }
        interpolate_() {
            throw new Error("call to abstract method");
        }
        intervalChanged_() {}
    }
    class yh extends xh {
        constructor(t1, e, n, i){
            super(t1, e, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
                endingStart: It,
                endingEnd: It
            };
        }
        intervalChanged_(t1, e, n) {
            const i = this.parameterPositions;
            let r = t1 - 2, s = t1 + 1, a = i[r], o = i[s];
            if (void 0 === a) switch(this.getSettings_().endingStart){
                case Ut:
                    r = t1, a = 2 * e - n;
                    break;
                case Dt:
                    r = i.length - 2, a = e + i[r] - i[r + 1];
                    break;
                default:
                    r = t1, a = n;
            }
            if (void 0 === o) switch(this.getSettings_().endingEnd){
                case Ut:
                    s = t1, o = 2 * n - e;
                    break;
                case Dt:
                    s = 1, o = n + i[1] - i[0];
                    break;
                default:
                    s = t1 - 1, o = e;
            }
            const l = .5 * (n - e), c = this.valueSize;
            this._weightPrev = l / (e - a), this._weightNext = l / (o - n), this._offsetPrev = r * c, this._offsetNext = s * c;
        }
        interpolate_(t1, e, n, i) {
            const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = t1 * a, l = o - a, c = this._offsetPrev, h = this._offsetNext, u = this._weightPrev, d = this._weightNext, p = (n - e) / (i - e), m = p * p, f = m * p, g = -u * f + 2 * u * m - u * p, _ = (1 + u) * f + (-1.5 - 2 * u) * m + (-0.5 + u) * p + 1, v = (-1 - d) * f + (1.5 + d) * m + .5 * p, x = d * f - d * m;
            for(let t1 = 0; t1 !== a; ++t1)r[t1] = g * s[c + t1] + _ * s[l + t1] + v * s[o + t1] + x * s[h + t1];
            return r;
        }
    }
    class Mh extends xh {
        constructor(t1, e, n, i){
            super(t1, e, n, i);
        }
        interpolate_(t1, e, n, i) {
            const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = t1 * a, l = o - a, c = (n - e) / (i - e), h = 1 - c;
            for(let t1 = 0; t1 !== a; ++t1)r[t1] = s[l + t1] * h + s[o + t1] * c;
            return r;
        }
    }
    class Sh extends xh {
        constructor(t1, e, n, i){
            super(t1, e, n, i);
        }
        interpolate_(t1) {
            return this.copySampleValue_(t1 - 1);
        }
    }
    class bh {
        constructor(t1, e, n, i){
            if (void 0 === t1) throw new Error("THREE.KeyframeTrack: track name is undefined");
            if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t1);
            this.name = t1, this.times = ph(e, this.TimeBufferType), this.values = ph(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
        }
        static toJSON(t1) {
            const e = t1.constructor;
            let n;
            if (e.toJSON !== this.toJSON) n = e.toJSON(t1);
            else {
                n = {
                    name: t1.name,
                    times: ph(t1.times, Array),
                    values: ph(t1.values, Array)
                };
                const e = t1.getInterpolation();
                e !== t1.DefaultInterpolation && (n.interpolation = e);
            }
            return n.type = t1.ValueTypeName, n;
        }
        InterpolantFactoryMethodDiscrete(t1) {
            return new Sh(this.times, this.values, this.getValueSize(), t1);
        }
        InterpolantFactoryMethodLinear(t1) {
            return new Mh(this.times, this.values, this.getValueSize(), t1);
        }
        InterpolantFactoryMethodSmooth(t1) {
            return new yh(this.times, this.values, this.getValueSize(), t1);
        }
        setInterpolation(t1) {
            let e;
            switch(t1){
                case Ct:
                    e = this.InterpolantFactoryMethodDiscrete;
                    break;
                case Lt:
                    e = this.InterpolantFactoryMethodLinear;
                    break;
                case Pt:
                    e = this.InterpolantFactoryMethodSmooth;
            }
            if (void 0 === e) {
                const e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                if (void 0 === this.createInterpolant) {
                    if (t1 === this.DefaultInterpolation) throw new Error(e);
                    this.setInterpolation(this.DefaultInterpolation);
                }
                return console.warn("THREE.KeyframeTrack:", e), this;
            }
            return this.createInterpolant = e, this;
        }
        getInterpolation() {
            switch(this.createInterpolant){
                case this.InterpolantFactoryMethodDiscrete:
                    return Ct;
                case this.InterpolantFactoryMethodLinear:
                    return Lt;
                case this.InterpolantFactoryMethodSmooth:
                    return Pt;
            }
        }
        getValueSize() {
            return this.values.length / this.times.length;
        }
        shift(t1) {
            if (0 !== t1) {
                const e = this.times;
                for(let n = 0, i = e.length; n !== i; ++n)e[n] += t1;
            }
            return this;
        }
        scale(t1) {
            if (1 !== t1) {
                const e = this.times;
                for(let n = 0, i = e.length; n !== i; ++n)e[n] *= t1;
            }
            return this;
        }
        trim(t1, e) {
            const n = this.times, i = n.length;
            let r = 0, s = i - 1;
            for(; r !== i && n[r] < t1;)++r;
            for(; -1 !== s && n[s] > e;)--s;
            if (++s, 0 !== r || s !== i) {
                r >= s && (s = Math.max(s, 1), r = s - 1);
                const t1 = this.getValueSize();
                this.times = n.slice(r, s), this.values = this.values.slice(r * t1, s * t1);
            }
            return this;
        }
        validate() {
            let t1 = !0;
            const e = this.getValueSize();
            e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t1 = !1);
            const n = this.times, i = this.values, r = n.length;
            0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t1 = !1);
            let s = null;
            for(let e = 0; e !== r; e++){
                const i = n[e];
                if ("number" == typeof i && isNaN(i)) {
                    console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e, i), t1 = !1;
                    break;
                }
                if (null !== s && s > i) {
                    console.error("THREE.KeyframeTrack: Out of order keys.", this, e, i, s), t1 = !1;
                    break;
                }
                s = i;
            }
            if (void 0 !== i && mh(i)) for(let e = 0, n = i.length; e !== n; ++e){
                const n = i[e];
                if (isNaN(n)) {
                    console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e, n), t1 = !1;
                    break;
                }
            }
            return t1;
        }
        optimize() {
            const t1 = this.times.slice(), e = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === Pt, r = t1.length - 1;
            let s = 1;
            for(let a = 1; a < r; ++a){
                let r = !1;
                const o = t1[a];
                if (o !== t1[a + 1] && (1 !== a || o !== t1[0])) {
                    if (i) r = !0;
                    else {
                        const t1 = a * n, i = t1 - n, s = t1 + n;
                        for(let a = 0; a !== n; ++a){
                            const n = e[t1 + a];
                            if (n !== e[i + a] || n !== e[s + a]) {
                                r = !0;
                                break;
                            }
                        }
                    }
                }
                if (r) {
                    if (a !== s) {
                        t1[s] = t1[a];
                        const i = a * n, r = s * n;
                        for(let t1 = 0; t1 !== n; ++t1)e[r + t1] = e[i + t1];
                    }
                    ++s;
                }
            }
            if (r > 0) {
                t1[s] = t1[r];
                for(let t1 = r * n, i = s * n, a = 0; a !== n; ++a)e[i + a] = e[t1 + a];
                ++s;
            }
            return s !== t1.length ? (this.times = t1.slice(0, s), this.values = e.slice(0, s * n)) : (this.times = t1, this.values = e), this;
        }
        clone() {
            const t1 = this.times.slice(), e = this.values.slice(), n = new this.constructor(this.name, t1, e);
            return n.createInterpolant = this.createInterpolant, n;
        }
    }
    bh.prototype.TimeBufferType = Float32Array, bh.prototype.ValueBufferType = Float32Array, bh.prototype.DefaultInterpolation = Lt;
    class Th extends bh {
    }
    Th.prototype.ValueTypeName = "bool", Th.prototype.ValueBufferType = Array, Th.prototype.DefaultInterpolation = Ct, Th.prototype.InterpolantFactoryMethodLinear = void 0, Th.prototype.InterpolantFactoryMethodSmooth = void 0;
    class Eh extends bh {
    }
    Eh.prototype.ValueTypeName = "color";
    class wh extends bh {
    }
    wh.prototype.ValueTypeName = "number";
    class Ah extends xh {
        constructor(t1, e, n, i){
            super(t1, e, n, i);
        }
        interpolate_(t1, e, n, i) {
            const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = (n - e) / (i - e);
            let l = t1 * a;
            for(let t1 = l + a; l !== t1; l += 4)ke.slerpFlat(r, 0, s, l - a, s, l, o);
            return r;
        }
    }
    class Rh extends bh {
        InterpolantFactoryMethodLinear(t1) {
            return new Ah(this.times, this.values, this.getValueSize(), t1);
        }
    }
    Rh.prototype.ValueTypeName = "quaternion", Rh.prototype.DefaultInterpolation = Lt, Rh.prototype.InterpolantFactoryMethodSmooth = void 0;
    class Ch extends bh {
    }
    Ch.prototype.ValueTypeName = "string", Ch.prototype.ValueBufferType = Array, Ch.prototype.DefaultInterpolation = Ct, Ch.prototype.InterpolantFactoryMethodLinear = void 0, Ch.prototype.InterpolantFactoryMethodSmooth = void 0;
    class Lh extends bh {
    }
    Lh.prototype.ValueTypeName = "vector";
    class Ph {
        constructor(t1, e = -1, n, i = 2500){
            this.name = t1, this.tracks = n, this.duration = e, this.blendMode = i, this.uuid = se(), this.duration < 0 && this.resetDuration();
        }
        static parse(t1) {
            const e = [], n = t1.tracks, i = 1 / (t1.fps || 1);
            for(let t1 = 0, r = n.length; t1 !== r; ++t1)e.push(Ih(n[t1]).scale(i));
            const r = new this(t1.name, t1.duration, e, t1.blendMode);
            return r.uuid = t1.uuid, r;
        }
        static toJSON(t1) {
            const e = [], n = t1.tracks, i = {
                name: t1.name,
                duration: t1.duration,
                tracks: e,
                uuid: t1.uuid,
                blendMode: t1.blendMode
            };
            for(let t1 = 0, i = n.length; t1 !== i; ++t1)e.push(bh.toJSON(n[t1]));
            return i;
        }
        static CreateFromMorphTargetSequence(t1, e, n, i) {
            const r = e.length, s = [];
            for(let t1 = 0; t1 < r; t1++){
                let a = [], o = [];
                a.push((t1 + r - 1) % r, t1, (t1 + 1) % r), o.push(0, 1, 0);
                const l = fh(a);
                a = gh(a, 1, l), o = gh(o, 1, l), i || 0 !== a[0] || (a.push(r), o.push(o[0])), s.push(new wh(".morphTargetInfluences[" + e[t1].name + "]", a, o).scale(1 / n));
            }
            return new this(t1, -1, s);
        }
        static findByName(t1, e) {
            let n = t1;
            if (!Array.isArray(t1)) {
                const e = t1;
                n = e.geometry && e.geometry.animations || e.animations;
            }
            for(let t1 = 0; t1 < n.length; t1++)if (n[t1].name === e) return n[t1];
            return null;
        }
        static CreateClipsFromMorphTargetSequences(t1, e, n) {
            const i = {}, r = /^([\w-]*?)([\d]+)$/;
            for(let e = 0, n = t1.length; e < n; e++){
                const n = t1[e], s = n.name.match(r);
                if (s && s.length > 1) {
                    const t1 = s[1];
                    let e = i[t1];
                    e || (i[t1] = e = []), e.push(n);
                }
            }
            const s = [];
            for(const t1 in i)s.push(this.CreateFromMorphTargetSequence(t1, i[t1], e, n));
            return s;
        }
        static parseAnimation(t1, e) {
            if (!t1) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
            const n = function(t1, e, n, i, r) {
                if (0 !== n.length) {
                    const s = [], a = [];
                    _h(n, s, a, i), 0 !== s.length && r.push(new t1(e, s, a));
                }
            }, i = [], r = t1.name || "default", s = t1.fps || 30, a = t1.blendMode;
            let o = t1.length || -1;
            const l = t1.hierarchy || [];
            for(let t1 = 0; t1 < l.length; t1++){
                const r = l[t1].keys;
                if (r && 0 !== r.length) {
                    if (r[0].morphTargets) {
                        const t1 = {};
                        let e;
                        for(e = 0; e < r.length; e++)if (r[e].morphTargets) for(let n = 0; n < r[e].morphTargets.length; n++)t1[r[e].morphTargets[n]] = -1;
                        for(const n in t1){
                            const t1 = [], s = [];
                            for(let i = 0; i !== r[e].morphTargets.length; ++i){
                                const i = r[e];
                                t1.push(i.time), s.push(i.morphTarget === n ? 1 : 0);
                            }
                            i.push(new wh(".morphTargetInfluence[" + n + "]", t1, s));
                        }
                        o = t1.length * s;
                    } else {
                        const s = ".bones[" + e[t1].name + "]";
                        n(Lh, s + ".position", r, "pos", i), n(Rh, s + ".quaternion", r, "rot", i), n(Lh, s + ".scale", r, "scl", i);
                    }
                }
            }
            if (0 === i.length) return null;
            return new this(r, o, i, a);
        }
        resetDuration() {
            let t1 = 0;
            for(let e = 0, n = this.tracks.length; e !== n; ++e){
                const n = this.tracks[e];
                t1 = Math.max(t1, n.times[n.times.length - 1]);
            }
            return this.duration = t1, this;
        }
        trim() {
            for(let t1 = 0; t1 < this.tracks.length; t1++)this.tracks[t1].trim(0, this.duration);
            return this;
        }
        validate() {
            let t1 = !0;
            for(let e = 0; e < this.tracks.length; e++)t1 = t1 && this.tracks[e].validate();
            return t1;
        }
        optimize() {
            for(let t1 = 0; t1 < this.tracks.length; t1++)this.tracks[t1].optimize();
            return this;
        }
        clone() {
            const t1 = [];
            for(let e = 0; e < this.tracks.length; e++)t1.push(this.tracks[e].clone());
            return new this.constructor(this.name, this.duration, t1, this.blendMode);
        }
        toJSON() {
            return this.constructor.toJSON(this);
        }
    }
    function Ih(t1) {
        if (void 0 === t1.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
        const e = function(t1) {
            switch(t1.toLowerCase()){
                case "scalar":
                case "double":
                case "float":
                case "number":
                case "integer":
                    return wh;
                case "vector":
                case "vector2":
                case "vector3":
                case "vector4":
                    return Lh;
                case "color":
                    return Eh;
                case "quaternion":
                    return Rh;
                case "bool":
                case "boolean":
                    return Th;
                case "string":
                    return Ch;
            }
            throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t1);
        }(t1.type);
        if (void 0 === t1.times) {
            const e = [], n = [];
            _h(t1.keys, e, n, "value"), t1.times = e, t1.values = n;
        }
        return void 0 !== e.parse ? e.parse(t1) : new e(t1.name, t1.times, t1.values, t1.interpolation);
    }
    const Uh = {
        enabled: !1,
        files: {},
        add: function(t1, e) {
            !1 !== this.enabled && (this.files[t1] = e);
        },
        get: function(t1) {
            if (!1 !== this.enabled) return this.files[t1];
        },
        remove: function(t1) {
            delete this.files[t1];
        },
        clear: function() {
            this.files = {};
        }
    };
    class Dh {
        constructor(t1, e, n){
            const i = this;
            let r, s = !1, a = 0, o = 0;
            const l = [];
            this.onStart = void 0, this.onLoad = t1, this.onProgress = e, this.onError = n, this.itemStart = function(t1) {
                o++, !1 === s && void 0 !== i.onStart && i.onStart(t1, a, o), s = !0;
            }, this.itemEnd = function(t1) {
                a++, void 0 !== i.onProgress && i.onProgress(t1, a, o), a === o && (s = !1, void 0 !== i.onLoad && i.onLoad());
            }, this.itemError = function(t1) {
                void 0 !== i.onError && i.onError(t1);
            }, this.resolveURL = function(t1) {
                return r ? r(t1) : t1;
            }, this.setURLModifier = function(t1) {
                return r = t1, this;
            }, this.addHandler = function(t1, e) {
                return l.push(t1, e), this;
            }, this.removeHandler = function(t1) {
                const e = l.indexOf(t1);
                return -1 !== e && l.splice(e, 2), this;
            }, this.getHandler = function(t1) {
                for(let e = 0, n = l.length; e < n; e += 2){
                    const n = l[e], i = l[e + 1];
                    if (n.global && (n.lastIndex = 0), n.test(t1)) return i;
                }
                return null;
            };
        }
    }
    const Nh = new Dh;
    class Oh {
        constructor(t1){
            this.manager = void 0 !== t1 ? t1 : Nh, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
        }
        load() {}
        loadAsync(t1, e) {
            const n = this;
            return new Promise(function(i, r) {
                n.load(t1, i, e, r);
            });
        }
        parse() {}
        setCrossOrigin(t1) {
            return this.crossOrigin = t1, this;
        }
        setWithCredentials(t1) {
            return this.withCredentials = t1, this;
        }
        setPath(t1) {
            return this.path = t1, this;
        }
        setResourcePath(t1) {
            return this.resourcePath = t1, this;
        }
        setRequestHeader(t1) {
            return this.requestHeader = t1, this;
        }
    }
    Oh.DEFAULT_MATERIAL_NAME = "__DEFAULT";
    const Fh = {};
    class Bh extends Error {
        constructor(t1, e){
            super(t1), this.response = e;
        }
    }
    class zh extends Oh {
        constructor(t1){
            super(t1);
        }
        load(t1, e, n, i) {
            void 0 === t1 && (t1 = ""), void 0 !== this.path && (t1 = this.path + t1), t1 = this.manager.resolveURL(t1);
            const r = Uh.get(t1);
            if (void 0 !== r) return this.manager.itemStart(t1), setTimeout(()=>{
                e && e(r), this.manager.itemEnd(t1);
            }, 0), r;
            if (void 0 !== Fh[t1]) return void Fh[t1].push({
                onLoad: e,
                onProgress: n,
                onError: i
            });
            Fh[t1] = [], Fh[t1].push({
                onLoad: e,
                onProgress: n,
                onError: i
            });
            const s = new Request(t1, {
                headers: new Headers(this.requestHeader),
                credentials: this.withCredentials ? "include" : "same-origin"
            }), a = this.mimeType, o = this.responseType;
            fetch(s).then((e)=>{
                if (200 === e.status || 0 === e.status) {
                    if (0 === e.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), "undefined" == typeof ReadableStream || void 0 === e.body || void 0 === e.body.getReader) return e;
                    const n = Fh[t1], i = e.body.getReader(), r = e.headers.get("Content-Length") || e.headers.get("X-File-Size"), s = r ? parseInt(r) : 0, a = 0 !== s;
                    let o = 0;
                    const l = new ReadableStream({
                        start (t1) {
                            !function e() {
                                i.read().then(({ done: i, value: r })=>{
                                    if (i) t1.close();
                                    else {
                                        o += r.byteLength;
                                        const i = new ProgressEvent("progress", {
                                            lengthComputable: a,
                                            loaded: o,
                                            total: s
                                        });
                                        for(let t1 = 0, e = n.length; t1 < e; t1++){
                                            const e = n[t1];
                                            e.onProgress && e.onProgress(i);
                                        }
                                        t1.enqueue(r), e();
                                    }
                                });
                            }();
                        }
                    });
                    return new Response(l);
                }
                throw new Bh(`fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`, e);
            }).then((t1)=>{
                switch(o){
                    case "arraybuffer":
                        return t1.arrayBuffer();
                    case "blob":
                        return t1.blob();
                    case "document":
                        return t1.text().then((t1)=>(new DOMParser).parseFromString(t1, a));
                    case "json":
                        return t1.json();
                    default:
                        if (void 0 === a) return t1.text();
                        {
                            const e = /charset="?([^;"\s]*)"?/i.exec(a), n = e && e[1] ? e[1].toLowerCase() : void 0, i = new TextDecoder(n);
                            return t1.arrayBuffer().then((t1)=>i.decode(t1));
                        }
                }
            }).then((e)=>{
                Uh.add(t1, e);
                const n = Fh[t1];
                delete Fh[t1];
                for(let t1 = 0, i = n.length; t1 < i; t1++){
                    const i = n[t1];
                    i.onLoad && i.onLoad(e);
                }
            }).catch((e)=>{
                const n = Fh[t1];
                if (void 0 === n) throw this.manager.itemError(t1), e;
                delete Fh[t1];
                for(let t1 = 0, i = n.length; t1 < i; t1++){
                    const i = n[t1];
                    i.onError && i.onError(e);
                }
                this.manager.itemError(t1);
            }).finally(()=>{
                this.manager.itemEnd(t1);
            }), this.manager.itemStart(t1);
        }
        setResponseType(t1) {
            return this.responseType = t1, this;
        }
        setMimeType(t1) {
            return this.mimeType = t1, this;
        }
    }
    class Gh extends Oh {
        constructor(t1){
            super(t1);
        }
        load(t1, e, n, i) {
            void 0 !== this.path && (t1 = this.path + t1), t1 = this.manager.resolveURL(t1);
            const r = this, s = Uh.get(t1);
            if (void 0 !== s) return r.manager.itemStart(t1), setTimeout(function() {
                e && e(s), r.manager.itemEnd(t1);
            }, 0), s;
            const a = ye("img");
            function o() {
                c(), Uh.add(t1, this), e && e(this), r.manager.itemEnd(t1);
            }
            function l(e) {
                c(), i && i(e), r.manager.itemError(t1), r.manager.itemEnd(t1);
            }
            function c() {
                a.removeEventListener("load", o, !1), a.removeEventListener("error", l, !1);
            }
            return a.addEventListener("load", o, !1), a.addEventListener("error", l, !1), "data:" !== t1.slice(0, 5) && void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(t1), a.src = t1, a;
        }
    }
    class Hh extends jn {
        constructor(t1, e = 1){
            super(), this.isLight = !0, this.type = "Light", this.color = new ci(t1), this.intensity = e;
        }
        dispose() {}
        copy(t1, e) {
            return super.copy(t1, e), this.color.copy(t1.color), this.intensity = t1.intensity, this;
        }
        toJSON(t1) {
            const e = super.toJSON(t1);
            return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e;
        }
    }
    class Vh extends Hh {
        constructor(t1, e, n){
            super(t1, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(jn.DEFAULT_UP), this.updateMatrix(), this.groundColor = new ci(e);
        }
        copy(t1, e) {
            return super.copy(t1, e), this.groundColor.copy(t1.groundColor), this;
        }
    }
    const kh = new Mn, Wh = new We, Xh = new We;
    class jh {
        constructor(t1){
            this.camera = t1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new me(512, 512), this.map = null, this.mapPass = null, this.matrix = new Mn, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new gr, this._frameExtents = new me(1, 1), this._viewportCount = 1, this._viewports = [
                new Be(0, 0, 1, 1)
            ];
        }
        getViewportCount() {
            return this._viewportCount;
        }
        getFrustum() {
            return this._frustum;
        }
        updateMatrices(t1) {
            const e = this.camera, n = this.matrix;
            Wh.setFromMatrixPosition(t1.matrixWorld), e.position.copy(Wh), Xh.setFromMatrixPosition(t1.target.matrixWorld), e.lookAt(Xh), e.updateMatrixWorld(), kh.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(kh), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(kh);
        }
        getViewport(t1) {
            return this._viewports[t1];
        }
        getFrameExtents() {
            return this._frameExtents;
        }
        dispose() {
            this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
        }
        copy(t1) {
            return this.camera = t1.camera.clone(), this.bias = t1.bias, this.radius = t1.radius, this.mapSize.copy(t1.mapSize), this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        toJSON() {
            const t1 = {};
            return 0 !== this.bias && (t1.bias = this.bias), 0 !== this.normalBias && (t1.normalBias = this.normalBias), 1 !== this.radius && (t1.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t1.mapSize = this.mapSize.toArray()), t1.camera = this.camera.toJSON(!1).object, delete t1.camera.matrix, t1;
        }
    }
    class qh extends jh {
        constructor(){
            super(new sr(50, 1, .5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
        }
        updateMatrices(t1) {
            const e = this.camera, n = 2 * re * t1.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = t1.distance || e.far;
            n === e.fov && i === e.aspect && r === e.far || (e.fov = n, e.aspect = i, e.far = r, e.updateProjectionMatrix()), super.updateMatrices(t1);
        }
        copy(t1) {
            return super.copy(t1), this.focus = t1.focus, this;
        }
    }
    class Yh extends Hh {
        constructor(t1, e, n = 0, i = Math.PI / 3, r = 0, s = 2){
            super(t1, e), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(jn.DEFAULT_UP), this.updateMatrix(), this.target = new jn, this.distance = n, this.angle = i, this.penumbra = r, this.decay = s, this.map = null, this.shadow = new qh;
        }
        get power() {
            return this.intensity * Math.PI;
        }
        set power(t1) {
            this.intensity = t1 / Math.PI;
        }
        dispose() {
            this.shadow.dispose();
        }
        copy(t1, e) {
            return super.copy(t1, e), this.distance = t1.distance, this.angle = t1.angle, this.penumbra = t1.penumbra, this.decay = t1.decay, this.target = t1.target.clone(), this.shadow = t1.shadow.clone(), this;
        }
    }
    const Zh = new Mn, Jh = new We, Kh = new We;
    class $h extends jh {
        constructor(){
            super(new sr(90, 1, .5, 500)), this.isPointLightShadow = !0, this._frameExtents = new me(4, 2), this._viewportCount = 6, this._viewports = [
                new Be(2, 1, 1, 1),
                new Be(0, 1, 1, 1),
                new Be(3, 1, 1, 1),
                new Be(1, 1, 1, 1),
                new Be(3, 0, 1, 1),
                new Be(1, 0, 1, 1)
            ], this._cubeDirections = [
                new We(1, 0, 0),
                new We(-1, 0, 0),
                new We(0, 0, 1),
                new We(0, 0, -1),
                new We(0, 1, 0),
                new We(0, -1, 0)
            ], this._cubeUps = [
                new We(0, 1, 0),
                new We(0, 1, 0),
                new We(0, 1, 0),
                new We(0, 1, 0),
                new We(0, 0, 1),
                new We(0, 0, -1)
            ];
        }
        updateMatrices(t1, e = 0) {
            const n = this.camera, i = this.matrix, r = t1.distance || n.far;
            r !== n.far && (n.far = r, n.updateProjectionMatrix()), Jh.setFromMatrixPosition(t1.matrixWorld), n.position.copy(Jh), Kh.copy(n.position), Kh.add(this._cubeDirections[e]), n.up.copy(this._cubeUps[e]), n.lookAt(Kh), n.updateMatrixWorld(), i.makeTranslation(-Jh.x, -Jh.y, -Jh.z), Zh.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Zh);
        }
    }
    class Qh extends Hh {
        constructor(t1, e, n = 0, i = 2){
            super(t1, e), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new $h;
        }
        get power() {
            return 4 * this.intensity * Math.PI;
        }
        set power(t1) {
            this.intensity = t1 / (4 * Math.PI);
        }
        dispose() {
            this.shadow.dispose();
        }
        copy(t1, e) {
            return super.copy(t1, e), this.distance = t1.distance, this.decay = t1.decay, this.shadow = t1.shadow.clone(), this;
        }
    }
    class tu extends jh {
        constructor(){
            super(new Lr(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0;
        }
    }
    class eu extends Hh {
        constructor(t1, e){
            super(t1, e), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(jn.DEFAULT_UP), this.updateMatrix(), this.target = new jn, this.shadow = new tu;
        }
        dispose() {
            this.shadow.dispose();
        }
        copy(t1) {
            return super.copy(t1), this.target = t1.target.clone(), this.shadow = t1.shadow.clone(), this;
        }
    }
    class nu extends Hh {
        constructor(t1, e){
            super(t1, e), this.isAmbientLight = !0, this.type = "AmbientLight";
        }
    }
    class iu extends Hh {
        constructor(t1, e, n = 10, i = 10){
            super(t1, e), this.isRectAreaLight = !0, this.type = "RectAreaLight", this.width = n, this.height = i;
        }
        get power() {
            return this.intensity * this.width * this.height * Math.PI;
        }
        set power(t1) {
            this.intensity = t1 / (this.width * this.height * Math.PI);
        }
        copy(t1) {
            return super.copy(t1), this.width = t1.width, this.height = t1.height, this;
        }
        toJSON(t1) {
            const e = super.toJSON(t1);
            return e.object.width = this.width, e.object.height = this.height, e;
        }
    }
    class ru {
        constructor(){
            this.isSphericalHarmonics3 = !0, this.coefficients = [];
            for(let t1 = 0; t1 < 9; t1++)this.coefficients.push(new We);
        }
        set(t1) {
            for(let e = 0; e < 9; e++)this.coefficients[e].copy(t1[e]);
            return this;
        }
        zero() {
            for(let t1 = 0; t1 < 9; t1++)this.coefficients[t1].set(0, 0, 0);
            return this;
        }
        getAt(t1, e) {
            const n = t1.x, i = t1.y, r = t1.z, s = this.coefficients;
            return e.copy(s[0]).multiplyScalar(.282095), e.addScaledVector(s[1], .488603 * i), e.addScaledVector(s[2], .488603 * r), e.addScaledVector(s[3], .488603 * n), e.addScaledVector(s[4], n * i * 1.092548), e.addScaledVector(s[5], i * r * 1.092548), e.addScaledVector(s[6], .315392 * (3 * r * r - 1)), e.addScaledVector(s[7], n * r * 1.092548), e.addScaledVector(s[8], .546274 * (n * n - i * i)), e;
        }
        getIrradianceAt(t1, e) {
            const n = t1.x, i = t1.y, r = t1.z, s = this.coefficients;
            return e.copy(s[0]).multiplyScalar(.886227), e.addScaledVector(s[1], 1.023328 * i), e.addScaledVector(s[2], 1.023328 * r), e.addScaledVector(s[3], 1.023328 * n), e.addScaledVector(s[4], .858086 * n * i), e.addScaledVector(s[5], .858086 * i * r), e.addScaledVector(s[6], .743125 * r * r - .247708), e.addScaledVector(s[7], .858086 * n * r), e.addScaledVector(s[8], .429043 * (n * n - i * i)), e;
        }
        add(t1) {
            for(let e = 0; e < 9; e++)this.coefficients[e].add(t1.coefficients[e]);
            return this;
        }
        addScaledSH(t1, e) {
            for(let n = 0; n < 9; n++)this.coefficients[n].addScaledVector(t1.coefficients[n], e);
            return this;
        }
        scale(t1) {
            for(let e = 0; e < 9; e++)this.coefficients[e].multiplyScalar(t1);
            return this;
        }
        lerp(t1, e) {
            for(let n = 0; n < 9; n++)this.coefficients[n].lerp(t1.coefficients[n], e);
            return this;
        }
        equals(t1) {
            for(let e = 0; e < 9; e++)if (!this.coefficients[e].equals(t1.coefficients[e])) return !1;
            return !0;
        }
        copy(t1) {
            return this.set(t1.coefficients);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        fromArray(t1, e = 0) {
            const n = this.coefficients;
            for(let i = 0; i < 9; i++)n[i].fromArray(t1, e + 3 * i);
            return this;
        }
        toArray(t1 = [], e = 0) {
            const n = this.coefficients;
            for(let i = 0; i < 9; i++)n[i].toArray(t1, e + 3 * i);
            return t1;
        }
        static getBasisAt(t1, e) {
            const n = t1.x, i = t1.y, r = t1.z;
            e[0] = .282095, e[1] = .488603 * i, e[2] = .488603 * r, e[3] = .488603 * n, e[4] = 1.092548 * n * i, e[5] = 1.092548 * i * r, e[6] = .315392 * (3 * r * r - 1), e[7] = 1.092548 * n * r, e[8] = .546274 * (n * n - i * i);
        }
    }
    class su extends Hh {
        constructor(t1 = new ru, e = 1){
            super(void 0, e), this.isLightProbe = !0, this.sh = t1;
        }
        copy(t1) {
            return super.copy(t1), this.sh.copy(t1.sh), this;
        }
        fromJSON(t1) {
            return this.intensity = t1.intensity, this.sh.fromArray(t1.sh), this;
        }
        toJSON(t1) {
            const e = super.toJSON(t1);
            return e.object.sh = this.sh.toArray(), e;
        }
    }
    class au extends Oh {
        constructor(t1){
            super(t1), this.textures = {};
        }
        load(t1, e, n, i) {
            const r = this, s = new zh(r.manager);
            s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t1, function(n) {
                try {
                    e(r.parse(JSON.parse(n)));
                } catch (e) {
                    i ? i(e) : console.error(e), r.manager.itemError(t1);
                }
            }, n, i);
        }
        parse(t1) {
            const e = this.textures;
            function n(t1) {
                return void 0 === e[t1] && console.warn("THREE.MaterialLoader: Undefined texture", t1), e[t1];
            }
            const i = au.createMaterialFromType(t1.type);
            if (void 0 !== t1.uuid && (i.uuid = t1.uuid), void 0 !== t1.name && (i.name = t1.name), void 0 !== t1.color && void 0 !== i.color && i.color.setHex(t1.color), void 0 !== t1.roughness && (i.roughness = t1.roughness), void 0 !== t1.metalness && (i.metalness = t1.metalness), void 0 !== t1.sheen && (i.sheen = t1.sheen), void 0 !== t1.sheenColor && (i.sheenColor = (new ci).setHex(t1.sheenColor)), void 0 !== t1.sheenRoughness && (i.sheenRoughness = t1.sheenRoughness), void 0 !== t1.emissive && void 0 !== i.emissive && i.emissive.setHex(t1.emissive), void 0 !== t1.specular && void 0 !== i.specular && i.specular.setHex(t1.specular), void 0 !== t1.specularIntensity && (i.specularIntensity = t1.specularIntensity), void 0 !== t1.specularColor && void 0 !== i.specularColor && i.specularColor.setHex(t1.specularColor), void 0 !== t1.shininess && (i.shininess = t1.shininess), void 0 !== t1.clearcoat && (i.clearcoat = t1.clearcoat), void 0 !== t1.clearcoatRoughness && (i.clearcoatRoughness = t1.clearcoatRoughness), void 0 !== t1.iridescence && (i.iridescence = t1.iridescence), void 0 !== t1.iridescenceIOR && (i.iridescenceIOR = t1.iridescenceIOR), void 0 !== t1.iridescenceThicknessRange && (i.iridescenceThicknessRange = t1.iridescenceThicknessRange), void 0 !== t1.transmission && (i.transmission = t1.transmission), void 0 !== t1.thickness && (i.thickness = t1.thickness), void 0 !== t1.attenuationDistance && (i.attenuationDistance = t1.attenuationDistance), void 0 !== t1.attenuationColor && void 0 !== i.attenuationColor && i.attenuationColor.setHex(t1.attenuationColor), void 0 !== t1.anisotropy && (i.anisotropy = t1.anisotropy), void 0 !== t1.anisotropyRotation && (i.anisotropyRotation = t1.anisotropyRotation), void 0 !== t1.fog && (i.fog = t1.fog), void 0 !== t1.flatShading && (i.flatShading = t1.flatShading), void 0 !== t1.blending && (i.blending = t1.blending), void 0 !== t1.combine && (i.combine = t1.combine), void 0 !== t1.side && (i.side = t1.side), void 0 !== t1.shadowSide && (i.shadowSide = t1.shadowSide), void 0 !== t1.opacity && (i.opacity = t1.opacity), void 0 !== t1.transparent && (i.transparent = t1.transparent), void 0 !== t1.alphaTest && (i.alphaTest = t1.alphaTest), void 0 !== t1.alphaHash && (i.alphaHash = t1.alphaHash), void 0 !== t1.depthFunc && (i.depthFunc = t1.depthFunc), void 0 !== t1.depthTest && (i.depthTest = t1.depthTest), void 0 !== t1.depthWrite && (i.depthWrite = t1.depthWrite), void 0 !== t1.colorWrite && (i.colorWrite = t1.colorWrite), void 0 !== t1.blendSrc && (i.blendSrc = t1.blendSrc), void 0 !== t1.blendDst && (i.blendDst = t1.blendDst), void 0 !== t1.blendEquation && (i.blendEquation = t1.blendEquation), void 0 !== t1.blendSrcAlpha && (i.blendSrcAlpha = t1.blendSrcAlpha), void 0 !== t1.blendDstAlpha && (i.blendDstAlpha = t1.blendDstAlpha), void 0 !== t1.blendEquationAlpha && (i.blendEquationAlpha = t1.blendEquationAlpha), void 0 !== t1.blendColor && void 0 !== i.blendColor && i.blendColor.setHex(t1.blendColor), void 0 !== t1.blendAlpha && (i.blendAlpha = t1.blendAlpha), void 0 !== t1.stencilWriteMask && (i.stencilWriteMask = t1.stencilWriteMask), void 0 !== t1.stencilFunc && (i.stencilFunc = t1.stencilFunc), void 0 !== t1.stencilRef && (i.stencilRef = t1.stencilRef), void 0 !== t1.stencilFuncMask && (i.stencilFuncMask = t1.stencilFuncMask), void 0 !== t1.stencilFail && (i.stencilFail = t1.stencilFail), void 0 !== t1.stencilZFail && (i.stencilZFail = t1.stencilZFail), void 0 !== t1.stencilZPass && (i.stencilZPass = t1.stencilZPass), void 0 !== t1.stencilWrite && (i.stencilWrite = t1.stencilWrite), void 0 !== t1.wireframe && (i.wireframe = t1.wireframe), void 0 !== t1.wireframeLinewidth && (i.wireframeLinewidth = t1.wireframeLinewidth), void 0 !== t1.wireframeLinecap && (i.wireframeLinecap = t1.wireframeLinecap), void 0 !== t1.wireframeLinejoin && (i.wireframeLinejoin = t1.wireframeLinejoin), void 0 !== t1.rotation && (i.rotation = t1.rotation), void 0 !== t1.linewidth && (i.linewidth = t1.linewidth), void 0 !== t1.dashSize && (i.dashSize = t1.dashSize), void 0 !== t1.gapSize && (i.gapSize = t1.gapSize), void 0 !== t1.scale && (i.scale = t1.scale), void 0 !== t1.polygonOffset && (i.polygonOffset = t1.polygonOffset), void 0 !== t1.polygonOffsetFactor && (i.polygonOffsetFactor = t1.polygonOffsetFactor), void 0 !== t1.polygonOffsetUnits && (i.polygonOffsetUnits = t1.polygonOffsetUnits), void 0 !== t1.dithering && (i.dithering = t1.dithering), void 0 !== t1.alphaToCoverage && (i.alphaToCoverage = t1.alphaToCoverage), void 0 !== t1.premultipliedAlpha && (i.premultipliedAlpha = t1.premultipliedAlpha), void 0 !== t1.forceSinglePass && (i.forceSinglePass = t1.forceSinglePass), void 0 !== t1.visible && (i.visible = t1.visible), void 0 !== t1.toneMapped && (i.toneMapped = t1.toneMapped), void 0 !== t1.userData && (i.userData = t1.userData), void 0 !== t1.vertexColors && ("number" == typeof t1.vertexColors ? i.vertexColors = t1.vertexColors > 0 : i.vertexColors = t1.vertexColors), void 0 !== t1.uniforms) for(const e in t1.uniforms){
                const r = t1.uniforms[e];
                switch(i.uniforms[e] = {}, r.type){
                    case "t":
                        i.uniforms[e].value = n(r.value);
                        break;
                    case "c":
                        i.uniforms[e].value = (new ci).setHex(r.value);
                        break;
                    case "v2":
                        i.uniforms[e].value = (new me).fromArray(r.value);
                        break;
                    case "v3":
                        i.uniforms[e].value = (new We).fromArray(r.value);
                        break;
                    case "v4":
                        i.uniforms[e].value = (new Be).fromArray(r.value);
                        break;
                    case "m3":
                        i.uniforms[e].value = (new fe).fromArray(r.value);
                        break;
                    case "m4":
                        i.uniforms[e].value = (new Mn).fromArray(r.value);
                        break;
                    default:
                        i.uniforms[e].value = r.value;
                }
            }
            if (void 0 !== t1.defines && (i.defines = t1.defines), void 0 !== t1.vertexShader && (i.vertexShader = t1.vertexShader), void 0 !== t1.fragmentShader && (i.fragmentShader = t1.fragmentShader), void 0 !== t1.glslVersion && (i.glslVersion = t1.glslVersion), void 0 !== t1.extensions) for(const e in t1.extensions)i.extensions[e] = t1.extensions[e];
            if (void 0 !== t1.lights && (i.lights = t1.lights), void 0 !== t1.clipping && (i.clipping = t1.clipping), void 0 !== t1.size && (i.size = t1.size), void 0 !== t1.sizeAttenuation && (i.sizeAttenuation = t1.sizeAttenuation), void 0 !== t1.map && (i.map = n(t1.map)), void 0 !== t1.matcap && (i.matcap = n(t1.matcap)), void 0 !== t1.alphaMap && (i.alphaMap = n(t1.alphaMap)), void 0 !== t1.bumpMap && (i.bumpMap = n(t1.bumpMap)), void 0 !== t1.bumpScale && (i.bumpScale = t1.bumpScale), void 0 !== t1.normalMap && (i.normalMap = n(t1.normalMap)), void 0 !== t1.normalMapType && (i.normalMapType = t1.normalMapType), void 0 !== t1.normalScale) {
                let e = t1.normalScale;
                !1 === Array.isArray(e) && (e = [
                    e,
                    e
                ]), i.normalScale = (new me).fromArray(e);
            }
            return void 0 !== t1.displacementMap && (i.displacementMap = n(t1.displacementMap)), void 0 !== t1.displacementScale && (i.displacementScale = t1.displacementScale), void 0 !== t1.displacementBias && (i.displacementBias = t1.displacementBias), void 0 !== t1.roughnessMap && (i.roughnessMap = n(t1.roughnessMap)), void 0 !== t1.metalnessMap && (i.metalnessMap = n(t1.metalnessMap)), void 0 !== t1.emissiveMap && (i.emissiveMap = n(t1.emissiveMap)), void 0 !== t1.emissiveIntensity && (i.emissiveIntensity = t1.emissiveIntensity), void 0 !== t1.specularMap && (i.specularMap = n(t1.specularMap)), void 0 !== t1.specularIntensityMap && (i.specularIntensityMap = n(t1.specularIntensityMap)), void 0 !== t1.specularColorMap && (i.specularColorMap = n(t1.specularColorMap)), void 0 !== t1.envMap && (i.envMap = n(t1.envMap)), void 0 !== t1.envMapIntensity && (i.envMapIntensity = t1.envMapIntensity), void 0 !== t1.reflectivity && (i.reflectivity = t1.reflectivity), void 0 !== t1.refractionRatio && (i.refractionRatio = t1.refractionRatio), void 0 !== t1.lightMap && (i.lightMap = n(t1.lightMap)), void 0 !== t1.lightMapIntensity && (i.lightMapIntensity = t1.lightMapIntensity), void 0 !== t1.aoMap && (i.aoMap = n(t1.aoMap)), void 0 !== t1.aoMapIntensity && (i.aoMapIntensity = t1.aoMapIntensity), void 0 !== t1.gradientMap && (i.gradientMap = n(t1.gradientMap)), void 0 !== t1.clearcoatMap && (i.clearcoatMap = n(t1.clearcoatMap)), void 0 !== t1.clearcoatRoughnessMap && (i.clearcoatRoughnessMap = n(t1.clearcoatRoughnessMap)), void 0 !== t1.clearcoatNormalMap && (i.clearcoatNormalMap = n(t1.clearcoatNormalMap)), void 0 !== t1.clearcoatNormalScale && (i.clearcoatNormalScale = (new me).fromArray(t1.clearcoatNormalScale)), void 0 !== t1.iridescenceMap && (i.iridescenceMap = n(t1.iridescenceMap)), void 0 !== t1.iridescenceThicknessMap && (i.iridescenceThicknessMap = n(t1.iridescenceThicknessMap)), void 0 !== t1.transmissionMap && (i.transmissionMap = n(t1.transmissionMap)), void 0 !== t1.thicknessMap && (i.thicknessMap = n(t1.thicknessMap)), void 0 !== t1.anisotropyMap && (i.anisotropyMap = n(t1.anisotropyMap)), void 0 !== t1.sheenColorMap && (i.sheenColorMap = n(t1.sheenColorMap)), void 0 !== t1.sheenRoughnessMap && (i.sheenRoughnessMap = n(t1.sheenRoughnessMap)), i;
        }
        setTextures(t1) {
            return this.textures = t1, this;
        }
        static createMaterialFromType(t1) {
            return new ({
                ShadowMaterial: ih,
                SpriteMaterial: lo,
                RawShaderMaterial: rh,
                ShaderMaterial: ir,
                PointsMaterial: wl,
                MeshPhysicalMaterial: ah,
                MeshStandardMaterial: sh,
                MeshPhongMaterial: oh,
                MeshToonMaterial: lh,
                MeshNormalMaterial: ch,
                MeshLambertMaterial: hh,
                MeshDepthMaterial: Ha,
                MeshDistanceMaterial: Va,
                MeshBasicMaterial: pi,
                MeshMatcapMaterial: uh,
                LineDashedMaterial: dh,
                LineBasicMaterial: fl,
                Material: di
            })[t1];
        }
    }
    class ou {
        static decodeText(t1) {
            if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(t1);
            let e = "";
            for(let n = 0, i = t1.length; n < i; n++)e += String.fromCharCode(t1[n]);
            try {
                return decodeURIComponent(escape(e));
            } catch (t1) {
                return e;
            }
        }
        static extractUrlBase(t1) {
            const e = t1.lastIndexOf("/");
            return -1 === e ? "./" : t1.slice(0, e + 1);
        }
        static resolveURL(t1, e) {
            return "string" != typeof t1 || "" === t1 ? "" : (/^https?:\/\//i.test(e) && /^\//.test(t1) && (e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(t1) || /^data:.*,.*$/i.test(t1) || /^blob:.*$/i.test(t1) ? t1 : e + t1);
        }
    }
    class lu extends Ii {
        constructor(){
            super(), this.isInstancedBufferGeometry = !0, this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
        }
        copy(t1) {
            return super.copy(t1), this.instanceCount = t1.instanceCount, this;
        }
        toJSON() {
            const t1 = super.toJSON();
            return t1.instanceCount = this.instanceCount, t1.isInstancedBufferGeometry = !0, t1;
        }
    }
    class cu extends Oh {
        constructor(t1){
            super(t1);
        }
        load(t1, e, n, i) {
            const r = this, s = new zh(r.manager);
            s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t1, function(n) {
                try {
                    e(r.parse(JSON.parse(n)));
                } catch (e) {
                    i ? i(e) : console.error(e), r.manager.itemError(t1);
                }
            }, n, i);
        }
        parse(t1) {
            const e = {}, n = {};
            function i(t1, i) {
                if (void 0 !== e[i]) return e[i];
                const r = t1.interleavedBuffers[i], s = function(t1, e) {
                    if (void 0 !== n[e]) return n[e];
                    const i = t1.arrayBuffers, r = i[e], s = new Uint32Array(r).buffer;
                    return n[e] = s, s;
                }(t1, r.buffer), a = xe(r.type, s), o = new so(a, r.stride);
                return o.uuid = r.uuid, e[i] = o, o;
            }
            const r = t1.isInstancedBufferGeometry ? new lu : new Ii, s = t1.data.index;
            if (void 0 !== s) {
                const t1 = xe(s.type, s.array);
                r.setIndex(new Mi(t1, 1));
            }
            const a = t1.data.attributes;
            for(const e in a){
                const n = a[e];
                let s;
                if (n.isInterleavedBufferAttribute) {
                    const e = i(t1.data, n.data);
                    s = new oo(e, n.itemSize, n.offset, n.normalized);
                } else {
                    const t1 = xe(n.type, n.array);
                    s = new (n.isInstancedBufferAttribute ? ko : Mi)(t1, n.itemSize, n.normalized);
                }
                void 0 !== n.name && (s.name = n.name), void 0 !== n.usage && s.setUsage(n.usage), r.setAttribute(e, s);
            }
            const o = t1.data.morphAttributes;
            if (o) for(const e in o){
                const n = o[e], s = [];
                for(let e = 0, r = n.length; e < r; e++){
                    const r = n[e];
                    let a;
                    if (r.isInterleavedBufferAttribute) {
                        const e = i(t1.data, r.data);
                        a = new oo(e, r.itemSize, r.offset, r.normalized);
                    } else {
                        const t1 = xe(r.type, r.array);
                        a = new Mi(t1, r.itemSize, r.normalized);
                    }
                    void 0 !== r.name && (a.name = r.name), s.push(a);
                }
                r.morphAttributes[e] = s;
            }
            t1.data.morphTargetsRelative && (r.morphTargetsRelative = !0);
            const l = t1.data.groups || t1.data.drawcalls || t1.data.offsets;
            if (void 0 !== l) for(let t1 = 0, e = l.length; t1 !== e; ++t1){
                const e = l[t1];
                r.addGroup(e.start, e.count, e.materialIndex);
            }
            const c = t1.data.boundingSphere;
            if (void 0 !== c) {
                const t1 = new We;
                void 0 !== c.center && t1.fromArray(c.center), r.boundingSphere = new dn(t1, c.radius);
            }
            return t1.name && (r.name = t1.name), t1.userData && (r.userData = t1.userData), r;
        }
    }
    const hu = {
        UVMapping: S,
        CubeReflectionMapping: b,
        CubeRefractionMapping: T,
        EquirectangularReflectionMapping: E,
        EquirectangularRefractionMapping: w,
        CubeUVReflectionMapping: A
    }, uu = {
        RepeatWrapping: R,
        ClampToEdgeWrapping: C,
        MirroredRepeatWrapping: L
    }, du = {
        NearestFilter: P,
        NearestMipmapNearestFilter: I,
        NearestMipmapLinearFilter: U,
        LinearFilter: D,
        LinearMipmapNearestFilter: N,
        LinearMipmapLinearFilter: O
    };
    let pu;
    class mu {
        static getContext() {
            return void 0 === pu && (pu = new (window.AudioContext || window.webkitAudioContext)), pu;
        }
        static setContext(t1) {
            pu = t1;
        }
    }
    const fu = new Mn, gu = new Mn, _u = new Mn;
    class vu {
        constructor(t1 = !0){
            this.autoStart = t1, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
        }
        start() {
            this.startTime = xu(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
        }
        stop() {
            this.getElapsedTime(), this.running = !1, this.autoStart = !1;
        }
        getElapsedTime() {
            return this.getDelta(), this.elapsedTime;
        }
        getDelta() {
            let t1 = 0;
            if (this.autoStart && !this.running) return this.start(), 0;
            if (this.running) {
                const e = xu();
                t1 = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t1;
            }
            return t1;
        }
    }
    function xu() {
        return ("undefined" == typeof performance ? Date : performance).now();
    }
    const yu = new We, Mu = new ke, Su = new We, bu = new We;
    class Tu extends jn {
        constructor(t1){
            super(), this.type = "Audio", this.listener = t1, this.context = t1.context, this.gain = this.context.createGain(), this.gain.connect(t1.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = [];
        }
        getOutput() {
            return this.gain;
        }
        setNodeSource(t1) {
            return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t1, this.connect(), this;
        }
        setMediaElementSource(t1) {
            return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t1), this.connect(), this;
        }
        setMediaStreamSource(t1) {
            return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(t1), this.connect(), this;
        }
        setBuffer(t1) {
            return this.buffer = t1, this.sourceType = "buffer", this.autoplay && this.play(), this;
        }
        play(t1 = 0) {
            if (!0 === this.isPlaying) return void console.warn("THREE.Audio: Audio is already playing.");
            if (!1 === this.hasPlaybackControl) return void console.warn("THREE.Audio: this Audio has no playback control.");
            this._startedAt = this.context.currentTime + t1;
            const e = this.context.createBufferSource();
            return e.buffer = this.buffer, e.loop = this.loop, e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.onended = this.onEnded.bind(this), e.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = e, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
        }
        pause() {
            if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, !0 === this.loop && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
            console.warn("THREE.Audio: this Audio has no playback control.");
        }
        stop() {
            if (!1 !== this.hasPlaybackControl) return this._progress = 0, null !== this.source && (this.source.stop(), this.source.onended = null), this.isPlaying = !1, this;
            console.warn("THREE.Audio: this Audio has no playback control.");
        }
        connect() {
            if (this.filters.length > 0) {
                this.source.connect(this.filters[0]);
                for(let t1 = 1, e = this.filters.length; t1 < e; t1++)this.filters[t1 - 1].connect(this.filters[t1]);
                this.filters[this.filters.length - 1].connect(this.getOutput());
            } else this.source.connect(this.getOutput());
            return this._connected = !0, this;
        }
        disconnect() {
            if (!1 !== this._connected) {
                if (this.filters.length > 0) {
                    this.source.disconnect(this.filters[0]);
                    for(let t1 = 1, e = this.filters.length; t1 < e; t1++)this.filters[t1 - 1].disconnect(this.filters[t1]);
                    this.filters[this.filters.length - 1].disconnect(this.getOutput());
                } else this.source.disconnect(this.getOutput());
                return this._connected = !1, this;
            }
        }
        getFilters() {
            return this.filters;
        }
        setFilters(t1) {
            return t1 || (t1 = []), !0 === this._connected ? (this.disconnect(), this.filters = t1.slice(), this.connect()) : this.filters = t1.slice(), this;
        }
        setDetune(t1) {
            if (this.detune = t1, void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this;
        }
        getDetune() {
            return this.detune;
        }
        getFilter() {
            return this.getFilters()[0];
        }
        setFilter(t1) {
            return this.setFilters(t1 ? [
                t1
            ] : []);
        }
        setPlaybackRate(t1) {
            if (!1 !== this.hasPlaybackControl) return this.playbackRate = t1, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
            console.warn("THREE.Audio: this Audio has no playback control.");
        }
        getPlaybackRate() {
            return this.playbackRate;
        }
        onEnded() {
            this.isPlaying = !1;
        }
        getLoop() {
            return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop;
        }
        setLoop(t1) {
            if (!1 !== this.hasPlaybackControl) return this.loop = t1, !0 === this.isPlaying && (this.source.loop = this.loop), this;
            console.warn("THREE.Audio: this Audio has no playback control.");
        }
        setLoopStart(t1) {
            return this.loopStart = t1, this;
        }
        setLoopEnd(t1) {
            return this.loopEnd = t1, this;
        }
        getVolume() {
            return this.gain.gain.value;
        }
        setVolume(t1) {
            return this.gain.gain.setTargetAtTime(t1, this.context.currentTime, .01), this;
        }
    }
    const Eu = new We, wu = new ke, Au = new We, Ru = new We;
    class Cu {
        constructor(t1, e, n){
            let i, r, s;
            switch(this.binding = t1, this.valueSize = n, e){
                case "quaternion":
                    i = this._slerp, r = this._slerpAdditive, s = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(6 * n), this._workIndex = 5;
                    break;
                case "string":
                case "bool":
                    i = this._select, r = this._select, s = this._setAdditiveIdentityOther, this.buffer = new Array(5 * n);
                    break;
                default:
                    i = this._lerp, r = this._lerpAdditive, s = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(5 * n);
            }
            this._mixBufferRegion = i, this._mixBufferRegionAdditive = r, this._setIdentity = s, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
        }
        accumulate(t1, e) {
            const n = this.buffer, i = this.valueSize, r = t1 * i + i;
            let s = this.cumulativeWeight;
            if (0 === s) {
                for(let t1 = 0; t1 !== i; ++t1)n[r + t1] = n[t1];
                s = e;
            } else {
                s += e;
                const t1 = e / s;
                this._mixBufferRegion(n, r, 0, t1, i);
            }
            this.cumulativeWeight = s;
        }
        accumulateAdditive(t1) {
            const e = this.buffer, n = this.valueSize, i = n * this._addIndex;
            0 === this.cumulativeWeightAdditive && this._setIdentity(), this._mixBufferRegionAdditive(e, i, 0, t1, n), this.cumulativeWeightAdditive += t1;
        }
        apply(t1) {
            const e = this.valueSize, n = this.buffer, i = t1 * e + e, r = this.cumulativeWeight, s = this.cumulativeWeightAdditive, a = this.binding;
            if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
                const t1 = e * this._origIndex;
                this._mixBufferRegion(n, i, t1, 1 - r, e);
            }
            s > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * e, 1, e);
            for(let t1 = e, r = e + e; t1 !== r; ++t1)if (n[t1] !== n[t1 + e]) {
                a.setValue(n, i);
                break;
            }
        }
        saveOriginalState() {
            const t1 = this.binding, e = this.buffer, n = this.valueSize, i = n * this._origIndex;
            t1.getValue(e, i);
            for(let t1 = n, r = i; t1 !== r; ++t1)e[t1] = e[i + t1 % n];
            this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
        }
        restoreOriginalState() {
            const t1 = 3 * this.valueSize;
            this.binding.setValue(this.buffer, t1);
        }
        _setAdditiveIdentityNumeric() {
            const t1 = this._addIndex * this.valueSize, e = t1 + this.valueSize;
            for(let n = t1; n < e; n++)this.buffer[n] = 0;
        }
        _setAdditiveIdentityQuaternion() {
            this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
        }
        _setAdditiveIdentityOther() {
            const t1 = this._origIndex * this.valueSize, e = this._addIndex * this.valueSize;
            for(let n = 0; n < this.valueSize; n++)this.buffer[e + n] = this.buffer[t1 + n];
        }
        _select(t1, e, n, i, r) {
            if (i >= .5) for(let i = 0; i !== r; ++i)t1[e + i] = t1[n + i];
        }
        _slerp(t1, e, n, i) {
            ke.slerpFlat(t1, e, t1, e, t1, n, i);
        }
        _slerpAdditive(t1, e, n, i, r) {
            const s = this._workIndex * r;
            ke.multiplyQuaternionsFlat(t1, s, t1, e, t1, n), ke.slerpFlat(t1, e, t1, e, t1, s, i);
        }
        _lerp(t1, e, n, i, r) {
            const s = 1 - i;
            for(let a = 0; a !== r; ++a){
                const r = e + a;
                t1[r] = t1[r] * s + t1[n + a] * i;
            }
        }
        _lerpAdditive(t1, e, n, i, r) {
            for(let s = 0; s !== r; ++s){
                const r = e + s;
                t1[r] = t1[r] + t1[n + s] * i;
            }
        }
    }
    const Lu = "\\[\\]\\.:\\/", Pu = new RegExp("[" + Lu + "]", "g"), Iu = "[^" + Lu + "]", Uu = "[^" + Lu.replace("\\.", "") + "]", Du = new RegExp("^" + /((?:WC+[\/:])*)/.source.replace("WC", Iu) + /(WCOD+)?/.source.replace("WCOD", Uu) + /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Iu) + /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Iu) + "$"), Nu = [
        "material",
        "materials",
        "bones",
        "map"
    ];
    class Ou {
        constructor(t1, e, n){
            this.path = e, this.parsedPath = n || Ou.parseTrackName(e), this.node = Ou.findNode(t1, this.parsedPath.nodeName), this.rootNode = t1, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
        }
        static create(t1, e, n) {
            return t1 && t1.isAnimationObjectGroup ? new Ou.Composite(t1, e, n) : new Ou(t1, e, n);
        }
        static sanitizeNodeName(t1) {
            return t1.replace(/\s/g, "_").replace(Pu, "");
        }
        static parseTrackName(t1) {
            const e = Du.exec(t1);
            if (null === e) throw new Error("PropertyBinding: Cannot parse trackName: " + t1);
            const n = {
                nodeName: e[2],
                objectName: e[3],
                objectIndex: e[4],
                propertyName: e[5],
                propertyIndex: e[6]
            }, i = n.nodeName && n.nodeName.lastIndexOf(".");
            if (void 0 !== i && -1 !== i) {
                const t1 = n.nodeName.substring(i + 1);
                -1 !== Nu.indexOf(t1) && (n.nodeName = n.nodeName.substring(0, i), n.objectName = t1);
            }
            if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t1);
            return n;
        }
        static findNode(t1, e) {
            if (void 0 === e || "" === e || "." === e || -1 === e || e === t1.name || e === t1.uuid) return t1;
            if (t1.skeleton) {
                const n = t1.skeleton.getBoneByName(e);
                if (void 0 !== n) return n;
            }
            if (t1.children) {
                const n = function(t1) {
                    for(let i = 0; i < t1.length; i++){
                        const r = t1[i];
                        if (r.name === e || r.uuid === e) return r;
                        const s = n(r.children);
                        if (s) return s;
                    }
                    return null;
                }, i = n(t1.children);
                if (i) return i;
            }
            return null;
        }
        _getValue_unavailable() {}
        _setValue_unavailable() {}
        _getValue_direct(t1, e) {
            t1[e] = this.targetObject[this.propertyName];
        }
        _getValue_array(t1, e) {
            const n = this.resolvedProperty;
            for(let i = 0, r = n.length; i !== r; ++i)t1[e++] = n[i];
        }
        _getValue_arrayElement(t1, e) {
            t1[e] = this.resolvedProperty[this.propertyIndex];
        }
        _getValue_toArray(t1, e) {
            this.resolvedProperty.toArray(t1, e);
        }
        _setValue_direct(t1, e) {
            this.targetObject[this.propertyName] = t1[e];
        }
        _setValue_direct_setNeedsUpdate(t1, e) {
            this.targetObject[this.propertyName] = t1[e], this.targetObject.needsUpdate = !0;
        }
        _setValue_direct_setMatrixWorldNeedsUpdate(t1, e) {
            this.targetObject[this.propertyName] = t1[e], this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _setValue_array(t1, e) {
            const n = this.resolvedProperty;
            for(let i = 0, r = n.length; i !== r; ++i)n[i] = t1[e++];
        }
        _setValue_array_setNeedsUpdate(t1, e) {
            const n = this.resolvedProperty;
            for(let i = 0, r = n.length; i !== r; ++i)n[i] = t1[e++];
            this.targetObject.needsUpdate = !0;
        }
        _setValue_array_setMatrixWorldNeedsUpdate(t1, e) {
            const n = this.resolvedProperty;
            for(let i = 0, r = n.length; i !== r; ++i)n[i] = t1[e++];
            this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _setValue_arrayElement(t1, e) {
            this.resolvedProperty[this.propertyIndex] = t1[e];
        }
        _setValue_arrayElement_setNeedsUpdate(t1, e) {
            this.resolvedProperty[this.propertyIndex] = t1[e], this.targetObject.needsUpdate = !0;
        }
        _setValue_arrayElement_setMatrixWorldNeedsUpdate(t1, e) {
            this.resolvedProperty[this.propertyIndex] = t1[e], this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _setValue_fromArray(t1, e) {
            this.resolvedProperty.fromArray(t1, e);
        }
        _setValue_fromArray_setNeedsUpdate(t1, e) {
            this.resolvedProperty.fromArray(t1, e), this.targetObject.needsUpdate = !0;
        }
        _setValue_fromArray_setMatrixWorldNeedsUpdate(t1, e) {
            this.resolvedProperty.fromArray(t1, e), this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _getValue_unbound(t1, e) {
            this.bind(), this.getValue(t1, e);
        }
        _setValue_unbound(t1, e) {
            this.bind(), this.setValue(t1, e);
        }
        bind() {
            let t1 = this.node;
            const e = this.parsedPath, n = e.objectName, i = e.propertyName;
            let r = e.propertyIndex;
            if (t1 || (t1 = Ou.findNode(this.rootNode, e.nodeName), this.node = t1), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t1) return void console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
            if (n) {
                let i = e.objectIndex;
                switch(n){
                    case "materials":
                        if (!t1.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                        if (!t1.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                        t1 = t1.material.materials;
                        break;
                    case "bones":
                        if (!t1.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                        t1 = t1.skeleton.bones;
                        for(let e = 0; e < t1.length; e++)if (t1[e].name === i) {
                            i = e;
                            break;
                        }
                        break;
                    case "map":
                        if ("map" in t1) {
                            t1 = t1.map;
                            break;
                        }
                        if (!t1.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                        if (!t1.material.map) return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
                        t1 = t1.material.map;
                        break;
                    default:
                        if (void 0 === t1[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                        t1 = t1[n];
                }
                if (void 0 !== i) {
                    if (void 0 === t1[i]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t1);
                    t1 = t1[i];
                }
            }
            const s = t1[i];
            if (void 0 === s) {
                const n = e.nodeName;
                return void console.error("THREE.PropertyBinding: Trying to update property for track: " + n + "." + i + " but it wasn't found.", t1);
            }
            let a = this.Versioning.None;
            this.targetObject = t1, void 0 !== t1.needsUpdate ? a = this.Versioning.NeedsUpdate : void 0 !== t1.matrixWorldNeedsUpdate && (a = this.Versioning.MatrixWorldNeedsUpdate);
            let o = this.BindingType.Direct;
            if (void 0 !== r) {
                if ("morphTargetInfluences" === i) {
                    if (!t1.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                    if (!t1.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                    void 0 !== t1.morphTargetDictionary[r] && (r = t1.morphTargetDictionary[r]);
                }
                o = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r;
            } else void 0 !== s.fromArray && void 0 !== s.toArray ? (o = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (o = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = i;
            this.getValue = this.GetterByBindingType[o], this.setValue = this.SetterByBindingTypeAndVersioning[o][a];
        }
        unbind() {
            this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
        }
    }
    Ou.Composite = class {
        constructor(t1, e, n){
            const i = n || Ou.parseTrackName(e);
            this._targetGroup = t1, this._bindings = t1.subscribe_(e, i);
        }
        getValue(t1, e) {
            this.bind();
            const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
            void 0 !== i && i.getValue(t1, e);
        }
        setValue(t1, e) {
            const n = this._bindings;
            for(let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)n[i].setValue(t1, e);
        }
        bind() {
            const t1 = this._bindings;
            for(let e = this._targetGroup.nCachedObjects_, n = t1.length; e !== n; ++e)t1[e].bind();
        }
        unbind() {
            const t1 = this._bindings;
            for(let e = this._targetGroup.nCachedObjects_, n = t1.length; e !== n; ++e)t1[e].unbind();
        }
    }, Ou.prototype.BindingType = {
        Direct: 0,
        EntireArray: 1,
        ArrayElement: 2,
        HasFromToArray: 3
    }, Ou.prototype.Versioning = {
        None: 0,
        NeedsUpdate: 1,
        MatrixWorldNeedsUpdate: 2
    }, Ou.prototype.GetterByBindingType = [
        Ou.prototype._getValue_direct,
        Ou.prototype._getValue_array,
        Ou.prototype._getValue_arrayElement,
        Ou.prototype._getValue_toArray
    ], Ou.prototype.SetterByBindingTypeAndVersioning = [
        [
            Ou.prototype._setValue_direct,
            Ou.prototype._setValue_direct_setNeedsUpdate,
            Ou.prototype._setValue_direct_setMatrixWorldNeedsUpdate
        ],
        [
            Ou.prototype._setValue_array,
            Ou.prototype._setValue_array_setNeedsUpdate,
            Ou.prototype._setValue_array_setMatrixWorldNeedsUpdate
        ],
        [
            Ou.prototype._setValue_arrayElement,
            Ou.prototype._setValue_arrayElement_setNeedsUpdate,
            Ou.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
        ],
        [
            Ou.prototype._setValue_fromArray,
            Ou.prototype._setValue_fromArray_setNeedsUpdate,
            Ou.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
        ]
    ];
    class Fu {
        constructor(t1, e, n = null, i = e.blendMode){
            this._mixer = t1, this._clip = e, this._localRoot = n, this.blendMode = i;
            const r = e.tracks, s = r.length, a = new Array(s), o = {
                endingStart: It,
                endingEnd: It
            };
            for(let t1 = 0; t1 !== s; ++t1){
                const e = r[t1].createInterpolant(null);
                a[t1] = e, e.settings = o;
            }
            this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(s), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
        }
        play() {
            return this._mixer._activateAction(this), this;
        }
        stop() {
            return this._mixer._deactivateAction(this), this.reset();
        }
        reset() {
            return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
        }
        isRunning() {
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this);
        }
        isScheduled() {
            return this._mixer._isActiveAction(this);
        }
        startAt(t1) {
            return this._startTime = t1, this;
        }
        setLoop(t1, e) {
            return this.loop = t1, this.repetitions = e, this;
        }
        setEffectiveWeight(t1) {
            return this.weight = t1, this._effectiveWeight = this.enabled ? t1 : 0, this.stopFading();
        }
        getEffectiveWeight() {
            return this._effectiveWeight;
        }
        fadeIn(t1) {
            return this._scheduleFading(t1, 0, 1);
        }
        fadeOut(t1) {
            return this._scheduleFading(t1, 1, 0);
        }
        crossFadeFrom(t1, e, n) {
            if (t1.fadeOut(e), this.fadeIn(e), n) {
                const n = this._clip.duration, i = t1._clip.duration, r = i / n, s = n / i;
                t1.warp(1, r, e), this.warp(s, 1, e);
            }
            return this;
        }
        crossFadeTo(t1, e, n) {
            return t1.crossFadeFrom(this, e, n);
        }
        stopFading() {
            const t1 = this._weightInterpolant;
            return null !== t1 && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t1)), this;
        }
        setEffectiveTimeScale(t1) {
            return this.timeScale = t1, this._effectiveTimeScale = this.paused ? 0 : t1, this.stopWarping();
        }
        getEffectiveTimeScale() {
            return this._effectiveTimeScale;
        }
        setDuration(t1) {
            return this.timeScale = this._clip.duration / t1, this.stopWarping();
        }
        syncWith(t1) {
            return this.time = t1.time, this.timeScale = t1.timeScale, this.stopWarping();
        }
        halt(t1) {
            return this.warp(this._effectiveTimeScale, 0, t1);
        }
        warp(t1, e, n) {
            const i = this._mixer, r = i.time, s = this.timeScale;
            let a = this._timeScaleInterpolant;
            null === a && (a = i._lendControlInterpolant(), this._timeScaleInterpolant = a);
            const o = a.parameterPositions, l = a.sampleValues;
            return o[0] = r, o[1] = r + n, l[0] = t1 / s, l[1] = e / s, this;
        }
        stopWarping() {
            const t1 = this._timeScaleInterpolant;
            return null !== t1 && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t1)), this;
        }
        getMixer() {
            return this._mixer;
        }
        getClip() {
            return this._clip;
        }
        getRoot() {
            return this._localRoot || this._mixer._root;
        }
        _update(t1, e, n, i) {
            if (!this.enabled) return void this._updateWeight(t1);
            const r = this._startTime;
            if (null !== r) {
                const i = (t1 - r) * n;
                i < 0 || 0 === n ? e = 0 : (this._startTime = null, e = n * i);
            }
            e *= this._updateTimeScale(t1);
            const s = this._updateTime(e), a = this._updateWeight(t1);
            if (a > 0) {
                const t1 = this._interpolants, e = this._propertyBindings;
                if (this.blendMode === Ot) for(let n = 0, i = t1.length; n !== i; ++n)t1[n].evaluate(s), e[n].accumulateAdditive(a);
                else for(let n = 0, r = t1.length; n !== r; ++n)t1[n].evaluate(s), e[n].accumulate(i, a);
            }
        }
        _updateWeight(t1) {
            let e = 0;
            if (this.enabled) {
                e = this.weight;
                const n = this._weightInterpolant;
                if (null !== n) {
                    const i = n.evaluate(t1)[0];
                    e *= i, t1 > n.parameterPositions[1] && (this.stopFading(), 0 === i && (this.enabled = !1));
                }
            }
            return this._effectiveWeight = e, e;
        }
        _updateTimeScale(t1) {
            let e = 0;
            if (!this.paused) {
                e = this.timeScale;
                const n = this._timeScaleInterpolant;
                if (null !== n) e *= n.evaluate(t1)[0], t1 > n.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e);
            }
            return this._effectiveTimeScale = e, e;
        }
        _updateTime(t1) {
            const e = this._clip.duration, n = this.loop;
            let i = this.time + t1, r = this._loopCount;
            const s = 2202 === n;
            if (0 === t1) return -1 === r ? i : s && 1 == (1 & r) ? e - i : i;
            if (2200 === n) {
                -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
                t: {
                    if (i >= e) i = e;
                    else {
                        if (!(i < 0)) {
                            this.time = i;
                            break t;
                        }
                        i = 0;
                    }
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = i, this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: t1 < 0 ? -1 : 1
                    });
                }
            } else {
                if (-1 === r && (t1 >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, s)) : this._setEndings(0 === this.repetitions, !0, s)), i >= e || i < 0) {
                    const n = Math.floor(i / e);
                    i -= e * n, r += Math.abs(n);
                    const a = this.repetitions - r;
                    if (a <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = t1 > 0 ? e : 0, this.time = i, this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: t1 > 0 ? 1 : -1
                    });
                    else {
                        if (1 === a) {
                            const e = t1 < 0;
                            this._setEndings(e, !e, s);
                        } else this._setEndings(!1, !1, s);
                        this._loopCount = r, this.time = i, this._mixer.dispatchEvent({
                            type: "loop",
                            action: this,
                            loopDelta: n
                        });
                    }
                } else this.time = i;
                if (s && 1 == (1 & r)) return e - i;
            }
            return i;
        }
        _setEndings(t1, e, n) {
            const i = this._interpolantSettings;
            n ? (i.endingStart = Ut, i.endingEnd = Ut) : (i.endingStart = t1 ? this.zeroSlopeAtStart ? Ut : It : Dt, i.endingEnd = e ? this.zeroSlopeAtEnd ? Ut : It : Dt);
        }
        _scheduleFading(t1, e, n) {
            const i = this._mixer, r = i.time;
            let s = this._weightInterpolant;
            null === s && (s = i._lendControlInterpolant(), this._weightInterpolant = s);
            const a = s.parameterPositions, o = s.sampleValues;
            return a[0] = r, o[0] = e, a[1] = r + t1, o[1] = n, this;
        }
    }
    const Bu = new Float32Array(1);
    class zu {
        constructor(t1){
            this.value = t1;
        }
        clone() {
            return new zu(void 0 === this.value.clone ? this.value : this.value.clone());
        }
    }
    let Gu = 0;
    function Hu(t1, e) {
        return t1.distance - e.distance;
    }
    function Vu(t1, e, n, i) {
        if (t1.layers.test(e.layers) && t1.raycast(e, n), !0 === i) {
            const i = t1.children;
            for(let t1 = 0, r = i.length; t1 < r; t1++)Vu(i[t1], e, n, !0);
        }
    }
    const ku = new me;
    const Wu = new We, Xu = new We;
    const ju = new We;
    const qu = new We, Yu = new Mn, Zu = new Mn;
    function Ju(t1) {
        const e = [];
        !0 === t1.isBone && e.push(t1);
        for(let n = 0; n < t1.children.length; n++)e.push.apply(e, Ju(t1.children[n]));
        return e;
    }
    const Ku = new We, $u = new ci, Qu = new ci;
    const td = new We, ed = new We, nd = new We;
    const id = new We, rd = new rr;
    function sd(t1, e, n, i, r, s, a) {
        id.set(r, s, a).unproject(i);
        const o = e[t1];
        if (void 0 !== o) {
            const t1 = n.getAttribute("position");
            for(let e = 0, n = o.length; e < n; e++)t1.setXYZ(o[e], id.x, id.y, id.z);
        }
    }
    const ad = new qe;
    const od = new We;
    let ld, cd;
    "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
        detail: {
            revision: e
        }
    })), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = e), t1.ACESFilmicToneMapping = _, t1.AddEquation = o, t1.AddOperation = d, t1.AdditiveAnimationBlendMode = Ot, t1.AdditiveBlending = 2, t1.AgXToneMapping = x, t1.AlphaFormat = 1021, t1.AlwaysCompare = 519, t1.AlwaysDepth = 1, t1.AlwaysStencilFunc = 519, t1.AmbientLight = nu, t1.AnimationAction = Fu, t1.AnimationClip = Ph, t1.AnimationLoader = class extends Oh {
        constructor(t1){
            super(t1);
        }
        load(t1, e, n, i) {
            const r = this, s = new zh(this.manager);
            s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(t1, function(n) {
                try {
                    e(r.parse(JSON.parse(n)));
                } catch (e) {
                    i ? i(e) : console.error(e), r.manager.itemError(t1);
                }
            }, n, i);
        }
        parse(t1) {
            const e = [];
            for(let n = 0; n < t1.length; n++){
                const i = Ph.parse(t1[n]);
                e.push(i);
            }
            return e;
        }
    }, t1.AnimationMixer = class extends te {
        constructor(t1){
            super(), this._root = t1, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
        }
        _bindAction(t1, e) {
            const n = t1._localRoot || this._root, i = t1._clip.tracks, r = i.length, s = t1._propertyBindings, a = t1._interpolants, o = n.uuid, l = this._bindingsByRootAndName;
            let c = l[o];
            void 0 === c && (c = {}, l[o] = c);
            for(let t1 = 0; t1 !== r; ++t1){
                const r = i[t1], l = r.name;
                let h = c[l];
                if (void 0 !== h) ++h.referenceCount, s[t1] = h;
                else {
                    if (h = s[t1], void 0 !== h) {
                        null === h._cacheIndex && (++h.referenceCount, this._addInactiveBinding(h, o, l));
                        continue;
                    }
                    const i = e && e._propertyBindings[t1].binding.parsedPath;
                    h = new Cu(Ou.create(n, l, i), r.ValueTypeName, r.getValueSize()), ++h.referenceCount, this._addInactiveBinding(h, o, l), s[t1] = h;
                }
                a[t1].resultBuffer = h.buffer;
            }
        }
        _activateAction(t1) {
            if (!this._isActiveAction(t1)) {
                if (null === t1._cacheIndex) {
                    const e = (t1._localRoot || this._root).uuid, n = t1._clip.uuid, i = this._actionsByClip[n];
                    this._bindAction(t1, i && i.knownActions[0]), this._addInactiveAction(t1, n, e);
                }
                const e = t1._propertyBindings;
                for(let t1 = 0, n = e.length; t1 !== n; ++t1){
                    const n = e[t1];
                    0 == n.useCount++ && (this._lendBinding(n), n.saveOriginalState());
                }
                this._lendAction(t1);
            }
        }
        _deactivateAction(t1) {
            if (this._isActiveAction(t1)) {
                const e = t1._propertyBindings;
                for(let t1 = 0, n = e.length; t1 !== n; ++t1){
                    const n = e[t1];
                    0 == --n.useCount && (n.restoreOriginalState(), this._takeBackBinding(n));
                }
                this._takeBackAction(t1);
            }
        }
        _initMemoryManager() {
            this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
            const t1 = this;
            this.stats = {
                actions: {
                    get total () {
                        return t1._actions.length;
                    },
                    get inUse () {
                        return t1._nActiveActions;
                    }
                },
                bindings: {
                    get total () {
                        return t1._bindings.length;
                    },
                    get inUse () {
                        return t1._nActiveBindings;
                    }
                },
                controlInterpolants: {
                    get total () {
                        return t1._controlInterpolants.length;
                    },
                    get inUse () {
                        return t1._nActiveControlInterpolants;
                    }
                }
            };
        }
        _isActiveAction(t1) {
            const e = t1._cacheIndex;
            return null !== e && e < this._nActiveActions;
        }
        _addInactiveAction(t1, e, n) {
            const i = this._actions, r = this._actionsByClip;
            let s = r[e];
            if (void 0 === s) s = {
                knownActions: [
                    t1
                ],
                actionByRoot: {}
            }, t1._byClipCacheIndex = 0, r[e] = s;
            else {
                const e = s.knownActions;
                t1._byClipCacheIndex = e.length, e.push(t1);
            }
            t1._cacheIndex = i.length, i.push(t1), s.actionByRoot[n] = t1;
        }
        _removeInactiveAction(t1) {
            const e = this._actions, n = e[e.length - 1], i = t1._cacheIndex;
            n._cacheIndex = i, e[i] = n, e.pop(), t1._cacheIndex = null;
            const r = t1._clip.uuid, s = this._actionsByClip, a = s[r], o = a.knownActions, l = o[o.length - 1], c = t1._byClipCacheIndex;
            l._byClipCacheIndex = c, o[c] = l, o.pop(), t1._byClipCacheIndex = null;
            delete a.actionByRoot[(t1._localRoot || this._root).uuid], 0 === o.length && delete s[r], this._removeInactiveBindingsForAction(t1);
        }
        _removeInactiveBindingsForAction(t1) {
            const e = t1._propertyBindings;
            for(let t1 = 0, n = e.length; t1 !== n; ++t1){
                const n = e[t1];
                0 == --n.referenceCount && this._removeInactiveBinding(n);
            }
        }
        _lendAction(t1) {
            const e = this._actions, n = t1._cacheIndex, i = this._nActiveActions++, r = e[i];
            t1._cacheIndex = i, e[i] = t1, r._cacheIndex = n, e[n] = r;
        }
        _takeBackAction(t1) {
            const e = this._actions, n = t1._cacheIndex, i = --this._nActiveActions, r = e[i];
            t1._cacheIndex = i, e[i] = t1, r._cacheIndex = n, e[n] = r;
        }
        _addInactiveBinding(t1, e, n) {
            const i = this._bindingsByRootAndName, r = this._bindings;
            let s = i[e];
            void 0 === s && (s = {}, i[e] = s), s[n] = t1, t1._cacheIndex = r.length, r.push(t1);
        }
        _removeInactiveBinding(t1) {
            const e = this._bindings, n = t1.binding, i = n.rootNode.uuid, r = n.path, s = this._bindingsByRootAndName, a = s[i], o = e[e.length - 1], l = t1._cacheIndex;
            o._cacheIndex = l, e[l] = o, e.pop(), delete a[r], 0 === Object.keys(a).length && delete s[i];
        }
        _lendBinding(t1) {
            const e = this._bindings, n = t1._cacheIndex, i = this._nActiveBindings++, r = e[i];
            t1._cacheIndex = i, e[i] = t1, r._cacheIndex = n, e[n] = r;
        }
        _takeBackBinding(t1) {
            const e = this._bindings, n = t1._cacheIndex, i = --this._nActiveBindings, r = e[i];
            t1._cacheIndex = i, e[i] = t1, r._cacheIndex = n, e[n] = r;
        }
        _lendControlInterpolant() {
            const t1 = this._controlInterpolants, e = this._nActiveControlInterpolants++;
            let n = t1[e];
            return void 0 === n && (n = new Mh(new Float32Array(2), new Float32Array(2), 1, Bu), n.__cacheIndex = e, t1[e] = n), n;
        }
        _takeBackControlInterpolant(t1) {
            const e = this._controlInterpolants, n = t1.__cacheIndex, i = --this._nActiveControlInterpolants, r = e[i];
            t1.__cacheIndex = i, e[i] = t1, r.__cacheIndex = n, e[n] = r;
        }
        clipAction(t1, e, n) {
            const i = e || this._root, r = i.uuid;
            let s = "string" == typeof t1 ? Ph.findByName(i, t1) : t1;
            const a = null !== s ? s.uuid : t1, o = this._actionsByClip[a];
            let l = null;
            if (void 0 === n && (n = null !== s ? s.blendMode : Nt), void 0 !== o) {
                const t1 = o.actionByRoot[r];
                if (void 0 !== t1 && t1.blendMode === n) return t1;
                l = o.knownActions[0], null === s && (s = l._clip);
            }
            if (null === s) return null;
            const c = new Fu(this, s, e, n);
            return this._bindAction(c, l), this._addInactiveAction(c, a, r), c;
        }
        existingAction(t1, e) {
            const n = e || this._root, i = n.uuid, r = "string" == typeof t1 ? Ph.findByName(n, t1) : t1, s = r ? r.uuid : t1, a = this._actionsByClip[s];
            return void 0 !== a && a.actionByRoot[i] || null;
        }
        stopAllAction() {
            const t1 = this._actions;
            for(let e = this._nActiveActions - 1; e >= 0; --e)t1[e].stop();
            return this;
        }
        update(t1) {
            t1 *= this.timeScale;
            const e = this._actions, n = this._nActiveActions, i = this.time += t1, r = Math.sign(t1), s = this._accuIndex ^= 1;
            for(let a = 0; a !== n; ++a)e[a]._update(i, t1, r, s);
            const a = this._bindings, o = this._nActiveBindings;
            for(let t1 = 0; t1 !== o; ++t1)a[t1].apply(s);
            return this;
        }
        setTime(t1) {
            this.time = 0;
            for(let t1 = 0; t1 < this._actions.length; t1++)this._actions[t1].time = 0;
            return this.update(t1);
        }
        getRoot() {
            return this._root;
        }
        uncacheClip(t1) {
            const e = this._actions, n = t1.uuid, i = this._actionsByClip, r = i[n];
            if (void 0 !== r) {
                const t1 = r.knownActions;
                for(let n = 0, i = t1.length; n !== i; ++n){
                    const i = t1[n];
                    this._deactivateAction(i);
                    const r = i._cacheIndex, s = e[e.length - 1];
                    i._cacheIndex = null, i._byClipCacheIndex = null, s._cacheIndex = r, e[r] = s, e.pop(), this._removeInactiveBindingsForAction(i);
                }
                delete i[n];
            }
        }
        uncacheRoot(t1) {
            const e = t1.uuid, n = this._actionsByClip;
            for(const t1 in n){
                const i = n[t1].actionByRoot[e];
                void 0 !== i && (this._deactivateAction(i), this._removeInactiveAction(i));
            }
            const i = this._bindingsByRootAndName[e];
            if (void 0 !== i) for(const t1 in i){
                const e = i[t1];
                e.restoreOriginalState(), this._removeInactiveBinding(e);
            }
        }
        uncacheAction(t1, e) {
            const n = this.existingAction(t1, e);
            null !== n && (this._deactivateAction(n), this._removeInactiveAction(n));
        }
    }, t1.AnimationObjectGroup = class {
        constructor(){
            this.isAnimationObjectGroup = !0, this.uuid = se(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
            const t1 = {};
            this._indicesByUUID = t1;
            for(let e = 0, n = arguments.length; e !== n; ++e)t1[arguments[e].uuid] = e;
            this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
            const e = this;
            this.stats = {
                objects: {
                    get total () {
                        return e._objects.length;
                    },
                    get inUse () {
                        return this.total - e.nCachedObjects_;
                    }
                },
                get bindingsPerObject () {
                    return e._bindings.length;
                }
            };
        }
        add() {
            const t1 = this._objects, e = this._indicesByUUID, n = this._paths, i = this._parsedPaths, r = this._bindings, s = r.length;
            let a, o = t1.length, l = this.nCachedObjects_;
            for(let c = 0, h = arguments.length; c !== h; ++c){
                const h = arguments[c], u = h.uuid;
                let d = e[u];
                if (void 0 === d) {
                    d = o++, e[u] = d, t1.push(h);
                    for(let t1 = 0, e = s; t1 !== e; ++t1)r[t1].push(new Ou(h, n[t1], i[t1]));
                } else if (d < l) {
                    a = t1[d];
                    const o = --l, c = t1[o];
                    e[c.uuid] = d, t1[d] = c, e[u] = o, t1[o] = h;
                    for(let t1 = 0, e = s; t1 !== e; ++t1){
                        const e = r[t1], s = e[o];
                        let a = e[d];
                        e[d] = s, void 0 === a && (a = new Ou(h, n[t1], i[t1])), e[o] = a;
                    }
                } else t1[d] !== a && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
            }
            this.nCachedObjects_ = l;
        }
        remove() {
            const t1 = this._objects, e = this._indicesByUUID, n = this._bindings, i = n.length;
            let r = this.nCachedObjects_;
            for(let s = 0, a = arguments.length; s !== a; ++s){
                const a = arguments[s], o = a.uuid, l = e[o];
                if (void 0 !== l && l >= r) {
                    const s = r++, c = t1[s];
                    e[c.uuid] = l, t1[l] = c, e[o] = s, t1[s] = a;
                    for(let t1 = 0, e = i; t1 !== e; ++t1){
                        const e = n[t1], i = e[s], r = e[l];
                        e[l] = i, e[s] = r;
                    }
                }
            }
            this.nCachedObjects_ = r;
        }
        uncache() {
            const t1 = this._objects, e = this._indicesByUUID, n = this._bindings, i = n.length;
            let r = this.nCachedObjects_, s = t1.length;
            for(let a = 0, o = arguments.length; a !== o; ++a){
                const o = arguments[a].uuid, l = e[o];
                if (void 0 !== l) {
                    if (delete e[o], l < r) {
                        const a = --r, o = t1[a], c = --s, h = t1[c];
                        e[o.uuid] = l, t1[l] = o, e[h.uuid] = a, t1[a] = h, t1.pop();
                        for(let t1 = 0, e = i; t1 !== e; ++t1){
                            const e = n[t1], i = e[a], r = e[c];
                            e[l] = i, e[a] = r, e.pop();
                        }
                    } else {
                        const r = --s, a = t1[r];
                        r > 0 && (e[a.uuid] = l), t1[l] = a, t1.pop();
                        for(let t1 = 0, e = i; t1 !== e; ++t1){
                            const e = n[t1];
                            e[l] = e[r], e.pop();
                        }
                    }
                }
            }
            this.nCachedObjects_ = r;
        }
        subscribe_(t1, e) {
            const n = this._bindingsIndicesByPath;
            let i = n[t1];
            const r = this._bindings;
            if (void 0 !== i) return r[i];
            const s = this._paths, a = this._parsedPaths, o = this._objects, l = o.length, c = this.nCachedObjects_, h = new Array(l);
            i = r.length, n[t1] = i, s.push(t1), a.push(e), r.push(h);
            for(let n = c, i = o.length; n !== i; ++n){
                const i = o[n];
                h[n] = new Ou(i, t1, e);
            }
            return h;
        }
        unsubscribe_(t1) {
            const e = this._bindingsIndicesByPath, n = e[t1];
            if (void 0 !== n) {
                const i = this._paths, r = this._parsedPaths, s = this._bindings, a = s.length - 1, o = s[a];
                e[t1[a]] = n, s[n] = o, s.pop(), r[n] = r[a], r.pop(), i[n] = i[a], i.pop();
            }
        }
    }, t1.AnimationUtils = vh, t1.ArcCurve = Ol, t1.ArrayCamera = qa, t1.ArrowHelper = class extends jn {
        constructor(t1 = new We(0, 0, 1), e = new We(0, 0, 0), n = 1, i = 16776960, r = .2 * n, s = .2 * r){
            super(), this.type = "ArrowHelper", void 0 === ld && (ld = new Ii, ld.setAttribute("position", new Ti([
                0,
                0,
                0,
                0,
                1,
                0
            ], 3)), cd = new sc(0, .5, 1, 5, 1), cd.translate(0, -0.5, 0)), this.position.copy(e), this.line = new Ml(ld, new fl({
                color: i,
                toneMapped: !1
            })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new Ji(cd, new pi({
                color: i,
                toneMapped: !1
            })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t1), this.setLength(n, r, s);
        }
        setDirection(t1) {
            if (t1.y > .99999) this.quaternion.set(0, 0, 0, 1);
            else if (t1.y < -0.99999) this.quaternion.set(1, 0, 0, 0);
            else {
                od.set(t1.z, 0, -t1.x).normalize();
                const e = Math.acos(t1.y);
                this.quaternion.setFromAxisAngle(od, e);
            }
        }
        setLength(t1, e = .2 * t1, n = .2 * e) {
            this.line.scale.set(1, Math.max(1e-4, t1 - e), 1), this.line.updateMatrix(), this.cone.scale.set(n, e, n), this.cone.position.y = t1, this.cone.updateMatrix();
        }
        setColor(t1) {
            this.line.material.color.set(t1), this.cone.material.color.set(t1);
        }
        copy(t1) {
            return super.copy(t1, !1), this.line.copy(t1.line), this.cone.copy(t1.cone), this;
        }
        dispose() {
            this.line.geometry.dispose(), this.line.material.dispose(), this.cone.geometry.dispose(), this.cone.material.dispose();
        }
    }, t1.AttachedBindMode = y, t1.Audio = Tu, t1.AudioAnalyser = class {
        constructor(t1, e = 2048){
            this.analyser = t1.context.createAnalyser(), this.analyser.fftSize = e, this.data = new Uint8Array(this.analyser.frequencyBinCount), t1.getOutput().connect(this.analyser);
        }
        getFrequencyData() {
            return this.analyser.getByteFrequencyData(this.data), this.data;
        }
        getAverageFrequency() {
            let t1 = 0;
            const e = this.getFrequencyData();
            for(let n = 0; n < e.length; n++)t1 += e[n];
            return t1 / e.length;
        }
    }, t1.AudioContext = mu, t1.AudioListener = class extends jn {
        constructor(){
            super(), this.type = "AudioListener", this.context = mu.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new vu;
        }
        getInput() {
            return this.gain;
        }
        removeFilter() {
            return null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
        }
        getFilter() {
            return this.filter;
        }
        setFilter(t1) {
            return null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t1, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
        }
        getMasterVolume() {
            return this.gain.gain.value;
        }
        setMasterVolume(t1) {
            return this.gain.gain.setTargetAtTime(t1, this.context.currentTime, .01), this;
        }
        updateMatrixWorld(t1) {
            super.updateMatrixWorld(t1);
            const e = this.context.listener, n = this.up;
            if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(yu, Mu, Su), bu.set(0, 0, -1).applyQuaternion(Mu), e.positionX) {
                const t1 = this.context.currentTime + this.timeDelta;
                e.positionX.linearRampToValueAtTime(yu.x, t1), e.positionY.linearRampToValueAtTime(yu.y, t1), e.positionZ.linearRampToValueAtTime(yu.z, t1), e.forwardX.linearRampToValueAtTime(bu.x, t1), e.forwardY.linearRampToValueAtTime(bu.y, t1), e.forwardZ.linearRampToValueAtTime(bu.z, t1), e.upX.linearRampToValueAtTime(n.x, t1), e.upY.linearRampToValueAtTime(n.y, t1), e.upZ.linearRampToValueAtTime(n.z, t1);
            } else e.setPosition(yu.x, yu.y, yu.z), e.setOrientation(bu.x, bu.y, bu.z, n.x, n.y, n.z);
        }
    }, t1.AudioLoader = class extends Oh {
        constructor(t1){
            super(t1);
        }
        load(t1, e, n, i) {
            const r = this, s = new zh(this.manager);
            function a(e) {
                i ? i(e) : console.error(e), r.manager.itemError(t1);
            }
            s.setResponseType("arraybuffer"), s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(t1, function(t1) {
                try {
                    const n = t1.slice(0);
                    mu.getContext().decodeAudioData(n, function(t1) {
                        e(t1);
                    }).catch(a);
                } catch (t1) {
                    a(t1);
                }
            }, n, i);
        }
    }, t1.AxesHelper = class extends Tl {
        constructor(t1 = 1){
            const e = [
                0,
                0,
                0,
                t1,
                0,
                0,
                0,
                0,
                0,
                0,
                t1,
                0,
                0,
                0,
                0,
                0,
                0,
                t1
            ], n = new Ii;
            n.setAttribute("position", new Ti(e, 3)), n.setAttribute("color", new Ti([
                1,
                0,
                0,
                1,
                .6,
                0,
                0,
                1,
                0,
                .6,
                1,
                0,
                0,
                0,
                1,
                0,
                .6,
                1
            ], 3));
            super(n, new fl({
                vertexColors: !0,
                toneMapped: !1
            })), this.type = "AxesHelper";
        }
        setColors(t1, e, n) {
            const i = new ci, r = this.geometry.attributes.color.array;
            return i.set(t1), i.toArray(r, 0), i.toArray(r, 3), i.set(e), i.toArray(r, 6), i.toArray(r, 9), i.set(n), i.toArray(r, 12), i.toArray(r, 15), this.geometry.attributes.color.needsUpdate = !0, this;
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose();
        }
    }, t1.BackSide = a, t1.BasicDepthPacking = 3200, t1.BasicShadowMap = 0, t1.BatchedMesh = ml, t1.Bone = Bo, t1.BooleanKeyframeTrack = Th, t1.Box2 = class {
        constructor(t1 = new me(1 / 0, 1 / 0), e = new me(-1 / 0, -1 / 0)){
            this.isBox2 = !0, this.min = t1, this.max = e;
        }
        set(t1, e) {
            return this.min.copy(t1), this.max.copy(e), this;
        }
        setFromPoints(t1) {
            this.makeEmpty();
            for(let e = 0, n = t1.length; e < n; e++)this.expandByPoint(t1[e]);
            return this;
        }
        setFromCenterAndSize(t1, e) {
            const n = ku.copy(e).multiplyScalar(.5);
            return this.min.copy(t1).sub(n), this.max.copy(t1).add(n), this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
        copy(t1) {
            return this.min.copy(t1.min), this.max.copy(t1.max), this;
        }
        makeEmpty() {
            return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this;
        }
        isEmpty() {
            return this.max.x < this.min.x || this.max.y < this.min.y;
        }
        getCenter(t1) {
            return this.isEmpty() ? t1.set(0, 0) : t1.addVectors(this.min, this.max).multiplyScalar(.5);
        }
        getSize(t1) {
            return this.isEmpty() ? t1.set(0, 0) : t1.subVectors(this.max, this.min);
        }
        expandByPoint(t1) {
            return this.min.min(t1), this.max.max(t1), this;
        }
        expandByVector(t1) {
            return this.min.sub(t1), this.max.add(t1), this;
        }
        expandByScalar(t1) {
            return this.min.addScalar(-t1), this.max.addScalar(t1), this;
        }
        containsPoint(t1) {
            return !(t1.x < this.min.x || t1.x > this.max.x || t1.y < this.min.y || t1.y > this.max.y);
        }
        containsBox(t1) {
            return this.min.x <= t1.min.x && t1.max.x <= this.max.x && this.min.y <= t1.min.y && t1.max.y <= this.max.y;
        }
        getParameter(t1, e) {
            return e.set((t1.x - this.min.x) / (this.max.x - this.min.x), (t1.y - this.min.y) / (this.max.y - this.min.y));
        }
        intersectsBox(t1) {
            return !(t1.max.x < this.min.x || t1.min.x > this.max.x || t1.max.y < this.min.y || t1.min.y > this.max.y);
        }
        clampPoint(t1, e) {
            return e.copy(t1).clamp(this.min, this.max);
        }
        distanceToPoint(t1) {
            return this.clampPoint(t1, ku).distanceTo(t1);
        }
        intersect(t1) {
            return this.min.max(t1.min), this.max.min(t1.max), this.isEmpty() && this.makeEmpty(), this;
        }
        union(t1) {
            return this.min.min(t1.min), this.max.max(t1.max), this;
        }
        translate(t1) {
            return this.min.add(t1), this.max.add(t1), this;
        }
        equals(t1) {
            return t1.min.equals(this.min) && t1.max.equals(this.max);
        }
    }, t1.Box3 = qe, t1.Box3Helper = class extends Tl {
        constructor(t1, e = 16776960){
            const n = new Uint16Array([
                0,
                1,
                1,
                2,
                2,
                3,
                3,
                0,
                4,
                5,
                5,
                6,
                6,
                7,
                7,
                4,
                0,
                4,
                1,
                5,
                2,
                6,
                3,
                7
            ]), i = new Ii;
            i.setIndex(new Mi(n, 1)), i.setAttribute("position", new Ti([
                1,
                1,
                1,
                -1,
                1,
                1,
                -1,
                -1,
                1,
                1,
                -1,
                1,
                1,
                1,
                -1,
                -1,
                1,
                -1,
                -1,
                -1,
                -1,
                1,
                -1,
                -1
            ], 3)), super(i, new fl({
                color: e,
                toneMapped: !1
            })), this.box = t1, this.type = "Box3Helper", this.geometry.computeBoundingSphere();
        }
        updateMatrixWorld(t1) {
            const e = this.box;
            e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(.5), super.updateMatrixWorld(t1));
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose();
        }
    }, t1.BoxGeometry = $i, t1.BoxHelper = class extends Tl {
        constructor(t1, e = 16776960){
            const n = new Uint16Array([
                0,
                1,
                1,
                2,
                2,
                3,
                3,
                0,
                4,
                5,
                5,
                6,
                6,
                7,
                7,
                4,
                0,
                4,
                1,
                5,
                2,
                6,
                3,
                7
            ]), i = new Float32Array(24), r = new Ii;
            r.setIndex(new Mi(n, 1)), r.setAttribute("position", new Mi(i, 3)), super(r, new fl({
                color: e,
                toneMapped: !1
            })), this.object = t1, this.type = "BoxHelper", this.matrixAutoUpdate = !1, this.update();
        }
        update(t1) {
            if (void 0 !== t1 && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && ad.setFromObject(this.object), ad.isEmpty()) return;
            const e = ad.min, n = ad.max, i = this.geometry.attributes.position, r = i.array;
            r[0] = n.x, r[1] = n.y, r[2] = n.z, r[3] = e.x, r[4] = n.y, r[5] = n.z, r[6] = e.x, r[7] = e.y, r[8] = n.z, r[9] = n.x, r[10] = e.y, r[11] = n.z, r[12] = n.x, r[13] = n.y, r[14] = e.z, r[15] = e.x, r[16] = n.y, r[17] = e.z, r[18] = e.x, r[19] = e.y, r[20] = e.z, r[21] = n.x, r[22] = e.y, r[23] = e.z, i.needsUpdate = !0, this.geometry.computeBoundingSphere();
        }
        setFromObject(t1) {
            return this.object = t1, this.update(), this;
        }
        copy(t1, e) {
            return super.copy(t1, e), this.object = t1.object, this;
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose();
        }
    }, t1.BufferAttribute = Mi, t1.BufferGeometry = Ii, t1.BufferGeometryLoader = cu, t1.ByteType = 1010, t1.Cache = Uh, t1.Camera = rr, t1.CameraHelper = class extends Tl {
        constructor(t1){
            const e = new Ii, n = new fl({
                color: 16777215,
                vertexColors: !0,
                toneMapped: !1
            }), i = [], r = [], s = {};
            function a(t1, e) {
                o(t1), o(e);
            }
            function o(t1) {
                i.push(0, 0, 0), r.push(0, 0, 0), void 0 === s[t1] && (s[t1] = []), s[t1].push(i.length / 3 - 1);
            }
            a("n1", "n2"), a("n2", "n4"), a("n4", "n3"), a("n3", "n1"), a("f1", "f2"), a("f2", "f4"), a("f4", "f3"), a("f3", "f1"), a("n1", "f1"), a("n2", "f2"), a("n3", "f3"), a("n4", "f4"), a("p", "n1"), a("p", "n2"), a("p", "n3"), a("p", "n4"), a("u1", "u2"), a("u2", "u3"), a("u3", "u1"), a("c", "t"), a("p", "c"), a("cn1", "cn2"), a("cn3", "cn4"), a("cf1", "cf2"), a("cf3", "cf4"), e.setAttribute("position", new Ti(i, 3)), e.setAttribute("color", new Ti(r, 3)), super(e, n), this.type = "CameraHelper", this.camera = t1, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t1.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = s, this.update();
            const l = new ci(16755200), c = new ci(16711680), h = new ci(43775), u = new ci(16777215), d = new ci(3355443);
            this.setColors(l, c, h, u, d);
        }
        setColors(t1, e, n, i, r) {
            const s = this.geometry.getAttribute("color");
            s.setXYZ(0, t1.r, t1.g, t1.b), s.setXYZ(1, t1.r, t1.g, t1.b), s.setXYZ(2, t1.r, t1.g, t1.b), s.setXYZ(3, t1.r, t1.g, t1.b), s.setXYZ(4, t1.r, t1.g, t1.b), s.setXYZ(5, t1.r, t1.g, t1.b), s.setXYZ(6, t1.r, t1.g, t1.b), s.setXYZ(7, t1.r, t1.g, t1.b), s.setXYZ(8, t1.r, t1.g, t1.b), s.setXYZ(9, t1.r, t1.g, t1.b), s.setXYZ(10, t1.r, t1.g, t1.b), s.setXYZ(11, t1.r, t1.g, t1.b), s.setXYZ(12, t1.r, t1.g, t1.b), s.setXYZ(13, t1.r, t1.g, t1.b), s.setXYZ(14, t1.r, t1.g, t1.b), s.setXYZ(15, t1.r, t1.g, t1.b), s.setXYZ(16, t1.r, t1.g, t1.b), s.setXYZ(17, t1.r, t1.g, t1.b), s.setXYZ(18, t1.r, t1.g, t1.b), s.setXYZ(19, t1.r, t1.g, t1.b), s.setXYZ(20, t1.r, t1.g, t1.b), s.setXYZ(21, t1.r, t1.g, t1.b), s.setXYZ(22, t1.r, t1.g, t1.b), s.setXYZ(23, t1.r, t1.g, t1.b), s.setXYZ(24, e.r, e.g, e.b), s.setXYZ(25, e.r, e.g, e.b), s.setXYZ(26, e.r, e.g, e.b), s.setXYZ(27, e.r, e.g, e.b), s.setXYZ(28, e.r, e.g, e.b), s.setXYZ(29, e.r, e.g, e.b), s.setXYZ(30, e.r, e.g, e.b), s.setXYZ(31, e.r, e.g, e.b), s.setXYZ(32, n.r, n.g, n.b), s.setXYZ(33, n.r, n.g, n.b), s.setXYZ(34, n.r, n.g, n.b), s.setXYZ(35, n.r, n.g, n.b), s.setXYZ(36, n.r, n.g, n.b), s.setXYZ(37, n.r, n.g, n.b), s.setXYZ(38, i.r, i.g, i.b), s.setXYZ(39, i.r, i.g, i.b), s.setXYZ(40, r.r, r.g, r.b), s.setXYZ(41, r.r, r.g, r.b), s.setXYZ(42, r.r, r.g, r.b), s.setXYZ(43, r.r, r.g, r.b), s.setXYZ(44, r.r, r.g, r.b), s.setXYZ(45, r.r, r.g, r.b), s.setXYZ(46, r.r, r.g, r.b), s.setXYZ(47, r.r, r.g, r.b), s.setXYZ(48, r.r, r.g, r.b), s.setXYZ(49, r.r, r.g, r.b), s.needsUpdate = !0;
        }
        update() {
            const t1 = this.geometry, e = this.pointMap;
            rd.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), sd("c", e, t1, rd, 0, 0, -1), sd("t", e, t1, rd, 0, 0, 1), sd("n1", e, t1, rd, -1, -1, -1), sd("n2", e, t1, rd, 1, -1, -1), sd("n3", e, t1, rd, -1, 1, -1), sd("n4", e, t1, rd, 1, 1, -1), sd("f1", e, t1, rd, -1, -1, 1), sd("f2", e, t1, rd, 1, -1, 1), sd("f3", e, t1, rd, -1, 1, 1), sd("f4", e, t1, rd, 1, 1, 1), sd("u1", e, t1, rd, .7, 1.1, -1), sd("u2", e, t1, rd, -0.7, 1.1, -1), sd("u3", e, t1, rd, 0, 2, -1), sd("cf1", e, t1, rd, -1, 0, 1), sd("cf2", e, t1, rd, 1, 0, 1), sd("cf3", e, t1, rd, 0, -1, 1), sd("cf4", e, t1, rd, 0, 1, 1), sd("cn1", e, t1, rd, -1, 0, -1), sd("cn2", e, t1, rd, 1, 0, -1), sd("cn3", e, t1, rd, 0, -1, -1), sd("cn4", e, t1, rd, 0, 1, -1), t1.getAttribute("position").needsUpdate = !0;
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose();
        }
    }, t1.CanvasTexture = class extends Fe {
        constructor(t1, e, n, i, r, s, a, o, l){
            super(t1, e, n, i, r, s, a, o, l), this.isCanvasTexture = !0, this.needsUpdate = !0;
        }
    }, t1.CapsuleGeometry = ic, t1.CatmullRomCurve3 = Vl, t1.CineonToneMapping = g, t1.CircleGeometry = rc, t1.ClampToEdgeWrapping = C, t1.Clock = vu, t1.Color = ci, t1.ColorKeyframeTrack = Eh, t1.ColorManagement = Re, t1.CompressedArrayTexture = class extends Ul {
        constructor(t1, e, n, i, r, s){
            super(t1, e, n, r, s), this.isCompressedArrayTexture = !0, this.image.depth = i, this.wrapR = C;
        }
    }, t1.CompressedCubeTexture = class extends Ul {
        constructor(t1, e, n){
            super(void 0, t1[0].width, t1[0].height, e, n, b), this.isCompressedCubeTexture = !0, this.isCubeTexture = !0, this.image = t1;
        }
    }, t1.CompressedTexture = Ul, t1.CompressedTextureLoader = class extends Oh {
        constructor(t1){
            super(t1);
        }
        load(t1, e, n, i) {
            const r = this, s = [], a = new Ul, o = new zh(this.manager);
            o.setPath(this.path), o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setWithCredentials(r.withCredentials);
            let l = 0;
            function c(c) {
                o.load(t1[c], function(t1) {
                    const n = r.parse(t1, !0);
                    s[c] = {
                        width: n.width,
                        height: n.height,
                        format: n.format,
                        mipmaps: n.mipmaps
                    }, l += 1, 6 === l && (1 === n.mipmapCount && (a.minFilter = D), a.image = s, a.format = n.format, a.needsUpdate = !0, e && e(a));
                }, n, i);
            }
            if (Array.isArray(t1)) for(let e = 0, n = t1.length; e < n; ++e)c(e);
            else o.load(t1, function(t1) {
                const n = r.parse(t1, !0);
                if (n.isCubemap) {
                    const t1 = n.mipmaps.length / n.mipmapCount;
                    for(let e = 0; e < t1; e++){
                        s[e] = {
                            mipmaps: []
                        };
                        for(let t1 = 0; t1 < n.mipmapCount; t1++)s[e].mipmaps.push(n.mipmaps[e * n.mipmapCount + t1]), s[e].format = n.format, s[e].width = n.width, s[e].height = n.height;
                    }
                    a.image = s;
                } else a.image.width = n.width, a.image.height = n.height, a.mipmaps = n.mipmaps;
                1 === n.mipmapCount && (a.minFilter = D), a.format = n.format, a.needsUpdate = !0, e && e(a);
            }, n, i);
            return a;
        }
    }, t1.ConeGeometry = ac, t1.ConstantAlphaFactor = 213, t1.ConstantColorFactor = 211, t1.CubeCamera = or, t1.CubeReflectionMapping = b, t1.CubeRefractionMapping = T, t1.CubeTexture = lr, t1.CubeTextureLoader = class extends Oh {
        constructor(t1){
            super(t1);
        }
        load(t1, e, n, i) {
            const r = new lr;
            r.colorSpace = Gt;
            const s = new Gh(this.manager);
            s.setCrossOrigin(this.crossOrigin), s.setPath(this.path);
            let a = 0;
            function o(n) {
                s.load(t1[n], function(t1) {
                    r.images[n] = t1, a++, 6 === a && (r.needsUpdate = !0, e && e(r));
                }, void 0, i);
            }
            for(let e = 0; e < t1.length; ++e)o(e);
            return r;
        }
    }, t1.CubeUVReflectionMapping = A, t1.CubicBezierCurve = jl, t1.CubicBezierCurve3 = ql, t1.CubicInterpolant = yh, t1.CullFaceBack = 1, t1.CullFaceFront = 2, t1.CullFaceFrontBack = 3, t1.CullFaceNone = 0, t1.Curve = Dl, t1.CurvePath = tc, t1.CustomBlending = 5, t1.CustomToneMapping = v, t1.CylinderGeometry = sc, t1.Cylindrical = class {
        constructor(t1 = 1, e = 0, n = 0){
            return this.radius = t1, this.theta = e, this.y = n, this;
        }
        set(t1, e, n) {
            return this.radius = t1, this.theta = e, this.y = n, this;
        }
        copy(t1) {
            return this.radius = t1.radius, this.theta = t1.theta, this.y = t1.y, this;
        }
        setFromVector3(t1) {
            return this.setFromCartesianCoords(t1.x, t1.y, t1.z);
        }
        setFromCartesianCoords(t1, e, n) {
            return this.radius = Math.sqrt(t1 * t1 + n * n), this.theta = Math.atan2(t1, n), this.y = e, this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }, t1.Data3DTexture = Ve, t1.DataArrayTexture = He, t1.DataTexture = zo, t1.DataTextureLoader = class extends Oh {
        constructor(t1){
            super(t1);
        }
        load(t1, e, n, i) {
            const r = this, s = new zo, a = new zh(this.manager);
            return a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setPath(this.path), a.setWithCredentials(r.withCredentials), a.load(t1, function(t1) {
                let n;
                try {
                    n = r.parse(t1);
                } catch (t1) {
                    if (void 0 === i) return void console.error(t1);
                    i(t1);
                }
                void 0 !== n.image ? s.image = n.image : void 0 !== n.data && (s.image.width = n.width, s.image.height = n.height, s.image.data = n.data), s.wrapS = void 0 !== n.wrapS ? n.wrapS : C, s.wrapT = void 0 !== n.wrapT ? n.wrapT : C, s.magFilter = void 0 !== n.magFilter ? n.magFilter : D, s.minFilter = void 0 !== n.minFilter ? n.minFilter : D, s.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1, void 0 !== n.colorSpace ? s.colorSpace = n.colorSpace : void 0 !== n.encoding && (s.encoding = n.encoding), void 0 !== n.flipY && (s.flipY = n.flipY), void 0 !== n.format && (s.format = n.format), void 0 !== n.type && (s.type = n.type), void 0 !== n.mipmaps && (s.mipmaps = n.mipmaps, s.minFilter = O), 1 === n.mipmapCount && (s.minFilter = D), void 0 !== n.generateMipmaps && (s.generateMipmaps = n.generateMipmaps), s.needsUpdate = !0, e && e(s, n);
            }, n, i), s;
        }
    }, t1.DataUtils = vi, t1.DecrementStencilOp = 7683, t1.DecrementWrapStencilOp = 34056, t1.DefaultLoadingManager = Nh, t1.DepthFormat = q, t1.DepthStencilFormat = Y, t1.DepthTexture = ns, t1.DetachedBindMode = M, t1.DirectionalLight = eu, t1.DirectionalLightHelper = class extends jn {
        constructor(t1, e, n){
            super(), this.light = t1, this.matrix = t1.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, this.type = "DirectionalLightHelper", void 0 === e && (e = 1);
            let i = new Ii;
            i.setAttribute("position", new Ti([
                -e,
                e,
                0,
                e,
                e,
                0,
                e,
                -e,
                0,
                -e,
                -e,
                0,
                -e,
                e,
                0
            ], 3));
            const r = new fl({
                fog: !1,
                toneMapped: !1
            });
            this.lightPlane = new Ml(i, r), this.add(this.lightPlane), i = new Ii, i.setAttribute("position", new Ti([
                0,
                0,
                0,
                0,
                0,
                1
            ], 3)), this.targetLine = new Ml(i, r), this.add(this.targetLine), this.update();
        }
        dispose() {
            this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
        }
        update() {
            this.light.updateWorldMatrix(!0, !1), this.light.target.updateWorldMatrix(!0, !1), td.setFromMatrixPosition(this.light.matrixWorld), ed.setFromMatrixPosition(this.light.target.matrixWorld), nd.subVectors(ed, td), this.lightPlane.lookAt(ed), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(ed), this.targetLine.scale.z = nd.length();
        }
    }, t1.DiscreteInterpolant = Sh, t1.DisplayP3ColorSpace = Vt, t1.DodecahedronGeometry = lc, t1.DoubleSide = 2, t1.DstAlphaFactor = 206, t1.DstColorFactor = 208, t1.DynamicCopyUsage = 35050, t1.DynamicDrawUsage = 35048, t1.DynamicReadUsage = 35049, t1.EdgesGeometry = pc, t1.EllipseCurve = Nl, t1.EqualCompare = 514, t1.EqualDepth = 4, t1.EqualStencilFunc = 514, t1.EquirectangularReflectionMapping = E, t1.EquirectangularRefractionMapping = w, t1.Euler = Pn, t1.EventDispatcher = te, t1.ExtrudeGeometry = kc, t1.FileLoader = zh, t1.Float16BufferAttribute = class extends Mi {
        constructor(t1, e, n){
            super(new Uint16Array(t1), e, n), this.isFloat16BufferAttribute = !0;
        }
        getX(t1) {
            let e = _i(this.array[t1 * this.itemSize]);
            return this.normalized && (e = ue(e, this.array)), e;
        }
        setX(t1, e) {
            return this.normalized && (e = de(e, this.array)), this.array[t1 * this.itemSize] = gi(e), this;
        }
        getY(t1) {
            let e = _i(this.array[t1 * this.itemSize + 1]);
            return this.normalized && (e = ue(e, this.array)), e;
        }
        setY(t1, e) {
            return this.normalized && (e = de(e, this.array)), this.array[t1 * this.itemSize + 1] = gi(e), this;
        }
        getZ(t1) {
            let e = _i(this.array[t1 * this.itemSize + 2]);
            return this.normalized && (e = ue(e, this.array)), e;
        }
        setZ(t1, e) {
            return this.normalized && (e = de(e, this.array)), this.array[t1 * this.itemSize + 2] = gi(e), this;
        }
        getW(t1) {
            let e = _i(this.array[t1 * this.itemSize + 3]);
            return this.normalized && (e = ue(e, this.array)), e;
        }
        setW(t1, e) {
            return this.normalized && (e = de(e, this.array)), this.array[t1 * this.itemSize + 3] = gi(e), this;
        }
        setXY(t1, e, n) {
            return t1 *= this.itemSize, this.normalized && (e = de(e, this.array), n = de(n, this.array)), this.array[t1 + 0] = gi(e), this.array[t1 + 1] = gi(n), this;
        }
        setXYZ(t1, e, n, i) {
            return t1 *= this.itemSize, this.normalized && (e = de(e, this.array), n = de(n, this.array), i = de(i, this.array)), this.array[t1 + 0] = gi(e), this.array[t1 + 1] = gi(n), this.array[t1 + 2] = gi(i), this;
        }
        setXYZW(t1, e, n, i, r) {
            return t1 *= this.itemSize, this.normalized && (e = de(e, this.array), n = de(n, this.array), i = de(i, this.array), r = de(r, this.array)), this.array[t1 + 0] = gi(e), this.array[t1 + 1] = gi(n), this.array[t1 + 2] = gi(i), this.array[t1 + 3] = gi(r), this;
        }
    }, t1.Float32BufferAttribute = Ti, t1.Float64BufferAttribute = class extends Mi {
        constructor(t1, e, n){
            super(new Float64Array(t1), e, n);
        }
    }, t1.FloatType = H, t1.Fog = io, t1.FogExp2 = no, t1.FramebufferTexture = class extends Fe {
        constructor(t1, e){
            super({
                width: t1,
                height: e
            }), this.isFramebufferTexture = !0, this.magFilter = P, this.minFilter = P, this.generateMipmaps = !1, this.needsUpdate = !0;
        }
    }, t1.FrontSide = s, t1.Frustum = gr, t1.GLBufferAttribute = class {
        constructor(t1, e, n, i, r){
            this.isGLBufferAttribute = !0, this.name = "", this.buffer = t1, this.type = e, this.itemSize = n, this.elementSize = i, this.count = r, this.version = 0;
        }
        set needsUpdate(t1) {
            !0 === t1 && this.version++;
        }
        setBuffer(t1) {
            return this.buffer = t1, this;
        }
        setType(t1, e) {
            return this.type = t1, this.elementSize = e, this;
        }
        setItemSize(t1) {
            return this.itemSize = t1, this;
        }
        setCount(t1) {
            return this.count = t1, this;
        }
    }, t1.GLSL1 = "100", t1.GLSL3 = Jt, t1.GreaterCompare = 516, t1.GreaterDepth = 6, t1.GreaterEqualCompare = 518, t1.GreaterEqualDepth = 5, t1.GreaterEqualStencilFunc = 518, t1.GreaterStencilFunc = 516, t1.GridHelper = class extends Tl {
        constructor(t1 = 10, e = 10, n = 4473924, i = 8947848){
            n = new ci(n), i = new ci(i);
            const r = e / 2, s = t1 / e, a = t1 / 2, o = [], l = [];
            for(let t1 = 0, c = 0, h = -a; t1 <= e; t1++, h += s){
                o.push(-a, 0, h, a, 0, h), o.push(h, 0, -a, h, 0, a);
                const e = t1 === r ? n : i;
                e.toArray(l, c), c += 3, e.toArray(l, c), c += 3, e.toArray(l, c), c += 3, e.toArray(l, c), c += 3;
            }
            const c = new Ii;
            c.setAttribute("position", new Ti(o, 3)), c.setAttribute("color", new Ti(l, 3));
            super(c, new fl({
                vertexColors: !0,
                toneMapped: !1
            })), this.type = "GridHelper";
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose();
        }
    }, t1.Group = Ya, t1.HalfFloatType = V, t1.HemisphereLight = Vh, t1.HemisphereLightHelper = class extends jn {
        constructor(t1, e, n){
            super(), this.light = t1, this.matrix = t1.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, this.type = "HemisphereLightHelper";
            const i = new jc(e);
            i.rotateY(.5 * Math.PI), this.material = new pi({
                wireframe: !0,
                fog: !1,
                toneMapped: !1
            }), void 0 === this.color && (this.material.vertexColors = !0);
            const r = i.getAttribute("position"), s = new Float32Array(3 * r.count);
            i.setAttribute("color", new Mi(s, 3)), this.add(new Ji(i, this.material)), this.update();
        }
        dispose() {
            this.children[0].geometry.dispose(), this.children[0].material.dispose();
        }
        update() {
            const t1 = this.children[0];
            if (void 0 !== this.color) this.material.color.set(this.color);
            else {
                const e = t1.geometry.getAttribute("color");
                $u.copy(this.light.color), Qu.copy(this.light.groundColor);
                for(let t1 = 0, n = e.count; t1 < n; t1++){
                    const i = t1 < n / 2 ? $u : Qu;
                    e.setXYZ(t1, i.r, i.g, i.b);
                }
                e.needsUpdate = !0;
            }
            this.light.updateWorldMatrix(!0, !1), t1.lookAt(Ku.setFromMatrixPosition(this.light.matrixWorld).negate());
        }
    }, t1.IcosahedronGeometry = Xc, t1.ImageBitmapLoader = class extends Oh {
        constructor(t1){
            super(t1), this.isImageBitmapLoader = !0, "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = {
                premultiplyAlpha: "none"
            };
        }
        setOptions(t1) {
            return this.options = t1, this;
        }
        load(t1, e, n, i) {
            void 0 === t1 && (t1 = ""), void 0 !== this.path && (t1 = this.path + t1), t1 = this.manager.resolveURL(t1);
            const r = this, s = Uh.get(t1);
            if (void 0 !== s) return r.manager.itemStart(t1), s.then ? void s.then((n)=>{
                e && e(n), r.manager.itemEnd(t1);
            }).catch((t1)=>{
                i && i(t1);
            }) : (setTimeout(function() {
                e && e(s), r.manager.itemEnd(t1);
            }, 0), s);
            const a = {};
            a.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include", a.headers = this.requestHeader;
            const o = fetch(t1, a).then(function(t1) {
                return t1.blob();
            }).then(function(t1) {
                return createImageBitmap(t1, Object.assign(r.options, {
                    colorSpaceConversion: "none"
                }));
            }).then(function(n) {
                return Uh.add(t1, n), e && e(n), r.manager.itemEnd(t1), n;
            }).catch(function(e) {
                i && i(e), Uh.remove(t1), r.manager.itemError(t1), r.manager.itemEnd(t1);
            });
            Uh.add(t1, o), r.manager.itemStart(t1);
        }
    }, t1.ImageLoader = Gh, t1.ImageUtils = Ie, t1.IncrementStencilOp = 7682, t1.IncrementWrapStencilOp = 34055, t1.InstancedBufferAttribute = ko, t1.InstancedBufferGeometry = lu, t1.InstancedInterleavedBuffer = class extends so {
        constructor(t1, e, n = 1){
            super(t1, e), this.isInstancedInterleavedBuffer = !0, this.meshPerAttribute = n;
        }
        copy(t1) {
            return super.copy(t1), this.meshPerAttribute = t1.meshPerAttribute, this;
        }
        clone(t1) {
            const e = super.clone(t1);
            return e.meshPerAttribute = this.meshPerAttribute, e;
        }
        toJSON(t1) {
            const e = super.toJSON(t1);
            return e.isInstancedInterleavedBuffer = !0, e.meshPerAttribute = this.meshPerAttribute, e;
        }
    }, t1.InstancedMesh = Ko, t1.Int16BufferAttribute = class extends Mi {
        constructor(t1, e, n){
            super(new Int16Array(t1), e, n);
        }
    }, t1.Int32BufferAttribute = class extends Mi {
        constructor(t1, e, n){
            super(new Int32Array(t1), e, n);
        }
    }, t1.Int8BufferAttribute = class extends Mi {
        constructor(t1, e, n){
            super(new Int8Array(t1), e, n);
        }
    }, t1.IntType = z, t1.InterleavedBuffer = so, t1.InterleavedBufferAttribute = oo, t1.Interpolant = xh, t1.InterpolateDiscrete = Ct, t1.InterpolateLinear = Lt, t1.InterpolateSmooth = Pt, t1.InvertStencilOp = 5386, t1.KeepStencilOp = Yt, t1.KeyframeTrack = bh, t1.LOD = Ao, t1.LatheGeometry = nc, t1.Layers = In, t1.LessCompare = 513, t1.LessDepth = 2, t1.LessEqualCompare = 515, t1.LessEqualDepth = 3, t1.LessEqualStencilFunc = 515, t1.LessStencilFunc = 513, t1.Light = Hh, t1.LightProbe = su, t1.Line = Ml, t1.Line3 = class {
        constructor(t1 = new We, e = new We){
            this.start = t1, this.end = e;
        }
        set(t1, e) {
            return this.start.copy(t1), this.end.copy(e), this;
        }
        copy(t1) {
            return this.start.copy(t1.start), this.end.copy(t1.end), this;
        }
        getCenter(t1) {
            return t1.addVectors(this.start, this.end).multiplyScalar(.5);
        }
        delta(t1) {
            return t1.subVectors(this.end, this.start);
        }
        distanceSq() {
            return this.start.distanceToSquared(this.end);
        }
        distance() {
            return this.start.distanceTo(this.end);
        }
        at(t1, e) {
            return this.delta(e).multiplyScalar(t1).add(this.start);
        }
        closestPointToPointParameter(t1, e) {
            Wu.subVectors(t1, this.start), Xu.subVectors(this.end, this.start);
            const n = Xu.dot(Xu);
            let i = Xu.dot(Wu) / n;
            return e && (i = ae(i, 0, 1)), i;
        }
        closestPointToPoint(t1, e, n) {
            const i = this.closestPointToPointParameter(t1, e);
            return this.delta(n).multiplyScalar(i).add(this.start);
        }
        applyMatrix4(t1) {
            return this.start.applyMatrix4(t1), this.end.applyMatrix4(t1), this;
        }
        equals(t1) {
            return t1.start.equals(this.start) && t1.end.equals(this.end);
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }, t1.LineBasicMaterial = fl, t1.LineCurve = Yl, t1.LineCurve3 = Zl, t1.LineDashedMaterial = dh, t1.LineLoop = El, t1.LineSegments = Tl, t1.LinearDisplayP3ColorSpace = kt, t1.LinearEncoding = Ft, t1.LinearFilter = D, t1.LinearInterpolant = Mh, t1.LinearMipMapLinearFilter = 1008, t1.LinearMipMapNearestFilter = 1007, t1.LinearMipmapLinearFilter = O, t1.LinearMipmapNearestFilter = N, t1.LinearSRGBColorSpace = Ht, t1.LinearToneMapping = m, t1.LinearTransfer = Wt, t1.Loader = Oh, t1.LoaderUtils = ou, t1.LoadingManager = Dh, t1.LoopOnce = 2200, t1.LoopPingPong = 2202, t1.LoopRepeat = 2201, t1.LuminanceAlphaFormat = 1025, t1.LuminanceFormat = 1024, t1.MOUSE = {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2
    }, t1.Material = di, t1.MaterialLoader = au, t1.MathUtils = pe, t1.Matrix3 = fe, t1.Matrix4 = Mn, t1.MaxEquation = 104, t1.Mesh = Ji, t1.MeshBasicMaterial = pi, t1.MeshDepthMaterial = Ha, t1.MeshDistanceMaterial = Va, t1.MeshLambertMaterial = hh, t1.MeshMatcapMaterial = uh, t1.MeshNormalMaterial = ch, t1.MeshPhongMaterial = oh, t1.MeshPhysicalMaterial = ah, t1.MeshStandardMaterial = sh, t1.MeshToonMaterial = lh, t1.MinEquation = 103, t1.MirroredRepeatWrapping = L, t1.MixOperation = u, t1.MultiplyBlending = 4, t1.MultiplyOperation = h, t1.NearestFilter = P, t1.NearestMipMapLinearFilter = 1005, t1.NearestMipMapNearestFilter = 1004, t1.NearestMipmapLinearFilter = U, t1.NearestMipmapNearestFilter = I, t1.NeverCompare = 512, t1.NeverDepth = 0, t1.NeverStencilFunc = 512, t1.NoBlending = 0, t1.NoColorSpace = zt, t1.NoToneMapping = p, t1.NormalAnimationBlendMode = Nt, t1.NormalBlending = 1, t1.NotEqualCompare = 517, t1.NotEqualDepth = 7, t1.NotEqualStencilFunc = 517, t1.NumberKeyframeTrack = wh, t1.Object3D = jn, t1.ObjectLoader = class extends Oh {
        constructor(t1){
            super(t1);
        }
        load(t1, e, n, i) {
            const r = this, s = "" === this.path ? ou.extractUrlBase(t1) : this.path;
            this.resourcePath = this.resourcePath || s;
            const a = new zh(this.manager);
            a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(t1, function(n) {
                let s = null;
                try {
                    s = JSON.parse(n);
                } catch (e) {
                    return void 0 !== i && i(e), void console.error("THREE:ObjectLoader: Can't parse " + t1 + ".", e.message);
                }
                const a = s.metadata;
                if (void 0 === a || void 0 === a.type || "geometry" === a.type.toLowerCase()) return void 0 !== i && i(new Error("THREE.ObjectLoader: Can't load " + t1)), void console.error("THREE.ObjectLoader: Can't load " + t1);
                r.parse(s, e);
            }, n, i);
        }
        async loadAsync(t1, e) {
            const n = "" === this.path ? ou.extractUrlBase(t1) : this.path;
            this.resourcePath = this.resourcePath || n;
            const i = new zh(this.manager);
            i.setPath(this.path), i.setRequestHeader(this.requestHeader), i.setWithCredentials(this.withCredentials);
            const r = await i.loadAsync(t1, e), s = JSON.parse(r), a = s.metadata;
            if (void 0 === a || void 0 === a.type || "geometry" === a.type.toLowerCase()) throw new Error("THREE.ObjectLoader: Can't load " + t1);
            return await this.parseAsync(s);
        }
        parse(t1, e) {
            const n = this.parseAnimations(t1.animations), i = this.parseShapes(t1.shapes), r = this.parseGeometries(t1.geometries, i), s = this.parseImages(t1.images, function() {
                void 0 !== e && e(l);
            }), a = this.parseTextures(t1.textures, s), o = this.parseMaterials(t1.materials, a), l = this.parseObject(t1.object, r, o, a, n), c = this.parseSkeletons(t1.skeletons, l);
            if (this.bindSkeletons(l, c), void 0 !== e) {
                let t1 = !1;
                for(const e in s)if (s[e].data instanceof HTMLImageElement) {
                    t1 = !0;
                    break;
                }
                !1 === t1 && e(l);
            }
            return l;
        }
        async parseAsync(t1) {
            const e = this.parseAnimations(t1.animations), n = this.parseShapes(t1.shapes), i = this.parseGeometries(t1.geometries, n), r = await this.parseImagesAsync(t1.images), s = this.parseTextures(t1.textures, r), a = this.parseMaterials(t1.materials, s), o = this.parseObject(t1.object, i, a, s, e), l = this.parseSkeletons(t1.skeletons, o);
            return this.bindSkeletons(o, l), o;
        }
        parseShapes(t1) {
            const e = {};
            if (void 0 !== t1) for(let n = 0, i = t1.length; n < i; n++){
                const i = (new mc).fromJSON(t1[n]);
                e[i.uuid] = i;
            }
            return e;
        }
        parseSkeletons(t1, e) {
            const n = {}, i = {};
            if (e.traverse(function(t1) {
                t1.isBone && (i[t1.uuid] = t1);
            }), void 0 !== t1) for(let e = 0, r = t1.length; e < r; e++){
                const r = (new Vo).fromJSON(t1[e], i);
                n[r.uuid] = r;
            }
            return n;
        }
        parseGeometries(t1, e) {
            const n = {};
            if (void 0 !== t1) {
                const i = new cu;
                for(let r = 0, s = t1.length; r < s; r++){
                    let s;
                    const a = t1[r];
                    switch(a.type){
                        case "BufferGeometry":
                        case "InstancedBufferGeometry":
                            s = i.parse(a);
                            break;
                        default:
                            a.type in nh ? s = nh[a.type].fromJSON(a, e) : console.warn(`THREE.ObjectLoader: Unsupported geometry type "${a.type}"`);
                    }
                    s.uuid = a.uuid, void 0 !== a.name && (s.name = a.name), void 0 !== a.userData && (s.userData = a.userData), n[a.uuid] = s;
                }
            }
            return n;
        }
        parseMaterials(t1, e) {
            const n = {}, i = {};
            if (void 0 !== t1) {
                const r = new au;
                r.setTextures(e);
                for(let e = 0, s = t1.length; e < s; e++){
                    const s = t1[e];
                    void 0 === n[s.uuid] && (n[s.uuid] = r.parse(s)), i[s.uuid] = n[s.uuid];
                }
            }
            return i;
        }
        parseAnimations(t1) {
            const e = {};
            if (void 0 !== t1) for(let n = 0; n < t1.length; n++){
                const i = t1[n], r = Ph.parse(i);
                e[r.uuid] = r;
            }
            return e;
        }
        parseImages(t1, e) {
            const n = this, i = {};
            let r;
            function s(t1) {
                if ("string" == typeof t1) {
                    const e = t1;
                    return function(t1) {
                        return n.manager.itemStart(t1), r.load(t1, function() {
                            n.manager.itemEnd(t1);
                        }, void 0, function() {
                            n.manager.itemError(t1), n.manager.itemEnd(t1);
                        });
                    }(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(e) ? e : n.resourcePath + e);
                }
                return t1.data ? {
                    data: xe(t1.type, t1.data),
                    width: t1.width,
                    height: t1.height
                } : null;
            }
            if (void 0 !== t1 && t1.length > 0) {
                const n = new Dh(e);
                r = new Gh(n), r.setCrossOrigin(this.crossOrigin);
                for(let e = 0, n = t1.length; e < n; e++){
                    const n = t1[e], r = n.url;
                    if (Array.isArray(r)) {
                        const t1 = [];
                        for(let e = 0, n = r.length; e < n; e++){
                            const n = s(r[e]);
                            null !== n && (n instanceof HTMLImageElement ? t1.push(n) : t1.push(new zo(n.data, n.width, n.height)));
                        }
                        i[n.uuid] = new De(t1);
                    } else {
                        const t1 = s(n.url);
                        i[n.uuid] = new De(t1);
                    }
                }
            }
            return i;
        }
        async parseImagesAsync(t1) {
            const e = this, n = {};
            let i;
            async function r(t1) {
                if ("string" == typeof t1) {
                    const n = t1, r = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(n) ? n : e.resourcePath + n;
                    return await i.loadAsync(r);
                }
                return t1.data ? {
                    data: xe(t1.type, t1.data),
                    width: t1.width,
                    height: t1.height
                } : null;
            }
            if (void 0 !== t1 && t1.length > 0) {
                i = new Gh(this.manager), i.setCrossOrigin(this.crossOrigin);
                for(let e = 0, i = t1.length; e < i; e++){
                    const i = t1[e], s = i.url;
                    if (Array.isArray(s)) {
                        const t1 = [];
                        for(let e = 0, n = s.length; e < n; e++){
                            const n = s[e], i = await r(n);
                            null !== i && (i instanceof HTMLImageElement ? t1.push(i) : t1.push(new zo(i.data, i.width, i.height)));
                        }
                        n[i.uuid] = new De(t1);
                    } else {
                        const t1 = await r(i.url);
                        n[i.uuid] = new De(t1);
                    }
                }
            }
            return n;
        }
        parseTextures(t1, e) {
            function n(t1, e) {
                return "number" == typeof t1 ? t1 : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t1), e[t1]);
            }
            const i = {};
            if (void 0 !== t1) for(let r = 0, s = t1.length; r < s; r++){
                const s = t1[r];
                void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === e[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image);
                const a = e[s.image], o = a.data;
                let l;
                Array.isArray(o) ? (l = new lr, 6 === o.length && (l.needsUpdate = !0)) : (l = o && o.data ? new zo : new Fe, o && (l.needsUpdate = !0)), l.source = a, l.uuid = s.uuid, void 0 !== s.name && (l.name = s.name), void 0 !== s.mapping && (l.mapping = n(s.mapping, hu)), void 0 !== s.channel && (l.channel = s.channel), void 0 !== s.offset && l.offset.fromArray(s.offset), void 0 !== s.repeat && l.repeat.fromArray(s.repeat), void 0 !== s.center && l.center.fromArray(s.center), void 0 !== s.rotation && (l.rotation = s.rotation), void 0 !== s.wrap && (l.wrapS = n(s.wrap[0], uu), l.wrapT = n(s.wrap[1], uu)), void 0 !== s.format && (l.format = s.format), void 0 !== s.internalFormat && (l.internalFormat = s.internalFormat), void 0 !== s.type && (l.type = s.type), void 0 !== s.colorSpace && (l.colorSpace = s.colorSpace), void 0 !== s.encoding && (l.encoding = s.encoding), void 0 !== s.minFilter && (l.minFilter = n(s.minFilter, du)), void 0 !== s.magFilter && (l.magFilter = n(s.magFilter, du)), void 0 !== s.anisotropy && (l.anisotropy = s.anisotropy), void 0 !== s.flipY && (l.flipY = s.flipY), void 0 !== s.generateMipmaps && (l.generateMipmaps = s.generateMipmaps), void 0 !== s.premultiplyAlpha && (l.premultiplyAlpha = s.premultiplyAlpha), void 0 !== s.unpackAlignment && (l.unpackAlignment = s.unpackAlignment), void 0 !== s.compareFunction && (l.compareFunction = s.compareFunction), void 0 !== s.userData && (l.userData = s.userData), i[s.uuid] = l;
            }
            return i;
        }
        parseObject(t1, e, n, i, r) {
            let s, a, o;
            function l(t1) {
                return void 0 === e[t1] && console.warn("THREE.ObjectLoader: Undefined geometry", t1), e[t1];
            }
            function c(t1) {
                if (void 0 !== t1) {
                    if (Array.isArray(t1)) {
                        const e = [];
                        for(let i = 0, r = t1.length; i < r; i++){
                            const r = t1[i];
                            void 0 === n[r] && console.warn("THREE.ObjectLoader: Undefined material", r), e.push(n[r]);
                        }
                        return e;
                    }
                    return void 0 === n[t1] && console.warn("THREE.ObjectLoader: Undefined material", t1), n[t1];
                }
            }
            function h(t1) {
                return void 0 === i[t1] && console.warn("THREE.ObjectLoader: Undefined texture", t1), i[t1];
            }
            switch(t1.type){
                case "Scene":
                    s = new ro, void 0 !== t1.background && (Number.isInteger(t1.background) ? s.background = new ci(t1.background) : s.background = h(t1.background)), void 0 !== t1.environment && (s.environment = h(t1.environment)), void 0 !== t1.fog && ("Fog" === t1.fog.type ? s.fog = new io(t1.fog.color, t1.fog.near, t1.fog.far) : "FogExp2" === t1.fog.type && (s.fog = new no(t1.fog.color, t1.fog.density)), "" !== t1.fog.name && (s.fog.name = t1.fog.name)), void 0 !== t1.backgroundBlurriness && (s.backgroundBlurriness = t1.backgroundBlurriness), void 0 !== t1.backgroundIntensity && (s.backgroundIntensity = t1.backgroundIntensity);
                    break;
                case "PerspectiveCamera":
                    s = new sr(t1.fov, t1.aspect, t1.near, t1.far), void 0 !== t1.focus && (s.focus = t1.focus), void 0 !== t1.zoom && (s.zoom = t1.zoom), void 0 !== t1.filmGauge && (s.filmGauge = t1.filmGauge), void 0 !== t1.filmOffset && (s.filmOffset = t1.filmOffset), void 0 !== t1.view && (s.view = Object.assign({}, t1.view));
                    break;
                case "OrthographicCamera":
                    s = new Lr(t1.left, t1.right, t1.top, t1.bottom, t1.near, t1.far), void 0 !== t1.zoom && (s.zoom = t1.zoom), void 0 !== t1.view && (s.view = Object.assign({}, t1.view));
                    break;
                case "AmbientLight":
                    s = new nu(t1.color, t1.intensity);
                    break;
                case "DirectionalLight":
                    s = new eu(t1.color, t1.intensity);
                    break;
                case "PointLight":
                    s = new Qh(t1.color, t1.intensity, t1.distance, t1.decay);
                    break;
                case "RectAreaLight":
                    s = new iu(t1.color, t1.intensity, t1.width, t1.height);
                    break;
                case "SpotLight":
                    s = new Yh(t1.color, t1.intensity, t1.distance, t1.angle, t1.penumbra, t1.decay);
                    break;
                case "HemisphereLight":
                    s = new Vh(t1.color, t1.groundColor, t1.intensity);
                    break;
                case "LightProbe":
                    s = (new su).fromJSON(t1);
                    break;
                case "SkinnedMesh":
                    a = l(t1.geometry), o = c(t1.material), s = new Fo(a, o), void 0 !== t1.bindMode && (s.bindMode = t1.bindMode), void 0 !== t1.bindMatrix && s.bindMatrix.fromArray(t1.bindMatrix), void 0 !== t1.skeleton && (s.skeleton = t1.skeleton);
                    break;
                case "Mesh":
                    a = l(t1.geometry), o = c(t1.material), s = new Ji(a, o);
                    break;
                case "InstancedMesh":
                    a = l(t1.geometry), o = c(t1.material);
                    const e1 = t1.count, n1 = t1.instanceMatrix, i1 = t1.instanceColor;
                    s = new Ko(a, o, e1), s.instanceMatrix = new ko(new Float32Array(n1.array), 16), void 0 !== i1 && (s.instanceColor = new ko(new Float32Array(i1.array), i1.itemSize));
                    break;
                case "BatchedMesh":
                    a = l(t1.geometry), o = c(t1.material), s = new ml(t1.maxGeometryCount, t1.maxVertexCount, t1.maxIndexCount, o), s.geometry = a, s.perObjectFrustumCulled = t1.perObjectFrustumCulled, s.sortObjects = t1.sortObjects, s._drawRanges = t1.drawRanges, s._reservedRanges = t1.reservedRanges, s._visibility = t1.visibility, s._active = t1.active, s._bounds = t1.bounds.map((t1)=>{
                        const e = new qe;
                        e.min.fromArray(t1.boxMin), e.max.fromArray(t1.boxMax);
                        const n = new dn;
                        return n.radius = t1.sphereRadius, n.center.fromArray(t1.sphereCenter), {
                            boxInitialized: t1.boxInitialized,
                            box: e,
                            sphereInitialized: t1.sphereInitialized,
                            sphere: n
                        };
                    }), s._maxGeometryCount = t1.maxGeometryCount, s._maxVertexCount = t1.maxVertexCount, s._maxIndexCount = t1.maxIndexCount, s._geometryInitialized = t1.geometryInitialized, s._geometryCount = t1.geometryCount, s._matricesTexture = h(t1.matricesTexture.uuid);
                    break;
                case "LOD":
                    s = new Ao;
                    break;
                case "Line":
                    s = new Ml(l(t1.geometry), c(t1.material));
                    break;
                case "LineLoop":
                    s = new El(l(t1.geometry), c(t1.material));
                    break;
                case "LineSegments":
                    s = new Tl(l(t1.geometry), c(t1.material));
                    break;
                case "PointCloud":
                case "Points":
                    s = new Pl(l(t1.geometry), c(t1.material));
                    break;
                case "Sprite":
                    s = new bo(c(t1.material));
                    break;
                case "Group":
                    s = new Ya;
                    break;
                case "Bone":
                    s = new Bo;
                    break;
                default:
                    s = new jn;
            }
            if (s.uuid = t1.uuid, void 0 !== t1.name && (s.name = t1.name), void 0 !== t1.matrix ? (s.matrix.fromArray(t1.matrix), void 0 !== t1.matrixAutoUpdate && (s.matrixAutoUpdate = t1.matrixAutoUpdate), s.matrixAutoUpdate && s.matrix.decompose(s.position, s.quaternion, s.scale)) : (void 0 !== t1.position && s.position.fromArray(t1.position), void 0 !== t1.rotation && s.rotation.fromArray(t1.rotation), void 0 !== t1.quaternion && s.quaternion.fromArray(t1.quaternion), void 0 !== t1.scale && s.scale.fromArray(t1.scale)), void 0 !== t1.up && s.up.fromArray(t1.up), void 0 !== t1.castShadow && (s.castShadow = t1.castShadow), void 0 !== t1.receiveShadow && (s.receiveShadow = t1.receiveShadow), t1.shadow && (void 0 !== t1.shadow.bias && (s.shadow.bias = t1.shadow.bias), void 0 !== t1.shadow.normalBias && (s.shadow.normalBias = t1.shadow.normalBias), void 0 !== t1.shadow.radius && (s.shadow.radius = t1.shadow.radius), void 0 !== t1.shadow.mapSize && s.shadow.mapSize.fromArray(t1.shadow.mapSize), void 0 !== t1.shadow.camera && (s.shadow.camera = this.parseObject(t1.shadow.camera))), void 0 !== t1.visible && (s.visible = t1.visible), void 0 !== t1.frustumCulled && (s.frustumCulled = t1.frustumCulled), void 0 !== t1.renderOrder && (s.renderOrder = t1.renderOrder), void 0 !== t1.userData && (s.userData = t1.userData), void 0 !== t1.layers && (s.layers.mask = t1.layers), void 0 !== t1.children) {
                const a = t1.children;
                for(let t1 = 0; t1 < a.length; t1++)s.add(this.parseObject(a[t1], e, n, i, r));
            }
            if (void 0 !== t1.animations) {
                const e = t1.animations;
                for(let t1 = 0; t1 < e.length; t1++){
                    const n = e[t1];
                    s.animations.push(r[n]);
                }
            }
            if ("LOD" === t1.type) {
                void 0 !== t1.autoUpdate && (s.autoUpdate = t1.autoUpdate);
                const e = t1.levels;
                for(let t1 = 0; t1 < e.length; t1++){
                    const n = e[t1], i = s.getObjectByProperty("uuid", n.object);
                    void 0 !== i && s.addLevel(i, n.distance, n.hysteresis);
                }
            }
            return s;
        }
        bindSkeletons(t1, e) {
            0 !== Object.keys(e).length && t1.traverse(function(t1) {
                if (!0 === t1.isSkinnedMesh && void 0 !== t1.skeleton) {
                    const n = e[t1.skeleton];
                    void 0 === n ? console.warn("THREE.ObjectLoader: No skeleton found with UUID:", t1.skeleton) : t1.bind(n, t1.bindMatrix);
                }
            });
        }
    }, t1.ObjectSpaceNormalMap = 1, t1.OctahedronGeometry = jc, t1.OneFactor = 201, t1.OneMinusConstantAlphaFactor = 214, t1.OneMinusConstantColorFactor = 212, t1.OneMinusDstAlphaFactor = 207, t1.OneMinusDstColorFactor = 209, t1.OneMinusSrcAlphaFactor = c, t1.OneMinusSrcColorFactor = 203, t1.OrthographicCamera = Lr, t1.P3Primaries = qt, t1.PCFShadowMap = n, t1.PCFSoftShadowMap = i, t1.PMREMGenerator = Hr, t1.Path = ec, t1.PerspectiveCamera = sr, t1.Plane = pr, t1.PlaneGeometry = xr, t1.PlaneHelper = class extends Ml {
        constructor(t1, e = 1, n = 16776960){
            const i = n, r = new Ii;
            r.setAttribute("position", new Ti([
                1,
                -1,
                0,
                -1,
                1,
                0,
                -1,
                -1,
                0,
                1,
                1,
                0,
                -1,
                1,
                0,
                -1,
                -1,
                0,
                1,
                -1,
                0,
                1,
                1,
                0
            ], 3)), r.computeBoundingSphere(), super(r, new fl({
                color: i,
                toneMapped: !1
            })), this.type = "PlaneHelper", this.plane = t1, this.size = e;
            const s = new Ii;
            s.setAttribute("position", new Ti([
                1,
                1,
                0,
                -1,
                1,
                0,
                -1,
                -1,
                0,
                1,
                1,
                0,
                -1,
                -1,
                0,
                1,
                -1,
                0
            ], 3)), s.computeBoundingSphere(), this.add(new Ji(s, new pi({
                color: i,
                opacity: .2,
                transparent: !0,
                depthWrite: !1,
                toneMapped: !1
            })));
        }
        updateMatrixWorld(t1) {
            this.position.set(0, 0, 0), this.scale.set(.5 * this.size, .5 * this.size, 1), this.lookAt(this.plane.normal), this.translateZ(-this.plane.constant), super.updateMatrixWorld(t1);
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose(), this.children[0].geometry.dispose(), this.children[0].material.dispose();
        }
    }, t1.PointLight = Qh, t1.PointLightHelper = class extends Ji {
        constructor(t1, e, n){
            super(new Zc(e, 4, 2), new pi({
                wireframe: !0,
                fog: !1,
                toneMapped: !1
            })), this.light = t1, this.color = n, this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update();
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose();
        }
        update() {
            this.light.updateWorldMatrix(!0, !1), void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
        }
    }, t1.Points = Pl, t1.PointsMaterial = wl, t1.PolarGridHelper = class extends Tl {
        constructor(t1 = 10, e = 16, n = 8, i = 64, r = 4473924, s = 8947848){
            r = new ci(r), s = new ci(s);
            const a = [], o = [];
            if (e > 1) for(let n = 0; n < e; n++){
                const i = n / e * (2 * Math.PI), l = Math.sin(i) * t1, c = Math.cos(i) * t1;
                a.push(0, 0, 0), a.push(l, 0, c);
                const h = 1 & n ? r : s;
                o.push(h.r, h.g, h.b), o.push(h.r, h.g, h.b);
            }
            for(let e = 0; e < n; e++){
                const l = 1 & e ? r : s, c = t1 - t1 / n * e;
                for(let t1 = 0; t1 < i; t1++){
                    let e = t1 / i * (2 * Math.PI), n = Math.sin(e) * c, r = Math.cos(e) * c;
                    a.push(n, 0, r), o.push(l.r, l.g, l.b), e = (t1 + 1) / i * (2 * Math.PI), n = Math.sin(e) * c, r = Math.cos(e) * c, a.push(n, 0, r), o.push(l.r, l.g, l.b);
                }
            }
            const l = new Ii;
            l.setAttribute("position", new Ti(a, 3)), l.setAttribute("color", new Ti(o, 3));
            super(l, new fl({
                vertexColors: !0,
                toneMapped: !1
            })), this.type = "PolarGridHelper";
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose();
        }
    }, t1.PolyhedronGeometry = oc, t1.PositionalAudio = class extends Tu {
        constructor(t1){
            super(t1), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain);
        }
        connect() {
            super.connect(), this.panner.connect(this.gain);
        }
        disconnect() {
            super.disconnect(), this.panner.disconnect(this.gain);
        }
        getOutput() {
            return this.panner;
        }
        getRefDistance() {
            return this.panner.refDistance;
        }
        setRefDistance(t1) {
            return this.panner.refDistance = t1, this;
        }
        getRolloffFactor() {
            return this.panner.rolloffFactor;
        }
        setRolloffFactor(t1) {
            return this.panner.rolloffFactor = t1, this;
        }
        getDistanceModel() {
            return this.panner.distanceModel;
        }
        setDistanceModel(t1) {
            return this.panner.distanceModel = t1, this;
        }
        getMaxDistance() {
            return this.panner.maxDistance;
        }
        setMaxDistance(t1) {
            return this.panner.maxDistance = t1, this;
        }
        setDirectionalCone(t1, e, n) {
            return this.panner.coneInnerAngle = t1, this.panner.coneOuterAngle = e, this.panner.coneOuterGain = n, this;
        }
        updateMatrixWorld(t1) {
            if (super.updateMatrixWorld(t1), !0 === this.hasPlaybackControl && !1 === this.isPlaying) return;
            this.matrixWorld.decompose(Eu, wu, Au), Ru.set(0, 0, 1).applyQuaternion(wu);
            const e = this.panner;
            if (e.positionX) {
                const t1 = this.context.currentTime + this.listener.timeDelta;
                e.positionX.linearRampToValueAtTime(Eu.x, t1), e.positionY.linearRampToValueAtTime(Eu.y, t1), e.positionZ.linearRampToValueAtTime(Eu.z, t1), e.orientationX.linearRampToValueAtTime(Ru.x, t1), e.orientationY.linearRampToValueAtTime(Ru.y, t1), e.orientationZ.linearRampToValueAtTime(Ru.z, t1);
            } else e.setPosition(Eu.x, Eu.y, Eu.z), e.setOrientation(Ru.x, Ru.y, Ru.z);
        }
    }, t1.PropertyBinding = Ou, t1.PropertyMixer = Cu, t1.QuadraticBezierCurve = Jl, t1.QuadraticBezierCurve3 = Kl, t1.Quaternion = ke, t1.QuaternionKeyframeTrack = Rh, t1.QuaternionLinearInterpolant = Ah, t1.RED_GREEN_RGTC2_Format = At, t1.RED_RGTC1_Format = 36283, t1.REVISION = e, t1.RGBADepthPacking = 3201, t1.RGBAFormat = j, t1.RGBAIntegerFormat = K, t1.RGBA_ASTC_10x10_Format = yt, t1.RGBA_ASTC_10x5_Format = _t, t1.RGBA_ASTC_10x6_Format = vt, t1.RGBA_ASTC_10x8_Format = xt, t1.RGBA_ASTC_12x10_Format = Mt, t1.RGBA_ASTC_12x12_Format = St, t1.RGBA_ASTC_4x4_Format = ct, t1.RGBA_ASTC_5x4_Format = ht, t1.RGBA_ASTC_5x5_Format = ut, t1.RGBA_ASTC_6x5_Format = dt, t1.RGBA_ASTC_6x6_Format = pt, t1.RGBA_ASTC_8x5_Format = mt, t1.RGBA_ASTC_8x6_Format = ft, t1.RGBA_ASTC_8x8_Format = gt, t1.RGBA_BPTC_Format = bt, t1.RGBA_ETC2_EAC_Format = lt, t1.RGBA_PVRTC_2BPPV1_Format = st, t1.RGBA_PVRTC_4BPPV1_Format = rt, t1.RGBA_S3TC_DXT1_Format = Q, t1.RGBA_S3TC_DXT3_Format = tt, t1.RGBA_S3TC_DXT5_Format = et, t1.RGB_BPTC_SIGNED_Format = Tt, t1.RGB_BPTC_UNSIGNED_Format = Et, t1.RGB_ETC1_Format = at, t1.RGB_ETC2_Format = ot, t1.RGB_PVRTC_2BPPV1_Format = it, t1.RGB_PVRTC_4BPPV1_Format = nt, t1.RGB_S3TC_DXT1_Format = $, t1.RGFormat = 1030, t1.RGIntegerFormat = J, t1.RawShaderMaterial = rh, t1.Ray = yn, t1.Raycaster = class {
        constructor(t1, e, n = 0, i = 1 / 0){
            this.ray = new yn(t1, e), this.near = n, this.far = i, this.camera = null, this.layers = new In, this.params = {
                Mesh: {},
                Line: {
                    threshold: 1
                },
                LOD: {},
                Points: {
                    threshold: 1
                },
                Sprite: {}
            };
        }
        set(t1, e) {
            this.ray.set(t1, e);
        }
        setFromCamera(t1, e) {
            e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t1.x, t1.y, .5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e.isOrthographicCamera ? (this.ray.origin.set(t1.x, t1.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type);
        }
        intersectObject(t1, e = !0, n = []) {
            return Vu(t1, this, n, e), n.sort(Hu), n;
        }
        intersectObjects(t1, e = !0, n = []) {
            for(let i = 0, r = t1.length; i < r; i++)Vu(t1[i], this, n, e);
            return n.sort(Hu), n;
        }
    }, t1.Rec709Primaries = jt, t1.RectAreaLight = iu, t1.RedFormat = 1028, t1.RedIntegerFormat = Z, t1.ReinhardToneMapping = f, t1.RenderTarget = ze, t1.RepeatWrapping = R, t1.ReplaceStencilOp = 7681, t1.ReverseSubtractEquation = 102, t1.RingGeometry = qc, t1.SIGNED_RED_GREEN_RGTC2_Format = Rt, t1.SIGNED_RED_RGTC1_Format = wt, t1.SRGBColorSpace = Gt, t1.SRGBTransfer = Xt, t1.Scene = ro, t1.ShaderChunk = yr, t1.ShaderLib = Sr, t1.ShaderMaterial = ir, t1.ShadowMaterial = ih, t1.Shape = mc, t1.ShapeGeometry = Yc, t1.ShapePath = class {
        constructor(){
            this.type = "ShapePath", this.color = new ci, this.subPaths = [], this.currentPath = null;
        }
        moveTo(t1, e) {
            return this.currentPath = new ec, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t1, e), this;
        }
        lineTo(t1, e) {
            return this.currentPath.lineTo(t1, e), this;
        }
        quadraticCurveTo(t1, e, n, i) {
            return this.currentPath.quadraticCurveTo(t1, e, n, i), this;
        }
        bezierCurveTo(t1, e, n, i, r, s) {
            return this.currentPath.bezierCurveTo(t1, e, n, i, r, s), this;
        }
        splineThru(t1) {
            return this.currentPath.splineThru(t1), this;
        }
        toShapes(t1) {
            function e(t1, e) {
                const n = e.length;
                let i = !1;
                for(let r = n - 1, s = 0; s < n; r = s++){
                    let n = e[r], a = e[s], o = a.x - n.x, l = a.y - n.y;
                    if (Math.abs(l) > Number.EPSILON) {
                        if (l < 0 && (n = e[s], o = -o, a = e[r], l = -l), t1.y < n.y || t1.y > a.y) continue;
                        if (t1.y === n.y) {
                            if (t1.x === n.x) return !0;
                        } else {
                            const e = l * (t1.x - n.x) - o * (t1.y - n.y);
                            if (0 === e) return !0;
                            if (e < 0) continue;
                            i = !i;
                        }
                    } else {
                        if (t1.y !== n.y) continue;
                        if (a.x <= t1.x && t1.x <= n.x || n.x <= t1.x && t1.x <= a.x) return !0;
                    }
                }
                return i;
            }
            const n = Gc.isClockWise, i = this.subPaths;
            if (0 === i.length) return [];
            let r, s, a;
            const o = [];
            if (1 === i.length) return s = i[0], a = new mc, a.curves = s.curves, o.push(a), o;
            let l = !n(i[0].getPoints());
            l = t1 ? !l : l;
            const c = [], h = [];
            let u, d, p = [], m = 0;
            h[m] = void 0, p[m] = [];
            for(let e = 0, a = i.length; e < a; e++)s = i[e], u = s.getPoints(), r = n(u), r = t1 ? !r : r, r ? (!l && h[m] && m++, h[m] = {
                s: new mc,
                p: u
            }, h[m].s.curves = s.curves, l && m++, p[m] = []) : p[m].push({
                h: s,
                p: u[0]
            });
            if (!h[0]) return function(t1) {
                const e = [];
                for(let n = 0, i = t1.length; n < i; n++){
                    const i = t1[n], r = new mc;
                    r.curves = i.curves, e.push(r);
                }
                return e;
            }(i);
            if (h.length > 1) {
                let t1 = !1, n = 0;
                for(let t1 = 0, e = h.length; t1 < e; t1++)c[t1] = [];
                for(let i = 0, r = h.length; i < r; i++){
                    const r = p[i];
                    for(let s = 0; s < r.length; s++){
                        const a = r[s];
                        let o = !0;
                        for(let r = 0; r < h.length; r++)e(a.p, h[r].p) && (i !== r && n++, o ? (o = !1, c[r].push(a)) : t1 = !0);
                        o && c[i].push(a);
                    }
                }
                n > 0 && !1 === t1 && (p = c);
            }
            for(let t1 = 0, e = h.length; t1 < e; t1++){
                a = h[t1].s, o.push(a), d = p[t1];
                for(let t1 = 0, e = d.length; t1 < e; t1++)a.holes.push(d[t1].h);
            }
            return o;
        }
    }, t1.ShapeUtils = Gc, t1.ShortType = 1011, t1.Skeleton = Vo, t1.SkeletonHelper = class extends Tl {
        constructor(t1){
            const e = Ju(t1), n = new Ii, i = [], r = [], s = new ci(0, 0, 1), a = new ci(0, 1, 0);
            for(let t1 = 0; t1 < e.length; t1++){
                const n = e[t1];
                n.parent && n.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), r.push(s.r, s.g, s.b), r.push(a.r, a.g, a.b));
            }
            n.setAttribute("position", new Ti(i, 3)), n.setAttribute("color", new Ti(r, 3));
            super(n, new fl({
                vertexColors: !0,
                depthTest: !1,
                depthWrite: !1,
                toneMapped: !1,
                transparent: !0
            })), this.isSkeletonHelper = !0, this.type = "SkeletonHelper", this.root = t1, this.bones = e, this.matrix = t1.matrixWorld, this.matrixAutoUpdate = !1;
        }
        updateMatrixWorld(t1) {
            const e = this.bones, n = this.geometry, i = n.getAttribute("position");
            Zu.copy(this.root.matrixWorld).invert();
            for(let t1 = 0, n = 0; t1 < e.length; t1++){
                const r = e[t1];
                r.parent && r.parent.isBone && (Yu.multiplyMatrices(Zu, r.matrixWorld), qu.setFromMatrixPosition(Yu), i.setXYZ(n, qu.x, qu.y, qu.z), Yu.multiplyMatrices(Zu, r.parent.matrixWorld), qu.setFromMatrixPosition(Yu), i.setXYZ(n + 1, qu.x, qu.y, qu.z), n += 2);
            }
            n.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(t1);
        }
        dispose() {
            this.geometry.dispose(), this.material.dispose();
        }
    }, t1.SkinnedMesh = Fo, t1.Source = De, t1.Sphere = dn, t1.SphereGeometry = Zc, t1.Spherical = class {
        constructor(t1 = 1, e = 0, n = 0){
            return this.radius = t1, this.phi = e, this.theta = n, this;
        }
        set(t1, e, n) {
            return this.radius = t1, this.phi = e, this.theta = n, this;
        }
        copy(t1) {
            return this.radius = t1.radius, this.phi = t1.phi, this.theta = t1.theta, this;
        }
        makeSafe() {
            const t1 = 1e-6;
            return this.phi = Math.max(t1, Math.min(Math.PI - t1, this.phi)), this;
        }
        setFromVector3(t1) {
            return this.setFromCartesianCoords(t1.x, t1.y, t1.z);
        }
        setFromCartesianCoords(t1, e, n) {
            return this.radius = Math.sqrt(t1 * t1 + e * e + n * n), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t1, n), this.phi = Math.acos(ae(e / this.radius, -1, 1))), this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }, t1.SphericalHarmonics3 = ru, t1.SplineCurve = $l, t1.SpotLight = Yh, t1.SpotLightHelper = class extends jn {
        constructor(t1, e){
            super(), this.light = t1, this.matrix = t1.matrixWorld, this.matrixAutoUpdate = !1, this.color = e, this.type = "SpotLightHelper";
            const n = new Ii, i = [
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1,
                0,
                1,
                0,
                0,
                0,
                -1,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                1,
                0,
                0,
                0,
                0,
                -1,
                1
            ];
            for(let t1 = 0, e = 1, n = 32; t1 < n; t1++, e++){
                const r = t1 / n * Math.PI * 2, s = e / n * Math.PI * 2;
                i.push(Math.cos(r), Math.sin(r), 1, Math.cos(s), Math.sin(s), 1);
            }
            n.setAttribute("position", new Ti(i, 3));
            const r = new fl({
                fog: !1,
                toneMapped: !1
            });
            this.cone = new Tl(n, r), this.add(this.cone), this.update();
        }
        dispose() {
            this.cone.geometry.dispose(), this.cone.material.dispose();
        }
        update() {
            this.light.updateWorldMatrix(!0, !1), this.light.target.updateWorldMatrix(!0, !1);
            const t1 = this.light.distance ? this.light.distance : 1e3, e = t1 * Math.tan(this.light.angle);
            this.cone.scale.set(e, e, t1), ju.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(ju), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
        }
    }, t1.Sprite = bo, t1.SpriteMaterial = lo, t1.SrcAlphaFactor = l, t1.SrcAlphaSaturateFactor = 210, t1.SrcColorFactor = 202, t1.StaticCopyUsage = 35046, t1.StaticDrawUsage = Zt, t1.StaticReadUsage = 35045, t1.StereoCamera = class {
        constructor(){
            this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new sr, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new sr, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
                focus: null,
                fov: null,
                aspect: null,
                near: null,
                far: null,
                zoom: null,
                eyeSep: null
            };
        }
        update(t1) {
            const e = this._cache;
            if (e.focus !== t1.focus || e.fov !== t1.fov || e.aspect !== t1.aspect * this.aspect || e.near !== t1.near || e.far !== t1.far || e.zoom !== t1.zoom || e.eyeSep !== this.eyeSep) {
                e.focus = t1.focus, e.fov = t1.fov, e.aspect = t1.aspect * this.aspect, e.near = t1.near, e.far = t1.far, e.zoom = t1.zoom, e.eyeSep = this.eyeSep, _u.copy(t1.projectionMatrix);
                const n = e.eyeSep / 2, i = n * e.near / e.focus, r = e.near * Math.tan(ie * e.fov * .5) / e.zoom;
                let s, a;
                gu.elements[12] = -n, fu.elements[12] = n, s = -r * e.aspect + i, a = r * e.aspect + i, _u.elements[0] = 2 * e.near / (a - s), _u.elements[8] = (a + s) / (a - s), this.cameraL.projectionMatrix.copy(_u), s = -r * e.aspect - i, a = r * e.aspect - i, _u.elements[0] = 2 * e.near / (a - s), _u.elements[8] = (a + s) / (a - s), this.cameraR.projectionMatrix.copy(_u);
            }
            this.cameraL.matrixWorld.copy(t1.matrixWorld).multiply(gu), this.cameraR.matrixWorld.copy(t1.matrixWorld).multiply(fu);
        }
    }, t1.StreamCopyUsage = 35042, t1.StreamDrawUsage = 35040, t1.StreamReadUsage = 35041, t1.StringKeyframeTrack = Ch, t1.SubtractEquation = 101, t1.SubtractiveBlending = 3, t1.TOUCH = {
        ROTATE: 0,
        PAN: 1,
        DOLLY_PAN: 2,
        DOLLY_ROTATE: 3
    }, t1.TangentSpaceNormalMap = 0, t1.TetrahedronGeometry = Jc, t1.Texture = Fe, t1.TextureLoader = class extends Oh {
        constructor(t1){
            super(t1);
        }
        load(t1, e, n, i) {
            const r = new Fe, s = new Gh(this.manager);
            return s.setCrossOrigin(this.crossOrigin), s.setPath(this.path), s.load(t1, function(t1) {
                r.image = t1, r.needsUpdate = !0, void 0 !== e && e(r);
            }, n, i), r;
        }
    }, t1.TorusGeometry = Kc, t1.TorusKnotGeometry = $c, t1.Triangle = ri, t1.TriangleFanDrawMode = 2, t1.TriangleStripDrawMode = 1, t1.TrianglesDrawMode = 0, t1.TubeGeometry = Qc, t1.TwoPassDoubleSide = 2, t1.UVMapping = S, t1.Uint16BufferAttribute = Si, t1.Uint32BufferAttribute = bi, t1.Uint8BufferAttribute = class extends Mi {
        constructor(t1, e, n){
            super(new Uint8Array(t1), e, n);
        }
    }, t1.Uint8ClampedBufferAttribute = class extends Mi {
        constructor(t1, e, n){
            super(new Uint8ClampedArray(t1), e, n);
        }
    }, t1.Uniform = zu, t1.UniformsGroup = class extends te {
        constructor(){
            super(), this.isUniformsGroup = !0, Object.defineProperty(this, "id", {
                value: Gu++
            }), this.name = "", this.usage = Zt, this.uniforms = [];
        }
        add(t1) {
            return this.uniforms.push(t1), this;
        }
        remove(t1) {
            const e = this.uniforms.indexOf(t1);
            return -1 !== e && this.uniforms.splice(e, 1), this;
        }
        setName(t1) {
            return this.name = t1, this;
        }
        setUsage(t1) {
            return this.usage = t1, this;
        }
        dispose() {
            return this.dispatchEvent({
                type: "dispose"
            }), this;
        }
        copy(t1) {
            this.name = t1.name, this.usage = t1.usage;
            const e = t1.uniforms;
            this.uniforms.length = 0;
            for(let t1 = 0, n = e.length; t1 < n; t1++){
                const n = Array.isArray(e[t1]) ? e[t1] : [
                    e[t1]
                ];
                for(let t1 = 0; t1 < n.length; t1++)this.uniforms.push(n[t1].clone());
            }
            return this;
        }
        clone() {
            return (new this.constructor).copy(this);
        }
    }, t1.UniformsLib = Mr, t1.UniformsUtils = nr, t1.UnsignedByteType = F, t1.UnsignedInt248Type = X, t1.UnsignedIntType = G, t1.UnsignedShort4444Type = k, t1.UnsignedShort5551Type = W, t1.UnsignedShortType = B, t1.VSMShadowMap = r, t1.Vector2 = me, t1.Vector3 = We, t1.Vector4 = Be, t1.VectorKeyframeTrack = Lh, t1.VideoTexture = class extends Fe {
        constructor(t1, e, n, i, r, s, a, o, l){
            super(t1, e, n, i, r, s, a, o, l), this.isVideoTexture = !0, this.minFilter = void 0 !== s ? s : D, this.magFilter = void 0 !== r ? r : D, this.generateMipmaps = !1;
            const c = this;
            "requestVideoFrameCallback" in t1 && t1.requestVideoFrameCallback(function e() {
                c.needsUpdate = !0, t1.requestVideoFrameCallback(e);
            });
        }
        clone() {
            return new this.constructor(this.image).copy(this);
        }
        update() {
            const t1 = this.image;
            !1 === "requestVideoFrameCallback" in t1 && t1.readyState >= t1.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
        }
    }, t1.WebGL1Renderer = eo, t1.WebGL3DRenderTarget = class extends Ge {
        constructor(t1 = 1, e = 1, n = 1, i = {}){
            super(t1, e, i), this.isWebGL3DRenderTarget = !0, this.depth = n, this.texture = new Ve(null, t1, e, n), this.texture.isRenderTargetTexture = !0;
        }
    }, t1.WebGLArrayRenderTarget = class extends Ge {
        constructor(t1 = 1, e = 1, n = 1, i = {}){
            super(t1, e, i), this.isWebGLArrayRenderTarget = !0, this.depth = n, this.texture = new He(null, t1, e, n), this.texture.isRenderTargetTexture = !0;
        }
    }, t1.WebGLCoordinateSystem = $t, t1.WebGLCubeRenderTarget = cr, t1.WebGLMultipleRenderTargets = class extends Ge {
        constructor(t1 = 1, e = 1, n = 1, i = {}){
            super(t1, e, i), this.isWebGLMultipleRenderTargets = !0;
            const r = this.texture;
            this.texture = [];
            for(let t1 = 0; t1 < n; t1++)this.texture[t1] = r.clone(), this.texture[t1].isRenderTargetTexture = !0;
        }
        setSize(t1, e, n = 1) {
            if (this.width !== t1 || this.height !== e || this.depth !== n) {
                this.width = t1, this.height = e, this.depth = n;
                for(let i = 0, r = this.texture.length; i < r; i++)this.texture[i].image.width = t1, this.texture[i].image.height = e, this.texture[i].image.depth = n;
                this.dispose();
            }
            this.viewport.set(0, 0, t1, e), this.scissor.set(0, 0, t1, e);
        }
        copy(t1) {
            this.dispose(), this.width = t1.width, this.height = t1.height, this.depth = t1.depth, this.scissor.copy(t1.scissor), this.scissorTest = t1.scissorTest, this.viewport.copy(t1.viewport), this.depthBuffer = t1.depthBuffer, this.stencilBuffer = t1.stencilBuffer, null !== t1.depthTexture && (this.depthTexture = t1.depthTexture.clone()), this.texture.length = 0;
            for(let e = 0, n = t1.texture.length; e < n; e++)this.texture[e] = t1.texture[e].clone(), this.texture[e].isRenderTargetTexture = !0;
            return this;
        }
    }, t1.WebGLRenderTarget = Ge, t1.WebGLRenderer = to, t1.WebGLUtils = ja, t1.WebGPUCoordinateSystem = Qt, t1.WireframeGeometry = th, t1.WrapAroundEnding = Dt, t1.ZeroCurvatureEnding = It, t1.ZeroFactor = 200, t1.ZeroSlopeEnding = Ut, t1.ZeroStencilOp = 0, t1._SRGBAFormat = Kt, t1.createCanvasElement = Me, t1.sRGBEncoding = Bt;
});

//# sourceMappingURL=race-game-threejs-master.67bac37c.js.map
