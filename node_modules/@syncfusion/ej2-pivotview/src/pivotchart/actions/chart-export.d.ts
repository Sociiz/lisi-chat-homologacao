import { BeforeExportEventArgs } from '../../common/base/interface';
import { PivotView } from '../../pivotview/base';
import { PdfExportProperties } from '@syncfusion/ej2-grids';
/**
 * `ChartExport` module is used to handle the Pivot Chart PDF export action.
 *
 * @hidden
 */
export declare class ChartExport {
    private parent;
    /** @hidden */
    exportProperties: BeforeExportEventArgs;
    private pdfExportHelper;
    /**
     * Constructor for chart and accumulation annotation
     *
     *  @param {PivotView} parent - Instance of pivot table.
     */
    constructor(parent?: PivotView);
    /**
     * For internal use only - Get the module name.
     *
     * @returns {string} - string.
     * @private
     */
    protected getModuleName(): string;
    /**
     * Method allow to export the pivot chart as PDF and image formats like PNG, JPEG, and SVG.
     *
     * @param {PdfExportProperties} pdfExportProperties - Allows to define the export properties for the chart.
     * @param {boolean} isMultipleExport - Allows to export multiple tables and charts into a single PDF document.
     * @param {Object} pdfDoc - Allows the export of an external PDF document along with current PDF document.
     * @param {boolean} isBlob - Allows the PDF document to be saved as blob data.
     * @returns {Promise<Object>}
     * @hidden
     */
    pdfChartExport(pdfExportProperties?: PdfExportProperties, pdfDoc?: Object, isMultipleExport?: boolean, isBlob?: boolean): Promise<Object>;
    private getChartInfo;
    private exportPdf;
    /**
     * To destroy the pdf export module.
     *
     * @returns {void}
     * @hidden
     */
    destroy(): void;
}
