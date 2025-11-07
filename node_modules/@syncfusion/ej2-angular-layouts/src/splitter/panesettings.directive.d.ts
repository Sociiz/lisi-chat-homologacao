import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * 'e-panesettings' directive represent a panes of angular splitter
 * It must be contained in a Splitter component(`ejs-splitter`).
 * ```html
 * <ejs-splitter id='splitter' >
 *   <e-panes>
 *    <e-pane size ='150px'></e-pane>
 *    <e-pane size = '20%'></e-pane>
 *   </e-panes>
 * </ejs-splitter>
 * ```
 */
export declare class PaneDirective extends ComplexBase<PaneDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Specifies whether a pane is collapsed or not collapsed at the initial rendering of splitter.
     *
     * {% codeBlock src='splitter/collapsed/index.md' %}{% endcodeBlock %}
     *
     * @default false
     */
    collapsed: any;
    /**
     * Specifies whether a pane is collapsible or not collapsible.
     *
     * {% codeBlock src='splitter/collapsible/index.md' %}{% endcodeBlock %}
     *
     * @default false
     */
    collapsible: any;
    /**
     * Specifies the CSS class names that defines specific user-defined
     * styles and themes to be appended on corresponding pane of the Splitter.
     * It is used to customize the Splitter control panes.
     * One or more custom CSS classes can be specified to the Splitter panes.
     * @default ''
     */
    cssClass: any;
    /**
     * Specifies the maximum size of a pane. The pane cannot be resized if it is more than the specified maximum limit.
     * @default null
     */
    max: any;
    /**
     * Specifies the minimum size of a pane. The pane cannot be resized if it is less than the specified minimum size.
     * @default null
     */
    min: any;
    /**
     * Specifies the value whether a pane is resizable. By default, the Splitter is resizable in all panes.
     * You can disable this for any specific panes using this property.
     * @default true
     */
    resizable: any;
    /**
     * Configures the properties for each pane.
     * @default ''
     */
    size: any;
    /**
     * Specifies the content of split pane as plain text, HTML markup, or any other JavaScript controls.
     * @default ''
     * @blazortype string
     */
    content: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<PaneDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PaneDirective, "e-panes>e-pane", never, { "collapsed": "collapsed"; "collapsible": "collapsible"; "content": "content"; "cssClass": "cssClass"; "max": "max"; "min": "min"; "resizable": "resizable"; "size": "size"; }, {}, ["content"]>;
}
/**
 * Pane Array Directive
 * @private
 */
export declare class PanesDirective extends ArrayBase<PanesDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<PanesDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PanesDirective, "ejs-splitter>e-panes", never, {}, {}, ["children"]>;
}
