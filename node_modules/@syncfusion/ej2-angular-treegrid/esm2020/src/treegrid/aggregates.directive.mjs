import { Directive, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { AggregateColumnsDirective } from './aggregate-columns.directive';
import * as i0 from "@angular/core";
let input = ['columns', 'showChildSummary'];
let outputs = [];
/**
 * `e-aggregate` directive represent a aggregate row of the Angular TreeGrid.
 * It must be contained in a TreeGrid component(`ejs-treegrid`).
 * ```html
 * <ejs-treegrid [dataSource]='data' allowPaging='true' allowSorting='true'>
 *   <e-columns>
 *     <e-column field='ID' width='100'></e-column>
 *     <e-column field='name' headerText='Name' width='100'></e-column>
 *   </e-columns>
 *   <e-aggregates>
 *     <e-aggregate>
 *       <e-columns>
 *         <e-column field='ID' type='Min'></e-column>
 *       </e-columns>
 *      </e-aggregate>
 *    </e-aggregates>
 * </ejs-treegrid>
 * ```
 */
export class AggregateDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['columns'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
AggregateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AggregateDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
AggregateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AggregateDirective, selector: "ejs-treegrid>e-aggregates>e-aggregate", inputs: { columns: "columns", showChildSummary: "showChildSummary" }, queries: [{ propertyName: "childColumns", first: true, predicate: AggregateColumnsDirective, descendants: true }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AggregateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-treegrid>e-aggregates>e-aggregate',
                    inputs: input,
                    outputs: outputs,
                    queries: {
                        childColumns: new ContentChild(AggregateColumnsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Aggregate Array Directive
 * @private
 */
export class AggregatesDirective extends ArrayBase {
    constructor() {
        super('aggregates');
    }
}
AggregatesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AggregatesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
AggregatesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AggregatesDirective, selector: "ejs-treegrid>e-aggregates", queries: [{ propertyName: "children", predicate: AggregateDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AggregatesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-treegrid>e-aggregates',
                    queries: {
                        children: new ContentChildren(AggregateDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdHJlZWdyaWQvYWdncmVnYXRlcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0IsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVoRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFFMUUsSUFBSSxLQUFLLEdBQWEsQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztBQUN0RCxJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7QUFDM0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCRztBQVNILE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxXQUErQjtJQWVuRSxZQUFvQixnQkFBaUM7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFEUSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBWDlDLFNBQUksR0FBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBYWhDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7OytHQXBCUSxrQkFBa0I7bUdBQWxCLGtCQUFrQiw2TEFIUSx5QkFBeUI7MkZBR25ELGtCQUFrQjtrQkFSOUIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsdUNBQXVDO29CQUNqRCxNQUFNLEVBQUUsS0FBSztvQkFDYixPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFO3dCQUNMLFlBQVksRUFBRSxJQUFJLFlBQVksQ0FBQyx5QkFBeUIsQ0FBQztxQkFDNUQ7aUJBQ0o7O0FBd0JEOzs7R0FHRztBQU9ILE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxTQUE4QjtJQUNuRTtRQUNJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4QixDQUFDOztnSEFIUSxtQkFBbUI7b0dBQW5CLG1CQUFtQiwwRkFITSxrQkFBa0I7MkZBRzNDLG1CQUFtQjtrQkFOL0IsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxPQUFPLEVBQUU7d0JBQ0wsUUFBUSxFQUFFLElBQUksZUFBZSxDQUFDLGtCQUFrQixDQUFDO3FCQUNwRDtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkcmVuLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBsZXhCYXNlLCBBcnJheUJhc2UsIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZUNvbHVtbnNEaXJlY3RpdmUgfSBmcm9tICcuL2FnZ3JlZ2F0ZS1jb2x1bW5zLmRpcmVjdGl2ZSc7XG5cbmxldCBpbnB1dDogc3RyaW5nW10gPSBbJ2NvbHVtbnMnLCAnc2hvd0NoaWxkU3VtbWFyeSddO1xubGV0IG91dHB1dHM6IHN0cmluZ1tdID0gW107XG4vKipcbiAqIGBlLWFnZ3JlZ2F0ZWAgZGlyZWN0aXZlIHJlcHJlc2VudCBhIGFnZ3JlZ2F0ZSByb3cgb2YgdGhlIEFuZ3VsYXIgVHJlZUdyaWQuIFxuICogSXQgbXVzdCBiZSBjb250YWluZWQgaW4gYSBUcmVlR3JpZCBjb21wb25lbnQoYGVqcy10cmVlZ3JpZGApLiBcbiAqIGBgYGh0bWxcbiAqIDxlanMtdHJlZWdyaWQgW2RhdGFTb3VyY2VdPSdkYXRhJyBhbGxvd1BhZ2luZz0ndHJ1ZScgYWxsb3dTb3J0aW5nPSd0cnVlJz4gXG4gKiAgIDxlLWNvbHVtbnM+XG4gKiAgICAgPGUtY29sdW1uIGZpZWxkPSdJRCcgd2lkdGg9JzEwMCc+PC9lLWNvbHVtbj5cbiAqICAgICA8ZS1jb2x1bW4gZmllbGQ9J25hbWUnIGhlYWRlclRleHQ9J05hbWUnIHdpZHRoPScxMDAnPjwvZS1jb2x1bW4+XG4gKiAgIDwvZS1jb2x1bW5zPlxuICogICA8ZS1hZ2dyZWdhdGVzPlxuICogICAgIDxlLWFnZ3JlZ2F0ZT5cbiAqICAgICAgIDxlLWNvbHVtbnM+XG4gKiAgICAgICAgIDxlLWNvbHVtbiBmaWVsZD0nSUQnIHR5cGU9J01pbic+PC9lLWNvbHVtbj5cbiAqICAgICAgIDwvZS1jb2x1bW5zPlxuICogICAgICA8L2UtYWdncmVnYXRlPlxuICogICAgPC9lLWFnZ3JlZ2F0ZXM+XG4gKiA8L2Vqcy10cmVlZ3JpZD5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2Vqcy10cmVlZ3JpZD5lLWFnZ3JlZ2F0ZXM+ZS1hZ2dyZWdhdGUnLFxuICAgIGlucHV0czogaW5wdXQsXG4gICAgb3V0cHV0czogb3V0cHV0cywgICAgXG4gICAgcXVlcmllczoge1xuICAgICAgICBjaGlsZENvbHVtbnM6IG5ldyBDb250ZW50Q2hpbGQoQWdncmVnYXRlQ29sdW1uc0RpcmVjdGl2ZSlcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIEFnZ3JlZ2F0ZURpcmVjdGl2ZSBleHRlbmRzIENvbXBsZXhCYXNlPEFnZ3JlZ2F0ZURpcmVjdGl2ZT4ge1xuICAgIHB1YmxpYyBkaXJlY3RpdmVQcm9wTGlzdDogYW55O1xuXHRcbiAgICBwdWJsaWMgY2hpbGRDb2x1bW5zOiBhbnk7XG4gICAgcHVibGljIHRhZ3M6IHN0cmluZ1tdID0gWydjb2x1bW5zJ107XG4gICAgLyoqIFxuICAgICAqIENvbmZpZ3VyZXMgdGhlIGFnZ3JlZ2F0ZSBjb2x1bW5zLlxuICAgICAqIEBkZWZhdWx0IFtdXG4gICAgICovXG4gICAgcHVibGljIGNvbHVtbnM6IGFueTtcbiAgICAvKiogXG4gICAgICogRGlzcGxheSB0aGUgY2hpbGRTdW1tYXJ5IGZvciBlYWNoIHBhcmVudC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2hvd0NoaWxkU3VtbWFyeTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgc2V0VmFsdWUoJ2N1cnJlbnRJbnN0YW5jZScsIHRoaXMsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlUHJvcExpc3QgPSBpbnB1dDtcbiAgICB9XG59XG5cbi8qKlxuICogQWdncmVnYXRlIEFycmF5IERpcmVjdGl2ZVxuICogQHByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlanMtdHJlZWdyaWQ+ZS1hZ2dyZWdhdGVzJyxcbiAgICBxdWVyaWVzOiB7XG4gICAgICAgIGNoaWxkcmVuOiBuZXcgQ29udGVudENoaWxkcmVuKEFnZ3JlZ2F0ZURpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBBZ2dyZWdhdGVzRGlyZWN0aXZlIGV4dGVuZHMgQXJyYXlCYXNlPEFnZ3JlZ2F0ZXNEaXJlY3RpdmU+IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2FnZ3JlZ2F0ZXMnKTtcbiAgICB9XG59Il19