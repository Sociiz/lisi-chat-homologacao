import { Toolbar as tool } from '@syncfusion/ej2-navigations';
import { PivotView } from '../../pivotview/base/pivotview';
/**
 * Module for Toolbar
 */
/** @hidden */
export declare class Toolbar {
    /** @hidden */
    action: string;
    /** @hidden */
    toolbar: tool;
    /** @hidden */
    isMultiAxisChange: boolean;
    /** @hidden */
    isReportChange: boolean;
    private parent;
    private currentReport;
    private dropArgs;
    private newArgs;
    private renameText;
    private showLableState;
    private chartLableState;
    constructor(parent: PivotView);
    /**
     * It returns the Module name.
     *
     * @returns {string} - string
     * @hidden
     */
    getModuleName(): string;
    private createToolbar;
    private fetchReports;
    private fetchReportsArgs;
    private getItems;
    private reportChange;
    private reportLoad;
    private saveReport;
    private mdxQueryDialog;
    private dialogShow;
    private renameReport;
    private actionClick;
    private renderDialog;
    private renderMDXDialog;
    private copyMDXQuery;
    private okBtnClick;
    private createNewReport;
    private cancelBtnClick;
    private createConfirmDialog;
    private okButtonClick;
    private cancelButtonClick;
    /**
     *
     * @returns {void}
     * @hidden
     */
    createChartMenu(): void;
    private create;
    private getCurrentReport;
    private updateItemElements;
    private whitespaceRemove;
    private multipleAxesCheckbox;
    private getLableState;
    private getAllChartItems;
    private updateExportMenu;
    private updateSubtotalSelection;
    private updateGrandtotalSelection;
    private updateReportList;
    private menuItemClick;
    /**
     *
     * @returns {void}
     * @hidden
     */
    addEventListener(): void;
    private getValidChartType;
    private createChartTypeDialog;
    private removeDialog;
    private chartTypeDialogUpdate;
    private updateChartType;
    private getDialogContent;
    private changeDropDown;
    private beforeOpen;
    /**
     * To refresh the toolbar
     *
     * @returns {void}
     * @hidden
     */
    refreshToolbar(): void;
    /**
     *
     * @returns {void}
     * @hidden
     */
    removeEventListener(): void;
    /**
     * To destroy the toolbar
     *
     * @returns {void}
     * @hidden
     */
    destroy(): void;
    private focusToolBar;
}
