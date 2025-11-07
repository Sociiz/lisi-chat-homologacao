import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ContentChild, NgModule } from '@angular/core';
import { setValue, ComponentBase, Template, ComponentMixins } from '@syncfusion/ej2-angular-base';
import { PivotView, GroupingBar, FieldList, CalculatedField, ConditionalFormatting, VirtualScroll, DrillThrough, Toolbar, PivotChart, PDFExport, ExcelExport, NumberFormatting, Grouping, Pager, PivotFieldList } from '@syncfusion/ej2-pivotview';
export * from '@syncfusion/ej2-pivotview';
import { CommonModule } from '@angular/common';

const inputs$1 = ['aggregateTypes', 'allowCalculatedField', 'allowConditionalFormatting', 'allowDataCompression', 'allowDeferLayoutUpdate', 'allowDrillThrough', 'allowExcelExport', 'allowGrouping', 'allowNumberFormatting', 'allowPdfExport', 'cellTemplate', 'chartSettings', 'chartTypes', 'cssClass', 'dataSourceSettings', 'displayOption', 'editSettings', 'enableFieldSearching', 'enableHtmlSanitizer', 'enablePaging', 'enablePersistence', 'enableRtl', 'enableValueSorting', 'enableVirtualization', 'exportAllPages', 'gridSettings', 'groupingBarSettings', 'height', 'hyperlinkSettings', 'loadOnDemandInMemberEditor', 'locale', 'maxNodeLimitInMemberEditor', 'maxRowsInDrillThrough', 'pageSettings', 'pagerSettings', 'pivotValues', 'showFieldList', 'showGroupingBar', 'showToolbar', 'showTooltip', 'showValuesButton', 'spinnerTemplate', 'toolbar', 'toolbarTemplate', 'tooltipTemplate', 'virtualScrollSettings', 'width'];
const outputs$1 = ['actionBegin', 'actionComplete', 'actionFailure', 'afterServiceInvoke', 'aggregateCellInfo', 'aggregateMenuOpen', 'beforeExport', 'beforeServiceInvoke', 'beginDrillThrough', 'calculatedFieldCreate', 'cellClick', 'cellSelected', 'cellSelecting', 'chartSeriesCreated', 'conditionalFormatting', 'created', 'dataBound', 'destroyed', 'drill', 'drillThrough', 'editCompleted', 'enginePopulated', 'enginePopulating', 'exportComplete', 'fetchReport', 'fieldDragStart', 'fieldDrop', 'fieldListRefreshed', 'fieldRemove', 'hyperlinkCellClick', 'load', 'loadReport', 'memberEditorOpen', 'memberFiltering', 'newReport', 'numberFormatting', 'onFieldDropped', 'onHeadersSort', 'onPdfCellRender', 'removeReport', 'renameReport', 'saveReport', 'toolbarClick', 'toolbarRender'];
const twoWays$1 = [];
/**
 * `ej-pivotview` represents the Angular Pivot Table Component.
 * ```html
 * <ej-pivotview></ej-pivotview>
 * ```
 */
let PivotViewComponent = class PivotViewComponent extends PivotView {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('PivotViewGroupingBar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('PivotViewFieldList');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('PivotViewCalculatedField');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            let mod = this.injector.get('PivotViewConditionalFormatting');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            let mod = this.injector.get('PivotViewVirtualScroll');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            let mod = this.injector.get('PivotViewDrillThrough');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            let mod = this.injector.get('PivotViewToolbar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            let mod = this.injector.get('PivotViewPivotChart');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            let mod = this.injector.get('PivotViewPDFExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            let mod = this.injector.get('PivotViewExcelExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            let mod = this.injector.get('PivotViewNumberFormatting');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            let mod = this.injector.get('PivotViewGrouping');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_m) { }
        try {
            let mod = this.injector.get('PivotViewPager');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_o) { }
        this.registerEvents(outputs$1);
        this.addTwoWay.call(this, twoWays$1);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.context.ngAfterContentChecked(this);
    }
};
PivotViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotViewComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
PivotViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: PivotViewComponent, selector: "ejs-pivotview", inputs: { aggregateTypes: "aggregateTypes", allowCalculatedField: "allowCalculatedField", allowConditionalFormatting: "allowConditionalFormatting", allowDataCompression: "allowDataCompression", allowDeferLayoutUpdate: "allowDeferLayoutUpdate", allowDrillThrough: "allowDrillThrough", allowExcelExport: "allowExcelExport", allowGrouping: "allowGrouping", allowNumberFormatting: "allowNumberFormatting", allowPdfExport: "allowPdfExport", cellTemplate: "cellTemplate", chartSettings: "chartSettings", chartTypes: "chartTypes", cssClass: "cssClass", dataSourceSettings: "dataSourceSettings", displayOption: "displayOption", editSettings: "editSettings", enableFieldSearching: "enableFieldSearching", enableHtmlSanitizer: "enableHtmlSanitizer", enablePaging: "enablePaging", enablePersistence: "enablePersistence", enableRtl: "enableRtl", enableValueSorting: "enableValueSorting", enableVirtualization: "enableVirtualization", exportAllPages: "exportAllPages", gridSettings: "gridSettings", groupingBarSettings: "groupingBarSettings", height: "height", hyperlinkSettings: "hyperlinkSettings", loadOnDemandInMemberEditor: "loadOnDemandInMemberEditor", locale: "locale", maxNodeLimitInMemberEditor: "maxNodeLimitInMemberEditor", maxRowsInDrillThrough: "maxRowsInDrillThrough", pageSettings: "pageSettings", pagerSettings: "pagerSettings", pivotValues: "pivotValues", showFieldList: "showFieldList", showGroupingBar: "showGroupingBar", showToolbar: "showToolbar", showTooltip: "showTooltip", showValuesButton: "showValuesButton", spinnerTemplate: "spinnerTemplate", toolbar: "toolbar", toolbarTemplate: "toolbarTemplate", tooltipTemplate: "tooltipTemplate", virtualScrollSettings: "virtualScrollSettings", width: "width" }, outputs: { actionBegin: "actionBegin", actionComplete: "actionComplete", actionFailure: "actionFailure", afterServiceInvoke: "afterServiceInvoke", aggregateCellInfo: "aggregateCellInfo", aggregateMenuOpen: "aggregateMenuOpen", beforeExport: "beforeExport", beforeServiceInvoke: "beforeServiceInvoke", beginDrillThrough: "beginDrillThrough", calculatedFieldCreate: "calculatedFieldCreate", cellClick: "cellClick", cellSelected: "cellSelected", cellSelecting: "cellSelecting", chartSeriesCreated: "chartSeriesCreated", conditionalFormatting: "conditionalFormatting", created: "created", dataBound: "dataBound", destroyed: "destroyed", drill: "drill", drillThrough: "drillThrough", editCompleted: "editCompleted", enginePopulated: "enginePopulated", enginePopulating: "enginePopulating", exportComplete: "exportComplete", fetchReport: "fetchReport", fieldDragStart: "fieldDragStart", fieldDrop: "fieldDrop", fieldListRefreshed: "fieldListRefreshed", fieldRemove: "fieldRemove", hyperlinkCellClick: "hyperlinkCellClick", load: "load", loadReport: "loadReport", memberEditorOpen: "memberEditorOpen", memberFiltering: "memberFiltering", newReport: "newReport", numberFormatting: "numberFormatting", onFieldDropped: "onFieldDropped", onHeadersSort: "onHeadersSort", onPdfCellRender: "onPdfCellRender", removeReport: "removeReport", renameReport: "renameReport", saveReport: "saveReport", toolbarClick: "toolbarClick", toolbarRender: "toolbarRender" }, queries: [{ propertyName: "cellTemplate", first: true, predicate: ["cellTemplate"], descendants: true }, { propertyName: "tooltipTemplate", first: true, predicate: ["tooltipTemplate"], descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], PivotViewComponent.prototype, "cellTemplate", void 0);
__decorate([
    Template()
], PivotViewComponent.prototype, "tooltipTemplate", void 0);
PivotViewComponent = __decorate([
    ComponentMixins([ComponentBase])
], PivotViewComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotViewComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-pivotview',
                    inputs: inputs$1,
                    outputs: outputs$1,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { cellTemplate: [{
                type: ContentChild,
                args: ['cellTemplate']
            }], tooltipTemplate: [{
                type: ContentChild,
                args: ['tooltipTemplate']
            }] } });

/**
 * NgModule definition for the PivotView component.
 */
class PivotViewModule {
}
PivotViewModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotViewModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PivotViewModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotViewModule, declarations: [PivotViewComponent], imports: [CommonModule], exports: [PivotViewComponent] });
PivotViewModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotViewModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotViewModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        PivotViewComponent
                    ],
                    exports: [
                        PivotViewComponent
                    ]
                }]
        }] });

const GroupingBarService = { provide: 'PivotViewGroupingBar', useValue: GroupingBar };
const FieldListService = { provide: 'PivotViewFieldList', useValue: FieldList };
const CalculatedFieldService = { provide: 'PivotViewCalculatedField', useValue: CalculatedField };
const ConditionalFormattingService = { provide: 'PivotViewConditionalFormatting', useValue: ConditionalFormatting };
const VirtualScrollService = { provide: 'PivotViewVirtualScroll', useValue: VirtualScroll };
const DrillThroughService = { provide: 'PivotViewDrillThrough', useValue: DrillThrough };
const ToolbarService = { provide: 'PivotViewToolbar', useValue: Toolbar };
const PivotChartService = { provide: 'PivotViewPivotChart', useValue: PivotChart };
const PDFExportService = { provide: 'PivotViewPDFExport', useValue: PDFExport };
const ExcelExportService = { provide: 'PivotViewExcelExport', useValue: ExcelExport };
const NumberFormattingService = { provide: 'PivotViewNumberFormatting', useValue: NumberFormatting };
const GroupingService = { provide: 'PivotViewGrouping', useValue: Grouping };
const PagerService = { provide: 'PivotViewPager', useValue: Pager };
/**
 * NgModule definition for the PivotView component with providers.
 */
class PivotViewAllModule {
}
PivotViewAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotViewAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PivotViewAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotViewAllModule, imports: [CommonModule, PivotViewModule], exports: [PivotViewModule] });
PivotViewAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotViewAllModule, providers: [
        GroupingBarService,
        FieldListService,
        CalculatedFieldService,
        ConditionalFormattingService,
        VirtualScrollService,
        DrillThroughService,
        ToolbarService,
        PivotChartService,
        PDFExportService,
        ExcelExportService,
        NumberFormattingService,
        GroupingService,
        PagerService
    ], imports: [[CommonModule, PivotViewModule], PivotViewModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotViewAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, PivotViewModule],
                    exports: [
                        PivotViewModule
                    ],
                    providers: [
                        GroupingBarService,
                        FieldListService,
                        CalculatedFieldService,
                        ConditionalFormattingService,
                        VirtualScrollService,
                        DrillThroughService,
                        ToolbarService,
                        PivotChartService,
                        PDFExportService,
                        ExcelExportService,
                        NumberFormattingService,
                        GroupingService,
                        PagerService
                    ]
                }]
        }] });

const inputs = ['aggregateTypes', 'allowCalculatedField', 'allowDeferLayoutUpdate', 'cssClass', 'currencyCode', 'dataSourceSettings', 'enableFieldSearching', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'loadOnDemandInMemberEditor', 'locale', 'maxNodeLimitInMemberEditor', 'renderMode', 'showValuesButton', 'spinnerTemplate', 'target'];
const outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'afterServiceInvoke', 'aggregateCellInfo', 'aggregateMenuOpen', 'beforeServiceInvoke', 'calculatedFieldCreate', 'created', 'dataBound', 'destroyed', 'enginePopulated', 'enginePopulating', 'fieldDragStart', 'fieldDrop', 'fieldRemove', 'load', 'memberEditorOpen', 'memberFiltering', 'onFieldDropped', 'onHeadersSort'];
const twoWays = [];
/**
 * `ej-pivotfieldlist` represents the Angular PivotFieldList Component.
 * ```html
 * <ej-pivotfieldlist></ej-pivotfieldlist>
 * ```
 */
let PivotFieldListComponent = class PivotFieldListComponent extends PivotFieldList {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('PivotViewCalculatedField');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.context.ngAfterContentChecked(this);
    }
};
PivotFieldListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotFieldListComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
PivotFieldListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: PivotFieldListComponent, selector: "ejs-pivotfieldlist", inputs: { aggregateTypes: "aggregateTypes", allowCalculatedField: "allowCalculatedField", allowDeferLayoutUpdate: "allowDeferLayoutUpdate", cssClass: "cssClass", currencyCode: "currencyCode", dataSourceSettings: "dataSourceSettings", enableFieldSearching: "enableFieldSearching", enableHtmlSanitizer: "enableHtmlSanitizer", enablePersistence: "enablePersistence", enableRtl: "enableRtl", loadOnDemandInMemberEditor: "loadOnDemandInMemberEditor", locale: "locale", maxNodeLimitInMemberEditor: "maxNodeLimitInMemberEditor", renderMode: "renderMode", showValuesButton: "showValuesButton", spinnerTemplate: "spinnerTemplate", target: "target" }, outputs: { actionBegin: "actionBegin", actionComplete: "actionComplete", actionFailure: "actionFailure", afterServiceInvoke: "afterServiceInvoke", aggregateCellInfo: "aggregateCellInfo", aggregateMenuOpen: "aggregateMenuOpen", beforeServiceInvoke: "beforeServiceInvoke", calculatedFieldCreate: "calculatedFieldCreate", created: "created", dataBound: "dataBound", destroyed: "destroyed", enginePopulated: "enginePopulated", enginePopulating: "enginePopulating", fieldDragStart: "fieldDragStart", fieldDrop: "fieldDrop", fieldRemove: "fieldRemove", load: "load", memberEditorOpen: "memberEditorOpen", memberFiltering: "memberFiltering", onFieldDropped: "onFieldDropped", onHeadersSort: "onHeadersSort" }, usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
PivotFieldListComponent = __decorate([
    ComponentMixins([ComponentBase])
], PivotFieldListComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotFieldListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-pivotfieldlist',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });

/**
 * NgModule definition for the PivotFieldList component.
 */
class PivotFieldListModule {
}
PivotFieldListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotFieldListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PivotFieldListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotFieldListModule, declarations: [PivotFieldListComponent], imports: [CommonModule], exports: [PivotFieldListComponent] });
PivotFieldListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotFieldListModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotFieldListModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        PivotFieldListComponent
                    ],
                    exports: [
                        PivotFieldListComponent
                    ]
                }]
        }] });

/**
 * NgModule definition for the PivotFieldList component with providers.
 */
class PivotFieldListAllModule {
}
PivotFieldListAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotFieldListAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PivotFieldListAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotFieldListAllModule, imports: [CommonModule, PivotFieldListModule], exports: [PivotFieldListModule] });
PivotFieldListAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotFieldListAllModule, providers: [], imports: [[CommonModule, PivotFieldListModule], PivotFieldListModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotFieldListAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, PivotFieldListModule],
                    exports: [
                        PivotFieldListModule
                    ],
                    providers: []
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CalculatedFieldService, ConditionalFormattingService, DrillThroughService, ExcelExportService, FieldListService, GroupingBarService, GroupingService, NumberFormattingService, PDFExportService, PagerService, PivotChartService, PivotFieldListAllModule, PivotFieldListComponent, PivotFieldListModule, PivotViewAllModule, PivotViewComponent, PivotViewModule, ToolbarService, VirtualScrollService };
//# sourceMappingURL=syncfusion-ej2-angular-pivotview.mjs.map
