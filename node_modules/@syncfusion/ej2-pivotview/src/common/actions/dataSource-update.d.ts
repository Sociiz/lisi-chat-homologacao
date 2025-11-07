import { PivotCommon } from '../base/pivot-common';
import { IFieldOptions } from '../../base/engine';
import { PivotButton } from '../actions/pivot-button';
import { PivotView } from '../../pivotview/base/pivotview';
import { PivotFieldList } from '../../pivotfieldlist/base/field-list';
/**
 * `DataSourceUpdate` module is used to update the dataSource.
 */
/** @hidden */
export declare class DataSourceUpdate {
    /** @hidden */
    parent: PivotCommon;
    /** @hidden */
    btnElement: HTMLElement;
    /** @hidden */
    control: PivotView | PivotFieldList;
    /** @hidden */
    pivotButton: PivotButton;
    /**
     * Constructor for the dialog action.
     *
     * @param {PivotCommon} parent - Instance.
     * @hidden
     */
    constructor(parent?: PivotCommon);
    /**
     * Updates the dataSource by adding the given field along with field dropped position to the dataSource.
     *
     * @function updateDataSource
     * @param  {string} fieldName - Defines dropped field name to update dataSource.
     * @param  {string} droppedClass -  Defines dropped field axis name to update dataSource.
     * @param  {number} droppedPosition - Defines dropped position to the axis based on field position.
     * @returns {void}
     * @hidden
     */
    updateDataSource(fieldName: string, droppedClass: string, droppedPosition: number): boolean;
    /**
     * Updates the dataSource by removing the given field from the dataSource.
     *
     * @param  {string} fieldName - Defines dropped field name to remove dataSource.
     * @function removeFieldFromReport
     * @returns {void}
     * @hidden
     */
    removeFieldFromReport(fieldName: string): IFieldOptions;
    /**
     * Creates new field object given field name from the field list data.
     *
     * @param {string} fieldName - Defines dropped field name to add dataSource.
     * @param {IFieldOptions} fieldItem - Defines dropped field.
     * @function getNewField
     * @returns {IFieldOptions} - It return new field.
     * @hidden
     */
    getNewField(fieldName: string, fieldItem?: IFieldOptions): IFieldOptions;
}
