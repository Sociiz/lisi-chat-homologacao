import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * Series3D Directive
 * ```html
 * <e-chart3d-series-collection>
 * <e-chart3d-series></e-chart3d-series>
 * </e-chart3d-series-collection>
 * ```
 */
export declare class Chart3DSeriesDirective extends ComplexBase<Chart3DSeriesDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Specifies the type of the series in the 3D chart. Available options include:
     * - Column
     * - Bar
     * - StackingColumn
     * - StackingBar
     * - StackingColumn100
     * - StackingBar100
     * @default 'Column'
     */
    type: any;
    /**
     * Options to customizing animation for the series.
     */
    animation: any;
    /**
     * Defines the shape of the data in a column and bar chart.
     * Rectangle: Displays the data in a column and bar chart in a rectangle shape.
     * Cylinder: Displays the data in a column and bar chart in a cylinder shape.
     * @default 'Rectangle'
     */
    columnFacet: any;
    /**
     * To render the column series points with particular column spacing. It takes value from 0 - 1.
     * @default 0.1
     */
    columnSpacing: any;
    /**
     * Render the column series points with a particular column width.
     * @default null
     */
    columnWidth: any;
    /**
     * The data label for the series.
     */
    dataLabel: any;
    /**
     * Specifies the data source for the series. It can be an array of JSON objects or an instance of DataManager.
     * @default ''
     */
    dataSource: any;
    /**
     * options to customize the empty points in series.
     */
    emptyPointSettings: any;
    /**
     * Enable tooltip for the chart series.
     * @default true
     */
    enableTooltip: any;
    /**
     * The fill color for the series, which can accept values in hex or rgba as a valid CSS color string.
     * @default null
     */
    fill: any;
    /**
     * Defines the name that specifies the chart series are mutually exclusive and can be overlaid.
     * The axis in the same group shares the same baseline and location on the corresponding axis.
     * @default ''
     */
    groupName: any;
    /**
     * The URL for the Image that is to be displayed as a Legend icon.  It requires  `legendShape` value to be an `Image`.
     * @default ''
     */
    legendImageUrl: any;
    /**
     * The shape of the legend. Each series has its own legend shape, which can be one of the following:
     * * Circle
     * * Rectangle
     * * Triangle
     * * Diamond
     * * Cross
     * * HorizontalLine
     * * VerticalLine
     * * Pentagon
     * * InvertedTriangle
     * * SeriesType
     * * Image
     * @default 'SeriesType'
     */
    legendShape: any;
    /**
     * The name of the series as displayed in the legend.
     * @default ''
     */
    name: any;
    /**
     * The opacity of the series.
     * @default 1
     */
    opacity: any;
    /**
     * The DataSource field that contains the point colors.
     * @default ''
     */
    pointColorMapping: any;
    /**
     * Specifies a query to select data from the DataSource. This property is applicable only when the DataSource is an `ej.DataManager`.
     * @default ''
     */
    query: any;
    /**
     * The DataSource field that contains the size value of y
     * @default ''
     */
    size: any;
    /**
     * This property allows grouping series in `stacked column / bar` charts.
     * Any string value can be provided to the stackingGroup property.
     * If any two or above series have the same value, those series will be grouped together.
     * @default ''
     */
    stackingGroup: any;
    /**
     * Format of the tooltip content.
     * @default ''
     */
    tooltipFormat: any;
    /**
     * The data source field that contains the tooltip value.
     * @default ''
     */
    tooltipMappingName: any;
    /**
     * Specifies the visibility of series.
     * @default true
     */
    visible: any;
    /**
     * The name of the horizontal axis associated with the series. It requires `axes` of the chart.
     * @default null
     */
    xAxisName: any;
    /**
     * The DataSource field that contains the x value.
     * @default ''
     */
    xName: any;
    /**
     * The name of the vertical axis associated with the series. It requires `axes` of the chart.
     * @default null
     */
    yAxisName: any;
    /**
     * The DataSource field that contains the y value.
     * @default ''
     */
    yName: any;
    dataLabel_template: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<Chart3DSeriesDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<Chart3DSeriesDirective, "e-chart3d-series-collection>e-chart3d-series", never, { "animation": "animation"; "columnFacet": "columnFacet"; "columnSpacing": "columnSpacing"; "columnWidth": "columnWidth"; "dataLabel": "dataLabel"; "dataSource": "dataSource"; "emptyPointSettings": "emptyPointSettings"; "enableTooltip": "enableTooltip"; "fill": "fill"; "groupName": "groupName"; "legendImageUrl": "legendImageUrl"; "legendShape": "legendShape"; "name": "name"; "opacity": "opacity"; "pointColorMapping": "pointColorMapping"; "query": "query"; "size": "size"; "stackingGroup": "stackingGroup"; "tooltipFormat": "tooltipFormat"; "tooltipMappingName": "tooltipMappingName"; "type": "type"; "visible": "visible"; "xAxisName": "xAxisName"; "xName": "xName"; "yAxisName": "yAxisName"; "yName": "yName"; }, {}, ["dataLabel_template"]>;
}
/**
 * Chart3DSeries Array Directive
 * @private
 */
export declare class Chart3DSeriesCollectionDirective extends ArrayBase<Chart3DSeriesCollectionDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<Chart3DSeriesCollectionDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<Chart3DSeriesCollectionDirective, "ejs-chart3d>e-chart3d-series-collection", never, {}, {}, ["children"]>;
}
