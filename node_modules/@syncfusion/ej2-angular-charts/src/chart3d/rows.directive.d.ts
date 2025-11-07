import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * Row3D Directive
 * ```html
 * <e-rows><e-row></e-row><e-rows>
 * ```
 */
export declare class Chart3DRowDirective extends ComplexBase<Chart3DRowDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * The height of the row as a string accept input both as '100px' and '100%'.
     * If specified as '100%, row renders to the full height of its chart.
     * @default '100%'
     */
    height: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<Chart3DRowDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<Chart3DRowDirective, "e-chart3d-rows>e-chart3d-row", never, { "height": "height"; }, {}, never>;
}
/**
 * Chart3DRow Array Directive
 * @private
 */
export declare class Chart3DRowsDirective extends ArrayBase<Chart3DRowsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<Chart3DRowsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<Chart3DRowsDirective, "ejs-chart3d>e-chart3d-rows", never, {}, {}, ["children"]>;
}
