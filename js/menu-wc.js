'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">cold-chain documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ApiClientModule.html" data-type="entity-link" >ApiClientModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-e786130d8e89e72829ac2a7297443dae"' : 'data-target="#xs-components-links-module-AppModule-e786130d8e89e72829ac2a7297443dae"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-e786130d8e89e72829ac2a7297443dae"' :
                                            'id="xs-components-links-module-AppModule-e786130d8e89e72829ac2a7297443dae"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DeviceModule.html" data-type="entity-link" >DeviceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DeviceModule-f02fd89f741121b53498aa8e7d58c31d"' : 'data-target="#xs-components-links-module-DeviceModule-f02fd89f741121b53498aa8e7d58c31d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DeviceModule-f02fd89f741121b53498aa8e7d58c31d"' :
                                            'id="xs-components-links-module-DeviceModule-f02fd89f741121b53498aa8e7d58c31d"' }>
                                            <li class="link">
                                                <a href="components/DeviceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeviceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeviceFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeviceFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeviceListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeviceListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MetricsDeviceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetricsDeviceComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DeviceRoutingModule.html" data-type="entity-link" >DeviceRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DeviceStoreModule.html" data-type="entity-link" >DeviceStoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DispositiveModule.html" data-type="entity-link" >DispositiveModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GraphQLModule.html" data-type="entity-link" >GraphQLModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InterfacesModule.html" data-type="entity-link" >InterfacesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MainModule.html" data-type="entity-link" >MainModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MainModule-7545a22fc98b27b81009d98369d5a2e3"' : 'data-target="#xs-components-links-module-MainModule-7545a22fc98b27b81009d98369d5a2e3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MainModule-7545a22fc98b27b81009d98369d5a2e3"' :
                                            'id="xs-components-links-module-MainModule-7545a22fc98b27b81009d98369d5a2e3"' }>
                                            <li class="link">
                                                <a href="components/MainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MainRoutingModule.html" data-type="entity-link" >MainRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RefrigeratorModule.html" data-type="entity-link" >RefrigeratorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RefrigeratorModule-5cc3430d590990b3dff045775fdc4942"' : 'data-target="#xs-components-links-module-RefrigeratorModule-5cc3430d590990b3dff045775fdc4942"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RefrigeratorModule-5cc3430d590990b3dff045775fdc4942"' :
                                            'id="xs-components-links-module-RefrigeratorModule-5cc3430d590990b3dff045775fdc4942"' }>
                                            <li class="link">
                                                <a href="components/RefrigeratorCretateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RefrigeratorCretateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RefrigeratorEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RefrigeratorEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RefrigeratorFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RefrigeratorFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RefrigeratorListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RefrigeratorListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VaccineTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VaccineTableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RefrigeratorRoutingModule.html" data-type="entity-link" >RefrigeratorRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-88ebc6d92940ef9ef27cee24fae18803"' : 'data-target="#xs-components-links-module-UiModule-88ebc6d92940ef9ef27cee24fae18803"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-88ebc6d92940ef9ef27cee24fae18803"' :
                                            'id="xs-components-links-module-UiModule-88ebc6d92940ef9ef27cee24fae18803"' }>
                                            <li class="link">
                                                <a href="components/DynamicTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DynamicTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UtilsModule.html" data-type="entity-link" >UtilsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/VaccineConfigModule.html" data-type="entity-link" >VaccineConfigModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VaccineConfigModule-d085470ebd039a67b7176f794f1b9191"' : 'data-target="#xs-components-links-module-VaccineConfigModule-d085470ebd039a67b7176f794f1b9191"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VaccineConfigModule-d085470ebd039a67b7176f794f1b9191"' :
                                            'id="xs-components-links-module-VaccineConfigModule-d085470ebd039a67b7176f794f1b9191"' }>
                                            <li class="link">
                                                <a href="components/VaccineComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VaccineComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VaccineFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VaccineFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VaccineListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VaccineListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VaccineConfigStoreModule.html" data-type="entity-link" >VaccineConfigStoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/VaccineRoutingModule.html" data-type="entity-link" >VaccineRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/LayoutComponent.html" data-type="entity-link" >LayoutComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlertService.html" data-type="entity-link" >AlertService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AlertServiceService.html" data-type="entity-link" >AlertServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ApiclientService.html" data-type="entity-link" >ApiclientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeviceEffects.html" data-type="entity-link" >DeviceEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeviceListEffects.html" data-type="entity-link" >DeviceListEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeviceService.html" data-type="entity-link" >DeviceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RefrigeratorEffects.html" data-type="entity-link" >RefrigeratorEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RefrigeratorListEffects.html" data-type="entity-link" >RefrigeratorListEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RefrigeratorService.html" data-type="entity-link" >RefrigeratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VaccineEffects.html" data-type="entity-link" >VaccineEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VaccineListEffects.html" data-type="entity-link" >VaccineListEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VaccineService.html" data-type="entity-link" >VaccineService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/BreadCrumb.html" data-type="entity-link" >BreadCrumb</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Chainable.html" data-type="entity-link" >Chainable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Device.html" data-type="entity-link" >Device</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeviceStateModule.html" data-type="entity-link" >DeviceStateModule</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeviceStateModule-1.html" data-type="entity-link" >DeviceStateModule</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Metric.html" data-type="entity-link" >Metric</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Refrigerator.html" data-type="entity-link" >Refrigerator</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RefrigeratorState.html" data-type="entity-link" >RefrigeratorState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-1.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-2.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-3.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-4.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-5.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-6.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-7.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-8.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-9.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-10.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State-11.html" data-type="entity-link" >State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UiModule.html" data-type="entity-link" >UiModule</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Vaccine.html" data-type="entity-link" >Vaccine</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VaccineTable.html" data-type="entity-link" >VaccineTable</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});