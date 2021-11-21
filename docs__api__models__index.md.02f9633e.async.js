(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{"0H/f":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2tE6");\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar LOCALE_TEXTS = {\n  \'zh-CN\': {\n    name: \'\u5c5e\u6027\u540d\',\n    description: \'\u63cf\u8ff0\',\n    type: \'\u7c7b\u578b\',\n    default: \'\u9ed8\u8ba4\u503c\',\n    required: \'(\u5fc5\u9009)\'\n  },\n  \'en-US\': {\n    name: \'Name\',\n    description: \'Description\',\n    type: \'Type\',\n    default: \'Default\',\n    required: \'(required)\'\n  }\n};\n/* unused harmony default export */ var _unused_webpack_default_export = (_ref => {\n  var identifier = _ref.identifier,\n      expt = _ref.export;\n  var data = Object(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["useApiData"])(identifier);\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["context"]),\n      locale = _useContext.locale;\n\n  var texts = /^zh|cn$/i.test(locale) ? LOCALE_TEXTS[\'zh-CN\'] : LOCALE_TEXTS[\'en-US\'];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {\n    style: {\n      marginTop: 24\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, texts.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, texts.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, texts.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, texts.default))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, (data[expt] || []).map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {\n    key: row.identifier\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, row.identifier), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, row.description || \'--\'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, row.type)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, row.default || row.required && texts.required || \'--\')))))));\n});\n\n//# sourceURL=webpack:///./.dumi/theme/builtins/API.tsx?')},Bjia:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BoRD");\n/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jem/");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mkj/");\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2tE6");\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("U/75");\n/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _SourceCode_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("60ow");\n/* harmony import */ var _SourceCode_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SourceCode_less__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__["a"] = (_ref => {\n  var code = _ref.code,\n      lang = _ref.lang,\n      _ref$showCopy = _ref.showCopy,\n      showCopy = _ref$showCopy === void 0 ? true : _ref$showCopy;\n\n  var _useCopy = Object(dumi_theme__WEBPACK_IMPORTED_MODULE_4__["useCopy"])(),\n      _useCopy2 = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useCopy, 2),\n      copyCode = _useCopy2[0],\n      copyStatus = _useCopy2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {\n    className: "__dumi-default-code-block"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__[/* defaultProps */ "b"], {\n    code: code,\n    language: lang,\n    theme: undefined\n  }), _ref2 => {\n    var className = _ref2.className,\n        style = _ref2.style,\n        tokens = _ref2.tokens,\n        getLineProps = _ref2.getLineProps,\n        getTokenProps = _ref2.getTokenProps;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("pre", {\n      className: className,\n      style: style\n    }, showCopy && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {\n      className: "__dumi-default-icon __dumi-default-code-block-copy-btn",\n      "data-status": copyStatus,\n      onClick: () => copyCode(code)\n    }), tokens.map((line, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", getLineProps({\n      line,\n      key: i\n    }), line.map((token, key) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", getTokenProps({\n      token,\n      key\n    }))))));\n  }));\n});\n\n//# sourceURL=webpack:///./.dumi/theme/builtins/SourceCode.tsx?')},DgDr:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BoRD");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Badge_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2Pr/");\n/* harmony import */ var _Badge_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Badge_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ __webpack_exports__["a"] = (props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({\n  className: "__dumi-default-badge"\n}, props)));\n\n//# sourceURL=webpack:///./.dumi/theme/builtins/Badge.tsx?')},N0lm:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BoRD");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Alert_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tCeM");\n/* harmony import */ var _Alert_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Alert_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* unused harmony default export */ var _unused_webpack_default_export = (props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({\n  className: "__dumi-default-alert"\n}, props)));\n\n//# sourceURL=webpack:///./.dumi/theme/builtins/Alert.tsx?')},"ai/Q":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2tE6");\n/* harmony import */ var dumi_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dumi_theme__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_API_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0H/f");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Alert_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("N0lm");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Badge_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("DgDr");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Example_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cGlH");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_Previewer_tsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ekZX");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Bjia");\n/* harmony import */ var _Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_useCodeSandbox_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("BlwA");\n/* harmony import */ var _dumi_demos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Rsk4");\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__["default"] = (props => {\n  // scroll to anchor after page component loaded\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {\n    var _props$location;\n\n    if (props !== null && props !== void 0 && (_props$location = props.location) !== null && _props$location !== void 0 && _props$location.hash) {\n      dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"].scrollToAnchor(decodeURIComponent(props.location.hash.slice(1)));\n    }\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "markdown"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {\n    id: "models"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#models",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "MODELS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\u901A\\u8FC7\\u4E8B\\u4EF6\\u76D1\\u542C\\u7CFB\\u7EDF\\u72B6\\u6001\\uFF0C\\u5982\\u679C MODEL \\u66F4\\u65B0\\u5219\\u89E6\\u53D1 UI \\u7EC4\\u4EF6\\u7684\\u66F4\\u65B0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {\n    code: "// \u5982\u4f55\u4f7f\u7528\uff1f\\nimport { MODELS } from \'@antv/xflow\'\\n// \u4f7f\u7528models\\nconst getModel = async () => {\\n  const graphScale = await MODELS.GRAPH_SCALE.useValue(modelService)\\n  const graphScaleModel = await MODELS.GRAPH_SCALE.getModel(modelService)\\n  console.log(graphScale, graphScaleModel)\\n}",\n    lang: "tsx"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {\n    id: "model-hooks"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#model-hooks",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "MODEL HOOKS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {\n    code: "// \u5982\u4f55\u4f7f\u7528\uff1f\\nimport { MODELS } from \'@antv/xflow\'\\n// \u4f7f\u7528models\\nconst getModel = async () => {\\n  const graphScale = await MODELS.GRAPH_SCALE.useValue(modelService)\\n  const graphScaleModel = await MODELS.GRAPH_SCALE.getModel(modelService)\\n  console.log(graphScale, graphScaleModel)\\n}",\n    lang: "tsx"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    id: "usemodelasync"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#usemodelasync",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "useModelAsync"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {\n    code: "// \u5982\u4f55\u4f7f\u7528\uff1f\\nimport { MODELS } from \'@antv/xflow\'\\n// \u4f7f\u7528models\\nconst getModel = async () => {\\n  const graphScale = await MODELS.GRAPH_SCALE.useValue(modelService)\\n  const graphScaleModel = await MODELS.GRAPH_SCALE.getModel(modelService)\\n  console.log(graphScale, graphScaleModel)\\n}",\n    lang: "tsx"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n    id: "usemodel"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#usemodel",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "useModel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {\n    code: "// \u5982\u4f55\u4f7f\u7528\uff1f\\nimport { MODELS } from \'@antv/xflow\'\\n// \u4f7f\u7528models\\nconst getModel = async () => {\\n  const graphScale = await MODELS.GRAPH_SCALE.useValue(modelService)\\n  const graphScaleModel = await MODELS.GRAPH_SCALE.getModel(modelService)\\n  console.log(graphScale, graphScaleModel)\\n}",\n    lang: "tsx"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {\n    id: "xflow-models"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dumi_theme__WEBPACK_IMPORTED_MODULE_1__["AnchorLink"], {\n    to: "#xflow-models",\n    "aria-hidden": "true",\n    tabIndex: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "icon icon-link"\n  })), "XFlow MODELS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\\b \\u5185\\u7F6E\\u5F00\\u7BB1\\u5373\\u7528\\u7684 Models"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users_lyn_github_xflow_github_packages_xflow_docs_dumi_theme_builtins_SourceCode_tsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {\n    code: "// \u5982\u4f55\u4f7f\u7528\uff1f\\nimport { MODELS } from \'@antv/xflow\'\\n// \u4f7f\u7528models\\nconst getModel= async()=>{\\n  const graphScale = await MODELS.GRAPH_SCALE.useValue(modelService)\\n  const graphScaleModel = await MODELS.GRAPH_SCALE.getModel(modelService)\\n  console.log(graphScale,graphScaleModel)\\n}\\n\\n/** \u753b\u5e03\u662f\u5426\u5df2\u5f00\u542f\u591a\u9009 */\\nexport namespace GRAPH_ENABLE_MULTI_SELECT {\\n  export const id = \'GRAPH_ENABLE_MULTI_SELECT\'\\n  export type IState = {\\n    isEnable: boolean\\n  }\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** \u753b\u5e03\u5df2\u9009\u4e2d\u8282\u70b9 */\\nexport namespace IS_NODE_SELECTED {\\n  export const id = \'IS_NODE_SELECTED\'\\n  export type IState = boolean\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** \u753b\u5e03\u9009\u4e2d\u8282\u70b9\u662fGroup */\\nexport namespace IS_GROUP_SELECTED {\\n  export const id = \'IS_GROUP_SELECTED\'\\n  export type IState = boolean\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** \u753b\u5e03\u9009\u4e2d\u8282\u70b9\u662fGroup */\\nexport namespace IS_NORMAL_NODES_SELECTED {\\n  export const id = \'IS_NORMAL_NODES_SELECTED\'\\n  export type IState = boolean\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** \u753b\u5e03\u9009\u4e2dCell\u72b6\u6001\uff0c\u4fdd\u5b58\u6700\u540e\u4e00\u4e2a\u9009\u4e2d\u7684\u8282\u70b9 */\\nexport namespace SELECTED_CELL {\\n  export const id = \'LAST_SELECTED_CELL\'\\n  export type IState = Cell | null\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** \u753b\u5e03\u9009\u4e2dCellS\u72b6\u6001 */\\nexport namespace SELECTED_CELLS {\\n  export const id = \'SELECTED_CELLS\'\\n  export type IState = Cell[]\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n\\n/** \u753b\u5e03\u9009\u4e2d\u8282\u70b9\u72b6\u6001\uff0c \u5982\u6709\u591a\u4e2a\u8282\u70b9\u5219\u4fdd\u5b58\u6700\u540e\u4e00\u4e2a\u9009\u4e2d\u7684\u8282\u70b9 */\\nexport namespace SELECTED_NODE {\\n  export const id = \'LAST_SELECTED_NODE\'\\n  export type IState = Node<Node.Properties> | null\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** \u753b\u5e03\u9009\u4e2d\u8282\u70b9\u72b6\u6001 */\\nexport namespace SELECTED_NODES {\\n  export const id = \'SELECTED_NODES\'\\n  export type IState = Node<Node.Properties>[]\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** \u753b\u5e03\u9009\u4e2d\u8fb9\u72b6\u6001 */\\nexport namespace SELECTED_EDGES {\\n  export const id = \'SELECTED_EDGES\'\\n  export type IState = Edge<Edge.Properties>[]\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** \u753b\u5e03\u9009\u4e2dGROUP List */\\nexport namespace SELECTED_GROUPS {\\n  export const id = \'SELECTED_GROUPS\'\\n  export type IState = Node<Node.Properties>[]\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** \u753b\u5e03\u8282\u70b9\u53f3\u952e\u83dc\u5355\u72b6\u6001 */\\nexport namespace CONTEXTMENU_NODE {\\n  export const id = \'CONTEXTMENU_NODE\'\\n  export type IState = Node<Node.Properties> | null\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** \u753b\u5e03\u8fb9\u53f3\u952e\u83dc\u5355\u72b6\u6001 */\\nexport namespace CONTEXTMENU_EDGE {\\n  export const id = \'CONTEXTMENU_EDGE\'\\n  export type IState = Edge<Edge.Properties> | null\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** \u753b\u5e03\u53f3\u952e\u83dc\u5355\u72b6\u6001 */\\nexport namespace CONTEXTMENU_TARGET {\\n  export const id = \'CONTEXTMENU_TARGET\'\\n  export type IState = ContextMenuInfo | null\\n  export interface ContextMenuInfo {\\n    type: TargetType\\n    data: CellView.EventArgs[\'cell:contextmenu\']\\n    anchor: { x: number; y: number }\\n    cell: Cell\\n  }\\n  export type TargetType = \'node\' | \'edge\' | \'blank\' | \'null\'\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** \u753b\u5e03\u5143\u6570\u636e\u72b6\u6001 */\\nexport namespace GRAPH_META {\\n  export const id = \'GRAPH_META\'\\n  export type IState = { flowId: string; [key: string]: any }\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** \u753b\u5e03\u7f29\u653e\u72b6\u6001 */\\nexport namespace GRAPH_SCALE {\\n  export const id = \'GRAPH_SCALE\'\\n  export type IState = {\\n    zoomFactor: number\\n    sx?: number\\n    sy?: number\\n    ox?: number\\n    oy?: number\\n  }\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** COMMAND REDO STACK\u7684\u72b6\u6001*/\\nexport namespace COMMAND_REDOABLE {\\n  export const id = \'COMMAND_REDOABLE\'\\n  export type IState = boolean\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n/** COMMAND UNDO STACK\u7684\u72b6\u6001*/\\nexport namespace COMMAND_UNDOABLE {\\n  export const id = \'COMMAND_UNDOABLE\'\\n  export type IState = boolean\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n\\n/** History Undo Redo */\\nexport namespace HISTORY_UNDOABLE {\\n  export const id = \'HISTORY_UNDOABLE\'\\n  export type IState = boolean\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\nexport namespace HISTORY_REDOABLE {\\n  export const id = \'HISTORY_REDOABLE\'\\n  export type IState = boolean\\n  export const getModel = getModelUtil<IState>(id)\\n  export const useValue = useModelValueUtil<IState>(id)\\n}\\n\\n```",\n    lang: "tsx"\n  })));\n});\n\n//# sourceURL=webpack:///./docs/api/models/index.md?')},cGlH:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var _Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jem/");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Example_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zc05");\n/* harmony import */ var _Example_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Example_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* unused harmony default export */ var _unused_webpack_default_export = (props => {\n  var elm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),\n      _useState2 = Object(_Users_lyn_github_xflow_github_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),\n      height = _useState2[0],\n      setHeight = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {\n    setHeight(elm.current.contentWindow.document.documentElement.scrollHeight);\n  }, [elm]);\n  return props.route.meta.examplePath && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "__dumi-default-example-wrapper"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {\n    className: "__dumi-default-example-wrapper-toolbar"\n  }, props.route.meta.description || props.route.meta.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {\n    className: "__dumi-default-icon",\n    onClick: () => elm.current.contentWindow.location.reload()\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {\n    target: "_blank",\n    rel: "noopener noreferrer",\n    href: props.route.meta.examplePath,\n    className: "__dumi-default-icon"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {\n    src: props.route.meta.examplePath,\n    ref: elm,\n    style: {\n      height\n    },\n    title: "dumi"\n  }));\n});\n\n//# sourceURL=webpack:///./.dumi/theme/builtins/Example.tsx?')}}]);