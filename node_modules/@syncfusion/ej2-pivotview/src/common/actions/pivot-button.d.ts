import { PivotView } from '../../pivotview/base/pivotview';
import { PivotFieldList } from '../../pivotfieldlist/base/field-list';
import { IAction } from '../../common/base/interface';
import { NodeCheckEventArgs } from '@syncfusion/ej2-navigations';
import { AggregateMenu } from '../popups/aggregate-menu';
import { AxisFieldRenderer } from '../../pivotfieldlist/renderer/axis-field-renderer';
/**
 * Module to render Pivot button
 */
/** @hidden */
export declare class PivotButton implements IAction {
    /** @hidden */
    parent: PivotView | PivotFieldList;
    /** @hidden */
    parentElement: HTMLElement;
    private draggable;
    private handlers;
    /** @hidden */
    menuOption: AggregateMenu;
    /** @hidden */
    axisField: AxisFieldRenderer;
    /** @hidden */
    fieldName: string;
    private index;
    /** @hidden */
    isDestroyed: boolean;
    /**
     * Constructor for render module.
     *
     * @param {PivotView | PivotFieldList} parent - Component instance.
     */
    constructor(parent: PivotView | PivotFieldList);
    private renderPivotButton;
    private createButtonText;
    private getTypeStatus;
    private validateDropdown;
    private createSummaryType;
    private createMenuOption;
    private openCalculatedFieldDialog;
    private createDraggable;
    private createButtonDragIcon;
    private createSortOption;
    private createFilterOption;
    private updateButtontext;
    private updateOlapButtonText;
    private createDragClone;
    private onDragStart;
    private onDragging;
    private onDragStop;
    private isButtonDropped;
    private updateSorting;
    /**
     *
     * @param {boolean} isRefreshGrid - It contains isRefreshGrid
     * @returns {void}
     * @hidden */
    updateDataSource(isRefreshGrid?: boolean): void;
    private updateFiltering;
    /**
     *
     * @returns {void}
     * @hidden */
    updateFilterEvents(): void;
    private bindDialogEvents;
    private buttonModel;
    private tabSelect;
    private updateDialogButtonEvents;
    private updateCustomFilter;
    private ClearFilter;
    private removeButton;
    /**
     *
     * @param {NodeCheckEventArgs} args - It contains args value.
     * @returns {void}
     * @hidden */
    nodeStateModified(args: NodeCheckEventArgs): void;
    private checkedStateAll;
    private updateNodeStates;
    private updateFilterState;
    private refreshPivotButtonState;
    private removeDataSourceSettings;
    private updateDropIndicator;
    private wireEvent;
    private unWireEvent;
    /**
     *
     * @returns {void}
     * @hidden
     */
    addEventListener(): void;
    /**
     *
     * @returns {void}
     * @hidden
     */
    removeEventListener(): void;
    /**
     * To destroy the pivot button event listener
     *
     * @returns {void}
     * @hidden
     */
    destroy(): void;
}
