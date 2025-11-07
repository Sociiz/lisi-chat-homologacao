import { PivotView } from '../../pivotview/base/pivotview';
import { IAction } from '../../common/base/interface';
import { PivotFieldList } from '../../pivotfieldlist/base/field-list';
/** @hidden */
export declare class CalculatedField implements IAction {
    /** @hidden */
    parent: PivotView | PivotFieldList;
    /** @hidden */
    isFormula: boolean;
    /** @hidden */
    isRequireUpdate: boolean;
    /** @hidden */
    buttonCall: boolean;
    /** @hidden */
    field: string;
    /**
     * Internal variables.
     */
    private treeObj;
    private droppable;
    private newFields;
    private curMenu;
    private isFieldExist;
    private parentID;
    private existingReport;
    private formulaText;
    private fieldText;
    private formatType;
    private formatText;
    private fieldType;
    private parentHierarchy;
    private keyboardEvents;
    private isEdit;
    private currentFieldName;
    private currentFormula;
    private formatTypes;
    /**
     * Constructor for calculatedfield module.
     *
     * @param {PivotView | PivotFieldList} parent - It represent the parent.
     */
    constructor(parent: PivotView | PivotFieldList);
    /**
     * To get module name.
     *
     * @returns {string} - It returns the Module name.
     */
    protected getModuleName(): string;
    private keyActionHandler;
    /**
     * Trigger while click treeview icon.
     *
     * @param  {NodeClickEventArgs} e - Click event argument.
     * @returns {void}
     */
    private fieldClickHandler;
    /**
     * Trigger while click treeview icon.
     *
     * @param  {AccordionClickArgs} e - Click event argument.
     * @returns {void}
     */
    private accordionClickHandler;
    private accordionCreated;
    private clearFormula;
    /**
     * To display context menu.
     *
     * @param  {HTMLElement} node - It contains the value of node.
     * @param  {HTMLElement} treeNode - It contains the value of tree Node.
     * @param  {HTMLElement} target - It represent the target.
     * @returns {void}
     */
    private displayMenu;
    private removeCalcField;
    /**
     * To set position for context menu.
     *
     * @param {HTMLElement} node - It contains the value of node.
     * @returns {void}
     */
    private openContextMenu;
    /**
     * Triggers while select menu.
     *
     * @param  {MenuEventArgs} menu - It represent the menu.
     * @returns {void}
     */
    private selectContextMenu;
    /**
     * To create context menu.
     *
     * @param {MenuItemModel[]} menuItems - It represent the menuItems.
     * @param {HTMLElement} node - It represent the node data.
     * @returns {void}
     */
    private createMenu;
    /**
     * Triggers while click OK button.
     *
     * @returns {void}
     */
    private applyFormula;
    private getCalculatedFieldInfo;
    private updateFormatSettings;
    private addFormula;
    /**
     *
     * @returns {void}
     * @hidden */
    endDialog(): void;
    /**
     *
     * @returns {void}
     * @hidden */
    showError(): void;
    /**
     * To get treeview data
     *
     * @param  {PivotView | PivotFieldList} parent - It represent the parent.
     * @returns {any} - Field List Data.
     */
    private getFieldListData;
    /**
     * Trigger while drop node in formula field.
     *
     * @param {DragAndDropEventArgs} args - It contains the value of args.
     * @returns {void}
     */
    private fieldDropped;
    /**
     * To create dialog.
     *
     * @returns {void}
     */
    private createDialog;
    private cancelClick;
    private beforeOpen;
    private closeDialog;
    private setFocus;
    /**
     * To render dialog elements.
     *
     * @returns {void}
     */
    private renderDialogElements;
    /**
     * To create calculated field adaptive layout.
     *
     * @param {boolean} isEdit - It contains the value of isEdit
     * @returns {void}
     */
    private renderAdaptiveLayout;
    /**
     * To update calculated field info in adaptive layout.
     *
     * @param {boolean} isEdit - isEdit.
     * @param {string} fieldName - fieldName.
     * @returns {void}
     * @hidden
     */
    updateAdaptiveCalculatedField(isEdit: boolean, fieldName?: string): void;
    /**
     * To create treeview.
     *
     * @returns {void}
     */
    private createDropElements;
    private getFormat;
    /**
     * To create treeview.
     *
     * @returns {void}
     */
    private createTreeView;
    private updateNodeIcon;
    private nodeCollapsing;
    private dragStart;
    /**
     * Trigger before treeview text append.
     *
     * @param {DrawNodeEventArgs} args - args.
     * @returns {void}
     */
    private drawTreeNode;
    /**
     * To create radio buttons.
     *
     * @param {string} key - key.
     * @returns {HTMLElement} - createTypeContainer
     */
    private createTypeContainer;
    private getMenuItems;
    private getValidSummaryType;
    /**
     * To get Accordion Data.
     *
     * @param  {PivotView | PivotFieldList} parent - parent.
     * @returns {AccordionItemModel[]} - Accordion Data.
     */
    private getAccordionData;
    /**
     * To render mobile layout.
     *
     * @param {Tab} tabObj - tabObj
     * @returns {void}
     */
    private renderMobileLayout;
    private accordionExpand;
    private onChange;
    private updateType;
    /**
     * Trigger while click cancel button.
     *
     * @returns {void}
     */
    private cancelBtnClick;
    /**
     * Trigger while click add button.
     *
     * @returns {void}
     */
    private addBtnClick;
    /**
     * To create calculated field dialog elements.
     *
     * @param {any} args - It contains the args value.
     * @param {boolean} args.edit - It contains the value of edit under args.
     * @param {string} args.fieldName - It contains the value of fieldName under args.
     * @returns {void}
     * @hidden
     */
    createCalculatedFieldDialog(args?: {
        edit: boolean;
        fieldName: string;
    }): void;
    /**
     * To create calculated field desktop layout.
     *
     * @returns {void}
     */
    private renderDialogLayout;
    private createConfirmDialog;
    private replaceFormula;
    private removeErrorDialog;
    private closeErrorDialog;
    /**
     * To add event listener.
     *
     * @returns {void}
     * @hidden
     */
    addEventListener(): void;
    /**
     * To remove event listener.
     *
     * @returns {void}
     * @hidden
     */
    removeEventListener(): void;
    /**
     * To destroy the calculated field dialog
     *
     * @returns {void}
     * @hidden
     */
    destroy(): void;
}
