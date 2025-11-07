import { PivotView } from '../../pivotview/base/pivotview';
import { PivotFieldList } from '../../pivotfieldlist/base/field-list';
import { ContextMenu } from '@syncfusion/ej2-navigations';
/**
 * Module to render Pivot button
 */
/** @hidden */
export declare class PivotContextMenu {
    /** @hidden */
    parent: PivotView | PivotFieldList;
    /** @hidden */
    menuObj: ContextMenu;
    /** @hidden */
    fieldElement: HTMLElement;
    /**
     * Constructor for render module
     *
     * @param {PivotView | PivotFieldList} parent - parent
     * */
    constructor(parent: PivotView | PivotFieldList);
    /**
     * Initialize the pivot table rendering
     *
     * @returns {void}
     * @private
     */
    render(): void;
    private renderContextMenu;
    private onBeforeMenuOpen;
    private onSelectContextMenu;
    /**
     * To destroy the pivot button event listener
     *
     * @returns {void}
     * @hidden
     */
    destroy(): void;
}
