import { PivotCommon } from '../base/pivot-common';
import { Dialog } from '@syncfusion/ej2-popups';
/**
 * `ErrorDialog` module to create error dialog.
 */
/** @hidden */
export declare class ErrorDialog {
    /** @hidden */
    parent: PivotCommon;
    /** @hidden */
    errorPopUp: Dialog;
    /**
     * Constructor for the dialog action.
     *
     * @param {PivotCommon} parent - parent.
     * @hidden
     */
    constructor(parent: PivotCommon);
    /**
     * Creates the error dialog for the unexpected action done.
     *
     * @function createErrorDialog
     * @param {string} title - title.
     * @param {string} description - description.
     * @param {HTMLElement} target - target.
     * @returns {void}
     * @hidden
     */
    createErrorDialog(title: string, description: string, target?: HTMLElement): void;
    private closeErrorDialog;
    private removeErrorDialog;
}
