import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * Axis3D Directive
 * ```html
 * <e-axes><e-axis></e-axis></e-axes>
 * ```
 */
export declare class Chart3DAxisDirective extends ComplexBase<Chart3DAxisDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Specifies the index of the column where the axis is associated,
     * when the chart area is divided into multiple plot areas by using `columns`.
     *
     * @default 0
     */
    columnIndex: any;
    /**
     * With this property, you can request axis to calculate intervals approximately equal to your specified interval.
     * @default null
     * @aspdefaultvalueignore
     */
    desiredIntervals: any;
    /**
     * Specifies the position of labels at the edge of the axis.They are,
     * * None: No action will be performed.
     * * Hide: Edge label will be hidden.
     * * Shift: Shifts the edge labels.
     * @default 'None'
     */
    edgeLabelPlacement: any;
    /**
     * Specifies the Trim property for an axis.
     * @default false
     */
    enableTrim: any;
    /**
     * Specifies the interval for an axis.
     * @default null
     * @aspdefaultvalueignore
     */
    interval: any;
    /**
     * Specifies the types like `Years`, `Months`, `Days`, `Hours`, `Minutes`, `Seconds` in date time axis.They are,
     * * Auto: Defines the interval of the axis based on data.
     * * Years: Defines the interval of the axis in years.
     * * Months: Defines the interval of the axis in months.
     * * Days: Defines the interval of the axis in days.
     * * Hours: Defines the interval of the axis in hours.
     * * Minutes: Defines the interval of the axis in minutes.
     * @default 'Auto'
     */
    intervalType: any;
    /**
     * Specifies indexed category  axis.
     * @default false
     */
    isIndexed: any;
    /**
     * It specifies whether the axis to be rendered in inversed manner or not.
     * @default false
     */
    isInversed: any;
    /**
     * Used to format the axis label that accepts any global string format like 'C', 'n1', 'P' etc.
     * It also accepts placeholder like '{value}°C' in which value represent the axis label, e.g, 20°C.
     * @default ''
     */
    labelFormat: any;
    /**
     * Specifies the actions like `None`, `Hide`, `Trim`, `Wrap`, `MultipleRows`, `Rotate45`, and `Rotate90`
     * when the axis labels intersect with each other.They are,
     * * None: Shows all the labels.
     * * Hide: Hides the label when it intersects.
     * * Trim: Trim the label when it intersects.
     * * Wrap: Wrap the label when it intersects.
     * * MultipleRows: Shows the label in MultipleRows when it intersects.
     * * Rotate45: Rotates the label to 45 degree when it intersects.
     * * Rotate90: Rotates the label to 90 degree when it intersects.
     * @default Trim
     */
    labelIntersectAction: any;
    /**
     * Specifies the labelPadding from axis.
     * @default 5
     */
    labelPadding: any;
    /**
     * Specifies the placement of a label for category axis. They are,
     * * betweenTicks: Renders the label between the ticks.
     * * onTicks: Renders the label on the ticks.
     * @default 'OnTicks'
     */
    labelPlacement: any;
    /**
     * The angle to which the axis label gets rotated.
     * @default 0
     */
    labelRotation: any;
    /**
     * Options to customize the axis label.
     */
    labelStyle: any;
    /**
     * The base value for logarithmic axis. It requires `valueType` to be `Logarithmic`.
     * @default 10
     */
    logBase: any;
    /**
     * Options for customizing major grid lines.
     */
    majorGridLines: any;
    /**
     * Options for customizing major tick lines.
     */
    majorTickLines: any;
    /**
     * Specifies the maximum range of an axis.
     * @default null
     */
    maximum: any;
    /**
     * Specifies the maximum width of an axis label.
     * @default 34.
     */
    maximumLabelWidth: any;
    /**
     * The maximum number of label count per 100 pixels with respect to the axis length.
     * @default 3
     */
    maximumLabels: any;
    /**
     * Specifies the minimum range of an axis.
     * @default null
     */
    minimum: any;
    /**
     * Options for customizing minor grid lines.
     */
    minorGridLines: any;
    /**
     * Options for customizing minor tick lines.
     */
    minorTickLines: any;
    /**
     * Specifies the number of minor ticks per interval.
     * @default 0
     */
    minorTicksPerInterval: any;
    /**
     * Unique identifier of an axis.
     * To associate an axis with the series, set this name to the xAxisName/yAxisName properties of the series.
     * @default ''
     */
    name: any;
    /**
     * If set to true, the axis will render at the opposite side of its default position.
     * @default false
     */
    opposedPosition: any;
    /**
     * Left and right padding for the plot area in pixels.
     * @default 0
     */
    plotOffset: any;
    /**
     * Bottom padding for the plot area in pixels.
     * @default null
     */
    plotOffsetBottom: any;
    /**
     * Left padding for the plot area in pixels.
     * @default null
     */
    plotOffsetLeft: any;
    /**
     * Right padding for the plot area in pixels.
     * @default null
     */
    plotOffsetRight: any;
    /**
     * Top padding for the plot area in pixels.
     * @default null
     */
    plotOffsetTop: any;
    /**
     * Specifies the padding for the axis range in terms of interval.They are,
     * * none: Padding cannot be applied to the axis.
     * * normal: Padding is applied to the axis based on the range calculation.
     * * additional: Interval of the axis is added as padding to the minimum and maximum values of the range.
     * * round: Axis range is rounded to the nearest possible value divided by the interval.
     * @default 'Auto'
     */
    rangePadding: any;
    /**
     * Specifies the index of the row where the axis is associated, when the chart area is divided into multiple plot areas by using `rows`.
     *
     * @default 0
     */
    rowIndex: any;
    /**
     * Specifies the skeleton format in which the dateTime format will process.
     * @default ''
     */
    skeleton: any;
    /**
     * It specifies the type of format to be used in dateTime format process.
     * @default 'DateTime'
     * @deprecated
     */
    skeletonType: any;
    /**
     * Specifies the number of `columns` or `rows` an axis has to span horizontally or vertically.
     * @default 1
     */
    span: any;
    /**
     * It specifies whether the axis to be start from zero.
     * @default true
     */
    startFromZero: any;
    /**
     * Specifies the title of an axis.
     * @default ''
     */
    title: any;
    /**
     * Specifies the titlePadding from axis label.
     * @default 5
     */
    titlePadding: any;
    /**
     * Defines an angle to rotate axis title. By default, angle auto calculated based on position and orientation of axis.
     * @default null
     */
    titleRotation: any;
    /**
     * Options for customizing the axis title.
     */
    titleStyle: any;
    /**
     * Specifies the data types that the axis can handle:
     * * Double: This type is used for rendering a numeric axis to accommodate numeric data.
     * * DateTime: This type is utilized for rendering a date-time axis to manage date-time data.
     * * Category: This type is employed for rendering a category axis to manage categorical data.
     * * Logarithmic: This type is applied for rendering a logarithmic axis to handle a wide range of values.
     * * DateTimeCategory: This type is used to render a date time category axis for managing business days.
     * @default 'Double'
     * @isenumeration true
     */
    valueType: any;
    /**
     * If set to true, axis label will be visible.
     * @default true
     */
    visible: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<Chart3DAxisDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<Chart3DAxisDirective, "e-chart3daxes>e-chart3daxis", never, { "columnIndex": "columnIndex"; "desiredIntervals": "desiredIntervals"; "edgeLabelPlacement": "edgeLabelPlacement"; "enableTrim": "enableTrim"; "interval": "interval"; "intervalType": "intervalType"; "isIndexed": "isIndexed"; "isInversed": "isInversed"; "labelFormat": "labelFormat"; "labelIntersectAction": "labelIntersectAction"; "labelPadding": "labelPadding"; "labelPlacement": "labelPlacement"; "labelRotation": "labelRotation"; "labelStyle": "labelStyle"; "logBase": "logBase"; "majorGridLines": "majorGridLines"; "majorTickLines": "majorTickLines"; "maximum": "maximum"; "maximumLabelWidth": "maximumLabelWidth"; "maximumLabels": "maximumLabels"; "minimum": "minimum"; "minorGridLines": "minorGridLines"; "minorTickLines": "minorTickLines"; "minorTicksPerInterval": "minorTicksPerInterval"; "name": "name"; "opposedPosition": "opposedPosition"; "plotOffset": "plotOffset"; "plotOffsetBottom": "plotOffsetBottom"; "plotOffsetLeft": "plotOffsetLeft"; "plotOffsetRight": "plotOffsetRight"; "plotOffsetTop": "plotOffsetTop"; "rangePadding": "rangePadding"; "rowIndex": "rowIndex"; "skeleton": "skeleton"; "skeletonType": "skeletonType"; "span": "span"; "startFromZero": "startFromZero"; "title": "title"; "titlePadding": "titlePadding"; "titleRotation": "titleRotation"; "titleStyle": "titleStyle"; "valueType": "valueType"; "visible": "visible"; }, {}, never>;
}
/**
 * Chart3DAxis Array Directive
 * @private
 */
export declare class Chart3DAxesDirective extends ArrayBase<Chart3DAxesDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<Chart3DAxesDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<Chart3DAxesDirective, "ejs-chart3d>e-chart3daxes", never, {}, {}, ["children"]>;
}
