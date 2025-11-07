import { ElementRef, ViewContainerRef, Renderer2, Injector, QueryList } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { DashboardLayout } from '@syncfusion/ej2-layouts';
import { PanelsDirective } from './panels.directive';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Represents the Essential JS 2 Angular DashboardLayout Component.
 * ```html
 * <ejs-dashboardlayout></ejs-dashboardlayout>
 * ```
 */
export declare class DashboardLayoutComponent extends DashboardLayout implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    containerContext: any;
    tagObjects: any;
    change: any;
    created: any;
    destroyed: any;
    drag: any;
    dragStart: any;
    dragStop: any;
    resize: any;
    resizeStart: any;
    resizeStop: any;
    childPanels: QueryList<PanelsDirective>;
    tags: string[];
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardLayoutComponent, "ejs-dashboardlayout", never, { "allowDragging": "allowDragging"; "allowFloating": "allowFloating"; "allowPushing": "allowPushing"; "allowResizing": "allowResizing"; "cellAspectRatio": "cellAspectRatio"; "cellSpacing": "cellSpacing"; "columns": "columns"; "draggableHandle": "draggableHandle"; "enableHtmlSanitizer": "enableHtmlSanitizer"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "locale": "locale"; "mediaQuery": "mediaQuery"; "panels": "panels"; "resizableHandles": "resizableHandles"; "showGridLines": "showGridLines"; }, { "change": "change"; "created": "created"; "destroyed": "destroyed"; "drag": "drag"; "dragStart": "dragStart"; "dragStop": "dragStop"; "resize": "resize"; "resizeStart": "resizeStart"; "resizeStop": "resizeStop"; }, ["childPanels"], ["div"]>;
}
