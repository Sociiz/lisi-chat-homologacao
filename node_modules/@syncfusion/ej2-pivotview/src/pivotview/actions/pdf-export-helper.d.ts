import { PdfDocument } from '@syncfusion/ej2-pdf-export';
import { PdfExportProperties } from '@syncfusion/ej2-grids';
import { PdfBorderStyle } from '../../common/base/enum';
/**
 * `PDFExportHelper` module is used to add header and footer in PDF document
 *
 * @hidden
 */
export declare class PDFExportHelper {
    /**
     * Method to draw a header in a PDF document.
     *
     * @param  {PdfExportProperties} pdfExportProperties - It contains the export properties for the table and chart.
     * @param  {PdfDocument} pdfDocument - It contains the current PDF document
     * @returns {void}
     * @hidden
     */
    drawHeader(pdfExportProperties: PdfExportProperties, pdfDocument: PdfDocument): void;
    /**
     * Method to draw a footer in a PDF document.
     *
     * @param  {PdfExportProperties} pdfExportProperties -It contains the export properties for table and chart
     * @param  {PdfDocument} pdfDocument - It contains the current PDF document
     * @returns {void}
     * @hidden
     */
    drawFooter(pdfExportProperties: PdfExportProperties, pdfDocument: PdfDocument): void;
    private drawPageTemplate;
    private processContentValidation;
    private drawText;
    private drawPageNumber;
    private drawImage;
    private drawLine;
    private getFontFromContent;
    private getPenFromContent;
    private getBrushFromContent;
    private setContentFormat;
    private getPageNumberStyle;
    /**
     *
     * @param {PdfBorderStyle} dashType - It contains the PDF dash style
     * @returns {number} - It returns PDF dash style
     * @hidden
     */
    getDashStyle(dashType: PdfBorderStyle): number;
    /**
     *
     * @param {string} hexDec - It contains a hexadecimal code as string
     * @returns {number} - It returns RGB as number
     * @hidden
     */
    hexDecToRgb(hexDec: string): {
        r: number;
        g: number;
        b: number;
    };
}
