import {
  Links,
  Main,
  Meta,
  Scripts,
  Title,
  __export,
  __toESM,
  defineAppConfig,
  init_react,
  require_runtime
} from "./chunk-XA2HIIAU.mjs";

// .ice/entry.server.ts
init_react();
var import_regenerator_runtime = __toESM(require_runtime(), 1);

// .ice/env.server.ts
init_react();
process.env.ICE_CORE_MODE = "production";
process.env.ICE_CORE_ROUTER = "true";
process.env.ICE_CORE_ERROR_BOUNDARY = "false";
process.env.ICE_CORE_INITIAL_DATA = "true";
process.env.ICE_CORE_DEV_PORT = "undefined";

// .ice/entry.server.ts
import * as runtime from "@ice/runtime/server";

// src/app.tsx
var app_exports = {};
__export(app_exports, {
  default: () => app_default
});
init_react();
var app_default = defineAppConfig({});

// .ice/runtimeModules.ts
init_react();
var modules = [];
var runtimeModules_default = modules;

// src/document.tsx
init_react();
import { jsx as _jsx, jsxs as _jsxs } from "@ice/runtime/jsx-runtime";
function Document() {
  return /* @__PURE__ */ _jsxs("html", {
    children: [
      /* @__PURE__ */ _jsxs("head", {
        children: [
          /* @__PURE__ */ _jsx("meta", {
            charSet: "utf-8"
          }),
          /* @__PURE__ */ _jsx("meta", {
            name: "description",
            content: "ICE 3 Project"
          }),
          /* @__PURE__ */ _jsx("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          }),
          /* @__PURE__ */ _jsx(Meta, {}),
          /* @__PURE__ */ _jsx(Title, {}),
          /* @__PURE__ */ _jsx(Links, {})
        ]
      }),
      /* @__PURE__ */ _jsxs("body", {
        children: [
          /* @__PURE__ */ _jsx(Main, {}),
          /* @__PURE__ */ _jsx(Scripts, {})
        ]
      })
    ]
  });
}

// .ice/assets-manifest.json
var assets_manifest_default = {
  publicPath: "/",
  entries: {
    main: [
      "js/framework.js",
      "js/392.js",
      "js/main.js"
    ]
  },
  pages: {
    index: [
      "css/index.css",
      "js/index.js"
    ]
  },
  assets: {}
};

// .ice/routes.ts
init_react();
var routes_default = [
  {
    path: "",
    load: function() {
      return import(
        /* webpackChunkName: "index" */
        "./pages-7QWLKU5G.mjs"
      );
    },
    componentName: "index",
    index: true,
    id: "index",
    exact: true,
    exports: [
      "default",
      "getServerData"
    ]
  }
];

// .ice/entry.server.ts
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
var getRouterBasename = function() {
  var ref;
  var appConfig = runtime.getAppConfig(app_exports);
  return (appConfig == null ? void 0 : (ref = appConfig.router) == null ? void 0 : ref.basename) || "";
};
var setRuntimeEnv = function(renderMode) {
  if (renderMode === "SSG") {
    process.env.ICE_CORE_SSG = "true";
  } else {
    process.env.ICE_CORE_SSR = "true";
  }
};
function renderToHTML2(requestContext) {
  return _renderToHTML.apply(this, arguments);
}
function _renderToHTML() {
  _renderToHTML = _asyncToGenerator(import_regenerator_runtime.default.mark(function _callee(requestContext, options) {
    var documentOnly, _renderMode, renderMode, basename, serverOnlyBasename, routePath, disableFallback;
    return import_regenerator_runtime.default.wrap(function _callee$(_ctx) {
      while (1)
        switch (_ctx.prev = _ctx.next) {
          case 0:
            if (options === void 0)
              options = {};
            documentOnly = options.documentOnly, _renderMode = options.renderMode, renderMode = _renderMode === void 0 ? "SSR" : _renderMode, basename = options.basename, serverOnlyBasename = options.serverOnlyBasename, routePath = options.routePath, disableFallback = options.disableFallback;
            setRuntimeEnv(renderMode);
            _ctx.next = 5;
            return runtime.renderToHTML(requestContext, {
              app: app_exports,
              assetsManifest: assets_manifest_default,
              routes: routes_default,
              runtimeModules: runtimeModules_default,
              Document,
              serverOnlyBasename,
              basename: basename || getRouterBasename(),
              documentOnly,
              renderMode,
              routePath,
              disableFallback
            });
          case 5:
            return _ctx.abrupt("return", _ctx.sent);
          case 6:
          case "end":
            return _ctx.stop();
        }
    }, _callee);
  }));
  return _renderToHTML.apply(this, arguments);
}
function renderToResponse2(requestContext) {
  return _renderToResponse.apply(this, arguments);
}
function _renderToResponse() {
  _renderToResponse = _asyncToGenerator(import_regenerator_runtime.default.mark(function _callee(requestContext, options) {
    var documentOnly, _renderMode, renderMode, basename, serverOnlyBasename, disableFallback;
    return import_regenerator_runtime.default.wrap(function _callee$(_ctx) {
      while (1)
        switch (_ctx.prev = _ctx.next) {
          case 0:
            if (options === void 0)
              options = {};
            documentOnly = options.documentOnly, _renderMode = options.renderMode, renderMode = _renderMode === void 0 ? "SSR" : _renderMode, basename = options.basename, serverOnlyBasename = options.serverOnlyBasename, disableFallback = options.disableFallback;
            setRuntimeEnv(options);
            runtime.renderToResponse(requestContext, {
              app: app_exports,
              assetsManifest: assets_manifest_default,
              routes: routes_default,
              runtimeModules: runtimeModules_default,
              Document,
              serverOnlyBasename,
              basename: basename || getRouterBasename(),
              documentOnly,
              renderMode,
              disableFallback
            });
          case 4:
          case "end":
            return _ctx.stop();
        }
    }, _callee);
  }));
  return _renderToResponse.apply(this, arguments);
}
export {
  renderToHTML2 as renderToHTML,
  renderToResponse2 as renderToResponse
};
