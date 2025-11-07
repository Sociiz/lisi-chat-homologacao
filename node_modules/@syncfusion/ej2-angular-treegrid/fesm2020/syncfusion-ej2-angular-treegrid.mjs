import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Directive, ContentChild, ContentChildren, Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { ComplexBase, setValue, Template, ArrayBase, ComponentBase, ComponentMixins } from '@syncfusion/ej2-angular-base';
import { TreeGrid, Filter, Page, Sort, Reorder, Toolbar, Aggregate, Resize, ColumnMenu, ExcelExport, PdfExport, CommandColumn, ContextMenu, Edit, Selection, VirtualScroll, DetailRow, RowDD, Freeze, ColumnChooser, Logger, InfiniteScroll } from '@syncfusion/ej2-treegrid';
export * from '@syncfusion/ej2-treegrid';
import { CommonModule } from '@angular/common';

let input$3 = ['allowEditing', 'allowFiltering', 'allowReordering', 'allowResizing', 'allowSorting', 'clipMode', 'columns', 'commands', 'customAttributes', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckBox', 'edit', 'editTemplate', 'editType', 'field', 'filter', 'filterBarTemplate', 'filterTemplate', 'format', 'formatter', 'freeze', 'headerTemplate', 'headerText', 'headerTextAlign', 'hideAtMedia', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'lockColumn', 'maxWidth', 'minWidth', 'showCheckbox', 'showColumnMenu', 'showInColumnChooser', 'sortComparer', 'template', 'textAlign', 'type', 'uid', 'validationRules', 'valueAccessor', 'visible', 'width'];
let outputs$4 = [];
/**
 * `e-stacked-column` directive represent the stacked column of the Angular TreeGrid.
 * It must be contained in a StackedColumns component(`e-stacked-columns`).
 * ```html
 * <ejs-treegrid [dataSource]='data' allowPaging='true' allowSorting='true'>
 *   <e-columns>
 *     <e-column field='ID' width='100'></e-column>
 *     <e-column headerText='Details' width='100'>
 *       <e-stacked-columns>
 *         <e-stacked-column field='Name' width='140'></e-stacked-column>
 *       </e-stacked-columns>
 *     </e-column>
 *   </e-columns>
 * </ejs-treegrid>
 * ```
 */
class StackedColumnDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$4);
        this.directivePropList = input$3;
    }
}
StackedColumnDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StackedColumnDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
StackedColumnDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StackedColumnDirective, selector: "ejs-treegrid>e-columns>e-column>e-stacked-columns>e-stacked-column", inputs: { allowEditing: "allowEditing", allowFiltering: "allowFiltering", allowReordering: "allowReordering", allowResizing: "allowResizing", allowSorting: "allowSorting", clipMode: "clipMode", columns: "columns", commands: "commands", customAttributes: "customAttributes", defaultValue: "defaultValue", disableHtmlEncode: "disableHtmlEncode", displayAsCheckBox: "displayAsCheckBox", edit: "edit", editTemplate: "editTemplate", editType: "editType", field: "field", filter: "filter", filterBarTemplate: "filterBarTemplate", filterTemplate: "filterTemplate", format: "format", formatter: "formatter", freeze: "freeze", headerTemplate: "headerTemplate", headerText: "headerText", headerTextAlign: "headerTextAlign", hideAtMedia: "hideAtMedia", isFrozen: "isFrozen", isIdentity: "isIdentity", isPrimaryKey: "isPrimaryKey", lockColumn: "lockColumn", maxWidth: "maxWidth", minWidth: "minWidth", showCheckbox: "showCheckbox", showColumnMenu: "showColumnMenu", showInColumnChooser: "showInColumnChooser", sortComparer: "sortComparer", template: "template", textAlign: "textAlign", type: "type", uid: "uid", validationRules: "validationRules", valueAccessor: "valueAccessor", visible: "visible", width: "width" }, queries: [{ propertyName: "template", first: true, predicate: ["template"], descendants: true }, { propertyName: "headerTemplate", first: true, predicate: ["headerTemplate"], descendants: true }, { propertyName: "filter_itemTemplate", first: true, predicate: ["filterItemTemplate"], descendants: true }, { propertyName: "filterTemplate", first: true, predicate: ["filterTemplate"], descendants: true }, { propertyName: "commandsTemplate", first: true, predicate: ["commandsTemplate"], descendants: true }, { propertyName: "editTemplate", first: true, predicate: ["editTemplate"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], StackedColumnDirective.prototype, "template", void 0);
__decorate([
    Template()
], StackedColumnDirective.prototype, "headerTemplate", void 0);
__decorate([
    Template()
], StackedColumnDirective.prototype, "filter_itemTemplate", void 0);
__decorate([
    Template()
], StackedColumnDirective.prototype, "filterTemplate", void 0);
__decorate([
    Template()
], StackedColumnDirective.prototype, "commandsTemplate", void 0);
__decorate([
    Template()
], StackedColumnDirective.prototype, "editTemplate", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StackedColumnDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-treegrid>e-columns>e-column>e-stacked-columns>e-stacked-column',
                    inputs: input$3,
                    outputs: outputs$4,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { template: [{
                type: ContentChild,
                args: ['template']
            }], headerTemplate: [{
                type: ContentChild,
                args: ['headerTemplate']
            }], filter_itemTemplate: [{
                type: ContentChild,
                args: ['filterItemTemplate']
            }], filterTemplate: [{
                type: ContentChild,
                args: ['filterTemplate']
            }], commandsTemplate: [{
                type: ContentChild,
                args: ['commandsTemplate']
            }], editTemplate: [{
                type: ContentChild,
                args: ['editTemplate']
            }] } });
/**
 * StackedColumn Array Directive
 * @private
 */
class StackedColumnsDirective extends ArrayBase {
    constructor() {
        super('columns');
    }
}
StackedColumnsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StackedColumnsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
StackedColumnsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StackedColumnsDirective, selector: "ejs-treegrid>e-columns>e-column>e-stacked-columns", queries: [{ propertyName: "children", predicate: StackedColumnDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StackedColumnsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-treegrid>e-columns>e-column>e-stacked-columns',
                    queries: {
                        children: new ContentChildren(StackedColumnDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$2 = ['allowEditing', 'allowFiltering', 'allowReordering', 'allowResizing', 'allowSorting', 'clipMode', 'columns', 'commands', 'customAttributes', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckBox', 'edit', 'editTemplate', 'editType', 'field', 'filter', 'filterBarTemplate', 'filterTemplate', 'format', 'formatter', 'freeze', 'headerTemplate', 'headerText', 'headerTextAlign', 'hideAtMedia', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'lockColumn', 'maxWidth', 'minWidth', 'showCheckbox', 'showColumnMenu', 'showInColumnChooser', 'sortComparer', 'template', 'textAlign', 'type', 'uid', 'validationRules', 'valueAccessor', 'visible', 'width'];
let outputs$3 = [];
/**
 * `e-column` directive represent a column of the Angular TreeGrid.
 * It must be contained in a TreeGrid component(`ejs-treegrid`).
 * ```html
 * <ejs-treegrid [dataSource]='data' allowPaging='true' allowSorting='true'>
 *   <e-columns>
 *    <e-column field='ID' width='100'></e-column>
 *    <e-column field='name' headerText='Name' width='100'></e-column>
 *   </e-columns>
 * </ejs-treegrid>
 * ```
 */
class ColumnDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['columns'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$3);
        this.directivePropList = input$2;
    }
}
ColumnDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ColumnDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ColumnDirective, selector: "ejs-treegrid>e-columns>e-column", inputs: { allowEditing: "allowEditing", allowFiltering: "allowFiltering", allowReordering: "allowReordering", allowResizing: "allowResizing", allowSorting: "allowSorting", clipMode: "clipMode", columns: "columns", commands: "commands", customAttributes: "customAttributes", defaultValue: "defaultValue", disableHtmlEncode: "disableHtmlEncode", displayAsCheckBox: "displayAsCheckBox", edit: "edit", editTemplate: "editTemplate", editType: "editType", field: "field", filter: "filter", filterBarTemplate: "filterBarTemplate", filterTemplate: "filterTemplate", format: "format", formatter: "formatter", freeze: "freeze", headerTemplate: "headerTemplate", headerText: "headerText", headerTextAlign: "headerTextAlign", hideAtMedia: "hideAtMedia", isFrozen: "isFrozen", isIdentity: "isIdentity", isPrimaryKey: "isPrimaryKey", lockColumn: "lockColumn", maxWidth: "maxWidth", minWidth: "minWidth", showCheckbox: "showCheckbox", showColumnMenu: "showColumnMenu", showInColumnChooser: "showInColumnChooser", sortComparer: "sortComparer", template: "template", textAlign: "textAlign", type: "type", uid: "uid", validationRules: "validationRules", valueAccessor: "valueAccessor", visible: "visible", width: "width" }, queries: [{ propertyName: "template", first: true, predicate: ["template"], descendants: true }, { propertyName: "headerTemplate", first: true, predicate: ["headerTemplate"], descendants: true }, { propertyName: "filter_itemTemplate", first: true, predicate: ["filterItemTemplate"], descendants: true }, { propertyName: "filterTemplate", first: true, predicate: ["filterTemplate"], descendants: true }, { propertyName: "commandsTemplate", first: true, predicate: ["commandsTemplate"], descendants: true }, { propertyName: "editTemplate", first: true, predicate: ["editTemplate"], descendants: true }, { propertyName: "childColumns", first: true, predicate: StackedColumnsDirective, descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], ColumnDirective.prototype, "template", void 0);
__decorate([
    Template()
], ColumnDirective.prototype, "headerTemplate", void 0);
__decorate([
    Template()
], ColumnDirective.prototype, "filter_itemTemplate", void 0);
__decorate([
    Template()
], ColumnDirective.prototype, "filterTemplate", void 0);
__decorate([
    Template()
], ColumnDirective.prototype, "commandsTemplate", void 0);
__decorate([
    Template()
], ColumnDirective.prototype, "editTemplate", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-treegrid>e-columns>e-column',
                    inputs: input$2,
                    outputs: outputs$3,
                    queries: {
                        childColumns: new ContentChild(StackedColumnsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { template: [{
                type: ContentChild,
                args: ['template']
            }], headerTemplate: [{
                type: ContentChild,
                args: ['headerTemplate']
            }], filter_itemTemplate: [{
                type: ContentChild,
                args: ['filterItemTemplate']
            }], filterTemplate: [{
                type: ContentChild,
                args: ['filterTemplate']
            }], commandsTemplate: [{
                type: ContentChild,
                args: ['commandsTemplate']
            }], editTemplate: [{
                type: ContentChild,
                args: ['editTemplate']
            }] } });
/**
 * Column Array Directive
 * @private
 */
class ColumnsDirective extends ArrayBase {
    constructor() {
        super('columns');
    }
}
ColumnsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ColumnsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ColumnsDirective, selector: "ejs-treegrid>e-columns", queries: [{ propertyName: "children", predicate: ColumnDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ColumnsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-treegrid>e-columns',
                    queries: {
                        children: new ContentChildren(ColumnDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input$1 = ['columnName', 'customAggregate', 'field', 'footerTemplate', 'format', 'type'];
let outputs$2 = [];
/**
 * `e-aggregate->e-column` directive represent a aggregate column of the Angular TreeGrid.
 * ```html
 * <ejs-treegrid [dataSource]='data' allowPaging='true' allowSorting='true'>
 *   <e-columns>
 *     <e-column field='ID' width='100'></e-column>
 *     <e-column field='name' headerText='Name' width='100'></e-column>
 *   </e-columns>
 *   <e-aggregates>
 *     <e-aggregate>
 *       <e-columns>
 *         <e-column field='ID' type='Min'></e-column>
 *       </e-columns>
 *      </e-aggregate>
 *    </e-aggregates>
 * </ejs-treegrid>
 * ```
 */
class AggregateColumnDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$2);
        this.directivePropList = input$1;
    }
}
AggregateColumnDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AggregateColumnDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
AggregateColumnDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AggregateColumnDirective, selector: "ejs-treegrid>e-aggregates>e-aggregate>e-columns>e-column", inputs: { columnName: "columnName", customAggregate: "customAggregate", field: "field", footerTemplate: "footerTemplate", format: "format", type: "type" }, queries: [{ propertyName: "footerTemplate", first: true, predicate: ["footerTemplate"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], AggregateColumnDirective.prototype, "footerTemplate", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AggregateColumnDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-treegrid>e-aggregates>e-aggregate>e-columns>e-column',
                    inputs: input$1,
                    outputs: outputs$2,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { footerTemplate: [{
                type: ContentChild,
                args: ['footerTemplate']
            }] } });
/**
 * AggregateColumn Array Directive
 * @private
 */
class AggregateColumnsDirective extends ArrayBase {
    constructor() {
        super('columns');
    }
}
AggregateColumnsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AggregateColumnsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
AggregateColumnsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AggregateColumnsDirective, selector: "ejs-treegrid>e-aggregates>e-aggregate>e-columns", queries: [{ propertyName: "children", predicate: AggregateColumnDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AggregateColumnsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-treegrid>e-aggregates>e-aggregate>e-columns',
                    queries: {
                        children: new ContentChildren(AggregateColumnDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

let input = ['columns', 'showChildSummary'];
let outputs$1 = [];
/**
 * `e-aggregate` directive represent a aggregate row of the Angular TreeGrid.
 * It must be contained in a TreeGrid component(`ejs-treegrid`).
 * ```html
 * <ejs-treegrid [dataSource]='data' allowPaging='true' allowSorting='true'>
 *   <e-columns>
 *     <e-column field='ID' width='100'></e-column>
 *     <e-column field='name' headerText='Name' width='100'></e-column>
 *   </e-columns>
 *   <e-aggregates>
 *     <e-aggregate>
 *       <e-columns>
 *         <e-column field='ID' type='Min'></e-column>
 *       </e-columns>
 *      </e-aggregate>
 *    </e-aggregates>
 * </ejs-treegrid>
 * ```
 */
class AggregateDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['columns'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$1);
        this.directivePropList = input;
    }
}
AggregateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AggregateDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
AggregateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AggregateDirective, selector: "ejs-treegrid>e-aggregates>e-aggregate", inputs: { columns: "columns", showChildSummary: "showChildSummary" }, queries: [{ propertyName: "childColumns", first: true, predicate: AggregateColumnsDirective, descendants: true }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AggregateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-treegrid>e-aggregates>e-aggregate',
                    inputs: input,
                    outputs: outputs$1,
                    queries: {
                        childColumns: new ContentChild(AggregateColumnsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Aggregate Array Directive
 * @private
 */
class AggregatesDirective extends ArrayBase {
    constructor() {
        super('aggregates');
    }
}
AggregatesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AggregatesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
AggregatesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AggregatesDirective, selector: "ejs-treegrid>e-aggregates", queries: [{ propertyName: "children", predicate: AggregateDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AggregatesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-treegrid>e-aggregates',
                    queries: {
                        children: new ContentChildren(AggregateDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs = ['aggregates', 'allowExcelExport', 'allowFiltering', 'allowMultiSorting', 'allowPaging', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowTextWrap', 'autoCheckHierarchy', 'childMapping', 'clipMode', 'columnMenuItems', 'columnQueryMode', 'columns', 'contextMenuItems', 'copyHierarchyMode', 'currencyCode', 'dataSource', 'detailTemplate', 'editSettings', 'enableAdaptiveUI', 'enableAltRow', 'enableAutoFill', 'enableCollapseAll', 'enableColumnVirtualization', 'enableHover', 'enableHtmlSanitizer', 'enableImmutableMode', 'enableInfiniteScrolling', 'enablePersistence', 'enableRtl', 'enableVirtualMaskRow', 'enableVirtualization', 'expandStateMapping', 'filterSettings', 'frozenColumns', 'frozenRows', 'gridLines', 'hasChildMapping', 'height', 'idMapping', 'infiniteScrollSettings', 'loadChildOnDemand', 'loadingIndicator', 'locale', 'pageSettings', 'parentIdMapping', 'printMode', 'query', 'rowDropSettings', 'rowHeight', 'rowTemplate', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnChooser', 'showColumnMenu', 'sortSettings', 'textWrapSettings', 'toolbar', 'treeColumnIndex', 'width'];
const outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'batchAdd', 'batchCancel', 'batchDelete', 'beforeBatchAdd', 'beforeBatchDelete', 'beforeBatchSave', 'beforeCopy', 'beforeDataBound', 'beforeExcelExport', 'beforePaste', 'beforePdfExport', 'beforePrint', 'beginEdit', 'cellDeselected', 'cellDeselecting', 'cellEdit', 'cellSave', 'cellSaved', 'cellSelected', 'cellSelecting', 'checkboxChange', 'collapsed', 'collapsing', 'columnDrag', 'columnDragStart', 'columnDrop', 'columnMenuClick', 'columnMenuOpen', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataBound', 'dataSourceChanged', 'dataStateChange', 'detailDataBound', 'excelExportComplete', 'excelHeaderQueryCellInfo', 'excelQueryCellInfo', 'expanded', 'expanding', 'headerCellInfo', 'load', 'pdfExportComplete', 'pdfHeaderQueryCellInfo', 'pdfQueryCellInfo', 'printComplete', 'queryCellInfo', 'recordDoubleClick', 'resizeStart', 'resizeStop', 'resizing', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowDrag', 'rowDragStart', 'rowDragStartHelper', 'rowDrop', 'rowSelected', 'rowSelecting', 'toolbarClick', 'dataSourceChange'];
const twoWays = ['dataSource'];
/**
 * `ejs-treegrid` represents the Angular TreeTreeGrid Component.
 * ```html
 * <ejs-treegrid [dataSource]='data' allowPaging='true' allowSorting='true'></ejs-treegrid>
 * ```
 */
let TreeGridComponent = class TreeGridComponent extends TreeGrid {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['columns', 'aggregates'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('TreeGridFilter');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('TreeGridPage');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('TreeGridSort');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('TreeGridReorder');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('TreeGridToolbar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('TreeGridAggregate');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('TreeGridResize');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('TreeGridColumnMenu');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('TreeGridExcelExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('TreeGridPdfExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('TreeGridCommandColumn');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('TreeGridContextMenu');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('TreeGridEdit');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('TreeGridSelection');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('TreeGridVirtualScroll');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('TreeGridDetailRow');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('TreeGridRowDD');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('TreeGridFreeze');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('TreeGridColumnChooser');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('TreeGridLogger');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('TreeGridInfiniteScroll');
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
        this.tagObjects[0].instance = this.childColumns;
        if (this.childAggregates) {
            this.tagObjects[1].instance = this.childAggregates;
        }
        this.context.ngAfterContentChecked(this);
    }
};
TreeGridComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeGridComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
TreeGridComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: TreeGridComponent, selector: "ejs-treegrid", inputs: { aggregates: "aggregates", allowExcelExport: "allowExcelExport", allowFiltering: "allowFiltering", allowMultiSorting: "allowMultiSorting", allowPaging: "allowPaging", allowPdfExport: "allowPdfExport", allowReordering: "allowReordering", allowResizing: "allowResizing", allowRowDragAndDrop: "allowRowDragAndDrop", allowSelection: "allowSelection", allowSorting: "allowSorting", allowTextWrap: "allowTextWrap", autoCheckHierarchy: "autoCheckHierarchy", childMapping: "childMapping", clipMode: "clipMode", columnMenuItems: "columnMenuItems", columnQueryMode: "columnQueryMode", columns: "columns", contextMenuItems: "contextMenuItems", copyHierarchyMode: "copyHierarchyMode", currencyCode: "currencyCode", dataSource: "dataSource", detailTemplate: "detailTemplate", editSettings: "editSettings", enableAdaptiveUI: "enableAdaptiveUI", enableAltRow: "enableAltRow", enableAutoFill: "enableAutoFill", enableCollapseAll: "enableCollapseAll", enableColumnVirtualization: "enableColumnVirtualization", enableHover: "enableHover", enableHtmlSanitizer: "enableHtmlSanitizer", enableImmutableMode: "enableImmutableMode", enableInfiniteScrolling: "enableInfiniteScrolling", enablePersistence: "enablePersistence", enableRtl: "enableRtl", enableVirtualMaskRow: "enableVirtualMaskRow", enableVirtualization: "enableVirtualization", expandStateMapping: "expandStateMapping", filterSettings: "filterSettings", frozenColumns: "frozenColumns", frozenRows: "frozenRows", gridLines: "gridLines", hasChildMapping: "hasChildMapping", height: "height", idMapping: "idMapping", infiniteScrollSettings: "infiniteScrollSettings", loadChildOnDemand: "loadChildOnDemand", loadingIndicator: "loadingIndicator", locale: "locale", pageSettings: "pageSettings", parentIdMapping: "parentIdMapping", printMode: "printMode", query: "query", rowDropSettings: "rowDropSettings", rowHeight: "rowHeight", rowTemplate: "rowTemplate", searchSettings: "searchSettings", selectedRowIndex: "selectedRowIndex", selectionSettings: "selectionSettings", showColumnChooser: "showColumnChooser", showColumnMenu: "showColumnMenu", sortSettings: "sortSettings", textWrapSettings: "textWrapSettings", toolbar: "toolbar", treeColumnIndex: "treeColumnIndex", width: "width" }, outputs: { actionBegin: "actionBegin", actionComplete: "actionComplete", actionFailure: "actionFailure", batchAdd: "batchAdd", batchCancel: "batchCancel", batchDelete: "batchDelete", beforeBatchAdd: "beforeBatchAdd", beforeBatchDelete: "beforeBatchDelete", beforeBatchSave: "beforeBatchSave", beforeCopy: "beforeCopy", beforeDataBound: "beforeDataBound", beforeExcelExport: "beforeExcelExport", beforePaste: "beforePaste", beforePdfExport: "beforePdfExport", beforePrint: "beforePrint", beginEdit: "beginEdit", cellDeselected: "cellDeselected", cellDeselecting: "cellDeselecting", cellEdit: "cellEdit", cellSave: "cellSave", cellSaved: "cellSaved", cellSelected: "cellSelected", cellSelecting: "cellSelecting", checkboxChange: "checkboxChange", collapsed: "collapsed", collapsing: "collapsing", columnDrag: "columnDrag", columnDragStart: "columnDragStart", columnDrop: "columnDrop", columnMenuClick: "columnMenuClick", columnMenuOpen: "columnMenuOpen", contextMenuClick: "contextMenuClick", contextMenuOpen: "contextMenuOpen", created: "created", dataBound: "dataBound", dataSourceChanged: "dataSourceChanged", dataStateChange: "dataStateChange", detailDataBound: "detailDataBound", excelExportComplete: "excelExportComplete", excelHeaderQueryCellInfo: "excelHeaderQueryCellInfo", excelQueryCellInfo: "excelQueryCellInfo", expanded: "expanded", expanding: "expanding", headerCellInfo: "headerCellInfo", load: "load", pdfExportComplete: "pdfExportComplete", pdfHeaderQueryCellInfo: "pdfHeaderQueryCellInfo", pdfQueryCellInfo: "pdfQueryCellInfo", printComplete: "printComplete", queryCellInfo: "queryCellInfo", recordDoubleClick: "recordDoubleClick", resizeStart: "resizeStart", resizeStop: "resizeStop", resizing: "resizing", rowDataBound: "rowDataBound", rowDeselected: "rowDeselected", rowDeselecting: "rowDeselecting", rowDrag: "rowDrag", rowDragStart: "rowDragStart", rowDragStartHelper: "rowDragStartHelper", rowDrop: "rowDrop", rowSelected: "rowSelected", rowSelecting: "rowSelecting", toolbarClick: "toolbarClick", dataSourceChange: "dataSourceChange" }, queries: [{ propertyName: "toolbarTemplate", first: true, predicate: ["toolbarTemplate"], descendants: true }, { propertyName: "pagerTemplate", first: true, predicate: ["pagerTemplate"], descendants: true }, { propertyName: "rowTemplate", first: true, predicate: ["rowTemplate"], descendants: true }, { propertyName: "detailTemplate", first: true, predicate: ["detailTemplate"], descendants: true }, { propertyName: "editSettings_template", first: true, predicate: ["editSettingsTemplate"], descendants: true }, { propertyName: "childColumns", first: true, predicate: ColumnsDirective, descendants: true }, { propertyName: "childAggregates", first: true, predicate: AggregatesDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], TreeGridComponent.prototype, "toolbarTemplate", void 0);
__decorate([
    Template()
], TreeGridComponent.prototype, "pagerTemplate", void 0);
__decorate([
    Template()
], TreeGridComponent.prototype, "rowTemplate", void 0);
__decorate([
    Template()
], TreeGridComponent.prototype, "detailTemplate", void 0);
__decorate([
    Template()
], TreeGridComponent.prototype, "editSettings_template", void 0);
TreeGridComponent = __decorate([
    ComponentMixins([ComponentBase])
], TreeGridComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeGridComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-treegrid',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childColumns: new ContentChild(ColumnsDirective),
                        childAggregates: new ContentChild(AggregatesDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { toolbarTemplate: [{
                type: ContentChild,
                args: ['toolbarTemplate']
            }], pagerTemplate: [{
                type: ContentChild,
                args: ['pagerTemplate']
            }], rowTemplate: [{
                type: ContentChild,
                args: ['rowTemplate']
            }], detailTemplate: [{
                type: ContentChild,
                args: ['detailTemplate']
            }], editSettings_template: [{
                type: ContentChild,
                args: ['editSettingsTemplate']
            }] } });

/**
 * NgModule definition for the TreeGrid component.
 */
class TreeGridModule {
}
TreeGridModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeGridModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TreeGridModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeGridModule, declarations: [TreeGridComponent,
        StackedColumnDirective,
        StackedColumnsDirective,
        ColumnDirective,
        ColumnsDirective,
        AggregateColumnDirective,
        AggregateColumnsDirective,
        AggregateDirective,
        AggregatesDirective], imports: [CommonModule], exports: [TreeGridComponent,
        StackedColumnDirective,
        StackedColumnsDirective,
        ColumnDirective,
        ColumnsDirective,
        AggregateColumnDirective,
        AggregateColumnsDirective,
        AggregateDirective,
        AggregatesDirective] });
TreeGridModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeGridModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeGridModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        TreeGridComponent,
                        StackedColumnDirective,
                        StackedColumnsDirective,
                        ColumnDirective,
                        ColumnsDirective,
                        AggregateColumnDirective,
                        AggregateColumnsDirective,
                        AggregateDirective,
                        AggregatesDirective
                    ],
                    exports: [
                        TreeGridComponent,
                        StackedColumnDirective,
                        StackedColumnsDirective,
                        ColumnDirective,
                        ColumnsDirective,
                        AggregateColumnDirective,
                        AggregateColumnsDirective,
                        AggregateDirective,
                        AggregatesDirective
                    ]
                }]
        }] });

const FilterService = { provide: 'TreeGridFilter', useValue: Filter };
const PageService = { provide: 'TreeGridPage', useValue: Page };
const SortService = { provide: 'TreeGridSort', useValue: Sort };
const ReorderService = { provide: 'TreeGridReorder', useValue: Reorder };
const ToolbarService = { provide: 'TreeGridToolbar', useValue: Toolbar };
const AggregateService = { provide: 'TreeGridAggregate', useValue: Aggregate };
const ResizeService = { provide: 'TreeGridResize', useValue: Resize };
const ColumnMenuService = { provide: 'TreeGridColumnMenu', useValue: ColumnMenu };
const ExcelExportService = { provide: 'TreeGridExcelExport', useValue: ExcelExport };
const PdfExportService = { provide: 'TreeGridPdfExport', useValue: PdfExport };
const CommandColumnService = { provide: 'TreeGridCommandColumn', useValue: CommandColumn };
const ContextMenuService = { provide: 'TreeGridContextMenu', useValue: ContextMenu };
const EditService = { provide: 'TreeGridEdit', useValue: Edit };
const SelectionService = { provide: 'TreeGridSelection', useValue: Selection };
const VirtualScrollService = { provide: 'TreeGridVirtualScroll', useValue: VirtualScroll };
const DetailRowService = { provide: 'TreeGridDetailRow', useValue: DetailRow };
const RowDDService = { provide: 'TreeGridRowDD', useValue: RowDD };
const FreezeService = { provide: 'TreeGridFreeze', useValue: Freeze };
const ColumnChooserService = { provide: 'TreeGridColumnChooser', useValue: ColumnChooser };
const LoggerService = { provide: 'TreeGridLogger', useValue: Logger };
const InfiniteScrollService = { provide: 'TreeGridInfiniteScroll', useValue: InfiniteScroll };
/**
 * NgModule definition for the TreeGrid component with providers.
 */
class TreeGridAllModule {
}
TreeGridAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeGridAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TreeGridAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeGridAllModule, imports: [CommonModule, TreeGridModule], exports: [TreeGridModule] });
TreeGridAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeGridAllModule, providers: [
        FilterService,
        PageService,
        SortService,
        ReorderService,
        ToolbarService,
        AggregateService,
        ResizeService,
        ColumnMenuService,
        ExcelExportService,
        PdfExportService,
        CommandColumnService,
        ContextMenuService,
        EditService,
        SelectionService,
        VirtualScrollService,
        DetailRowService,
        RowDDService,
        FreezeService,
        ColumnChooserService,
        LoggerService,
        InfiniteScrollService
    ], imports: [[CommonModule, TreeGridModule], TreeGridModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: TreeGridAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, TreeGridModule],
                    exports: [
                        TreeGridModule
                    ],
                    providers: [
                        FilterService,
                        PageService,
                        SortService,
                        ReorderService,
                        ToolbarService,
                        AggregateService,
                        ResizeService,
                        ColumnMenuService,
                        ExcelExportService,
                        PdfExportService,
                        CommandColumnService,
                        ContextMenuService,
                        EditService,
                        SelectionService,
                        VirtualScrollService,
                        DetailRowService,
                        RowDDService,
                        FreezeService,
                        ColumnChooserService,
                        LoggerService,
                        InfiniteScrollService
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AggregateColumnDirective, AggregateColumnsDirective, AggregateDirective, AggregateService, AggregatesDirective, ColumnChooserService, ColumnDirective, ColumnMenuService, ColumnsDirective, CommandColumnService, ContextMenuService, DetailRowService, EditService, ExcelExportService, FilterService, FreezeService, InfiniteScrollService, LoggerService, PageService, PdfExportService, ReorderService, ResizeService, RowDDService, SelectionService, SortService, StackedColumnDirective, StackedColumnsDirective, ToolbarService, TreeGridAllModule, TreeGridComponent, TreeGridModule, VirtualScrollService };
//# sourceMappingURL=syncfusion-ej2-angular-treegrid.mjs.map
