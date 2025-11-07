import { PivotCommon } from '../base/pivot-common';
import { TreeView, Tab } from '@syncfusion/ej2-navigations';
import { Dialog } from '@syncfusion/ej2-popups';
import { MaskedTextBox } from '@syncfusion/ej2-inputs';
import { IFilter } from '../../base/engine';
import { DropDownButton } from '@syncfusion/ej2-splitbuttons';
/**
 * `FilterDialog` module to create filter dialog.
 */
/** @hidden */
export declare class FilterDialog {
    /** @hidden */
    parent: PivotCommon;
    /** @hidden */
    dropMenu: DropDownButton;
    /** @hidden */
    memberTreeView: TreeView;
    /** @hidden */
    allMemberSelect: TreeView;
    /** @hidden */
    editorSearch: MaskedTextBox;
    /** @hidden */
    dialogPopUp: Dialog;
    /** @hidden */
    tabObj: Tab;
    /** @hidden */
    allowExcelLikeFilter: boolean;
    /** @hidden */
    isSearchEnabled: boolean;
    /** @hidden */
    filterObject: IFilter;
    private timeOutObj;
    /**
     * Constructor for the dialog action.
     *
     * @param {PivotCommon} parent - parent
     * @hidden
     */
    constructor(parent?: PivotCommon);
    /**
     * Creates the member filter dialog for the selected field.
     *
     * @function createFilterDialog
     * @param {any} treeData -treeData.
     * @param {string} fieldName -fieldName.
     * @param {string} fieldCaption -fieldCaption.
     * @param {HTMLElement} target -target.
     * @returns {void}
     * @hidden
     */
    createFilterDialog(treeData: {
        [key: string]: Object;
    }[], fieldName: string, fieldCaption: string, target: HTMLElement): void;
    private createTreeView;
    private createSortOptions;
    private createLevelWrapper;
    private searchOlapTreeView;
    private nodeCheck;
    private applySorting;
    private updateFilterMembers;
    private updateChildNodes;
    private updateChildData;
    private createTabMenu;
    private createCustomFilter;
    private createElements;
    private updateInputValues;
    private validateTreeNode;
    /**
     * Update filter state while Member check/uncheck.
     *
     * @returns {void}
     * @hidden
     */
    updateCheckedState(): void;
    private getCheckedNodes;
    private getUnCheckedNodes;
    private isExcelFilter;
    private getFilterObject;
    private wireEvent;
    private unWireEvent;
    /**
     * To close filter dialog.
     *
     * @returns {void}
     * @hidden
     */
    closeFilterDialog(): void;
    private removeFilterDialog;
    /** @hidden */
    setFocus(): void;
}
