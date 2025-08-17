// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"83cC0":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "e7dd42b6b54fb7cf";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"40312":[function(require,module,exports,__globalThis) {
/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/THREE2-gltf-loader@1.111.0/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */ const THREE2 = require("6ca41e9e4b3950cd");
var _GLTFLoader = function() {
    function e(e) {
        THREE2.Loader.call(this, e), this.dracoLoader = null, this.ddsLoader = null;
    }
    function t() {
        var e = {};
        return {
            get: function(t) {
                return e[t];
            },
            add: function(t, r) {
                e[t] = r;
            },
            remove: function(t) {
                delete e[t];
            },
            removeAll: function() {
                e = {};
            }
        };
    }
    e.prototype = Object.assign(Object.create(THREE2.Loader.prototype), {
        constructor: e,
        load: function(e, t, r, a) {
            var n, s = this;
            n = "" !== this.resourcePath ? this.resourcePath : "" !== this.path ? this.path : THREE2.LoaderUtils.extractUrlBase(e), s.manager.itemStart(e);
            var i = function(t) {
                a ? a(t) : console.error(t), s.manager.itemError(e), s.manager.itemEnd(e);
            }, o = new THREE2.FileLoader(s.manager);
            o.setPath(this.path), o.setResponseType("arraybuffer"), "use-credentials" === s.crossOrigin && o.setWithCredentials(!0), o.load(e, function(r) {
                try {
                    s.parse(r, n, function(r) {
                        t(r), s.manager.itemEnd(e);
                    }, i);
                } catch (e) {
                    i(e);
                }
            }, r, i);
        },
        setDRACOLoader: function(e) {
            return this.dracoLoader = e, this;
        },
        setDDSLoader: function(e) {
            return this.ddsLoader = e, this;
        },
        parse: function(e, t, o, l) {
            var m, f = {};
            if ("string" == typeof e) m = e;
            else if (THREE2.LoaderUtils.decodeText(new Uint8Array(e, 0, 4)) === i) {
                try {
                    f[r.KHR_BINARY_GLTF] = new p(e);
                } catch (e) {
                    return void (l && l(e));
                }
                m = f[r.KHR_BINARY_GLTF].content;
            } else m = THREE2.LoaderUtils.decodeText(new Uint8Array(e));
            var v = JSON.parse(m);
            if (void 0 === v.asset || v.asset.version[0] < 2) l && l(new Error("THREE2.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
            else {
                if (v.extensionsUsed) for(var E = 0; E < v.extensionsUsed.length; ++E){
                    var T = v.extensionsUsed[E], g = v.extensionsRequired || [];
                    switch(T){
                        case r.KHR_LIGHTS_PUNCTUAL:
                            f[T] = new n(v);
                            break;
                        case r.KHR_MATERIALS_UNLIT:
                            f[T] = new s;
                            break;
                        case r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                            f[T] = new d;
                            break;
                        case r.KHR_DRACO_MESH_COMPRESSION:
                            f[T] = new u(v, this.dracoLoader);
                            break;
                        case r.MSFT_TEXTURE_DDS:
                            f[T] = new a(this.ddsLoader);
                            break;
                        case r.KHR_TEXTURE_TRANSFORM:
                            f[T] = new c;
                            break;
                        case r.KHR_MESH_QUANTIZATION:
                            f[T] = new h;
                            break;
                        default:
                            g.indexOf(T) >= 0 && console.warn('THREE2.GLTFLoader: Unknown extension "' + T + '".');
                    }
                }
                new D(v, f, {
                    path: t || this.resourcePath || "",
                    crossOrigin: this.crossOrigin,
                    manager: this.manager
                }).parse(o, l);
            }
        }
    });
    var r = {
        KHR_BINARY_GLTF: "KHR_binary_glTF",
        KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
        KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
        KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
        KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
        KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
        KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
        MSFT_TEXTURE_DDS: "MSFT_texture_dds"
    };
    function a(e) {
        if (!e) throw new Error("THREE2.GLTFLoader: Attempting to load .dds texture without importing THREE2.DDSLoader");
        this.name = r.MSFT_TEXTURE_DDS, this.ddsLoader = e;
    }
    function n(e) {
        this.name = r.KHR_LIGHTS_PUNCTUAL;
        var t = e.extensions && e.extensions[r.KHR_LIGHTS_PUNCTUAL] || {};
        this.lightDefs = t.lights || [];
    }
    function s() {
        this.name = r.KHR_MATERIALS_UNLIT;
    }
    n.prototype.loadLight = function(e) {
        var t, r = this.lightDefs[e], a = new THREE2.Color(16777215);
        void 0 !== r.color && a.fromArray(r.color);
        var n = void 0 !== r.range ? r.range : 0;
        switch(r.type){
            case "directional":
                (t = new THREE2.DirectionalLight(a)).target.position.set(0, 0, -1), t.add(t.target);
                break;
            case "point":
                (t = new THREE2.PointLight(a)).distance = n;
                break;
            case "spot":
                (t = new THREE2.SpotLight(a)).distance = n, r.spot = r.spot || {}, r.spot.innerConeAngle = void 0 !== r.spot.innerConeAngle ? r.spot.innerConeAngle : 0, r.spot.outerConeAngle = void 0 !== r.spot.outerConeAngle ? r.spot.outerConeAngle : Math.PI / 4, t.angle = r.spot.outerConeAngle, t.penumbra = 1 - r.spot.innerConeAngle / r.spot.outerConeAngle, t.target.position.set(0, 0, -1), t.add(t.target);
                break;
            default:
                throw new Error('THREE2.GLTFLoader: Unexpected light type, "' + r.type + '".');
        }
        return t.position.set(0, 0, 0), t.decay = 2, void 0 !== r.intensity && (t.intensity = r.intensity), t.name = r.name || "light_" + e, Promise.resolve(t);
    }, s.prototype.getMaterialType = function() {
        return THREE2.MeshBasicMaterial;
    }, s.prototype.extendParams = function(e, t, r) {
        var a = [];
        e.color = new THREE2.Color(1, 1, 1), e.opacity = 1;
        var n = t.pbrMetallicRoughness;
        if (n) {
            if (Array.isArray(n.baseColorFactor)) {
                var s = n.baseColorFactor;
                e.color.fromArray(s), e.opacity = s[3];
            }
            void 0 !== n.baseColorTexture && a.push(r.assignTexture(e, "map", n.baseColorTexture));
        }
        return Promise.all(a);
    };
    var i = "glTF", o = 12, l = {
        JSON: 1313821514,
        BIN: 5130562
    };
    function p(e) {
        this.name = r.KHR_BINARY_GLTF, this.content = null, this.body = null;
        var t = new DataView(e, 0, o);
        if (this.header = {
            magic: THREE2.LoaderUtils.decodeText(new Uint8Array(e.slice(0, 4))),
            version: t.getUint32(4, !0),
            length: t.getUint32(8, !0)
        }, this.header.magic !== i) throw new Error("THREE2.GLTFLoader: Unsupported glTF-Binary header.");
        if (this.header.version < 2) throw new Error("THREE2.GLTFLoader: Legacy binary file detected.");
        for(var a = new DataView(e, o), n = 0; n < a.byteLength;){
            var s = a.getUint32(n, !0);
            n += 4;
            var p = a.getUint32(n, !0);
            if (n += 4, p === l.JSON) {
                var u = new Uint8Array(e, o + n, s);
                this.content = THREE2.LoaderUtils.decodeText(u);
            } else if (p === l.BIN) {
                var c = o + n;
                this.body = e.slice(c, c + s);
            }
            n += s;
        }
        if (null === this.content) throw new Error("THREE2.GLTFLoader: JSON content not found.");
    }
    function u(e, t) {
        if (!t) throw new Error("THREE2.GLTFLoader: No DRACOLoader instance provided.");
        this.name = r.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t;
    }
    function c() {
        this.name = r.KHR_TEXTURE_TRANSFORM;
    }
    function d() {
        return {
            name: r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,
            specularGlossinessParams: [
                "color",
                "map",
                "lightMap",
                "lightMapIntensity",
                "aoMap",
                "aoMapIntensity",
                "emissive",
                "emissiveIntensity",
                "emissiveMap",
                "bumpMap",
                "bumpScale",
                "normalMap",
                "displacementMap",
                "displacementScale",
                "displacementBias",
                "specularMap",
                "specular",
                "glossinessMap",
                "glossiness",
                "alphaMap",
                "envMap",
                "envMapIntensity",
                "refractionRatio"
            ],
            getMaterialType: function() {
                return THREE2.ShaderMaterial;
            },
            extendParams: function(e, t, r) {
                var a = t.extensions[this.name], n = THREE2.ShaderLib.standard, s = THREE2.UniformsUtils.clone(n.uniforms), i = [
                    "#ifdef USE_SPECULARMAP",
                    "\tuniform sampler2D specularMap;",
                    "#endif"
                ].join("\n"), o = [
                    "#ifdef USE_GLOSSINESSMAP",
                    "\tuniform sampler2D glossinessMap;",
                    "#endif"
                ].join("\n"), l = [
                    "vec3 specularFactor = specular;",
                    "#ifdef USE_SPECULARMAP",
                    "\tvec4 texelSpecular = texture2D( specularMap, vUv );",
                    "\ttexelSpecular = sRGBToLinear( texelSpecular );",
                    "\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture",
                    "\tspecularFactor *= texelSpecular.rgb;",
                    "#endif"
                ].join("\n"), p = [
                    "float glossinessFactor = glossiness;",
                    "#ifdef USE_GLOSSINESSMAP",
                    "\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );",
                    "\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture",
                    "\tglossinessFactor *= texelGlossiness.a;",
                    "#endif"
                ].join("\n"), u = [
                    "PhysicalMaterial material;",
                    "material.diffuseColor = diffuseColor.rgb;",
                    "material.specularRoughness = clamp( 1.0 - glossinessFactor, 0.04, 1.0 );",
                    "material.specularColor = specularFactor.rgb;"
                ].join("\n"), c = n.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", i).replace("#include <metalnessmap_pars_fragment>", o).replace("#include <roughnessmap_fragment>", l).replace("#include <metalnessmap_fragment>", p).replace("#include <lights_physical_fragment>", u);
                delete s.roughness, delete s.metalness, delete s.roughnessMap, delete s.metalnessMap, s.specular = {
                    value: (new THREE2.Color).setHex(1118481)
                }, s.glossiness = {
                    value: .5
                }, s.specularMap = {
                    value: null
                }, s.glossinessMap = {
                    value: null
                }, e.vertexShader = n.vertexShader, e.fragmentShader = c, e.uniforms = s, e.defines = {
                    STANDARD: ""
                }, e.color = new THREE2.Color(1, 1, 1), e.opacity = 1;
                var d = [];
                if (Array.isArray(a.diffuseFactor)) {
                    var h = a.diffuseFactor;
                    e.color.fromArray(h), e.opacity = h[3];
                }
                if (void 0 !== a.diffuseTexture && d.push(r.assignTexture(e, "map", a.diffuseTexture)), e.emissive = new THREE2.Color(0, 0, 0), e.glossiness = void 0 !== a.glossinessFactor ? a.glossinessFactor : 1, e.specular = new THREE2.Color(1, 1, 1), Array.isArray(a.specularFactor) && e.specular.fromArray(a.specularFactor), void 0 !== a.specularGlossinessTexture) {
                    var m = a.specularGlossinessTexture;
                    d.push(r.assignTexture(e, "glossinessMap", m)), d.push(r.assignTexture(e, "specularMap", m));
                }
                return Promise.all(d);
            },
            createMaterial: function(e) {
                var t = new THREE2.ShaderMaterial({
                    defines: e.defines,
                    vertexShader: e.vertexShader,
                    fragmentShader: e.fragmentShader,
                    uniforms: e.uniforms,
                    fog: !0,
                    lights: !0,
                    opacity: e.opacity,
                    transparent: e.transparent
                });
                return t.isGLTFSpecularGlossinessMaterial = !0, t.color = e.color, t.map = void 0 === e.map ? null : e.map, t.lightMap = null, t.lightMapIntensity = 1, t.aoMap = void 0 === e.aoMap ? null : e.aoMap, t.aoMapIntensity = 1, t.emissive = e.emissive, t.emissiveIntensity = 1, t.emissiveMap = void 0 === e.emissiveMap ? null : e.emissiveMap, t.bumpMap = void 0 === e.bumpMap ? null : e.bumpMap, t.bumpScale = 1, t.normalMap = void 0 === e.normalMap ? null : e.normalMap, e.normalScale && (t.normalScale = e.normalScale), t.displacementMap = null, t.displacementScale = 1, t.displacementBias = 0, t.specularMap = void 0 === e.specularMap ? null : e.specularMap, t.specular = e.specular, t.glossinessMap = void 0 === e.glossinessMap ? null : e.glossinessMap, t.glossiness = e.glossiness, t.alphaMap = null, t.envMap = void 0 === e.envMap ? null : e.envMap, t.envMapIntensity = 1, t.refractionRatio = .98, t.extensions.derivatives = !0, t;
            },
            cloneMaterial: function(e) {
                var t = e.clone();
                t.isGLTFSpecularGlossinessMaterial = !0;
                for(var r = this.specularGlossinessParams, a = 0, n = r.length; a < n; a++){
                    var s = e[r[a]];
                    t[r[a]] = s && s.isColor ? s.clone() : s;
                }
                return t;
            },
            refreshUniforms: function(e, t, r, a, n) {
                if (!0 === n.isGLTFSpecularGlossinessMaterial) {
                    var s, i = n.uniforms, o = n.defines;
                    i.opacity.value = n.opacity, i.diffuse.value.copy(n.color), i.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity), i.map.value = n.map, i.specularMap.value = n.specularMap, i.alphaMap.value = n.alphaMap, i.lightMap.value = n.lightMap, i.lightMapIntensity.value = n.lightMapIntensity, i.aoMap.value = n.aoMap, i.aoMapIntensity.value = n.aoMapIntensity, n.map ? s = n.map : n.specularMap ? s = n.specularMap : n.displacementMap ? s = n.displacementMap : n.normalMap ? s = n.normalMap : n.bumpMap ? s = n.bumpMap : n.glossinessMap ? s = n.glossinessMap : n.alphaMap ? s = n.alphaMap : n.emissiveMap && (s = n.emissiveMap), void 0 !== s && (s.isWebGLRenderTarget && (s = s.texture), !0 === s.matrixAutoUpdate && s.updateMatrix(), i.uvTransform.value.copy(s.matrix)), n.envMap && (i.envMap.value = n.envMap, i.envMapIntensity.value = n.envMapIntensity, i.flipEnvMap.value = n.envMap.isCubeTexture ? -1 : 1, i.reflectivity.value = n.reflectivity, i.refractionRatio.value = n.refractionRatio, i.maxMipLevel.value = e.properties.get(n.envMap).__maxMipLevel), i.specular.value.copy(n.specular), i.glossiness.value = n.glossiness, i.glossinessMap.value = n.glossinessMap, i.emissiveMap.value = n.emissiveMap, i.bumpMap.value = n.bumpMap, i.normalMap.value = n.normalMap, i.displacementMap.value = n.displacementMap, i.displacementScale.value = n.displacementScale, i.displacementBias.value = n.displacementBias, null !== i.glossinessMap.value && void 0 === o.USE_GLOSSINESSMAP && (o.USE_GLOSSINESSMAP = "", o.USE_ROUGHNESSMAP = ""), null === i.glossinessMap.value && void 0 !== o.USE_GLOSSINESSMAP && (delete o.USE_GLOSSINESSMAP, delete o.USE_ROUGHNESSMAP);
                }
            }
        };
    }
    function h() {
        this.name = r.KHR_MESH_QUANTIZATION;
    }
    function m(e, t, r, a) {
        THREE2.Interpolant.call(this, e, t, r, a);
    }
    u.prototype.decodePrimitive = function(e, t) {
        var r = this.json, a = this.dracoLoader, n = e.extensions[this.name].bufferView, s = e.extensions[this.name].attributes, i = {}, o = {}, l = {};
        for(var p in s){
            var u = A[p] || p.toLowerCase();
            i[u] = s[p];
        }
        for(p in e.attributes){
            u = A[p] || p.toLowerCase();
            if (void 0 !== s[p]) {
                var c = r.accessors[e.attributes[p]], d = y[c.componentType];
                l[u] = d, o[u] = !0 === c.normalized;
            }
        }
        return t.getDependency("bufferView", n).then(function(e) {
            return new Promise(function(t) {
                a.decodeDracoFile(e, function(e) {
                    for(var r in e.attributes){
                        var a = e.attributes[r], n = o[r];
                        void 0 !== n && (a.normalized = n);
                    }
                    t(e);
                }, i, l);
            });
        });
    }, c.prototype.extendTexture = function(e, t) {
        return e = e.clone(), void 0 !== t.offset && e.offset.fromArray(t.offset), void 0 !== t.rotation && (e.rotation = t.rotation), void 0 !== t.scale && e.repeat.fromArray(t.scale), void 0 !== t.texCoord && console.warn('THREE2.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), e.needsUpdate = !0, e;
    }, m.prototype = Object.create(THREE2.Interpolant.prototype), m.prototype.constructor = m, m.prototype.copySampleValue_ = function(e) {
        for(var t = this.resultBuffer, r = this.sampleValues, a = this.valueSize, n = e * a * 3 + a, s = 0; s !== a; s++)t[s] = r[n + s];
        return t;
    }, m.prototype.beforeStart_ = m.prototype.copySampleValue_, m.prototype.afterEnd_ = m.prototype.copySampleValue_, m.prototype.interpolate_ = function(e, t, r, a) {
        for(var n = this.resultBuffer, s = this.sampleValues, i = this.valueSize, o = 2 * i, l = 3 * i, p = a - t, u = (r - t) / p, c = u * u, d = c * u, h = e * l, m = h - l, f = -2 * d + 3 * c, v = d - c, E = 1 - f, T = v - c + u, g = 0; g !== i; g++){
            var R = s[m + g + i], M = s[m + g + o] * p, S = s[h + g + i], y = s[h + g] * p;
            n[g] = E * R + T * M + f * S + v * y;
        }
        return n;
    };
    var f, v = 0, E = 1, T = 2, g = 3, R = 4, M = 5, S = 6, y = {
        5120: Int8Array,
        5121: Uint8Array,
        5122: Int16Array,
        5123: Uint16Array,
        5125: Uint32Array,
        5126: Float32Array
    }, L = {
        9728: THREE2.NearestFilter,
        9729: THREE2.LinearFilter,
        9984: THREE2.NearestMipmapNearestFilter,
        9985: THREE2.LinearMipmapNearestFilter,
        9986: THREE2.NearestMipmapLinearFilter,
        9987: THREE2.LinearMipmapLinearFilter
    }, H = {
        33071: THREE2.ClampToEdgeWrapping,
        33648: THREE2.MirroredRepeatWrapping,
        10497: THREE2.RepeatWrapping
    }, _ = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
    }, A = {
        POSITION: "position",
        NORMAL: "normal",
        TANGENT: "tangent",
        TEXCOORD_0: "uv",
        TEXCOORD_1: "uv2",
        COLOR_0: "color",
        WEIGHTS_0: "skinWeight",
        JOINTS_0: "skinIndex"
    }, x = {
        scale: "scale",
        translation: "position",
        rotation: "quaternion",
        weights: "morphTargetInfluences"
    }, w = {
        CUBICSPLINE: void 0,
        LINEAR: THREE2.InterpolateLinear,
        STEP: THREE2.InterpolateDiscrete
    }, b = "OPAQUE", I = "MASK", P = "BLEND", U = {
        "image/png": THREE2.RGBAFormat,
        "image/jpeg": THREE2.RGBFormat
    };
    function F(e, t) {
        return "string" != typeof e || "" === e ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
    }
    function O(e, t, r) {
        for(var a in r.extensions)void 0 === e[a] && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[a] = r.extensions[a]);
    }
    function C(e, t) {
        void 0 !== t.extras && ("object" == typeof t.extras ? Object.assign(e.userData, t.extras) : console.warn("THREE2.GLTFLoader: Ignoring primitive type .extras, " + t.extras));
    }
    function N(e, t) {
        if (e.updateMorphTargets(), void 0 !== t.weights) for(var r = 0, a = t.weights.length; r < a; r++)e.morphTargetInfluences[r] = t.weights[r];
        if (t.extras && Array.isArray(t.extras.targetNames)) {
            var n = t.extras.targetNames;
            if (e.morphTargetInfluences.length === n.length) {
                e.morphTargetDictionary = {};
                for(r = 0, a = n.length; r < a; r++)e.morphTargetDictionary[n[r]] = r;
            } else console.warn("THREE2.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
        }
    }
    function G(e) {
        for(var t = "", r = Object.keys(e).sort(), a = 0, n = r.length; a < n; a++)t += r[a] + ":" + e[r[a]] + ";";
        return t;
    }
    function D(e, r, a) {
        this.json = e || {}, this.extensions = r || {}, this.options = a || {}, this.cache = new t, this.primitiveCache = {}, this.textureLoader = new THREE2.TextureLoader(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.fileLoader = new THREE2.FileLoader(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), "use-credentials" === this.options.crossOrigin && this.fileLoader.setWithCredentials(!0);
    }
    function B(e, t, r) {
        var a = t.attributes, n = [];
        function s(t, a) {
            return r.getDependency("accessor", t).then(function(t) {
                e.setAttribute(a, t);
            });
        }
        for(var i in a){
            var o = A[i] || i.toLowerCase();
            o in e.attributes || n.push(s(a[i], o));
        }
        if (void 0 !== t.indices && !e.index) {
            var l = r.getDependency("accessor", t.indices).then(function(t) {
                e.setIndex(t);
            });
            n.push(l);
        }
        return C(e, t), function(e, t, r) {
            var a = t.attributes, n = new THREE2.Box3;
            if (void 0 !== a.POSITION) {
                var s = (c = r.json.accessors[a.POSITION]).min, i = c.max;
                n.set(new THREE2.Vector3(s[0], s[1], s[2]), new THREE2.Vector3(i[0], i[1], i[2]));
                var o = t.targets;
                if (void 0 !== o) for(var l = new THREE2.Vector3, p = 0, u = o.length; p < u; p++){
                    var c, d = o[p];
                    if (void 0 !== d.POSITION) s = (c = r.json.accessors[d.POSITION]).min, i = c.max, l.setX(Math.max(Math.abs(s[0]), Math.abs(i[0]))), l.setY(Math.max(Math.abs(s[1]), Math.abs(i[1]))), l.setZ(Math.max(Math.abs(s[2]), Math.abs(i[2]))), n.expandByVector(l);
                }
                e.boundingBox = n;
                var h = new THREE2.Sphere;
                n.getCenter(h.center), h.radius = n.min.distanceTo(n.max) / 2, e.boundingSphere = h;
            }
        }(e, t, r), Promise.all(n).then(function() {
            return void 0 !== t.targets ? function(e, t, r) {
                for(var a = !1, n = !1, s = 0, i = t.length; s < i && (void 0 !== (p = t[s]).POSITION && (a = !0), void 0 !== p.NORMAL && (n = !0), !a || !n); s++);
                if (!a && !n) return Promise.resolve(e);
                var o = [], l = [];
                for(s = 0, i = t.length; s < i; s++){
                    var p = t[s];
                    if (a) {
                        var u = void 0 !== p.POSITION ? r.getDependency("accessor", p.POSITION) : e.attributes.position;
                        o.push(u);
                    }
                    n && (u = void 0 !== p.NORMAL ? r.getDependency("accessor", p.NORMAL) : e.attributes.normal, l.push(u));
                }
                return Promise.all([
                    Promise.all(o),
                    Promise.all(l)
                ]).then(function(t) {
                    var r = t[0], s = t[1];
                    return a && (e.morphAttributes.position = r), n && (e.morphAttributes.normal = s), e.morphTargetsRelative = !0, e;
                });
            }(e, t.targets, r) : e;
        });
    }
    return D.prototype.parse = function(e, t) {
        var r = this, a = this.json, n = this.extensions;
        this.cache.removeAll(), this.markDefs(), Promise.all([
            this.getDependencies("scene"),
            this.getDependencies("animation"),
            this.getDependencies("camera")
        ]).then(function(t) {
            var s = {
                scene: t[0][a.scene || 0],
                scenes: t[0],
                animations: t[1],
                cameras: t[2],
                asset: a.asset,
                parser: r,
                userData: {}
            };
            O(n, s, a), C(s, a), e(s);
        }).catch(t);
    }, D.prototype.markDefs = function() {
        for(var e = this.json.nodes || [], t = this.json.skins || [], r = this.json.meshes || [], a = {}, n = {}, s = 0, i = t.length; s < i; s++)for(var o = t[s].joints, l = 0, p = o.length; l < p; l++)e[o[l]].isBone = !0;
        for(var u = 0, c = e.length; u < c; u++){
            var d = e[u];
            void 0 !== d.mesh && (void 0 === a[d.mesh] && (a[d.mesh] = n[d.mesh] = 0), a[d.mesh]++, void 0 !== d.skin && (r[d.mesh].isSkinnedMesh = !0));
        }
        this.json.meshReferences = a, this.json.meshUses = n;
    }, D.prototype.getDependency = function(e, t) {
        var a = e + ":" + t, n = this.cache.get(a);
        if (!n) {
            switch(e){
                case "scene":
                    n = this.loadScene(t);
                    break;
                case "node":
                    n = this.loadNode(t);
                    break;
                case "mesh":
                    n = this.loadMesh(t);
                    break;
                case "accessor":
                    n = this.loadAccessor(t);
                    break;
                case "bufferView":
                    n = this.loadBufferView(t);
                    break;
                case "buffer":
                    n = this.loadBuffer(t);
                    break;
                case "material":
                    n = this.loadMaterial(t);
                    break;
                case "texture":
                    n = this.loadTexture(t);
                    break;
                case "skin":
                    n = this.loadSkin(t);
                    break;
                case "animation":
                    n = this.loadAnimation(t);
                    break;
                case "camera":
                    n = this.loadCamera(t);
                    break;
                case "light":
                    n = this.extensions[r.KHR_LIGHTS_PUNCTUAL].loadLight(t);
                    break;
                default:
                    throw new Error("Unknown type: " + e);
            }
            this.cache.add(a, n);
        }
        return n;
    }, D.prototype.getDependencies = function(e) {
        var t = this.cache.get(e);
        if (!t) {
            var r = this, a = this.json[e + ("mesh" === e ? "es" : "s")] || [];
            t = Promise.all(a.map(function(t, a) {
                return r.getDependency(e, a);
            })), this.cache.add(e, t);
        }
        return t;
    }, D.prototype.loadBuffer = function(e) {
        var t = this.json.buffers[e], a = this.fileLoader;
        if (t.type && "arraybuffer" !== t.type) throw new Error("THREE2.GLTFLoader: " + t.type + " buffer type is not supported.");
        if (void 0 === t.uri && 0 === e) return Promise.resolve(this.extensions[r.KHR_BINARY_GLTF].body);
        var n = this.options;
        return new Promise(function(e, r) {
            a.load(F(t.uri, n.path), e, void 0, function() {
                r(new Error('THREE2.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
            });
        });
    }, D.prototype.loadBufferView = function(e) {
        var t = this.json.bufferViews[e];
        return this.getDependency("buffer", t.buffer).then(function(e) {
            var r = t.byteLength || 0, a = t.byteOffset || 0;
            return e.slice(a, a + r);
        });
    }, D.prototype.loadAccessor = function(e) {
        var t = this, r = this.json, a = this.json.accessors[e];
        if (void 0 === a.bufferView && void 0 === a.sparse) return Promise.resolve(null);
        var n = [];
        return void 0 !== a.bufferView ? n.push(this.getDependency("bufferView", a.bufferView)) : n.push(null), void 0 !== a.sparse && (n.push(this.getDependency("bufferView", a.sparse.indices.bufferView)), n.push(this.getDependency("bufferView", a.sparse.values.bufferView))), Promise.all(n).then(function(e) {
            var n, s, i = e[0], o = _[a.type], l = y[a.componentType], p = l.BYTES_PER_ELEMENT, u = p * o, c = a.byteOffset || 0, d = void 0 !== a.bufferView ? r.bufferViews[a.bufferView].byteStride : void 0, h = !0 === a.normalized;
            if (d && d !== u) {
                var m = Math.floor(c / d), f = "InterleavedBuffer:" + a.bufferView + ":" + a.componentType + ":" + m + ":" + a.count, v = t.cache.get(f);
                v || (n = new l(i, m * d, a.count * d / p), v = new THREE2.InterleavedBuffer(n, d / p), t.cache.add(f, v)), s = new THREE2.InterleavedBufferAttribute(v, o, c % d / p, h);
            } else n = null === i ? new l(a.count * o) : new l(i, c, a.count * o), s = new THREE2.BufferAttribute(n, o, h);
            if (void 0 !== a.sparse) {
                var E = _.SCALAR, T = y[a.sparse.indices.componentType], g = a.sparse.indices.byteOffset || 0, R = a.sparse.values.byteOffset || 0, M = new T(e[1], g, a.sparse.count * E), S = new l(e[2], R, a.sparse.count * o);
                null !== i && (s = new THREE2.BufferAttribute(s.array.slice(), s.itemSize, s.normalized));
                for(var L = 0, H = M.length; L < H; L++){
                    var A = M[L];
                    if (s.setX(A, S[L * o]), o >= 2 && s.setY(A, S[L * o + 1]), o >= 3 && s.setZ(A, S[L * o + 2]), o >= 4 && s.setW(A, S[L * o + 3]), o >= 5) throw new Error("THREE2.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
                }
            }
            return s;
        });
    }, D.prototype.loadTexture = function(e) {
        var t, a = this, n = this.json, s = this.options, i = this.textureLoader, o = window.URL || window.webkitURL, l = n.textures[e], p = l.extensions || {}, u = (t = p[r.MSFT_TEXTURE_DDS] ? n.images[p[r.MSFT_TEXTURE_DDS].source] : n.images[l.source]).uri, c = !1;
        return void 0 !== t.bufferView && (u = a.getDependency("bufferView", t.bufferView).then(function(e) {
            c = !0;
            var r = new Blob([
                e
            ], {
                type: t.mimeType
            });
            return u = o.createObjectURL(r);
        })), Promise.resolve(u).then(function(e) {
            var t = s.manager.getHandler(e);
            return t || (t = p[r.MSFT_TEXTURE_DDS] ? a.extensions[r.MSFT_TEXTURE_DDS].ddsLoader : i), new Promise(function(r, a) {
                t.load(F(e, s.path), r, void 0, a);
            });
        }).then(function(e) {
            !0 === c && o.revokeObjectURL(u), e.flipY = !1, void 0 !== l.name && (e.name = l.name), t.mimeType in U && (e.format = U[t.mimeType]);
            var r = (n.samplers || {})[l.sampler] || {};
            return e.magFilter = L[r.magFilter] || THREE2.LinearFilter, e.minFilter = L[r.minFilter] || THREE2.LinearMipmapLinearFilter, e.wrapS = H[r.wrapS] || THREE2.RepeatWrapping, e.wrapT = H[r.wrapT] || THREE2.RepeatWrapping, e;
        });
    }, D.prototype.assignTexture = function(e, t, a) {
        var n = this;
        return this.getDependency("texture", a.index).then(function(s) {
            if (!s.isCompressedTexture) switch(t){
                case "aoMap":
                case "emissiveMap":
                case "metalnessMap":
                case "normalMap":
                case "roughnessMap":
                    s.format = THREE2.RGBFormat;
            }
            if (n.extensions[r.KHR_TEXTURE_TRANSFORM]) {
                var i = void 0 !== a.extensions ? a.extensions[r.KHR_TEXTURE_TRANSFORM] : void 0;
                i && (s = n.extensions[r.KHR_TEXTURE_TRANSFORM].extendTexture(s, i));
            }
            e[t] = s;
        });
    }, D.prototype.assignFinalMaterial = function(e) {
        var t = e.geometry, a = e.material, n = this.extensions, s = void 0 !== t.attributes.tangent, i = void 0 !== t.attributes.color, o = void 0 === t.attributes.normal, l = !0 === e.isSkinnedMesh, p = Object.keys(t.morphAttributes).length > 0, u = p && void 0 !== t.morphAttributes.normal;
        if (e.isPoints) {
            var c = "PointsMaterial:" + a.uuid, d = this.cache.get(c);
            d || (d = new THREE2.PointsMaterial, THREE2.Material.prototype.copy.call(d, a), d.color.copy(a.color), d.map = a.map, d.sizeAttenuation = !1, this.cache.add(c, d)), a = d;
        } else if (e.isLine) {
            c = "LineBasicMaterial:" + a.uuid;
            var h = this.cache.get(c);
            h || (h = new THREE2.LineBasicMaterial, THREE2.Material.prototype.copy.call(h, a), h.color.copy(a.color), this.cache.add(c, h)), a = h;
        }
        if (s || i || o || l || p) {
            c = "ClonedMaterial:" + a.uuid + ":";
            a.isGLTFSpecularGlossinessMaterial && (c += "specular-glossiness:"), l && (c += "skinning:"), s && (c += "vertex-tangents:"), i && (c += "vertex-colors:"), o && (c += "flat-shading:"), p && (c += "morph-targets:"), u && (c += "morph-normals:");
            var m = this.cache.get(c);
            m || (m = a.isGLTFSpecularGlossinessMaterial ? n[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].cloneMaterial(a) : a.clone(), l && (m.skinning = !0), s && (m.vertexTangents = !0), i && (m.vertexColors = THREE2.VertexColors), o && (m.flatShading = !0), p && (m.morphTargets = !0), u && (m.morphNormals = !0), this.cache.add(c, m)), a = m;
        }
        a.aoMap && void 0 === t.attributes.uv2 && void 0 !== t.attributes.uv && (console.log("THREE2.GLTFLoader: Duplicating UVs to support aoMap."), t.setAttribute("uv2", new THREE2.BufferAttribute(t.attributes.uv.array, 2))), a.isGLTFSpecularGlossinessMaterial && (e.onBeforeRender = n[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].refreshUniforms), e.material = a;
    }, D.prototype.loadMaterial = function(e) {
        var t, a = this, n = this.json, s = this.extensions, i = n.materials[e], o = {}, l = i.extensions || {}, p = [];
        if (l[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
            var u = s[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
            t = u.getMaterialType(), p.push(u.extendParams(o, i, a));
        } else if (l[r.KHR_MATERIALS_UNLIT]) {
            var c = s[r.KHR_MATERIALS_UNLIT];
            t = c.getMaterialType(), p.push(c.extendParams(o, i, a));
        } else {
            t = THREE2.MeshStandardMaterial;
            var d = i.pbrMetallicRoughness || {};
            if (o.color = new THREE2.Color(1, 1, 1), o.opacity = 1, Array.isArray(d.baseColorFactor)) {
                var h = d.baseColorFactor;
                o.color.fromArray(h), o.opacity = h[3];
            }
            void 0 !== d.baseColorTexture && p.push(a.assignTexture(o, "map", d.baseColorTexture)), o.metalness = void 0 !== d.metallicFactor ? d.metallicFactor : 1, o.roughness = void 0 !== d.roughnessFactor ? d.roughnessFactor : 1, void 0 !== d.metallicRoughnessTexture && (p.push(a.assignTexture(o, "metalnessMap", d.metallicRoughnessTexture)), p.push(a.assignTexture(o, "roughnessMap", d.metallicRoughnessTexture)));
        }
        !0 === i.doubleSided && (o.side = THREE2.DoubleSide);
        var m = i.alphaMode || b;
        return m === P ? o.transparent = !0 : (o.transparent = !1, m === I && (o.alphaTest = void 0 !== i.alphaCutoff ? i.alphaCutoff : .5)), void 0 !== i.normalTexture && t !== THREE2.MeshBasicMaterial && (p.push(a.assignTexture(o, "normalMap", i.normalTexture)), o.normalScale = new THREE2.Vector2(1, 1), void 0 !== i.normalTexture.scale && o.normalScale.set(i.normalTexture.scale, i.normalTexture.scale)), void 0 !== i.occlusionTexture && t !== THREE2.MeshBasicMaterial && (p.push(a.assignTexture(o, "aoMap", i.occlusionTexture)), void 0 !== i.occlusionTexture.strength && (o.aoMapIntensity = i.occlusionTexture.strength)), void 0 !== i.emissiveFactor && t !== THREE2.MeshBasicMaterial && (o.emissive = (new THREE2.Color).fromArray(i.emissiveFactor)), void 0 !== i.emissiveTexture && t !== THREE2.MeshBasicMaterial && p.push(a.assignTexture(o, "emissiveMap", i.emissiveTexture)), Promise.all(p).then(function() {
            var e;
            return e = t === THREE2.ShaderMaterial ? s[r.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o) : new t(o), void 0 !== i.name && (e.name = i.name), e.map && (e.map.encoding = THREE2.sRGBEncoding), e.emissiveMap && (e.emissiveMap.encoding = THREE2.sRGBEncoding), e.specularMap && (e.specularMap.encoding = THREE2.sRGBEncoding), C(e, i), i.extensions && O(s, e, i), e;
        });
    }, D.prototype.loadGeometries = function(e) {
        var t = this, a = this.extensions, n = this.primitiveCache;
        function s(e) {
            return a[r.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, t).then(function(r) {
                return B(r, e, t);
            });
        }
        for(var i, o, l = [], p = 0, u = e.length; p < u; p++){
            var c, d = e[p], h = (o = void 0, (o = (i = d).extensions && i.extensions[r.KHR_DRACO_MESH_COMPRESSION]) ? "draco:" + o.bufferView + ":" + o.indices + ":" + G(o.attributes) : i.indices + ":" + G(i.attributes) + ":" + i.mode), m = n[h];
            if (m) l.push(m.promise);
            else c = d.extensions && d.extensions[r.KHR_DRACO_MESH_COMPRESSION] ? s(d) : B(new THREE2.BufferGeometry, d, t), n[h] = {
                primitive: d,
                promise: c
            }, l.push(c);
        }
        return Promise.all(l);
    }, D.prototype.loadMesh = function(e) {
        for(var t = this, r = this.json.meshes[e], a = r.primitives, n = [], s = 0, i = a.length; s < i; s++){
            var o = void 0 === a[s].material ? f = f || new THREE2.MeshStandardMaterial({
                color: 16777215,
                emissive: 0,
                metalness: 1,
                roughness: 1,
                transparent: !1,
                depthTest: !0,
                side: THREE2.FrontSide
            }) : this.getDependency("material", a[s].material);
            n.push(o);
        }
        return Promise.all(n).then(function(n) {
            return t.loadGeometries(a).then(function(s) {
                for(var i = [], o = 0, l = s.length; o < l; o++){
                    var p, u = s[o], c = a[o], d = n[o];
                    if (c.mode === R || c.mode === M || c.mode === S || void 0 === c.mode) !0 !== (p = !0 === r.isSkinnedMesh ? new THREE2.SkinnedMesh(u, d) : new THREE2.Mesh(u, d)).isSkinnedMesh || p.geometry.attributes.skinWeight.normalized || p.normalizeSkinWeights(), c.mode === M ? p.drawMode = THREE2.TriangleStripDrawMode : c.mode === S && (p.drawMode = THREE2.TriangleFanDrawMode);
                    else if (c.mode === E) p = new THREE2.LineSegments(u, d);
                    else if (c.mode === g) p = new THREE2.Line(u, d);
                    else if (c.mode === T) p = new THREE2.LineLoop(u, d);
                    else {
                        if (c.mode !== v) throw new Error("THREE2.GLTFLoader: Primitive mode unsupported: " + c.mode);
                        p = new THREE2.Points(u, d);
                    }
                    Object.keys(p.geometry.morphAttributes).length > 0 && N(p, r), p.name = r.name || "mesh_" + e, s.length > 1 && (p.name += "_" + o), C(p, r), t.assignFinalMaterial(p), i.push(p);
                }
                if (1 === i.length) return i[0];
                var h = new THREE2.Group;
                for(o = 0, l = i.length; o < l; o++)h.add(i[o]);
                return h;
            });
        });
    }, D.prototype.loadCamera = function(e) {
        var t, r = this.json.cameras[e], a = r[r.type];
        if (a) return "perspective" === r.type ? t = new THREE2.PerspectiveCamera(THREE2.Math.radToDeg(a.yfov), a.aspectRatio || 1, a.znear || 1, a.zfar || 2e6) : "orthographic" === r.type && (t = new THREE2.OrthographicCamera(a.xmag / -2, a.xmag / 2, a.ymag / 2, a.ymag / -2, a.znear, a.zfar)), void 0 !== r.name && (t.name = r.name), C(t, r), Promise.resolve(t);
        console.warn("THREE2.GLTFLoader: Missing camera parameters.");
    }, D.prototype.loadSkin = function(e) {
        var t = this.json.skins[e], r = {
            joints: t.joints
        };
        return void 0 === t.inverseBindMatrices ? Promise.resolve(r) : this.getDependency("accessor", t.inverseBindMatrices).then(function(e) {
            return r.inverseBindMatrices = e, r;
        });
    }, D.prototype.loadAnimation = function(e) {
        for(var t = this.json.animations[e], r = [], a = [], n = [], s = [], i = [], o = 0, l = t.channels.length; o < l; o++){
            var p = t.channels[o], u = t.samplers[p.sampler], c = p.target, d = void 0 !== c.node ? c.node : c.id, h = void 0 !== t.parameters ? t.parameters[u.input] : u.input, f = void 0 !== t.parameters ? t.parameters[u.output] : u.output;
            r.push(this.getDependency("node", d)), a.push(this.getDependency("accessor", h)), n.push(this.getDependency("accessor", f)), s.push(u), i.push(c);
        }
        return Promise.all([
            Promise.all(r),
            Promise.all(a),
            Promise.all(n),
            Promise.all(s),
            Promise.all(i)
        ]).then(function(r) {
            for(var a = r[0], n = r[1], s = r[2], i = r[3], o = r[4], l = [], p = 0, u = a.length; p < u; p++){
                var c = a[p], d = n[p], h = s[p], f = i[p], v = o[p];
                if (void 0 !== c) {
                    var E;
                    switch(c.updateMatrix(), c.matrixAutoUpdate = !0, x[v.path]){
                        case x.weights:
                            E = THREE2.NumberKeyframeTrack;
                            break;
                        case x.rotation:
                            E = THREE2.QuaternionKeyframeTrack;
                            break;
                        default:
                            E = THREE2.VectorKeyframeTrack;
                    }
                    var T = c.name ? c.name : c.uuid, g = void 0 !== f.interpolation ? w[f.interpolation] : THREE2.InterpolateLinear, R = [];
                    x[v.path] === x.weights ? c.traverse(function(e) {
                        !0 === e.isMesh && e.morphTargetInfluences && R.push(e.name ? e.name : e.uuid);
                    }) : R.push(T);
                    var M = h.array;
                    if (h.normalized) {
                        var S;
                        if (M.constructor === Int8Array) S = 1 / 127;
                        else if (M.constructor === Uint8Array) S = 1 / 255;
                        else if (M.constructor == Int16Array) S = 1 / 32767;
                        else {
                            if (M.constructor !== Uint16Array) throw new Error("THREE2.GLTFLoader: Unsupported output accessor component type.");
                            S = 1 / 65535;
                        }
                        for(var y = new Float32Array(M.length), L = 0, H = M.length; L < H; L++)y[L] = M[L] * S;
                        M = y;
                    }
                    for(L = 0, H = R.length; L < H; L++){
                        var _ = new E(R[L] + "." + x[v.path], d.array, M, g);
                        "CUBICSPLINE" === f.interpolation && (_.createInterpolant = function(e) {
                            return new m(this.times, this.values, this.getValueSize() / 3, e);
                        }, _.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), l.push(_);
                    }
                }
            }
            var A = void 0 !== t.name ? t.name : "animation_" + e;
            return new THREE2.AnimationClip(A, void 0, l);
        });
    }, D.prototype.loadNode = function(e) {
        var t, a = this.json, n = this.extensions, s = this, i = a.meshReferences, o = a.meshUses, l = a.nodes[e];
        return (t = [], void 0 !== l.mesh && t.push(s.getDependency("mesh", l.mesh).then(function(e) {
            var t;
            if (i[l.mesh] > 1) {
                var r = o[l.mesh]++;
                (t = e.clone()).name += "_instance_" + r, t.onBeforeRender = e.onBeforeRender;
                for(var a = 0, n = t.children.length; a < n; a++)t.children[a].name += "_instance_" + r, t.children[a].onBeforeRender = e.children[a].onBeforeRender;
            } else t = e;
            return void 0 !== l.weights && t.traverse(function(e) {
                if (e.isMesh) for(var t = 0, r = l.weights.length; t < r; t++)e.morphTargetInfluences[t] = l.weights[t];
            }), t;
        })), void 0 !== l.camera && t.push(s.getDependency("camera", l.camera)), l.extensions && l.extensions[r.KHR_LIGHTS_PUNCTUAL] && void 0 !== l.extensions[r.KHR_LIGHTS_PUNCTUAL].light && t.push(s.getDependency("light", l.extensions[r.KHR_LIGHTS_PUNCTUAL].light)), Promise.all(t)).then(function(e) {
            var t;
            if ((t = !0 === l.isBone ? new THREE2.Bone : e.length > 1 ? new THREE2.Group : 1 === e.length ? e[0] : new THREE2.Object3D) !== e[0]) for(var r = 0, a = e.length; r < a; r++)t.add(e[r]);
            if (void 0 !== l.name && (t.userData.name = l.name, t.name = THREE2.PropertyBinding.sanitizeNodeName(l.name)), C(t, l), l.extensions && O(n, t, l), void 0 !== l.matrix) {
                var s = new THREE2.Matrix4;
                s.fromArray(l.matrix), t.applyMatrix(s);
            } else void 0 !== l.translation && t.position.fromArray(l.translation), void 0 !== l.rotation && t.quaternion.fromArray(l.rotation), void 0 !== l.scale && t.scale.fromArray(l.scale);
            return t;
        });
    }, D.prototype.loadScene = function() {
        function e(t, r, a, n) {
            var s = a.nodes[t];
            return n.getDependency("node", t).then(function(e) {
                var t;
                return void 0 === s.skin ? e : n.getDependency("skin", s.skin).then(function(e) {
                    for(var r = [], a = 0, s = (t = e).joints.length; a < s; a++)r.push(n.getDependency("node", t.joints[a]));
                    return Promise.all(r);
                }).then(function(r) {
                    return e.traverse(function(e) {
                        if (e.isMesh) {
                            for(var a = [], n = [], s = 0, i = r.length; s < i; s++){
                                var o = r[s];
                                if (o) {
                                    a.push(o);
                                    var l = new THREE2.Matrix4;
                                    void 0 !== t.inverseBindMatrices && l.fromArray(t.inverseBindMatrices.array, 16 * s), n.push(l);
                                } else console.warn('THREE2.GLTFLoader: Joint "%s" could not be found.', t.joints[s]);
                            }
                            e.bind(new THREE2.Skeleton(a, n), e.matrixWorld);
                        }
                    }), e;
                });
            }).then(function(t) {
                r.add(t);
                var i = [];
                if (s.children) for(var o = s.children, l = 0, p = o.length; l < p; l++){
                    var u = o[l];
                    i.push(e(u, t, a, n));
                }
                return Promise.all(i);
            });
        }
        return function(t) {
            var r = this.json, a = this.extensions, n = this.json.scenes[t], s = new THREE2.Scene;
            void 0 !== n.name && (s.name = n.name), C(s, n), n.extensions && O(a, s, n);
            for(var i = n.nodes || [], o = [], l = 0, p = i.length; l < p; l++)o.push(e(i[l], s, r, this));
            return Promise.all(o).then(function() {
                return s;
            });
        };
    }(), e;
}();
module.exports = _GLTFLoader; //# sourceMappingURL=/sm/ccb47d23ffba1f65d5dd999a44703f635e69d69953cb046d79b95f56dc45bcd3.map

},{"6ca41e9e4b3950cd":"3Oz79"}]},["83cC0","40312"], "40312", "parcelRequire7f09", {})

//# sourceMappingURL=race-game-threejs-master.b54fb7cf.js.map
