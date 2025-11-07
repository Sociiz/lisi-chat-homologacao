import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { CircularChart3D } from '@syncfusion/ej2-charts';
import { Template } from '@syncfusion/ej2-angular-base';
import { CircularChart3DSeriesCollectionDirective } from './series.directive';
import { CircularChart3DSelectedDataIndexesDirective } from './selecteddataindexes.directive';
import * as i0 from "@angular/core";
export const inputs = ['background', 'backgroundImage', 'border', 'dataSource', 'depth', 'enableAnimation', 'enableExport', 'enablePersistence', 'enableRotation', 'enableRtl', 'height', 'highlightColor', 'highlightMode', 'highlightPattern', 'isMultiSelect', 'legendSettings', 'locale', 'margin', 'rotation', 'selectedDataIndexes', 'selectionMode', 'selectionPattern', 'series', 'subTitle', 'subTitleStyle', 'theme', 'tilt', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width'];
export const outputs = ['afterExport', 'beforeExport', 'beforePrint', 'beforeResize', 'circularChart3DMouseClick', 'circularChart3DMouseDown', 'circularChart3DMouseLeave', 'circularChart3DMouseMove', 'circularChart3DMouseUp', 'legendClick', 'legendRender', 'load', 'loaded', 'pointClick', 'pointMove', 'pointRender', 'resized', 'selectionComplete', 'seriesRender', 'textRender', 'tooltipRender', 'dataSourceChange'];
export const twoWays = ['dataSource'];
/**
 * CircularChart3D Component
 * ```html
 * <ejs-circularchart3d></ejs-circularchart3d>
 * ```
 */
let CircularChart3DComponent = class CircularChart3DComponent extends CircularChart3D {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['series', 'selectedDataIndexes'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('ChartsPieSeries3D');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsCircularChartTooltip3D');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsCircularChartLegend3D');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsCircularChartSelection3D');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsCircularChartDataLabel3D');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsCircularChartHighlight3D');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsCircularChartExport3D');
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
        this.tagObjects[0].instance = this.childSeries;
        if (this.childSelectedDataIndexes) {
            this.tagObjects[1].instance = this.childSelectedDataIndexes;
        }
        this.context.ngAfterContentChecked(this);
    }
};
CircularChart3DComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CircularChart3DComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
CircularChart3DComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: CircularChart3DComponent, selector: "ejs-circularchart3d", inputs: { background: "background", backgroundImage: "backgroundImage", border: "border", dataSource: "dataSource", depth: "depth", enableAnimation: "enableAnimation", enableExport: "enableExport", enablePersistence: "enablePersistence", enableRotation: "enableRotation", enableRtl: "enableRtl", height: "height", highlightColor: "highlightColor", highlightMode: "highlightMode", highlightPattern: "highlightPattern", isMultiSelect: "isMultiSelect", legendSettings: "legendSettings", locale: "locale", margin: "margin", rotation: "rotation", selectedDataIndexes: "selectedDataIndexes", selectionMode: "selectionMode", selectionPattern: "selectionPattern", series: "series", subTitle: "subTitle", subTitleStyle: "subTitleStyle", theme: "theme", tilt: "tilt", title: "title", titleStyle: "titleStyle", tooltip: "tooltip", useGroupingSeparator: "useGroupingSeparator", width: "width" }, outputs: { afterExport: "afterExport", beforeExport: "beforeExport", beforePrint: "beforePrint", beforeResize: "beforeResize", circularChart3DMouseClick: "circularChart3DMouseClick", circularChart3DMouseDown: "circularChart3DMouseDown", circularChart3DMouseLeave: "circularChart3DMouseLeave", circularChart3DMouseMove: "circularChart3DMouseMove", circularChart3DMouseUp: "circularChart3DMouseUp", legendClick: "legendClick", legendRender: "legendRender", load: "load", loaded: "loaded", pointClick: "pointClick", pointMove: "pointMove", pointRender: "pointRender", resized: "resized", selectionComplete: "selectionComplete", seriesRender: "seriesRender", textRender: "textRender", tooltipRender: "tooltipRender", dataSourceChange: "dataSourceChange" }, queries: [{ propertyName: "tooltip_template", first: true, predicate: ["tooltipTemplate"], descendants: true }, { propertyName: "childSeries", first: true, predicate: CircularChart3DSeriesCollectionDirective, descendants: true }, { propertyName: "childSelectedDataIndexes", first: true, predicate: CircularChart3DSelectedDataIndexesDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], CircularChart3DComponent.prototype, "tooltip_template", void 0);
CircularChart3DComponent = __decorate([
    ComponentMixins([ComponentBase])
], CircularChart3DComponent);
export { CircularChart3DComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CircularChart3DComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-circularchart3d',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childSeries: new ContentChild(CircularChart3DSeriesCollectionDirective),
                        childSelectedDataIndexes: new ContentChild(CircularChart3DSelectedDataIndexesDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { tooltip_template: [{
                type: ContentChild,
                args: ['tooltipTemplate']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY3VsYXJjaGFydDNkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jaXJjdWxhcmNoYXJ0M2QvY2lyY3VsYXJjaGFydDNkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0MsdUJBQXVCLEVBQWlELFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5SixPQUFPLEVBQUUsYUFBYSxFQUErQixlQUFlLEVBQTBCLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdJLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUUsT0FBTyxFQUFFLDJDQUEyQyxFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBRTlGLE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBYSxDQUFDLFlBQVksRUFBQyxpQkFBaUIsRUFBQyxRQUFRLEVBQUMsWUFBWSxFQUFDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxjQUFjLEVBQUMsbUJBQW1CLEVBQUMsZ0JBQWdCLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxlQUFlLEVBQUMsa0JBQWtCLEVBQUMsZUFBZSxFQUFDLGdCQUFnQixFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLHFCQUFxQixFQUFDLGVBQWUsRUFBQyxrQkFBa0IsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLGVBQWUsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsU0FBUyxFQUFDLHNCQUFzQixFQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3RkLE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBYSxDQUFDLGFBQWEsRUFBQyxj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O1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDL0MsSUFBSSxJQUFJLENBQUMsd0JBQXdCLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLHdCQUErQixDQUFDO1NBQ3RFO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBSUosQ0FBQTtxSEFqSFksd0JBQXdCO3lHQUF4Qix3QkFBd0IsK3lEQUxDLHdDQUF3QywyRkFDM0IsMkNBQTJDLHVFQUpoRixFQUFFO0FBc0NaO0lBREMsUUFBUSxFQUFFO2tFQUNrQjtBQTlCcEIsd0JBQXdCO0lBRHBDLGVBQWUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0dBQ3BCLHdCQUF3QixDQWlIcEM7U0FqSFksd0JBQXdCOzJGQUF4Qix3QkFBd0I7a0JBWnBDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsTUFBTSxFQUFFLE1BQU07b0JBQ2QsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLFFBQVEsRUFBRSxFQUFFO29CQUNaLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxPQUFPLEVBQUU7d0JBQ0wsV0FBVyxFQUFFLElBQUksWUFBWSxDQUFDLHdDQUF3QyxDQUFDO3dCQUN2RSx3QkFBd0IsRUFBRSxJQUFJLFlBQVksQ0FBQywyQ0FBMkMsQ0FBQztxQkFDMUY7aUJBQ0o7K0tBZ0NVLGdCQUFnQjtzQkFGdEIsWUFBWTt1QkFBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBRdWVyeUxpc3QsIFJlbmRlcmVyMiwgSW5qZWN0b3IsIFZhbHVlUHJvdmlkZXIsIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50QmFzZSwgSUNvbXBvbmVudEJhc2UsIGFwcGx5TWl4aW5zLCBDb21wb25lbnRNaXhpbnMsIFByb3BlcnR5Q29sbGVjdGlvbkluZm8sIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBDaXJjdWxhckNoYXJ0M0QgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItY2hhcnRzJztcbmltcG9ydCB7IFRlbXBsYXRlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBDaXJjdWxhckNoYXJ0M0RTZXJpZXNDb2xsZWN0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9zZXJpZXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IENpcmN1bGFyQ2hhcnQzRFNlbGVjdGVkRGF0YUluZGV4ZXNEaXJlY3RpdmUgfSBmcm9tICcuL3NlbGVjdGVkZGF0YWluZGV4ZXMuZGlyZWN0aXZlJztcblxuZXhwb3J0IGNvbnN0IGlucHV0czogc3RyaW5nW10gPSBbJ2JhY2tncm91bmQnLCdiYWNrZ3JvdW5kSW1hZ2UnLCdib3JkZXInLCdkYXRhU291cmNlJywnZGVwdGgnLCdlbmFibGVBbmltYXRpb24nLCdlbmFibGVFeHBvcnQnLCdlbmFibGVQZXJzaXN0ZW5jZScsJ2VuYWJsZVJvdGF0aW9uJywnZW5hYmxlUnRsJywnaGVpZ2h0JywnaGlnaGxpZ2h0Q29sb3InLCdoaWdobGlnaHRNb2RlJywnaGlnaGxpZ2h0UGF0dGVybicsJ2lzTXVsdGlTZWxlY3QnLCdsZWdlbmRTZXR0aW5ncycsJ2xvY2FsZScsJ21hcmdpbicsJ3JvdGF0aW9uJywnc2VsZWN0ZWREYXRhSW5kZXhlcycsJ3NlbGVjdGlvbk1vZGUnLCdzZWxlY3Rpb25QYXR0ZXJuJywnc2VyaWVzJywnc3ViVGl0bGUnLCdzdWJUaXRsZVN0eWxlJywndGhlbWUnLCd0aWx0JywndGl0bGUnLCd0aXRsZVN0eWxlJywndG9vbHRpcCcsJ3VzZUdyb3VwaW5nU2VwYXJhdG9yJywnd2lkdGgnXTtcbmV4cG9ydCBjb25zdCBvdXRwdXRzOiBzdHJpbmdbXSA9IFsnYWZ0ZXJFeHBvcnQnLCdiZWZvcmVFeHBvcnQnLCdiZWZvcmVQcmludCcsJ2JlZm9yZVJlc2l6ZScsJ2NpcmN1bGFyQ2hhcnQzRE1vdXNlQ2xpY2snLCdjaXJjdWxhckNoYXJ0M0RNb3VzZURvd24nLCdjaXJjdWxhckNoYXJ0M0RNb3VzZUxlYXZlJywnY2lyY3VsYXJDaGFydDNETW91c2VNb3ZlJywnY2lyY3VsYXJDaGFydDNETW91c2VVcCcsJ2xlZ2VuZENsaWNrJywnbGVnZW5kUmVuZGVyJywnbG9hZCcsJ2xvYWRlZCcsJ3BvaW50Q2xpY2snLCdwb2ludE1vdmUnLCdwb2ludFJlbmRlcicsJ3Jlc2l6ZWQnLCdzZWxlY3Rpb25Db21wbGV0ZScsJ3Nlcmllc1JlbmRlcicsJ3RleHRSZW5kZXInLCd0b29sdGlwUmVuZGVyJywnZGF0YVNvdXJjZUNoYW5nZSddO1xuZXhwb3J0IGNvbnN0IHR3b1dheXM6IHN0cmluZ1tdID0gWydkYXRhU291cmNlJ107XG5cbi8qKlxuICogQ2lyY3VsYXJDaGFydDNEIENvbXBvbmVudFxuICogYGBgaHRtbFxuICogPGVqcy1jaXJjdWxhcmNoYXJ0M2Q+PC9lanMtY2lyY3VsYXJjaGFydDNkPlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZWpzLWNpcmN1bGFyY2hhcnQzZCcsXG4gICAgaW5wdXRzOiBpbnB1dHMsXG4gICAgb3V0cHV0czogb3V0cHV0cyxcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgcXVlcmllczoge1xuICAgICAgICBjaGlsZFNlcmllczogbmV3IENvbnRlbnRDaGlsZChDaXJjdWxhckNoYXJ0M0RTZXJpZXNDb2xsZWN0aW9uRGlyZWN0aXZlKSwgXG4gICAgICAgIGNoaWxkU2VsZWN0ZWREYXRhSW5kZXhlczogbmV3IENvbnRlbnRDaGlsZChDaXJjdWxhckNoYXJ0M0RTZWxlY3RlZERhdGFJbmRleGVzRGlyZWN0aXZlKVxuICAgIH1cbn0pXG5AQ29tcG9uZW50TWl4aW5zKFtDb21wb25lbnRCYXNlXSlcbmV4cG9ydCBjbGFzcyBDaXJjdWxhckNoYXJ0M0RDb21wb25lbnQgZXh0ZW5kcyBDaXJjdWxhckNoYXJ0M0QgaW1wbGVtZW50cyBJQ29tcG9uZW50QmFzZSB7XG4gICAgcHVibGljIGNvbnRleHQgOiBhbnk7XG4gICAgcHVibGljIHRhZ09iamVjdHM6IGFueTtcblx0YWZ0ZXJFeHBvcnQ6IGFueTtcblx0YmVmb3JlRXhwb3J0OiBhbnk7XG5cdGJlZm9yZVByaW50OiBhbnk7XG5cdGJlZm9yZVJlc2l6ZTogYW55O1xuXHRjaXJjdWxhckNoYXJ0M0RNb3VzZUNsaWNrOiBhbnk7XG5cdGNpcmN1bGFyQ2hhcnQzRE1vdXNlRG93bjogYW55O1xuXHRjaXJjdWxhckNoYXJ0M0RNb3VzZUxlYXZlOiBhbnk7XG5cdGNpcmN1bGFyQ2hhcnQzRE1vdXNlTW92ZTogYW55O1xuXHRjaXJjdWxhckNoYXJ0M0RNb3VzZVVwOiBhbnk7XG5cdGxlZ2VuZENsaWNrOiBhbnk7XG5cdGxlZ2VuZFJlbmRlcjogYW55O1xuXHRsb2FkOiBhbnk7XG5cdGxvYWRlZDogYW55O1xuXHRwb2ludENsaWNrOiBhbnk7XG5cdHBvaW50TW92ZTogYW55O1xuXHRwb2ludFJlbmRlcjogYW55O1xuXHRyZXNpemVkOiBhbnk7XG5cdHNlbGVjdGlvbkNvbXBsZXRlOiBhbnk7XG5cdHNlcmllc1JlbmRlcjogYW55O1xuXHR0ZXh0UmVuZGVyOiBhbnk7XG5cdHRvb2x0aXBSZW5kZXI6IGFueTtcblx0cHVibGljIGRhdGFTb3VyY2VDaGFuZ2U6IGFueTtcbiAgICBwdWJsaWMgY2hpbGRTZXJpZXM6IFF1ZXJ5TGlzdDxDaXJjdWxhckNoYXJ0M0RTZXJpZXNDb2xsZWN0aW9uRGlyZWN0aXZlPjtcbiAgICBwdWJsaWMgY2hpbGRTZWxlY3RlZERhdGFJbmRleGVzOiBRdWVyeUxpc3Q8Q2lyY3VsYXJDaGFydDNEU2VsZWN0ZWREYXRhSW5kZXhlc0RpcmVjdGl2ZT47XG4gICAgcHVibGljIHRhZ3M6IHN0cmluZ1tdID0gWydzZXJpZXMnLCAnc2VsZWN0ZWREYXRhSW5kZXhlcyddO1xuICAgIEBDb250ZW50Q2hpbGQoJ3Rvb2x0aXBUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgdG9vbHRpcF90ZW1wbGF0ZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ0VsZTogRWxlbWVudFJlZiwgcHJpdmF0ZSBzcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMubmdFbGUubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMgPSB0aGlzLmluamVjdGVkTW9kdWxlcyB8fCBbXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ0NoYXJ0c1BpZVNlcmllczNEJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdDaGFydHNDaXJjdWxhckNoYXJ0VG9vbHRpcDNEJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdDaGFydHNDaXJjdWxhckNoYXJ0TGVnZW5kM0QnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ0NoYXJ0c0NpcmN1bGFyQ2hhcnRTZWxlY3Rpb24zRCcpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnQ2hhcnRzQ2lyY3VsYXJDaGFydERhdGFMYWJlbDNEJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdDaGFydHNDaXJjdWxhckNoYXJ0SGlnaGxpZ2h0M0QnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ0NoYXJ0c0NpcmN1bGFyQ2hhcnRFeHBvcnQzRCcpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuYWRkVHdvV2F5LmNhbGwodGhpcywgdHdvV2F5cyk7XG4gICAgICAgIHNldFZhbHVlKCdjdXJyZW50SW5zdGFuY2UnLCB0aGlzLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB0aGlzLmNvbnRleHQgID0gbmV3IENvbXBvbmVudEJhc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5uZ09uSW5pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRleHQubmdBZnRlclZpZXdJbml0KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250ZXh0Lm5nT25EZXN0cm95KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGFnT2JqZWN0c1swXS5pbnN0YW5jZSA9IHRoaXMuY2hpbGRTZXJpZXM7XG4gICAgICAgIGlmICh0aGlzLmNoaWxkU2VsZWN0ZWREYXRhSW5kZXhlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhZ09iamVjdHNbMV0uaW5zdGFuY2UgPSB0aGlzLmNoaWxkU2VsZWN0ZWREYXRhSW5kZXhlcyBhcyBhbnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRleHQubmdBZnRlckNvbnRlbnRDaGVja2VkKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3RlckV2ZW50czogKGV2ZW50TGlzdDogc3RyaW5nW10pID0+IHZvaWQ7XG4gICAgcHVibGljIGFkZFR3b1dheTogKHByb3BMaXN0OiBzdHJpbmdbXSkgPT4gdm9pZDtcbn1cblxuIl19