import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { PivotFieldList } from '@syncfusion/ej2-pivotview';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * `ej-pivotfieldlist` represents the Angular PivotFieldList Component.
 * ```html
 * <ej-pivotfieldlist></ej-pivotfieldlist>
 * ```
 */
export declare class PivotFieldListComponent extends PivotFieldList implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    actionBegin: any;
    actionComplete: any;
    actionFailure: any;
    afterServiceInvoke: any;
    aggregateCellInfo: any;
    aggregateMenuOpen: any;
    beforeServiceInvoke: any;
    calculatedFieldCreate: any;
    created: any;
    dataBound: any;
    destroyed: any;
    enginePopulated: any;
    enginePopulating: any;
    fieldDragStart: any;
    fieldDrop: any;
    fieldRemove: any;
    load: any;
    memberEditorOpen: any;
    memberFiltering: any;
    onFieldDropped: any;
    onHeadersSort: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PivotFieldListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PivotFieldListComponent, "ejs-pivotfieldlist", never, { "aggregateTypes": "aggregateTypes"; "allowCalculatedField": "allowCalculatedField"; "allowDeferLayoutUpdate": "allowDeferLayoutUpdate"; "cssClass": "cssClass"; "currencyCode": "currencyCode"; "dataSourceSettings": "dataSourceSettings"; "enableFieldSearching": "enableFieldSearching"; "enableHtmlSanitizer": "enableHtmlSanitizer"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "loadOnDemandInMemberEditor": "loadOnDemandInMemberEditor"; "locale": "locale"; "maxNodeLimitInMemberEditor": "maxNodeLimitInMemberEditor"; "renderMode": "renderMode"; "showValuesButton": "showValuesButton"; "spinnerTemplate": "spinnerTemplate"; "target": "target"; }, { "actionBegin": "actionBegin"; "actionComplete": "actionComplete"; "actionFailure": "actionFailure"; "afterServiceInvoke": "afterServiceInvoke"; "aggregateCellInfo": "aggregateCellInfo"; "aggregateMenuOpen": "aggregateMenuOpen"; "beforeServiceInvoke": "beforeServiceInvoke"; "calculatedFieldCreate": "calculatedFieldCreate"; "created": "created"; "dataBound": "dataBound"; "destroyed": "destroyed"; "enginePopulated": "enginePopulated"; "enginePopulating": "enginePopulating"; "fieldDragStart": "fieldDragStart"; "fieldDrop": "fieldDrop"; "fieldRemove": "fieldRemove"; "load": "load"; "memberEditorOpen": "memberEditorOpen"; "memberFiltering": "memberFiltering"; "onFieldDropped": "onFieldDropped"; "onHeadersSort": "onHeadersSort"; }, never, never>;
}
