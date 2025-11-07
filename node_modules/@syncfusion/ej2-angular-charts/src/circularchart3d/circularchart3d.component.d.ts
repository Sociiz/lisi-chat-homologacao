import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { CircularChart3D } from '@syncfusion/ej2-charts';
import { CircularChart3DSeriesCollectionDirective } from './series.directive';
import { CircularChart3DSelectedDataIndexesDirective } from './selecteddataindexes.directive';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * CircularChart3D Component
 * ```html
 * <ejs-circularchart3d></ejs-circularchart3d>
 * ```
 */
export declare class CircularChart3DComponent extends CircularChart3D implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    afterExport: any;
    beforeExport: any;
    beforePrint: any;
    beforeResize: any;
    circularChart3DMouseClick: any;
    circularChart3DMouseDown: any;
    circularChart3DMouseLeave: any;
    circularChart3DMouseMove: any;
    circularChart3DMouseUp: any;
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
    childSeries: QueryList<CircularChart3DSeriesCollectionDirective>;
    childSelectedDataIndexes: QueryList<CircularChart3DSelectedDataIndexesDirective>;
    tags: string[];
    tooltip_template: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CircularChart3DComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CircularChart3DComponent, "ejs-circularchart3d", never, { "background": "background"; "backgroundImage": "backgroundImage"; "border": "border"; "dataSource": "dataSource"; "depth": "depth"; "enableAnimation": "enableAnimation"; "enableExport": "enableExport"; "enablePersistence": "enablePersistence"; "enableRotation": "enableRotation"; "enableRtl": "enableRtl"; "height": "height"; "highlightColor": "highlightColor"; "highlightMode": "highlightMode"; "highlightPattern": "highlightPattern"; "isMultiSelect": "isMultiSelect"; "legendSettings": "legendSettings"; "locale": "locale"; "margin": "margin"; "rotation": "rotation"; "selectedDataIndexes": "selectedDataIndexes"; "selectionMode": "selectionMode"; "selectionPattern": "selectionPattern"; "series": "series"; "subTitle": "subTitle"; "subTitleStyle": "subTitleStyle"; "theme": "theme"; "tilt": "tilt"; "title": "title"; "titleStyle": "titleStyle"; "tooltip": "tooltip"; "useGroupingSeparator": "useGroupingSeparator"; "width": "width"; }, { "afterExport": "afterExport"; "beforeExport": "beforeExport"; "beforePrint": "beforePrint"; "beforeResize": "beforeResize"; "circularChart3DMouseClick": "circularChart3DMouseClick"; "circularChart3DMouseDown": "circularChart3DMouseDown"; "circularChart3DMouseLeave": "circularChart3DMouseLeave"; "circularChart3DMouseMove": "circularChart3DMouseMove"; "circularChart3DMouseUp": "circularChart3DMouseUp"; "legendClick": "legendClick"; "legendRender": "legendRender"; "load": "load"; "loaded": "loaded"; "pointClick": "pointClick"; "pointMove": "pointMove"; "pointRender": "pointRender"; "resized": "resized"; "selectionComplete": "selectionComplete"; "seriesRender": "seriesRender"; "textRender": "textRender"; "tooltipRender": "tooltipRender"; "dataSourceChange": "dataSourceChange"; }, ["tooltip_template", "childSeries", "childSelectedDataIndexes"], never>;
}
