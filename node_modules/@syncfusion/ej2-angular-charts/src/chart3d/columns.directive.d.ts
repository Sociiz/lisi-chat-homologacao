import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * Column3D Directive
 * ```html
 * <e-columns><e-column></e-column><e-columns>
 * ```
 */
export declare class Chart3DColumnDirective extends ComplexBase<Chart3DColumnDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * The width of the column as a string accepts input both as like '100px' or '100%'.
     * If specified as '100%, column renders to the full width of its chart.
     * @default '100%'
     */
    width: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<Chart3DColumnDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<Chart3DColumnDirective, "e-chart3d-columns>e-chart3d-columns", never, { "width": "width"; }, {}, never>;
}
/**
 * Chart3DColumn Array Directive
 * @private
 */
export declare class Chart3DColumnsDirective extends ArrayBase<Chart3DColumnsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<Chart3DColumnsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<Chart3DColumnsDirective, "ejs-chart3d>e-chart3d-columns", never, {}, {}, ["children"]>;
}
