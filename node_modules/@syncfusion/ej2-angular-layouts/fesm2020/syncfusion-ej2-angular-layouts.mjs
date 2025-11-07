import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Directive, ContentChild, ContentChildren, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { ComplexBase, setValue, Template, ArrayBase, ComponentBase, ComponentMixins } from '@syncfusion/ej2-angular-base';
import { Splitter, DashboardLayout, Timeline } from '@syncfusion/ej2-layouts';
export * from '@syncfusion/ej2-layouts';
import { CommonModule } from '@angular/common';

let input$2 = ['collapsed', 'collapsible', 'content', 'cssClass', 'max', 'min', 'resizable', 'size'];
let outputs$5 = [];
/**
 * 'e-panesettings' directive represent a panes of angular splitter
 * It must be contained in a Splitter component(`ejs-splitter`).
 * ```html
 * <ejs-splitter id='splitter' >
 *   <e-panes>
 *    <e-pane size ='150px'></e-pane>
 *    <e-pane size = '20%'></e-pane>
 *   </e-panes>
 * </ejs-splitter>
 * ```
 */
class PaneDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$5);
        this.directivePropList = input$2;
    }
}
PaneDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PaneDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
PaneDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: PaneDirective, selector: "e-panes>e-pane", inputs: { collapsed: "collapsed", collapsible: "collapsible", content: "content", cssClass: "cssClass", max: "max", min: "min", resizable: "resizable", size: "size" }, queries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], PaneDirective.prototype, "content", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PaneDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-panes>e-pane',
                    inputs: input$2,
                    outputs: outputs$5,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { content: [{
                type: ContentChild,
                args: ['content']
            }] } });
/**
 * Pane Array Directive
 * @private
 */
class PanesDirective extends ArrayBase {
    constructor() {
        super('panesettings');
    }
}
PanesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PanesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PanesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: PanesDirective, selector: "ejs-splitter>e-panes", queries: [{ propertyName: "children", predicate: PaneDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PanesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-splitter>e-panes',
                    queries: {
                        children: new ContentChildren(PaneDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs$2 = ['cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableReversePanes', 'enableRtl', 'enabled', 'height', 'locale', 'orientation', 'paneSettings', 'separatorSize', 'width'];
const outputs$4 = ['beforeCollapse', 'beforeExpand', 'beforeSanitizeHtml', 'collapsed', 'created', 'expanded', 'resizeStart', 'resizeStop', 'resizing'];
const twoWays$2 = [''];
/**
 * Represents the Angular Splitter Component
 * ```html
 * <ejs-splitter></ejs-splitter>
 * ```
 */
let SplitterComponent = class SplitterComponent extends Splitter {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['paneSettings'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$4);
        this.addTwoWay.call(this, twoWays$2);
        setValue('currentInstance', this, this.viewContainerRef);
        this.containerContext = new ComponentBase();
    }
    ngOnInit() {
        this.containerContext.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.containerContext.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.containerContext.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childPaneSettings;
        this.containerContext.ngAfterContentChecked(this);
    }
};
SplitterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitterComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
SplitterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: SplitterComponent, selector: "ejs-splitter", inputs: { cssClass: "cssClass", enableHtmlSanitizer: "enableHtmlSanitizer", enablePersistence: "enablePersistence", enableReversePanes: "enableReversePanes", enableRtl: "enableRtl", enabled: "enabled", height: "height", locale: "locale", orientation: "orientation", paneSettings: "paneSettings", separatorSize: "separatorSize", width: "width" }, outputs: { beforeCollapse: "beforeCollapse", beforeExpand: "beforeExpand", beforeSanitizeHtml: "beforeSanitizeHtml", collapsed: "collapsed", created: "created", expanded: "expanded", resizeStart: "resizeStart", resizeStop: "resizeStop", resizing: "resizing" }, queries: [{ propertyName: "childPaneSettings", first: true, predicate: PanesDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: `<ng-content select='div'></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
SplitterComponent = __decorate([
    ComponentMixins([ComponentBase])
], SplitterComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-splitter',
                    inputs: inputs$2,
                    outputs: outputs$4,
                    template: `<ng-content select='div'></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childPaneSettings: new ContentChild(PanesDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the Splitter component.
 */
class SplitterModule {
}
SplitterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SplitterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitterModule, declarations: [SplitterComponent,
        PaneDirective,
        PanesDirective], imports: [CommonModule], exports: [SplitterComponent,
        PaneDirective,
        PanesDirective] });
SplitterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitterModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitterModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        SplitterComponent,
                        PaneDirective,
                        PanesDirective
                    ],
                    exports: [
                        SplitterComponent,
                        PaneDirective,
                        PanesDirective
                    ]
                }]
        }] });

/**
 * NgModule definition for the Splitter component with providers.
 */
class SplitterAllModule {
}
SplitterAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitterAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SplitterAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitterAllModule, imports: [CommonModule, SplitterModule], exports: [SplitterModule] });
SplitterAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitterAllModule, providers: [], imports: [[CommonModule, SplitterModule], SplitterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SplitterAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, SplitterModule],
                    exports: [
                        SplitterModule
                    ],
                    providers: []
                }]
        }] });

let input$1 = ['col', 'content', 'cssClass', 'enabled', 'header', 'id', 'maxSizeX', 'maxSizeY', 'minSizeX', 'minSizeY', 'row', 'sizeX', 'sizeY', 'zIndex'];
let outputs$3 = [];
/**
 * 'e-panels' directive represent a panels of angular dashboardlayout
 * It must be contained in a dashboardlayout component(`ej-dashboardlayout`).
 * ```html
 * <ejs-dashboardlayout>
 *   <e-panels>
 *    <e-panel></e-panel>
 *    <e-panel></e-panel>
 *   </e-panels>
 * </ejs-dashboardlayout>
 * ```
 */
class PanelDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$3);
        this.directivePropList = input$1;
    }
}
PanelDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PanelDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
PanelDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: PanelDirective, selector: "e-panels>e-panel", inputs: { col: "col", content: "content", cssClass: "cssClass", enabled: "enabled", header: "header", id: "id", maxSizeX: "maxSizeX", maxSizeY: "maxSizeY", minSizeX: "minSizeX", minSizeY: "minSizeY", row: "row", sizeX: "sizeX", sizeY: "sizeY", zIndex: "zIndex" }, queries: [{ propertyName: "header", first: true, predicate: ["header"], descendants: true }, { propertyName: "content", first: true, predicate: ["content"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], PanelDirective.prototype, "header", void 0);
__decorate([
    Template()
], PanelDirective.prototype, "content", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PanelDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-panels>e-panel',
                    inputs: input$1,
                    outputs: outputs$3,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { header: [{
                type: ContentChild,
                args: ['header']
            }], content: [{
                type: ContentChild,
                args: ['content']
            }] } });
/**
 * Panel Array Directive
 * @private
 */
class PanelsDirective extends ArrayBase {
    constructor() {
        super('panels');
    }
}
PanelsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PanelsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PanelsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: PanelsDirective, selector: "ejs-dashboardlayout>e-panels", queries: [{ propertyName: "children", predicate: PanelDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PanelsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-dashboardlayout>e-panels',
                    queries: {
                        children: new ContentChildren(PanelDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs$1 = ['allowDragging', 'allowFloating', 'allowPushing', 'allowResizing', 'cellAspectRatio', 'cellSpacing', 'columns', 'draggableHandle', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'locale', 'mediaQuery', 'panels', 'resizableHandles', 'showGridLines'];
const outputs$2 = ['change', 'created', 'destroyed', 'drag', 'dragStart', 'dragStop', 'resize', 'resizeStart', 'resizeStop'];
const twoWays$1 = [''];
/**
 * Represents the Essential JS 2 Angular DashboardLayout Component.
 * ```html
 * <ejs-dashboardlayout></ejs-dashboardlayout>
 * ```
 */
let DashboardLayoutComponent = class DashboardLayoutComponent extends DashboardLayout {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['panels'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$2);
        this.addTwoWay.call(this, twoWays$1);
        setValue('currentInstance', this, this.viewContainerRef);
        this.containerContext = new ComponentBase();
    }
    ngOnInit() {
        this.containerContext.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.containerContext.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.containerContext.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childPanels;
        this.containerContext.ngAfterContentChecked(this);
    }
};
DashboardLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DashboardLayoutComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
DashboardLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: DashboardLayoutComponent, selector: "ejs-dashboardlayout", inputs: { allowDragging: "allowDragging", allowFloating: "allowFloating", allowPushing: "allowPushing", allowResizing: "allowResizing", cellAspectRatio: "cellAspectRatio", cellSpacing: "cellSpacing", columns: "columns", draggableHandle: "draggableHandle", enableHtmlSanitizer: "enableHtmlSanitizer", enablePersistence: "enablePersistence", enableRtl: "enableRtl", locale: "locale", mediaQuery: "mediaQuery", panels: "panels", resizableHandles: "resizableHandles", showGridLines: "showGridLines" }, outputs: { change: "change", created: "created", destroyed: "destroyed", drag: "drag", dragStart: "dragStart", dragStop: "dragStop", resize: "resize", resizeStart: "resizeStart", resizeStop: "resizeStop" }, queries: [{ propertyName: "childPanels", first: true, predicate: PanelsDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: `<ng-content select='div'></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
DashboardLayoutComponent = __decorate([
    ComponentMixins([ComponentBase])
], DashboardLayoutComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DashboardLayoutComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-dashboardlayout',
                    inputs: inputs$1,
                    outputs: outputs$2,
                    template: `<ng-content select='div'></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childPanels: new ContentChild(PanelsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the DashboardLayout component.
 */
class DashboardLayoutModule {
}
DashboardLayoutModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DashboardLayoutModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DashboardLayoutModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DashboardLayoutModule, declarations: [DashboardLayoutComponent,
        PanelDirective,
        PanelsDirective], imports: [CommonModule], exports: [DashboardLayoutComponent,
        PanelDirective,
        PanelsDirective] });
DashboardLayoutModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DashboardLayoutModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DashboardLayoutModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        DashboardLayoutComponent,
                        PanelDirective,
                        PanelsDirective
                    ],
                    exports: [
                        DashboardLayoutComponent,
                        PanelDirective,
                        PanelsDirective
                    ]
                }]
        }] });

/**
 * NgModule definition for the DashboardLayout component with providers.
 */
class DashboardLayoutAllModule {
}
DashboardLayoutAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DashboardLayoutAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DashboardLayoutAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DashboardLayoutAllModule, imports: [CommonModule, DashboardLayoutModule], exports: [DashboardLayoutModule] });
DashboardLayoutAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DashboardLayoutAllModule, providers: [], imports: [[CommonModule, DashboardLayoutModule], DashboardLayoutModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: DashboardLayoutAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, DashboardLayoutModule],
                    exports: [
                        DashboardLayoutModule
                    ],
                    providers: []
                }]
        }] });

let input = ['content', 'cssClass', 'disabled', 'dotCss', 'oppositeContent'];
let outputs$1 = [];
/**
 * 'e-timelineItem' directive represents a item of the Angular Timeline.
 * It must be contained in a Timeline component(`ejs-timeline`).
 * ```html
 * <ejs-timeline>
 *  <e-items>
 *   <e-item [dotCss]='e-icons e-folder' [content]='Item 1' />
 *   <e-item [dotCss]='e-icons e-folder' [content]='Item 2' />
 *  </e-items>
 * </ejs-timeline>
 * ```
 */
class ItemDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$1);
        this.directivePropList = input;
    }
}
ItemDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ItemDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ItemDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ItemDirective, selector: "ejs-timeline>e-items>e-item", inputs: { content: "content", cssClass: "cssClass", disabled: "disabled", dotCss: "dotCss", oppositeContent: "oppositeContent" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-timeline>e-items>e-item',
                    inputs: input,
                    outputs: outputs$1,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Item Array Directive
 * @private
 */
class ItemsDirective extends ArrayBase {
    constructor() {
        super('items');
    }
}
ItemsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ItemsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ItemsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ItemsDirective, selector: "ejs-timeline>e-items", queries: [{ propertyName: "children", predicate: ItemDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ItemsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-timeline>e-items',
                    queries: {
                        children: new ContentChildren(ItemDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs = ['align', 'cssClass', 'enablePersistence', 'enableRtl', 'items', 'locale', 'orientation', 'reverse', 'template'];
const outputs = ['beforeItemRender', 'created'];
const twoWays = [];
/**
 * Represents the EJ2 Angular Timeline Component.
 * ```html
 * <div ejs-timeline [items]='timelineItems'></div>
 * ```
 */
let TimelineComponent = class TimelineComponent extends Timeline {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['items'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.containerContext = new ComponentBase();
    }
    ngOnInit() {
        this.containerContext.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.containerContext.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.containerContext.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childItems;
        this.containerContext.ngAfterContentChecked(this);
    }
};
TimelineComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TimelineComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
TimelineComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: TimelineComponent, selector: "ejs-timeline", inputs: { align: "align", cssClass: "cssClass", enablePersistence: "enablePersistence", enableRtl: "enableRtl", items: "items", locale: "locale", orientation: "orientation", reverse: "reverse", template: "template" }, outputs: { beforeItemRender: "beforeItemRender", created: "created" }, queries: [{ propertyName: "template", first: true, predicate: ["template"], descendants: true }, { propertyName: "content", first: true, predicate: ["content"], descendants: true }, { propertyName: "oppositeContent", first: true, predicate: ["oppositeContent"], descendants: true }, { propertyName: "childItems", first: true, predicate: ItemsDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: `<ng-content select='div'></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], TimelineComponent.prototype, "template", void 0);
__decorate([
    Template()
], TimelineComponent.prototype, "content", void 0);
__decorate([
    Template()
], TimelineComponent.prototype, "oppositeContent", void 0);
TimelineComponent = __decorate([
    ComponentMixins([ComponentBase])
], TimelineComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TimelineComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-timeline',
                    inputs: inputs,
                    outputs: outputs,
                    template: `<ng-content select='div'></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childItems: new ContentChild(ItemsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { template: [{
                type: ContentChild,
                args: ['template']
            }], content: [{
                type: ContentChild,
                args: ['content']
            }], oppositeContent: [{
                type: ContentChild,
                args: ['oppositeContent']
            }] } });

/**
 * NgModule definition for the Timeline component.
 */
class TimelineModule {
}
TimelineModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TimelineModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TimelineModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TimelineModule, declarations: [TimelineComponent,
        ItemDirective,
        ItemsDirective], imports: [CommonModule], exports: [TimelineComponent,
        ItemDirective,
        ItemsDirective] });
TimelineModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TimelineModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TimelineModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        TimelineComponent,
                        ItemDirective,
                        ItemsDirective
                    ],
                    exports: [
                        TimelineComponent,
                        ItemDirective,
                        ItemsDirective
                    ]
                }]
        }] });

/**
 * NgModule definition for the Timeline component with providers.
 */
class TimelineAllModule {
}
TimelineAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TimelineAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TimelineAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TimelineAllModule, imports: [CommonModule, TimelineModule], exports: [TimelineModule] });
TimelineAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TimelineAllModule, providers: [], imports: [[CommonModule, TimelineModule], TimelineModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TimelineAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, TimelineModule],
                    exports: [
                        TimelineModule
                    ],
                    providers: []
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { DashboardLayoutAllModule, DashboardLayoutComponent, DashboardLayoutModule, ItemDirective, ItemsDirective, PaneDirective, PanelDirective, PanelsDirective, PanesDirective, SplitterAllModule, SplitterComponent, SplitterModule, TimelineAllModule, TimelineComponent, TimelineModule };
//# sourceMappingURL=syncfusion-ej2-angular-layouts.mjs.map
