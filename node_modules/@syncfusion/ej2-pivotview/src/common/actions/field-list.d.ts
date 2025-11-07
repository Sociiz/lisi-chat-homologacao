import { PivotView } from '../../pivotview/base/pivotview';
import { IAction } from '../../common/base/interface';
/**
 * Module for Field List rendering
 */
/** @hidden */
export declare class FieldList implements IAction {
    /**
     * Module declarations
     */
    private parent;
    private element;
    private timeOutObj;
    /**
     * Constructor for Field List module.
     *
     * @param {PivotView} parent - It represent the parent
     */
    constructor(parent: PivotView);
    /**
     * For internal use only - Get the module name.
     *
     * @returns {string} - It returns a ModuleName
     * @private
     */
    protected getModuleName(): string;
    private initiateModule;
    private updateControl;
    private update;
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
     * To destroy the Field List.
     *
     * @returns {void}
     * @hidden
     */
    destroy(): void;
}
