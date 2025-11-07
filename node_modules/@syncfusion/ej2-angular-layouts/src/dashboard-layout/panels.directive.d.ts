import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * 'e-panels' directive represent a panels of angular dashboardlayout
 * It must be contained in a dashboardlayout component(`ej-dashboardlayout`).
 * ```html
 * <ejs-dashboardlayout>
 *   <e-panels>
 *    <e-panel></e-panel>
 *    <e-panel></e-panel>
 *   </e-panels>
 * </ejs-dashboardlayout>
 * ```
 */
export declare class PanelDirective extends ComplexBase<PanelDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Defines the column value where the panel to be placed.
     * @default 0
     * @asptype int
     */
    col: any;
    /**
     * Defines the CSS class name that can be appended with each panel element.
     * @default ''
     */
    cssClass: any;
    /**
     * Defines whether to the panel should be enabled or not.
     * @default true
     */
    enabled: any;
    /**
     * Defines the id of the panel.
     * @default ''
     */
    id: any;
    /**
     * Specifies the maximum width of the panel in cells count.
     * @default null
     * @asptype int
     */
    maxSizeX: any;
    /**
     * Specifies the maximum height of the panel in cells count.
     * @default null
     * @asptype int

     */
    maxSizeY: any;
    /**
     * Specifies the minimum width of the panel in cells count.
     * @default 1
     */
    minSizeX: any;
    /**
     * Specifies the minimum height of the panel in cells count.
     * @default 1
     */
    minSizeY: any;
    /**
     * Defines a row value where the panel should be placed.
     * @default 0
     * @asptype int
     */
    row: any;
    /**
     * Specifies the width of the panel in the layout in cells count.
     * @default 1
     */
    sizeX: any;
    /**
     * Specifies the height of the panel in the layout in cells count.
     * @default 1
     */
    sizeY: any;
    /**
     * Specifies the z-index of the panel
     * @default 1000
     * @asptype double
     */
    zIndex: any;
    /**
     * Defines the template value that should be displayed as the panel's header.
     * @asptype string
     */
    header: any;
    /**
     * Defines the template value that should be displayed as the panel's content.
     * @asptype string
     */
    content: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<PanelDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PanelDirective, "e-panels>e-panel", never, { "col": "col"; "content": "content"; "cssClass": "cssClass"; "enabled": "enabled"; "header": "header"; "id": "id"; "maxSizeX": "maxSizeX"; "maxSizeY": "maxSizeY"; "minSizeX": "minSizeX"; "minSizeY": "minSizeY"; "row": "row"; "sizeX": "sizeX"; "sizeY": "sizeY"; "zIndex": "zIndex"; }, {}, ["header", "content"]>;
}
/**
 * Panel Array Directive
 * @private
 */
export declare class PanelsDirective extends ArrayBase<PanelsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<PanelsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PanelsDirective, "ejs-dashboardlayout>e-panels", never, {}, {}, ["children"]>;
}
