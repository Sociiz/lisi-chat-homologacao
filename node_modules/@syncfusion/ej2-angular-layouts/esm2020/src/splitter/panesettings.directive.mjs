import { __decorate } from "tslib";
import { Directive, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['collapsed', 'collapsible', 'content', 'cssClass', 'max', 'min', 'resizable', 'size'];
let outputs = [];
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
export class PaneDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
PaneDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PaneDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
PaneDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: PaneDirective, selector: "e-panes>e-pane", inputs: { collapsed: "collapsed", collapsible: "collapsible", content: "content", cssClass: "cssClass", max: "max", min: "min", resizable: "resizable", size: "size" }, queries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], PaneDirective.prototype, "content", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PaneDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-panes>e-pane',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { content: [{
                type: ContentChild,
                args: ['content']
            }] } });
/**
 * Pane Array Directive
 * @private
 */
export class PanesDirective extends ArrayBase {
    constructor() {
        super('panesettings');
    }
}
PanesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PanesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PanesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: PanesDirective, selector: "ejs-splitter>e-panes", queries: [{ propertyName: "children", predicate: PaneDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: PanesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-splitter>e-panes',
                    queries: {
                        children: new ContentChildren(PaneDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZXNldHRpbmdzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zcGxpdHRlci9wYW5lc2V0dGluZ3MuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixlQUFlLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFHeEQsSUFBSSxLQUFLLEdBQWEsQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDN0csSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO0FBQzNCOzs7Ozs7Ozs7OztHQVdHO0FBU0gsTUFBTSxPQUFPLGFBQWMsU0FBUSxXQUEwQjtJQTJEekQsWUFBb0IsZ0JBQWlDO1FBQ2pELEtBQUssRUFBRSxDQUFDO1FBRFEscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUVqRCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDOzswR0FoRVEsYUFBYTs4RkFBYixhQUFhO0FBeUR0QjtJQURDLFFBQVEsRUFBRTs4Q0FDUzsyRkF6RFgsYUFBYTtrQkFSekIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixNQUFNLEVBQUUsS0FBSztvQkFDYixPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFLEVBRVI7aUJBQ0o7dUdBMERVLE9BQU87c0JBRmIsWUFBWTt1QkFBQyxTQUFTOztBQVkzQjs7O0dBR0c7QUFPSCxNQUFNLE9BQU8sY0FBZSxTQUFRLFNBQXlCO0lBQ3pEO1FBQ0ksS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7OzJHQUhRLGNBQWM7K0ZBQWQsY0FBYyxxRkFIVyxhQUFhOzJGQUd0QyxjQUFjO2tCQU4xQixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLE9BQU8sRUFBRTt3QkFDTCxRQUFRLEVBQUUsSUFBSSxlQUFlLENBQUMsYUFBYSxDQUFDO3FCQUMvQztpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkcmVuLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBsZXhCYXNlLCBBcnJheUJhc2UsIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuXG5cbmxldCBpbnB1dDogc3RyaW5nW10gPSBbJ2NvbGxhcHNlZCcsICdjb2xsYXBzaWJsZScsICdjb250ZW50JywgJ2Nzc0NsYXNzJywgJ21heCcsICdtaW4nLCAncmVzaXphYmxlJywgJ3NpemUnXTtcbmxldCBvdXRwdXRzOiBzdHJpbmdbXSA9IFtdO1xuLyoqXG4gKiAnZS1wYW5lc2V0dGluZ3MnIGRpcmVjdGl2ZSByZXByZXNlbnQgYSBwYW5lcyBvZiBhbmd1bGFyIHNwbGl0dGVyIFxuICogSXQgbXVzdCBiZSBjb250YWluZWQgaW4gYSBTcGxpdHRlciBjb21wb25lbnQoYGVqcy1zcGxpdHRlcmApLiBcbiAqIGBgYGh0bWxcbiAqIDxlanMtc3BsaXR0ZXIgaWQ9J3NwbGl0dGVyJyA+IFxuICogICA8ZS1wYW5lcz5cbiAqICAgIDxlLXBhbmUgc2l6ZSA9JzE1MHB4Jz48L2UtcGFuZT5cbiAqICAgIDxlLXBhbmUgc2l6ZSA9ICcyMCUnPjwvZS1wYW5lPlxuICogICA8L2UtcGFuZXM+XG4gKiA8L2Vqcy1zcGxpdHRlcj5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2UtcGFuZXM+ZS1wYW5lJyxcbiAgICBpbnB1dHM6IGlucHV0LFxuICAgIG91dHB1dHM6IG91dHB1dHMsICAgIFxuICAgIHF1ZXJpZXM6IHtcblxuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgUGFuZURpcmVjdGl2ZSBleHRlbmRzIENvbXBsZXhCYXNlPFBhbmVEaXJlY3RpdmU+IHtcbiAgICBwdWJsaWMgZGlyZWN0aXZlUHJvcExpc3Q6IGFueTtcblx0XG5cblxuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciBhIHBhbmUgaXMgY29sbGFwc2VkIG9yIG5vdCBjb2xsYXBzZWQgYXQgdGhlIGluaXRpYWwgcmVuZGVyaW5nIG9mIHNwbGl0dGVyLlxuICAgICAqIFxuICAgICAqIHslIGNvZGVCbG9jayBzcmM9J3NwbGl0dGVyL2NvbGxhcHNlZC9pbmRleC5tZCcgJX17JSBlbmRjb2RlQmxvY2sgJX1cbiAgICAgKiAgICAgXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgY29sbGFwc2VkOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIGEgcGFuZSBpcyBjb2xsYXBzaWJsZSBvciBub3QgY29sbGFwc2libGUuXG4gICAgICogXG4gICAgICogeyUgY29kZUJsb2NrIHNyYz0nc3BsaXR0ZXIvY29sbGFwc2libGUvaW5kZXgubWQnICV9eyUgZW5kY29kZUJsb2NrICV9XG4gICAgICogICAgIFxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgcHVibGljIGNvbGxhcHNpYmxlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgQ1NTIGNsYXNzIG5hbWVzIHRoYXQgZGVmaW5lcyBzcGVjaWZpYyB1c2VyLWRlZmluZWQgXG4gICAgICogc3R5bGVzIGFuZCB0aGVtZXMgdG8gYmUgYXBwZW5kZWQgb24gY29ycmVzcG9uZGluZyBwYW5lIG9mIHRoZSBTcGxpdHRlci4gXG4gICAgICogSXQgaXMgdXNlZCB0byBjdXN0b21pemUgdGhlIFNwbGl0dGVyIGNvbnRyb2wgcGFuZXMuIFxuICAgICAqIE9uZSBvciBtb3JlIGN1c3RvbSBDU1MgY2xhc3NlcyBjYW4gYmUgc3BlY2lmaWVkIHRvIHRoZSBTcGxpdHRlciBwYW5lcy5cbiAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAqL1xuICAgIHB1YmxpYyBjc3NDbGFzczogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIG1heGltdW0gc2l6ZSBvZiBhIHBhbmUuIFRoZSBwYW5lIGNhbm5vdCBiZSByZXNpemVkIGlmIGl0IGlzIG1vcmUgdGhhbiB0aGUgc3BlY2lmaWVkIG1heGltdW0gbGltaXQuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBtYXg6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBtaW5pbXVtIHNpemUgb2YgYSBwYW5lLiBUaGUgcGFuZSBjYW5ub3QgYmUgcmVzaXplZCBpZiBpdCBpcyBsZXNzIHRoYW4gdGhlIHNwZWNpZmllZCBtaW5pbXVtIHNpemUuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBtaW46IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSB2YWx1ZSB3aGV0aGVyIGEgcGFuZSBpcyByZXNpemFibGUuIEJ5IGRlZmF1bHQsIHRoZSBTcGxpdHRlciBpcyByZXNpemFibGUgaW4gYWxsIHBhbmVzLiBcbiAgICAgKiBZb3UgY2FuIGRpc2FibGUgdGhpcyBmb3IgYW55IHNwZWNpZmljIHBhbmVzIHVzaW5nIHRoaXMgcHJvcGVydHkuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuICAgIHB1YmxpYyByZXNpemFibGU6IGFueTtcbiAgICAvKiogXG4gICAgICogQ29uZmlndXJlcyB0aGUgcHJvcGVydGllcyBmb3IgZWFjaCBwYW5lLlxuICAgICAqIEBkZWZhdWx0ICcnXG4gICAgICovXG4gICAgcHVibGljIHNpemU6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBjb250ZW50IG9mIHNwbGl0IHBhbmUgYXMgcGxhaW4gdGV4dCwgSFRNTCBtYXJrdXAsIG9yIGFueSBvdGhlciBKYXZhU2NyaXB0IGNvbnRyb2xzLlxuICAgICAqIEBkZWZhdWx0ICcnXG4gICAgICogQGJsYXpvcnR5cGUgc3RyaW5nXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgnY29udGVudCcpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgY29udGVudDogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgc2V0VmFsdWUoJ2N1cnJlbnRJbnN0YW5jZScsIHRoaXMsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlUHJvcExpc3QgPSBpbnB1dDtcbiAgICB9XG59XG5cbi8qKlxuICogUGFuZSBBcnJheSBEaXJlY3RpdmVcbiAqIEBwcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZWpzLXNwbGl0dGVyPmUtcGFuZXMnLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRyZW46IG5ldyBDb250ZW50Q2hpbGRyZW4oUGFuZURpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBQYW5lc0RpcmVjdGl2ZSBleHRlbmRzIEFycmF5QmFzZTxQYW5lc0RpcmVjdGl2ZT4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigncGFuZXNldHRpbmdzJyk7XG4gICAgfVxufSJdfQ==