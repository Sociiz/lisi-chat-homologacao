import { MouseEventArgs } from '@syncfusion/ej2-base';
import { PivotView } from '../../pivotview/base/pivotview';
import { PivotFieldList } from '../../pivotfieldlist/base/field-list';
/**
 * `AggregateMenu` module to create aggregate type popup.
 */
/** @hidden */
export declare class AggregateMenu {
    /** @hidden */
    parent: PivotView | PivotFieldList;
    private menuInfo;
    private parentElement;
    private buttonElement;
    private currentMenu;
    private stringAggregateTypes;
    /**
     * Constructor for the rener action.
     *
     * @param {PivotView | PivotFieldList} parent - It contains the value of parent.
     * @hidden
     */
    constructor(parent?: PivotView | PivotFieldList);
    /**
     * Initialize the pivot table rendering
     *
     * @param {MouseEventArgs} args - It contains the args value
     * @param {HTMLElement} parentElement - It contains the value of parentElement
     * @returns {void}
     * @private
     */
    render(args: MouseEventArgs, parentElement: HTMLElement): void;
    private openContextMenu;
    private createContextMenu;
    private getMenuItem;
    private beforeMenuOpen;
    /**
     * create Value Settings Dialog
     *
     * @param {HTMLElement} target - It represent the target element.
     * @param {HTMLElement} parentElement - It represent the parentElement.
     * @param {string} type -It represent the type.
     * @returns {void}
     * @hidden */
    createValueSettingsDialog(target: HTMLElement, parentElement: HTMLElement, type?: string): void;
    private createFieldOptions;
    private selectOptionInContextMenu;
    private updateDataSource;
    private updateValueSettings;
    private removeDialog;
    /**
     * To destroy the pivot button event listener
     *
     * @returns {void}
     * @hidden
     */
    destroy(): void;
}
