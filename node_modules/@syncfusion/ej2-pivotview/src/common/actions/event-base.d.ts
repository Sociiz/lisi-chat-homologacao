import { PivotCommon } from '../base/pivot-common';
import { IFilter } from '../../base/engine';
import { MaskChangeEventArgs } from '@syncfusion/ej2-inputs';
import { TreeView } from '@syncfusion/ej2-navigations';
import { IOlapField } from '../../base/olap/engine';
/**
 * `EventBase` for active fields action.
 */
/** @hidden */
export declare class EventBase {
    /** @hidden */
    parent: PivotCommon;
    /** @hidden */
    searchListItem: HTMLElement[];
    /**
     * Constructor for the dialog action.
     *
     * @param {PivotCommon} parent - It represent the parent.
     * @hidden
     */
    constructor(parent?: PivotCommon);
    /**
     * Updates sorting order for the selected field.
     *
     * @function updateSorting
     * @param  {Event} args - Contains clicked element information to update dataSource.
     * @returns {void}
     * @hidden
     */
    updateSorting(args: Event): void;
    /**
     * Updates sorting order for the selected field.
     *
     * @function updateFiltering
     * @param {Event} args - Contains clicked element information to update dataSource.
     * @returns {void}
     * @hidden
     */
    updateFiltering(args: Event): void;
    /**
     * Returns boolean by checing the valid filter members from the selected filter settings.
     *
     * @function isValidFilterItemsAvail
     * @param {string} fieldName - Gets filter members for the given field name.
     * @param {IFilter} filterObj - filterObj.
     * @returns {boolean} - boolean.
     * @hidden
     */
    isValidFilterItemsAvail(fieldName: string, filterObj: IFilter): boolean;
    private getOlapData;
    /**
     * Gets sorted filter members for the selected field.
     *
     * @function sortOlapFilterData
     * @param {any} treeData - Gets filter members for the given field name.
     * @param {string} order - It contains the value of order.
     * @returns {any} - It returns the sort Olap Filter Data.
     * @hidden
     */
    sortOlapFilterData(treeData: {
        [key: string]: Object;
    }[], order: string): {
        [key: string]: Object;
    }[];
    private applyFilterCustomSort;
    /**
     * It used to get the parentIds
     *
     * @param {TreeView} treeObj - Specifies the treeview instance.
     * @param {string} id - Specifies the current node id.
     * @param {string[]} parent - Specifies the collection of parent element.
     * @returns {string[]} - Returns parentIds.
     * @hidden
     */
    getParentIDs(treeObj: TreeView, id: string, parent: string[]): string[];
    /**
     * It used to get the childIds
     *
     * @param {TreeView} treeObj - Specifies the treeview instance.
     * @param {string} id - Specifies the current node id.
     * @param {string[]} children - Specifies the collection of clid elements.
     * @returns {string[]} - Return childIds.
     * @hidden
     */
    getChildIDs(treeObj: TreeView, id: string, children: string[]): string[];
    /**
     * show tree nodes using search text.
     *
     * @param {MaskChangeEventArgs} args -  It cotains the args data.
     * @param {TreeView} treeObj -  It cotains the treeObj data.
     * @param {boolean} isFieldCollection -  It cotains the isFieldCollection data.
     * @param {boolean} isHierarchy -  It cotains the isHierarchy data.
     * @returns {void}
     * @hidden
     */
    searchTreeNodes(args: MaskChangeEventArgs, treeObj: TreeView, isFieldCollection: boolean, isHierarchy?: boolean): void;
    private updateOlapSearchTree;
    private getTreeData;
    private getOlapTreeData;
    private getOlapSearchTreeData;
    /**
     * @param {IOlapField[]} members - members.
     * @param {string} fieldName - fieldName.
     * @param {string} node - node.
     * @param {boolean} state - state.
     * @returns {void}
     * @hidden
     */
    updateChildNodeStates(members: IOlapField[], fieldName: string, node: string, state: boolean): void;
    /**
     * @param {string} fieldName - fieldName.
     * @param {string} item - fieldName.
     * @param {Object} filterObj - filter Object.
     * @returns {Object} -  An object mapping keys to string.
     * @hidden
     */
    getParentNode(fieldName: string, item: string, filterObj: {
        [key: string]: string;
    }): {
        [key: string]: string;
    };
    private getFilteredTreeNodes;
}
