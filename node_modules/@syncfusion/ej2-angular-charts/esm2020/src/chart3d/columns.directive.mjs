import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['width'];
let outputs = [];
/**
 * Column3D Directive
 * ```html
 * <e-columns><e-column></e-column><e-columns>
 * ```
 */
export class Chart3DColumnDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
Chart3DColumnDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: Chart3DColumnDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
Chart3DColumnDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: Chart3DColumnDirective, selector: "e-chart3d-columns>e-chart3d-columns", inputs: { width: "width" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: Chart3DColumnDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-chart3d-columns>e-chart3d-columns',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Chart3DColumn Array Directive
 * @private
 */
export class Chart3DColumnsDirective extends ArrayBase {
    constructor() {
        super('columns');
    }
}
Chart3DColumnsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: Chart3DColumnsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
Chart3DColumnsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: Chart3DColumnsDirective, selector: "ejs-chart3d>e-chart3d-columns", queries: [{ propertyName: "children", predicate: Chart3DColumnDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: Chart3DColumnsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-chart3d>e-chart3d-columns',
                    queries: {
                        children: new ContentChildren(Chart3DColumnDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1ucy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2hhcnQzZC9jb2x1bW5zLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBSWhGLElBQUksS0FBSyxHQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDaEMsSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO0FBQzNCOzs7OztHQUtHO0FBU0gsTUFBTSxPQUFPLHNCQUF1QixTQUFRLFdBQW1DO0lBWTNFLFlBQW9CLGdCQUFpQztRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQURRLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFFakQsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7bUhBakJRLHNCQUFzQjt1R0FBdEIsc0JBQXNCOzJGQUF0QixzQkFBc0I7a0JBUmxDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLHFDQUFxQztvQkFDL0MsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLE9BQU8sRUFBRSxFQUVSO2lCQUNKOztBQXFCRDs7O0dBR0c7QUFPSCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsU0FBa0M7SUFDM0U7UUFDSSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7b0hBSFEsdUJBQXVCO3dHQUF2Qix1QkFBdUIsOEZBSEUsc0JBQXNCOzJGQUcvQyx1QkFBdUI7a0JBTm5DLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsT0FBTyxFQUFFO3dCQUNMLFFBQVEsRUFBRSxJQUFJLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQztxQkFDeEQ7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIENvbnRlbnRDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcGxleEJhc2UsIEFycmF5QmFzZSwgc2V0VmFsdWUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcblxuXG5cbmxldCBpbnB1dDogc3RyaW5nW10gPSBbJ3dpZHRoJ107XG5sZXQgb3V0cHV0czogc3RyaW5nW10gPSBbXTtcbi8qKlxuICogQ29sdW1uM0QgRGlyZWN0aXZlXG4gKiBgYGBodG1sXG4gKiA8ZS1jb2x1bW5zPjxlLWNvbHVtbj48L2UtY29sdW1uPjxlLWNvbHVtbnM+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlLWNoYXJ0M2QtY29sdW1ucz5lLWNoYXJ0M2QtY29sdW1ucycsXG4gICAgaW5wdXRzOiBpbnB1dCxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLCAgICBcbiAgICBxdWVyaWVzOiB7XG5cbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0M0RDb2x1bW5EaXJlY3RpdmUgZXh0ZW5kcyBDb21wbGV4QmFzZTxDaGFydDNEQ29sdW1uRGlyZWN0aXZlPiB7XG4gICAgcHVibGljIGRpcmVjdGl2ZVByb3BMaXN0OiBhbnk7XG5cdFxuXG5cbiAgICAvKiogXG4gICAgICogVGhlIHdpZHRoIG9mIHRoZSBjb2x1bW4gYXMgYSBzdHJpbmcgYWNjZXB0cyBpbnB1dCBib3RoIGFzIGxpa2UgJzEwMHB4JyBvciAnMTAwJScuIFxuICAgICAqIElmIHNwZWNpZmllZCBhcyAnMTAwJSwgY29sdW1uIHJlbmRlcnMgdG8gdGhlIGZ1bGwgd2lkdGggb2YgaXRzIGNoYXJ0LlxuICAgICAqIEBkZWZhdWx0ICcxMDAlJ1xuICAgICAqL1xuICAgIHB1YmxpYyB3aWR0aDogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgc2V0VmFsdWUoJ2N1cnJlbnRJbnN0YW5jZScsIHRoaXMsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlUHJvcExpc3QgPSBpbnB1dDtcbiAgICB9XG59XG5cbi8qKlxuICogQ2hhcnQzRENvbHVtbiBBcnJheSBEaXJlY3RpdmVcbiAqIEBwcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZWpzLWNoYXJ0M2Q+ZS1jaGFydDNkLWNvbHVtbnMnLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRyZW46IG5ldyBDb250ZW50Q2hpbGRyZW4oQ2hhcnQzRENvbHVtbkRpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBDaGFydDNEQ29sdW1uc0RpcmVjdGl2ZSBleHRlbmRzIEFycmF5QmFzZTxDaGFydDNEQ29sdW1uc0RpcmVjdGl2ZT4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignY29sdW1ucycpO1xuICAgIH1cbn0iXX0=