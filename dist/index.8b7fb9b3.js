// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
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
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cSv3F":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "21352e468b7fb9b3";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3auaO":[function(require,module,exports) {
var _router = require("./routes/router");
const app = document.querySelector("#app");
_router.Router(window.location.pathname);

},{"./routes/router":"f0QlQ"}],"f0QlQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Router", ()=>Router
);
var _home = require("../pages/home");
var _homeDefault = parcelHelpers.interopDefault(_home);
var _toDoPage = require("../pages/toDoPage");
var _toDoPageDefault = parcelHelpers.interopDefault(_toDoPage);
var _pageNotFound = require("../pages/pageNotFound");
var _pageNotFoundDefault = parcelHelpers.interopDefault(_pageNotFound);
let validRoute = '';
const routes = {
    "/": _homeDefault.default(),
    "/todo": _toDoPageDefault.default()
};
const Router = (pathname)=>{
    const app = document.querySelector('#app');
    app.innerHTML = '';
    window.history.pushState({
    }, pathname, window.location.origin + pathname);
    validRoute = Object.keys(routes).find((path)=>path === pathname
    );
    validRoute != undefined ? app.appendChild(routes[window.location.pathname]) : app.appendChild(_pageNotFoundDefault.default());
};
exports.default = routes;

},{"../pages/home":"ibbKS","../pages/toDoPage":"B5bua","../pages/pageNotFound":"j74bp","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ibbKS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _header = require("../components/ui/header");
var _headerDefault = parcelHelpers.interopDefault(_header);
var _brandingHeader = require("../components/brandingHeader");
var _brandingHeaderDefault = parcelHelpers.interopDefault(_brandingHeader);
var _makeElement = require("../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
var _link = require("../components/ui/link");
var _linkDefault = parcelHelpers.interopDefault(_link);
const homePage = function() {
    const pageHeader = document.createElement('header');
    pageHeader.appendChild(_makeElementDefault.default(_headerDefault.default()));
    pageHeader.appendChild(_brandingHeaderDefault.default());
    pageHeader.appendChild(_linkDefault.default("Go to To-Do List app", "/todo"));
    return pageHeader;
};
exports.default = homePage;

},{"../components/ui/header":"9iGIZ","../components/brandingHeader":"6iyzv","../utils/makeElement":"8ZxEo","../components/ui/link":"hFEwy","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9iGIZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const header = function(elementType = "h1", title = "Austins Basic To-Do List", className = "ui-header") {
    const element = `<${elementType} class="${className}">${title}</${elementType}>`;
    return element;
};
exports.default = header;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6iyzv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _logo = require("../../icons/logo");
var _logoDefault = parcelHelpers.interopDefault(_logo);
var _tagline = require("../../components/ui/tagline");
var _taglineDefault = parcelHelpers.interopDefault(_tagline);
var _makeElement = require("../../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
const brandingHeader = function() {
    const newFragment = document.createDocumentFragment();
    newFragment.appendChild(_makeElementDefault.default(_logoDefault.default()));
    newFragment.appendChild(_makeElementDefault.default(_taglineDefault.default()));
    return newFragment;
};
exports.default = brandingHeader;

},{"../../icons/logo":"ae4SJ","../../components/ui/tagline":"lEXnU","../../utils/makeElement":"8ZxEo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ae4SJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const logo = function() {
    return `
    <?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g id="XMLID_1_">
	<path id="XMLID_5_" d="M256,0C114.6,0,0,114.6,0,256s114.6,256,256,256s256-114.6,256-256S397.4,0,256,0z M256,494.75
		C124.14,494.75,17.25,387.86,17.25,256S124.14,17.25,256,17.25S494.75,124.14,494.75,256S387.86,494.75,256,494.75z"/>
	<path id="XMLID_6_" d="M424.05,370.88l-77.99-219.11c-8.56-23.71-26.65-37.31-48.82-37.31H121.9c-19.5,0-35.21,15.71-35.21,35.21
		s15.71,35.21,35.21,35.21h50.5c22.58,0,36.61-27.49,43.06-30.58c3.93-2.67,9.26-3.23,13.75-0.84c6.45,3.37,9.12,11.36,5.89,17.81
		c-0.14,0.28-0.14,0.42-0.14,0.42l-87.95,158.37l0,0c-3.51,6.31-2.24,14.59,3.65,19.36c6.59,5.47,16.41,4.63,21.88-1.96l46.71-57.51
		c4.49-4.77,5.33-6.31,14.87-6.31c16.13,0,29.18-13.05,29.18-29.18c0-5.61-1.68-10.94-4.49-15.43c-0.28-0.42-0.7-0.98-0.98-1.54
		c-4.77-8.14-2.1-18.66,6.03-23.43c8.14-4.77,18.66-1.96,23.43,6.17l0,0l101.98,168.05l0.14,0.28v0.14
		c4.91,7.43,14.59,10.8,23.29,7.43C422.93,392.21,427.84,380.98,424.05,370.88L424.05,370.88z"/>
</g>
</svg>

    `;
};
exports.default = logo;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lEXnU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const tagline = function(elementType = 'h2', tagline = "It's very simple — you read the protocol and write the code.", className = "ui-tagline") {
    const element = `<${elementType} class="${className}">"${tagline}"</${elementType}>`;
    return element;
};
exports.default = tagline;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8ZxEo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const makeElement = function(templateString = ``) {
    const docFragment = document.createRange().createContextualFragment(templateString);
    const element = docFragment.children[0];
    return element;
};
exports.default = makeElement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hFEwy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _router = require("../../routes/router");
var _makeElement = require("../../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
const link = function(title, path) {
    function clickHandler(e) {
        e.preventDefault();
        _router.Router(e.currentTarget.dataset.path);
        return false;
    }
    let element = _makeElementDefault.default(`<a class="link" href="${path}" data-path="${path}"">${title}</button>`);
    element.addEventListener('click', clickHandler);
    return element;
};
exports.default = link;

},{"../../routes/router":"f0QlQ","../../utils/makeElement":"8ZxEo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"B5bua":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _brandingHeader = require("../components/brandingHeader");
var _brandingHeaderDefault = parcelHelpers.interopDefault(_brandingHeader);
var _todoList = require("../components/todoList");
var _todoListDefault = parcelHelpers.interopDefault(_todoList);
var _todoItem = require("../components/todoItem");
var _todoItemDefault = parcelHelpers.interopDefault(_todoItem);
const newFragment = document.createDocumentFragment();
const pageHeader = document.createElement('header');
const h1 = document.createElement(`h1`);
const main = document.createElement(`main`);
const container = document.createElement(`div`);
const appBar = document.createElement('div');
const toDoPage = function() {
    h1.textContent = 'Current To-Do List';
    container.className = 'container';
    appBar.className = 'app-bar';
    pageHeader.appendChild(h1);
    pageHeader.appendChild(_brandingHeaderDefault.default());
    main.appendChild(container);
    container.appendChild(_todoListDefault.default(_todoItemDefault.default()));
    main.appendChild(appBar);
    newFragment.appendChild(pageHeader);
    newFragment.appendChild(main);
    return newFragment;
};
exports.default = toDoPage;

},{"../components/brandingHeader":"6iyzv","../components/todoList":"bs5Oy","../components/todoItem":"jbSy1","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bs5Oy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dataFetcher = require("../../utils/dataFetcher");
var _dataFetcherDefault = parcelHelpers.interopDefault(_dataFetcher);
var _todoItem = require("../todoItem");
var _todoItemDefault = parcelHelpers.interopDefault(_todoItem);
const newFragment = document.createDocumentFragment();
async function renderToDos() {
    const data = await _dataFetcherDefault.default('data/todos.json');
    const listContainer = document.createElement(`ul`);
    listContainer.className = 'todo-list';
    newFragment.appendChild(listContainer);
    data.forEach((todo)=>{
        const isCompleted = !!todo.isComplete;
        const newToDoItem = _todoItemDefault.default(todo.id, todo.title, todo.category, isCompleted, todo.startDate, todo.startTime, todo.endDate, todo.endTime);
        listContainer.appendChild(newToDoItem);
    });
    return newFragment;
}
const todoList = function() {
    renderToDos();
    return newFragment;
};
exports.default = todoList;

},{"../../utils/dataFetcher":"8J3wM","../todoItem":"jbSy1","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8J3wM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const dataFetcher = async function(url) {
    return (await fetch(url)).json();
};
exports.default = dataFetcher;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jbSy1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("../../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
function renderCategory(category) {
    switch(category){
        case 'School':
            return 'Work';
        case 'Home':
            return 'Work';
        case 'Social':
            return 'Work';
        case 'Work':
            return 'Work';
        default:
            return 'Health';
    }
}
const todoItem = (id = ``, title = ``, category = ``, isCompleted = false, startDate = ``, startTime = ``, endDate = ``, endTime = ``)=>{
    return document.createElement(`li`).appendChild(_makeElementDefault.default(`
        <div class="todo-item" data-key="${id}>
            <img src=${renderCategory(category)} alt=${renderCategory(category)}>
            <div class="content">
                <h3 class="title">${title}</h3>
                <p class="category">${category}</p>
                <p class="time"><span><i class="far fa-clock"></i></span>${startTime} - ${endTime}</p>
                <p class="date">Due: ${endDate} (Started on ${startDate})</p>
                <p class="is-completed">${isCompleted ? "Completed" : ""}</p>
            </div>
        </div>
        <div class="icons">
            <i class="far fa-edit"></i>
            <i class="far fa-trash-alt"></i>
        </div>
    `));
};
exports.default = todoItem;

},{"../../utils/makeElement":"8ZxEo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"j74bp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _brandingHeader = require("../components/brandingHeader");
var _brandingHeaderDefault = parcelHelpers.interopDefault(_brandingHeader);
var _link = require("../components/ui/link");
var _linkDefault = parcelHelpers.interopDefault(_link);
const newFragment = document.createDocumentFragment();
const pageHeader = document.createElement('header');
const h1 = document.createElement(`h1`);
const main = document.createElement(`main`);
const container = document.createElement(`div`);
const pageNotFound = function() {
    h1.textContent = '404 Not Found';
    container.className = "container";
    pageHeader.appendChild(h1);
    pageHeader.appendChild(_brandingHeaderDefault.default());
    main.appendChild(container);
    container.appendChild(_linkDefault.default("take me back", "/"));
    newFragment.appendChild(pageHeader);
    newFragment.appendChild(main);
    return newFragment;
};
exports.default = pageNotFound;

},{"../components/brandingHeader":"6iyzv","../components/ui/link":"hFEwy","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["cSv3F","3auaO"], "3auaO", "parcelRequire683a")

//# sourceMappingURL=index.8b7fb9b3.js.map
