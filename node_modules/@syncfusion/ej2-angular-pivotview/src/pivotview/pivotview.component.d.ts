import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { PivotView } from '@syncfusion/ej2-pivotview';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * `ej-pivotview` represents the Angular Pivot Table Component.
 * ```html
 * <ej-pivotview></ej-pivotview>
 * ```
 */
export declare class PivotViewComponent extends PivotView implements IComponentBase {
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
    beforeExport: any;
    beforeServiceInvoke: any;
    beginDrillThrough: any;
    calculatedFieldCreate: any;
    cellClick: any;
    cellSelected: any;
    cellSelecting: any;
    chartSeriesCreated: any;
    conditionalFormatting: any;
    created: any;
    dataBound: any;
    destroyed: any;
    drill: any;
    drillThrough: any;
    editCompleted: any;
    enginePopulated: any;
    enginePopulating: any;
    exportComplete: any;
    fetchReport: any;
    fieldDragStart: any;
    fieldDrop: any;
    fieldListRefreshed: any;
    fieldRemove: any;
    hyperlinkCellClick: any;
    load: any;
    loadReport: any;
    memberEditorOpen: any;
    memberFiltering: any;
    newReport: any;
    numberFormatting: any;
    onFieldDropped: any;
    onHeadersSort: any;
    onPdfCellRender: any;
    removeReport: any;
    renameReport: any;
    saveReport: any;
    toolbarClick: any;
    toolbarRender: any;
    /**
     * Allows the table cell elements to be customized with either an HTML string or the element’s ID,
     * that can be used to add additional HTML elements with custom formats to the cell elements that are displayed in the pivot table.
     * @default null
     * @asptype string
     */
    cellTemplate: any;
    /**
     * Allows the tooltip element to be customized with either an HTML string or the element’s ID,
     * can be used to displayed with custom formats either by mouse hovering or by touch in the pivot table.
     * @default null
     * @asptype string
     */
    tooltipTemplate: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PivotViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PivotViewComponent, "ejs-pivotview", never, { "aggregateTypes": "aggregateTypes"; "allowCalculatedField": "allowCalculatedField"; "allowConditionalFormatting": "allowConditionalFormatting"; "allowDataCompression": "allowDataCompression"; "allowDeferLayoutUpdate": "allowDeferLayoutUpdate"; "allowDrillThrough": "allowDrillThrough"; "allowExcelExport": "allowExcelExport"; "allowGrouping": "allowGrouping"; "allowNumberFormatting": "allowNumberFormatting"; "allowPdfExport": "allowPdfExport"; "cellTemplate": "cellTemplate"; "chartSettings": "chartSettings"; "chartTypes": "chartTypes"; "cssClass": "cssClass"; "dataSourceSettings": "dataSourceSettings"; "displayOption": "displayOption"; "editSettings": "editSettings"; "enableFieldSearching": "enableFieldSearching"; "enableHtmlSanitizer": "enableHtmlSanitizer"; "enablePaging": "enablePaging"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "enableValueSorting": "enableValueSorting"; "enableVirtualization": "enableVirtualization"; "exportAllPages": "exportAllPages"; "gridSettings": "gridSettings"; "groupingBarSettings": "groupingBarSettings"; "height": "height"; "hyperlinkSettings": "hyperlinkSettings"; "loadOnDemandInMemberEditor": "loadOnDemandInMemberEditor"; "locale": "locale"; "maxNodeLimitInMemberEditor": "maxNodeLimitInMemberEditor"; "maxRowsInDrillThrough": "maxRowsInDrillThrough"; "pageSettings": "pageSettings"; "pagerSettings": "pagerSettings"; "pivotValues": "pivotValues"; "showFieldList": "showFieldList"; "showGroupingBar": "showGroupingBar"; "showToolbar": "showToolbar"; "showTooltip": "showTooltip"; "showValuesButton": "showValuesButton"; "spinnerTemplate": "spinnerTemplate"; "toolbar": "toolbar"; "toolbarTemplate": "toolbarTemplate"; "tooltipTemplate": "tooltipTemplate"; "virtualScrollSettings": "virtualScrollSettings"; "width": "width"; }, { "actionBegin": "actionBegin"; "actionComplete": "actionComplete"; "actionFailure": "actionFailure"; "afterServiceInvoke": "afterServiceInvoke"; "aggregateCellInfo": "aggregateCellInfo"; "aggregateMenuOpen": "aggregateMenuOpen"; "beforeExport": "beforeExport"; "beforeServiceInvoke": "beforeServiceInvoke"; "beginDrillThrough": "beginDrillThrough"; "calculatedFieldCreate": "calculatedFieldCreate"; "cellClick": "cellClick"; "cellSelected": "cellSelected"; "cellSelecting": "cellSelecting"; "chartSeriesCreated": "chartSeriesCreated"; "conditionalFormatting": "conditionalFormatting"; "created": "created"; "dataBound": "dataBound"; "destroyed": "destroyed"; "drill": "drill"; "drillThrough": "drillThrough"; "editCompleted": "editCompleted"; "enginePopulated": "enginePopulated"; "enginePopulating": "enginePopulating"; "exportComplete": "exportComplete"; "fetchReport": "fetchReport"; "fieldDragStart": "fieldDragStart"; "fieldDrop": "fieldDrop"; "fieldListRefreshed": "fieldListRefreshed"; "fieldRemove": "fieldRemove"; "hyperlinkCellClick": "hyperlinkCellClick"; "load": "load"; "loadReport": "loadReport"; "memberEditorOpen": "memberEditorOpen"; "memberFiltering": "memberFiltering"; "newReport": "newReport"; "numberFormatting": "numberFormatting"; "onFieldDropped": "onFieldDropped"; "onHeadersSort": "onHeadersSort"; "onPdfCellRender": "onPdfCellRender"; "removeReport": "removeReport"; "renameReport": "renameReport"; "saveReport": "saveReport"; "toolbarClick": "toolbarClick"; "toolbarRender": "toolbarRender"; }, ["cellTemplate", "tooltipTemplate"], never>;
}
