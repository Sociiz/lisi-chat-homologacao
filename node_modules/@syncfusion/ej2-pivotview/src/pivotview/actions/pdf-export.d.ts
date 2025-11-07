import { PivotView } from '../base/pivotview';
import { BeforeExportEventArgs } from '../../common/base/interface';
import { PdfExportProperties } from '@syncfusion/ej2-grids';
/**
 * @hidden
 * `PDFExport` module is used to handle the PDF export action.
 */
export declare class PDFExport {
    private parent;
    private gridStyle;
    private engine;
    private document;
    /** @hidden */
    exportProperties: BeforeExportEventArgs;
    private pdfExportHelper;
    /**
     * Constructor for the PivotGrid PDF Export module.
     *
     * @param {PivotView} parent - Instance of pivot table.
     * @hidden
     */
    constructor(parent?: PivotView);
    /**
     * For internal use only - Get the module name.
     *
     * @returns {string} - string.
     * @private
     */
    protected getModuleName(): string;
    private addPage;
    private getFontStyle;
    private getBorderStyle;
    private getStyle;
    private setRecordThemeStyle;
    /**
     * Method to perform pdf export.
     *
     * @param  {PdfExportProperties} pdfExportProperties - Defines the export properties of the Grid.
     * @param  {boolean} isMultipleExport - Define to enable multiple export.
     * @param  {Object} pdfDoc - Defined the PDF document if multiple export is enabled.
     * @param  {boolean} isBlob - If 'isBlob' set to true, then it will be returned as blob data.
     * @returns {Promise<Object>}
     * @hidden
     */
    exportToPDF(pdfExportProperties?: PdfExportProperties, isMultipleExport?: boolean, pdfDoc?: Object, isBlob?: boolean): Promise<Object>;
    private applyStyle;
    private getFontFamily;
    private getFont;
    private processCellStyle;
    private applyEvent;
    private updateOlapPageSettings;
    /**
     * To destroy the pdf export module.
     *
     * @returns {void}
     * @hidden
     */
    destroy(): void;
}
