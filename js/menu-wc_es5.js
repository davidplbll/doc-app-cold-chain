'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">cold-chain documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/ApiClientModule.html\" data-type=\"entity-link\" >ApiClientModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-e786130d8e89e72829ac2a7297443dae"' : 'data-target="#xs-components-links-module-AppModule-e786130d8e89e72829ac2a7297443dae"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-e786130d8e89e72829ac2a7297443dae"' : 'id="xs-components-links-module-AppModule-e786130d8e89e72829ac2a7297443dae"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DeviceModule.html\" data-type=\"entity-link\" >DeviceModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-DeviceModule-f02fd89f741121b53498aa8e7d58c31d"' : 'data-target="#xs-components-links-module-DeviceModule-f02fd89f741121b53498aa8e7d58c31d"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-DeviceModule-f02fd89f741121b53498aa8e7d58c31d"' : 'id="xs-components-links-module-DeviceModule-f02fd89f741121b53498aa8e7d58c31d"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/DeviceComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DeviceComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/DeviceFormComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DeviceFormComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/DeviceListComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DeviceListComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/MetricsDeviceComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MetricsDeviceComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DeviceRoutingModule.html\" data-type=\"entity-link\" >DeviceRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DeviceStoreModule.html\" data-type=\"entity-link\" >DeviceStoreModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DispositiveModule.html\" data-type=\"entity-link\" >DispositiveModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/GraphQLModule.html\" data-type=\"entity-link\" >GraphQLModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/InterfacesModule.html\" data-type=\"entity-link\" >InterfacesModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/MainModule.html\" data-type=\"entity-link\" >MainModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-MainModule-7545a22fc98b27b81009d98369d5a2e3"' : 'data-target="#xs-components-links-module-MainModule-7545a22fc98b27b81009d98369d5a2e3"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-MainModule-7545a22fc98b27b81009d98369d5a2e3"' : 'id="xs-components-links-module-MainModule-7545a22fc98b27b81009d98369d5a2e3"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/MainComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MainComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/MainRoutingModule.html\" data-type=\"entity-link\" >MainRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/RefrigeratorModule.html\" data-type=\"entity-link\" >RefrigeratorModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-RefrigeratorModule-5cc3430d590990b3dff045775fdc4942"' : 'data-target="#xs-components-links-module-RefrigeratorModule-5cc3430d590990b3dff045775fdc4942"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-RefrigeratorModule-5cc3430d590990b3dff045775fdc4942"' : 'id="xs-components-links-module-RefrigeratorModule-5cc3430d590990b3dff045775fdc4942"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/RefrigeratorCretateComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RefrigeratorCretateComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/RefrigeratorEditComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RefrigeratorEditComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/RefrigeratorFormComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RefrigeratorFormComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/RefrigeratorListComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RefrigeratorListComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/VaccineTableComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >VaccineTableComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/RefrigeratorRoutingModule.html\" data-type=\"entity-link\" >RefrigeratorRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UiModule.html\" data-type=\"entity-link\" >UiModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-UiModule-88ebc6d92940ef9ef27cee24fae18803"' : 'data-target="#xs-components-links-module-UiModule-88ebc6d92940ef9ef27cee24fae18803"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-UiModule-88ebc6d92940ef9ef27cee24fae18803"' : 'id="xs-components-links-module-UiModule-88ebc6d92940ef9ef27cee24fae18803"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/DynamicTableComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DynamicTableComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/LayoutComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LayoutComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UtilsModule.html\" data-type=\"entity-link\" >UtilsModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/VaccineConfigModule.html\" data-type=\"entity-link\" >VaccineConfigModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-VaccineConfigModule-d085470ebd039a67b7176f794f1b9191"' : 'data-target="#xs-components-links-module-VaccineConfigModule-d085470ebd039a67b7176f794f1b9191"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-VaccineConfigModule-d085470ebd039a67b7176f794f1b9191"' : 'id="xs-components-links-module-VaccineConfigModule-d085470ebd039a67b7176f794f1b9191"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/VaccineComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >VaccineComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/VaccineFormComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >VaccineFormComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/VaccineListComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >VaccineListComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/VaccineConfigStoreModule.html\" data-type=\"entity-link\" >VaccineConfigStoreModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/VaccineRoutingModule.html\" data-type=\"entity-link\" >VaccineRoutingModule</a>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links"' : 'data-target="#xs-components-links"', ">\n                            <span class=\"icon ion-md-cog\"></span>\n                            <span>Components</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="components-links"' : 'id="xs-components-links"', ">\n                            <li class=\"link\">\n                                <a href=\"components/LayoutComponent.html\" data-type=\"entity-link\" >LayoutComponent</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AlertService.html\" data-type=\"entity-link\" >AlertService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/AlertServiceService.html\" data-type=\"entity-link\" >AlertServiceService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ApiclientService.html\" data-type=\"entity-link\" >ApiclientService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/DeviceEffects.html\" data-type=\"entity-link\" >DeviceEffects</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/DeviceListEffects.html\" data-type=\"entity-link\" >DeviceListEffects</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/DeviceService.html\" data-type=\"entity-link\" >DeviceService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/RefrigeratorEffects.html\" data-type=\"entity-link\" >RefrigeratorEffects</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/RefrigeratorListEffects.html\" data-type=\"entity-link\" >RefrigeratorListEffects</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/RefrigeratorService.html\" data-type=\"entity-link\" >RefrigeratorService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/VaccineEffects.html\" data-type=\"entity-link\" >VaccineEffects</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/VaccineListEffects.html\" data-type=\"entity-link\" >VaccineListEffects</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/VaccineService.html\" data-type=\"entity-link\" >VaccineService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/BreadCrumb.html\" data-type=\"entity-link\" >BreadCrumb</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Chainable.html\" data-type=\"entity-link\" >Chainable</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Device.html\" data-type=\"entity-link\" >Device</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DeviceStateModule.html\" data-type=\"entity-link\" >DeviceStateModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DeviceStateModule-1.html\" data-type=\"entity-link\" >DeviceStateModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Metric.html\" data-type=\"entity-link\" >Metric</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Refrigerator.html\" data-type=\"entity-link\" >Refrigerator</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/RefrigeratorState.html\" data-type=\"entity-link\" >RefrigeratorState</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/State.html\" data-type=\"entity-link\" >State</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/State-1.html\" data-type=\"entity-link\" >State</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/State-2.html\" data-type=\"entity-link\" >State</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/State-3.html\" data-type=\"entity-link\" >State</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/State-4.html\" data-type=\"entity-link\" >State</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/State-5.html\" data-type=\"entity-link\" >State</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/State-6.html\" data-type=\"entity-link\" >State</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/State-7.html\" data-type=\"entity-link\" >State</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/State-8.html\" data-type=\"entity-link\" >State</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/State-9.html\" data-type=\"entity-link\" >State</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/State-10.html\" data-type=\"entity-link\" >State</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/State-11.html\" data-type=\"entity-link\" >State</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/UiModule.html\" data-type=\"entity-link\" >UiModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Vaccine.html\" data-type=\"entity-link\" >Vaccine</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/VaccineTable.html\" data-type=\"entity-link\" >VaccineTable</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/enumerations.html\" data-type=\"entity-link\">Enums</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));