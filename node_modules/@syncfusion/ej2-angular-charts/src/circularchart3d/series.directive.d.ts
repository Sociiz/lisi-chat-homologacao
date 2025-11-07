import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * Circular3D Series Directive
 * ```html
 * <e-circular3d-series-collection>
 * <e-circular3d-series></e-circular3d-series>
 * </e-circular3d-series-collection>
 * ```
 */
export declare class CircularChart3DSeriesDirective extends ComplexBase<CircularChart3DSeriesDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Options for customizing the animation of the series.
     */
    animation: any;
    /**
     * The data label settings for the circular 3D series.
     */
    dataLabel: any;
    /**
     * Specifies the dataSource for the series. It can be an array of JSON objects or an instance of DataManager.
     *
     * @default ''
     */
    dataSource: any;
    /**
     * Options to customize the appearance of empty points in the circular 3D series.
     */
    emptyPointSettings: any;
    /**
     * Specifies whether the tooltip is enabled or disabled for the circular 3D series.
     * @default true
     */
    enableTooltip: any;
    /**
     * If set true, series points will be exploded on mouse click or touch.
     * @default false
     */
    explode: any;
    /**
     * If set true, all the points in the series will get exploded on load.
     * @default false
     */
    explodeAll: any;
    /**
     * Index of the point to be exploded on load. Set to `null` for no explosion.
     * @default null
     */
    explodeIndex: any;
    /**
     * Distance of the point from the center, which takes values in both pixels and percentage.
     * @default '30%'
     */
    explodeOffset: any;
    /**
     * When the innerRadius value is greater than 0 percentage, a donut will appear in the pie series. It takes values only in percentage.
     * @default '0'
     */
    innerRadius: any;
    /**
     * The URL for the image that is to be displayed as a legend icon. It requires `legendShape` value to be an `Image`.
     * @default ''
     */
    legendImageUrl: any;
    /**
     * The shape of the legend. Each series has its own legend shape. Available shapes:
     * * Circle - Renders a circle.
     * * Rectangle - Renders a rectangle.
     * * Triangle - Renders a triangle.
     * * Diamond - Renders a diamond.
     * * Cross - Renders a cross.
     * * HorizontalLine - Renders a horizontal line.
     * * VerticalLine - Renders a vertical line.
     * * Pentagon - Renders a pentagon.
     * * InvertedTriangle - Renders an inverted triangle.
     * * SeriesType -Render a legend shape based on series type.
     * * Image - Render an image. *
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
     * @default 1.
     */
    opacity: any;
    /**
     * Palette configuration for the points in the circular 3D series.
     * @default []
     */
    palettes: any;
    /**
     * The DataSource field that contains the point colors.
     * @default ''
     */
    pointColorMapping: any;
    /**
     * Specifies the query to select data from the dataSource. This property is applicable only when the dataSource is `ej.DataManager`.
     * @default null
     */
    query: any;
    /**
     * Specifies the radius of the pie series in percentage. Set to `null` for default.
     * @default null
     */
    radius: any;
    /**
     * The data source field that contains the tooltip value.
     * @default ''
     */
    tooltipMappingName: any;
    /**
     * Specifies the visibility of the series.
     * @default true
     */
    visible: any;
    /**
     * The DataSource field that contains the x value
     * @default ''
     */
    xName: any;
    /**
     * The DataSource field that contains the y value.
     * @default ''
     */
    yName: any;
    dataLabel_template: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<CircularChart3DSeriesDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CircularChart3DSeriesDirective, "e-circularchart3d-series-collection>e-circularchart3d-series", never, { "animation": "animation"; "dataLabel": "dataLabel"; "dataSource": "dataSource"; "emptyPointSettings": "emptyPointSettings"; "enableTooltip": "enableTooltip"; "explode": "explode"; "explodeAll": "explodeAll"; "explodeIndex": "explodeIndex"; "explodeOffset": "explodeOffset"; "innerRadius": "innerRadius"; "legendImageUrl": "legendImageUrl"; "legendShape": "legendShape"; "name": "name"; "opacity": "opacity"; "palettes": "palettes"; "pointColorMapping": "pointColorMapping"; "query": "query"; "radius": "radius"; "tooltipMappingName": "tooltipMappingName"; "visible": "visible"; "xName": "xName"; "yName": "yName"; }, {}, ["dataLabel_template"]>;
}
/**
 * CircularChart3DSeries Array Directive
 * @private
 */
export declare class CircularChart3DSeriesCollectionDirective extends ArrayBase<CircularChart3DSeriesCollectionDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<CircularChart3DSeriesCollectionDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CircularChart3DSeriesCollectionDirective, "ej-circularchart3d>e-circularchart3d-series-collection", never, {}, {}, ["children"]>;
}
