import { __decorate } from "tslib";
import { Directive, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['col', 'content', 'cssClass', 'enabled', 'header', 'id', 'maxSizeX', 'maxSizeY', 'minSizeX', 'minSizeY', 'row', 'sizeX', 'sizeY', 'zIndex'];
let outputs = [];
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
export class PanelDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
PanelDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PanelDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
PanelDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: PanelDirective, selector: "e-panels>e-panel", inputs: { col: "col", content: "content", cssClass: "cssClass", enabled: "enabled", header: "header", id: "id", maxSizeX: "maxSizeX", maxSizeY: "maxSizeY", minSizeX: "minSizeX", minSizeY: "minSizeY", row: "row", sizeX: "sizeX", sizeY: "sizeY", zIndex: "zIndex" }, queries: [{ propertyName: "header", first: true, predicate: ["header"], descendants: true }, { propertyName: "content", first: true, predicate: ["content"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], PanelDirective.prototype, "header", void 0);
__decorate([
    Template()
], PanelDirective.prototype, "content", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PanelDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-panels>e-panel',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { header: [{
                type: ContentChild,
                args: ['header']
            }], content: [{
                type: ContentChild,
                args: ['content']
            }] } });
/**
 * Panel Array Directive
 * @private
 */
export class PanelsDirective extends ArrayBase {
    constructor() {
        super('panels');
    }
}
PanelsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PanelsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PanelsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: PanelsDirective, selector: "ejs-dashboardlayout>e-panels", queries: [{ propertyName: "children", predicate: PanelDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PanelsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-dashboardlayout>e-panels',
                    queries: {
                        children: new ContentChildren(PanelDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWxzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXNoYm9hcmQtbGF5b3V0L3BhbmVscy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUd4RCxJQUFJLEtBQUssR0FBYSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNuSyxJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7QUFDM0I7Ozs7Ozs7Ozs7O0dBV0c7QUFTSCxNQUFNLE9BQU8sY0FBZSxTQUFRLFdBQTJCO0lBc0YzRCxZQUFvQixnQkFBaUM7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFEUSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBRWpELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7OzJHQTNGUSxjQUFjOytGQUFkLGNBQWM7QUE2RXZCO0lBREMsUUFBUSxFQUFFOzhDQUNRO0FBT25CO0lBREMsUUFBUSxFQUFFOytDQUNTOzJGQXBGWCxjQUFjO2tCQVIxQixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLE1BQU0sRUFBRSxLQUFLO29CQUNiLE9BQU8sRUFBRSxPQUFPO29CQUNoQixPQUFPLEVBQUUsRUFFUjtpQkFDSjt1R0E4RVUsTUFBTTtzQkFGWixZQUFZO3VCQUFDLFFBQVE7Z0JBU2YsT0FBTztzQkFGYixZQUFZO3VCQUFDLFNBQVM7O0FBWTNCOzs7R0FHRztBQU9ILE1BQU0sT0FBTyxlQUFnQixTQUFRLFNBQTBCO0lBQzNEO1FBQ0ksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7OzRHQUhRLGVBQWU7Z0dBQWYsZUFBZSw2RkFIVSxjQUFjOzJGQUd2QyxlQUFlO2tCQU4zQixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLE9BQU8sRUFBRTt3QkFDTCxRQUFRLEVBQUUsSUFBSSxlQUFlLENBQUMsY0FBYyxDQUFDO3FCQUNoRDtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkcmVuLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBsZXhCYXNlLCBBcnJheUJhc2UsIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuXG5cbmxldCBpbnB1dDogc3RyaW5nW10gPSBbJ2NvbCcsICdjb250ZW50JywgJ2Nzc0NsYXNzJywgJ2VuYWJsZWQnLCAnaGVhZGVyJywgJ2lkJywgJ21heFNpemVYJywgJ21heFNpemVZJywgJ21pblNpemVYJywgJ21pblNpemVZJywgJ3JvdycsICdzaXplWCcsICdzaXplWScsICd6SW5kZXgnXTtcbmxldCBvdXRwdXRzOiBzdHJpbmdbXSA9IFtdO1xuLyoqXG4gKiAnZS1wYW5lbHMnIGRpcmVjdGl2ZSByZXByZXNlbnQgYSBwYW5lbHMgb2YgYW5ndWxhciBkYXNoYm9hcmRsYXlvdXQgXG4gKiBJdCBtdXN0IGJlIGNvbnRhaW5lZCBpbiBhIGRhc2hib2FyZGxheW91dCBjb21wb25lbnQoYGVqLWRhc2hib2FyZGxheW91dGApLiBcbiAqIGBgYGh0bWxcbiAqIDxlanMtZGFzaGJvYXJkbGF5b3V0PiBcbiAqICAgPGUtcGFuZWxzPlxuICogICAgPGUtcGFuZWw+PC9lLXBhbmVsPlxuICogICAgPGUtcGFuZWw+PC9lLXBhbmVsPlxuICogICA8L2UtcGFuZWxzPlxuICogPC9lanMtZGFzaGJvYXJkbGF5b3V0PlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZS1wYW5lbHM+ZS1wYW5lbCcsXG4gICAgaW5wdXRzOiBpbnB1dCxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLCAgICBcbiAgICBxdWVyaWVzOiB7XG5cbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIFBhbmVsRGlyZWN0aXZlIGV4dGVuZHMgQ29tcGxleEJhc2U8UGFuZWxEaXJlY3RpdmU+IHtcbiAgICBwdWJsaWMgZGlyZWN0aXZlUHJvcExpc3Q6IGFueTtcblx0XG5cblxuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSBjb2x1bW4gdmFsdWUgd2hlcmUgdGhlIHBhbmVsIHRvIGJlIHBsYWNlZC5cbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICogQGFzcHR5cGUgaW50XG4gICAgICovXG4gICAgcHVibGljIGNvbDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSBDU1MgY2xhc3MgbmFtZSB0aGF0IGNhbiBiZSBhcHBlbmRlZCB3aXRoIGVhY2ggcGFuZWwgZWxlbWVudC5cbiAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAqL1xuICAgIHB1YmxpYyBjc3NDbGFzczogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHdoZXRoZXIgdG8gdGhlIHBhbmVsIHNob3VsZCBiZSBlbmFibGVkIG9yIG5vdC5cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG4gICAgcHVibGljIGVuYWJsZWQ6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0aGUgaWQgb2YgdGhlIHBhbmVsLlxuICAgICAqIEBkZWZhdWx0ICcnXG4gICAgICovXG4gICAgcHVibGljIGlkOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgcGFuZWwgaW4gY2VsbHMgY291bnQuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqIEBhc3B0eXBlIGludFxuICAgICAqL1xuICAgIHB1YmxpYyBtYXhTaXplWDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG1heGltdW0gaGVpZ2h0IG9mIHRoZSBwYW5lbCBpbiBjZWxscyBjb3VudC5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICogQGFzcHR5cGUgaW50XG5cbiAgICAgKi9cbiAgICBwdWJsaWMgbWF4U2l6ZVk6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBtaW5pbXVtIHdpZHRoIG9mIHRoZSBwYW5lbCBpbiBjZWxscyBjb3VudC5cbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG4gICAgcHVibGljIG1pblNpemVYOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgbWluaW11bSBoZWlnaHQgb2YgdGhlIHBhbmVsIGluIGNlbGxzIGNvdW50LlxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cbiAgICBwdWJsaWMgbWluU2l6ZVk6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyBhIHJvdyB2YWx1ZSB3aGVyZSB0aGUgcGFuZWwgc2hvdWxkIGJlIHBsYWNlZC5cbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICogQGFzcHR5cGUgaW50XG4gICAgICovXG4gICAgcHVibGljIHJvdzogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHdpZHRoIG9mIHRoZSBwYW5lbCBpbiB0aGUgbGF5b3V0IGluIGNlbGxzIGNvdW50LlxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cbiAgICBwdWJsaWMgc2l6ZVg6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBoZWlnaHQgb2YgdGhlIHBhbmVsIGluIHRoZSBsYXlvdXQgaW4gY2VsbHMgY291bnQuXG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuICAgIHB1YmxpYyBzaXplWTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHotaW5kZXggb2YgdGhlIHBhbmVsXG4gICAgICogQGRlZmF1bHQgMTAwMFxuICAgICAqIEBhc3B0eXBlIGRvdWJsZVxuICAgICAqL1xuICAgIHB1YmxpYyB6SW5kZXg6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyB0aGUgdGVtcGxhdGUgdmFsdWUgdGhhdCBzaG91bGQgYmUgZGlzcGxheWVkIGFzIHRoZSBwYW5lbCdzIGhlYWRlci5cbiAgICAgKiBAYXNwdHlwZSBzdHJpbmdcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCdoZWFkZXInKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGhlYWRlcjogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSB0ZW1wbGF0ZSB2YWx1ZSB0aGF0IHNob3VsZCBiZSBkaXNwbGF5ZWQgYXMgdGhlIHBhbmVsJ3MgY29udGVudC5cbiAgICAgKiBAYXNwdHlwZSBzdHJpbmdcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCdjb250ZW50JylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBjb250ZW50OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVQcm9wTGlzdCA9IGlucHV0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBQYW5lbCBBcnJheSBEaXJlY3RpdmVcbiAqIEBwcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZWpzLWRhc2hib2FyZGxheW91dD5lLXBhbmVscycsXG4gICAgcXVlcmllczoge1xuICAgICAgICBjaGlsZHJlbjogbmV3IENvbnRlbnRDaGlsZHJlbihQYW5lbERpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBQYW5lbHNEaXJlY3RpdmUgZXh0ZW5kcyBBcnJheUJhc2U8UGFuZWxzRGlyZWN0aXZlPiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdwYW5lbHMnKTtcbiAgICB9XG59Il19