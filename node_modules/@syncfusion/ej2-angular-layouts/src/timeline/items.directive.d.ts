import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * 'e-timelineItem' directive represents a item of the Angular Timeline.
 * It must be contained in a Timeline component(`ejs-timeline`).
 * ```html
 * <ejs-timeline>
 *  <e-items>
 *   <e-item [dotCss]='e-icons e-folder' [content]='Item 1' />
 *   <e-item [dotCss]='e-icons e-folder' [content]='Item 2' />
 *  </e-items>
 * </ejs-timeline>
 * ```
 */
export declare class ItemDirective extends ComplexBase<ItemDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Defines the text content or template for the Timeline item. The current itemIndex passed as context to build the content.
     * @default ''
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    content: any;
    /**
     * Defines the CSS class to customize the Timeline item appearance.
     * @default ''
     */
    cssClass: any;
    /**
     * Defines whether to enable or disable the timeline item.
     * @default false
     */
    disabled: any;
    /**
     * Defines one or more CSS classes to include an icon or image in the Timeline item.
     * @default ''
     */
    dotCss: any;
    /**
     * Defines the additional text content or template to be displayed opposite side of the item. The current itemIndex passed as context to build the content.
     * @default ''
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    oppositeContent: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<ItemDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ItemDirective, "ejs-timeline>e-items>e-item", never, { "content": "content"; "cssClass": "cssClass"; "disabled": "disabled"; "dotCss": "dotCss"; "oppositeContent": "oppositeContent"; }, {}, never>;
}
/**
 * Item Array Directive
 * @private
 */
export declare class ItemsDirective extends ArrayBase<ItemsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ItemsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ItemsDirective, "ejs-timeline>e-items", never, {}, {}, ["children"]>;
}
