import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { PivotView } from '@syncfusion/ej2-pivotview';
import { Template } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
export const inputs = ['aggregateTypes', 'allowCalculatedField', 'allowConditionalFormatting', 'allowDataCompression', 'allowDeferLayoutUpdate', 'allowDrillThrough', 'allowExcelExport', 'allowGrouping', 'allowNumberFormatting', 'allowPdfExport', 'cellTemplate', 'chartSettings', 'chartTypes', 'cssClass', 'dataSourceSettings', 'displayOption', 'editSettings', 'enableFieldSearching', 'enableHtmlSanitizer', 'enablePaging', 'enablePersistence', 'enableRtl', 'enableValueSorting', 'enableVirtualization', 'exportAllPages', 'gridSettings', 'groupingBarSettings', 'height', 'hyperlinkSettings', 'loadOnDemandInMemberEditor', 'locale', 'maxNodeLimitInMemberEditor', 'maxRowsInDrillThrough', 'pageSettings', 'pagerSettings', 'pivotValues', 'showFieldList', 'showGroupingBar', 'showToolbar', 'showTooltip', 'showValuesButton', 'spinnerTemplate', 'toolbar', 'toolbarTemplate', 'tooltipTemplate', 'virtualScrollSettings', 'width'];
export const outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'afterServiceInvoke', 'aggregateCellInfo', 'aggregateMenuOpen', 'beforeExport', 'beforeServiceInvoke', 'beginDrillThrough', 'calculatedFieldCreate', 'cellClick', 'cellSelected', 'cellSelecting', 'chartSeriesCreated', 'conditionalFormatting', 'created', 'dataBound', 'destroyed', 'drill', 'drillThrough', 'editCompleted', 'enginePopulated', 'enginePopulating', 'exportComplete', 'fetchReport', 'fieldDragStart', 'fieldDrop', 'fieldListRefreshed', 'fieldRemove', 'hyperlinkCellClick', 'load', 'loadReport', 'memberEditorOpen', 'memberFiltering', 'newReport', 'numberFormatting', 'onFieldDropped', 'onHeadersSort', 'onPdfCellRender', 'removeReport', 'renameReport', 'saveReport', 'toolbarClick', 'toolbarRender'];
export const twoWays = [];
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
        catch { }
        try {
            let mod = this.injector.get('PivotViewFieldList');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('PivotViewCalculatedField');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('PivotViewConditionalFormatting');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('PivotViewVirtualScroll');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('PivotViewDrillThrough');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('PivotViewToolbar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('PivotViewPivotChart');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('PivotViewPDFExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('PivotViewExcelExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('PivotViewNumberFormatting');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('PivotViewGrouping');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('PivotViewPager');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
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
export { PivotViewComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PivotViewComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-pivotview',
                    inputs: inputs,
                    outputs: outputs,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl2b3R2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9waXZvdHZpZXcvcGl2b3R2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0MsdUJBQXVCLEVBQWlELFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5SixPQUFPLEVBQUUsYUFBYSxFQUErQixlQUFlLEVBQTBCLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdJLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBR3hELE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBYSxDQUFDLGdCQUFnQixFQUFDLHNCQUFzQixFQUFDLDRCQUE0QixFQUFDLHNCQUFzQixFQUFDLHdCQUF3QixFQUFDLG1CQUFtQixFQUFDLGtCQUFrQixFQUFDLGVBQWUsRUFBQyx1QkFBdUIsRUFBQyxnQkFBZ0IsRUFBQyxjQUFjLEVBQUMsZUFBZSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsb0JBQW9CLEVBQUMsZUFBZSxFQUFDLGNBQWMsRUFBQyxzQkFBc0IsRUFBQyxxQkFBcUIsRUFBQyxjQUFjLEVBQUMsbUJBQW1CLEVBQUMsV0FBVyxFQUFDLG9CQUFvQixFQUFDLHNCQUFzQixFQUFDLGdCQUFnQixFQUFDLGNBQWMsRUFBQyxxQkFBcUIsRUFBQyxRQUFRLEVBQUMsbUJBQW1CLEVBQUMsNEJBQTRCLEVBQUMsUUFBUSxFQUFDLDRCQUE0QixFQUFDLHVCQUF1QixFQUFDLGNBQWMsRUFBQyxlQUFlLEVBQUMsYUFBYSxFQUFDLGVBQWUsRUFBQyxpQkFBaUIsRUFBQyxhQUFhLEVBQUMsYUFBYSxFQUFDLGtCQUFrQixFQUFDLGlCQUFpQixFQUFDLFNBQVMsRUFBQyxpQkFBaUIsRUFBQyxpQkFBaUIsRUFB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a0JBQWtCO0lBRDlCLGVBQWUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0dBQ3BCLGtCQUFrQixDQTRMOUI7U0E1TFksa0JBQWtCOzJGQUFsQixrQkFBa0I7a0JBWDlCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLE1BQU0sRUFBRSxNQUFNO29CQUNkLE9BQU8sRUFBRSxPQUFPO29CQUNoQixRQUFRLEVBQUUsRUFBRTtvQkFDWixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsT0FBTyxFQUFFLEVBRVI7aUJBQ0o7K0tBMkRVLFlBQVk7c0JBRmxCLFlBQVk7dUJBQUMsY0FBYztnQkFXckIsZUFBZTtzQkFGckIsWUFBWTt1QkFBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBRdWVyeUxpc3QsIFJlbmRlcmVyMiwgSW5qZWN0b3IsIFZhbHVlUHJvdmlkZXIsIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50QmFzZSwgSUNvbXBvbmVudEJhc2UsIGFwcGx5TWl4aW5zLCBDb21wb25lbnRNaXhpbnMsIFByb3BlcnR5Q29sbGVjdGlvbkluZm8sIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBQaXZvdFZpZXcgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItcGl2b3R2aWV3JztcbmltcG9ydCB7IFRlbXBsYXRlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5cblxuZXhwb3J0IGNvbnN0IGlucHV0czogc3RyaW5nW10gPSBbJ2FnZ3JlZ2F0ZVR5cGVzJywnYWxsb3dDYWxjdWxhdGVkRmllbGQnLCdhbGxvd0NvbmRpdGlvbmFsRm9ybWF0dGluZycsJ2FsbG93RGF0YUNvbXByZXNzaW9uJywnYWxsb3dEZWZlckxheW91dFVwZGF0ZScsJ2FsbG93RHJpbGxUaHJvdWdoJywnYWxsb3dFeGNlbEV4cG9ydCcsJ2FsbG93R3JvdXBpbmcnLCdhbGxvd051bWJlckZvcm1hdHRpbmcnLCdhbGxvd1BkZkV4cG9ydCcsJ2NlbGxUZW1wbGF0ZScsJ2NoYXJ0U2V0dGluZ3MnLCdjaGFydFR5cGVzJywnY3NzQ2xhc3MnLCdkYXRhU291cmNlU2V0dGluZ3MnLCdkaXNwbGF5T3B0aW9uJywnZWRpdFNldHRpbmdzJywnZW5hYmxlRmllbGRTZWFyY2hpbmcnLCdlbmFibGVIdG1sU2FuaXRpemVyJywnZW5hYmxlUGFnaW5nJywnZW5hYmxlUGVyc2lzdGVuY2UnLCdlbmFibGVSdGwnLCdlbmFibGVWYWx1ZVNvcnRpbmcnLCdlbmFibGVWaXJ0dWFsaXphdGlvbicsJ2V4cG9ydEFsbFBhZ2VzJywnZ3JpZFNldHRpbmdzJywnZ3JvdXBpbmdCYXJTZXR0aW5ncycsJ2hlaWdodCcsJ2h5cGVybGlua1NldHRpbmdzJywnbG9hZE9uRGVtYW5kSW5NZW1iZXJFZGl0b3InLCdsb2NhbGUnLCdtYXhOb2RlTGltaXRJbk1lbWJlckVkaXRvcicsJ21heFJvd3NJbkRyaWxsVGhyb3VnaCcsJ3BhZ2VTZXR0aW5ncycsJ3BhZ2VyU2V0dGluZ3MnLCdwaXZvdFZhbHVlcycsJ3Nob3dGaWVsZExpc3QnLCdzaG93R3JvdXBpbmdCYXInLCdzaG93VG9vbGJhcicsJ3Nob3dUb29sdGlwJywnc2hvd1ZhbHVlc0J1dHRvbicsJ3NwaW5uZXJUZW1wbGF0ZScsJ3Rvb2xiYXInLCd0b29sYmFyVGVtcGxhdGUnLCd0b29sdGlwVGVtcGxhdGUnLCd2aXJ0dWFsU2Nyb2xsU2V0dGluZ3MnLCd3aWR0aCddO1xuZXhwb3J0IGNvbnN0IG91dHB1dHM6IHN0cmluZ1tdID0gWydhY3Rpb25CZWdpbicsJ2FjdGlvbkNvbXBsZXRlJywnYWN0aW9uRmFpbHVyZScsJ2FmdGVyU2VydmljZUludm9rZScsJ2FnZ3JlZ2F0ZUNlbGxJbmZvJywnYWdncmVnYXRlTWVudU9wZW4nLCdiZWZvcmVFeHBvcnQnLCdiZWZvcmVTZXJ2aWNlSW52b2tlJywnYmVnaW5EcmlsbFRocm91Z2gnLCdjYWxjdWxhdGVkRmllbGRDcmVhdGUnLCdjZWxsQ2xpY2snLCdjZWxsU2VsZWN0ZWQnLCdjZWxsU2VsZWN0aW5nJywnY2hhcnRTZXJpZXNDcmVhdGVkJywnY29uZGl0aW9uYWxGb3JtYXR0aW5nJywnY3JlYXRlZCcsJ2RhdGFCb3VuZCcsJ2Rlc3Ryb3llZCcsJ2RyaWxsJywnZHJpbGxUaHJvdWdoJywnZWRpdENvbXBsZXRlZCcsJ2VuZ2luZVBvcHVsYXRlZCcsJ2VuZ2luZVBvcHVsYXRpbmcnLCdleHBvcnRDb21wbGV0ZScsJ2ZldGNoUmVwb3J0JywnZmllbGREcmFnU3RhcnQnLCdmaWVsZERyb3AnLCdmaWVsZExpc3RSZWZyZXNoZWQnLCdmaWVsZFJlbW92ZScsJ2h5cGVybGlua0NlbGxDbGljaycsJ2xvYWQnLCdsb2FkUmVwb3J0JywnbWVtYmVyRWRpdG9yT3BlbicsJ21lbWJlckZpbHRlcmluZycsJ25ld1JlcG9ydCcsJ251bWJlckZvcm1hdHRpbmcnLCdvbkZpZWxkRHJvcHBlZCcsJ29uSGVhZGVyc1NvcnQnLCdvblBkZkNlbGxSZW5kZXInLCdyZW1vdmVSZXBvcnQnLCdyZW5hbWVSZXBvcnQnLCdzYXZlUmVwb3J0JywndG9vbGJhckNsaWNrJywndG9vbGJhclJlbmRlciddO1xuZXhwb3J0IGNvbnN0IHR3b1dheXM6IHN0cmluZ1tdID0gW107XG5cbi8qKlxuICogYGVqLXBpdm90dmlld2AgcmVwcmVzZW50cyB0aGUgQW5ndWxhciBQaXZvdCBUYWJsZSBDb21wb25lbnQuXG4gKiBgYGBodG1sXG4gKiA8ZWotcGl2b3R2aWV3PjwvZWotcGl2b3R2aWV3PlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZWpzLXBpdm90dmlldycsXG4gICAgaW5wdXRzOiBpbnB1dHMsXG4gICAgb3V0cHV0czogb3V0cHV0cyxcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgcXVlcmllczoge1xuXG4gICAgfVxufSlcbkBDb21wb25lbnRNaXhpbnMoW0NvbXBvbmVudEJhc2VdKVxuZXhwb3J0IGNsYXNzIFBpdm90Vmlld0NvbXBvbmVudCBleHRlbmRzIFBpdm90VmlldyBpbXBsZW1lbnRzIElDb21wb25lbnRCYXNlIHtcbiAgICBwdWJsaWMgY29udGV4dCA6IGFueTtcbiAgICBwdWJsaWMgdGFnT2JqZWN0czogYW55O1xuXHRhY3Rpb25CZWdpbjogYW55O1xuXHRhY3Rpb25Db21wbGV0ZTogYW55O1xuXHRhY3Rpb25GYWlsdXJlOiBhbnk7XG5cdGFmdGVyU2VydmljZUludm9rZTogYW55O1xuXHRhZ2dyZWdhdGVDZWxsSW5mbzogYW55O1xuXHRhZ2dyZWdhdGVNZW51T3BlbjogYW55O1xuXHRiZWZvcmVFeHBvcnQ6IGFueTtcblx0YmVmb3JlU2VydmljZUludm9rZTogYW55O1xuXHRiZWdpbkRyaWxsVGhyb3VnaDogYW55O1xuXHRjYWxjdWxhdGVkRmllbGRDcmVhdGU6IGFueTtcblx0Y2VsbENsaWNrOiBhbnk7XG5cdGNlbGxTZWxlY3RlZDogYW55O1xuXHRjZWxsU2VsZWN0aW5nOiBhbnk7XG5cdGNoYXJ0U2VyaWVzQ3JlYXRlZDogYW55O1xuXHRjb25kaXRpb25hbEZvcm1hdHRpbmc6IGFueTtcblx0Y3JlYXRlZDogYW55O1xuXHRkYXRhQm91bmQ6IGFueTtcblx0ZGVzdHJveWVkOiBhbnk7XG5cdGRyaWxsOiBhbnk7XG5cdGRyaWxsVGhyb3VnaDogYW55O1xuXHRlZGl0Q29tcGxldGVkOiBhbnk7XG5cdGVuZ2luZVBvcHVsYXRlZDogYW55O1xuXHRlbmdpbmVQb3B1bGF0aW5nOiBhbnk7XG5cdGV4cG9ydENvbXBsZXRlOiBhbnk7XG5cdGZldGNoUmVwb3J0OiBhbnk7XG5cdGZpZWxkRHJhZ1N0YXJ0OiBhbnk7XG5cdGZpZWxkRHJvcDogYW55O1xuXHRmaWVsZExpc3RSZWZyZXNoZWQ6IGFueTtcblx0ZmllbGRSZW1vdmU6IGFueTtcblx0aHlwZXJsaW5rQ2VsbENsaWNrOiBhbnk7XG5cdGxvYWQ6IGFueTtcblx0bG9hZFJlcG9ydDogYW55O1xuXHRtZW1iZXJFZGl0b3JPcGVuOiBhbnk7XG5cdG1lbWJlckZpbHRlcmluZzogYW55O1xuXHRuZXdSZXBvcnQ6IGFueTtcblx0bnVtYmVyRm9ybWF0dGluZzogYW55O1xuXHRvbkZpZWxkRHJvcHBlZDogYW55O1xuXHRvbkhlYWRlcnNTb3J0OiBhbnk7XG5cdG9uUGRmQ2VsbFJlbmRlcjogYW55O1xuXHRyZW1vdmVSZXBvcnQ6IGFueTtcblx0cmVuYW1lUmVwb3J0OiBhbnk7XG5cdHNhdmVSZXBvcnQ6IGFueTtcblx0dG9vbGJhckNsaWNrOiBhbnk7XG5cdHB1YmxpYyB0b29sYmFyUmVuZGVyOiBhbnk7XG5cblxuICAgIC8qKiBcbiAgICAgKiBBbGxvd3MgdGhlIHRhYmxlIGNlbGwgZWxlbWVudHMgdG8gYmUgY3VzdG9taXplZCB3aXRoIGVpdGhlciBhbiBIVE1MIHN0cmluZyBvciB0aGUgZWxlbWVudOKAmXMgSUQsIFxuICAgICAqIHRoYXQgY2FuIGJlIHVzZWQgdG8gYWRkIGFkZGl0aW9uYWwgSFRNTCBlbGVtZW50cyB3aXRoIGN1c3RvbSBmb3JtYXRzIHRvIHRoZSBjZWxsIGVsZW1lbnRzIHRoYXQgYXJlIGRpc3BsYXllZCBpbiB0aGUgcGl2b3QgdGFibGUuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqIEBhc3B0eXBlIHN0cmluZ1xuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ2NlbGxUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgY2VsbFRlbXBsYXRlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIEFsbG93cyB0aGUgdG9vbHRpcCBlbGVtZW50IHRvIGJlIGN1c3RvbWl6ZWQgd2l0aCBlaXRoZXIgYW4gSFRNTCBzdHJpbmcgb3IgdGhlIGVsZW1lbnTigJlzIElELCBcbiAgICAgKiBjYW4gYmUgdXNlZCB0byBkaXNwbGF5ZWQgd2l0aCBjdXN0b20gZm9ybWF0cyBlaXRoZXIgYnkgbW91c2UgaG92ZXJpbmcgb3IgYnkgdG91Y2ggaW4gdGhlIHBpdm90IHRhYmxlLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKiBAYXNwdHlwZSBzdHJpbmdcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCd0b29sdGlwVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIHRvb2x0aXBUZW1wbGF0ZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ0VsZTogRWxlbWVudFJlZiwgcHJpdmF0ZSBzcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMubmdFbGUubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMgPSB0aGlzLmluamVjdGVkTW9kdWxlcyB8fCBbXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ1Bpdm90Vmlld0dyb3VwaW5nQmFyJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdQaXZvdFZpZXdGaWVsZExpc3QnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ1Bpdm90Vmlld0NhbGN1bGF0ZWRGaWVsZCcpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnUGl2b3RWaWV3Q29uZGl0aW9uYWxGb3JtYXR0aW5nJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdQaXZvdFZpZXdWaXJ0dWFsU2Nyb2xsJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdQaXZvdFZpZXdEcmlsbFRocm91Z2gnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ1Bpdm90Vmlld1Rvb2xiYXInKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ1Bpdm90Vmlld1Bpdm90Q2hhcnQnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ1Bpdm90Vmlld1BERkV4cG9ydCcpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnUGl2b3RWaWV3RXhjZWxFeHBvcnQnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ1Bpdm90Vmlld051bWJlckZvcm1hdHRpbmcnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ1Bpdm90Vmlld0dyb3VwaW5nJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdQaXZvdFZpZXdQYWdlcicpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuYWRkVHdvV2F5LmNhbGwodGhpcywgdHdvV2F5cyk7XG4gICAgICAgIHNldFZhbHVlKCdjdXJyZW50SW5zdGFuY2UnLCB0aGlzLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB0aGlzLmNvbnRleHQgID0gbmV3IENvbXBvbmVudEJhc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5uZ09uSW5pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRleHQubmdBZnRlclZpZXdJbml0KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250ZXh0Lm5nT25EZXN0cm95KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNvbnRleHQubmdBZnRlckNvbnRlbnRDaGVja2VkKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3RlckV2ZW50czogKGV2ZW50TGlzdDogc3RyaW5nW10pID0+IHZvaWQ7XG4gICAgcHVibGljIGFkZFR3b1dheTogKHByb3BMaXN0OiBzdHJpbmdbXSkgPT4gdm9pZDtcbn1cblxuIl19