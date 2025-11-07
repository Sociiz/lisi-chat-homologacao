import { Dialog } from '@syncfusion/ej2-popups';
import { PivotView } from '../../pivotview/base/pivotview';
import { DrillThroughEventArgs } from '../base/interface';
import { Grid, ColumnModel } from '@syncfusion/ej2-grids';
import { IDataSet } from '../../base/engine';
/**
 * `DrillThroughDialog` module to create drill-through dialog.
 */
/** @hidden */
export declare class DrillThroughDialog {
    /** @hidden */
    parent: PivotView;
    /** @hidden */
    dialogPopUp: Dialog;
    /** @hidden */
    drillThroughGrid: Grid;
    /** @hidden */
    indexString: string[];
    private isUpdated;
    private engine;
    private drillthroughKeyboardModule;
    /**
     * Constructor for the dialog action.
     *
     * @param {PivotView} parent - parent.
     * @hidden
     */
    constructor(parent?: PivotView);
    /**
     * show Drill Through Dialog
     *
     * @param {DrillThroughEventArgs} eventArgs - eventArgs.
     * @returns {void}
     * @hidden */
    showDrillThroughDialog(eventArgs: DrillThroughEventArgs): void;
    private editCell;
    private updateData;
    private removeDrillThroughDialog;
    private createDrillThroughGrid;
    /**
     * frame Grid Columns
     *
     * @param {IDataSet[]} rawData - rawData.
     * @returns {ColumnModel[]} - frame Grid Columns
     * @hidden */
    frameGridColumns(rawData: IDataSet[]): ColumnModel[];
    private isDateFieldExist;
    private formatData;
    private dataWithPrimarykey;
    private drillthroughKeyActionHandler;
    private processClose;
    /**
     * To destroy the drillthrough keyboard module.
     *
     * @returns  {void}
     * @hidden
     */
    destroy(): void;
}
