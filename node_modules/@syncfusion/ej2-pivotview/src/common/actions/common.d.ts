import { PivotView } from '../../pivotview/base/pivotview';
import { IAction } from '../../common/base/interface';
/**
 * Module for PivotCommon rendering
 */
/** @hidden */
export declare class Common implements IAction {
    private parent;
    constructor(parent: PivotView);
    /**
     * For internal use only - Get the module name.
     *
     * @returns {string} - It returns string
     * @private
     */
    protected getModuleName(): string;
    private initiateCommonModule;
    /**
     * @returns {void}
     * @hidden
     */
    addEventListener(): void;
    /**
     * @returns {void}
     * @hidden
     */
    removeEventListener(): void;
    /**
     * To destroy the groupingbar
     *
     * @returns {void}
     * @hidden
     */
    destroy(): void;
}
