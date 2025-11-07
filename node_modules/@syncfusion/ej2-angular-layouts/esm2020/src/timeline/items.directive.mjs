import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['content', 'cssClass', 'disabled', 'dotCss', 'oppositeContent'];
let outputs = [];
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
export class ItemDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
ItemDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ItemDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ItemDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ItemDirective, selector: "ejs-timeline>e-items>e-item", inputs: { content: "content", cssClass: "cssClass", disabled: "disabled", dotCss: "dotCss", oppositeContent: "oppositeContent" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-timeline>e-items>e-item',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Item Array Directive
 * @private
 */
export class ItemsDirective extends ArrayBase {
    constructor() {
        super('items');
    }
}
ItemsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ItemsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ItemsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ItemsDirective, selector: "ejs-timeline>e-items", queries: [{ propertyName: "children", predicate: ItemDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ItemsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-timeline>e-items',
                    queries: {
                        children: new ContentChildren(ItemDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3RpbWVsaW5lL2l0ZW1zLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBSWhGLElBQUksS0FBSyxHQUFhLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixDQUFDLENBQUM7QUFDdkYsSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO0FBQzNCOzs7Ozs7Ozs7OztHQVdHO0FBU0gsTUFBTSxPQUFPLGFBQWMsU0FBUSxXQUEwQjtJQXVDekQsWUFBb0IsZ0JBQWlDO1FBQ2pELEtBQUssRUFBRSxDQUFDO1FBRFEscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUVqRCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDOzswR0E1Q1EsYUFBYTs4RkFBYixhQUFhOzJGQUFiLGFBQWE7a0JBUnpCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLE9BQU8sRUFBRSxFQUVSO2lCQUNKOztBQWdERDs7O0dBR0c7QUFPSCxNQUFNLE9BQU8sY0FBZSxTQUFRLFNBQXlCO0lBQ3pEO1FBQ0ksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25CLENBQUM7OzJHQUhRLGNBQWM7K0ZBQWQsY0FBYyxxRkFIVyxhQUFhOzJGQUd0QyxjQUFjO2tCQU4xQixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLE9BQU8sRUFBRTt3QkFDTCxRQUFRLEVBQUUsSUFBSSxlQUFlLENBQUMsYUFBYSxDQUFDO3FCQUMvQztpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wbGV4QmFzZSwgQXJyYXlCYXNlLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuXG5cblxubGV0IGlucHV0OiBzdHJpbmdbXSA9IFsnY29udGVudCcsICdjc3NDbGFzcycsICdkaXNhYmxlZCcsICdkb3RDc3MnLCAnb3Bwb3NpdGVDb250ZW50J107XG5sZXQgb3V0cHV0czogc3RyaW5nW10gPSBbXTtcbi8qKlxuICogJ2UtdGltZWxpbmVJdGVtJyBkaXJlY3RpdmUgcmVwcmVzZW50cyBhIGl0ZW0gb2YgdGhlIEFuZ3VsYXIgVGltZWxpbmUuXG4gKiBJdCBtdXN0IGJlIGNvbnRhaW5lZCBpbiBhIFRpbWVsaW5lIGNvbXBvbmVudChgZWpzLXRpbWVsaW5lYCkuIFxuICogYGBgaHRtbFxuICogPGVqcy10aW1lbGluZT5cbiAqICA8ZS1pdGVtcz5cbiAqICAgPGUtaXRlbSBbZG90Q3NzXT0nZS1pY29ucyBlLWZvbGRlcicgW2NvbnRlbnRdPSdJdGVtIDEnIC8+XG4gKiAgIDxlLWl0ZW0gW2RvdENzc109J2UtaWNvbnMgZS1mb2xkZXInIFtjb250ZW50XT0nSXRlbSAyJyAvPlxuICogIDwvZS1pdGVtcz4gXG4gKiA8L2Vqcy10aW1lbGluZT5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2Vqcy10aW1lbGluZT5lLWl0ZW1zPmUtaXRlbScsXG4gICAgaW5wdXRzOiBpbnB1dCxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLCAgICBcbiAgICBxdWVyaWVzOiB7XG5cbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1EaXJlY3RpdmUgZXh0ZW5kcyBDb21wbGV4QmFzZTxJdGVtRGlyZWN0aXZlPiB7XG4gICAgcHVibGljIGRpcmVjdGl2ZVByb3BMaXN0OiBhbnk7XG5cdFxuXG5cbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0aGUgdGV4dCBjb250ZW50IG9yIHRlbXBsYXRlIGZvciB0aGUgVGltZWxpbmUgaXRlbS4gVGhlIGN1cnJlbnQgaXRlbUluZGV4IHBhc3NlZCBhcyBjb250ZXh0IHRvIGJ1aWxkIHRoZSBjb250ZW50LlxuICAgICAqIEBkZWZhdWx0ICcnXG4gICAgICogQGFuZ3VsYXJ0eXBlIHN0cmluZyB8IG9iamVjdFxuICAgICAqIEByZWFjdHR5cGUgc3RyaW5nIHwgZnVuY3Rpb24gfCBKU1guRWxlbWVudFxuICAgICAqIEB2dWV0eXBlIHN0cmluZyB8IGZ1bmN0aW9uXG4gICAgICogQGFzcHR5cGUgc3RyaW5nXG4gICAgICovXG4gICAgcHVibGljIGNvbnRlbnQ6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0aGUgQ1NTIGNsYXNzIHRvIGN1c3RvbWl6ZSB0aGUgVGltZWxpbmUgaXRlbSBhcHBlYXJhbmNlLlxuICAgICAqIEBkZWZhdWx0ICcnXG4gICAgICovXG4gICAgcHVibGljIGNzc0NsYXNzOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgd2hldGhlciB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgdGltZWxpbmUgaXRlbS5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIHB1YmxpYyBkaXNhYmxlZDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIG9uZSBvciBtb3JlIENTUyBjbGFzc2VzIHRvIGluY2x1ZGUgYW4gaWNvbiBvciBpbWFnZSBpbiB0aGUgVGltZWxpbmUgaXRlbS5cbiAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAqL1xuICAgIHB1YmxpYyBkb3RDc3M6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0aGUgYWRkaXRpb25hbCB0ZXh0IGNvbnRlbnQgb3IgdGVtcGxhdGUgdG8gYmUgZGlzcGxheWVkIG9wcG9zaXRlIHNpZGUgb2YgdGhlIGl0ZW0uIFRoZSBjdXJyZW50IGl0ZW1JbmRleCBwYXNzZWQgYXMgY29udGV4dCB0byBidWlsZCB0aGUgY29udGVudC5cbiAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAqIEBhbmd1bGFydHlwZSBzdHJpbmcgfCBvYmplY3RcbiAgICAgKiBAcmVhY3R0eXBlIHN0cmluZyB8IGZ1bmN0aW9uIHwgSlNYLkVsZW1lbnRcbiAgICAgKiBAdnVldHlwZSBzdHJpbmcgfCBmdW5jdGlvblxuICAgICAqIEBhc3B0eXBlIHN0cmluZ1xuICAgICAqL1xuICAgIHB1YmxpYyBvcHBvc2l0ZUNvbnRlbnQ6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjpWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHNldFZhbHVlKCdjdXJyZW50SW5zdGFuY2UnLCB0aGlzLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKG91dHB1dHMpO1xuICAgICAgICB0aGlzLmRpcmVjdGl2ZVByb3BMaXN0ID0gaW5wdXQ7XG4gICAgfVxufVxuXG4vKipcbiAqIEl0ZW0gQXJyYXkgRGlyZWN0aXZlXG4gKiBAcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2Vqcy10aW1lbGluZT5lLWl0ZW1zJyxcbiAgICBxdWVyaWVzOiB7XG4gICAgICAgIGNoaWxkcmVuOiBuZXcgQ29udGVudENoaWxkcmVuKEl0ZW1EaXJlY3RpdmUpXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNEaXJlY3RpdmUgZXh0ZW5kcyBBcnJheUJhc2U8SXRlbXNEaXJlY3RpdmU+IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2l0ZW1zJyk7XG4gICAgfVxufSJdfQ==