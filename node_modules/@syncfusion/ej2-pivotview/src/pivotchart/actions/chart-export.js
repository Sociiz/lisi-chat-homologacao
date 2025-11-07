import { createElement, isNullOrUndefined } from '@syncfusion/ej2-base';
import { SvgRenderer } from '@syncfusion/ej2-svg-base';
import { PdfPageOrientation, PdfDocument, PdfBitmap, SizeF } from '@syncfusion/ej2-pdf-export';
import * as events from '../../common/base/constant';
import { PivotUtil } from '../../base/util';
import { PDFExportHelper } from '../../pivotview/actions/pdf-export-helper';
/**
 * `ChartExport` module is used to handle the Pivot Chart PDF export action.
 *
 * @hidden
 */
var ChartExport = /** @class */ (function () {
    /**
     * Constructor for chart and accumulation annotation
     *
     *  @param {PivotView} parent - Instance of pivot table.
     */
    function ChartExport(parent) {
        this.parent = parent;
        this.pdfExportHelper = new PDFExportHelper();
    }
    /**
     * For internal use only - Get the module name.
     *
     * @returns {string} - string.
     * @private
     */
    ChartExport.prototype.getModuleName = function () {
        return 'chartExport';
    };
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
    ChartExport.prototype.pdfChartExport = function (pdfExportProperties, pdfDoc, isMultipleExport, isBlob) {
        var _this = this;
        var controls = [this.parent.chart];
        var chartInfo = this.getChartInfo(controls);
        var width = chartInfo.width;
        var height = chartInfo.height;
        var element = this.parent.chart.svgObject;
        var isCanvas = this.parent.chart.enableCanvas;
        if (!isCanvas) {
            element = createElement('canvas', {
                id: 'ej2-canvas',
                attrs: {
                    'width': width.toString(),
                    'height': height.toString()
                }
            });
        }
        var url = window.URL.createObjectURL(new Blob([(new XMLSerializer()).serializeToString(chartInfo.svg)], { type: 'image/svg+xml' }));
        var image = new Image();
        var ctx = element.getContext('2d');
        image.src = url;
        return new Promise(function (resolve) {
            image.onload = (function () {
                var pdfDocument;
                if (!isNullOrUndefined(pdfDoc)) {
                    pdfDocument = pdfDoc;
                }
                else {
                    pdfDocument = new PdfDocument();
                }
                ctx.drawImage(image, 0, 0);
                window.URL.revokeObjectURL(url);
                _this.exportPdf(element, pdfDocument, isMultipleExport, isBlob, width, height, pdfExportProperties);
                resolve(pdfDocument);
            });
        });
    };
    ChartExport.prototype.getChartInfo = function (controls, isVertical) {
        var width = 0;
        var height = 0;
        var isCanvas = this.parent.chart.enableCanvas;
        var svgObject = new SvgRenderer('').createSvg({
            id: 'Svg_Export_Element',
            width: 200, height: 200
        });
        var backgroundColor;
        controls.map(function (control) {
            var svg = control.svgObject.cloneNode(true);
            var groupEle = control.renderer.createGroup({
                style: (isNullOrUndefined(isVertical) || isVertical) ? 'transform: translateY(' + height + 'px)' :
                    'transform: translateX(' + width + 'px)'
            });
            backgroundColor = svg.childNodes[0] ? svg.childNodes[0].getAttribute('fill') : 'transparent';
            if (backgroundColor === 'transparent') {
                if (control.theme.indexOf('Dark') > -1 || control.theme === 'HighContrast') {
                    backgroundColor = 'rgba(0, 0, 0, 1)';
                }
                else {
                    backgroundColor = 'rgba(255, 255, 255, 1)';
                }
            }
            if (!isCanvas) {
                groupEle.appendChild(svg);
            }
            width = control.availableSize.width;
            height = control.availableSize.height;
            if (!isCanvas) {
                svgObject.appendChild(groupEle);
            }
        });
        if (!isCanvas) {
            svgObject.setAttribute('width', width + '');
            svgObject.setAttribute('height', height + '');
            svgObject.setAttribute('style', 'background-color: ' + backgroundColor + ';');
        }
        return {
            'width': width,
            'height': height,
            'svg': svgObject
        };
    };
    ChartExport.prototype.exportPdf = function (element, pdfDocument, isMultipleExport, isBlob, width, height, pdfExportProperties) {
        var documentSection = pdfDocument.sections.add();
        var documentWidth = pdfDocument.pageSettings.width;
        var documentHeight = pdfDocument.pageSettings.height;
        var margin = pdfDocument.pageSettings.margins;
        var chartWidth = (width + margin.left + margin.right);
        pdfDocument.pageSettings.size = new SizeF(chartWidth, documentHeight);
        var fileName = this.exportProperties.fileName ? this.exportProperties.fileName :
            (!isNullOrUndefined(pdfExportProperties) && !isNullOrUndefined(pdfExportProperties.fileName)) ?
                pdfExportProperties.fileName : 'default';
        if (this.exportProperties.width || this.exportProperties.height) {
            pdfDocument.pageSettings.orientation = ((this.exportProperties.width > this.exportProperties.height) ||
                (!this.exportProperties.height && (this.exportProperties.width > documentHeight)) || (!this.exportProperties.width &&
                (documentWidth > this.exportProperties.height))) ? PdfPageOrientation.Landscape : PdfPageOrientation.Portrait;
            pdfDocument.pageSettings.size = new SizeF(this.exportProperties.width ? this.exportProperties.width
                : documentWidth, this.exportProperties.height ? this.exportProperties.height : documentHeight);
        }
        else {
            pdfDocument.pageSettings.orientation = (this.exportProperties.orientation === 0 || this.exportProperties.orientation)
                ? this.exportProperties.orientation : (!isNullOrUndefined(pdfExportProperties) &&
                !isNullOrUndefined(pdfExportProperties.pageOrientation)) ? (pdfExportProperties.pageOrientation === 'Landscape' ?
                PdfPageOrientation.Landscape : PdfPageOrientation.Portrait) : PdfPageOrientation.Landscape;
            if (!isNullOrUndefined(pdfExportProperties) && !isNullOrUndefined(pdfExportProperties.pageSize)) {
                pdfDocument.pageSettings.size = PivotUtil.getPageSize(pdfExportProperties.pageSize);
            }
        }
        if (!isNullOrUndefined(this.exportProperties.pdfMargins)) {
            var margins = pdfDocument.pageSettings.margins;
            margins.top = !isNullOrUndefined(this.exportProperties.pdfMargins.top) ? this.exportProperties.pdfMargins.top : margins.top;
            margins.bottom = !isNullOrUndefined(this.exportProperties.pdfMargins.bottom) ? this.exportProperties.pdfMargins.bottom :
                margins.bottom;
            margins.left = !isNullOrUndefined(this.exportProperties.pdfMargins.left) ? this.exportProperties.pdfMargins.left : margins.left;
            margins.right = !isNullOrUndefined(this.exportProperties.pdfMargins.right) ? this.exportProperties.pdfMargins.right :
                margins.right;
        }
        documentSection.setPageSettings(pdfDocument.pageSettings);
        documentHeight = pdfDocument.pageSettings.height;
        var imageString = element.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
        imageString = imageString.slice(imageString.indexOf(',') + 1);
        var image = new PdfBitmap(imageString);
        var pdfPage = documentSection.pages.add();
        if (!isNullOrUndefined(pdfExportProperties) && !isNullOrUndefined(pdfExportProperties.header)) {
            this.pdfExportHelper.drawHeader(pdfExportProperties, pdfDocument);
        }
        if (!isNullOrUndefined(pdfExportProperties) && !isNullOrUndefined(pdfExportProperties.footer)) {
            this.pdfExportHelper.drawFooter(pdfExportProperties, pdfDocument);
        }
        pdfPage.graphics.drawImage(image, 0, 0, (documentHeight < height || this.exportProperties.width
            || pdfDocument.pageSettings.size) ? pdfPage.getClientSize().width : chartWidth, documentHeight < height
            ? pdfPage.getClientSize().height : height);
        var blobPromise;
        if (isBlob || isMultipleExport) {
            if (isBlob) {
                blobPromise = pdfDocument.save();
            }
        }
        else {
            pdfDocument.save(fileName + '.pdf');
            pdfDocument.destroy();
        }
        var exportCompleteEventArgs = {
            type: 'PDF',
            promise: isBlob ? blobPromise : null
        };
        this.parent.trigger(events.exportComplete, exportCompleteEventArgs);
        return new Promise(function () {
            pdfDocument;
        });
    };
    /**
     * To destroy the pdf export module.
     *
     * @returns {void}
     * @hidden
     */
    ChartExport.prototype.destroy = function () {
        if (this.exportProperties) {
            this.exportProperties = null;
        }
        if (this.pdfExportHelper) {
            this.pdfExportHelper = null;
        }
    };
    return ChartExport;
}());
export { ChartExport };
