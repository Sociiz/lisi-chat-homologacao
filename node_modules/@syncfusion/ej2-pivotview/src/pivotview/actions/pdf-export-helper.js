import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { PdfBitmap, SizeF, PointF, RectangleF, PdfPageTemplateElement, PdfSolidBrush, PdfPen, PdfColor, PdfStringFormat, PdfPageNumberField, PdfCompositeField, PdfPageCountField, PdfFontFamily, PdfFontStyle, PdfStandardFont, PdfTextAlignment, PdfVerticalAlignment } from '@syncfusion/ej2-pdf-export';
/**
 * `PDFExportHelper` module is used to add header and footer in PDF document
 *
 * @hidden
 */
var PDFExportHelper = /** @class */ (function () {
    function PDFExportHelper() {
    }
    /**
     * Method to draw a header in a PDF document.
     *
     * @param  {PdfExportProperties} pdfExportProperties - It contains the export properties for the table and chart.
     * @param  {PdfDocument} pdfDocument - It contains the current PDF document
     * @returns {void}
     * @hidden
     */
    PDFExportHelper.prototype.drawHeader = function (pdfExportProperties, pdfDocument) {
        var clientSize = pdfDocument.pageSettings.size;
        var header = pdfExportProperties.header;
        var position = new PointF(0, (header && header.fromTop) ? header.fromTop : 0);
        var size = new SizeF((clientSize.width - 80), ((header && header.height) ? header.height * 0.75 : 50));
        var bounds = new RectangleF(position, size);
        pdfDocument.template.top = this.drawPageTemplate(new PdfPageTemplateElement(bounds), header);
    };
    /**
     * Method to draw a footer in a PDF document.
     *
     * @param  {PdfExportProperties} pdfExportProperties -It contains the export properties for table and chart
     * @param  {PdfDocument} pdfDocument - It contains the current PDF document
     * @returns {void}
     * @hidden
     */
    PDFExportHelper.prototype.drawFooter = function (pdfExportProperties, pdfDocument) {
        var clientSize = pdfDocument.pageSettings.size;
        var footer = pdfExportProperties.footer;
        var position = new PointF(0, ((clientSize.width - 80) - ((footer && footer.fromBottom) ?
            footer.fromBottom * 0.75 : 0)));
        var size = new SizeF((clientSize.width - 80), ((footer && footer.height) ? footer.height * 0.75 : 50));
        var bounds = new RectangleF(position, size);
        pdfDocument.template.bottom = this.drawPageTemplate(new PdfPageTemplateElement(bounds), footer);
    };
    PDFExportHelper.prototype.drawPageTemplate = function (template, element) {
        for (var _i = 0, _a = element.contents; _i < _a.length; _i++) {
            var content = _a[_i];
            this.processContentValidation(content);
            switch (content.type) {
                case 'Text':
                    if (content.value === '' || isNullOrUndefined(content.value) || typeof content.value !== 'string') {
                        throw new Error('please enter the valid input value in text content...');
                    }
                    this.drawText(template, content);
                    break;
                case 'PageNumber':
                    this.drawPageNumber(template, content);
                    break;
                case 'Image':
                    if (isNullOrUndefined(content.src) || content.src === '') {
                        throw new Error('please enter the valid base64 string in image content...');
                    }
                    this.drawImage(template, content);
                    break;
                case 'Line':
                    this.drawLine(template, content);
                    break;
            }
        }
        return template;
    };
    PDFExportHelper.prototype.processContentValidation = function (content) {
        if (isNullOrUndefined(content.type)) {
            throw new Error('please set valid content type...');
        }
        else {
            if (content.type === 'Line') {
                if (isNullOrUndefined(content.points)) {
                    throw new Error('please enter valid points in ' + content.type + ' content...');
                }
                else {
                    if (isNullOrUndefined(content.points.x1) || typeof content.points.x1 !== 'number') {
                        throw new Error('please enter valid x1 co-ordinate in ' + content.type + ' points...');
                    }
                    if (isNullOrUndefined(content.points.y1) || typeof content.points.y1 !== 'number') {
                        throw new Error('please enter valid y1 co-ordinate in ' + content.type + ' points...');
                    }
                    if (isNullOrUndefined(content.points.x2) || typeof content.points.x2 !== 'number') {
                        throw new Error('please enter valid x2 co-ordinate in ' + content.type + ' points...');
                    }
                    if (isNullOrUndefined(content.points.y2) || typeof content.points.y2 !== 'number') {
                        throw new Error('please enter valid y2 co-ordinate in ' + content.type + ' points...');
                    }
                }
            }
            else {
                if (isNullOrUndefined(content.position)) {
                    throw new Error('please enter valid position in ' + content.type + ' content...');
                }
                else {
                    if (isNullOrUndefined(content.position.x) || typeof content.position.x !== 'number') {
                        throw new Error('please enter valid x co-ordinate in ' + content.type + ' position...');
                    }
                    if (isNullOrUndefined(content.position.y) || typeof content.position.y !== 'number') {
                        throw new Error('please enter valid y co-ordinate in ' + content.type + ' position...');
                    }
                }
            }
        }
    };
    PDFExportHelper.prototype.drawText = function (pageTemplate, content) {
        var font = this.getFontFromContent(content);
        var brush = this.getBrushFromContent(content);
        var pen = null;
        if (!isNullOrUndefined(content.style) && !isNullOrUndefined(content.style.textPenColor)) {
            var penColor = this.hexDecToRgb(content.style.textPenColor);
            pen = new PdfPen(new PdfColor(penColor.r, penColor.g, penColor.b));
        }
        if (brush == null && pen == null) {
            brush = new PdfSolidBrush(new PdfColor(0, 0, 0));
        }
        var value = content.value.toString();
        var x = content.position.x * 0.75;
        var y = content.position.y * 0.75;
        var format = new PdfStringFormat();
        if (!isNullOrUndefined(content.stringFormat)) {
            format = content.stringFormat;
        }
        var result = this.setContentFormat(content, format);
        if (result !== null && !isNullOrUndefined(result.format) && !isNullOrUndefined(result.size)) {
            pageTemplate.graphics.drawString(value, font, pen, brush, x, y, result.size.width, result.size.height, result.format);
        }
        else {
            pageTemplate.graphics.drawString(value, font, pen, brush, x, y, format);
        }
    };
    PDFExportHelper.prototype.drawPageNumber = function (documentHeader, content) {
        var font = this.getFontFromContent(content);
        var brush = null;
        if (!isNullOrUndefined(content.style) && !isNullOrUndefined(content.style.textBrushColor)) {
            var brushColor = this.hexDecToRgb(content.style.textBrushColor);
            brush = new PdfSolidBrush(new PdfColor(brushColor.r, brushColor.g, brushColor.b));
        }
        else {
            brush = new PdfSolidBrush(new PdfColor(0, 0, 0));
        }
        var pageNumber = new PdfPageNumberField(font, brush);
        pageNumber.numberStyle = this.getPageNumberStyle(content.pageNumberType);
        var compositeField;
        var format;
        if (!isNullOrUndefined(content.format)) {
            var total = '$total';
            var current = '$current';
            if (content.format.indexOf(total) !== -1 && content.format.indexOf(current) !== -1) {
                var pageCount = new PdfPageCountField(font);
                pageCount.numberStyle = this.getPageNumberStyle(content.pageNumberType);
                if (content.format.indexOf(total) > content.format.indexOf(current)) {
                    format = content.format.replace(current, '0');
                    format = format.replace(total, '1');
                }
                else {
                    format = content.format.replace(current, '1');
                    format = format.replace(total, '0');
                }
                compositeField = new PdfCompositeField(font, brush, format, pageNumber, pageCount);
            }
            else if (content.format.indexOf(current) !== -1 && content.format.indexOf(total) === -1) {
                format = content.format.replace(current, '0');
                compositeField = new PdfCompositeField(font, brush, format, pageNumber);
            }
            else {
                var pageCount = new PdfPageCountField(font);
                format = content.format.replace(total, '0');
                compositeField = new PdfCompositeField(font, brush, format, pageCount);
            }
        }
        else {
            format = '{0}';
            compositeField = new PdfCompositeField(font, brush, format, pageNumber);
        }
        var x = content.position.x * 0.75;
        var y = content.position.y * 0.75;
        var result = this.setContentFormat(content, compositeField.stringFormat);
        if (result !== null && !isNullOrUndefined(result.format) && !isNullOrUndefined(result.size)) {
            compositeField.stringFormat = result.format;
            compositeField.bounds = new RectangleF(x, y, result.size.width, result.size.height);
        }
        compositeField.draw(documentHeader.graphics, x, y);
    };
    PDFExportHelper.prototype.drawImage = function (documentHeader, content) {
        var x = content.position.x * 0.75;
        var y = content.position.y * 0.75;
        var width = (!isNullOrUndefined(content.size) && !isNullOrUndefined(content.size.width)) ?
            (content.size.width * 0.75) : undefined;
        var height = (!isNullOrUndefined(content.size) && !isNullOrUndefined(content.size.height)) ?
            (content.size.height * 0.75) : undefined;
        var image = new PdfBitmap(content.src);
        if (!isNullOrUndefined(width)) {
            documentHeader.graphics.drawImage(image, x, y, width, height);
        }
        else {
            documentHeader.graphics.drawImage(image, x, y);
        }
    };
    PDFExportHelper.prototype.drawLine = function (documentHeader, content) {
        var x1 = content.points.x1 * 0.75;
        var y1 = content.points.y1 * 0.75;
        var x2 = content.points.x2 * 0.75;
        var y2 = content.points.y2 * 0.75;
        var pen = this.getPenFromContent(content);
        if (!isNullOrUndefined(content.style)) {
            if (!isNullOrUndefined(content.style.penSize) && typeof content.style.penSize === 'number') {
                pen.width = content.style.penSize * 0.75;
            }
            pen.dashStyle = this.getDashStyle(content.style.dashStyle);
        }
        documentHeader.graphics.drawLine(pen, x1, y1, x2, y2);
    };
    PDFExportHelper.prototype.getFontFromContent = function (content) {
        var fontSize = (!isNullOrUndefined(content.font) && !isNullOrUndefined(content.font['fontSize'])) ?
            (content.font['fontSize'] * 0.75) : (!isNullOrUndefined(content.style) &&
            !isNullOrUndefined(content.style.fontSize)) ? (content.style.fontSize * 0.75) : 9.75;
        var fontFamily = (!isNullOrUndefined(content.font) && !isNullOrUndefined(content.font['pdfFontFamily']))
            ? content.font['pdfFontFamily'] : PdfFontFamily.TimesRoman;
        var fontStyle = PdfFontStyle.Regular;
        if (!isNullOrUndefined(content.font) && !isNullOrUndefined(content.font.bold)) {
            fontStyle |= PdfFontStyle.Bold;
        }
        if (!isNullOrUndefined(content.font) && !isNullOrUndefined(content.font.italic)) {
            fontStyle |= PdfFontStyle.Italic;
        }
        if (!isNullOrUndefined(content.font) && !isNullOrUndefined(content.font.underline)) {
            fontStyle |= PdfFontStyle.Underline;
        }
        if (!isNullOrUndefined(content.font) && !isNullOrUndefined(content.font.strikeout)) {
            fontStyle |= PdfFontStyle.Strikeout;
        }
        return new PdfStandardFont(fontFamily, fontSize, fontStyle);
    };
    PDFExportHelper.prototype.getPenFromContent = function (content) {
        var pen = new PdfPen(new PdfColor(0, 0, 0));
        if (!isNullOrUndefined(content.style) && content.style !== null && !isNullOrUndefined(content.style.penColor)) {
            var penColor = this.hexDecToRgb(content.style.penColor);
            pen = new PdfPen(new PdfColor(penColor.r, penColor.g, penColor.b));
        }
        return pen;
    };
    PDFExportHelper.prototype.getBrushFromContent = function (content) {
        var brush = null;
        if (!isNullOrUndefined(content.style) && !isNullOrUndefined(content.style.textBrushColor)) {
            var brushColor = this.hexDecToRgb(content.style.textBrushColor);
            brush = new PdfSolidBrush(new PdfColor(brushColor.r, brushColor.g, brushColor.b));
        }
        return brush;
    };
    PDFExportHelper.prototype.setContentFormat = function (content, format) {
        if (!isNullOrUndefined(content.size)) {
            var width = content.size.width * 0.75;
            var height = content.size.height * 0.75;
            format = new PdfStringFormat(PdfTextAlignment.Left, PdfVerticalAlignment.Middle);
            if (!isNullOrUndefined(content.style) && !isNullOrUndefined(content.style.hAlign)) {
                switch (content.style.hAlign) {
                    case 'Right':
                        format.alignment = PdfTextAlignment.Right;
                        break;
                    case 'Center':
                        format.alignment = PdfTextAlignment.Center;
                        break;
                    case 'Justify':
                        format.alignment = PdfTextAlignment.Justify;
                        break;
                }
            }
            if (!isNullOrUndefined(content.style) && !isNullOrUndefined(content.style.vAlign)) {
                switch (content.style.vAlign) {
                    case 'Bottom':
                        format.lineAlignment = PdfVerticalAlignment.Bottom;
                        break;
                    case 'Top':
                        format.lineAlignment = PdfVerticalAlignment.Top;
                        break;
                }
            }
            return { format: format, size: new SizeF(width, height) };
        }
        return null;
    };
    PDFExportHelper.prototype.getPageNumberStyle = function (pageNumberType) {
        switch (pageNumberType) {
            case 'LowerLatin':
                return 2;
            case 'LowerRoman':
                return 3;
            case 'UpperLatin':
                return 4;
            case 'UpperRoman':
                return 5;
            default:
                return 1;
        }
    };
    /**
     *
     * @param {PdfBorderStyle} dashType - It contains the PDF dash style
     * @returns {number} - It returns PDF dash style
     * @hidden
     */
    PDFExportHelper.prototype.getDashStyle = function (dashType) {
        switch (dashType) {
            case 'Dash':
                return 1;
            case 'Dot':
                return 2;
            case 'DashDot':
                return 3;
            case 'DashDotDot':
                return 4;
            default:
                return 0;
        }
    };
    /**
     *
     * @param {string} hexDec - It contains a hexadecimal code as string
     * @returns {number} - It returns RGB as number
     * @hidden
     */
    PDFExportHelper.prototype.hexDecToRgb = function (hexDec) {
        if (hexDec === null || hexDec === '' || hexDec.length !== 7) {
            throw new Error('please set valid hex value for color..');
        }
        hexDec = hexDec.substring(1);
        var bigint = parseInt(hexDec, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;
        return { r: r, g: g, b: b };
    };
    return PDFExportHelper;
}());
export { PDFExportHelper };
