(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[58],{"+/TZ":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2tE6");\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_API_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0H/f");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Alert_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("N0lm");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Badge_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("DgDr");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Example_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cGlH");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Previewer_tsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ekZX");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Bjia");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_useCodeSandbox_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("BlwA");\n/* harmony import */ var _dumi_demos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Rsk4");\n\n\n\n\n\n\n\n\n\n\n\n\nvar DumiDemo1 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(_dumi_demos__WEBPACK_IMPORTED_MODULE_9__["default"][\'context-menu-basic\'].component);\nvar DumiDemo2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(_dumi_demos__WEBPACK_IMPORTED_MODULE_9__["default"][\'context-menu-dynamic-config\'].component);\nvar DumiDemo3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(_dumi_demos__WEBPACK_IMPORTED_MODULE_9__["default"][\'context-menu-hotkey\'].component);\nvar DumiDemo4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(_dumi_demos__WEBPACK_IMPORTED_MODULE_9__["default"][\'context-menu-custom-render\'].component);\n/* harmony default export */ __webpack_exports__["default"] = (props => {\n  // scroll to anchor after page component loaded\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {\n    var _props$location;\n\n    if (props !== null && props !== void 0 && (_props$location = props.location) !== null && _props$location !== void 0 && _props$location.hash) {\n      dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"].scrollToAnchor(decodeURIComponent(props.location.hash.slice(1)));\n    }\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "markdown"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {\n    id: "contextmenu-\\u53F3\\u952E\\u83DC\\u5355"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#contextmenu-\\u53F3\\u952E\\u83DC\\u5355",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "ContextMenu \\u53F3\\u952E\\u83DC\\u5355"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u8D1F\\u8D23\\u5728\\u7528\\u6237\\u89E6\\u53D1\\u53F3\\u952E\\u4E8B\\u4EF6\\u65F6\\uFF0C\\u6E32\\u67D3\\u4E00\\u4E2A\\u83DC\\u5355\\u4F5C\\u4E3A\\u64CD\\u4F5C\\u5165\\u53E3\\u7528\\u4E8E\\u6267\\u884C\\u547D\\u4EE4/\\u64CD\\u4F5C UI \\u7EC4\\u4EF6/\\u6253\\u5F00\\u94FE\\u63A5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {\n    id: "\\u4F55\\u65F6\\u4F7F\\u7528"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#\\u4F55\\u65F6\\u4F7F\\u7528",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "\\u4F55\\u65F6\\u4F7F\\u7528"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u9700\\u8981\\u4E00\\u4E2A\\u6216\\u591A\\u4E2A\\u9ED8\\u8BA4\\u53EF\\u89C1\\u7684\\u64CD\\u4F5C\\u753B\\u5E03\\u7684\\u5165\\u53E3\\uFF0C\\u6BD4\\u5982\\uFF1A\\u6DFB\\u52A0/\\u5220\\u9664\\u56FE\\u4E0A\\u8282\\u70B9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u9700\\u8981\\u4E00\\u4E2A\\u6216\\u591A\\u4E2A\\u9ED8\\u8BA4\\u53EF\\u89C1\\u7684\\u64CD\\u4F5C\\u753B\\u5E03 UI \\u7EC4\\u4EF6\\u7684\\u6309\\u94AE\\uFF0C\\u6BD4\\u5982\\uFF1A\\u6253\\u5F00\\u4E00\\u4E2A\\u5F39\\u7A97\\u7EC4\\u4EF6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\\u9700\\u8981\\u4E00\\u4E2A\\u6216\\u591A\\u4E2A\\u53EF\\u6253\\u5F00\\u7684\\u94FE\\u63A5\\uFF0C\\u6BD4\\u5982\\u5C55\\u793A\\u4E00\\u4E2A\\u53EF\\u4EE5\\u70B9\\u51FB\\u7684\\u94FE\\u63A5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {\n    id: "\\u4EE3\\u7801\\u6F14\\u793A"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#\\u4EE3\\u7801\\u6F14\\u793A",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "\\u4EE3\\u7801\\u6F14\\u793A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {\n    id: "\\u57FA\\u7840\\u4F7F\\u7528"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#\\u57FA\\u7840\\u4F7F\\u7528",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "\\u57FA\\u7840\\u4F7F\\u7528")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Previewer_tsx__WEBPACK_IMPORTED_MODULE_6__["default"], _dumi_demos__WEBPACK_IMPORTED_MODULE_9__["default"][\'context-menu-basic\'].previewerProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DumiDemo1, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "markdown"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {\n    id: "\\u52A8\\u6001\\u6DFB\\u52A0"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#\\u52A8\\u6001\\u6DFB\\u52A0",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "\\u52A8\\u6001\\u6DFB\\u52A0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Previewer_tsx__WEBPACK_IMPORTED_MODULE_6__["default"], _dumi_demos__WEBPACK_IMPORTED_MODULE_9__["default"][\'context-menu-dynamic-config\'].previewerProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DumiDemo2, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "markdown"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {\n    id: "\\u914D\\u5408\\u5FEB\\u6377\\u952E"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#\\u914D\\u5408\\u5FEB\\u6377\\u952E",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "\\u914D\\u5408\\u5FEB\\u6377\\u952E")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Previewer_tsx__WEBPACK_IMPORTED_MODULE_6__["default"], _dumi_demos__WEBPACK_IMPORTED_MODULE_9__["default"][\'context-menu-hotkey\'].previewerProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DumiDemo3, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "markdown"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {\n    id: "\\u81EA\\u5B9A\\u4E49\\u6E32\\u67D3"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#\\u81EA\\u5B9A\\u4E49\\u6E32\\u67D3",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "\\u81EA\\u5B9A\\u4E49\\u6E32\\u67D3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Previewer_tsx__WEBPACK_IMPORTED_MODULE_6__["default"], _dumi_demos__WEBPACK_IMPORTED_MODULE_9__["default"][\'context-menu-custom-render\'].previewerProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DumiDemo4, null))));\n});\n\n//# sourceURL=webpack:///./docs/tutorial/extension-components/context-menu/index.md?')},"0H/f":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2tE6");\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar LOCALE_TEXTS = {\n  \'zh-CN\': {\n    name: \'\u5c5e\u6027\u540d\',\n    description: \'\u63cf\u8ff0\',\n    type: \'\u7c7b\u578b\',\n    default: \'\u9ed8\u8ba4\u503c\',\n    required: \'(\u5fc5\u9009)\'\n  },\n  \'en-US\': {\n    name: \'Name\',\n    description: \'Description\',\n    type: \'Type\',\n    default: \'Default\',\n    required: \'(required)\'\n  }\n};\n/* unused harmony default export */ var _unused_webpack_default_export = (_ref => {\n  var identifier = _ref.identifier,\n      expt = _ref.export;\n  var data = Object(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["useApiData"])(identifier);\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["context"]),\n      locale = _useContext.locale;\n\n  var texts = /^zh|cn$/i.test(locale) ? LOCALE_TEXTS[\'zh-CN\'] : LOCALE_TEXTS[\'en-US\'];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {\n    style: {\n      marginTop: 24\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, texts.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, texts.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, texts.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, texts.default))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, (data[expt] || []).map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {\n    key: row.identifier\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, row.identifier), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, row.description || \'--\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, row.type)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, row.default || row.required && texts.required || \'--\')))))));\n});\n\n//# sourceURL=webpack:///./.dumi/theme/builtins/API.tsx?')},Bjia:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BoRD");\n/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jem/");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mkj/");\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2tE6");\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("U/75");\n/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _SourceCode_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("60ow");\n/* harmony import */ var _SourceCode_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SourceCode_less__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__["a"] = (_ref => {\n  var code = _ref.code,\n      lang = _ref.lang,\n      _ref$showCopy = _ref.showCopy,\n      showCopy = _ref$showCopy === void 0 ? true : _ref$showCopy;\n\n  var _useCopy = Object(dumi_theme__WEBPACK_IMPORTED_MODULE_4__["useCopy"])(),\n      _useCopy2 = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useCopy, 2),\n      copyCode = _useCopy2[0],\n      copyStatus = _useCopy2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {\n    className: "__dumi-default-code-block"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__[/* defaultProps */ "b"], {\n    code: code,\n    language: lang,\n    theme: undefined\n  }), _ref2 => {\n    var className = _ref2.className,\n        style = _ref2.style,\n        tokens = _ref2.tokens,\n        getLineProps = _ref2.getLineProps,\n        getTokenProps = _ref2.getTokenProps;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("pre", {\n      className: className,\n      style: style\n    }, showCopy && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {\n      className: "__dumi-default-icon __dumi-default-code-block-copy-btn",\n      "data-status": copyStatus,\n      onClick: () => copyCode(code)\n    }), tokens.map((line, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", getLineProps({\n      line,\n      key: i\n    }), line.map((token, key) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", getTokenProps({\n      token,\n      key\n    }))))));\n  }));\n});\n\n//# sourceURL=webpack:///./.dumi/theme/builtins/SourceCode.tsx?')},DgDr:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BoRD");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Badge_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2Pr/");\n/* harmony import */ var _Badge_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Badge_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ __webpack_exports__["a"] = (props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({\n  className: "__dumi-default-badge"\n}, props)));\n\n//# sourceURL=webpack:///./.dumi/theme/builtins/Badge.tsx?')},N0lm:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BoRD");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Alert_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tCeM");\n/* harmony import */ var _Alert_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Alert_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* unused harmony default export */ var _unused_webpack_default_export = (props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({\n  className: "__dumi-default-alert"\n}, props)));\n\n//# sourceURL=webpack:///./.dumi/theme/builtins/Alert.tsx?')},cGlH:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jem/");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Example_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zc05");\n/* harmony import */ var _Example_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Example_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* unused harmony default export */ var _unused_webpack_default_export = (props => {\n  var elm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),\n      _useState2 = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),\n      height = _useState2[0],\n      setHeight = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {\n    setHeight(elm.current.contentWindow.document.documentElement.scrollHeight);\n  }, [elm]);\n  return props.route.meta.examplePath && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "__dumi-default-example-wrapper"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "__dumi-default-example-wrapper-toolbar"\n  }, props.route.meta.description || props.route.meta.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {\n    className: "__dumi-default-icon",\n    onClick: () => elm.current.contentWindow.location.reload()\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {\n    target: "_blank",\n    rel: "noopener noreferrer",\n    href: props.route.meta.examplePath,\n    className: "__dumi-default-icon"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {\n    src: props.route.meta.examplePath,\n    ref: elm,\n    style: {\n      height\n    },\n    title: "dumi"\n  }));\n});\n\n//# sourceURL=webpack:///./.dumi/theme/builtins/Example.tsx?')}}]);