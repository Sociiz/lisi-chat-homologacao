import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { Chart3D } from '@syncfusion/ej2-charts';
import { Chart3DSeriesCollectionDirective } from './series.directive';
import { Chart3DAxesDirective } from './axes.directive';
import { Chart3DRowsDirective } from './rows.directive';
import { Chart3DColumnsDirective } from './columns.directive';
import { Chart3DSelectedDataIndexesDirective } from './selecteddataindexes.directive';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * 3D Chart Component
 * ```html
 * <ejschart3d></ejschart3d>
 * ```
 */
export declare class Chart3DComponent extends Chart3D implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    afterExport: any;
    axisLabelRender: any;
    beforeExport: any;
    beforePrint: any;
    beforeResize: any;
    chart3DMouseClick: any;
    chart3DMouseDown: any;
    chart3DMouseLeave: any;
    chart3DMouseMove: any;
    chart3DMouseUp: any;
    legendClick: any;
    legendRender: any;
    load: any;
    loaded: any;
    pointClick: any;
    pointMove: any;
    pointRender: any;
    resized: any;
    selectionComplete: any;
    seriesRender: any;
    textRender: any;
    tooltipRender: any;
    dataSourceChange: any;
    childSeries: QueryList<Chart3DSeriesCollectionDirective>;
    childAxes: QueryList<Chart3DAxesDirective>;
    childRows: QueryList<Chart3DRowsDirective>;
    childColumns: QueryList<Chart3DColumnsDirective>;
    childSelectedDataIndexes: QueryList<Chart3DSelectedDataIndexesDirective>;
    tags: string[];
    tooltip_template: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Chart3DComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Chart3DComponent, "ejs-chart3d", never, { "axes": "axes"; "background": "background"; "backgroundImage": "backgroundImage"; "border": "border"; "columns": "columns"; "currencyCode": "currencyCode"; "dataSource": "dataSource"; "depth": "depth"; "description": "description"; "enableExport": "enableExport"; "enablePersistence": "enablePersistence"; "enableRotation": "enableRotation"; "enableRtl": "enableRtl"; "enableSideBySidePlacement": "enableSideBySidePlacement"; "height": "height"; "highlightColor": "highlightColor"; "highlightMode": "highlightMode"; "highlightPattern": "highlightPattern"; "isMultiSelect": "isMultiSelect"; "isTransposed": "isTransposed"; "legendSettings": "legendSettings"; "locale": "locale"; "margin": "margin"; "palettes": "palettes"; "perspectiveAngle": "perspectiveAngle"; "primaryXAxis": "primaryXAxis"; "primaryYAxis": "primaryYAxis"; "rotation": "rotation"; "rows": "rows"; "selectedDataIndexes": "selectedDataIndexes"; "selectionMode": "selectionMode"; "selectionPattern": "selectionPattern"; "series": "series"; "subTitle": "subTitle"; "subTitleStyle": "subTitleStyle"; "theme": "theme"; "tilt": "tilt"; "title": "title"; "titleStyle": "titleStyle"; "tooltip": "tooltip"; "useGroupingSeparator": "useGroupingSeparator"; "wallColor": "wallColor"; "wallSize": "wallSize"; "width": "width"; }, { "afterExport": "afterExport"; "axisLabelRender": "axisLabelRender"; "beforeExport": "beforeExport"; "beforePrint": "beforePrint"; "beforeResize": "beforeResize"; "chart3DMouseClick": "chart3DMouseClick"; "chart3DMouseDown": "chart3DMouseDown"; "chart3DMouseLeave": "chart3DMouseLeave"; "chart3DMouseMove": "chart3DMouseMove"; "chart3DMouseUp": "chart3DMouseUp"; "legendClick": "legendClick"; "legendRender": "legendRender"; "load": "load"; "loaded": "loaded"; "pointClick": "pointClick"; "pointMove": "pointMove"; "pointRender": "pointRender"; "resized": "resized"; "selectionComplete": "selectionComplete"; "seriesRender": "seriesRender"; "textRender": "textRender"; "tooltipRender": "tooltipRender"; "dataSourceChange": "dataSourceChange"; }, ["tooltip_template", "childSeries", "childAxes", "childRows", "childColumns", "childSelectedDataIndexes"], never>;
}
