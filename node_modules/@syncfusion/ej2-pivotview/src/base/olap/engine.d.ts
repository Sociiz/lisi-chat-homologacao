import { Internationalization, Ajax } from '@syncfusion/ej2-base';
import { IField, IDataOptions, IMembers, IDrillOptions, IDrilledItem, IFieldOptions, IPageSettings, ISort } from '../engine';
import { IAxisSet, IGridValues, IFilter, ICustomProperties, IValueSortSettings, ICalculatedFieldSettings } from '../engine';
import { IFormatSettings, IMatrix2D } from '../engine';
import { ExportPageSize } from '../../common/base/interface';
/**
 * OlapEngine is used to manipulate the olap or Multi-Dimensional data as pivoting values.
 */
/** @hidden */
export declare class OlapEngine {
    /** @hidden */
    isEmptyData: boolean;
    /** @hidden */
    globalize: Internationalization;
    /** @hidden */
    fieldList: IOlapFieldListOptions;
    /** @hidden */
    fields: string[];
    /** @hidden */
    rows: IFieldOptions[];
    /** @hidden */
    columns: IFieldOptions[];
    /** @hidden */
    values: IFieldOptions[];
    /** @hidden */
    filters: IFieldOptions[];
    /** @hidden */
    calculatedFieldSettings: ICalculatedFieldSettings[];
    /** @hidden */
    isMutiMeasures: boolean;
    /** @hidden */
    drilledMembers: IDrillOptions[];
    /** @hidden */
    valueSortSettings: IValueSortSettings;
    /** @hidden */
    isEngineUpdated: boolean;
    /** @hidden */
    savedFieldList: IOlapFieldListOptions;
    /** @hidden */
    savedFieldListData: IOlapField[];
    /** @hidden */
    valueAxis: string;
    /** @hidden */
    columnCount: number;
    /** @hidden */
    rowCount: number;
    /** @hidden */
    colFirstLvl: number;
    /** @hidden */
    rowFirstLvl: number;
    /** @hidden */
    pageColStartPos: number;
    /** @hidden */
    enableSort: boolean;
    /** @hidden */
    enableValueSorting: boolean;
    /** @hidden */
    isHeaderAvail: boolean;
    /** @hidden */
    fieldListData: IOlapField[];
    /** @hidden */
    fieldListObj: FieldData;
    /** @hidden */
    dataFields: {
        [key: string]: IFieldOptions;
    };
    /** @hidden */
    formats: IFormatSettings[];
    /** @hidden */
    formatFields: {
        [key: string]: IFormatSettings;
    };
    /** @hidden */
    emptyCellTextContent: string;
    /** @hidden */
    isMondrian: boolean;
    /** @hidden */
    olapValueAxis: string;
    /** @hidden */
    isMeasureAvail: boolean;
    /** @hidden */
    selectedItems: string[];
    /** @hidden */
    filterSettings: IFilter[];
    /** @hidden */
    sortSettings: ISort[];
    /** @hidden */
    filterMembers: {
        [key: string]: string[] | IFilter[];
    };
    /** @hidden */
    allowMemberFilter: boolean;
    /** @hidden */
    allowLabelFilter: boolean;
    /** @hidden */
    allowValueFilter: boolean;
    /** @hidden */
    mdxQuery: string;
    /** @hidden */
    isPaging: boolean;
    /** @hidden */
    exportSpeciedPages: ExportPageSize;
    /** @hidden */
    pageSettings: IPageSettings;
    /** @hidden */
    calcChildMembers: IOlapField[];
    /** @hidden */
    drilledSets: {
        [key: string]: HTMLElement;
    };
    /** @hidden */
    olapVirtualization: boolean;
    /** @hidden */
    isExporting: boolean;
    /** @hidden */
    measureIndex: number;
    private measurePosition;
    private showSubTotalsAtTop;
    private showSubTotalsAtBottom;
    aggregatedValueMatrix: IMatrix2D;
    private localeObj;
    private measureReportItems;
    private locale;
    private olapRowValueIndex;
    private mappingFields;
    private formatRegex;
    private clonedValTuple;
    private clonedColumnTuple;
    private clonedRowTuple;
    /** @hidden */
    xmlaCellSet: NodeListOf<Element>;
    /** @hidden */
    pivotValues: IAxisSet[][];
    /** @hidden */
    dataSourceSettings: IDataOptions;
    /** @hidden */
    valueContent: IGridValues;
    /** @hidden */
    headerContent: IGridValues;
    /** @hidden */
    colMeasurePos: number;
    /** @hidden */
    rowStartPos: number;
    /** @hidden */
    pageRowStartPos: number;
    /** @hidden */
    rowMeasurePos: number;
    /** @hidden */
    tupColumnInfo: ITupInfo[];
    /** @hidden */
    tupRowInfo: ITupInfo[];
    /** @hidden */
    gridJSON: string;
    /** @hidden */
    namedSetsPosition: {
        [key: string]: {
            [key: number]: string;
        };
    };
    /** @hidden */
    errorInfo: string | Error;
    /** @hidden */
    colDepth: number;
    private totalCollection;
    private parentObjCollection;
    private colMeasures;
    private curDrillEndPos;
    private headerGrouping;
    private lastLevel;
    private xmlDoc;
    private request;
    private customArgs;
    private onDemandDrillEngine;
    private showRowSubTotals;
    private showColumnSubTotals;
    private hideRowTotalsObject;
    private hideColumnTotalsObject;
    private sortObject;
    private isColDrill;
    private getHeaderSortInfo;
    renderEngine(dataSourceSettings?: IDataOptions, customProperties?: IOlapCustomProperties, onHeadersSort?: Function): void;
    generateGridData(dataSourceSettings: IDataOptions, action?: string): void;
    generatePagingData(xmlDoc: Document, request: Ajax, customArgs: FieldData): void;
    scrollPage(): void;
    private getVirtualScrollingData;
    private getAxisdepth;
    private getVirtualTotals;
    private getVirtualValues;
    generateEngine(xmlDoc: Document, request: Ajax, customArgs: FieldData): void;
    private getDrillInfo;
    private getActualTuples;
    private clearEngineProperties;
    private performEngine;
    private getValueSortInfo;
    private getParentElement;
    private reArrangeHeaders;
    private getSubTotalsVisibility;
    private frameRowHeader;
    private insertRowSubTotal;
    private insertRowGrandTotal;
    private frameGrandTotalAxisSet;
    private getDepth;
    private checkAttributeDrill;
    private frameTupCollection;
    private getCaptionCollectionWithMeasure;
    /**
     * It performs the set named sets position.
     *
     * @returns {void}
     * @hidden
     */
    setNamedSetsPosition(): void;
    private updateRowEngine;
    private updateTupCollection;
    private frameGrandTotalValues;
    private frameColumnHeader;
    private orderTotals;
    private setParentCollection;
    private setDrillInfo;
    private levelCompare;
    private mergeTotCollection;
    private getLevelsAsString;
    private frameCommonColumnLoop;
    private isAttributeDrill;
    private isAdjacentToMeasure;
    private getDrilledParent;
    private performRowSorting;
    private performColumnSorting;
    private frameUniqueName;
    private getMeasurePosition;
    private sortRowHeaders;
    private sortColumnHeaders;
    private applyCustomSort;
    private frameSortObject;
    private getParentUname;
    private performColumnSpanning;
    private getOrdinal;
    private frameValues;
    /**
     * It performs to returns the formatted value.
     *
     * @param {number} value - It Defines the value of formatting data.
     * @param {string} fieldName - It contains the value of the field name.
     * @param {string} formattedText - It contains the value of the formatted text.
     * @returns {string} - It returns formatted Value as string.
     * @hidden
     */
    getFormattedValue(value: number, fieldName: string, formattedText: string): string;
    private getMeasureInfo;
    private frameMeasureOrder;
    getDrilledSets(uNameCollection: string, currentCell: IAxisSet, fieldPos: number, axis: string): {
        [key: string]: string;
    };
    updateDrilledInfo(dataSourceSettings: IDataOptions): void;
    updateCalcFields(dataSourceSettings: IDataOptions, lastcalcInfo: ICalculatedFieldSettings): void;
    onSort(dataSourceSettings: IDataOptions, isValueSort?: boolean): void;
    private updateFieldlist;
    updateFieldlistData(name: string, isSelect?: boolean): void;
    /**
     * It used to set format a field.
     *
     * @param {IFormatSettings[]} formats - It cotains the formatSettings.
     * @returns {void}
     * @hidden
     */
    getFormattedFields(formats: IFormatSettings[]): void;
    private getCubes;
    private validateCube;
    private getFieldList;
    getTreeData(args: ConnectionInfo, successMethod: Function, customArgs: object): void;
    private getAxisFields;
    private getAggregateType;
    getUniqueName(name: string): string;
    private updateFilterItems;
    private getParentNode;
    updateDrilledItems(drilledMembers: IDrillOptions[]): IDrillOptions[];
    /**
     * It performs to returns the drill through data.
     *
     * @param {IAxisSet} pivotValue - It cotains the pivotValues data.
     * @param {number} maxRows - It cotains the maximum number of row data.
     * @returns {void}
     * @hidden
     */
    getDrillThroughData(pivotValue: IAxisSet, maxRows: number): void;
    private drillThroughSuccess;
    getFilterMembers(dataSourceSettings: IDataOptions, fieldName: string, levelCount: number, isSearchFilter?: boolean, loadLevelMember?: boolean): string;
    getMembers(dataSourceSettings: IDataOptions, fieldName: string, isAllFilterData?: boolean, filterParentQuery?: string, loadLevelMember?: boolean, filterItemName?: string): void;
    private getOlapFilterText;
    getChildMembers(dataSourceSettings: IDataOptions, memberUQName: string, fieldName: string): void;
    getCalcChildMembers(dataSourceSettings: IDataOptions, memberUQName: string): void;
    getSearchMembers(dataSourceSettings: IDataOptions, fieldName: string, searchString: string, maxNodeLimit: number, isAllFilterData?: boolean, levelCount?: number): void;
    private generateMembers;
    private getFieldListItems;
    private loadCalculatedMemberElements;
    private loadDimensionElements;
    private loadNamedSetElements;
    private loadHierarchyElements;
    private updateMembersOrder;
    private loadLevelElements;
    private loadMeasureElements;
    private loadMeasureGroups;
    doAjaxPost(type: string, url: string, data: string, success: Function, customArgs?: Object): void;
    private beforeSend;
    private getSoapMsg;
    getConnectionInfo(connectionString: string, locale: string | number): ConnectionInfo;
    getMDXQuery(dataSourceSettings: IDataOptions): string;
}
/**
 * @hidden
 */
export interface IOlapFieldListOptions {
    [index: string]: IOlapField;
}
/**
 * @hidden
 */
export interface IOlapField extends IField {
    pid?: string;
    tag?: string;
    hasChildren?: boolean;
    expanded?: boolean;
    spriteCssClass?: string;
    name?: string;
    defaultHierarchy?: string;
    hasAllMember?: boolean;
    allMember?: string;
    isChecked?: boolean;
    filterMembers?: IOlapField[];
    childMembers?: IOlapField[];
    searchMembers?: IOlapField[];
    htmlAttributes?: {
        [key: string]: string;
    };
    currrentMembers?: IMembers;
    isHierarchy?: boolean;
    isNamedSets?: boolean;
    formatString?: string;
    actualFilter?: string[];
    levels?: IOlapField[];
    levelCount?: number;
    memberType?: number;
    fieldType?: string;
    parentHierarchy?: string;
}
/**
 * @hidden
 */
export interface ConnectionInfo {
    url?: string;
    LCID?: string;
    catalog?: string;
    cube?: string;
    request?: string;
    roles?: string;
}
/**
 * @hidden
 */
export interface FieldData {
    hierarchy?: IOlapField[];
    hierarchySuccess?: Document;
    measures?: IFieldOptions[];
    dataSourceSettings?: IDataOptions;
    action?: string;
    reportElement?: string[];
    measuresGroups?: HTMLElement[];
    fieldName?: string;
    drillInfo?: IDrilledItem;
    loadLevelMembers?: boolean;
}
/** @hidden */
export interface IOlapCustomProperties extends ICustomProperties {
    savedFieldList?: IOlapFieldListOptions;
    savedFieldListData?: IOlapField[];
}
/** @hidden */
export interface ITupInfo {
    allCount?: number;
    allStartPos?: number;
    measure?: Element;
    measureName?: string;
    measurePosition?: number;
    members?: NodeListOf<Element>;
    typeCollection?: string[];
    levelCollection?: number[];
    uNameCollection?: string;
    captionCollection?: string;
    drillInfo?: IDrillInfo[];
    drillStartPos?: number;
    drillEndPos?: number;
    startDrillUniquename?: string;
    endDrillUniquename?: string;
    showTotals?: boolean;
}
/** @hidden */
export interface IDrillInfo {
    level: number;
    uName: string;
    hierarchy: string;
    isDrilled: boolean;
}
/** @hidden */
export interface ITotCollection {
    allCount: number;
    allStartPos?: number;
    ordinal: number;
    members: NodeListOf<Element>;
    drillInfo?: IDrillInfo[];
}
/** @hidden */
export interface IParentObjCollection {
    [key: number]: {
        [key: number]: Element;
    };
}
/** @hidden */
export interface ILastSavedInfo {
    [key: string]: string | number;
}
/** @hidden */
export interface IMeasureInfo {
    measureAxis: string;
    measureIndex: number;
    valueInfo: string[];
}
/** @hidden */
export interface IOrderedInfo {
    orderedValueTuples: Element[];
    orderedHeaderTuples: Element[];
}
/** @hidden */
export interface VirtualScrollingData {
    columnTuple: Element[];
    rowTuple: Element[];
    valueTuple: Element[];
    isCalculated: boolean;
}
/** @hidden */
export interface VirtualTotals {
    totalsCollection: Element[];
    indexCollection: number[];
}
/** @hidden */
export interface ValueSortInfo {
    memberIndex: number;
    columnLength: number;
    rowLength: number;
    isValueSorting: boolean;
}
