import { PivotView } from '../base/pivotview';
import { Pager as GridPager } from '@syncfusion/ej2-grids';
/**
 * Module for Pager rendering
 */
/** @hidden */
export declare class Pager {
    /** @hidden */
    pager: GridPager;
    /** @hidden */
    parent: PivotView;
    constructor(parent: PivotView);
    /**
     * It returns the Module name.
     *
     * @returns {string} - string
     * @hidden
     */
    getModuleName(): string;
    /**
     *
     * @hidden
     *
     */
    addEventListener(): void;
    /**
     *
     * @hidden
     */
    removeEventListener(): void;
    private createPager;
    private wireEvent;
    private unWireEvent;
    private columnPageChange;
    private rowPageChange;
    private columnPageSizeChange;
    private rowPageSizeChange;
    private updatePageSettings;
    private createPagerContainer;
    private createPagerItems;
    /**
     * To destroy the pager.
     *
     * @returns {void}
     * @hidden
     */
    destroy(): void;
}
